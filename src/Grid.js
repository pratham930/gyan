import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./Grid.css"

const Grid = () => {
    
    return (
        <>
        <div>
        <div className="kard">
           
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="  " style={{width:"100%" ,height:"300px"}} src="https://gyanganga.net/images/gallery/36.jpg" alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="" style={{width:"100%" ,height:"300px"}}   src="https://gyanganga.net/images/gallery/17.jpg" alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="" style={{width:"100%" ,height:"300px"}}  src="https://gyanganga.net/images/gallery/26.jpg" alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
   
</div>


  <div className="kard-body">
   
    <a href="#" className="btn btn-dark">
      
    <ShoppingCartIcon size="small" />
      Pay Online payment</a>
  </div>
</div>

        </>
    )
};

export default Grid;
