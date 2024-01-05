import React from 'react'
import {calculateInvestmentResults , formatter} from '../utils/investment.js'

export default function Results({input}) {
  const resultData = calculateInvestmentResults(input);
  const initialInvestment = resultData[0].valueEndOfYear - resultData[0].interest - resultData[0].annualInvestment
  return (
    <table id='result'>
       <thead>
        <tr>
         <th>Year</th>
         <th>InvestMent Value</th>
         <th>Interest (year)</th>
         <th>Total Interest</th>
         <th>Invested Capital</th>
         </tr>
       </thead>
       <tbody>
         {resultData.map((yearData)=>{
          return(
           <tr key= {yearData.year}>
            <td>{yearData.year}</td>
            <td>{formatter.format(yearData.valueEndOfYear)}</td>
          </tr>
          )
          
         })}
       </tbody>
    </table>
  )
}