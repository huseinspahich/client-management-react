import React from 'react'

const NavBar = ({ onOpen, onSearch}) => {
  const handleSearchChange = (event) => {
    onSearch(event.target.value); 
};

  return (
    <>
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <a className="btn btn-ghost text-xl">Client</a>
  </div>
  <div className="navbar-center">
  <div className="form-control">
      <input 
        type="text" 
        placeholder="Search" 
        className="input input-bordered w-48 md:w-auto" 
       onChange={handleSearchChange}
        />
    </div>
  </div>
  <div className="navbar-end">
    <a className="btn btn-neutral" id='Add' onClick={onOpen}>Add Client</a>
  </div>
</div> 
    </>
  )
}

export default NavBar
