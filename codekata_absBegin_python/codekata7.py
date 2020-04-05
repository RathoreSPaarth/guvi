Print the First 3 multiples of the given number "N". (N is a positive integer)

Note: print the characters with a single space between them.


a = int(input())

for i in range(1,4):
    if i == 3:
        print(a*i)
    else:
        print(a*i,end=" ")
    
        
