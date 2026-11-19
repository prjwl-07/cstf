
import React, {useState} from 'react';
import ProductCard from "./Components/ProductCard";
import ProductDetail from "./Components/ProductDetail";
import products from "./data/products.json";
import "./App.css";

function App() {
  const [check, setCheck] = useState(false);

  const [pId, setpId] = useState(0);
  
  const applyCheck = (pid) => {
    setpId(pid);
    if(!check)setCheck(true);
    else setCheck(false);
  }

  const product = products.find((p) => pId == p.id);

  if(check){
    return <ProductDetail product={product} setCheck={setCheck}></ProductDetail>
  }
  return (
    <div className="products">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} applyCheck={applyCheck}></ProductCard>
      ))}
    </div>
  );
}

export default App;
