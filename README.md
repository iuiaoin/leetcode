## 算法

### 1. 分治策略
分治策略递归地求解一个问题，在每层递归中应用如下三个步骤：

- **分解**：将问题划分为一些子问题，子问题的形式与原问题一样，只是规模更小
- **解决**：递归地求解出子问题。如果子问题的规模足够小，则停止递归，直接求解
- **合并**：将子问题的解组合成原问题的解

例子：

```js
/**
 * leetcode 53: 求最大子数组
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    return findMaxSubArray(nums, 0, nums.length-1).sum;
}

function findMaxSubArray(A, low, high) {
	if(low === high) return { low, high, sum: A[low] }
	let mid = Math.floor((low + high ) / 2);
	let leftRes = findMaxSubArray(A, low, mid);
	let leftLow = leftRes.low,
		leftHigh = leftRes.high,
		leftSum = leftRes.sum;
	let rightRes = findMaxSubArray(A, mid + 1, high);
	let rightLow = rightRes.low,
		rightHigh = rightRes.high,
		rightSum = rightRes.sum;
	let crossRes = maxCrossingSubArray(A, low, mid, high);
	let crossLow = crossRes.low,
		crossHigh = crossRes.high,
		crossSum = crossRes.sum;
	if(leftSum >= rightSum && leftSum >= crossSum) return { low: leftLow, high: leftHigh, sum: leftSum };
	if(rightSum >= leftSum && rightSum >= crossSum) return { low: rightLow, high: rightHigh, sum: rightSum };
	if(crossSum >= leftSum && crossSum >= rightSum) return { low: crossLow, high: crossHigh, sum: crossSum };
}

function maxCrossingSubArray (A, low, mid, high) {
	let leftSum = -Infinity,
		rightSum = -Infinity,
		sum1 = 0,
		sum2 = 0,
		maxLeft,
		maxRight;
	for(let i=mid;i>=low;i--) {
		sum1 += A[i];
		if(sum1 > leftSum) {
			leftSum = sum1;
			maxLeft = i;
		}
	}
	for(let j=mid+1;j<=high;j++) {
		sum2 += A[j];
		if(sum2 > rightSum) {
			rightSum = sum2;
			maxRight = j;
		}
	}
	return { low: maxLeft, high: maxRight, sum: leftSum + rightSum };
}
```

#### 1.1 用主方法求解递归式
递归式： T(n) = aT(n/b) + f(n)

T(n)有如下渐进界：
![](https://haitao.nos.netease.com/f9d5c98a-9cd9-4763-a0d2-1ca71536770e_1180_258.png)

例子：

```js
// O(n^2)
T(n) = 9T(n/3) + n

// O(lgn)
T(n) = T(2n/3) + 1

// O(nlgn)
T(n) = 3T(n/4) +nlgn
```
    
## 套路
### 字符串
1. **一个字符串是另一个字符串的排列 = 有相同的字符出现频度**

例子： 
```js
/**
 * leetcode 567: 一个字符串是否包含另一个字符串的排列
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let arr1 = new Array(26).fill(0),
        arr2 = new Array(26).fill(0),
        len = s1.length;
    
    function getIndex(char) {
        const aIndex = 'a'.charCodeAt(0);
        return char.charCodeAt(0) - aIndex;
    }
    
    for(let char of s1) {
        arr1[getIndex(char)]++;
    }
    
    const arrStr1 = arr1.toString();
    
    for(let i=0;i<s2.length;i++) {
        arr2[getIndex(s2[i])]++;
        if(i >= len) {
           arr2[getIndex(s2[i - len])]--;
        }
        let arrStr2 = arr2.toString();
        if(arrStr1 === arrStr2) return true;
    }
    return false;
};
```
2. **字符串类型的数字往往用数组来处理**

例子： 
```js
/**
 * leetcode 43: 字符串数字相乘
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

var multiply = function (num1, num2) {
  if(num1 == '0' || num2 == '0') return '0';
  let len1 = num1.length;
  let len2 = num2.length;
  let len = len1 + len2;
  let res = new Array(len).fill(0);

  for (let i = len1 - 1; i >= 0; i--) {
    for (let j = len2 - 1; j >= 0; j--) {
      let x = num1[i];
      let y = num2[j];
      let p1 = i + j;
      let p2 = i + j + 1;
      let mult = x * y + res[p2];
      res[p1] = res[p1] + Math.floor(mult / 10);
      res[p2] = mult % 10;
    }
  }

  let resStr = res.join('');
  if(resStr[0] == 0) {
    resStr = resStr.substring(1);
  }
  return resStr;
}
```

### 树、图
1. **掌握前、中、后序三种遍历**
2. BFS: 最短路径
3. DFS: 拓扑排序
4. 一般用递归实现，用循环方法时，BFS用到队列。DFS用到栈
5. 递归步骤：
    - 明确函数作用/返回值
    - 寻找递归结束条件
    - 找出函数等价关系式

### Topic
1. sliding window
2. two pointers


### Tricks
1. 对10取余拿个位, 除以10取整取十位(Math.floor/parseInt)
2. 取mid(除以二取整) num >> 1


### 动态规划
什么是dp?
- 将一个问题拆成几个子问题，分别求解这些子问题，即可推断出大问题的解。

如何判断是否使用dp?
- 能将大问题拆成几个小问题，且满足无后效性、最优子结构性质。

DP的核心思想：尽量缩小可能解空间。

步骤：
- 状态：首先，把我们面对的局面表示为x。这一步称为设计状态。对于状态x，记我们要求出的答案(e.g. 最小费用)为f(x).我们的目标是求出f(T).
- 状态转移方程：找出f(x)与哪些局面有关（记为p），写出一个式子（称为状态转移方程），通过f(p)来推出f(x).

一个问题是该用递推、贪心、搜索还是动态规划，完全是由这个问题本身阶段间状态的转移方式决定的！
- 每个阶段只有一个状态->递推
- 每个阶段的最优状态都是由上一个阶段的最优状态得到的->贪心
- 每个阶段的最优状态是由之前所有阶段的状态的组合得到的->搜索；
- 每个阶段的最优状态可以从之前某个阶段的某个或某些状态直接得到而不管之前这个状态是如何得到的->动态规划。


#### LCS
```js
function lcs(str1, str2) {
  let len1 = str1.length;
  let len2 = str2.length;
  let dp = new Array(len1 + 1).fill(0);
  dp = dp.map(() => new Array(len2 + 1).fill(0));

  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[len1][len2];
}
```

#### 有顺序的都可以用二分查找来优化
binary search(一般): 
- l = mid + 1, r = mid - 1, len/len - 1, l <= r
- l = mid + 1, r = mid, len, l < r

一些简单的结论/直观： 
> [1, 2, 5, 6]      4  
> [1, 2, 3, 5 ,6]   4
- l = mid + 1, r = mid - 1
> l、r分别停在要找的值右左, 如果while是l < r数组边缘的可能搜不到
- l = mid + 1
> l、r都停在要找的值右,如果while是l < r数组边缘的可能搜不到
- r = mid - 1
> l、r都停在要找的值左,如果while是l < r数组边缘的可能搜不到
- r从arr.length 开始, l = mid + 1
> l、r都停在要找的值右, 若值大于最大会在数组外

#### Set 和 Map的区别
- Set 类似数组存储值，但不重复
- Map 类似对象，但key可以是对象

实例的属性和方法：

Set | Map|
---|---|
size|size|
clear()|clear()
delete(value)|delete(key)
forEach(callbackFn[, thisArg])|forEach(callbackFn[, thisArg])
has(value)|has(key)
keys()|keys()
values()|values()
\[@@iterator\]()|\[@@iterator\]()
add(value)|get(key)
||set(key, value)
||entries()

#### 数组里面第k个大的数字/前k个重复次数最多的数字
这类问题基本上可以用heap来优化，因为堆的大小为k，所以一般O(nlogk)