import { useState } from 'react'
import './App.css'
import Checkbox from './components/checkBox/checkBox'

function App() {

  const [value,setValue] = useState(false)

  return (
    <div className='w-dvw h-dvh flex items-center justify-center'>
      <Checkbox setValue={(e) => setValue(e)} value={value} format='square' />
    </div>
  )
}

export default App
