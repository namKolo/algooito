## House Robber

Leetcode: https://leetcode.com/problems/house-robber/
Level: Medium
Type: DP

### Problem to Solve

```
Find a subset of an array that has maximum sum, and has no adjacent index in the subset (e.g i & i+1 cannot be picked)
```

- Keywords: subset, maximum => optimal solution => we can think about DP
- Conditions:
  - No adjacent index in the subset (e.g i & i+1 cannot be picked)
  - If we pick i, we cannot pick i - 1.

### Thinking Process

#### Write down the base problems

- Start small (len = 1, len = 2, len =3, …)
- Specific input — and try to abstract in each step (e.g if having 2 elements a[0], a[1] -> a[0]<a[1], a[0] > a[1], a[0]=a[1]) -> using Math.max/Math.min to solve this
- Iterate by adding more elements to the array — thinking in a natural way is the key

```
// len = 1  -> [3]
-> return 3
// len = 2  [3,5]
-> We can choose the first 3 , or we can choose the 5
-> 3 < 5 => pick 5 (Remember the variant we cannot choose both (3,5) invlaid
-> maximumSum = Math.max(a[0], a[1])

// len = 3  [3,5,1]
-> We can choose the first (0) + (2) or we choose only (1)
-> (0) + (2) = 4 < (1) = 5 => we choose  2
-> maximumSum = Math.max(a[2] + a[0], a[1])

// len = 4 [3,5,1,4]
-> We can choose (1) + (3) or (0) + (2)
-> maximumSum = Math.max(a[0) + a[2], a[1]+a[3])
-> and we can see that a[0] + a[2] we already calculated it before
-> we can use Memorize technique to get it
-> maximumSum[3] = Math.max(maximumSum[3 - 2] + a[3], maximumSum[3 - 1])

-> In an abstract way maximumSum[n] = Math.max(maximumSum[n-2] + a[n], maximumSum[n-1])
```

#### Abstract the process

- Using relative number instead of absolute member
  maximumSum[3] = Math.max(maximumSum[3–2] + a[3], maximumSum[3–1])

#### The formula

```
  maximumSum[i] = Math.max(maximumSum[i-2] + a[i], maximumSum[i - 1]);
  -> maximumSum[n - 1] is our result
```
