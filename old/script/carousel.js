let currentIndex = 2;
let number_of_elements = 3; //Change this to allow scroling to the number of elements
        const items = document.querySelectorAll('.carousel-item');

        function moveCarousel(direction) {
            currentIndex += direction;

            if (currentIndex < 0) {
                currentIndex = number_of_elements-1; // There is somehow a fricking bug but i'm too lazy to fix this shitty ass code.
            } else if (currentIndex >= number_of_elements) {
                currentIndex = 0;
            }

            const offset = -currentIndex * 100;
            document.querySelector('.carousel-slide').style.transform = `translateX(${offset}%)`;
        }