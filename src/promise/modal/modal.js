// class Modal {
//     constructor(opts) {
//         this.render()
//         this.opts = opts
//     }
    function modal() {

        const wrap = document.querySelector('.hide')
        const cancelBtn = document.querySelector('.cancleBtn')
        const sureBtn = document.querySelector('.sureBtn')
        wrap.style.display = 'block'
        return new Promise((resolve, reject) => {
            cancelBtn.addEventListener('click', () => {
                reject()
            })
            sureBtn.addEventListener('click', () => {
                resolve()
            })
        })
    }
// }