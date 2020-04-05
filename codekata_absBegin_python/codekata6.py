# You are provided with a number "N", Find the Nth term of the series: 1, 4, 9, 25, 36, 49, 64, 81, .......

# (Print "Error" if N = negative value and 0 if N = 0).


a = input()
a = int(a)

if a<0:
  print("Error")
elif a>=0:
  print(a*a)
