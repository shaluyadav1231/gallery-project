import React from 'react'

const App = () => {
  const GetData =()=>{
    console.log("data aa gya")
  }
  return (
    <div 
    onClick={GetData}
    className='bg-black h-screen p-4 text-white'>
      <button className='bg-green-600 active:scale-95 mb-3 px-5 py-2 rounded text-white '>GetData</button>
    </div>
  )
}

export default App