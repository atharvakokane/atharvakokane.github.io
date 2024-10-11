---
title: /projects
layout: projects
permalink: /projects
---

# ongoing projects.
---

- [ml research.](#ml_research)
- [leetcode.](#leetcode)

<a id="ml_research"></a>

## ml research.
---

(updated on 11th october)
i really was interested in the notion of social constructionism at a point in time. so, i decided to see how social constructs over time and how they can defined now using ml algorithms on public surveys.

**_log_**:

**10th october:** well finally finished the first draft of the survey questions. yes, yes i know i did not yet reveal what i am researching about. patience my friends.

<br />**11th october:** scheduled a meeting to discuss shortlisting and also finally released the idea behind the research.

<a id="leetcode"></a>

## leetcode.
---

finally started to leet. i had wanted to for quite some time now (i had mentionned it on 
<a href = "https://atharvakokane.github.io/2024/09/01/life-gone-by.html" target = "_blank">a previous post</a>). it is basically a place to practice your skills on programming. if you want to try it out you can try it <a href = "https://leetcode.com/" target= _blank >here</a>.

**_log_**:

**16th september:** did my first leetcode. it was the <a href="https://leetcode.com/problems/palindrome-number/description/" target= _blank >palindrome number</a> program.

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

<br />**17th september:** finished the <a href="https://leetcode.com/problems/roman-to-integer/description/" target= _blank >roman to integer</a> program.

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

<br />**19th september:** this one was a bit hard. had to take a bit of help from the internet. it's called the <a href="https://leetcode.com/problems/valid-parentheses/description/" target= _blank >valid parentheses</a> program.

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

<br />**30th september:** i know, i didn't practice for a week... i was busy ok. well anyways, here is the code for the <a href="https://leetcode.com/problems/remove-element/description/" target= _blank >remove element</a> program.

{% highlight python %}
class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        while True:
            if val in nums:
                nums.remove(val)
            else:
                break
{% endhighlight %}

<br />alright, so to comeback from my slump, i decided to do 2 codes today. here is the <a href="https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/" target= _blank >find the index of the first occurance in a string</a> code.

{% highlight python %}
class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        if needle in haystack:
            for i in range(len(haystack)):
                if haystack[i : len(needle) + i] == needle:
                    return i
        elif len(needle) > len(haystack):
            return -1
        else:
            return -1
{% endhighlight %}

<br />**1st october:** another day another leetcode. here is the <a href="https://leetcode.com/problems/search-insert-position/description/" target= _blank >search insert position</a> code.

{% highlight python %}
class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        if needle in haystack:
            for i in range(len(haystack)):
                if haystack[i : len(needle) + i] == needle:
                    return i
        elif len(needle) > len(haystack):
            return -1
        else:
            return -1
{% endhighlight %}

<br />**2nd october:** ok so today's code was quite easy. i know, i am getting lazy with these. i will do a hard one later today or maybe tomorrow. here is the code for <a href='https://leetcode.com/problems/multiply-strings/description/' target= _blank >multiply strings</a> program.

{% highlight python %}
class Solution:
    def multiply(self, num1: str, num2: str) -> str:
        return str(int(num1)*int(num2))
{% endhighlight %}

<br />**3rd october:** just smashed this code in one try. here is the code for <a href="https://leetcode.com/problems/length-of-last-word/description/" target= _blank >length of last word</a> program.

{% highlight python %}
class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        word = s.strip()
        count = 0
        for i in word[::-1]:
            if i == " ":
                break
            else:
                count += 1
        return count
{% endhighlight %}

<br />**5th october:** learnt a few things about string methods and their differences today. let's see if i can transition in c soon. here is the code for <a href="https://leetcode.com/problems/valid-palindrome/description/" target= _blank >valid pallindrome</a> program.

{% highlight python %}
class Solution:
    def isPalindrome(self, s: str) -> bool:
        sentence = s.strip()
        if not sentence:
            return True
        else:
            word = ""
            for i in sentence:
                if i.isalnum():
                    word += i
            if word.lower() == word[::-1].lower():
                return True
            else:
                return False
{% endhighlight %}

<br />**7th october:** i had the worst runtime on this. i got a  3036 ms runtime which only beats 5% of the answers. well anyways here is the code for <a href="https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/" target= _blank >remove duplicates from sorted array</a> program.

{% highlight python %}
class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        if not nums:
            return []
        else:
            for i in nums:
                while nums.count(i) > 1:
                    nums.remove(i)
            return len(nums)
{% endhighlight %}

<br />**8th october:** tried my first sql leet today. here is the code for <a href="https://leetcode.com/problems/duplicate-emails/description/" target= _blank >duplicate emails</a> program.

{% highlight sql %}
SELECT EMAIL FROM PERSON
GROUP BY EMAIL HAVING COUNT(EMAIL) > 1
{% endhighlight %}

<br />**9th october:** did another leet with a friend today. credits to abhinav menon for solving this. here is the code for <a href="https://leetcode.com/problems/power-of-two/description/" target= _blank >power of two</a> program.

{% highlight python %}
class Solution:
    def isPowerOfTwo(self, n: int) -> bool: 
        for i in range(32):
            if 2**i == n:
                return True
        else:
            return False
{% endhighlight %}

<br />**10th october:** learned a new function today. a really interesting one called set. well anyways here is the code for <a href="https://leetcode.com/problems/majority-element/description/" target= _blank >majority element</a> program.

{% highlight python %}
class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        setnums = set(nums)
        most = 0
        for i in setnums:
            if nums.count(i) > nums.count(most):
                most = i
        return most
{% endhighlight %}

<br />**11th october:** well this one was kinda easy. here is the code for <a href = "https://leetcode.com/problems/fizz-buzz/description/" target = _blank>fizz buzz</a> program.

{% highlight python %}
class Solution:
    def fizzBuzz(self, n: int) -> List[str]:
        list1 = []
        for i in range(1, n+1):
            if i % 3 == 0 and i % 5 == 0:
                list1.append("FizzBuzz")
            elif i % 3 == 0:
                list1.append("Fizz")
            elif i % 5 == 0:
                list1.append("Buzz")
            else:
                list1.append(str(i))
        return list1
{% endhighlight %}
