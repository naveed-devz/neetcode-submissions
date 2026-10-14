class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
      let n = nums.length;
      let result = new Array(n).fill(1);

      let prefix = 1;
      for(let i=0;i<n;i++){
        result[i] = prefix;
        prefix *= nums[i]
      }

      let postfix = 1;
      for(let j=n-1;j>=0;j--){
        result[j] *= postfix;
        postfix *= nums[j]
      }

      return result

    }
}