// multiple images

catchRainbow().catch((error)=>{
    console.error("some error has happened:")
    console.error(error)
});

async function catchRainbow(){
    const response = await fetch('rainbow.png');
    const blob = await response.blob();
    document.getElementById('rainbow').src = URL.createObjectURL(blob);
}

async function catchLorem (){

    const response = await fetch('lorem.md');
    const text = await response.text();
    document.querySelector('#lorem').innerHTML = text;
}