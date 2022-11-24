import { Link } from 'react-router-dom'

const Index = () => {
    return (
      
      
      <main className="container mx-auto mt-5 md:mt-20 p-5 md:flex md:justify-center">
          <div className="md:w-1/3 lg:w-4/5">
            
            <div className='flex justify-between'>
              <div >
                <h1 className='text-white font-bold text-6xl left-10 text-sky-600'>
                  Perfinance <span class= 'text-orange-600'>APP</span>
                </h1>
                <div class="opacity-5 h-6 mt-3 w-30 bg-gradient-to-r from-white to-white " ></div>
                <body className='text-white font-bold ml-4 mr-4 text-xl mt-5 mb-5'>Una aplicacion sencilla que permite administrar tus finanzas de una manera eficiente.</body>
              </div>
              <img className= 'p-10 m-1' src="https://files.fm/thumb_show.php?i=uxq6wsy4v" width="1500" height="0"/>
            </div>
          </div>
      </main>
        
    )
  }
  
  export default Index