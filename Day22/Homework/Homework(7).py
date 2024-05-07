def Age_Checker(age):
    if age < 13 and age >= 0:
        return "You're a child"
    elif age >= 13 and age < 18:
        return "You're a teenager"
    elif age >= 18:
        return "You're an adult"
    else:
        return "Invalid age"
    
print(Age_Checker(12))