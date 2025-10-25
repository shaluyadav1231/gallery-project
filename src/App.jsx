import axios from "axios";
import React, { useEffect, useState } from "react";

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

  let printUserData = "No User Available";
  if (printUserData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return (
        <div key={idx}>
          <a href={elem.url} target="_blank">
            <div className="h-40 w-44 overflow-hidden bg-white rounded-xl">
              <img
                className="h-full w-full object-cover"
                src={elem.download_url}
                alt=""
              />
            </div>
            <h2 className="font-bold text-lg">{elem.author}</h2>
          </a>
        </div>
      );
    });
  }
  return (
    <div className="bg-black h-screen overflow-auto p-4 text-white">
      <h1 className="fixed bg-red-500 text-6xl">{index}</h1>
      <div className="flex flex-wrap gap-4">{printUserData}</div>

      <div className="flex justify-center gap-6 items-center p-4">
        <button
        onClick={()=>{
          if (index>1){
             setIndex(index-1)
          }
            
        }}
        className="bg-amber-500 text-black rounded px-4 py-2 text-sm cursor-pointer active:scale95 font-semibold">
          Prev
        </button>
        <button 
        onClick={()=>{
            setIndex(index+1)
        }}
        className="bg-amber-500 text-black rounded px-4 py-2 text-sm cursor-pointer active:scale95 font-semibold">
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
