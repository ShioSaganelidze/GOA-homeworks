Mark = int(input("Enter any mark from 100 to 0: "))

if Mark >= 90 and Mark <= 100:
    print("თქვენ დაგიფინანსდებათ სწავლა სრულიად.")
elif Mark >= 70 and Mark <= 89:
    print("თქვენ დაგიფინანსდებათ სწავლა 1500 ლარით.")
elif Mark >= 40 and Mark <= 69:
    print("თქვენ დაგიფინანსდებათ სწავლა 500 ლარით.")
elif Mark <= 39 and Mark >= 0:
    print("თქვენ არ დაგიფინანსდებათ სწავლის პროცესი.")
else:
    print("შეცდომა!")