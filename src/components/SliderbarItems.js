import React, { Component } from 'react';
import { TiChartBarOutline } from 'react-icons/ti';
class SliderbarItems extends Component {

  constructor(props){
      super(props);
      this.state = {
          moduleItem: this.props.moduleItem
      }
      console.log(props);
  }

  clickLi = ()=>{

    this.props.funchandleClick(this.state.moduleItem);
  }


  render() {
    return (

      		<li className="SliderbarLi" onClick={this.clickLi.bind()}> 
      			<div className="SliderbarIcon">
      				<TiChartBarOutline />  
      			</div>
      			<div className="SliderbarText">
      				{this.props.name}
      			</div>
      		</li>
    );
  }
}

export default SliderbarItems;