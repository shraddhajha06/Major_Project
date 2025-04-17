import React from "react";
import {useNavigate}from "react-router-dom";
import Layout from "../components/Layout/Layout";

const HomePage = () => {
  const navigate=useNavigate();
  const img1="https://media.istockphoto.com/id/876864896/photo/luxurious-new-construction-home-in-bellevue-wa.webp?b=1&s=170667a&w=0&k=20&c=HHYUMi4AIyjPq-JZAmzz_HY37rvQV1hWfNEMnzCmYr0=";
  const img2="https://media.istockphoto.com/id/899471458/photo/purchase-agreement-for-new-house.webp?b=1&s=170667a&w=0&k=20&c=YuYOh4uAK_BcOloalnWIqzRRvJC1H9CGzutgWeTmrWg=";
  return(
    <Layout>
        <div className="container mt-4">
          <div className="row">
            <h1>Category</h1>
            <div className="col-md-5">
              <div className="Imagecontainer">
  <img src={img1} alt="Rent" style={{width: "100%"}} />
  <button className="btn" 
  onClick={()=>navigate("/category/rent")}>
    TO RENT</button>
     </div>
   </div>
            <div className="col-md-5">
            <div className="Imagecontainer">
  <img src={img2} alt="Rent" style={{width: "110%"}} />
  <button className="btn"
  onClick={()=>navigate("/category/sale")}>
    TO SALE</button>
       </div>
    </div>
   </div>
</div>
</Layout>
  );
};

export default HomePage;