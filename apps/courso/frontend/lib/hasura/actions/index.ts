import { ActionMap } from './types';
import { sendStudentClaimMail } from './sendStudentClaimMail';
import { linkStudentToUser } from './linkStudentToUser';
import { submitHandoff } from './submitHandoff';
import { refreshGrades } from './refreshGrades';
import { fillEmptyYields } from './fillEmptyYields';
import { getGitFileData } from './getGitFileData';
import { getGitLogData } from './getGitLogData';

export const actionMap: ActionMap = {
  sendStudentClaimMail,
  linkStudentToUser,
  submitHandoff,
  refreshGrades,
  fillEmptyYields,
  getGitFileData,
  getGitLogData,
};
