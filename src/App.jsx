import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);
  const GetData = async () => {
    const responce = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=15`
    );

    setUserData(responce.data);
  };

  useEffect(function () {
    GetData();
  }, [index]);

  let printUserData = "Loading";
  if (printUserData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return (
        <div key={idx}>

          <Card elem={elem}/>
         
        </div>
      );
    });
  }
  return (
    <div className="bg-black h-screen overflow-auto p-4 text-white">
      <h1 className="fixed bg-red-500 text-6xl">{index}</h1>
      <div className="flex  flex-wrap gap-4">{printUserData}</div>

      <div className="flex justify-center gap-6 items-center p-4">
        <button
        style={{opacity:index==1?0.6:1}}
        onClick={()=>{
          if (index>1){
             setIndex(index-1)
             setUserData([])
          }
            
        }}
        className="bg-amber-500 text-black rounded px-4 py-2 text-sm cursor-pointer active:scale95 font-semibold">
          Prev
        </button>
        <h4>Page {index}</h4>
        <button 
        onClick={()=>{
            setIndex(index+1)
              setUserData([])
        }}
        className="bg-amber-500 text-black rounded px-4 py-2 text-sm cursor-pointer active:scale95 font-semibold">
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
