class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let newArr = nums.sort((a,b)=>a-b)
    for(let i=0;i<newArr.length;i++){
        if(newArr[i] == newArr[i+1] || newArr[i] == newArr[i-1]){
            return true
        }
    }
    return false
    }
}
