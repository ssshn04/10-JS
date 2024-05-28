function drawEllipse() {
    const a = document.getElementById('a').value;
    const b = document.getElementById('b').value;

    drawEllipseMosaic(a, b);
    drawEllipseSVG(a, b);
    drawEllipseCanvas(a, b);
}

function drawEllipseMosaic(a, b) {
    const container = document.getElementById('mosaic-container');
    container.innerHTML = '<div class="axis x-axis"></div><div class="axis y-axis"></div>'; 
    const centerX = 250;
    const centerY = 250;
    const step = 0.01;

    for (let t = 0; t <= 2 * Math.PI; t += step) {
        const x = a * Math.cos(t) + centerX;
        const y = b * Math.sin(t) + centerY;
        const dot = document.createElement('div');
        dot.className = 'dot';
        dot.style.left = `${x}px`;
        dot.style.top = `${y}px`;
        container.appendChild(dot);
    }
}

function drawEllipseSVG(a, b) {
    const svg = document.getElementById('svg-container');
    svg.innerHTML = ''; 
    const centerX = 250;
    const centerY = 250;

    const ellipse = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
    ellipse.setAttribute('cx', centerX);
    ellipse.setAttribute('cy', centerY);
    ellipse.setAttribute('rx', a);
    ellipse.setAttribute('ry', b);
    ellipse.setAttribute('stroke', 'black');
    ellipse.setAttribute('fill', 'none');
    svg.appendChild(ellipse);
}

function drawEllipseCanvas(a, b) {
    const canvas = document.getElementById('canvas-container');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
    const centerX = 250;
    const centerY = 250;

    ctx.beginPath();
    ctx.ellipse(centerX, centerY, a, b, 0, 0, 2 * Math.PI);
    ctx.stroke();
}