export default function iterateThroughObject(reportWithIterator) {
  const result = [];
  for (const value of reportWithIterator) {
    result.push(value);
  }
  return result.join(' | ');
}
