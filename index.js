var kittens = ["Milo", "Otis", "Garfield"] //define your array here
// Add your functions and code here
function destructivelyAppendKitten(name){
  return kittens.push("John")
}

function destructivelyPrependKitten(name){
  return kittens.unshift("John")
}

function destructivelyRemoveLastKitten(){
  return kittens.pop()
}


function destructivelyRemoveFirstKitten(){
  return kittens.shift()
}

function appendKitten(name){
  return [...kittens, "John",]
}

function prependKitten(name){
  return ["John", ...kittens]
}

function removeLastKitten(){
  return kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten(){
  return kittens.slice(1)
}
