export function exercise01(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement != "e" && currentElement != "E")
      result.push(currentElement)
  }
  return result.join("")
}

export function exercise02(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    result.push(currentElement.toUpperCase())
  }
  return result.join("")
}

// export function exercise03(args) {
//   const input = args
//   const result = []
//   let numOfChars = currentElement.match(/[e]/g).length
//   HTMLFormControlsCollection.log(numOfChars)
// }

export function exercise03(args) {
  let input = args
  let result = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e" || currentElement === "E") {
      result++
    }
  }
  return result
}

export function exercise05(args) {
  const input = args

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i].charCodeAt()
    if (currentElement >= 65 && currentElement <= 90) {
      return true
    }
  }
  return false
}

export function exercise04(args) {
  let input = args
  let result = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i].charCodeAt() //we use .charCodeAt() if we work with the Ascii Table//
    if (
      currentElement === 32 ||
      (currentElement === 33 && currentElement === s)
    ) {
      result++
    }
  }
  return result + 1
}

export function exercise06(args) {
  let input = args

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i].charCodeAt()
    if (
      (currentElement >= 33 && currentElement <= 47) ||
      (currentElement >= 58 && currentElement <= 64) ||
      (currentElement >= 91 && currentElement <= 96) ||
      (currentElement === 123 && currentElement <= 126)
    ) {
      return true
    }
  }
  return false
}

export function exercise07(args) {
  const input = args
  return input.includes("and") //if the input contains an "and" the output will be true, otheerwise it will always staid false//
}

//exercise 7, source:https://www.w3schools.com/jsref/jsref_includes.asp//

//export function exercise07(args) {
//const input = args

//for (let i = 0; i < input.length; i++) {
//const currentElement = input[i]
//if (currentElement.includes("and")) {
//return true
//}
// }
//return false
//}

//currentElement === 97 && currentElement === 110 && currentElement === 100//
//for (let i = 0; i < input.length; i++)// a loop, let=defines a value, in this case it defines, that i is 0. As long as i is smaller than the input, the loop should run. I++ sais that each time the loop runs, the value of i increases. When i is smaller than the input the statment in the { } will be excuted. Each loop checks the letter/number in the input. If all number s are checked the input will become greater than the lenght of the input and the loop stops. //

export function exercise08(args) {
  let input = args

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const result = input.replace(/e/g, "3") // .replace can't be in a loop. The concept of replace : .replace(element you want to replace "g", element you want to replace with). The "g" indicates, that after the first match, the cod should not stopp but continue untill the input.lenght is progressed. The e is between two slashes because they indicate tha start and the end of a character. Also it is curcial so we can unse a flaf (the "g") because they only work thogheter with these slashes.//
    return result
  }
}
//wesite: https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_replace2
//https://www.freecodecamp.org/news/javascript-replace-how-to-replace-a-string-or-substring-in-js///

export function exercise09(args) {
  let input = args

  for (let i = 0; i < input.length; i++) {
    if (input.length === 6) {
      return true
    }
    return false
  }
}

//https://www.w3schools.com/jsref/jsref_length_string.asp//

export function exercise11(args) {
  const input = args
  if (input.length > 0) {
    const result = input.charCodeAt(0)
    console.log(`The ASCII value of ${input} is: ${result}`)
  }
}
// does not work //
// exercise 11, sources: https://www.youtube.com/watch?v=7MW8EJDoIxs&ab_channel=Celotek , https://www.youtube.com/watch?v=jfJ4Fi-Onpo&ab_channel=Webster , https://www.programiz.com/javascript/examples/ascii-value-character//

//char= the character, example: a,b,c,d,e,f/ (https://www.shecodes.io/athena/24057-what-is-an-integer-in-javascript#:~:text=In%20JavaScript%2C%20an%20integer%20is,values%2C%20depending%20on%20the%20platform.) int= interger, is an number
//(https://www.w3schools.com/js/js_string_methods.asp) a string is a function like .length or .substring()//

export function exercise12(args) {
  const input = args
  const result = input.indexOf("e")
  return result
}
//https:www.w3schools.com/jsref/tryit.asp?filename=tryjsref_indexof

export function exercise14(args) {
  let input = args
  let index = 2
  let result = input.charAt(index)

  return "Character at " + (index + 1) + "th position is: " + result
}

// exercise 14, source: https://www.geeksforgeeks.org/how-to-get-character-of-specific-position-using-javascript/
