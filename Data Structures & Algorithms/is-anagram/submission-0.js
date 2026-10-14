class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
       let s1 = s.split("").sort().join(" ").trim();
       let s2 = t.split("").sort().join(" ").trim();
       return s1 === s2
    }
}
