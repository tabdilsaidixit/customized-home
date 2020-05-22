import React from "react";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import ImageContainer from "./ImageContainer";
import Item from "./Item";
import './App.css';
class App extends React.Component {
  state = {
    currentIndex: 0,
    rooms: ["hall", "kitchen", "bedroom", "outdoor"],
    items: {
      hall: ["table", "chair", "fridge"],
      kitchen: ["oven", "mixer"],
      bedroom: ["lamp", "bed", "blanket"],
      outdoor: ["lawn", "pool"]
    },

    preferences: {
      hall: {
        needs: ["table", "fridge"],
        wants: ["table", "chair"]
      },
      kitchen: {
        needs: ["oven"],
        wants: ["mixer"]
      },
      bedroom: {
        needs: ["lamp", "bed"],
        wants: ["lamp", "bed", "blanket"]
      },
      outdoor: {
        needs: [],
        wants: []
      }
    },
  };

  getItems = () => {
    let curIndex = this.state.currentIndex;
    const room = this.state.rooms[curIndex];
    const items = this.state.items[room];
    const wanted = this.state.preferences[room].wants;
    const needed = this.state.preferences[room].needs;

    const itemsComponents = items.map((item, itemIndex) => {
      return <Item
        key={itemIndex}
        title={item}
        image={item}
        needClick={() => this.needHandler(room, item)}
        wantClick={() => this.wantHandler(room, item)}
        want={wanted.includes(item)}
        need={needed.includes(item)}
      />

    });
    return itemsComponents;
  };

  needHandler = (room, item) => {
    const needed = this.state.preferences[room].needs;
    let preferencesT = {...this.state.preferences};
    if(needed.includes(item)){
      preferencesT[room].needs = preferencesT[room].needs.filter(e => e !== item);
    }else{
      preferencesT[room].needs.push(item);
    }
    this.setState({preferences:preferencesT});
  }


  wantHandler = (room, item) => {
    const wanted = this.state.preferences[room].wants;
    let preferencesT = {...this.state.preferences};
    if(wanted.includes(item)){
      preferencesT[room].wants = preferencesT[room].wants.filter(e => e !== item);
    }else{
      preferencesT[room].wants.push(item);
    }
    this.setState({preferences:preferencesT});
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
          <ImageContainer image={this.state.rooms[this.state.currentIndex]} />
        </ReactScrollWheelHandler>

        <div className="splitscreen">
          {this.getItems()}
        </div>



      </div>
    );
  }
}

export default App;