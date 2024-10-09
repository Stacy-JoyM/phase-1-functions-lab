// Code your solution in this file!
function distanceFromHqInBlocks(dist){
    let hq = 42;
    return Math.abs(dist-hq);

}

function distanceFromHqInFeet(distance){

    let blockDist = distanceFromHqInBlocks(distance);
    return blockDist * 264
    
}
// console.log(distanceFromHqInBlocks(20))
// console.log(distanceFromHqInFeet(50))

function distanceTravelledInFeet(start, destination){
    return Math.abs((destination-start) * 264)
}

function calculatesFarePrice(start, destination){
    let feetDist = distanceTravelledInFeet(start, destination);
    if (feetDist >=0 && feetDist <=400){
        return 0.00

    }else if (feetDist > 400 && feetDist <= 2000){
        return 0.02 * (feetDist - 400) 

    }else if (feetDist > 2000 && feetDist <= 2500){
        return 25
    }else if (feetDist > 2500){
        return "cannot travel that far"
    }

}
//console.log(calculatesFarePrice(43,44))