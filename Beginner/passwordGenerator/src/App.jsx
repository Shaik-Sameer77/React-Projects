import { useState, useCallback, useEffect ,useRef} from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState("");
  const passwordInput = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (number) str += "0123456789";
    if (character) str += "!@#$%^&*_+=[]{}~`";

    for (let i = 1; i <=length; i++) {
      let char = Math.floor(Math.random() * str.length + 2);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, number, character, setPassword]);

  useEffect(() => {
    passwordGenerator()
  }, [length,number,character, setPassword]);

  const copyPassword = ()=>{}
  

  return (
    
      <div className="h-screen p-8">
        
        <div className=" max-w-md mx-auto shadow-md rounded-lg p-4 text-orange-500 bg-gray-800">
          <h1 className="text-white text-center">Password Generator</h1>
          <div className="flex shadow rounded-lg overflow-hidden mb-4 my-3">
            <input
              type="text"
              value={password}
              readOnly
              className="outline-none w-full py-1 px-3"
              placeholder="password"
              ref={passwordInput}
            />
            <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0" onClick={copyPassword}>copy</button>
          </div>
          <div className="flex text-sm gap-x-2 my-8">
            <div className="flex items-center gap-x-1">
              <input type="range" min={6} max={32} id="range" value={length} className="cursor-pointer" onChange={(e)=>setLength(e.target.value)}/>
              <label htmlFor="range">Length: {length}</label>

            </div>
            <div className="flex items-center gap-x-1">
            <input type="checkbox"  id="numberInput" className="cursor-pointer" onChange={()=>{
              setNumber((prev)=>!prev)
            }}/>
            <label htmlFor="numberInput">Numbers</label>
             
            </div>
            <div className="flex items-center gap-x-1">
            <input type="checkbox"  id="charInput" className="cursor-pointer" onChange={()=>{
              setCharacter((prev)=>!prev)
            }}/>
            <label htmlFor="charInput">Character</label>
             
            </div>
          </div>
        </div>
        
      </div>
   
  );
}

export default App;
