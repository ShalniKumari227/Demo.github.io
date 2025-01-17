const Hero = () => {
    return (
        <main className="hero container">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus dolorum, corrupti deserunt quae architecto esse odio 
                </p>
                <div className="hero-btn">
                    <button>Shop Now</button>
                    <button className="secondary-btn">Category</button>
                </div>
                <div className="shopping">
                    <p>Also Available On</p>
                    <div className="brand-icon">
                        <img src="/images/amazon-logo.png" alt="" />
                        <img src="/images/flipkart-logo.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="hero-image">
                <img src="/images/shoes.png" alt="" />
            </div>
        </main>
    );
};

export default Hero;