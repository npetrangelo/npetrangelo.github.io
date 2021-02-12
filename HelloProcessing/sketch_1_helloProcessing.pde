void drawNameWithLines ()
{
  // insert your code here to draw the letters of your name 
  // using only lines()
  // N
  line (100, 100, 100, 200);
  line (100, 100, 150, 200);
  line (150, 100, 150, 200);
  
  // A
  line (225, 100, 200, 200);
  line (225, 100, 250, 200);
  line (212, 150, 238, 150);
  
  // P
  line (300, 100, 300, 200);
  line (300, 100, 350, 125);
  line (300, 150, 350, 125);
}

void drawNameWithTriangles ()
{
  // insert your code here to draw the letters of your name 
  // using only ltriangles()
  // N
  triangle (100, 350, 125, 350, 125, 250);
  triangle (150, 300, 150, 250, 125, 250);
  triangle (150, 300, 150, 350, 175, 350);
  triangle (200, 250, 175, 250, 175, 350);
  
  // A
  triangle (225, 350, 250, 350, 275, 250);
  triangle (325, 350, 300, 350, 275, 250);
  triangle (250, 300, 300, 300, 275, 312);
  
  // P
  triangle (350, 350, 375, 350, 375, 250);
  triangle (400, 275, 400, 250, 375, 250);
  triangle (400, 275, 400, 300, 375, 300);
}

// --------------------------------------------------------------------------------------------
//
//  Do not edit below this lne
//
// --------------------------------------------------------------------------------------------

boolean doLine = false;
boolean doTri = false;
color backgroundColor = color (150, 150, 150);
color lineColor = color (0, 0, 0);
color fillColor = color (255, 0, 0);

void setup () 
{
  size (500, 500);
  background (backgroundColor);
}

void draw ()
{
  background(backgroundColor);
  
  if (doLine) {
    stroke(lineColor);
    drawNameWithLines();
  }
  
  if (doTri) {
     fill(fillColor);
     stroke(fillColor);
     drawNameWithTriangles();
  }
}

void keyPressed()
{
  if (key == 'l') doLine = !doLine;
  if (key == 't') doTri = !doTri;
  if (key == 'q') exit();
}
