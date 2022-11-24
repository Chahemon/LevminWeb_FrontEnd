import { Outlet } from "react-router-dom"
import Header from "../components/header"

const AuthLayout = () => {
  return (
    <>
        <Header/>
        <Outlet/>
    </>
  )
}

export default AuthLayout
