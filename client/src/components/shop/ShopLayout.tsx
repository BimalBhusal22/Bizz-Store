import { Outlet } from "react-router-dom"
import ShopHeader from "./ShopHeader"

const ShopLayout = () => {
  return (
    // {bg-white overflow-hidden}
    <div className="flex flex-col">
      <ShopHeader/>
      <main className="flex flex-col w-full">
        <Outlet/>
      </main>
    </div>
  )
}

export default ShopLayout