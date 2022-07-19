// do not change these lines

function reset() {
  adults = 0
  children = 0
}

let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.

function enter(numAdults, numChildren) {
  if (numChildren <= numAdults) {
    adults += numAdults
    children += numChildren
    return true
  } else {
    return false
  }
}

function leave(numAdults, numChildren) {
  const remainingAdults = adults - numAdults
  const remainingChildren = children - numChildren

  
  if (remainingAdults < 0) {
    return false
  }

  if(remainingAdults < remainingChildren) {
    return false
  }
  if (remainingChildren < 0) {
    return false
  }

  if (numAdults >= numChildren) {
    adults -= numAdults
    children -= numChildren
    return true
  } else {
    return false
  }
}

function occupancy() {
  const occupancyInfo = { adults: adults, children: children }
  return occupancyInfo
}

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy,
  reset: reset
}
