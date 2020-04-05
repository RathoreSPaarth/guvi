# You are provided with two numbers. Find and print the smaller number.

# Input Description:
# You are provided with two numbers as input.
inp = input()

inp = inp.split()

a = int(inp[0])
b = int(inp[1])

if a>b:
    print(b)
elif b>a:
    print(a)
