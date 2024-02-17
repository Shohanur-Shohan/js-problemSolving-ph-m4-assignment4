
function password(userInfo){
  if(userInfo.name === undefined || userInfo.birthYear === undefined || userInfo.siteName === undefined){
    return "invalid";
  }
  else{
    const socialSite = userInfo.siteName[0].toUpperCase() + userInfo.siteName.slice(1);
    if(userInfo.birthYear.toString().length == 4){
      const newPassword = `${socialSite}#${userInfo.name}@${userInfo.birthYear}`;
      return newPassword;
    }
    else{
      return "invalid";
    }  
  }
}

// console.log(password({ name: 'kolimuddin' , birthYear: 1999 , siteName: 'google' }));
// console.log(password({ name: 'rahat' , birthYear: 2002, siteName: 'Facebook' }));
// console.log(password({ name: 'kolimuddin' , birthYear: 1999 , siteName: 'google' }));
// console.log(password({ name: 'kolimuddin' , birthYear: 1999 , siteName: 'google' }));
