const returnFirstTwoDrivers = function(a) {
    return a.slice(0, 2);
};

const returnLastTwoDrivers = function(a) {
    return a.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(number){    
    return function() {
        return number * number
    }
};

const fareDoubler = createFareMultiplier(2);
function createFareMultiplier(number){
    return function(fare){
        return fare * number;
    }
};

const fareTripler = createFareMultiplier(3);
function createFareMultiplier(number){
    return function(fare){
        return fare * number;
    }
};

function selectDifferentDrivers(names, selectingDrivers){
    if(selectingDrivers === returnFirstTwoDrivers){
        return names.slice(0, 2);
    } else if(selectingDrivers === returnLastTwoDrivers){
        return names.slice(-2);
    }
};