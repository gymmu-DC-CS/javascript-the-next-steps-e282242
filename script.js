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
    const currentElement = input[i].charCodeAt()
    if (
      currentElement === 32 ||
      (currentElement === 33 && currentElement === s)
    ) {
      result++
    }
  }
  return result + 1
}
