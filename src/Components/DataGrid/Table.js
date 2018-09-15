import React from 'react';
import {connect} from 'react-redux';
import {moment} from 'moment-jalaali';
import ItemRow from '../ItemRow';
import ItemForm from '../ItemForm';
import {getAllVisitItem,removeItem} from '../../api';
import {setAllItems,deleteItem} from '../../store/action'
import 'react-table/react-table.css';
import Modal from 'react-modal';
import ColumnsFilter from '../ColumnsFilter';

import ReactTable from "react-table";
import { ReactTableDefaults } from "react-table";
Modal.setAppElement('#root');
const customStyles = {
  content : {
  top                   : '50%',
  left                  : '50%',
  right                 : 'auto',
  bottom                : 'auto',
  marginRight           : '-50%',
  transform             : 'translate(-50%, -50%)'
  }
  }

  class Table extends React.Component{

    constructor(props){
        super(props);
        this.state={column:[], 
          showModal: false,
          selectedItem:{},formName:''
        }
    }

    handleClick(event) {  // switch the value of the showModal state
      this.setState({
        showModal: !this.state.showModal
      });
    }
    handleOpenModal =(e)=> {
      this.setState({ showModal: true });
    }
    
    handleCloseModal =(e)=> {
      this.setState({ showModal: false });
    }
    removeClick=(row)=>{
     removeItem(row['ID']).then((response)=>{
     this.props.dispatch(deleteItem(row))
      }).catch((e)=>console.log(e))
    }
   
  componentDidMount=(e)=>{

    getAllVisitItem().then((response)=>{
        
        this.props.dispatch(setAllItems((response.data)));
      
       this.setState({datasource:this.props.items.map((itm,index)=>({...itm,key:index}))})   ;
       console.log('datasource',this.state.datasource);
    
    })
  }
  render(){
    return(<div>table</div>)
  }

}
export default Table