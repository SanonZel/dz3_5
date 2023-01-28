import { useState } from 'react'
import './App.css'
import { useDebounce } from './hooks/useDebounce'
function App() {
  const [value,setValue] = useState('')
  const debouncedValue = useDebounce(value,500)
  const handleChange =(e)=>{
    setValue(e.target.value)
  }
  return (
    <div className='App'>
     <h1>
     debounced {debouncedValue}
     </h1>
      <br />
 <h1>  value {value}</h1>
      <input type="text"  onChange={handleChange}  />
    </div>
  )
}

export default App