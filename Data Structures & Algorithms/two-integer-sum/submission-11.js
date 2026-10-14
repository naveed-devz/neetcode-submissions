class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(arr,target){
            const numsWithIndex = arr.map((num,index)=>({num,index}))
    numsWithIndex.sort((a,b)=>(a.num-b.num))

    let left = 0;
    let right= numsWithIndex.length-1

    while(left < right){
        const sum =  numsWithIndex[left].num + numsWithIndex[right].num

        if(sum<target){
            left++
        }
        else if(sum>target){
            right--
        }
        else{
            return [numsWithIndex[left].index , numsWithIndex[right].index] 
        }
    }

}

}
