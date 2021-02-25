// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']

function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0,2)
}

function returnLastTwoDrivers(drivers) {
    return drivers.slice(2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(fare) {
    return function(multiply) {
    return multiply * fare
    }
}

function fareDoubler(double) {
    return createFareMultiplier(double)(2)
}

function fareTripler(triple) {
    return createFareMultiplier(triple)(3)
}

function selectDifferentDrivers(drivers, selectDrivers) {
    return selectDrivers(drivers)
}