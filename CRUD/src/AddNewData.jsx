import { useState } from "react"

export function AddNewData(){
 const[id,setId]=useState("");
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const DataSub= async(e)=>{
      e.preventDefault();
const url="http://localhost:3000/Student";
let responses=await fetch(url,{
  method:"Post",
   body:JSON.stringify({id,name,email}),
});
responses=await responses.json();
if(responses){
  alert("Add New Student..");
}
  }
    return (
    <>
    <form action="">
     <div className="text-center border-2 w-100 m-10 mx-auto">

      <h1 className="text-3xl font-bold text-center m-10">Adding new data</h1>
      <input className="w-60 border-2 m-2 text-center" type="text" onChange={(e)=>setId(e.target.value)} placeholder="Enter your ID" /><br/>
            <input className="w-60 border-2 m-2  text-center" type="text"onChange={(e)=>setName(e.target.value)} placeholder="Enter your Name" /><br></br>
              <input className="w-60 border-2 m-2 text-center" type="text" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your Email" /><br></br>
              <button className="bg-amber-600 m-4 w-45 h-10 rounded-2xl hover:bg-amber-800 cursor-pointer" onClick={DataSub}>Add New Data</button>

     </div>
     </form>
    </>
  )
}