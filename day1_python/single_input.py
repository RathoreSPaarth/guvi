import math
num1 = int(input())
#cirlce
def circle(num1):
    print("Diameter:",end=" ")
    print(2*num1)
    print("Circumference:",end=" ")
    print(2*math.pi*num1)
    print("Area:",end=" ")
    print(2*math.pi*num1*num1)
    
circle(num1)

#cm to meters and cm to kilomtrs
print("cm to m:",end=" ")
print(num1*100)

print("cm to km:",end=" ")
print(num1*100000)
    
