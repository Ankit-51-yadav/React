import { useState, useCallback , useEffect, useRef, use} from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed , setNumberAllowed] = useState(false);
  const [charactersAllowed , setCharactersAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() =>{
    let pass = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) string += "0123456789"
    if(charactersAllowed) string += "!@#$%^&*()_+~`|}{[]:;?><,./-="

    for (let i=1; i<= length; i++){
      let char = Math.floor(Math.random() * string.length + 1);
      pass += string.charAt(char) 
    }
    setPassword(pass);

  }, [length , numberAllowed , charactersAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() =>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 9999); // For mobile devices
    window.navigator.clipboard.writeText(password);
  },[password]);

  useEffect(() =>{
    passwordGenerator();
  }, [length, numberAllowed, charactersAllowed, passwordGenerator]);

  

  return (
    <>
  
     <div className ='w-full max-w-md mx-auto shadow-2xl rounded-2xl px-6 py-8 my-10 text-orange-400 bg-gradient-to-br from-gray-800 via-gray-900 to-black border border-gray-700/50 backdrop-blur-sm hover:shadow-orange-500/20 transition-all duration-300'>
      <h1 className ="text-4xl font-bold text-center text-white mb-8 drop-shadow-lg tracking-wide">Password Generator</h1>
     <div className = 'relative shadow-xl rounded-xl overflow-hidden mb-8 bg-gradient-to-r from-gray-700 to-gray-800 border border-gray-600/50'> 
      <input
        type="text"
        value = {password}
        className = 'outline-none w-full py-3 px-4 pr-24 bg-transparent text-white placeholder-gray-400 text-lg'
        placeholder = 'Generated Password'
        readOnly
        ref={passwordRef}
        />
        <button 
        onClick ={copyPasswordToClipboard}
        className = 'absolute right-1 top-1 outline-none bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-2 rounded-lg transition-all duration-200 font-medium shadow-md hover:shadow-lg transform hover:scale-105' >Copy</button>
      
     </div>
       <div className='space-y-4'>
        <div className = 'flex items-center gap-x-4 bg-gray-700/30 p-3 rounded-lg'>
         <label className='text-white font-medium text-base'>Length: {length}</label>
         <input
          type='range'
          min = "8"
          max = "20"
          value = {length}
          onChange = {(e) => setLength(e.target.value)}
          className = 'cursor-pointer accent-orange-400 flex-1'
        />
        </div>
        <div className='grid grid-cols-2 gap-4'>
          <div className='flex items-center gap-x-2 bg-gray-700/30 p-3 rounded-lg'>
            <input
              type='checkbox'
              checked = {numberAllowed}
              onChange = {() =>{
                setNumberAllowed((prev) => !prev);            }}
              className='accent-orange-400 w-4 h-4'
            />
            <label htmlFor="numberInput" className='text-white font-medium'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-2 bg-gray-700/30 p-3 rounded-lg'>
            <input
              type='checkbox'
              checked = {charactersAllowed}
              onChange = {() =>{
                setCharactersAllowed((prev) => !prev);            }}
              className='accent-orange-400 w-4 h-4'
            />
            <label htmlFor="characterInput" className='text-white font-medium'>Special Chars</label>
          </div>
        </div>
       </div>
       
  
     </div>
    </>
  )
}

export default App
