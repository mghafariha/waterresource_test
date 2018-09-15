import React from 'react';


import AllItems from './Components/AllItems';
import ItemForm from './Components/ItemForm';
import Visit from './Visit';


export class Form extends React.Component{
constructor(props){
    super(props);
}
    render(){
        return (
            
        <div className='form'>
           
            {/* <ItemForm/> */}
            <br/>
            <Visit  />
            </div>
            
          
          )
    }
}
