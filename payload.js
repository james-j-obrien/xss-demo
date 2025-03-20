let target = document.getElementById('target');
let style = document.createElement('style');
style.setAttribute('src', 'https://raw.githubusercontent.com/james-j-obrien/xss-demo/refs/heads/main/style.css');
target.appendChild(style);
let img = document.createElement("img");
img.setAttribute('src', 'https://raw.githubusercontent.com/james-j-obrien/xss-demo/refs/heads/main/clippy.webp');
img.setAttribute('height', '200px');
img.setAttribute('width', '200px');
img.classList.add('rotating');
target.appendChild(img);

