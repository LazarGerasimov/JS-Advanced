function solve(arr) {
    return arr.reduce((a, b, i) => {
        if (b >= a[a.length - 1] && i > 0) {
            a.push(b);
        }
        return a;
    }, [arr[0]]);
}