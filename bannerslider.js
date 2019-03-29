document.addEventListener('DOMContentLoaded', () => {
    let btnNext = document.querySelector('#btnnext');
    let btnPrevious = document.querySelector('#btnprevious');
    let slider = document.querySelector('.slides');


    let images = ['img/(358).jpg', 'img/(321).jpg', 'img/(465).jpg', 'img/(500).jpg'];
    let currentIndex = 0;

    btnNext.addEventListener('click', () => {
        let imagesLenght = images.length;
        if (currentIndex < imagesLenght - 1) {
            currentIndex += 1;
            slider.setAttribute('src', images[currentIndex]);
            console.log(currentIndex);
            btnPrevious.disabled = false;
            if (currentIndex === imagesLenght) {
                btnPrevious.disabled = true;
            }
        }

    })

    btnPrevious.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex -= 1;
            slider.setAttribute('src', images[currentIndex]);

            console.log(currentIndex);
            btnNext.disabled = false;
        }
        if (currentIndex === 0) {
            btnPrevious.disabled = true;

        }
    })
})
document.getElementById('#btnNext')