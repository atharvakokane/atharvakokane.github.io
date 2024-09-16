---
title: /projects
layout: projects
permalink: /projects
---

# previous projects.
---
## ml research.

don't want to reveal much but i am finally working on something that i have wanted to for almsot a year.

---
## leetcode.

finally started to leet. i had wanted to for quite some time now (i had mentionned it on <a href="https://atharvakokane.github.io/2024/09/01/life-gone-by.html">a previous post</a>). it is basically a place to practice your skills on programming. if you want to try it out you can try it <a href="https://leetcode.com/">here</a>.

**_log_**:
<br />
**16th september:** did my first leetcode. it was the <a href="https://leetcode.com/problems/palindrome-number/description/">palindrome number</a> program.

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
