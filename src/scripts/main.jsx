import {init} from './store/reducers'
import App from './components/App.jsx'

console.log('Start main script')
console.log('-----------------')

ReactDOM.render(<App />, document.getElementById('root'))
init()
