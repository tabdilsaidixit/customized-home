import React from 'react';
import './ImageContainer.css';
const ImageContainer = (props) =>{

 return (
 <div className="ImageContainer">
     <img className="Image" src={require(`./assets/imgs/colors/${props.image.toLowerCase()}.PNG`)} alt="Logo"/>
     <h1>{props.image}</h1>

 </div>);
}

export default ImageContainer;