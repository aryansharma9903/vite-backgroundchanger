import { useState } from 'react'
//in this for onclick function
//setColor is passed as a callback function and not directly as the onclick accepts function only
//passing stColor will provide the reference to that function and the return value will be passed in onclick
//but we dont want that, so we pass the whole function as a callback.
function App() {
  const [color, setColor] = useState("olive")
  return (
    <div className="w-70 h-screen duration-200"
    style={{backgroundColor: color}}>

      <div className="flex flex-wrap fixed justify-center bottom-12 inset-x-0 px-2">
            <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-3 rounded-3xl">
            <button onClick={()=>{
              setColor("red")
            }}className="rounded-xl outline-none px-4"
            style={{backgroundColor: "red", color: "white"}}
            > RED</button>

            <button onClick={()=>{
              setColor("green")
            }}className="rounded-xl outline-none px-4"
            style={{backgroundColor: "green", color: "white"}}
            > GREEN</button>

            <button onClick={()=>{
              setColor("black")
            }}className="rounded-xl outline-none px-4"
            style={{backgroundColor: "black", color: "white"}}
            > BLACK</button>

            <button onClick={()=>{
              setColor("blue")
            }}className="rounded-xl outline-none px-4"
            style={{backgroundColor: "blue", color: "white"}}
            > BLUE</button>
            </div>
      </div>
    </div>
  )
}

export default App
