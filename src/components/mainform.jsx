import React, { useState } from 'react'
import First from './first'
import Second from './second'
import Third from './third'
import "./mainform.css"
export default function Mainform() {
    const [stage,setstage]=useState(0)
    const[form,setForm]=useState({firstname:"",lastname:"",nickname:"",country:"",city:"",postalcode:"",email:"",phone:""})
    const fun=()=>{
        if(stage==0){
            return(<First form={form} setForm={setForm}/>)
        }
        else if(stage==1){
            return(<Second form={form} setForm={setForm}/>)
        }else{
            return(<Third form={form} setForm={setForm}/>)
        }
    }
    const prev=()=>{
        if(stage!=0){
            setstage(stage-1)
        }
    }
    const next=()=>{
        if(stage!=2){
            setstage(stage+1)
        }else{
            alert("data submitted")
        }
    }
  return (
    <div className='form'>
        {fun()}
        <div className='buttons'>
        <button onClick={()=>prev()}>Prev</button>
        <button onClick={()=>next()}>{stage==2?<>submit</>:<>Next</>}</button>
        </div>
    </div>
  )
}
