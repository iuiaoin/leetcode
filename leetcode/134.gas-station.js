/*
 * @lc app=leetcode id=134 lang=javascript
 *
 * [134] Gas Station
 */
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
/**
 * 遍历gas使车子能够回到原点，否则返回-1
 */
var canCompleteCircuit = function(gas, cost) {
  if(!gas.length) return -1;
  if(gas.length === 1 && gas[0] - cost[0] >= 0) return 0; 
  for(let i = 0; i < gas.length; i++) {
    let gasLeft = gas[i] - cost[i];
    if(gasLeft < 0) continue;
    for(let j = (i + 1) % gas.length; j !== i; j = (j + 1) % gas.length) {
      gasLeft = gasLeft + gas[j] - cost[j];
      if(gasLeft < 0) {
        break;
      } else if(gasLeft >= 0 && (j === i - 1 || i === 0 && j === gas.length - 1)) {
        return i;  
      }
    }
  }
  return -1;
};

