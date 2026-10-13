class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let newNums = nums.sort((a,b)=>a-b)
     for(let i=0;i<newNums.length;i++){
        if(newNums[i] === newNums[i-1] ){
            return true
        }
     }
     return false
    }
}
