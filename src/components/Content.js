import React, { Component } from 'react';

class Content extends Component {

	constructor(props){
		super(props);

	}
  render() {
    return (
      <div className="Content">
      	  {this.props.contentView === 'dashboard' ? (
                    <h2>Cargando</h2>

            ) : this.props.contentView === 'slide' ? (
                    <h2>Cargando</h2>

            )  : <div>{this.props.contentView}</div>}
      </div>
    );
  }
}

export default Content;