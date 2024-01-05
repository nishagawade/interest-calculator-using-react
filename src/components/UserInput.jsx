import React from 'react'

export default function UserInput({user , onChange}) {

  return (
    <section id= "user-input">
     <div className='input-group'>
      <p>
        <label>Initial Investment</label>
        <input type="number" 
        value = {user.initialInvestment}
        onChange = {(e)=>onChange( 'initialInvestment' ,e.target.value)}
        />
      </p>
      <p>
        <label>Annual Investment</label>
        <input type="number"
        value = {user.annualInvestment}
        onChange = {(e)=>onChange('annualInvestment',e.target.value)}
        />
      </p>
     </div>

     <div className='input-group'>
      <p>
        <label>Expected Return</label>
        <input type="number" 
        value = {user.Return}
        onChange = {(e)=>onChange('Return',e.target.value)}
        />
      </p>
      <p>
        <label>Duration</label>
        <input type="number" 
        value = {user.year}
        onChange = {(e)=>onChange('year',e.target.value)}
        />
      </p>
     </div>
    </section>
  )
}
