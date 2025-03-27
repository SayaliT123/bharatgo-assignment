import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useCart } from '../Context/CartContext';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const { addToCart } = useCart();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://api.escuelajs.co/api/v1/products');
                setProducts(response.data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        fetchProducts();
    }, []);

    return (
        <div className="product-list">
            {products.map((product) => (
                <div key={product.id} className="product">
                    {/* Product image */}
                    <div className="image-wrapper" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img src={product.images[0]} alt={product.title} style={{ width: '25%', height: 'auto' }} />
                    </div>

                    {/* Centered product details */}
                    <div className="product-details" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', marginTop: '10px' }}>
                        <h2>{product.title}</h2>
                        <p>{`$${product.price}`}</p>

                        {/* Add to Cart Button */}
                        <button onClick={() => addToCart(product)} style={{ marginTop: '10px' }}>
                            Add to Cart
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;