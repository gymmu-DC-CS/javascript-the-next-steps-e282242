export function exercise01(args) {
  const input = args
  const result = []

  for (
    let i = 0; //let defines a value, in this case, that i is 0//
    i < input.length;
    i++ //this is a loop. As long as i is smaller than the input, the loop runs. I++ sais that each time the loop runs, the value of i increases. When i is smaller than the input the statment in the { } will be excuted. Each loop checks the letter/number in the input. If all number s are checked the input will become greater than the lenght of the input and the loop stops.
  ) {
    const currentElement = input[i]
    if (currentElement != "e" && currentElement != "E")
      // the "!" means inequality, if a eelement in the input is not "E/e", the output if this element stays the same. //
      result.push(currentElement)
  }
  return result.join("") //But if the element is equal to "E/e" this character gets eliminated, insted of "E/e" nothing is written//
}

export function exercise02(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    result.push(currentElement.toUpperCase()) //"toUpperCase()", conveerts the characters of the input into upper case//
  }
  return result.join("")
}

// export function exercise03(args) {
//   const input = args
//   const result = []
//   let numOfChars = currentElement.match(/[e]/g).length // The "g" means global, with that, we indicate, that the loop should look at all characters in the input.//
//   HTMLFormControlsCollection.log(numOfChars)
// } = this was the code I tried to use for number 3. I just tied to abdapt the codes form the websites (https://charactercounter.com/count-characters-in-javascript#:~:text=The%20most%20basic%20way%20is,and%20other%20non%2Dvisible%20characters. / https://copyprogramming.com/howto/how-to-count-letters-in-javascript / https://www.w3schools.com/jsref/jsref_regexp_g.asp) and edit some codes. This code didn't work//

export function exercise03(args) {
  let input = args
  let result = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e" || currentElement === "E") {
      //the loop checks the whole input and looks for "E/e". With "++" we tell the computer, that he shpuld count all "E/e"//
      result++
    }
  }
  // this is the output. It ejects the counted numbers of all "E/e"//
  return result
}

export function exercise04(args) {
  let input = args
  let result = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i].charCodeAt()
    if (currentElement === 32) {
      // all blank spaces are counted//
      result++
    }
  }
  // to the result of the counted blace spaces we add a one, because between 2 words, there is always only one black space//
  return result + 1
}

//In exercise 4, we started to work with the "Ascii Table". In this table, 127 character/values are written down. For each character/value there is a corresponding number. With ".charCodeAt()" we tell the computer, that we work with the ascii table and each number in the loop corresponds to a character/value.//

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
  return input.includes("and") //if the input contains an "and" the output will be true, otheerwise it will always staite false//
}
//exercise 7, source:https://www.w3schools.com/jsref/jsref_includes.asp//

export function exercise08(args) {
  let input = args

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const result = input.replace(/e/g, "3") // .replace can't be in a loop. The concept of replace : .replace(element you want to replace "g", element you want to replace with). The "g" indicates, that after the first match, the cod should not stopp but continue untill the input.lenght is progressed. The e is between two slashes because they indicate tha start and the end of a character. Also it is curcial so we can unse a flaf (the "g") because they only work thogheter with these slashes.//
    return result
  }
}
//Sources for exercise 8://
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
//Source for exercise 9://
//https://www.w3schools.com/jsref/jsref_length_string.asp//

export function exercise11(args) {
  const input = args
  if (input.length > 0) {
    const result = input.charCodeAt(0)
    console.log(`The ASCII value of ${input} is: ${result}`)
  }
}
// This code does not work. //
// Sources for exercise 11://
// https://www.youtube.com/watch?v=7MW8EJDoIxs&ab_channel=Celotek / https://www.youtube.com/watch?v=jfJ4Fi-Onpo&ab_channel=Webster , https://www.programiz.com/javascript/examples/ascii-value-character//

//Notes for myself://
//char= the character, example: a,b,c,d,e,f/ (https://www.shecodes.io/athena/24057-what-is-an-integer-in-javascript#:~:text=In%20JavaScript%2C%20an%20integer%20is,values%2C%20depending%20on%20the%20platform.) int= interger, is an number
//(https://www.w3schools.com/js/js_string_methods.asp) a string is a function like .length or .substring()//

export function exercise12(args) {
  const input = args
  const result = input.indexOf("e") //should tell the value of the position of the first "e" in the input//
}
// this codee does not work"
//Source for exercise 12://
//https:www.w3schools.com/jsref/tryit.asp?filename=tryjsref_indexof
