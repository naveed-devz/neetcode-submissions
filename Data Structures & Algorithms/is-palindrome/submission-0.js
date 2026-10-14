class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        
        const newStr = s.toLowerCase().replace(/[^A-Za-z0-9]/g,"");
        let s2 = newStr.split("").reverse().join("");
        

        return newStr === s2
        
    }
}
