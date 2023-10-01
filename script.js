const images = ['project1.png', 'project2.png', 'project3.png']; // Replace with your image URLs
        const texts = ['FilmVault-imdb clone', 'Airport Airplane Tracker', 'Portfolio Website']; // Replace with your corresponding text

        let currentIndex = 0;

        function prev() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateContent();
        }

        function next() {
            currentIndex = (currentIndex + 1) % images.length;
            updateContent();
        }

        function updateContent() {
            const imageElement = document.querySelector('.image');
            const textElement = document.querySelector('.text');
            imageElement.style.backgroundImage = `url('${images[currentIndex]}')`;
            textElement.textContent = texts[currentIndex];
        }

        // Initialize the content
        updateContent();

