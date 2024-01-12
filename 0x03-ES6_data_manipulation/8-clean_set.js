export default function cleanSet(set, val) {
  return [...set].map((item) => {
    if (item.startsWith(val) && typeof item === 'string') {
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
