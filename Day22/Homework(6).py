def Num_Checker(num):
    if num > 0:
        return "Your number is positive"
    elif num < 0:
        return "Your number is negative"
    else:
        return "Your number equals to 0"

print(Num_Checker(-2))