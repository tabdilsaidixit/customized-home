import React from "react";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import ImageContainer from "./ImageContainer";
import Item from "./Item";
import './App.css';
class App extends React.Component {
    state = {
        currentIndex: 0,
        preferences:{
          hall:{
            needs:["table","fridge"],
            wants:["table", "chair"]
          },
          kitchen:{
            needs:["oven"],
            wants:[ "mixer"]
          },
          bedroom:{
            needs:["lamp", "bed"],
            wants:["lamp", "bed", "blanket"]
          },
          outdoor:{
            needs:["lawn"],
            wants:["pool"]
          }
        },
        rooms: ["hall", "kitchen", "bedroom", "outdoor"],
        hall:["table", "chair","fridge"],
        kitchen:["oven", "mixer"],
        bedroom:["lamp", "bed","blanket"],
        outdoor:["lawn", "pool"],
        needed:{
          hall:[true, false,true],
          kitchen:[false, true],
          bedroom:[false, true,false],
          outdoor:[true, false]
        },
        wanted:{
          hall:[false, true,false],
          kitchen:[true, false],
          bedroom:[false, false,true],
          outdoor:[true, false]
        },
        want: true,
        need: false
    };

    getItems = () => {
        let curIndex = this.state.currentIndex;
        const room = this.state.rooms[curIndex];
        const items = this.state[room];
        const wanted = this.state.wanted[room];
        const needed = this.state.needed[room];
        const itemsComponents = items.map((item, itemIndex)=>{
          return <Item
          key={itemIndex}
          title = {item} 
          image = {item}
          needClick = {()=>this.needHandler(room,itemIndex)} 
          wantClick = {()=>this.wantHandler(room,itemIndex)}
          want = {wanted[itemIndex]} 
          need = {needed[itemIndex]}
          />

        });
        return itemsComponents;
    };

    needHandler = (room,itemIndex) =>{
      console.log(this.state.needed[room][itemIndex]);
    }

    // wantHandler = (room,itemIndex) =>{
    //   this.setState({want: !this.state.want});
    // }

    wantHandler = (roomIndex,itemIndex) =>{
      // const room = this.state.rooms[roomIndex];
      // const wantedTemp = [...this.state.wanted[room]];
      // wantedTemp[itemIndex] = !wantedTemp[itemIndex];
      // this.setState({wanted: wantedTemp});
    }
 

    



    nextIndex = () => {
        const { rooms, currentIndex } = this.state;
        if (currentIndex === rooms.length - 1) {
            return this.setState({ currentIndex: 0 });
        }
 
        return this.setState({
            currentIndex: currentIndex + 1
        });
    };
 
    prevIndex = () => {
        const { rooms, currentIndex } = this.state;
        if (currentIndex === 0) {
            return this.setState({
                currentIndex: rooms.length - 1
            });
        }
 
        return this.setState({
            currentIndex: currentIndex - 1
        });
    };

    
    render() {
       return (
            <div>
                <ReactScrollWheelHandler
                    upHandler={this.prevIndex}
                    downHandler={this.nextIndex}
                   
                >
                  <ImageContainer image={this.state.rooms[this.state.currentIndex]}/>
                </ReactScrollWheelHandler>
{/*                 
                <Item
                 title = " Item Name" 
                 image = {this.state.rooms[this.state.currentIndex]}
                 needClick = {this.needHandler} 
                 wantClick = {this.wantHandler}
                 want = {this.state.want} 
                 need = {this.state.need}
                 /> */}

                 <div className="splitscreen">
                   {this.getItems()}
                 </div>

                 

            </div>
        );
    }
}

export default App;