export default function cleanSet(set, val) {
  return [...set].map((item) => {
    if (val && item.includes(val)) {
      /* eslint-disable no-param-reassign */
      item = item.replace(val, '');
    } else {
      return '';
    }
    return item;
  })
    .filter((item) => item !== '')
    .join('-');
}
