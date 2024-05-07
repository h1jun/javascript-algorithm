function solution(n, slicer, num_list) {
    switch(n) {
        case 1:
            return num_list.slice(0, slicer[1]+1)
        case 2:
            return num_list.slice(slicer[0])
        case 3:
            return num_list.slice(slicer[0], slicer[1]+1)
        case 4:
            const arr = num_list.slice(slicer[0], slicer[1]+1)
            const res = [];
            for(let i = 0; i < arr.length; i+=slicer[2]) {
                res.push(arr[i])
            }
            return res;
    }
}