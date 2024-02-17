
function  monthlySavings(allPayments, livingCost){

  if(Array.isArray(allPayments) === true && typeof livingCost == "number"){
    let sum = 0;
    for(const item of allPayments){
      if(item >= 3000){
        const tax = item * 0.2;
        sum += item - tax;
      }
      else{
        sum += item;
      }
    }
    const savings = sum - livingCost;

    if(savings < 0){
      return "earn more"
    }
    else{
      return savings
    }
  }
  else{
    return "invalid input";
  }

}

// console.log(monthlySavings([ 1000 , 2000 , 3000 ] , 5400));
// console.log(monthlySavings([ 1000 , 2000 , 2500 ] , 5000));
// console.log(monthlySavings([ 900 , 2700 , 3400] , 10000));
// console.log(monthlySavings(100, [ 900 , 2700 , 3400]));