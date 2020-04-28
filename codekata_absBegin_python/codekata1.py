#You are given the coefficients of a quadratic equation in order A, B & C.

#Where A is the coefficient of X2,  B is the coefficient of X and C is the constant term in the most simplified form.

#Example: For  X2 + 5X + 6 = 0, you are given the input as: 1 5 6.

#Write a program to find all of the roots of the quadratic.

#Note: The output should be up to 2nd decimal place (round off if needed) and in case of a recurring decimal use braces i.e. for eg: 0.33333..... => 0.33.

#Note: Use Shri Dharacharya's Method to solve i.e. X = {-b + √(b² - 4ac) } / 2a & {-b-√(b² -4ac)} / 2





import math

inp = input()

inp = inp.split()

a = int(inp[0])
b = int(inp[1])
c = int(inp[2])


e = math.sqrt(b*b-4*a*c)

res1 = (-b+e)/(2*a)
res2 = (-b-e)/(2*a)


round(res1,2)
round(res2,2)


print("%.2f" % res1)
print("%.2f" % res2)

