import React from 'react';

class CheckBox extends React.Component{
    render(){
        return (<input id={this.props.internalName}
    name={this.props.internalName}
    type='checkbox'
    value={this.props.value}
    onChange={this.props.onChange} />
    
    )
    }
} 
export default CheckBox
    