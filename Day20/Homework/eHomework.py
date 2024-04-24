a = int(input("Make the first number higher than the second number: "))
b = int(input("Make the second number lower than the first number: "))

NewList = []

for i in range(a, b + 1):
    NewList.append(i)
print(NewList)    
