Age = int(input("How old are you?: "))

if Age < 18:
    print(f"You are not allowed to vote for the leader because you are {Age} years old")

elif Age >= 18:
    print(f"You are allowed to vote for the leader because you are {Age} years old")

elif Age != int:
    print("Invalid input")