/*function mergeSort(array,half = array.length/2){

    if(array.length < 2){
      return array // it means we no longer divide the array
      // into smaller chunk
    }
  
    const left = array.splice(0,half); //left part of array
  
    return merger(mergeSort(left),mergeSort(array))
  } 
  //In the above code, we are using a splice method to remove the left part of the array.
  // The remaining part of the array is the right part.

  //Next, we need to implement a merger function which helps us to combine the left and right part of the array
  // and returns the sorted list.

  
  function merger(left,right){
  
    const arr = [];
  
    while(left.length && right.length){
      if(left[0] < right [0]){
        arr.push(left.shift())
      }else{
        arr.push(right.shift())
      }
    }
  
    return [...arr,...left,...right];
  }
  
  console.log(mergeSort([10,5,3,8,2,6,4,7,9,1])); 
  */
 function merge_sort(left_part,right_part) 
 {
     var i = 0;
     var j = 0;
     var results = [];
 
     while (i < left_part.length || j < right_part.length) {
         if (i === left_part.length) {
             // j is the only index left_part
             results.push(right_part[j]);
             j++;
         } 
       else if (j === right_part.length || left_part[i] <= right_part[j]) {
             results.push(left_part[i]);
             i++;
         } else {
             results.push(right_part[j]);
             j++;
         }
     }
     return results;
 }
 
 console.log(merge_sort([1,3,4], [3,7,9]));
 