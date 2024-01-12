export default function cleanSet(set, startString) {
  if (startString === '' || typeof startString !== 'string') return '';
  return [...set].map((item) => {
    if (typeof item === 'string' && item.startsWith(startString)) {
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
