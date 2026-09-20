// 198. House Robber

// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.
// Example 2:

// Input: nums = [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
// Total amount you can rob = 2 + 9 + 1 = 12.

var rob = function (arr) {
  let n = arr.length;
  if (n === 1) return arr[0];
  let dp = [arr[0], Math.max(arr[0], arr[1])];

  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(dp[i - 2] + arr[i], dp[i - 1]);
  }

  return dp[n - 1];
};

//Sc = O(n)

var rob = function (arr) {
  let n = arr.length;
  if (n === 1) return arr[0];
  let p2 = arr[0];
  let p1 = Math.max(arr[0], arr[1]);

  for (let i = 2; i < arr.length; i++) {
    let temp = p1;
    let curr = Math.max(p1, p2 + arr[i]);
    p1 = curr;
    p2 = temp;
  }

  return p1;
};

// Approach:
// Choice at each house (i):
// Either rob house i → then you must skip house i-1, so profit = val[i] + dp[i-2].
// Or i → then profit = dp[i-1]
// Take maximum of the two. dp[i]=max(val[i]+dp[i−2],dp[i−1])
// Base cases:
// If n == 0 → return 0
// If n == 1 → return val[0]

// Initialize:
// dp[0] = val[0]
// dp[1] = max(val[0], val[1])
// Optimization:
// Notice that to compute dp[i], we only need the last two states (dp[i-1] and dp[i-2]).
// So instead of a full array, we use two variables:
// p1 → previous (dp[i-1])
// p2 → second previous (dp[i-2])
// Time & Space Complexity:
// Time Complexity: O(n)
// Space Complexity: O(1)

var rob = function (val) {
  let n = val.length;
  if (n == 1) return val[0];

  let p1 = 0;
  let p2 = 0;
  for (let i = 0; i < n; i++) {
    let curr = Math.max(val[i] + p2, p1);
    let temp = p1;
    p1 = curr;
    p2 = temp;
  }
  return p1;
};

// val = [2, 7, 9, 3, 1]

// i	val[i]	curr = max(val[i]+p2, p1)	temp=p1	new p1	new p2
// 0	2	      max(2+0, 0) = 2            	0	       2	     0
// 1	7     	max(7+0, 2) = 7	            2	       7	     2
// 2	9	      max(9+2, 7) = 11	          7	       11	     7
// 3	3	      max(3+7, 11) = 11	          11	     11	     11
// 4	1	      max(1+11, 11) = 12	        11	     12	     11

// Loop ends. return p1 → 12.

// Matches robbing houses at indices 0, 2, 4 → 2 + 9 + 1 = 12. ✓

// Counterexample: val = [2, 1, 1, 9]

// Even-index sum (0, 2): 2 + 1 = 3
// Odd-index sum (1, 3): 1 + 9 = 10
// Max of the two: 10

// But is 10 actually optimal? Let's check what the real DP gives:

// i	val[i]	curr=max(val[i]+p2, p1)	new p1	new p2
// 0	2	      max(2+0,0)=2	            2	      0
// 1	1	      max(1+0,2)=2	            2	      2
// 2	1	      max(1+2,2)=3	            3	      2
// 3	9	      max(9+2,3)=11            	11	    3

// val = [5, 5, 1]

// Start: p1=0, p2=0

// i=0, val[0]=5:

// javascript
// curr = Math.max(5+0, 0) = 5   // rob wins
// p1=5, p2=0

// i=1, val[1]=5:

// javascript
// curr = Math.max(5 + p2, p1) = Math.max(5+0, 5) = Math.max(5, 5) = 5

// Tie — Math.max picks 5 either way, but let's think about what each option means here:

// val[i]+p2 = 5+0 = 5 → this represents "rob house 1, chained onto p2 (best through house -1, i.e., nothing) = 5." This total, if realized, comes from just robbing house 1 alone.
// p1 = 5 → this represents "skip house 1, keep whatever was best through house 0" = just robbing house 0 alone.

// Either way the value is 5, but critically: neither option involves robbing both house 0 and house 1. The val[i]+p2 branch only ever adds val[i] to p2 — and p2 is specifically "best through i-2," which by construction excludes house i-1 from consideration. So even when this branch wins, it structurally cannot include the immediately preceding house.

// javascript
// p1=5, p2=5

// i=2, val[2]=1:

// javascript
// curr = Math.max(1 + p2, p1) = Math.max(1+5, 5) = Math.max(6, 5) = 6

// Here p1 (skip branch, value 5) loses to robbing house 2 chained onto p2=5 (which represents "best through house 0" = robbing house 0). Total = house 0 + house 2 = 5+1=6. Houses 0 and 2 aren't adjacent — perfectly legal.

// Return p1=6. Check: rob houses 0 and 2 → 5+1=6. ✓ (Robbing 0,1 isn't allowed since adjacent; robbing just 1 alone = 5, worse.)

// So, directly answering "how is consecutive prevented when p1 wins"?

// When p1 wins at step i, it means: "the best total up through house i is achieved by NOT robbing house i — just carrying forward whatever the best was through house i-1." Since house i itself was never added into the total in this branch, there's no way this branch could have robbed both i-1 and i — house i was skipped entirely.

// And when the other branch (val[i]+p2) wins instead, house i is robbed, but it's only ever combined with p2 (best through i-2), which by definition never includes house i-1's value being added on top of robbing it — house i-1 might still be "present" inside p2's history, but only in the sense that p2 already resolved whether house i-1 or something earlier was best, without ever letting i-1 and i be robbed together.

// The guarantee is baked into which two numbers get compared — p1 (skip current) and val[i]+p2 (rob current, chain to two-back) — there's no third option that adds val[i] to p1, which is the only way you could accidentally rob two adjacent houses. That combination simply never appears anywhere in the formula.
