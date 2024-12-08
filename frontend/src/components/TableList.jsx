import { useEffect,useState } from 'react';
import React from 'react';
import axios from 'axios';

const TableList = ({ handleOpen, tableData, setTableData , searchTerm}) => {

    useEffect(() => {
        const fetchClients = async () => {
          try {
            const response = await axios.get('http://localhost:3000/api/clients');
            setTableData(response.data); 
          } catch (error) {
            console.error('Error fetching products:', error);
          }
        };
        fetchClients();
      }, [])
   
      const filteredData = tableData.filter((client) =>
        client.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this client?");
        if (confirmDelete) {
            try {
                await axios.delete(`http://localhost:3000/api/clients/${id}`); 
                setTableData((prevData) => prevData.filter(client => client.id !== id)); 
            } catch (err) {
                setError(err.message); 
            }
        }
    };  
     

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
   
       {filteredData.map( (client) => (
         <tr key={client.id} className="hover"> 
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
                    <button className="btn btn-secondary" onClick={() => handleOpen('edit', client)}>
                        Update
                    </button>
                </td>
                <td>
                    <button  onClick={() => handleDelete(client.id)}  className="btn btn-active btn-accent">
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
