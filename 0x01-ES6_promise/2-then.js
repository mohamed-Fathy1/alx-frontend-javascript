export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    if (promise) {
      resolve({
        status: 200,
        body: 'Success',
      });
    } else { reject(); }
  })
    .then((data) => data)
    .catch(Error())
    .finally(console.log('Got a response from the API'));
}
