

const Home = ({isBigSidebarOpen}) => {
  return (
    

        <div className={`h-screen  w-full bg-red-500 ${isBigSidebarOpen ? 'ms-[335px]' : 'ms-[89px]'}`}>

<div className="mt-[90px]">
  <h1 className="text-white">hi gowthom , welcome to spotify</h1>
</div>
        </div>
      
    
  )
}

export default Home
