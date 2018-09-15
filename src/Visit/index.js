import React from 'react';
import {connect} from 'react-redux'
import {setAllItems,setColumns} from '../store/action';
import {getAllVisitItem} from '../api';
import ColumnSelect from '../Components/DataGrid/ColumnSelect'
import Table from '../Components/DataGrid/Table'



class Visit extends React.Component{
    constructor(props){
        super(props);

    }
   
    componentDidMount=()=>{  
        getAllVisitItem().then((response)=>{
                this.props.dispatch(setAllItems('visitItems',response.data));
                this.props.dispatch(setColumns('visitItems',[{'Header':'شناسه','accessor':'ID'},{'Header':'طول جغرافیایی','accessor':'LongitudeWell'},{'Header':'عرض جغرافیایی','accessor':'LatitudeWell'},{'Header':'DateCensus','accessor':'DateCensus'},{'Header':'کد مالک','accessor':'OwnerCode'},{'Header':'موبایل مالک' ,'accessor':'OwnerMobile'},
                {'Header':'حجم مجاز برداشت(متر مکعب در سال)','accessor':'ApprovedVolume'},{'Header':'ساعت کارکرد سالانه' ,'accessor':'WorkHours'},{'Header':'میزان قدرت(برق)' ,'accessor':'PowerlevelElectricity'},{'Header':'میزان قدرت (دیزل)'  ,'accessor':'PowerlevelDiesel'},{'Header':'نوع مصرف آب بر اساس پرونده بهره برداری'  ,'accessor':'KindConsumptionWater'},{'Header':'لوله جدار' ,'accessor':'KindPipeline'}]));
                console.log('visitedItems',this.props.items)
                
        })
    }
    render(){

        return(<div>
            <ColumnSelect  storeIndex='visitItems' {...this.props} />
            {/* <Table  storeIndex='visitItems' {...this.props}/>  */}
            </div>)
    }
}
const mapStateToProps=(state)=>({columns:state.columns['visitItems'],items:state.items['visitItems']})
export default  connect(mapStateToProps)(Visit)
