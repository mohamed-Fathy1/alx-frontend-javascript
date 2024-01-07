export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    if (promise) {
      resolve();
    } else { reject(); }
  })
    .then({
      status: 200,
      body: 'Success',
    })
    .catch(new Error())
    .finally(console.log('Got a response from the API'));
}
