"use client"
import Cell from "./cell"
import React,{ useState } from "react"
export default function Home() {
  const [v,setv] = useState([0,0,1,2,3,4,5,6,7])
  //let v=[0,0,0,8,0,0,0,0,0]
  function convertToCell(x)
  {
    //onst [x,setx] = useState
    return <Cell value={x} onChange={changeElement} />
  }
  function changeElement()
  {
    alert("change" + x.Cell)
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid grid-cols-3 grid-rows-3 bg-gray-600 p-3 gap-3">
        {
          v.map(convertToCell)
        }
      </div>
    </main>
  )

}
