import React,{useState,useEffect} from 'react';
import {db,auth} from '../services/firebase';
import Product from './Product';
import './Product.css';



const  Api = ()=> {

    const [products, setProducts] = useState(null);



    useEffect(()=>{
        console.log("effect has run");
        db.collection('items')
          .onSnapshot((snapshot)=>
        //   setProducts(snapshot)
          setProducts(snapshot.docs.map((doc)=>({id:doc.id, data:doc.data()})))
          );
          }, []);
        //   .catch(error=>console.log(error))


    // const apiCallTo = () =>{
    //     db.collection('items')
    //       .get()
    //       .then( snapshot => {
    //         const items = []
    //         snapshot.forEach(doc =>{
    //             const data = doc.data()
    //             items.push(data)
    //         })
    //         setItems({items})
    //         // console.log(items)
    //       })
    //       .catch(error=>console.log(error));
    // }

    return (
        <div>
            {
                products ?       
                products.map((post)=>
                (
                    <div className="product_grid">
                        <Product  key={post.id} name={post.data.name} color={post.data.color}/>

                    {/* <h1>{post.id}</h1>
                    <p>{post.data.name}</p>
                    <p>{post.data.color}</p> */}
                    </div>
                ))
                :
                <div>nothing {console.log("nothing")}</div>

                }
        </div>
    )
};

export default Api
