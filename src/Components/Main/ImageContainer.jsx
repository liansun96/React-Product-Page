import img1 from "../../images/image-product-1.jpg"
import img2 from "../../images/image-product-2.jpg"
import img3 from "../../images/image-product-3.jpg"
import img4 from "../../images/image-product-4.jpg"
import Temp1 from "../../images/image-product-1-thumbnail.jpg"
import Temp2 from "../../images/image-product-2-thumbnail.jpg"
import Temp3 from "../../images/image-product-3-thumbnail.jpg"
import Temp4 from "../../images/image-product-4-thumbnail.jpg"
import { useState,useContext } from "react"
import {CountingContext} from "../../store/CountingProvider"

const ImageContainer = () => {

    const Temp = [Temp1,Temp2,Temp3,Temp4];
    const Image = [img1,img2,img3,img4];

    const {handleIndexChange,index} = useContext(CountingContext)

    const [image,setImage] = useState(Image[index])

    const handleImageChange = (index) => {
        setImage(Image[index])
        handleIndexChange(index)
    }

  return (
    <div className='w-[50%]'>
        <div className="w-[60%] flex flex-col space-y-5 mx-auto">
            <div className="w-full mb-4">
                <img src={image} alt="" className="w-full h-full boject-contain rounded-lg" />
            </div>
            <div className="flex space-x-4">
                {Temp.map((i,index) => <button onClick={handleImageChange.bind(null,index)}>
                    <img src={i} alt="" key={index} className="w-[100px] rounded-lg hover:ring-1 hover:ring-orange-500 duration-300 hover:opacity-50"/>
                </button>)}
            </div>      
        </div>
    </div>
  )
}

export default ImageContainer