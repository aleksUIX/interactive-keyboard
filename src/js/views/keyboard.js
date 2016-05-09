import KeyboardData from '../services/keyboardData'
import KeyboardRenderer from '../renderers/keyboardRenderer'


export default class Keyboard {
  constructor() {
    const data = new KeyboardData();
    const renderer = new KeyboardRenderer();
    console.log(KeyboardData, KeyboardRenderer, 'build keyboard')
  }
}
