#Let "A" be a year, write a program to check whether this year is a leap year or not.

#Print "Y" if its a leap year and "N" if its a common year.


year = int(input())
if (year % 4) == 0:
   if (year % 100) == 0:
       if (year % 400) == 0:
           print("Y")
       else:
           print("N")
   else:
       print("Y")
else:
   print("N")
