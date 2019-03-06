import React, { Component } from 'react';
import Logo from './Logo'
import SliderbarItems from './SliderbarItems'
import { TiChartBarOutline } from 'react-icons/ti';
class Sliderbar extends Component {

	constructor(props){
		super(props);
	}

  handleClick= (id) => {
    this.props.funchandleClick(id);
  }


  render() {

    var indents = [];
     for (var i in this.props.modules) {
        indents.push( <SliderbarItems funchandleClick={this.handleClick}  icon="" name={i} moduleItem={this.props.modules[i]} />);
      }
    return (
      <div className="Sliderbar">
      	<Logo />
      	<ul>
          {indents}
      	</ul>
      </div>
    );
  }
}

export default Sliderbar;