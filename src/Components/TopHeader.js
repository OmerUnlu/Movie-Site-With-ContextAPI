import React from 'react'
import { Link } from 'react-router-dom'

const TopHeader = () => {
  return (
    <>
      <div className='topheader'>
        <header className='header'>
           <Link to={"/"}>WATCHLİST</Link>
           <div>
            <Link  to={"/watched"}>WATCHED</Link>
            <Link  to={"/add"}><i className='fas fa-plus'></i></Link>
           </div>
        </header>
      </div>  
    </>
  )
}

export default TopHeader