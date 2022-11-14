import React from 'react'

export default function Third(props) {
    const{form,setForm}=props
  return (
    <div>
        <form>
            <div>
                <div><label>Email</label></div>
            
            <input type="email" placeholder='abc@email.com' value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})}/>
            </div>
            <div>
                <div><label>Phone Number</label></div>
            
            <input type="number" placeholder='phone no' value={form.phone} onChange={(e)=>setForm({...form,phone:e.target.value})}/>
            </div>
           

        </form>
    </div>
  )
}
