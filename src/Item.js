import React from 'react';
import './Item.css';
import './ImageContainer.css';

const Item = (props) => {
  
    return (
        <div className="Item" styles={{ backgroundImage:`url(${props.image})` }}>

    <img className="Image" src={require(`${props.image}`)} alt="Logo"/>
            <div>
                <label>
                    Need it
                    <input
                        type="checkbox"
                        checked={props.need}
                        onChange={props.needClick} />
                </label>
            </div>
            <div>
            <label>
                    Want it
                    <input
                        type="checkbox"
                        checked={props.want}
                        onChange={props.wantClick} />
                </label>
            </div>

            <h1> <i>{props.title}</i> </h1>
        </div>
    );
}

export default Item;