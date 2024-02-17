
function calculateMoney(ticketSold) {
  if (ticketSold >= 0) {
    const dailyIncome = ticketSold * 120;
    const dailySecurityGuardCost = 500;
    const dailyStaffCost = 8 * 50;
    const dailyTotalCost = dailySecurityGuardCost + dailyStaffCost;

    const dailyProfit = dailyIncome - dailyTotalCost;
    return dailyProfit;
  } else {
    return "Invalid Number";
  }
}


// console.log(calculateMoney(-130));
// console.log(calculateMoney(1130));
// console.log(calculateMoney(10));