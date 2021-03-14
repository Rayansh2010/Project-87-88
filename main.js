var canvas = new fabric.Canvas('canvas');

var player_x = 15;
var player_y = 60;

var part_height = 90;
var part_width = 90;

var part_object = "";
var player_object = "";

function player_update() {
    fabric.Image.fromURL("player.png", function(Img) {
    player_object = Img;

    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);

    player_object.set({
    top: player_y,
    left: player_x
    });
    canvas.add(player_object);
    });

}

function new_image_creation(get_image) {
    fabric.Image.fromURL(get_image, function(Img) {
        part_object = Img;
    
        part_object.scaleToWidth(part_width);    
        part_object.scaleToHeight(part_height);
    
        part_object.set({
        top: player_y,
        left: player_x
        });
        canvas.add(part_object);
        });
    
}

// Starting code to make blocks

window.addEventListener("keydown", player_move);

function player_move(e) {
    var keyPress = e.keyCode;

    if(keyPress == '80') {
        part_height = part_height + 10;
        part_width = part_width + 10;
        document.getElementById("current_width").innerHTML = part_width;
        document.getElementById("current_height").innerHTML = part_height;
        console.log("increase");
    }
    if(keyPress == '77') {
        part_height = part_height - 10;
        part_width = part_width - 10;
        document.getElementById("current_width").innerHTML = part_width;
        document.getElementById("current_height").innerHTML = part_height;
        console.log("decrease"); 
    }
    if(keyPress == '40') {
        console.log("down");
        down();
    }
    if(keyPress == '38') {
        console.log("up");
        up();
    }
    if(keyPress == '37') {
        console.log("left");
        left();
    }
    if(keyPress == '39') {
        console.log("right");
        right();
    }
    if(keyPress == '70') {
        new_image_creation('ironman_face.png');
        console.log("face");
    }
    if(keyPress == '66') {
        new_image_creation('spiderman_body.png');
        console.log("body");
    }
    if(keyPress == '76') {
        new_image_creation('hulk_legs.png');
        console.log("legs");
    }
    if(keyPress == '82') {
        new_image_creation('thor_right_hand.png');
        console.log("right arm");
    }
    if(keyPress == '72') {
        new_image_creation('captain_america_left_hand.png');
        console.log("left hand");
    }
    
}
function up() {
    if(player_y>0) {
    player_y = player_y - part_height;
    canvas.remove(player_object);
    player_update();
    }
}
function down() {
    if(player_y<460) {
    player_y = player_y + part_height;
    canvas.remove(player_object);
    player_update();
    }
}
function left() {
    if(player_x>0) {
    player_x = player_x - part_width;
    canvas.remove(player_object);
    player_update();
    }
}
function right() {
    if(player_x<(1000-170)) {
    player_x = player_x + part_width;
    canvas.remove(player_object);
    player_update();
    }
}