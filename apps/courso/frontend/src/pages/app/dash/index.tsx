import React from 'react';
import { PageHead } from '../../../components/PageHead';
import { useCurrentUser } from '../../../hooks/useCurrentUser';
import { Wip } from '../../../components/Wip';
import { Feedback } from '../../../components/Feedback';
import gql from 'graphql-tag';
import { getNavLayout } from '../../../layouts/NavBar';

gql`
  query fetchDataForStudentDashboard {
    practiceToStudent {
      submited
      studentGrade {
        grade
        gradeDetail
      }
      studentFeedback {
        feedback
      }
      practiceToCourse {
        is_open
        course {
          name
        }
        practice {
          title
        }
      }
    }
  }
`;

export const Dash = () => {
  const { user } = useCurrentUser();

  return (
    <>
      <PageHead>Dash</PageHead>
      <div>
        <div>Logged as {user?.email}</div>
        <Feedback />
      </div>
      <Wip
        todo={[
          'Short list of what is up on the platform (grades, handoff, ...)',
          `Prettier print than what's there...`,
        ]}
      />
    </>
  );
};

Dash.getLayout = getNavLayout;

export default Dash;
