import React from 'react';
import {connect}from 'react-redux';
import CheckBox from './CheckBox'
import CheckBoxWid from '../CheckBox/widget'
import {checkedColumn,setColumns} from '../../store/action'

class ColumnSelect extends React.Component{
    constructor(props){
        super(props);
        
    }
    componentDidMount=()=>{

        this.props.dispatch(setColumns(this.props.storeIndex,[{'Header':'شناسه','accessor':'ID'},{'Header':'طول جغرافیایی','accessor':'LongitudeWell'},{'Header':'عرض جغرافیایی','accessor':'LatitudeWell'},{'Header':'DateCensus','accessor':'DateCensus'},{'Header':'کد مالک','accessor':'OwnerCode'},{'Header':'موبایل مالک' ,'accessor':'OwnerMobile'},
        {'Header':'حجم مجاز برداشت(متر مکعب در سال)','accessor':'ApprovedVolume'},{'Header':'ساعت کارکرد سالانه' ,'accessor':'WorkHours'},{'Header':'میزان قدرت(برق)' ,'accessor':'PowerlevelElectricity'},{'Header':'میزان قدرت (دیزل)'  ,'accessor':'PowerlevelDiesel'},{'Header':'نوع مصرف آب بر اساس پرونده بهره برداری'  ,'accessor':'KindConsumptionWater'},{'Header':'لوله جدار' ,'accessor':'KindPipeline'}]));
      console.log('columns',this.props.columns);
     this.setState({columns:this.props.columns});
    }
handleChange=(e)=> {

    const internalName= e.target.internalName;
    const isChecked = e.target.checked;
    this.props.dispatch(checkedColumn(internalName,isChecked));
   // this.setState(prevState => ({ checkedItems: prevState.checkedColumns.set(item, isChecked) }));
    
  }
render(){
    return(<div>
       {/* {
          this.state.columns.map(col => (
            <label key={col.key}>
              {col.name}
              <input />
              {/* <CheckBox render={CheckBoxWid} internalName={col.accessor} checked={this.state.checkedColumns.get(col.accessor)} onChange={this.handleChange} /> */}
            {/* </label> */}
          ))
        } */}
    </div>)
}


}
const mapStateToProps=(state)=>(
    console.log('colll',state.columns.visitItems),
    {columns:state.columns.visitItems})
export default  connect(mapStateToProps)(ColumnSelect)