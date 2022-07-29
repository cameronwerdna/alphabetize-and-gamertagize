//this program will alphabetically sort the elements of an array, and return the first value with 'xXx' between each character. ode to xbox gamertags, i suppose!

function twoSort(s) {
    let x = s.sort()
    return x[0].split('').join('xXx')
  }

// twoSort(['alarm', 'almost', 'alamo', 'alabama']) => 'axXxlxXxaxXxbxXxaxXxmxXxaxXx