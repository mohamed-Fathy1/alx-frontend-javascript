import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]);
  // .then((data) => {
  //   const result = [];
  //   data.forEach((item) => {
  //     if (item.status === 'fulfilled') {
  //       console.log(item.value);
  //       result.push(item.value);
  //     } else {
  //       console.log(item.reason);
  //       result.push(item.reason);
  //     }
  //   });
  //   return result;
  // });
}
