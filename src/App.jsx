import Hookref from './HookRef';
import './App.css'
import { useEffect, useState } from 'react';
import Console from './Console';
import Hen from './Fun/Hen';

function App() {
    // let[count, setCount] = useState(0);
    // useEffect(() => {
    //     console.log('value updated');
    //     return(() => {
    //         console.log('code cleanup')
    //     })
    // }, [count]);

  return (
    <>
        {/* <h1>Count:{count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <Hookref /> */}
        {/* <Console /> */}
        <Hen name="water"/>
    </>
  )
}

export default App
