import { useState } from 'react'
// import './App.css'

function App() {

  const [color, setColor] = useState("olive")

  return<>
  <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
  <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
    <div className='flex flex-wrap gap-3 justify-center bg-white shadow-lg px-3  py-3 rounded-3xl'>
      <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "red"}} onClick={() => setColor("red")}>RED</button>
      
      <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "pink"}} onClick={() => setColor("pink")}>Pink</button>
      
      <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "green"}} onClick={() => setColor("green")}>Green</button>
      
      <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' onClick={() => setColor("blue")} style={{backgroundColor: "blue"}}>Blue</button>
      
      <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "olive"}} onClick={() => setColor("olive")}>Olive</button>
      
      <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' onClick={() => setColor("gray")} style={{backgroundColor: "gray"}}>Gray</button>
      
      <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor: "yellow"}} onClick={() => setColor("yellow")}>Yellow</button>
      
      <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' onClick={() => setColor("purple")} style={{backgroundColor: "purple"}}>Purple</button>
    
      <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "lavender"}} onClick={() => setColor("lavender")}>Lavender</button>
      
      <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg' onClick={() => setColor("white")} style={{backgroundColor: "white"}}>White</button>
      
      <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "black"}} onClick={() => setColor("black")}>Black</button>
    </div>

  </div>
  </div>
</> 
}
export default App
