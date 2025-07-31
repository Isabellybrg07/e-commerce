
import "./index.css"

const Product = () => {
    return (
        <div className="product">
            <div className="imgProduct">
                <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="10000">
                            <img src="/public/images/aba.jpeg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src="/public/images/aba.jpeg" className="d-block w-100" alt="..." />
                        </div>

                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <div className="infoProduct">
                <h1>Vestido aba</h1>
                <h2></h2>

            </div>

        </div>
    )
}

export default Product;