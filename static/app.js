document.addEventListener('DOMContentLoaded', () => {
    let creatorsLink = document.querySelector('#creators-link');
    let essaysLink = document.querySelector('#essays-link');
    let topFirstRow = document.querySelector('#top-first-row');
    let topSecondRow = document.querySelector('#top-second-row');

    window.addEventListener('load', checkNavbarStacking, false);
    window.addEventListener('resize', checkNavbarStacking, false);

    function checkNavbarStacking() {
        essaysLink.style.borderLeft = '1px solid white';
        essaysLink.style.borderRight = '1px solid white';

        if (topFirstRow.offsetHeight - topSecondRow.offsetHeight <= 0) {
            creatorsLink.style.borderLeft = '0px solid white';
        } else {
            creatorsLink.style.borderLeft = '1px solid white';
        }
    }

    let personalPageImage = document.getElementById('personal-page-image');

    if (personalPageImage !== null) {
        window.addEventListener('load', checkImageStacking, false);
        window.addEventListener('resize', checkImageStacking, false);

        function checkImageStacking() {
            if (topFirstRow.offsetHeight - topSecondRow.offsetHeight <= 0) {
                document.getElementById('personal-page-image').classList.add('creator-image-stacked');
                document.getElementById('personal-page-image').classList.remove('creator-image-unstacked');
            } else {
                document.getElementById('personal-page-image').classList.add('creator-image-unstacked');
                document.getElementById('personal-page-image').classList.remove('creator-image-stacked');
            }
        }
    }
});
