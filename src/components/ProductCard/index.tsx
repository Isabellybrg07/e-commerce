import "./index.css"
import Button from "../Button";

export type ProductCardProps = {
    product: {
        imgSrc: string;
        title: string;
        price:number
    }
}

const ProductCard = ({
    product,
   

} : ProductCardProps)=> {
    const{
        title,
        imgSrc,
        price,
       

    } = product;
   

    return (
        <div className="product-card">
         
            <img src={imgSrc} alt={title} />
            <div className="product-info">
                <h3 className="product-title">{title}</h3>
                <span className="product-price">R${price.toFixed(2)}</span>
            

           <Button>Adicionar a carrinho</Button>
           <Button>Comprar</Button>
           </div>
            </div>
    )
}

    export default ProductCard