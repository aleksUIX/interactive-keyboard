import { keyCodes } from '../../data.js'

export default class KeyboardData {
  constructor() {
    this.keyData = [];
    this.keyCodes = keyCodes;
    this.bindClick();
  }

  bindClick() {
    var doc = document;
    doc.addEventListener('keydown', this.clickHandler.bind(this))
  }

  clickHandler(e) {
    this.keyData.push({
      time: new Date(),
      code: e.keyCode,
      name: this.keyCodes[parseInt(e.keyCode)]
    })
  }
}
