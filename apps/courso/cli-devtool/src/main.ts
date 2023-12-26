import { prompt } from 'enquirer';
import {
  AllowedRolesConstraint,
  AllowedRolesUpdateColumn,
  CourseInsertInput,
  PracticeInsertInput,
  PracticeYieldExpectedOutputTypesEnum,
  PracticeYieldTypeEnum,
  RolesEnum,
  UserInsertInput,
} from './generated/graphql';
import { faker } from '@faker-js/faker';
import { formatHasuraDate } from '@beaussan/shared/utils/hasura-ts';
import { UniqueEnforcer } from 'enforce-unique';
import { gqlSdk } from './gql';

const uniqueEnforcerEmails = new UniqueEnforcer();

const generateCourseInput = (courseName: string): CourseInsertInput => {
  return {
    id: faker.string.uuid(),
    name: courseName,
    years: '2022 - 2023',
    canStudentSeeFeedback: false,
    canStudentSeeGrade: false,
  };
};

const generateStudentInput = (courseId: string[]): UserInsertInput => {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const email = uniqueEnforcerEmails.enforce(() =>
    faker.internet.email({ firstName, lastName })
  );
  return {
    id: faker.string.uuid(),
    defaultRole: RolesEnum.Student,
    emailVerified: formatHasuraDate(faker.date.past()),
    email: email,
    student: {
      data: {
        id: faker.string.uuid(),
        lastName,
        firstName,
        email,
        studentToCourses: {
          data: courseId.map((it) => ({ courseId: it })),
        },
      },
    },
    name: `${firstName} ${lastName}`,
    allowedRoles: {
      data: [{ role: RolesEnum.Student }],
      onConflict: {
        constraint: AllowedRolesConstraint.AllowedRolesPkey,
        updateColumns: [AllowedRolesUpdateColumn.Role],
      },
    },
  };
};

const createTeacher = (): UserInsertInput => {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const email = 'teacher@test.com';
  return {
    id: faker.string.uuid(),
    defaultRole: RolesEnum.Teacher,
    emailVerified: formatHasuraDate(faker.date.past()),
    email: email,
    name: `${firstName} ${lastName}`,
    allowedRoles: {
      data: [{ role: RolesEnum.Teacher }],
      onConflict: {
        constraint: AllowedRolesConstraint.AllowedRolesPkey,
        updateColumns: [AllowedRolesUpdateColumn.Role],
      },
    },
  };
};

const createPracticeTypescript = (courseId: string): PracticeInsertInput => {
  return {
    id: faker.string.uuid(),
    title: 'Typescript and react',
    description:
      'In this exercise, your objective is to use what you have learned to type a react project.',
    practiceToCourses: {
      data: [
        {
          courseId,
          id: faker.string.uuid(),
          openDate: formatHasuraDate(new Date()),
          closeDate: formatHasuraDate(faker.date.future()),
        },
      ],
    },
    practiceYields: {
      data: [
        {
          id: faker.string.uuid(),
          description: 'The git repo url where you completed the project in',
          name: 'git repo',
          method: PracticeYieldTypeEnum.GitRepo,
          practiceYieldExpectedOutputs: {
            data: [
              {
                method: PracticeYieldExpectedOutputTypesEnum.CompareGitFile,
                expected: `...
type Todo = {
  label: string;
  status: 'open' | 'done' | 'archived';
  id: string;
}

const generateFakeTodoItem = (): Todo => ({
...
});

const generateNTodo = (size): Todo[] => {
...
};

const initialList: Todo[] = [
  ...
];

type TodoItemProps = Pick<Todo, 'status' | 'label'> & {
  onChecked: (newStatus: Todo['status']) => void
};

const TodoItem = ({ status, label, onChecked }: TodoItemProps) => {
  return (
    ...
  );
};


function App() {
  const [todoList, setTodoList] = useState<Todo[]>(initialList);

  const updater = (id: string, newStatus: Todo['status']) => {
    ...
  };

  return (
    <div className="bg-white shadow rounded-lg py-8">
      <div className="divide-gray-300 divide-y">
        {todoList.map((item) => (
          <TodoItem
            key={item.id}
            label={item.label}
            status={item.status}
            onChecked={(newState) => updater(item.id, newState)}
          />
        ))}
      </div>
    </div>
  );
}
`,
                codeLang: 'typescript',
                gitPath: 'src/App.tsx',
                practiceYieldGradeMetrics: {
                  data: [
                    {
                      points: 5,
                      name: "Used an union for Todo's status",
                      feedbacks: [],
                    },
                    {
                      points: 4,
                      name: 'Reused type in all cases',
                      feedbacks: [],
                    },
                    {
                      points: 4,
                      name: 'onChecked is properly typed',
                      feedbacks: [],
                    },
                    {
                      points: 3,
                      name: "TodoItem props is done using an union of Todo's properties using pick",
                      feedbacks: [],
                    },
                  ],
                },
              },
              {
                method: PracticeYieldExpectedOutputTypesEnum.ShowGitLog,
                expected: 'Student should have done it by himself',
                practiceYieldGradeMetrics: {
                  data: [
                    {
                      points: 2,
                      name: 'Student did it alone',
                      feedbacks: [
                        `You didn't complete the exercise by yourself`,
                      ],
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  };
};

function waitForGiteaOrgNameToShowUp(
  practiceToCourseId: string
): Promise<void> {
  console.log('Waiting for answer from webhook...');
  return new Promise(function (resolve, reject) {
    (async function waitForFoo(attempt = 0) {
      const result = await gqlSdk.watchForGiteaOrgDone({
        _eq: practiceToCourseId,
      });
      if (
        result.practiceToCourse.length === 1 &&
        result.practiceToCourse[0].giteaOrgName
      )
        return resolve();
      if (attempt >= 20)
        return reject(
          new Error('Timeout: Foo could not be set within one second.')
        );
      console.log('.');
      setTimeout(() => waitForFoo(attempt + 1), 200);
    })();
  });
}

async function seedDatabase(includeAllHandoff: boolean) {
  console.log('Creating DevOps 101 course');
  const devopsCourse = generateCourseInput('DevOps 101');
  await gqlSdk.insertCourse({ object: devopsCourse });
  console.log('Create typescript 201 course');
  const typescriptCourse = generateCourseInput('Typescript 201');
  await gqlSdk.insertCourse({ object: typescriptCourse });

  console.log('Creating student, and adding them to the courses');
  const lotsOfStudents = Array.from({ length: 20 }, () =>
    generateStudentInput([devopsCourse.id])
  );
  const fourStudents = Array.from({ length: 4 }, () =>
    generateStudentInput([typescriptCourse.id])
  );
  fourStudents[0].email = 'student1@test.com';
  fourStudents[0].student.data.email = 'student1@test.com';

  await gqlSdk.insertUsers({ objects: lotsOfStudents });
  await gqlSdk.insertUsers({ objects: fourStudents });
  console.log('Create teacher');
  const teacher = createTeacher();
  await gqlSdk.insertUsers({ objects: [teacher] });

  const practice = createPracticeTypescript(typescriptCourse.id);

  await gqlSdk.insertPractice({ object: practice });

  const practiceToCourseId = practice.practiceToCourses.data[0].id;
  const yieldId = practice.practiceYields.data[0].id;

  await waitForGiteaOrgNameToShowUp(practiceToCourseId);

  if (includeAllHandoff) {
    await gqlSdk.submitHandoff(
      {
        yields: [
          {
            yieldId,
            value: 'https://github.com/demo-courso/student-1-ts-react',
          },
        ],
        practiceToPromotionId: practiceToCourseId,
      },
      {
        'x-hasura-user-id': fourStudents[0].id,
        'x-hasura-role': 'student',
      }
    );
  }

  await gqlSdk.submitHandoff(
    {
      yields: [
        {
          yieldId,
          value: 'https://github.com/demo-courso/student-2-ts-react',
        },
      ],
      practiceToPromotionId: practiceToCourseId,
    },
    {
      'x-hasura-user-id': fourStudents[1].id,
      'x-hasura-role': 'student',
    }
  );

  await gqlSdk.submitHandoff(
    {
      yields: [
        {
          yieldId,
          value: 'https://github.com/demo-courso/student-3-ts-react',
        },
      ],
      practiceToPromotionId: practiceToCourseId,
    },
    {
      'x-hasura-user-id': fourStudents[2].id,
      'x-hasura-role': 'student',
    }
  );

  await gqlSdk.submitHandoff(
    {
      yields: [
        {
          yieldId,
          value: 'https://github.com/demo-courso/student-4-ts-react',
        },
      ],
      practiceToPromotionId: practiceToCourseId,
    },
    {
      'x-hasura-user-id': fourStudents[3].id,
      'x-hasura-role': 'student',
    }
  );

  console.log('Done !');
  console.log(`

Teacher email: teacher@test.com
Student 1 email: student1@test.com

`);
}

async function clean() {
  console.log('Clearing student output');
  await gqlSdk.clearPracticeToStudent();
  console.log('Deleting all practices');
  await gqlSdk.clearPracticesToCourses();
  await gqlSdk.clearPractices();
  console.log('Deleting all courses');
  await gqlSdk.clearCourses();
  console.log('Clearing all students...');
  await gqlSdk.clearStudents();
  console.log('Clearing all users...');
  await gqlSdk.clearAllUsers();
  console.log('Done !');
}

async function run() {
  const { what } = await prompt<{
    what: 'seed' | 'clean' | 'stop' | 'all-seed';
  }>({
    type: 'select',
    message: 'What do you want to do ?',
    name: 'what',
    choices: [
      { name: 'seed', message: 'Partial seed database' },
      { name: 'all-seed', message: 'Full seed database' },
      { name: 'clean', message: 'Clean database' },
      { name: 'stop', message: 'Stop the cli' },
    ],
  });
  if (what === 'stop') {
    console.log('Stopping.');
    return;
  }

  if (what === 'seed' || what === 'all-seed') {
    try {
      await seedDatabase(what === 'all-seed');
    } catch (e) {
      console.log('There was an issue while seeding.');
      console.error(e);
    }
  }
  if (what === 'clean') {
    try {
      await clean();
    } catch (e) {
      console.log('There was an issue while cleaning');
      console.error(e);
    }
  }
  run();
}

run();
