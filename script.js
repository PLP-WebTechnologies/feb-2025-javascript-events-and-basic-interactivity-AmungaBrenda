// Image Gallery Slider
document.addEventListener('DOMContentLoaded', () => {
    const images = [
        { src: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Modern Minimalist Living Room' },
        { src: 'https://images.pexels.com/photos/6750153/pexels-photo-6750153.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Rustic Farmhouse Kitchen' },
        { src: 'https://images.pexels.com/photos/2451566/pexels-photo-2451566.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Industrial Loft Design' },
        { src: 'https://images.pexels.com/photos/7113360/pexels-photo-7113360.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Scandinavian Bedroom' }
    ];

    let currentImageIndex = 0;
    const mainImage = document.getElementById('mainImage');
    const imageDescription = document.getElementById('imageDescription');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    function updateImage(index) {
        mainImage.src = images[index].src;
        imageDescription.textContent = images[index].description;
        mainImage.style.opacity = 0;
        setTimeout(() => { mainImage.style.opacity = 1; }, 50);
    }

    nextBtn.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updateImage(currentImageIndex);
    });

    prevBtn.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        updateImage(currentImageIndex);
    });

    // Dark Mode Toggle
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        themeToggle.textContent = document.body.classList.contains('dark-mode') 
            ? '☀️ Light Mode' 
            : '🌙 Dark Mode';
    });

    // Color Palette Interaction
    const colorButtons = document.querySelectorAll('.color-btn');
    const colorDisplay = document.getElementById('colorDisplay');

    colorButtons.forEach(btn => {
        btn.style.backgroundColor = btn.dataset.color;
        btn.addEventListener('click', () => {
            const selectedColor = btn.dataset.color;
            colorDisplay.style.backgroundColor = selectedColor;
            colorDisplay.textContent = btn.textContent + ' Selected';
        });
    });

    // Form Validation
    const form = document.getElementById('designForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const submitBtn = document.getElementById('submitBtn');

    // Real-time validation functions
    function validateName() {
        const nameError = document.getElementById('nameError');
        if (nameInput.value.trim().length < 2) {
            nameError.textContent = 'Name must be at least 2 characters long';
            return false;
        }
        nameError.textContent = '';
        return true;
    }

    function validateEmail() {
        const emailError = document.getElementById('emailError');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            emailError.textContent = 'Please enter a valid email address';
            return false;
        }
        emailError.textContent = '';
        return true;
    }

    function validatePhone() {
        const phoneError = document.getElementById('phoneError');
        const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
        if (phoneInput.value && !phoneRegex.test(phoneInput.value)) {
            phoneError.textContent = 'Please enter a valid phone number';
            return false;
        }
        phoneError.textContent = '';
        return true;
    }

    // Real-time validation event listeners
    nameInput.addEventListener('input', validateName);
    emailInput.addEventListener('input', validateEmail);
    phoneInput.addEventListener('input', validatePhone);

    // Form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isPhoneValid = validatePhone();

        if (isNameValid && isEmailValid && isPhoneValid) {
            alert('Consultation request submitted successfully!');
            form.reset();
        }
    });

    // Keyboard Interaction - Secret Easter Egg
    let secretCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown'];
    let currentSecretIndex = 0;

    document.addEventListener('keydown', (e) => {
        if (e.key === secretCode[currentSecretIndex]) {
            currentSecretIndex++;
            
            if (currentSecretIndex === secretCode.length) {
                alert('🎉 Congratulations! You found the secret Konami code! 🏆');
                currentSecretIndex = 0;
            }
        } else {
            currentSecretIndex = 0;
        }
    });
});