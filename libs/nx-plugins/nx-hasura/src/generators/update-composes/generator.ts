import {
  addProjectConfiguration,
  getProjects,
  formatFiles,
  generateFiles,
  Tree,
  readProjectConfiguration,
  runTasksInSerial,
  addDependenciesToPackageJson,
} from '@nx/devkit';
import * as path from 'path';
import * as yaml from 'js-yaml';
import { UpdateComposesGeneratorSchema } from './schema';
import { HASURA_VERSION } from '../app/versions';

type DockerComposeService = {
  [serviceName: string]: {
    image?: string;
    // define other properties as needed; i.e., ports, volumes, etc.
    [propName: string]: unknown;
  };
};

type DockerCompose = {
  services?: DockerComposeService;
  // define other properties as needed; i.e., version, networks, etc.
  [propName: string]: unknown;
};

function checkHasuraEngineInComposeFile(fileContents: string) {
  try {
    const data = yaml.load(fileContents) as DockerCompose;

    const services = data?.services;
    if (!services) {
      console.log('No services are defined in the docker-compose file.');
      return false;
    }

    for (const service in services) {
      if (
        services[service].image &&
        services[service].image.startsWith('hasura/graphql-engine')
      ) {
        console.log(
          `Hasura service ${service} is defined in the docker-compose file.`
        );
        return true;
      }
    }
  } catch (e) {
    console.error(e);
    return false;
  }

  console.log('No Hasura service is defined in the docker-compose file.');
  return false;
}

function updateHasuraEngineVersionFile(
  fileContents: string,
  version: string
): string {
  try {
    const data = yaml.load(fileContents) as DockerCompose;

    const services = data?.services;
    if (!services) {
      console.log('No services are defined in the docker-compose file.');
      return;
    }

    for (const service in services) {
      if (
        services[service].image &&
        services[service].image.startsWith('hasura/graphql-engine')
      ) {
        services[service].image = `hasura/graphql-engine:${version}`;
        console.log(
          `Hasura service ${service} image version updated to ${version}.`
        );
      }
    }

    // Update the docker-compose.yml file
    return yaml.dump(data);
  } catch (e) {
    console.error(e);
    throw e;
  }
}

function updateDockerCompose(tree: Tree, projectName: string, version: string) {
  const project = readProjectConfiguration(tree, projectName);
  const dockerComposePath = path.join(project.root, 'docker-compose.yml');
  const dockerCompose = tree.read(dockerComposePath).toString();
  tree.write(
    dockerComposePath,
    updateHasuraEngineVersionFile(dockerCompose, version)
  );
}

async function findAllHasuraProjects(tree: Tree) {
  const projects: string[] = [];
  getProjects(tree).forEach((value, key) => {
    if (value.projectType !== 'application') {
      return;
    }
    const dockerComposePath = path.join(value.root, 'docker-compose.yml');
    if (!tree.exists(path.join(value.root, 'docker-compose.yml'))) {
      return;
    }
    const dockerCompose = tree.read(dockerComposePath).toString();
    if (!checkHasuraEngineInComposeFile(dockerCompose)) {
      return;
    }
    projects.push(key);
  });
  return projects;
}

export async function updateComposesGenerator(
  tree: Tree,
  options: UpdateComposesGeneratorSchema
) {
  const allProjects = await findAllHasuraProjects(tree);
  console.log(allProjects);
  allProjects.forEach((project) => {
    console.log('Updating project ', project);
    updateDockerCompose(tree, project, HASURA_VERSION);
  });
  await formatFiles(tree);

  return runTasksInSerial(
    addDependenciesToPackageJson(tree, {}, { 'hasura-cli': HASURA_VERSION })
  );
}

export default updateComposesGenerator;
