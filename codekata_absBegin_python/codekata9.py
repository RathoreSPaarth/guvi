You are provided with the radius of a circle "A". Find the length of its circumference.

Note: In case the output is coming in decimal, roundoff to 2nd decimal place. In case the input is a negative number, print "Error".


import math

p = math.pi

a = input()
a = float(a)

if a<0:
  print("Error")
elif a>=0:
  res = 2*p*a
  res = round(res,2)
  print(res)
