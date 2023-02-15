import "./styles.css";
import { useState } from 'react';

export default function App() {
  const [o,n]=useState({c:0,times:"even"})
  
  function r(){
    console.log(o.c)
    const s=function () {
      if(o.c%2===0){
        return {...o,c:o.c+1,times:'odd'}
      }
      else {
          return {...o,c:o.c+1,times:"even"}
      }  
    }
    n(s)
  }
  return (
    <div className="App">
      <button onClick={r} > click</button>
      <h1>{o.c}</h1>
      <h1>{o.times}</h1>
    </div>
  );
}
