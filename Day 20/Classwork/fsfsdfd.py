my_list = [9,2,4,7,2,6,2,5,6,3,7,16,8,3,6,8,4,7,9,5,8.18,28]
new_list = []

for i in my_list:
    if i % 3 == 0 and i > 0 or i % 5 == 0 and i > 0:
        new_list.append(i)
print(new_list)