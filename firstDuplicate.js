/**
 * 
 * @param  arr 
 * finding first duplicate in an single array
 * 
 */
function firstDuplicate(arr){
    console.log(arr);
    for(var i=0; i<= arr.length-1 ; i++){
        var item = arr[i];
        for(var j= i+1; j<= arr.length-1; j++){
            if(item == arr[j]){
                console.log(item);
            }
        }
    }
    
}//End firstDuplicate

firstDuplicate([2,4,6,8,10,2,12,14,4]);