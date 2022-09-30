async function partition(ele, l, r) {
    console.log('In partition()');
    let i = l - 1;
    // color pivot element
    ele[r].style.background = 'red';
    for (let j = l; j <= r - 1; j++) {
        console.log('In partition for j');
        // color current element
        ele[j].style.background = 'yellow';
        // pause
        await waitforme(delay);

        if (parseInt(ele[j].style.height) < parseInt(ele[r].style.height)) {
            console.log('In partition for j if');
            i++;
            swap(ele[i], ele[j]);
            // color
            ele[i].style.background = 'orange';
            if (i != j) ele[j].style.background = 'orange';
            // pause
            await waitforme(delay);
        } else {
            // color if not less than pivot
            ele[j].style.background = 'pink';
        }
    }
    i++;
    // pause
    await waitforme(delay);
    swap(ele[i], ele[r]);
    // color
    ele[r].style.background = 'pink';
    ele[i].style.background = 'green';

    // pause
    await waitforme(delay);

    // color
    for (let k = 0; k < ele.length; k++) {
        if (ele[k].style.background != 'green')
            ele[k].style.background = 'cyan';
    }

    return i;
}
// function for quick sort
async function quickSort(ele, l, r) {
    console.log('In quickSort()');
    if (l < r) {
        let pi = await partition(ele, l, r);
        await quickSort(ele, l, pi - 1);
        await quickSort(ele, pi + 1, r);
    } else {
        if (l >= 0 && r >= 0 && l < ele.length && r < ele.length) {
            ele[r].style.background = 'green';
            ele[l].style.background = 'green';
        }
    }
}


const quickSortbtn = document.querySelector(".quickSort");
quickSortbtn.addEventListener('click', async function() {
    let ele = document.querySelectorAll('.bar');
    let l = 0;
    let r = ele.length - 1;
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await quickSort(ele, l, r);
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});