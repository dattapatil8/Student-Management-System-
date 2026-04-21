import { useEffect, useState } from "react";

export function DisplayData() {
  const [Data, setData] = useState([]);

  useEffect(() => {
    RandemData();
  }, []);

  async function RandemData() {
    const url = "http://localhost:3000/Student";
    let response = await fetch(url);
    let data = await response.json();
    setData(data);
  }

  return (
    <>
      <h1 className="text-3xl font-bold text-center m-10">
        Student Data
      </h1>

    
        <table className="w-full max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="pl-2">Id</th>
              <th className="px-6 py-3 text-left">Name</th>
              <th className="px-6 py-3 text-left">Email</th>
            </tr>
          </thead>

          <tbody>
            {Data.map((student) => (
              <tr
                key={student.id}
                className="border-b hover:bg-gray-100"
              >
                <td className="p-5">{student.id}</td>
                <td className="p-5">{student.name}</td>
                <td className="p-5">{student.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </>

  );
}