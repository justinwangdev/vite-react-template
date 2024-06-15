import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='h-screen flex flex-col space-y-4 justify-center items-center'>
        <h1 className='text-6xl font-bold bg-gradient-to-br from-blue-400 via-purple-300 to-pink-500 bg-clip-text text-transparent'>Vite Template: React+Tailwind</h1>
        <button className=' border-blue-500 border-2 px-4 py-2 rounded-lg hover:bg-slate-100' onClick={() => setCount(count+1)}>Increament</button>
        <p>clicks: {count}</p>
      </div>
    </>
  )
}

export default App
