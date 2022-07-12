import logo from './logo.svg';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import TaskWindow from './components/TaskWindow';

function App() {
  library.add(fas);
  return (
    <div className="App mt-6 mx-2">
      <TaskWindow/>
    </div>
  );
}

export default App;
