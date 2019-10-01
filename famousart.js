function setup(){

createCanvas(900,900);

rect(0 , 0, width, height)


ellipse(202, 202, 150, 25)
	ellipse(202, 201, 100, 15)

	stroke(0, 0 , 0)
	strokeWeight(1)
	noFill()


	beginShape()

	curveVertex(277, 199)
	curveVertex(277, 201)
	curveVertex(286, 220)
	curveVertex(287, 250)
	curveVertex(280, 280)

	curveVertex(277, 300)
	curveVertex(277, 300)


	endShape()

	beginShape()

	curveVertex(277, 300)
	curveVertex(277, 300)

	curveVertex(281, 320)
	curveVertex(303, 330)

	curveVertex(350, 307)
	// curveVertex(370, 270)
	curveVertex(420, 238)

	curveVertex(571, 245)
	curveVertex(571, 245)

	endShape()

	beginShape()
	
	curveVertex(127, 201)
	curveVertex(127, 201)
	curveVertex(123, 215)
	curveVertex(120, 260)

	curveVertex(128, 309)

	curveVertex(159, 357)
	curveVertex(218, 385)

	curveVertex(258, 392)
	curveVertex(340, 383)

	curveVertex(414, 340)

	curveVertex(471, 281)

	curveVertex(571, 261)
	curveVertex(571, 261)

	endShape()

	beginShape()


	curveVertex(571, 261)
		curveVertex(571, 261)
		curveVertex(575, 264)
curveVertex(574, 252)
		curveVertex(574, 241)

		curveVertex(571, 245)
		curveVertex(571, 245)


	endShape()

textStyle(ITALIC);
textSize(32);
fill(0);
text("ceci n'est pas une pipe.", 300, 400);

}
function mouseClicked(){

	print(int(mouseX), int(mouseY))
}
