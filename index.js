function scuberGreetingForFeet(feet){
  let result  
  if(feet <= 400) {
    result = "This one is on me!";
  }
  if (feet > 400 && feet <= 2000){
    result = "That will be twenty bucks.";
  }
  if (feet > 2000 && feet <= 2500){
    result = "I will gladly take your thirty bucks."
  }
  else if (feet > 2500){
    return "No can do."
  }
  return result
}
function ternaryCheckCity(location){
  return location === "NYC" ?  "Ok, sounds good." : "No go."
}
function switchOnCharmFromTip(tips){
  switch(tips){
    case "generous":
    return "Thank you so much."
    case "not as generous" :
      return "Thank you."
      case   "thanks for everything":
        return "Bye."
  }
}