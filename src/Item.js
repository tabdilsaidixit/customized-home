import React from 'react';

const Item = (props) =>{
    let needItem = null;
    if(props.need){
        needItem = <h2> Need </h2>;
    }

    let wantItem = null;
    if(props.want){
        wantItem = <h2> Want </h2>;
    }

    return (
    <div>

        <h1> Image: {props.image}</h1>
        <div>
            <button onClick={props.needClick}> Need</button>
            {needItem}
        </div>
        <div>
            <button onClick={props.wantClick}> Want</button>
            {wantItem}            
        </div>
        
        <h3> <i>{props.title}</i> </h3>
    </div>
    );
}

export default Item;