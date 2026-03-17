1️⃣ The Master Sliding Window Template
function slidingWindow(s) {

    let map = {};
    let i = 0;
    let ans = 0;

    for(let j = 0; j < s.length; j++){

        // 1️⃣ Expand window
        map[s[j]] = (map[s[j]] || 0) + 1;

        // 2️⃣ Shrink window if invalid
        while(windowIsInvalid){
            map[s[i]]--;
            i++;
        }

        // 3️⃣ Update answer
        ans = Math.max(ans, j - i + 1);
    }

    return ans;

}

Three steps always happen:

Expand → Validate → Shrink

🔥 What is this template?

It’s a generic skeleton to solve problems like:

Longest substring without repeating characters

Longest repeating character replacement

At most K distinct characters

Minimum window substring

👉 Instead of writing logic from scratch every time, you just:

Change the CONDITION → everything else stays same
🧠 Core Idea

We maintain a window [i, j]:

i → left pointer (shrink)
j → right pointer (expand)
📦 Step-by-step meaning of template
1️⃣ Expand window
map[s[j]] = (map[s[j]] || 0) + 1;

👉 Include new character in window

2️⃣ Shrink window
while(windowIsInvalid){
map[s[i]]--;
i++;
}

👉 If condition breaks → shrink from left

3️⃣ Update answer
ans = Math.max(ans, j - i + 1);

👉 Store best valid window

🔑 MOST IMPORTANT PART
👉 windowIsInvalid changes per problem
🧩 Example 1: Your problem (Character Replacement)
while((j - i + 1) - maxFreq > k)

👉 Means:

too many replacements needed → shrink

🧩 Example 2: No repeating characters
while(map[s[j]] > 1)

👉 Means:

duplicate found → shrink

🧩 Example 3: At most K distinct
while(Object.keys(map).length > k)

👉 Means:

too many unique chars → shrink

🎯 Why this template is powerful

Because 90% substring problems = same structure

Only this changes:

Condition (invalid window)
⚡ Think like this in interviews

Instead of coding randomly:

1. Expand (j++)
2. Check validity
3. Shrink if needed
4. Update answer
   🚀 Simple Analogy

Imagine a rubber band window:

Stretch right → expand

Too big → shrink from left

Keep track of best size

🧠 Final One-Line Summary
Sliding window = Expand → Fix → Record

2️⃣ How to Recognize Sliding Window Problems

If the problem contains words like:

substring

subarray

contiguous

longest

at most k

without repeating

Then 90% chance it's sliding window.

Example problems:

Problem Condition
Longest substring without repeating duplicate check
Character replacement replacement ≤ k
Max consecutive ones III flips ≤ k
Longest substring with k distinct unique chars ≤ k
3️⃣ Two Types of Sliding Window
Fixed Window

Window size never changes

Example:
Maximum sum of subarray size k

for(let j = 0; j < n; j++){
sum += arr[j]

    if(j - i + 1 == k){
        ans = Math.max(ans,sum)
        sum -= arr[i]
        i++
    }

}
Variable Window (Most Interview Questions)

Window expands and shrinks.

Pattern:

expand j
if invalid → shrink i
update answer
4️⃣ Sliding Window Visualization

Example:

s = ABCABCBB
A B C A B C B B
i j

Duplicate found → move i

      A B C
      i     j

Window always valid.

5️⃣ The 4 Famous Sliding Window Constraints

Almost every question falls into these.

1️⃣ No duplicates

Example

Longest Substring Without Repeating Characters

Condition

map[char] > 1
2️⃣ At most K

Example

Longest substring with at most K distinct characters

Condition

map.size > k
3️⃣ Replacement allowed

Example

Character Replacement

Condition

windowSize - maxFreq > k
4️⃣ Exact K

Example

Substring with exactly K distinct characters

Formula trick:

exact(k) = atMost(k) - atMost(k-1)

Very famous trick.

6️⃣ Most Important Interview Insight

Two pointers never move backward.

i → moves forward
j → moves forward

So total operations:

O(n)

Even though there is a nested loop.

7️⃣ Sliding Window Problem Progression (Best Practice Order)

Since you're already solving LeetCode, solve them in this order:

1️⃣
Longest Substring Without Repeating Characters

2️⃣
Maximum Sum Subarray of Size K

3️⃣
Longest Repeating Character Replacement

4️⃣
Max Consecutive Ones III

5️⃣
Longest Substring with At Most K Distinct Characters

6️⃣
Minimum Window Substring ⭐ (Hard but very famous)

8️⃣ The Ultimate Sliding Window Trick

Most problems reduce to this:

while(window invalid){
shrink window
}

Then update answer.

That’s it.
