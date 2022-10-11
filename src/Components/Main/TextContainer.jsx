import {FaMinus , FaPlus} from "react-icons/fa"
import {AiOutlineShoppingCart} from "react-icons/ai"
import { useState,useContext } from "react"
import DynamiteBtn from "../UI/DynamiteBtn"
import {CountingContext} from "../../store/CountingProvider"

const TextContainer = () => {    

    const {count,handleCounting,handleChange,handleAdd} = useContext(CountingContext)

  return (
    <div className='w-[50%]'>
        <div className="w-[80%] space-y-6">
            <div className="">
                <p className='uppercase font-semibold text-orange-100 tracking-wider'>sneaker companuy</p>
            </div>
            <div className="text-5xl font-[700] my-6 !mb-10">
                <h1>Fall Limited Edition Sneakers</h1>
            </div>
            <div className="">
                <p className='text-blue-300'>
                    These low-profile sneakers are your perfect casual wear companion. Featuring a 
                    durable rubber outer sole, they’ll withstand everything the weather can offer.
                </p>
            </div>

            {/* Price */}
            <div className="!mb-10">
                <div className="flex space-x-5">
                    <p className="text-2xl font-bold">$125.00</p>
                    <div className="px-2 rounded-lg flex items-center font-bold text-orange-100 bg-orange-200">
                        <p>50%</p>
                    </div>                    
                </div>                
                <div className="line-through font-semibold text-blue-300">
                    <p>$250.00</p>
                </div>                
            </div>

            {/* Button */}
            <div className="flex items-center space-x-6">
                <div className="bg-orange-200 flex px-4 py-2 rounded-lg">
                    <button className="text-orange-100" onClick={handleCounting.bind(null,false)}>
                        <FaMinus/>
                    </button>
                    <input type="number" value={count} onChange={handleChange} className="w-[80px] bg-orange-200 outline-none font-bold text-center hover:appearance-none" />
                    <button className="text-orange-100" onClick={handleCounting.bind(null,true)}>
                        <FaPlus/>
                    </button>   
                </div>

                <div>
                    <DynamiteBtn onClick={handleAdd}>
                       <AiOutlineShoppingCart/>
                        <p>Add to cart</p>
                    </DynamiteBtn>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TextContainer