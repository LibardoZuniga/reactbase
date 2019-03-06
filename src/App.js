import React, { Component } from 'react';
import { ExportModule } from './actions/appAction';
import Sliderbar from './components/Sliderbar'
import Navbar from './components/Navbar'
import Content from './components/Content'
import './App.css'



class App extends Component {

	constructor(props){
		super(props);
		 this.state = {
		      contentView: '',
		      module:ExportModule()
		  }
	}

	changeContentView = (menu)=>{
		this.setState({
	        contentView: menu
	    });

		console.log(menu);

	}

  render() {
    return (
      <div className="App">
        <Sliderbar  modules={this.state.module} funchandleClick={this.changeContentView}/>
        <Navbar />
        <Content contentView={this.state.contentView}/>
      </div>
    );
  }
}

export default App;
