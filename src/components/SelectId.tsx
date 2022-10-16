import Select from 'react-select'
import { useState } from 'react';
interface Device{
    label?:string
    kind:string
    deviceId:string
}
interface FcProp{
  options:Device[]
  onSelect:(id:string)=>void
}

const SelectId = (props:FcProp)=>{
    const options =props.options

    const [selectedDevice,setSelectedDevice]=useState(null)

    const handleChange = (selectedOption:any) => {
        setSelectedDevice(selectedOption);
        props.onSelect(selectedOption.value)
        
    };
    const formateOption = ()=>{
        return options.map((option:Device)=>{
            return  { value: option.deviceId, label: option.label }
            
        })
    }
    return(
        <Select
            value={selectedDevice}
            onChange={handleChange}
            options={formateOption()}
       />
    )
    
}
export default SelectId