class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let obj = {};

    for(let num of nums){
        if(obj[num]){

            obj[num] = obj[num] + 1
        }
        else{
            obj[num] = 1
        }
    }
   const sortedKeys = Object.keys(obj).sort((a,b)=> obj[b] - obj[a])

   return sortedKeys.slice(0,k).map(Number);
    }
}
