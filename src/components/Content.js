import React, { Component } from 'react';

import File from './../modules/files/Files'
class Content extends Component {

	constructor(props){
		super(props);

	}
  render() {
    return (
      <div className="Content">
      	  {this.props.contentView === 'dashboard' ? (
                    <h2>Cargando</h2>

            ) : this.props.contentView === 'files' ? (
                    <File />

            )  : <div>{this.props.contentView}</div>}
      </div>
    );
  }
}

export default Content;