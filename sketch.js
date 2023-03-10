var colors = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'magenta', 'brown', 'white', 'black'];

var x, y;

var selectedColorIndex = 0;
var palette_cell_size = 50;

var drawing = false;

function setup() {

    createCanvas(750, 750);

    strokeWeight(10);

    background(200);
}


function draw() {

    noStroke();

    for (let i = 0; i < colors.length; i++) {

        fill(colors[i]);

        rect(0, i * palette_cell_size, palette_cell_size, palette_cell_size);
    }

    stroke(colors[selectedColorIndex]);
}


function mousePressed() {

    if (mouseX >= 0 && mouseX < palette_cell_size && mouseY >= 0 && mouseY < (colors.length * palette_cell_size)) {

        selectedColorIndex = floor(mouseY / palette_cell_size);

        stroke(colors[selectedColorIndex]);

        drawing = false;
    } else {

        x = mouseX;
        y = mouseY;

        drawing = true;
    }
}


function mouseDragged() {

    if (drawing) {

        line(x, y, mouseX, mouseY);

        x = mouseX;
        y = mouseY;
    }
}