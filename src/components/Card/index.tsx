import { CSSProperties, useMemo } from 'react';
import './index.css'

export type CardProps = {
    product: {
        title: string;
         imageSrc: string;
        price: number;
       
    },
    rotate?: boolean;
}

const Card = ({
    product,
    rotate = false,

} : CardProps)=> {
    const{
        title,
        imageSrc,
        price,

    } = product;
    const randomRotation = useMemo (()=>{
        return (Math.random() * 10 - 5).toFixed(2) + 'deg'
    }, [])


  return (
        <div className='movie-card'
        style={{
            '--rotation': rotate 
            ?randomRotation
            : '0deg',
        } as CSSProperties}>
            <img src={imageSrc} alt="" />
           
                <>
                    <span>{title}</span>
                    <span>
                        {price}
                    </span>
                </>
            
        </div>
    )
}
export default Card