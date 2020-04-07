#You are given with Principle amount($), Interest Rate(%) and Time (years) in that order. Find Simple Interest.

#Print the output up to two decimal places (Round-off if necessary).

#(S.I. = P*T*R/100)


inp = input()

inp = inp.split()

a = float(inp[0])
b = float(inp[1])
c = float(inp[2])

si = a*b*c/100

print("%.2f" % si)
