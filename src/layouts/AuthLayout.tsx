import { Outlet } from "react-router-dom"

export const AuthLayout = () => {
  return (
    <div className="container">
      <Outlet />
    </div>
  )
}
