# Using the method of looping, write a program to print the table of 9 till N in the format as follows:
# (N is input by the user)

# 9 18 27...

# Print NULL if 0 is input



a = int(input())

for i in range(1,a+1):
    if i == a:
        print(9*i)
    else:
        print(9*i,end=" ")
    
        
