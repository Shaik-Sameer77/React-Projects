import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
    const data = useLoaderData()


//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch("https://api.github.com/users/Shaik-Sameer77")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);

  return (
    <div className="text-center h-screen flex flex-col items-center justify-center m-4 bg-gray-600 text-white p-4 text-3xl">
    <div >
      Github followers: {data?.followers}
    </div>
    <img className='w-80' src={data?.avatar_url} alt="GitHub Picture"/>
  
    </div>
    );
};

export default Github;

export const githubInfoLoader=async()=>{
    const response = await fetch("https://api.github.com/users/Shaik-Sameer77");
    return response.json()
    
}