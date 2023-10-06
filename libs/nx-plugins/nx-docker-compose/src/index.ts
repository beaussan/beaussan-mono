import { dirname } from 'path';
import { CreateNodes } from '@nx/devkit';
import * as yaml from 'js-yaml';
import * as fs from 'fs';

type DockerComposeService = {
  [serviceName: string]: {
    // define other properties as needed; i.e., ports, volumes, etc.
    [propName: string]: unknown;
  };
};

type DockerCompose = {
  services?: DockerComposeService;
  // define other properties as needed; i.e., version, networks, etc.
  [propName: string]: unknown;
};

export const createNodes: CreateNodes = [
  '**/docker-compose.yml',
  (dockerComposeFile) => {
    try {
      const projectRoot = dirname(dockerComposeFile);

      const dockerComposeAsString = fs.readFileSync(dockerComposeFile, 'utf-8');

      const data = yaml.load(dockerComposeAsString) as DockerCompose;

      const targetNames = Object.keys(data.services);

      const createCommand = (command: string) => ({
        commands: [command],
        cwd: projectRoot,
        parallel: false,
      });

      const mapServices = (
        mapper: (serviceName: string) => ReturnType<typeof createCommand>
      ) => {
        return Object.assign(
          {},
          ...targetNames.map((service) => ({
            [service]: mapper(service),
          }))
        );
      };

      return {
        projects: {
          // Doesn't matter since it will read root and match it to an existing project
          ['docker-project']: {
            root: projectRoot,
            targets: {
              'docker-compose-up': {
                executor: 'nx:run-commands',
                options: createCommand('docker compose up -d --wait'),
                configurations: mapServices((service) =>
                  createCommand(`docker compose up -d --wait ${service}`)
                ),
              },
              'docker-compose-logs': {
                executor: 'nx:run-commands',
                options: createCommand('docker compose logs -f'),
                configurations: mapServices((service) =>
                  createCommand(`docker compose logs -f ${service}`)
                ),
              },
              'docker-compose-stop': {
                executor: 'nx:run-commands',
                options: createCommand('docker compose stop'),
                configurations: mapServices((service) =>
                  createCommand(`docker compose stop ${service}`)
                ),
              },
              'docker-compose-down': {
                executor: 'nx:run-commands',
                options: createCommand('docker compose down'),
                configurations: {
                  'with-volumes': createCommand('docker compose down -v'),
                },
              },
            },
          },
        },
      };
    } catch (e) {
      console.error(e);
      return {};
    }
  },
];
