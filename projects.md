---
title: /projects
layout: projects
permalink: /projects
---

# ongoing projects.
---
## ml research.

don't want to reveal much but i am finally working on something that i have wanted to for almost a year.

---
## leetcode.

finally started to leet. i had wanted to for quite some time now (i had mentionned it on <a href="https://atharvakokane.github.io/2024/09/01/life-gone-by.html">a previous post</a>). it is basically a place to practice your skills on programming. if you want to try it out you can try it <a href="https://leetcode.com/">here</a>.

**_log_**:
<br />**16th september:** did my first leetcode. it was the <a href="https://leetcode.com/problems/palindrome-number/description/">palindrome number</a> program.

{% highlight python %}
class Solution:
    def isPalindrome(self, x: int) -> bool:
        num = str(x)
        rev = num[::-1]
        if num == rev:
            return True
        else:
            return False
{% endhighlight %}

<br />**17th september:** finished the <a href="https://leetcode.com/problems/roman-to-integer/description/">roman to integer</a> program.

{% highlight python %}
class Solution:
    def romanToInt(self, s: str) -> int:
        dict1 = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000}
        num = 0
        for i in range(len(s)-1):
            if dict1[s[i]] >= dict1[s[i+1]]:
                num += dict1[s[i]]
            else:
                num -= dict1[s[i]]
        num += dict1[s[-1]]
        return num
{% endhighlight %}

<br />**19th september:** this one was a bit hard. had to take a bit of help from the internet. it's called the <a href="https://leetcode.com/problems/valid-parentheses/">valid parentheses</a> program.

{% highlight python %}
class Solution:
    def isValid(self, s: str) -> bool:
    stack = []
    for i in s:
        if i == '(':
            stack.append(')')
        elif i == '{':
            stack.append('}')
        elif i == '[':
            stack.append(']')
        elif not stack or stack.pop() != i:
            return False
    return not stack
{% endhighlight %}
