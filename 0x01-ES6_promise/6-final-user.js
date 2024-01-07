import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ])
    .then((data) => {
      const result = [];
      data.forEach((item) => {
        const value = { status: item.status };
        if (item.status === 'fulfilled') {
          value.value = item.value;
        } else {
          value.reason = String.toString(item.reason);
        }
        result.push(value);
      });
      return result;
    });
}
