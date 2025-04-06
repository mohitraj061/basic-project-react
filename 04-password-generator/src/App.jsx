import { useState, useCallback, useEffect, useRef } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  // useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (numberAllowed) str += '0123456789';
    if (charAllowed) str += '!@#$%^&*';

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 20);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className='w-full max-w-2xl mx-auto shadow-2xl rounded-xl px-8 py-6 my-16 bg-gradient-to-r from-gray-800 to-gray-900 text-orange-500'>
        <h1 className='text-white text-4xl font-bold text-center mb-6'>🔐 Password Generator</h1>

        <div className="flex shadow-lg rounded-lg overflow-hidden mb-6">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-3 px-4 text-xl bg-gray-700 text-white placeholder-gray-400"
            placeholder="Generate Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 shrink-0 transition-all duration-300'>
            Copy
          </button>
        </div>

        <div className='flex flex-col gap-4 text-lg'>
          <div className='flex items-center justify-between'>
            <label className='text-white'>Password Length: {length}</label>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer w-64'
              onChange={(e) => { setLength(e.target.value) }}
            />
          </div>

          <div className='flex items-center gap-4'>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
              className='w-5 h-5 cursor-pointer'
            />
            <label htmlFor="numberInput" className='text-white'>Include Numbers</label>
          </div>

          <div className='flex items-center gap-4'>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id='characterInput'
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
              className='w-5 h-5 cursor-pointer'
            />
            <label htmlFor="characterInput" className='text-white'>Include Special Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
