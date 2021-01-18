//nums=prompt("Enter your number");
let sorted = [];
nums=prompt("Enter your number",sorted);
function insertionSort(nums){
    for(let i=0;i<nums.length;i++) 
    {
        let j=i-1;
        let temp=nums[i]
        while(j>=0 && nums[j]>temp)
        {
            nums[j+1]=nums[j]
            j--
        }
        nums[j+1]=temp
    } 
    return nums
} 

//const unsortedArr = [31, 27, 28, 42, 13, 8, 11, 30, 17, 41, 15, 43, 1, 36, 9, 16, 20, 35, 48, 37, 7, 26, 34, 21, 22, 6, 29, 32, 49, 10, 12, 19, 24, 38, 5, 14, 44, 40, 3, 50, 46, 25, 18, 33, 47, 4, 45, 39, 23, 2];

//console.log(insertionSort([3,2,4,6,7,5]));
//console.log(insertionSort([3, 0, 2, 5, -1, 4, 1]));

document.write(insertionSort(nums));
//document.write(insertionSort(unsortedArr));
