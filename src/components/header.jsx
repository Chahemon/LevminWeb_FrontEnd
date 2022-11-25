import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='px-2 bg-white border-b'>
        <div className='md:flex md:justify-between'>
            <div className='flex items-center '>
                <img className= 'p-10. h-16 w-16 m-2 ' src="https://files.fm/thumb.php?i=469sewhfs" />
                <h2 className='text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500 font-black 
                text-center pb-1'>
                    <a href='/'>
                        Levmin
                    </a>
                </h2>
            </div>
            <div className='flex items-center gap-4 '>
                <Link 
                    to="/registrar"
                    className='hover:from-blue-500 hover:to-blue-800 font-bold uppercase ml-2 mr-2 bg-gradient-to-r from-blue-500 to-blue-500 rounded-md p-3 text-lg text-white transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'
                >Registrarse</Link>
                <a 
                    href="https://download855.mediafire.com/co53tjhc02cg/y3xjb1gr76wa3hs/Perfinance.exe"
                    target="_blank"
                    className='hover:from-blue-500 hover:to-blue-800 font-bold uppercase ml-2 mr-2 bg-gradient-to-r from-blue-500 to-blue-500 rounded-md p-3 text-lg text-white transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 '
                >Descargar</a>
            </div>
            
        </div>
    </header>
  )
}

export default Header
