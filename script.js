let target = document.getElementById('target');
let style = document.createElement('style');
style.innerText = `
.rotating {
    animation: rotate 4s linear infinite;
}

@keyframes rotate {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}`;
target.appendChild(style);
let img = document.createElement("img");
img.setAttribute('src', 'https://raw.githubusercontent.com/james-j-obrien/xss-demo/refs/heads/main/clippy.webp');
img.setAttribute('height', '200px');
img.setAttribute('width', '200px');
img.setAttribute('id', 'clippy');
img.classList.add('rotating');
target.appendChild(img);

