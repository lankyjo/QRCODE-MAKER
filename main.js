let qrimage = document.querySelector('.qr img');
let loader = document.querySelector('.loader');
let content = document.getElementById('content');
let btn = document.getElementById('btnCreate');

btn.onclick = () => {
    if (content.value === '') return;

    // Show loader
    loader.style.display = 'block';

    // Hide the QR image while loading
    qrimage.style.display = 'none';

    qrimage.src = `https://api.qrserver.com/v1/create-qr-code/?size=350x350&data=${content.value}`;
    console.log(qrimage.src);

    qrimage.onload = () => {
        // Hide loader and show QR image
        loader.style.display = 'none';
        qrimage.style.display = 'block';
    };

    content.value = '';
};
