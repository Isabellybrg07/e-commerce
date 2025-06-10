import './index.css'

export type CardProps = {
    product: {
        title: string;
        Price: number;
        imageSrc: string;
    }
}

const Card = ({
    product,
    rotate= false,

} : CardProps)=> {
    const
}