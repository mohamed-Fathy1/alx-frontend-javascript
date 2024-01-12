export default function setFromArray(set, val) {
  let bool = true;
  val.forEach((item) => {
    if (!set.has(item)) {
      bool = false;
    }
  });
  return bool;
}
