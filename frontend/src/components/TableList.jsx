import { useEffect,useState } from 'react';
import React from 'react';
import axios from 'axios';

const TableList = ({openModal}) => {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const response = await axios.get('http://localhost:3000/api/clients');
            setClients(response.data); 
          } catch (error) {
            console.error('Error fetching products:', error);
          }
        };
        fetchProducts();
      }, [])
   

  return (
    <>
        <div className="overflow-x-auto mt-10">
            <table className="table">

        <thead>
        <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Job</th>
            <th>Rate</th>
            <th>Status</th>
        </tr>
        </thead>
        <tbody>
   
       {clients.map( (client) => (
         <tr className="hover"> 
             <th>{client.id}</th>
                <td>{client.name}</td>
                <td>{client.email}</td>
                <td>{client.job}</td>
                <td>{client.rate}</td>
                <td>
                    <button className={`btn rounded-full w-20 ${client.isactive ? "btn btn-neutral" : "btn-outline-neutral"}`}>
                        {client.isactive ? "Active" : "Inactive"}
                    </button>    
                </td>   
                <td>
                    <button className="btn btn-secondary" onClick={() => openModal("Update")}>
                        Upadate
                    </button>
                </td>
                <td>
                    <button className="btn btn-active btn-accent">
                        Delete
                    </button>
                </td>
        </tr>
        ))} 
        
        </tbody>
    </table>
    </div>      
    </>
  )
}

export default TableList
