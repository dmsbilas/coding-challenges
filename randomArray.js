/**
 * Generate random length ( 1 to 10) array
 * 
 */
function getRandomArr(){
    const arrLength = Math.floor((Math.random() * 10) + 1);
    const randArr = new Array(arrLength);

    for(let i=0; i<= arrLength-1; i++){
        randArr[i] = Math.floor( (Math.random()*10) + 1 );
    }

    return randArr;
}
