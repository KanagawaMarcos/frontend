// Functions 

const catchImage = async (filename) => {
    const response = await fetch(filename);
    return blob = await response.blob();
}

const catchImages = async (filesname) => {
    filesname.map(filename => catchImage(filename))
}

const catchText = async (filename) => {
    const response = await fetch(filename);
    return text = await response.text();
}

const image = catchImage('rainbow.png').catch(error => console.error(error));
document.getElementById('rainbow').src = URL.createObjectURL(image);

const text = catchText('lorem.md').catch(error => console.error(error));
document.querySelector('#lorem').innerHTML = text;

const filesname = ['cat.png','rainbow.png','dog.png'];

const promises = catchImages(filesname);
const images = Promise.all(promises);
console.log(images);
//const img_elements = images
