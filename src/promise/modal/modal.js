const modal = (opts) => {
    const wrap = document.createElement('div')
    wrap.classList.add('hide')
    const cancleBtn = document.createElement('button')
    cancleBtn.innerText = '取消'
    cancleBtn.classList.add('cancleBtn')
    const sureBtn = document.createElement('button')
    sureBtn.innerText = '确定'
    sureBtn.classList.add('sureBtn')
    wrap.appendChild(cancleBtn)
    wrap.appendChild(sureBtn)
    document.body.appendChild(wrap)

    // const wrap = document.querySelector('.hide')
    // const cancelBtn = document.querySelector('.cancleBtn')
    // const sureBtn = document.querySelector('.sureBtn')
    wrap.classList.add('show')
    return new Promise((resolve, reject) => {
        cancleBtn.addEventListener('click', () => {
            wrap.classList.remove('show')
            reject(1)
        })
        sureBtn.addEventListener('click', () => {
            resolve()
        })
    })
}