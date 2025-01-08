const qrinput = document.getElementById('qr-input');
const qrimg =document.getElementById('qr-image');
const qrbutton =document.getElementById('qr-button');

console.log(qrinput,qrimg,qrbutton)

qrbutton.addEventListener('click', () => {

    const inputValue = qrinput.value;
    console.log(inputValue)

    if( !inputValue ) {
        alert('please enter a valid url');
        return;
    }
    else{
        qrimg.src= 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}';
        qrimg.alt= 'QR code for ${inputvalue}';
    }
});