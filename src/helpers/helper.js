
function getRandomNumberGeneral(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


function getScore(currentPosition) {
    const increment = getRandomNumber(1,6);
    console.log(currentPosition);
    const currentId = currentPosition["id"].replace('position','');
    const newPosition = increment + parseInt(currentId);
    return "position" + newPosition;
}


function getRandomNumber(){
    return getRandomNumberGeneral(1,6)
}

export {
    getRandomNumber,
    getScore,
}