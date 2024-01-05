export function calculateInvestmentResults({initialInvestment , annualInvestment, Return , year}){
   
    const annualData = [];
  let investmentValue = initialInvestment
    for(let i= 0; i<year; i++){
        let interestEarnedInYear = investmentValue*(Return/100);
        investmentValue = +annualInvestment + interestEarnedInYear;
        annualData.push({
            year : i+1,
            annualInvestment : annualInvestment,
            interest : interestEarnedInYear,
           valueEndOfYear : investmentValue
        })
    }
    return annualData ;
}

export const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });