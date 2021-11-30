## Container with Most water

### Problem

- Give n lines with its height
- Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

### Simplify the problem

```
-> the largest area of rectangle
  -> area = width * height
    -> (right - left) * Min(height[right], height[left]);
      ->  find the Max([ (right - left) * Min(height[right], height[left]) ]) 0<=left<=right<=>
```

### Keywords

- After simplifying the problems, we can see 2 keywords: (left, right) and maximum
  -> optimal solution
  -> related to the range (left,right)
  -> Window Slicing approach

### Thinking approach

- Put the left pointer at the first wall
- Put the right pointer at the last wall.
- Each step, left wall < right wall, we move the left pointer right by one
- Otherwise move the right pointer left by one
- Finish when right == left;

### How to prove it

- For a brute force, we need n\*(n-1)/2 comparision times

- So in our approach, we need to prove that we also eliminate n\*(n-1)/2 cases to find the best one

```
Given: [h1,h2,...hn]
and Area[l,r] = (r-l)*Min(h[l], h[r]);

## First loop:

assume h1 < hn -> min(h1,hn) = h1;

=> min(a1,a2),min(a1, a3), ..min(a1,an-1) <= min(a1,an)
=> Area(1,2),Area(1,3),...Area(1,n-1) <= Area(1,an)

-> Area(1,2),Area(1,3),...Area(1,n) <= Area(1,n)
-> MaxArea[1,n] = Area[1,n]

=> Eliminate "n-2" candidates (2 -> (n-1))

### Second loop
assump a2 > an => min(a2,an) = an;
=> min(a2,an),min(a3,an)....(an-1,an) <= min(a2,an)
=> Area[2,n],Area[3, n],...Area[n-1,n] <= Area[2,n]

=> MaxArea[2,n] = Area[2,n];
=> Eliminate "n-3" candidates  (2 -> (n-1))

....

### final
l = r
=> we eliminiate 0 candidates


=> Total loop: n-1

So we eliminates
(n-2) + (n-3) + ... + 1+ 0 = (n-2)(n-1)/2
And we get n-1 iteration
=> (n-2)(n-1)/2 + n- 1
=> n*(n-1)/2

We got the same comparisions to find the best => same like  the brute force

```
