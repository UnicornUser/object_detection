img = "";
status = "";
object = [];

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Ststus : Detecting Objects";
}

function preload(){
    img - loadImage('dog_cat.jpg');
}

function draw() {
    image(img, 0, 0, 640, 420);

         if(status !="")
         {
            for (i = 0; i < objects.length; i++)
            {
                document.getElementById("status").innerHTML = "Status : Object Detected";

                fill("#FF0000");
                percent = floor(objects[i].confidence * 100);
                Text(objects[i].label + "" + percent + "%", objects[i].x + 15, objects[i].y + 15);
                noFill();
                stroke("#FF0000");
                rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
            }
         }

    fill("#FF0000");
    Text("Cute_charms", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350);

    fill("#FF0000")
    Text("Cute_Mini_Diaries", 320, 120);
    noFill();
    stroke("#FF0000");
    rect(300, 90, 270, 320 );
}

function modelLoaded() {
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResults(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}
