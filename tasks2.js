
function checkName(name) {
  if (typeof name == "string") {
    const characters = ["a", "y", "i", "e", "o", "u", "w"];
    newArray = [];

    for (const item of name) {
      newArray.push(item.toLowerCase());
    }

    const lastLetterOfName = newArray.length - 1;
    if (characters.includes(newArray[lastLetterOfName])) {
      return "Good Name";
    } else {
      return "Bad Name";
    }
  } else {
    return "invalid";
  }
}
// console.log(checkName("Salman"));
// console.log(checkName("RAFEE"));
// console.log(checkName(199));
// console.log(checkName(["Salman"]));
