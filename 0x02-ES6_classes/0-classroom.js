export default class ClassRoom {
  constructor(maxStudentsSize) {
    if (typeof maxStudentsSize !== 'number') { throw new TypeError('maxStudentsSize must be of type Number'); }
    this._maxStudentsSize = maxStudentsSize;
  }
}
