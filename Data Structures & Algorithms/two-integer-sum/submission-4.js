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

        // for(let i=0;i<nums.length;i++){
        //     for(let j=i+1;j<=nums.length;j++){
        //         if(nums[i]+nums[j] === target){
        //             return [i,j]
        //         }
        //     }
        // }

        const map = new Map();
        for(let i=0;i<nums.length;i++){
            let complement =  target - nums[i]

            if(map.has(complement)){
                return [map.get(complement),i]
            }

            map.set(nums[i],i)
        }
    }
}
