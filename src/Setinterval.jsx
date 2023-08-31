import React,{useState} from 'react'


const Setinterval = () => {
const [count1, setcount1] = useState(1)
const [count2, setcount2] = useState(1)

setTimeout(() => {
    console.log("hii")
}, 0);
console.log(1);
setTimeout(() => {
    console.log("hii")
}, 1000);

setInterval(()=>{
setcount2(count2+2)
},2000)
  return (
    <>
    <div>settimeout:{count1}</div>
    <div>setinterbal:{count2}</div>
    </>
  )
}

export default Setinterval