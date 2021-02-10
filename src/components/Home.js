import React from "react";
import "./Home.css";
import Product from "./Product";
import banner from "./images/banner34.jpg";

function Home({ products, cart, setCart }) {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={banner} alt="" />
        <div className="home__row">
          {products ? (
            products.map((post) => (
              <div key={post.id} className="home__row">
                <ul key={post.id}>
                  <li key={post.id} className="list__name">
                    <Product
                      className="product"
                      key={post.id}
                      id={post.id}
                      name={post.data.name}
                      color={post.data.color}
                      price={post.data.price}
                      discription={post.data.discription}
                      brand={post.data.brand}
                      size={post.data.size}
                      image={post.data.img}
                      cart={cart}
                      setCart={setCart}
                    />
                  </li>
                </ul>
              </div>
            ))
          ) : (
            <div> <img src="https://i.pinimg.com/originals/38/2a/25/382a257e82075d16cec2a597b4ad6f23.gif"/>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
