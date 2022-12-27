import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import Select from 'react-select'
import { useNavigate } from 'react-router-dom';

const Nav = ({ options }) => {
  const navigate = useNavigate()
  const [searchInput, setSearchInput] = useState(null)
  const handleSearchSubmit = () => {
    navigate(`/${searchInput.value}/portfolioShow`, { state: { searchInput } })
  }
  return (
    <>
      <div>
        <nav className="navbar navbar-light bg-light justify-content-between">
          <Navbar.Brand></Navbar.Brand>
          <form className="d-flex" onSubmit={handleSearchSubmit}>
            <div className="input-group rounded">
              <Select placeholder='Pick your Portfolio'
                defaultValue={searchInput}
                options={options[0]}
                onChange={setSearchInput}
              />
              <span className="input-group-text border-0" id="search-addon">
                <button className='btn btn-success'><SearchIcon /></button>
              </span>
            </div>
          </form>
        </nav>
      </div>
    </>

  )
}

export default Nav

