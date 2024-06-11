import React from 'react'
import { useEffect, useState} from "react";
import axios from "axios";

function ContactAdmin() {
    const [reservimet, setRezervimet] = useState([]);
  useEffect(() => {
    (async () => await Load())();
  }, []);
  async function Load() {
    
    const result = await axios.get("https://localhost:7051/api/Contacts/GetContact");
    setRezervimet(result.data);
   
  }
  async function deleteProduct(id) {
    await axios.delete("https://localhost:7051/api/Contacts/" + id);
    alert("Deleted successfully");
   
    Load();
  }
  

  return (
    <div>
    <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      
      />
    <div className="table-responsive m-3">
       <table className="table border-dark ">
    <thead>
      <tr>
        <th scope="col">Id</th>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Message</th>
        <th scope="col">Option</th>
       
      </tr>
    </thead>
    <tbody>
      {reservimet.map(function fn(rez) {
        return (
          <tr key={rez.id}>
            <td>{rez.id}</td>
            <td>{rez.name}</td>
            <td>{rez.email}</td>
            <td>{rez.message}</td>
         
           <td> <button
                type="button"
                className="btn btn-danger mx-1"
                onClick={() => deleteProduct(rez.id)}
              >
                Delete
              </button></td>
          </tr>
        );
      })}
    </tbody>
  </table>
  
</div>
</div>
  )
}

export default ContactAdmin;