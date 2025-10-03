import React, { useEffect, useState } from 'react'

export default function Contact() {

  const [count, setCount] = useState(0);

  //  images ui -- new [1,2,3,45,]

  useEffect(() => {
    console.log("Component load/mount");
  },[])



  useEffect(() => {
    console.log("Count clicked");
  }, [count])


  useEffect(() => {
    return console.log("Count unmount");
    // component will unmount
  }, [])


  return (
    <div className='pt-[200px]'>
      <button className='cursor-pointer bg-blue-600 rounded-sm px-4 m-3 py-2 text-white font-bold mt-12' onClick={() => {
        setCount(prev => prev + 1)
      }}>Click {count}</button>
    </div>
  )
}
