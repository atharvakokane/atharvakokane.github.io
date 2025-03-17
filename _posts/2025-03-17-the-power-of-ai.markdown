---
layout: post
title:  "the power of ai."
date:   2025-03-17 14:07 +0400
categories:
mathjax: false
---

_17th march 2025, monday_

# the power of ai.
---

ai is changing everything it automates boring tasks solves problems in seconds and even creates music and art it’s powering self-driving cars revolutionizing healthcare and making businesses smarter it learns adapts and improves constantly imagine a world where ai predicts diseases before symptoms appear or writes code better than humans it’s not just a tool anymore it’s becoming a collaborator in science creativity and everyday life the question isn’t what ai can do now it’s what it will do next.

i swear, i just put in that i want a ascii art generator and it coded me this.

{% highlight python %}
from PIL import Image
import numpy as np

ASCII_CHARS = "@%#*+=-:. "

def image_to_ascii(image_path, width=100):
    image = Image.open(image_path).convert('L')
    aspect_ratio = image.height / image.width
    new_height = int(width * aspect_ratio * 0.55)
    image = image.resize((width, new_height))
    
    pixels = np.array(image)

    scale_factor = 255 / (len(ASCII_CHARS) - 1)
    ascii_art = "\n".join("".join(ASCII_CHARS[min(int(pixel / scale_factor), len(ASCII_CHARS) - 1)] for pixel in row) for row in pixels)
    
    return ascii_art

if __name__ == "__main__":
    image_path = input("Enter image path: ")
    ascii_result = image_to_ascii(image_path)
    print(ascii_result)
{% endhighlight %}

i entered a picture of a donut, and i got this

                                                           ... ..
                                                       ...:-::--: :..
                                                 .:....:-.-+=-:.--==....
                                               ..-=:::::::=-::..:-+-::--:
                                    .        ...::::--==::--:::::-::::-+=--:.
                       ..........::::::...:....::-+-+#*-:::::----:---:----=-:.
                    .:-==--:::.:--=-:-=-.:+*=..:::=-=+==--:::::=--+-==--++-.:---
                  .:+=---.-:::--==----:::=-:...::+#**+*++-----=%+++=*+==+#*=:-+#+.
                .::-==--:::--==++=++==-::::..:::-+==+=---=----=##=-+*=====+=-::+#=-
            ...:::::::...:---=*******=-:::.:..:::::::-=++==++=-=====++++===----*++*=.
             .:-::.:-=--+--::-+*####*+-:...-:.::::::::--==-::----===+++++===---=**=--:
            .:-==::-:-*+-..:=-::-=+==-:.:::-:.:::::::=+==*+::::---*#*++*++==---::---==-.
           .::...:-::::==---:----:.:-=-----=-.::::----=+==+-::::::=#%**#*+==---::::=+**:
           .:::..:--==-==-----=+=--=+**++++==:.::=+=-:.--::-:::..:::=====--:--:::=+=+#*-
           .::::::.:+=--:.:------:=*****#**===:::-----.:---=-:::::..:-:..::::::===+++*=:.
            .::::..-------=========-=++++**+=+=::::--------=--+*-:::::=+:.:::::------===:.
             :=-::--------===========++++*##++++:::-----=-:---+=:--:::+*-.-=+-::::---:--..
             .-++=-:-----------=--====+++****++++-:-------:--------::-===-=*+-----------.
              .=+++=:-::--::::-----====+++++**+++*=-:---------------=+=-=-#+=-:-------:-
               .-=+*-:-**********+++*****##%%%#+++*+=-------------+++=-=--+#*==-----==::
                 .-++:-##################%%%%%%%*****+=----==+====+++-==---*#++-----+*:.
                   .::-*###############%%%%%%##**+*****+==--+=-===---===---=+=+=----=-.
                      ..:-==++******#*****++==-----=+***#**+=---===-===------=======-.
                            ......:::::::::::::.....:-+*####**++==========--=======-.
                                                      .:=**#####****+++++++*+++=-::.
                                                         .:=+**##########*+=--:...
                                                             .::--===--:::...

- ask.
