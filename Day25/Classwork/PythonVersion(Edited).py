def find_max(n, a):
    k = 0
    i = n - 1
    max = a[i]
    index = i
    for i in range(n-2):
        k += 1
        if max < a[i]:
            max = a[i]
            index = i
    return f"Index of max number: {index}, iteration in for loop: {k}"

print(find_max(5, [1, 2, 5, 3, 4]))