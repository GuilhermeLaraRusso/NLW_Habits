import './styles/global.css';
import { Habit } from './components/Habit'

function App() {
  return (
    <div>
      <Habit completed={3} />
      <Habit completed={361} />
      <Habit completed={132} />
      <Habit completed={124} />

    </div>
  )
}

export default App
