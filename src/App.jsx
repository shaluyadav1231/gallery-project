import axios from 'axios'
import React, { useState } from 'react'

const App = () => {

const [userData, setUserData] = useState([])

  const GetData =async()=>{
    const responce = await axios.get("https://picsum.photos/v2/list?page=2&limit=30")

    setUserData(responce.data)
    console.log(responce.data)
  }

  let printUserData="No User Available"

  if(printUserData.length>0){
    printUserData=userData.map(function(elem,idx){
      return <img src={elem.download_url} alt="" />
    })
  }
  return (
    <div 
    onClick={GetData}
    className='bg-black h-screen overflow-auto p-4 text-white'>
      <button className='bg-green-600 active:scale-95 mb-3 px-5 py-2 rounded text-white '>GetData</button>

   <div>
    {
      printUserData
    }
   </div>

    </div>
  )
}

export default App