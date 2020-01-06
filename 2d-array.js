/**
 * Link of problem
 * https://www.hackerrank.com/challenges/2d-array/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
 */

 /**
  * Declale and create array of given dimention
  */
  function makeArrayOfDimention(dimention){
    let arr = new Array(dimention);
    for(let i=0 ; i<= arr.length-1; i++){
        arr[i] = new Array(dimention);
    }
    return arr;
  } // end of makeArrayOfDimention

  /**
   * Inserting data into array
   */
  function insertRandomDataIntoArray(arr){
    for(let i=0; i<= arr.length-1; i++){
        for(let j=0; j<= arr.length-1; j++){
          arr[i][j] = Math.round(Math.random()*1);
        }
    }
    return arr;
  }

  var arr = makeArrayOfDimention(6);
  var hrGlassArr = makeArrayOfDimention(3);
  var arr = insertRandomDataIntoArray(arr);
  
console.log(arr);


  
  
  