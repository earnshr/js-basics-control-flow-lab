//    scuberGreetingForFeet()
// 1) gives customers a free sample if the ride is less than
//    or equal to 400 feet
// 2) charges 30 dollars for a distance over 2000 feet
// 3) does not allow rides over 2500 feet



function scuberGreetingForFeet(distance) {
  if (distance <= 400) {
     return 'This one is on me!'
  } else if (1999 < distance && distance < 2500) {
    return 'I will gladly take your thirty bucks.'
  } else if (distance)
    return 'No can do.'
  }

function ternaryCheckCity(city) {
    return city === 'NYC' ? 'Ok, sounds good.' : 'No go.'
  }
//if tip is generous, reutrn 'Thank you so much.'
//if top is not generous as generous, return 'Thank you.'
//if anything else, return "Bye"
//tip is a parameter

function switchOnCharmFromTip(tip) {

  switch(tip) {
    case 'generous': 
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.'
  }
}
//switch case statement needs a default to end the code.
//

