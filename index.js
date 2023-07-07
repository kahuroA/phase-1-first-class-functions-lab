// Code your solution in this file!
const returnFirstTwoDrivers= function(drivers){return drivers.slice(0,2)};

const returnLastTwoDrivers = function(drivers){return drivers.slice(-2)};

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num){
    const fare_p= function(fare){ return fare *num;}

    return fare_p;
}

const fareDoubler = function (fare){return createFareMultiplier(2)(fare)};

const fareTripler = function (fare){return createFareMultiplier(3)(fare)};

function selectDifferentDrivers(drivers, cb){
    return cb(drivers);
}

