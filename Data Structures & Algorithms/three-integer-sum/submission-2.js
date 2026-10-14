class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        if(nums.length<0) return []
        let arr = nums.sort((a,b) => a-b);  
        let res = []

        for(let i =0;i<arr.length;i++){
            let left = i+1;
            let right = arr.length -1;

            if(i>0 && arr[i] === arr[i-1]) continue;

            while(left<right){
                let sum = arr[left] + arr[right] + arr[i]

                if(sum === 0){
                    res.push([arr[i], arr[left], arr[right]])
                    while(arr[left] === arr[left+1]) left++;
                    while(arr[right] === arr[right-1]) right--;
                    left ++ ;
                    right --;
                }
                else if(sum < 0){
                    left++
                }
                else {
                    right --
                }
            }
        }
        return res;
    }
}
