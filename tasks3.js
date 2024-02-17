
function deleteInvalids(myArray) {
  if(Array.isArray(myArray) === true){
    const filteredArray = [];

    for(const item of myArray){
      if(typeof item == "number"){
        if(!isNaN(item)){
          filteredArray.push(item);
        }
      }
    }
    return filteredArray;
  }
  else{
    return "Invalid Array";
  }
}

// console.log(deleteInvalids([1 , null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]));
// console.log(deleteInvalids(['1' , {num:2} , NaN ]));
// console.log(deleteInvalids([ 1 , 2 , -3 ]));
// console.log(deleteInvalids({num: [ 1 , 2 , 3 ]}));
