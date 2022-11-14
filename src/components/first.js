import React from 'react'

export default function First(props) {
    const{form,setForm}=props
  return (
    <div>
        <form>
            <div>
                <div><label>Firstname</label></div>
            
            <input type="text" placeholder='FirstName' value={form.firstname} onChange={(e)=>setForm({...form,firstname:e.target.value})}/>
            </div>
            <div>
                <div><label>LastName</label></div>
            
            <input type="text" placeholder='LastName'  value={form.lastname} onChange={(e)=>setForm({...form,lastname:e.target.value})}/>
            </div>
            <div>
            <div> <label>Nick Name</label></div>
           
            <input type="text" placeholder='NickName'  value={form.nickname} onChange={(e)=>setForm({...form,nickname:e.target.value})}/>
            </div>

        </form>
    </div>
  )
}
