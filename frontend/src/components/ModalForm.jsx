import React from 'react'

const ModalForm = ({mode}) => {
  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
 
        <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
            <h3 className='font-bold text-lg py-4'>{mode === "Add" ? "Add Client" : "Update Client"}</h3>
            <form method="dialog">
            <label className="input input-bordered my-4 flex items-center gap-2">
                Name
             <input type="text" className="grow"  />
            </label>
            <label className="input input-bordered my-4 flex items-center gap-2">
                Email
            <input type="text" className="grow"  />
            </label>
            <label className="input input-bordered my-4 flex items-center gap-2">
                Job
            <input type="text" className="grow"  />
            </label>
            <div className='flex mb-4 justify-between my-4'>
            <label className="input input-bordered mr-4 flex items-center gap-2">
                Rate 
                <input type="number" className="grow" />
                </label>
             <select className="select select-bordered w-full max-w-xs">
            
                <option>Active</option>
                <option>Inactive</option>
            </select>

           
            </div>
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            <button type="submit" className=" btn btn-success">{mode === "Add" ? "Add Client" : "Save changes"}</button>
            </form>
        </div>
        </dialog>
    </>
  )
}

export default ModalForm
