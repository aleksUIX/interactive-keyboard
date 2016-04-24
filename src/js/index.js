import Keyboard from './views/keyboard'
import KeyboardData from './services/keyboard'


class App {
  constructor() {
    console.log('initiated')
    const keyboard = new Keyboard()
    const keyboardData = new KeyboardData()
  }
}

const app = new App()
