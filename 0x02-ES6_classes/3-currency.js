export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // Getters
  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  // Setters
  set code(code) {
    this._code = code;
  }

  set name(name) {
    this._name = name;
  }

  // Methods
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
