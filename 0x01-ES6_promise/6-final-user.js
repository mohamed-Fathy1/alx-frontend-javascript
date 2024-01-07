import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

/* eslint-disable no-unused-vars */
export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(),
    uploadPhoto(),
  ]);
}
