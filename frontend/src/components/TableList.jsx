import React from 'react'

const TableList = ({openModal}) => {

    const clients = [ {id:1, name: "John Doe", email:"John.Doe@gmail.com", job:"Developer", rate:"100", isactive: true},
                     {id:2, name: "John Doe", email:"John.Doe@gmail.com", job:"Developer", rate:"100", isactive: true},
                     {id:3, name: "John Doe", email:"John.Doe@gmail.com", job:"Developer", rate:"100", isactive: false} ]
   

  return (
    <>
        <div className="overflow-x-auto mt-10">
            <table className="table">
        {/* head */}
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
        {/* row 1 */}
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
