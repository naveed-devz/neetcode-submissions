class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // let left = 0;
        // let right = nums.length-1;
        // nums = nums.sort((a,b)=>a-b)

        // while(left<right){
        //     if(nums[left]+nums[right] === target){
        //         return [left,right]
        //     }
        //     else if(nums[left]+nums[right] < target){
        //         left++
        //     }
        //     else{
        //         right--
        //     }
        // }

        for(let i=0;i<nums.length;i++){
            for(let j=i+1;j<=nums.length;j++){
                if(nums[i]+nums[j] === target){
                    return [i,j]
                }
            }
        }
    }
}
