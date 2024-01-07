import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const photos = uploadPhoto();
  const users = createUser();

  return Promise.all([
    photos,
    users,
  ])
    .then((data) => {
      console.log(`${data[0].body} ${data[1].firstName} ${data[1].lastName} `);
    })
    .catch(() => { console.log('Signup system offline'); });
}
