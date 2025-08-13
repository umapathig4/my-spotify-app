import React from 'react'

const Playlist = ({ isBigSidebarOpen, isPlayingbarOpen }) => {
  return (
    <div
      className={`h-screen w-[100%] mt-[65px] rounded-[10px] ${
        isBigSidebarOpen ? "ms-[395px]" : "ms-[89px]"
      } ${isPlayingbarOpen ? "me-[10px]" : "me-[0px]"}`}
      
    >
        <h1 className='text-white'>Playlist Page</h1>
        <p className='text-white'>This is where the playlist details will be displayed.</p>
        
      
    </div>
  )
}

export default Playlist
