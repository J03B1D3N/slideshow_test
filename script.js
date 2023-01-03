const slideShow = document.querySelector('.slideShow')
const slideShowImages = document.querySelectorAll('.slideShow img')
const imgIndexContainer = document.getElementById('imgIndexContainer')



const previousBtn = document.getElementById('previous')
const nextBtn = document.getElementById('next')

let counter = 1;

const size = slideShowImages[0].clientWidth

for (let i = 0; i < slideShowImages.length -2; i++){
    const imgIndex = document.createElement('div')
    imgIndex.classList.add('imgIndex')
    imgIndex.setAttribute('data-id', `${i}`)
    imgIndexContainer.appendChild(imgIndex)
}

const imgIndexContainerChildren = document.querySelectorAll('.imgIndex')
console.log(imgIndexContainerChildren.length)

function indexUpdate () {
    document.querySelectorAll('.imgIndex').forEach(index => index.style.scale = '1')
    switch(counter){
        case slideShowImages.length - 1: 
        imgIndexContainer.children[0].style.scale = '1.5'
        break;

        case 0:
        imgIndexContainer.children[imgIndexContainerChildren.length - 1].style.scale = '1.5' 
        break;

        case counter:
        imgIndexContainer.children[counter - 1].style.scale = '1.5' 
        break;  
        
    }
    
}

indexUpdate();
console.log(slideShowImages)

slideShow.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click', () => {
    if(counter >= slideShowImages.length - 1) return;
    slideShow.style.transition = 'transform 0.4s ease-in-out'
    counter++
    slideShow.style.transform = 'translateX(' + (-size * counter) + 'px)';
    console.log(counter)
    indexUpdate();
})

previousBtn.addEventListener('click', () => {
    if(counter <= 0) return;
    slideShow.style.transition = 'transform 0.4s ease-in-out'
    counter--
    slideShow.style.transform = 'translateX(' + (-size * counter) + 'px)';
    console.log(counter)
    indexUpdate();
})

slideShow.addEventListener('transitionend', () => {
    if(slideShowImages[counter].id === 'lastClone'){
        slideShow.style.transition = 'none'
        counter = slideShowImages.length - 2;
        slideShow.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if(slideShowImages[counter].id === 'firstClone'){
        slideShow.style.transition = 'none'
        counter = slideShowImages.length - counter;
        slideShow.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
})