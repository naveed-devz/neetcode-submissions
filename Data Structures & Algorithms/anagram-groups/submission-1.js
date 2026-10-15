class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();

    for (let i = 0; i < strs.length; i++) {
        let newKey = strs[i].split("").sort().join("");

        if (map.has(newKey)) {
            map.get(newKey).push(strs[i]);
        } else {
            map.set(newKey, [strs[i]]);
        }
    }

    return Array.from(map.values());
    }
}
