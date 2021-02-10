import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { db } from "./services/firebase";
import { useState, useEffect } from "react";
import ProductPage from "./components/ProductPage";
import Footer from "./components/Footer";

function App() {

 // search query words

  const [search, setSearch] = useState("");



  // products from the database
  const [products, setProducts] = useState(null);

  // Items in Cart
  const [cart, setCart] = useState(0);

  // getting data from firestore database
  useEffect(() => {
    console.log("effect has run");
    db.collection("items").onSnapshot((snapshot) =>
      setProducts(
        snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
      )
    );
  }, []);


  return (
    <div className="App">
      <Router>
      <Header cart={cart} setProducts={setProducts} search={search} setSearch={setSearch}/>
        <Switch>
          <Route exact path="/">
            <Home products={products} cart={cart} setCart={setCart} search={search}/>
          </Route>
          {products ? (
            products.map((post) => (
              <Route key={post.id} path={"/" + post.id}>
                <ProductPage
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
              </Route>
            ))
          ) : (
            <img src="https://i.pinimg.com/originals/38/2a/25/382a257e82075d16cec2a597b4ad6f23.gif"/>
          )}
        </Switch>
      </Router>
      <Footer />
      {/* {search ? runquery() : console.log("nothing in quey to run")} */}
    </div>
  );
}

export default App;
