export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  set code(code_) {
    this._code = code_;
  }

  set name(name_) {
    this._name = name_;
  }

  displayFullCurrency() {
    return `${this.name} (${this._code})`;
  }
}
