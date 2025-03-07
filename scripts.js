const skins = [
    { name: "Prime Vandal", image: "imagenes/prime.webp" },
    { name: "Reaver Vandal", image: "imagenes/reaver.webp" },
    { name: "Forsaken Vandal", image: "imagenes/forsaken.webp" },
    { name: "Sentinels of Light Vandal", image: "imagenes/sentinel.webp" },
    { name: "RGX 11z Pro Vandal", image: "imagenes/rgx.webp" },
    { name: "Prelude to Chaos Vandal", image: "imagenes/prelude.webp" },
    { name: "Oni Vandal", image: "imagenes/oni.webp" },
    { name: "Araxys Vandal", image: "imagenes/araxys.webp" },
    { name: "Chronovoid Vandal", image: "imagenes/chronovoid.webp" },
    { name: "Cryostasis Vandal", image: "imagenes/cryostasis.webp" },
    { name: "Imperium Vandal", image: "imagenes/imperium.webp" },
    { name: "Ion Vandal", image: "imagenes/ion.webp" },
    { name: "Kuronami Vandal", image: "imagenes/kuronami.webp" },
    { name: "Neptune Vandal", image: "imagenes/neptune.webp" },
    { name: "Overdrive Vandal", image: "imagenes/overdrive.webp" },
    { name: "Gaia's Vengeance Vandal", image: "imagenes/gaia.webp" },
];

function randomizeSkin() {
    const skinContainer = document.getElementById('skin-container');
    const skinImage = document.getElementById('skin-image');
    const skinName = document.getElementById('skin-name');
    const imageContainer = document.getElementById('image-container');
    skinImage.style.opacity = 0.5;
    skinName.style.opacity = 0.5;
    skinContainer.classList.add('elevated');
    skinContainer.style.animation = 'shake 0.5s';

    let index = 0;
    let intervalId = setInterval(() => {
        const selectedSkin = skins[index];
        skinImage.src = selectedSkin.image;
        skinName.textContent = selectedSkin.name;
        imageContainer.scrollLeft += 30;
        if (imageContainer.scrollLeft >= imageContainer.scrollWidth - imageContainer.clientWidth) {
            imageContainer.scrollLeft = 0;
        }
        index = (index + 1) % skins.length;
    }, 1);

    setTimeout(() => {
        clearInterval(intervalId);
        const randomIndex = Math.floor(Math.random() * skins.length);
        const selectedSkin = skins[randomIndex];
        skinImage.src = selectedSkin.image;
        skinName.textContent = selectedSkin.name;
        skinImage.style.opacity = 1;
        skinName.style.opacity = 1;
        skinContainer.classList.remove('elevated');
        skinContainer.style.animation = 'zoomIn 0.5s';
        const images = imageContainer.getElementsByTagName('img');
        for (let i = 0; i < images.length; i++) {
            if (images[i].src.includes(selectedSkin.image)) {
                imageContainer.scrollLeft = i * 110;
                break;
            }
        }
    }, 2000 + Math.random() * 1000);
}

function displayAllSkins() {
    const container = document.getElementById('image-container');
    container.innerHTML = '';
    skins.forEach(skin => {
        const img = document.createElement('img');
        img.src = skin.image;
        img.alt = skin.name;
        container.appendChild(img);
    });
}

function generateStars() {
    const starsContainer = document.getElementById('stars');
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDuration = `${Math.random() * 10 + 5}s`; // Duración aleatoria para cada estrella
        star.textContent = '★';
        starsContainer.appendChild(star);
    }
    setInterval(() => {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDuration = `${Math.random() * 10 + 5}s`; // Duración aleatoria para cada estrella
        star.textContent = '★';
        starsContainer.appendChild(star);
    }, 500);
}

window.onload = () => {
    displayAllSkins();
    generateStars();
};
