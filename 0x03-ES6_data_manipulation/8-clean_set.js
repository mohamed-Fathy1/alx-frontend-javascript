export default function cleanSet(set, startString) {
  return [...set].map((item) => {
    if (startString && item.startsWith(startString) && typeof item === 'string') {
      /* eslint-disable no-param-reassign */
      item = item.replace(startString, '');
    } else {
      return '';
    }
    return item;
  })
    .filter((item) => item !== '')
    .join('-');
}
