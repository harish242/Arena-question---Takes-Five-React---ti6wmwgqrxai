import React,{useState} from 'react'

import '../styles/App.css';
const App = () => {
  const [currentNumber,setCurrentNumber]=useState(1)
  const numbersPerpage=5;
  const getNumberarr=()=>{
    const arr=[]
    for(let i=(currentNumber-1)*numbersPerpage+1;i<=numbersPerpage*currentNumber;i++){
      arr.push(<div>{i}</div>)
    }
    // for (let i = (currentPage - 1) * numbersPerPage + 1; i <= currentPage * numbersPerPage; i++) {
    //   numberDisplay.push(<div key={i}>{i}</div>);
    // }
    return arr
  }
  const HandleNext=()=>{
    setCurrentNumber((prev)=>prev+1)
  }
  const HandlePrev=()=>{
    setCurrentNumber((prev)=>prev-1)
  }
  const prevbtn=currentNumber===1


  return (
    <div id="main">

      <div>
      {getNumberarr()}
      </div>
      <button id='back-button' disabled={prevbtn} onClick={HandlePrev}>Prev Page</button>
      <button id='next-button' onClick={HandleNext}>Next Page</button>
    </div>
  )
}


export default App;
