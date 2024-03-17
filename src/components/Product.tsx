import { IProduct } from "../models"
import { useState } from "react"

interface ProductProps {
  product: IProduct
}

export const Product = ({product}: ProductProps) => {
  const [details, setDetails] = useState(false)

  return (
    <div 
      className="border bg-gray-300 py-2 px-4 rounded flex flex-col items-center mb-2 gap-2 "
    >
      <img src={product.image} alt={product.title} className="w-[200px] h-[200px]object-cover rounded-[10px]" />
      <p className="text-2xl text-center">{ product.title }</p>
      <span className="text-red-600 font-bold">Price:</span> <p className="font-bold underline">{ product.price }</p>
      <span className="text-red-600 font-bold">Rating:</span> <span className="font-bold underline">{ product.rating?.rate }</span>
      <button 
        className="border py-2 px-4 rounded text-red-600 bg-gradient-to-r mb-2 from-blue-300 to-azure-400 hover:from-green-600 hover:to-blue-400 transition-all duration-300 ease-in hover:text-purple-900 hover:border-yellow-500 hover:bg-yellow-400 outline-none rounded-ss-[40px] rounded-se-[0px] rounded-ee-[40px] rounded-es-[0px] hover:rounded-es-[40px] hover:rounded-se-[40px] hover:rounded-ss-[0px] ease"
        onClick={() => setDetails(prev => !prev)} 
        // Switching between true and false
      >
        {details ? "Hide Details" : "Show Details"}
      </button>
      {details && <div>
        <p>{ product.description } </p>
      </div>}
      
    </div>
  )
}
