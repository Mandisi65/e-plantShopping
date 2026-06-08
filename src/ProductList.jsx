import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './ProductList.css';
import CartItem from './CartItem';
import { addItem } from './CartSlice'; // Imported addItem reducer from CartSlice.jsx

function ProductList({ onHomeClick }) {
    const [showCart, setShowCart] = useState(false);
    const [showPlants, setShowPlants] = useState(false); 
    
    // Task 1: Create addedToCart state management using useState hook
    const [addedToCart, setAddedToCart] = useState({});

    const dispatch = useDispatch();

    const plantsArray = [
        {
            category: "Air Purifying Plants",
            plants: [
                {
                    name: "Snake Plant",
                    image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
                    description: "Produces oxygen at night, improving air quality.",
                    cost: "$15"
                },
                {
                    name: "Spider Plant",
                    image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
                    description: "Filters formaldehyde and xylene from the air.",
                    cost: "$12"
                },
                {
                    name: "Peace Lily",
                    image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg",
                    description: "Removes mold spores and purifies air toxins.",
                    cost: "$18"
                },
                {
                    name: "Boston Fern",
                    image: "https://cdn.pixabay.com/photo/2020/04/30/19/52/fern-5114398_1280.jpg",
                    description: "Adds moisture to the air and removes pollutants.",
                    cost: "$22"
                },
                {
                    name: "Rubber Plant",
                    image: "https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg",
                    description: "Easy to care for and highly effective at removing toxins.",
                    cost: "$17"
                },
                {
                    name: "Aloe Vera",
                    image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/aloe-3283201_1280.jpg",
                    description: "Purifies the air and possesses medicinal properties.",
                    cost: "$14"
                }
            ]
        },
        {
            category: "Aromatic Fragrant Plants",
            plants: [
                {
                    name: "Lavender",
                    image: "https://cdn.pixabay.com/photo/2015/06/08/03/20/lavender-799138_1280.jpg",
                    description: "Calming scent, reduces stress and anxiety.",
                    cost: "$20"
                },
                {
                    name: "Rosemary",
                    image: "https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg",
                    description: "Invigorating aroma, enhances memory and focus.",
                    cost: "$15"
                },
                {
                    name: "Mint",
                    image: "https://cdn.pixabay.com/photo/2016/01/07/18/12/mint-1126282_1280.jpg",
                    description: "Refreshing scent, great for culinary use.",
                    cost: "$12"
                },
                {
                    name: "Jasmine",
                    image: "https://cdn.pixabay.com/photo/2014/07/16/22/41/jasmine-395101_1280.jpg",
                    description: "Sweet fragrance, promotes sleep and relaxation.",
                    cost: "$26"
                },
                {
                    name: "Eucalyptus",
                    image: "https://cdn.pixabay.com/photo/2016/11/29/11/41/eucalyptus-1869253_1280.jpg",
                    description: "Clear aromatic scent, helps with congestion.",
                    cost: "$24"
                },
                {
                    name: "Basil",
                    image: "https://cdn.pixabay.com/photo/2016/07/24/20/48/basil-1539235_1280.jpg",
                    description: "Strong peppery aroma, versatile culinary herb.",
                    cost: "$10"
                }
            ]
        }
    ];

    const styleObj = {
        backgroundColor: '#4CAF50',
        color: '#fff',
        padding: '15px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '20px',
    };

    const styleObjUl = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '1100px',
    };

    const styleA = {
        color: 'white',
        fontSize: '30px',
        textDecoration: 'none',
    };

    const handleCartClick = (e) => {
        e.preventDefault();
        setShowCart(true);
    };

    const handlePlantsClick = (e) => {
        e.preventDefault();
        setShowPlants(true);
        setShowCart(false);
    };

    const handleHomeClick = (e) => {
        e.preventDefault();
        onHomeClick(e);
    };

    const handleContinueShopping = (e) => {
        e.preventDefault();
        setShowCart(false);
    };

    // Task 1: Create handleAddToCart function to dispatch info and track added items
    const handleAddToCart = (product) => {
        dispatch(addItem(product)); // Dispatch the action to add the product to the cart (Redux action)
        
        setAddedToCart((prevState) => ({ // Update local state to reflect that the product has been added
            ...prevState, // Spread previous state to retain existing entries
            [product.name]: true, // Set current product name as key with value 'true'
        }));
    };

    return (
        <div>
            <div className="navbar" style={styleObj}>
                <div className="tag">
                    <div className="luxury">
                        <a href="/" onClick={(e) => handleHomeClick(e)} style={{ textDecoration: 'none' }}>
                            <div>
                                <h3 style={{ color: 'white' }}>Paradise Nursery</h3>
                                <i style={{ color: 'white' }}>Where Green Meets Serenity</i>
                            </div>
                        </a>
                    </div>
                </div>
                <div style={styleObjUl}>
                    <div><a href="#" onClick={(e) => handlePlantsClick(e)} style={styleA}>Plants</a></div>
                    <div>
                        <a href="#" onClick={(e) => handleCartClick(e)} style={styleA}>
                            <h1 className='cart'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="IconChangeColor" height="68" width="68">
                                    <rect width="156" height="156" fill="none"></rect>
                                    <circle cx="80" cy="216" r="12"></circle>
                                    <circle cx="184" cy="216" r="12"></circle>
                                    <path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" fill="none" stroke="#faf9f9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </h1>
                        </a>
                    </div>
                </div>
            </div>
            
            {!showCart ? (
                /* Display Plant Details within div tag with class name product-grid */
                <div className="product-grid">
                    {plantsArray.map((category, index) => ( // Loop through each category in plantsArray
                        <div key={index}> {/* Unique key for each category div */}
                            <h1 style={{ textAlign: 'center', margin: '20px 0' }}>
                                <div>{category.category}</div> {/* Display the category name */}
                            </h1>
                            <div className="product-list"> {/* Container for the list of plant cards */}
                                {category.plants.map((plant, plantIndex) => ( // Loop through each plant in the current category
                                    <div className="product-card" key={plantIndex}> {/* Unique key for each plant card */}
                                        <img 
                                            className="product-image" 
                                            src={plant.image} // Display the plant image
                                            alt={plant.name} // Alt text for accessibility
                                        />
                                        <div className="product-title">{plant.name}</div> {/* Display plant name */}
                                        <div className="product-description">{plant.description}</div> {/* Display plant description */}
                                        <div className="product-cost">{plant.cost}</div> {/* Display plant cost */}
                                        <button
                                            className={`product-button ${addedToCart[plant.name] ? 'added-to-cart' : ''}`}
                                            disabled={addedToCart[plant.name]}
                                            onClick={() => handleAddToCart(plant)} // Handle adding plant to cart
                                        >
                                            {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <CartItem onContinueShopping={handleContinueShopping} />
            )}
        </div>
    );
}

export default ProductList;