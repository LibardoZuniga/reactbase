import React, { Component } from 'react';
import { FaFolderOpen,FaRegFileAlt,FaRegEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
class ItemFiles extends Component {

  constructor(props){
      super(props);

  }



  render() {
    return (
    <tr >
      <td className="pointer">
        <FaFolderOpen />
      </td>
      <td>Nombre</td>
      <td>Folder</td>
      <td>
        <FaRegEye className="pointer" /> &nbsp;&nbsp;&nbsp;
        <MdDelete className="pointer" />
      </td>
    </tr>
    );
  }
}

export default ItemFiles;