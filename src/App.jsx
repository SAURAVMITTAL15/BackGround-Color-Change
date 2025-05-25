import { useState } from 'react'
// import './App.css'

function App() {

  const [color, setColor] = useState("olive")

  return<>
  <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
  <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
    <div className='flex flex-wrap gap-3 justify-center bg-white shadow-lg px-3  py-3 rounded-3xl'>
      <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' onClick={() => setColor("red")}>RED</button>
      
      <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'>Pink</button>
      
      <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'>Green</button>
      
      <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'>Blue</button>
      
      <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'>Olive</button>
      
      <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'>Gray</button>
      
      <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'>Yellow</button>
      
      <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'>Purple</button>
    
      <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'>Lavender</button>
      
      <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'>White</button>
      
      <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'>Black</button>
    </div>

  </div>
  </div>
</> 
}
export default App
