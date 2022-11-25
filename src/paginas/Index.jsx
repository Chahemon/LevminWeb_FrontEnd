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
                <body className='text-white font-bold ml-4 mr-4 text-xl mt-5 mb-12'>Una aplicacion sencilla que permite administrar tus finanzas de una manera eficiente.</body>
                <a 
                    href="https://download1526.mediafire.com/b56danmzsyfg/vov9z4hemm2qh2m/Perfinance.exe"
                    target="_blank"
                    className='hover:from-blue-500 hover:to-blue-800 font-bold uppercase ml-4 mr-4 bg-gradient-to-r from-blue-500 to-blue-500 rounded-md p-3 text-lg text-white transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 '
                >Descargar</a>
              </div>
              <img className= 'p-10 m-1' src="https://files.fm/thumb_show.php?i=uxq6wsy4v" width="1500" height="0"/>
            </div>
            <div className=' dark:bg-gray-800 shadow rounded-lg p-10 pb-2 mt-8'>
              <h2 className='text-center text-orange-600 font-bold text-5xl mt-2'>Sobre Nosotros</h2>
              <div className='flex justify-between text-center text-white p-10 pt-4'>
                <div className='m-10 dark:bg-gray-300 shadow rounded-lg p-10'>
                  <h3 className='text-black font-bold text-xl mb-4'>Mision</h3>
                  <p className='text-black'>
                    Queremos desarrollar aplicaciones de Software que sean accesibles a todo el público con una interfaz amigable e intuitivo. Donde el usuario se sienta cómodo y pueda utilizar el software de una forma fácil y sencilla.
                  </p>
                </div>
                <div className='m-10 dark:bg-gray-300 shadow rounded-lg p-10'>
                  <h3 className='text-black font-bold text-xl mb-4'>Visión</h3>
                  <p className='text-black'>
                    Formar una empresa competente a nivel nacional que ofrezca el mejor software, con muy buena calidad, que sea totalmente innovador y que logre cumplir las expectativas del usuario.
                  </p>
                </div>
                <div className='m-10 dark:bg-gray-300 shadow rounded-lg p-10'>
                  <h3 className='text-black font-bold text-xl mb-4'>Contacto</h3>
                  <p className='text-black'>
                    levmin.perfinance@gmail.com
                    8714522155
                  </p>
                </div>
              </div>
            </div>

          </div>
      </main>
    )
  }
  
  export default Index