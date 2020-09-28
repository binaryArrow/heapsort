"use strict"

let array = [4,5,1,2,7,8,6,9,3];

console.log(array);

function heapsort(arr){
    buildHeap(arr);
    for(let i = arr.length -1; i >= 0; i--){
        let temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
        //console.log(array);
        heapify(arr, i, 0);
    }
}

function heapify(a, heapsize, i){
    let l = 2*i+1;
    let r = 2*i+2;
    let max;

    if(l < heapsize && a[l] > a[i]){
        max = l;
    }

    else {
        max = i;
    }

    if(r < heapsize && a[r] > a[max]){
        max = r;
    }

    if(max != i){
        let temp = a[i];
        a[i] = a[max];
        a[max] = temp;
        console.log(array);
        heapify(a, heapsize, max);
    }
}


function buildHeap(a){
    for(let i = Math.floor(a.length/2); i >=0; i--){
        heapify(a, a.length, i-1);
    }
}

heapsort(array);

console.log(array);
