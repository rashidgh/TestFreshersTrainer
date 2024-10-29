import React from 'react'

const Home = () => {

  return (
      <div className='flex justify-between '>Home <span className="bg-red-500 p-2 text-white rounded cursor-pointer" onClick={() => { window.sessionStorage.removeItem("trainer_token"); window.location.reload()}} >Logout</span></div>
  )
}

export default Home;