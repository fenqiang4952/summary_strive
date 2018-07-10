


function cancle() {
    console.log(1);
}
function sure() {
    console.log(2);
}

const modal = modal()

modal.then(sure).catch(cancle)