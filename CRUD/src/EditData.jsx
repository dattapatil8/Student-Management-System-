
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

export function EditData() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const { id: paramId } = useParams();
  const navigat=useNavigate();

  const url = `http://localhost:3000/Student/${paramId}`;

  useEffect(() => {
    if (paramId) {
      getDataByStudent();
    }
  }, [paramId]);

  const getDataByStudent = async () => {
    let response = await fetch(url);
    let data = await response.json();

    setId(data.id);
    setName(data.name);
    setEmail(data.email);
  };
  const updateData=async(e)=>{
    e.preventDefault()
   let response=await fetch(url,{
    method:"put",
    body:JSON.stringify({id,name,email}),
   });
   response=await response.json();
   if(response){
    alert("Update Succsesfuly...");
    navigat("/")
   }
  }
    return(
        <>
         <form action="">
     <div className="text-center border-2 w-100 m-10 mx-auto">

      <h1 className="text-3xl font-bold text-center m-10">Edit And Update Data</h1>
      <input className="w-60 border-2 m-2 text-center" type="text"value={id} onChange={(e)=>setId(e.target.value)} placeholder="Enter your ID" /><br/>
            <input className="w-60 border-2 m-2  text-center" type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter your Name" /><br></br>
              <input className="w-60 border-2 m-2 text-center" type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your Email" /><br></br>
              <button onClick={updateData} className="bg-amber-600 m-4 w-45 h-10 rounded-2xl hover:bg-amber-800 cursor-pointer" >Edit Data</button>

     </div>
     </form>
        </>
    )
}