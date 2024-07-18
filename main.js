let qrimage = document.querySelector('.qr img');
let content = document.getElementById('content')
let btn = document.getElementById('btnCreate')

btn.onclick = () =>{
    if(content.value === '') return;

    // let linkQR = 'https://api.qrserver.com/v1/create-qr-code/'
    qrimage.src = `https://api.qrserver.com/v1/create-qr-code/?size=350x350&data=${content.value}`
    console.log(qrimage.src)
    content.value = '';
}

