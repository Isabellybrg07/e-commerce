

import './index.css'
import Button from '../Button';


export type CarProps = {
    product: {
        title: string;
         imageSrc: string;
        price: number;
       
    },
    rotate?: boolean;
}

const Car = ({
    product,
   

} : CarProps)=> {
    const{
        title,
        imageSrc,
        price,
       

    } = product;
   


  return (
        <div className='movie-car'>
            <img src={imageSrc} alt="" />
           
                <div className='title'>
                    <span className='modelo'>{title}</span>
                    <span className='price'>
                        {price}
                    </span>
                   </div>
                   <div className='bt-buy'>
                   <Button>Escolher cor </Button>
                    <span><i className="bi bi-trash trash btn "></i></span>
                </div>
            </div>
       
    )
}
export default Car