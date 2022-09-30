async function merge(ele, low, mid, high) {
    const n1 = mid - low + 1;
    const n2 = high - mid;
    // creating temp array
    let left = new Array(n1);
    let right = new Array(n2);

    for (let i = 0; i < n1; i++) {
        await waitforme(delay);
        console.log('In merge left loop');
        // color
        ele[low + i].style.background = 'red';
        // copying data to left loop
        left[i] = ele[low + i].style.height;
    }
    for (let i = 0; i < n2; i++) {
        await waitforme(delay);
        console.log('In merge right loop');
        // color
        ele[mid + 1 + i].style.background = 'yellow';
        // copying data to right loop
        right[i] = ele[mid + 1 + i].style.height;
    }
    await waitforme(delay);
    // merge temp arrays back to input array
    let i = 0,
        j = 0,
        k = low;
    while (i < n1 && j < n2) {
        await waitforme(delay);
        console.log('In merge while loop');

        // if element of left aaray is small
        if (parseInt(left[i]) <= parseInt(right[j])) {
            console.log('In merge while loop if');
            // color
            if ((n1 + n2) === ele.length) {
                ele[k].style.background = 'green';
            } else {
                ele[k].style.background = '#4dff4d';
            }

            ele[k].style.height = left[i];
            i++;
            k++;
        }
        // if element of right array is small
        else {
            console.log('In merge while loop else');
            // color
            if ((n1 + n2) === ele.length) {
                ele[k].style.background = 'green';
            } else {
                ele[k].style.background = '#4dff4d';
            }
            ele[k].style.height = right[j];
            j++;
            k++;
        }
    }
    // Copy the remaining elements of
    // left array, if there are any
    while (i < n1) {
        await waitforme(delay);
        console.log("In while if n1 is left");
        // color
        if ((n1 + n2) === ele.length) {
            ele[k].style.background = 'green';
        } else {
            ele[k].style.background = '#4dff4d';
        }
        ele[k].style.height = left[i];
        i++;
        k++;
    }
    // Copy the remaining elements of
    // right array, if there are any
    while (j < n2) {
        await waitforme(delay);
        console.log("In while if n2 is left");
        // color
        if ((n1 + n2) === ele.length) {
            ele[k].style.background = 'green';
        } else {
            ele[k].style.background = '#4dff4d';
        }
        ele[k].style.height = right[j];
        j++;
        k++;
    }
}

async function mergeSort(ele, l, r) {
    if (l >= r) {
        console.log(`return cause just 1 elemment l=${l}, r=${r}`);
        return;
    }
    const m = l + Math.floor((r - l) / 2);

    await mergeSort(ele, l, m);
    await mergeSort(ele, m + 1, r);
    await merge(ele, l, m, r);
}

const mergeSortbtn = document.querySelector(".mergeSort");
mergeSortbtn.addEventListener('click', async function() {
    let ele = document.querySelectorAll('.bar');
    let l = 0;
    let r = parseInt(ele.length) - 1;
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await mergeSort(ele, l, r);
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});