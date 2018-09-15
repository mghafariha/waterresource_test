import {ADD_ITEM,SET_ALL_ITEMS,SET_FIELD_VALUE,SET_ITEM,DELETE_ITEM,UPDATE_ITEM,SET_INFRACTION_FIELD_VALUE,SET_INFRACTION_ITEM,SET_COLUMNS,CHECKED_COLUMN} from './constant';

export const addItem=(item)=>({

    type:ADD_ITEM,
    item
})
export const setAllItems=(index,data)=>({

    type:SET_ALL_ITEMS,
    data,
    index
})
export const setFieldValue=(internalName,value)=>({
type:SET_FIELD_VALUE,
field:{internalName,value}
})
export const setInfractionFieldValue=(internalName,value)=>({
type:SET_INFRACTION_FIELD_VALUE,
field:{internalName,value}

})
export const setInfractionItem=(item)=>({
    type:SET_INFRACTION_ITEM,
    item:item
})
export const setItem=(item)=>({
    type:SET_ITEM,
    item:item
})
export const deleteItem=(item)=>({
    type:DELETE_ITEM,
    item:item
})
export const changeItem=(item)=>({
    type:UPDATE_ITEM,
    item:item
})
export const setColumns=(index,columns)=>({
    type:SET_COLUMNS,
     cols: {index,columns}
})
export const checkedColumn=(index,isChecked)=>({

    type:CHECKED_COLUMN,
    checked:{index,isChecked}
})