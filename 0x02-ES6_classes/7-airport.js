export default class Airport {
  constructor(name, code) {
    if (typeof name !== 'string' || typeof code !== 'string') {
      throw new TypeError('Name and code must be a string');
    }
    this._name = name;
    this._code = code;
  }

  toString() {
    return `[object ${this._code}]`;
  }
}
