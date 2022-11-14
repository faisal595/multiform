import React from 'react'

export default function Second(props) {
    const{form,setForm}=props
  return (
    <div>
        <form>
            <div>
                <div><label>Country</label></div>
            
            <input type="text" placeholder='country'  value={form.country} onChange={(e)=>setForm({...form,country:e.target.value})}/>
            </div>
            <div>
                <div><label>City</label></div>
            
            <input type="text" placeholder='city'  value={form.city} onChange={(e)=>setForm({...form,city:e.target.value})}/>
            </div>
            <div>
            <div> <label>PostalCode</label></div>
           
            <input type="number" placeholder='pincode' value={form.postalcode} onChange={(e)=>setForm({...form,postalcode:e.target.value})}/>
            </div>

        </form>

    </div>
  )
}
