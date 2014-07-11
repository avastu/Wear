// JavaScript source code
//1 = cool
//2 = warm
//3 = average
temp = undefined;
indic = getUserChoice.indic;
if (indic === 1) {
    temp = low;
    getRec(temp);
}
else if (indic === 2) {
    temp = high;
    getRec(temp);
}
else if(indic === 3) {
    temp = (high + low)/2;
    whatToWear(temp);
    //where whatToWear is the method to get the recommendation
}

function whatToWear(temp) {
    if(temp < 45) {
        if(rain()) {

        }
    }
    else if(temp < 55) {
        if(rain()) {

        }
    }
    else if(temp < 65) {
        if(rain()) {

        }
    }
    else if(temp < 75) {
        if(rain()) {

        }
    }
    else if(temp < 85) {
        if(rain()) {

        }
    }
    else if(temp < 95) {
        if(rain()) {

        }
    }
} 
    
function rain(chprep) { //where chprep is chance of precipitation
    if(chprep >= 40)
        return true;
    return false;
}

