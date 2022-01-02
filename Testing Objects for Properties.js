var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh",
    city: "Seattle"
  };
  function checkObj(obj, checkProp) {
    // Only change code below this line
    if (myObj.hasOwnProperty(checkProp)){
      return myObj[checkProp];
    } else{
      return "Not Found"
    };
    // Only change code above this line
  };