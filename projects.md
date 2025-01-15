---
title: /projects
layout: projects
permalink: /projects
---

# projects.
---

# annual portfolios.

> - [2024.](#2024)
> - [2025.](#2025)

<a id = "2025"></a>

# 2025.
---
---

# ongoing projects.
> - [roots of unity continued.](#roots_of_unity_continued)

<a id = "roots_of_unity_continued"></a>

# roots of unity continued.
---

well, i finished the paper. time to publish it.

**_log_**:

**15th january:** i took the paper to my vice-principal and she loved it. she wants to get it published and put me in touch with a publisher as well. now i need to send the paper in for a screening and see what feedback i recieve. let's see what happens i guess.

<a id = "2024"></a>

# 2024.
---
---

# ongoing projects.
> - [ml research.](#ml_research)
> - [roots of unity.](#roots_of_unity)

# completed projects.
> - [advent of code 2024.](#advent_of_code_2024)

# dormant projects.
> - [leetcode.](#leetcode)

<a id="ml_research"></a>

## ml research.
---

(updated on 11th october)
i really was interested in the notion of social constructionism at a point in time. so, i decided to see how social constructs over time and how they can defined now using ml algorithms on public surveys.

**_log_**:

**10th october:** well finally finished the first draft of the survey questions. yes, yes i know i did not yet reveal what i am researching about. patience my friends.

<br />**11th october:** scheduled a meeting to discuss shortlisting and also finally released the idea behind the research.

<br />**13th october:** so the meeting did not happen, but we did go through our next steps and a bit of our timeline.

<br />**14th october:** got on call with on of the members of the research team, atiyah sajith, to go through the basic outline of a convolutional neural network (cnn). this would give us a basic understanding of how an llm would work when it comes to the later stage of research.

<br />**21st october:** we got a final set of questions ready for the survey and got a vague idea on how to move forward.

<br />**24th october:** i pilot tested the questions with a subject just in case we need to make adjustments. special thanks to my school's librarian <a href = "https://www.linkedin.com/in/richard-stanley-52366497/?originalSubdomain=ae" target = _blank>mr. richard stanley</a> for being the test subject.

<br />**30th october:** finally go to building the forms link from the ground up. got all the questions now just need to make a few adjustments and then test for bias. note that i need to pilot test the survey with a testsize of atleast 10 before it is disseminated.

<br />**12th december:** got the survey almost done. we got feedback from <a href = "https://arjunyadav.net/" target = _blank>arjun yadav</a> and we are working on the second draft. after it's completion we will be pilot testing the survey on a focus group. if you would like to take part in the study please do reach out to me in the contact tab. well, until then we will work on the survey.

<a id="leetcode"></a>

## leetcode.
---

finally started to leet. i had wanted to for quite some time now (i had mentionned it on <a href = "https://atharvakokane.github.io/2024/09/01/life-gone-by.html" target = "_blank">a previous post</a>). it is basically a place to practice your skills on programming. if you want to try it out you can try it <a href = "https://leetcode.com/" target= _blank >here</a>.

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

<br />**12th october:** today's was a bit tricky. here is the code for <a href = "https://leetcode.com/problems/merge-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150" target = _blank>merge sorted array</a> program.

{% highlight python %}
class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        for i in nums1:
            if i != 0:
                m += 1
        for j in nums2:
            if j:
                n += 1
        temp = n - 1
        for k in nums1[::-1]:
            if k == 0 and temp > 0:
                nums1.pop()
                temp -= 1
            else:
                break
        nums1.extend(nums2)
        nums1.sort()
{% endhighlight %}

<br />**14th october:** ok i know what you guys will be saying. atharva you missed another day. i didn't guys, i just didnt post it up here cause i did like 5 leets yesterday! well anyways, credits to ganga devi for helping me with this one. here is the code for the <a href = "https://leetcode.com/problems/rotate-array/description/?envType=study-plan-v2&envId=top-interview-150" target = _blank>rotate array</a> program.

{% highlight python %}
class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        for i in range(k):
            x = nums.pop()
            nums.insert(0, x)
{% endhighlight %}

<br />**16th october:** ok i actually missed another day yesterday. here is the code for the <a href = "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/?envType=study-plan-v2&envId=top-interview-150" target = _blank>best time to buy and sell stock</a> program.

{% highlight python %}
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        buy_price = prices[0]
        profit = 0
        for i in prices[1:]:
            if buy_price > i:
                buy_price = i
            profit = max(profit, i - buy_price)
        return profit
{% endhighlight %}

<br />**17th october:** here is the code for the <a href = "https://leetcode.com/problems/ransom-note/description/?envType=study-plan-v2&envId=top-interview-150" target = _blank>ransom note</a> program.

{% highlight python %}
class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        if len(ransomNote) > len(magazine):
            return False   
        for i in set(ransomNote):
            if magazine.count(i) < ransomNote.count(i):
                return False
        return True
{% endhighlight %}

<br />**18th october:** here is the code for the <a href = "https://leetcode.com/problems/number-of-1-bits/description/?envType=study-plan-v2&envId=top-interview-150" target = _blank>number of 1 bits</a> program.

{% highlight python %}
class Solution:
    def hammingWeight(self, n: int) -> int:
        binnum = bin(n)
        stri = str(binnum)
        count = 0
        for i in stri:
            if i == "1":
                count += 1
        return count
{% endhighlight %}

<br />**19th october:** need to go get lunch with mom so can't explain much. here is the code for the <a href = "https://leetcode.com/problems/plus-one/description/?envType=study-plan-v2&envId=top-interview-150" blank = _blank>plus one</a> program.

{% highlight python %}
class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        stri = ''
        for i in digits:
            stri += str(i)
        num = str(int(stri) + 1)
        numlist = []
        for i in num:
            numlist.append(int(i))
        return numlist
{% endhighlight %}

<br />**20th october:** well it is technically after 12 am so it is the next day. here is the code for the <a href = "https://leetcode.com/problems/self-dividing-numbers/description/" target = _blank>self dividing numbers</a> code.

{% highlight python %}
class Solution:
    def selfDividingNumbers(self, left: int, right: int) -> List[int]:
        def isdivisible(n):
            count = 0
            if '0' in str(n):
                return False
            for i in str(n):
                if n % int(i) == 0:
                    count += 1
            if len(str(n)) == count:
                return True
            else:
                return False
        list1 = []
        for i in range(left, right + 1):
            if isdivisible(i):
                list1.append(i)
        return list1
{% endhighlight %}

<br />**21st october:** here is the code for the <a href = "https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word/description/" target = _blank>number of strings that appear as substrings in word</a> code.

{% highlight python %}
class Solution:
    def numOfStrings(self, patterns: List[str], word: str) -> int:
        c = 0
        for i in patterns:
            if i in word:
                c+=1
        return c
{% endhighlight %}

<br />**23rd october:** here is the code for the <a href = "https://leetcode.com/problems/smallest-even-multiple/description/" target = _blank>smallest even multiple</a> program.

{% highlight python %}
class Solution:
    def smallestEvenMultiple(self, n: int) -> int:
        for i in range(2, 301):
            if i % n == 0 and i % 2 == 0:
                return i
{% endhighlight %}

<br />**24th october:** got bored in class. here is the code for the <a href = "https://leetcode.com/problems/powx-n/description/" target = _blank>pow(x, n)</a> program.

{% highlight python %}
class Solution:
    def myPow(self, x: float, n: int) -> float:
        def calc_power(x, n):
            if x == 0:
                return 0
            if n == 0:
                return 1            
            res = calc_power(x, n // 2)
            res = res * res
            if n % 2 == 1:
                return res * x            
            return res
        ans = calc_power(x, abs(n))
        if n >= 0:
            return ans
        return 1 / ans
{% endhighlight %}

<br />**28th october:** alright guys, yall were right. the trend breaks. but i had exams alright. you can't blame me. well regardless, here is the most simplest program i could find for today called the <a href = "https://leetcode.com/problems/add-binary/description/" target = _blank>add binary</a> program.

{% highlight python %}
class Solution:
    def addBinary(self, a: str, b: str) -> str:
        num1 = int(a, 2)
        num2 = int(b, 2)
        binary = bin(num1+num2)
        return binary[2:]
{% endhighlight %}

<br />**4th november:** ok, now you can blame me for not consistent. here is the <a href = "https://leetcode.com/problems/valid-palindrome/description/" target = _blank>valid palindrome</a> program.

{% highlight python %}
class Solution:
    def isPalindrome(self, s: str) -> bool:
        if not s:
            return True
        else:
            word = ''
            for i in s:
                if i.isalnum():
                    word += i
            word = word.lower()
            if word == word[::-1]:
                return True
            else:
                return False
{% endhighlight %}

<br />**5th november:** here is the code for the <a href = "https://leetcode.com/problems/perfect-number/description/" target = _blank>perfect number</a> program.

{% highlight python %}
class Solution:
    def checkPerfectNumber(self, num: int) -> bool:
        list1 = [1]
        if num == 1:
            return False
        for i in range(2, int(num ** 0.5) + 1):
            if num % i == 0:
                list1.append(i + num//i)
        if sum(list1) == num:
            return True
        else:
            return False
{% endhighlight %}

<br />**11th november:** i don't want to hear it, i know i haven't done a leet in a while. anyways, here is the code for the <a href = "https://leetcode.com/problems/two-sum/description/" target = _blank>two sum</a> program.

{% highlight python %}
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        for i in range(len(nums)-1):
            for j in range(i+1, len(nums)):
                if (nums[i]+nums[j] == target):
                    return [i,j]
{% endhighlight %}

<br />**12th november:** i hopefully am back on track. well, here is the code for the <a href = "https://leetcode.com/problems/climbing-stairs/description/" target = _blank>climbing stairs</a> program.

{% highlight python %}
class Solution:
    def climbStairs(self, n: int) -> int:
        if n <= 2:
            return n
        onestep, twostep = 1, 2
        for _ in range(3, n + 1):
            onestep, twostep = twostep, onestep + twostep
        return twostep
{% endhighlight %}

<a id="advent_of_code_2024"></a>

## advent of code 2024.
---

every year there is an event called the advent of code organized by <a href = "http://was.tl/" target = _blank>eric wastl</a>. it is a christmas themed coding challenge that i will be taking part in this year. i found out abbout this challenge through a friend of mine <a href = "https://www.arjunyadav.net/" target = _blank>arjun yadav</a>.

**_log_**:

**17th october:** so i decided to try the 2023 problems to prepare for this year and oh. my. god. i want to actually jam a pen in my eye. i did it at last but it took a lot of brain power and a lot of lines of code. well anyways here is the code for day 1. here is the code:

{% highlight python %}
lines = []
with open('input_day1.txt', 'r') as file:
    for line in file:
        lines.append(line.strip())

def numsubwordcheck(wor):
    numwords = [
    'one', 
    'two', 
    'three', 
    'four', 
    'five', 
    'six', 
    'seven', 
    'eight', 
    'nine'
    ]
    for i in numwords:
        if i in wor:
            return True
    return False

def numsubword(wor):
    numwords = {
    'one': '1', 
    'two': '2', 
    'three': '3', 
    'four': '4', 
    'five': '5', 
    'six': '6', 
    'seven': '7', 
    'eight': '8', 
    'nine': '9'
    }
    for i in numwords:
        if i in wor:
            return numwords[i]
    return None

def calib_num(wor):

    subword1 = ''
    fir = None
    for i in range(len(wor)):
        subword1 += wor[i]
        if wor[i].isdigit():
            fir = wor[i]
            break
        elif numsubwordcheck(subword1):
            fir = numsubword(subword1)
            break

    subword2 = ''
    sec = None
    for j in range(len(wor) - 1, -1, -1):
        subword2 = wor[j] + subword2
        if wor[j].isdigit():
            sec = wor[j]
            break
        elif numsubwordcheck(subword2):
            sec = numsubword(subword2)
            break
    return (int(fir) * 10 + int(sec))

sum = 0
for i in lines:
    sum += calib_num(i)
print(sum)
{% endhighlight %}


<br />**1st december:** it was the first day of the advent calender today. so excited, and i found this one to be a little tricky. had to revisit some cbse concepts, but in the end i got it after revising file handling. i also learnt what the zip function does even though i did not use it. great first day though. here is the code:

{% highlight python %}
file_path = "text day 1.txt"

data = []
with open(file_path, "r") as file:
    for line in file:
        pair = [int(x) for x in line.split()]
        data.append(pair)

def location_calc(data):
    left_list = [x[0] for x in data]
    right_list = [x[1] for x in data]
    left_list.sort()
    right_list.sort()
    total_distance = 0
    for i in range(len(left_list)):
        total_distance += abs(left_list[i] - right_list[i])
    return total_distance

def frequency_location(data):
    left_list = [x[0] for x in data]
    right_list = [x[1] for x in data]
    freq = 0
    for i in left_list:
        freq += right_list.count(i) * i
    return freq

print(location_calc(data))
print(frequency_location(data))
{% endhighlight %}

<br />**2nd december:** well 2nd day was not really a hassle. it was just 2 if statements really. the second puzzle was a bit of a challenge but i got past it. used 2 separate functions for the second puzzle to make it well structured, and yes i used a little help from my friend chat gpt for a little bit of the logic. i was stuck for an hour ok. i also have my chemistry practical record to write (ugh... i shouldn't have lost it). anyways, here is the code for the second day:

{% highlight python %}
file_path = "text day 2.txt"

data = []
with open(file_path, "r") as file:
    for line in file:
        set = [int(x) for x in line.split()]
        data.append(set)

def safe_checker(data):
    safe = 0
    for i in data:
        if i == sorted(i, reverse=True) or i == sorted(i):
            if all(abs(i[j] - i[j + 1]) in [1, 2, 3] for j in range(len(i) - 1)):
                safe += 1
    return safe

def bool_safe_checker(lst):
    if lst == sorted(lst, reverse=True) or lst == sorted(lst):
        if all(abs(lst[j] - lst[j + 1]) in [1, 2, 3] for j in range(len(lst) - 1)):
            return True
    return False

def mod_safe_checker(data):
    safe = 0
    for lst in data:
        if bool_safe_checker(lst):
            safe += 1
        else:
            for i in range(len(lst)):
                temp_lst = lst[:i] + lst[i + 1:]
                if bool_safe_checker(temp_lst):
                    safe += 1
                    break
    return safe

print(safe_checker(data))
print(mod_safe_checker(data))
{% endhighlight %}

<br />**3rd december:** i faced my first defeat today. yes, i know it was bound to happen, but it really sucks. i kinda feel bad, but you can't be great at everything can you? well today's was an interesting one. we learnt alot about character finding and functions to do that in school, but i looked at some of the answers online (yes, i kind of cheated, but not fully. i just wanted to see how others did it). they did it with a library known as regex. i couldn't find any simpler solutions so i had to get creative. in the end i did put it in chat gpt and told it to use regex to see how much better it would be. the results would shock you:

{% highlight python %}
import re

def computer_decorrupter(file_name):
    with open(file_name, 'r') as file:
        total_sum = 0

        for line in file:
            i = 0
            length = len(line)

            while i < length:
                if line[i:i+4] == "mul(":
                    i += 4
                    num1 = ""
                    while i < length and line[i].isdigit():
                        num1 += line[i]
                        i += 1

                    if i < length and line[i] == ',':
                        i += 1
                        num2 = ""
                        while i < length and line[i].isdigit():
                            num2 += line[i]
                            i += 1

                        if i < length and line[i] == ')':
                            total_sum += int(num1) * int(num2)
                i += 1

        return total_sum

def better_computer_decorrupter(file_name):
    with open(file_name, 'r') as file:
        total_sum = 0
        pattern = r"mul\((\d+),(\d+)\)"

        for line in file:
            matches = re.findall(pattern, line)
            for match in matches:
                num1, num2 = match
                total_sum += int(num1) * int(num2)

        return total_sum

file_name = "text day 3.txt"
print(f"The sum of all products is: {computer_decorrupter(file_name)}")
print(f"The sum of all products is: {better_computer_decorrupter(file_name)}")
{% endhighlight %}

<br />ok, so it's almost midnight and i was checking some solutions online because i could not wrap my head around my defeat and i came across this really elegant answer. yes, i did use it to get my missing star on the second puzzle, but i did learn some regex from this code. credits to <a href = "https://github.com/nitekat1124" target = _blank>nitekat1124</a> for the solution. you can check out the full solution in <a href = "https://github.com/nitekat1124/advent-of-code-2024" target = _blank>this git repository</a>. here is the part of the code that i checked out and was interested in.

{% highlight python %}
import re

def part2(data):
    pattern = r"(mul\((\d{1,3}),(\d{1,3})\)|do\(\)|don't\(\))"
    instructions = re.findall(pattern, "".join(data))

    enabled = True
    result = 0

    for inst in instructions:
        match inst[0]:
            case "do()":
                enabled = True
            case "don't()":
                enabled = False
            case _ if enabled:
                result += int(inst[1]) * int(inst[2])

    return result
    {% endhighlight %}

<br />**5th december:** yes, i missed a day but i did it today alright. i did the day 4, puzzle one after some help. here is my code for the first puzzle:

{% highlight python %}
def read_grid_from_file(filename):
    with open(filename, 'r') as file:
        return [line.strip() for line in file.readlines()]

def search_string(grid, target):
    directions = [(0, 1), (1, 0), (1, 1), (1, -1), (0, -1), (-1, 0), (-1, -1), (-1, 1)]
    count = 0

    for r in range(len(grid)):
        for c in range(len(grid[0])):
            for dr, dc in directions:
                if all(
                       0 <= r + i * dr < len(grid) 
                       and 0 <= c + i * dc < len(grid[0]) 
                       and grid[r + i * dr][c + i * dc] == target[i] 
                       for i in range(len(target))
                       ):
                    count += 1

    return count

grid_filename = 'text day 4.txt'
target_string = 'XMAS'

grid = read_grid_from_file(grid_filename)
occurrences = search_string(grid, target_string)
print(f"The string '{target_string}' was found {occurrences} time(s) in the grid.")
{% endhighlight %}

<br />after a few minutes of research, i discovered a solution from the same person i referenced the last time. it is interesting.

{% highlight python %}
def x_search_string(data):
        rows, cols = len(data), len(data[0])
        count = 0

        _set = {"M", "S"}

        for r in range(1, rows - 1):
            for c in range(1, cols - 1):
                if data[r][c] == "A":
                    if ({data[r - 1][c - 1], data[r + 1][c + 1]} == _set 
                        and {data[r - 1][c + 1], data[r + 1][c - 1]} == _set):
                        count += 1

        return count

grid = read_grid_from_file(grid_filename)
x_occurrences = x_search_string(grid)
print(f"The string was found {x_occurrences} time(s) in the grid.")
{% endhighlight %}

<br />either i am losing my mind or i am just actually stupid. i do not understand the day 5 puzzle. if someone actually understands the puzzle please do reach out.

<br />**11th december:** i have not touched another problem since the last time. i will get back to it i swear. i will try to solve as many puzzles as i can this year, but i know i won't get the entirety of the 50 stars.

<a id="roots_of_unity"></a>

## roots of unity.
---

well, i started writing a paper on finding the roots of unity by connecting the complex plane with the real plane using trigonometry. i want to publish as a review article this as soon as possible.

**_log_**:

**10th december:** decided i would actually write the paper directly right after i understood what i needed to do. i got right in to it. i started with the introduction today and finished deriving the general formula. i also came up with some general trends that the formula followed and computed the roots of unity upto n = 7.

<br />**11th december:** well its going really well. i finished the writing the first draft of the paper today. it was actually hard understanding some of the concepts today like discrete fourier systems and galois theory, but when i finally got my head around it, it wasn't hard to explain it in my terms. well, i'll show the first draft to the head of the mathematics deparment at my school, ms. sunita razdan, tomorrow. let's see what she says. finished the paper way faster than i thought i would, but there is still a long way to go.
