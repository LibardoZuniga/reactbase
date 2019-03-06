import React, { Component } from 'react';
import imageLogo from '../logo.svg';

class Logo extends Component {
  render() {
    return (
      <div className="Logo">
      	<div className="contenedorLogo">
	      	<div className="imageLogo">	
	      		<img src={imageLogo}  width="50"/>
	      	</div>
	      	<div className="TextLogo">
	      		Logicalsoft
	      	</div>
	     </div>
      </div>
    );
  }
}

export default Logo;