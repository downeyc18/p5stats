var img;
var img2;
var img3;
var stat;

/* variables to create the variables*/


function setup() {
  createCanvas(600, 600);
	img3 = createImg ('http://www.backyardpoolpatio.com/wp-content/uploads/2013/06/bg-water_2.jpg');
	img3.hide();
	/*This "img3" is grabbing the background from the internet*/
	
  img = createImg('https://d1w9csuen3k837.cloudfront.net/Pictures/2000x2000fit/4/2/8/129428_Clean-drinking-water_iStock-106580127.jpg');
  img.hide();
  background(135,135);
	img2 = createImg('http://www.nofrackingway.us/wp-content/uploads/2012/08/dirty-water.jpeg');
  img2.hide();
  background(135);
	/* This is to create and grab the pictures from the internet. The placement of the pictures is down below*/

} 

function draw() {
	//image(img3, 0,0, width/1, height/1);
	/*This was for the background but the text wasn't showing. If I had more time, I would have tried to problem solve.*/
  image(img, 0, 0, width/3, height/3);
	image(img2, 400, 0, width/3, height/3); 
	/* This places the pictures and the background*/

	
	var stat = text("Out of 844 million people in the world, 1 in 10 do not have access to clean water", 80,250)
	var stat = text("2.3 billion people in the world, one in three, do not have a decent toilet", 120,295)
	var stat = text("289,000 children under 5 die each year due to diarrhoeal diseases caused by poor water and sanitation.", 30,335)
	var stat = text("That’s 800 a day, or 1 child every 2 minutes.", 200,355)
  stat.textSize(30)
	stat.fill(0,0) 
}
