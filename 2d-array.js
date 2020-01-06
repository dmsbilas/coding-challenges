/**
 * Link of problem
 * https://www.hackerrank.com/challenges/2d-array/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
 */

 /**
  * Makeing 6 x 6 array
  */

  var arr = new Array(6);
  for(let i=0 ; i<= arr.length-1; i++){
      arr[i] = new Array(6);
  }

  for(let i=0; i<= arr.length-1; i++){
      for(let j=0; j<=i; j++){
        arr[i][j] = Math.random();
      }
  }
  
  console.log(arr);
  