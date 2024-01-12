export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }
  const Int8View = new Int8Array(buffer);
  Int8View[position] = value;
  const dataView = new DataView(buffer);
  return dataView;
}
