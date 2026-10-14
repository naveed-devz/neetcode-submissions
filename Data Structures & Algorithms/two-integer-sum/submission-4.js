class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let arr = nums.map((value,index)=> ({value,index}));
       let sortedArr = arr.sort((a,b)=>a.value - b.value);

       let left = 0;
       let right = sortedArr.length-1;
       while(left <  right){
        let sum = sortedArr[left].value+ sortedArr[right].value;

        if(sum === target){
            return [sortedArr[left].index, sortedArr[right].index];
        }
        else if(sum < target){
            left++
        }
        else{
            right--
        }

       }
       return [];

    }
}
