import { useState } from "react"

function App() {
  const [color, setColor] = useState("orange");
  return (
    <>
      <div className = "w-full h-screen duration-200" style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0">
          <div className = "flex flex-wrap justify-center gap-3 shadow-lg bg-amber-100 px-3 py-2 rounded-xl">
            <button
            onClick={() => setColor("red")}
             className="outline-none px-4 py-1 rounded-full text-white shadow-xl" style={{backgroundColor: "red"}}>Red</button>
            <button 
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-xl" style={{backgroundColor: "green"}}>Green</button>
            <button 
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-xl" style={{backgroundColor: "blue"}}>Blue</button>
            <button 
            onClick={() => setColor("olive")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-xl" style={{backgroundColor: "olive"}}>Olive</button>
            <button 
            onClick={() => setColor("gray")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-xl" style={{backgroundColor: "gray"}}>Gray</button>
            <button 
            onClick={() => setColor("yellow")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-xl" style={{backgroundColor: "yellow"}}>Yellow</button>
            <button 
            onClick={() => setColor("pink")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-xl" style={{backgroundColor: "pink"}}>Pink</button>
            <button 
            onClick={() => setColor("purple")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-xl" style={{backgroundColor: "purple"}}>Purple</button>
            <button 
            onClick={() => setColor("lavender")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-xl" style={{backgroundColor: "lavender"}}>lavender</button>
            <button 
            onClick={() => setColor("white")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-xl" style={{backgroundColor: "white"}}>White</button>
            <button 
            onClick={() => setColor("Black")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-xl" style={{backgroundColor: "Black"}}>Black</button>
           
          </div>
        </div>
      </div>
    </>
  )
}

export default App

