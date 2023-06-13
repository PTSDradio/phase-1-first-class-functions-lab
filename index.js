// Code your solution in this file!
const returnFirstTwoDrivers = (n) => {
 return n.slice(0,2)
}

const returnLastTwoDrivers = (l) => {
return l.slice(2,4)
}

const selectingDrivers= [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(n) {
   return () => { return n*n};
}

const fareDoubler = (createFareMultiplier) => {
    return createFareMultiplier*2
}

const fareTripler = (createFareMultiplier) => {
    return createFareMultiplier*3
}

function selectDifferentDrivers(n ,a) {
    return a(n)
}