int find_max(int a[], int n) {
    int i, MAX, INDEX;

    if (n <= 0) {
        return -1;
    }

    INDEX = n - 1;
    MAX = a[INDEX];
    
    for (i = n - 2; i >= 0; i--) {
        if (MAX < a[i]) {
            MAX = a[i];
            INDEX = i;
        }
    }
    
    return INDEX;
}