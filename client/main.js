//import React library

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ImageList from './components/image_list';

//Create a component, allows React app to go out and fetch its own data

class App extends Component { // from React Component base class

  //in React, always called with props object. initialize component
  constructor(props) {
    super(props); //always put in React component whenever using constructor

    this.state = { images: [] }; // initialize state object. belongs to every React component we create. can have multiple properties, in this case with a single empty array
  }

  componentWillMount() {
    //Great place to load data! Only will be called one time

    //State = force re-render of data when something changes
    axios.get('https://api.imgur.com/3/gallery/hot/viral/0')
      .then(response => this.setState({ images: response.data.data }));
      //NEVER DO THIS --
      // this.state.images = [ {}, {} ];
  }

  render() {
    return (
      <div>
        <ImageList images = {this.state.images}/>
      </div>
    );
 }
};

//Render this component to the screen
Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.container'));
});
