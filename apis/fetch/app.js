catchRainbow().catch((error)=>{
    console.error("some error has happened:")
    console.error(error)
});
async function catchRainbow(){
    const response = await fetch('rainbow.png');
    const blob = await response.blob();
    document.getElementById('rainbow').src = URL.createObjectURL(blob);
}