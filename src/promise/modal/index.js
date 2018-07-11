
async function test(params) {
    try {
        await modal()
        console.log(8989);
    } catch (error) {
        console.log(error);
    }
    
}

// function test(params) {
//     modal().then(() => {
//         console.log(9090);
//     }).catch(() => {
//         console.log(1);
//     })
// }
const tan = document.querySelector('#tan')
tan.addEventListener('click', test)