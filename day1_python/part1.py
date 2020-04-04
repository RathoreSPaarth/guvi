num1 = int(input())
num2 = int(input())
#sum of two numbers
print("sum:",end = " ")
print(num1+num2)

#difference of two numbers
print("Differance:",end=" ")
print(num1-num2)

#product of two numbers
print("product:",end=" ")
print(num1*num2)

#division of two numbers
print("division:",end=" ")
print(num1/num2)

#perimeter of rectangle
def peri(num1,num2):
    print("Perimeter is:",end=" ")
    return 2*(num1+num2)

print(peri(num1,num2))

#area of rectangle
def area(num1,num2):
    print("Area is:",end=" ")
    print(num1*num2)

area(num1,num2)

#power of X

print("X^Y is:",end = " ")
print(pow(num1,num2))

#area of right triangle

def areaTriangle(num1,num2):
    print("Area of Right Triangle is:",end=" ")
    return 0.5*num1*num2
    
print(areaTriangle(num1,num2))

