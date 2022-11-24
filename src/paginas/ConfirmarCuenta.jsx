import { useEffect, useState } from "react"
import { useParams, Link } from 'react-router-dom'
import clienteAxios from "../config/clienteAxios"
import Alerta from '../components/Alerta'

const ConfirmarCuenta = () => {

  const [ alerta, setAlerta ] = useState({})
  const [ cuentaConfirmada, setCuentaConfirmada ] = useState( false )

  const params = useParams()
  const { id } = params

  useEffect(() => {
    const confirmarCuenta = async () => {
      try {
        const url = `/usuarios/confirmar/${id}`
        const { data } = await clienteAxios( url )

        setAlerta({ 
          msg: data.msg,
          error: false
        })

        setCuentaConfirmada( true )

      } catch ( error ) { 
        setAlerta({ 
          msg: error.response.data.msg,
          error: true
        })
      }
    }
    confirmarCuenta()
  }, [])

  const { msg } = alerta

  return (
    <main className="container mx-auto mt-5 md:mt-20 p-5 md:flex md:justify-center">
          <div className="md:w-2/3 lg:w-2/5">
            <h1 className="text-sky-600 font-black text-6xl">Confirma tu cuenta y 
            Comienza a Crear tus <span className="text-orange-600" >Finanzas</span>
            </h1>
            <div className="mt-20 md:mt-10 shadow-lg px-5 py-10 rounded-xl bg-white">
            {msg && <Alerta alerta = {alerta} />}

            {cuentaConfirmada && (
            <Link
            className="block text-center my-5 text-slate-500 uppercase text-sm"
            to="/"
            >Inicia Sesión</Link>
            )}
            </div>
          </div>
    </main>
      
  )
}

export default ConfirmarCuenta
