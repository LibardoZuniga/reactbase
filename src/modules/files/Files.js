import React, { Component } from 'react';
import ItemFiles from './ItemFiles';
import './files.css';

class Files extends Component {

  constructor(props){
      super(props);

  }



  render() {
    return (
        <div className="cuerpoArchivos">
          <h3>Manejador de Archivos</h3>
          <div className="contenedor">
              <table>
                <tr className="header">
                  <td>&nbsp;</td>
                  <td>Nombre</td>
                  <td>Tipo</td>
                  <td>Acciones</td>
                </tr>
                <ItemFiles />
              </table>
          </div>
        </div>
    );
  }
}

export default Files;