
void midpointLineX (int x1, int y1, int x2, int y2)
{
  int dE, dNE, x, y, d;
  int dy = y2 - y1, dx = x2 - x1;
  dE = 2*dy;
  dNE = 2*(dy - dx);
  d = dE - dx; // 2*dy - dx
  int dir = (int) Math.signum(dy);
  for (x=x1, y=y1; x<=x2; ++x) {
    point(x,y);
    if (dir * d <= 0) {
      d += dE;
    } else {
      y += dir;
      d += dNE;
    }
  }
}

void midpointLineY (int x1, int y1, int x2, int y2)
{
  int dE, dNE, x, y, d;
  int dy = y2 - y1, dx = x2 - x1;
  dE = 2*dx;
  dNE = 2*(dx - dy);
  d = dE - dy; // 2*dy - dx
  int dir = (int) Math.signum(dx);
  for (x=x1, y=y1; y<=y2; ++y) {
    point(x,y);
    if (dir * d <= 0) {
      d += dE;
    } else {
      x += dir;
      d += dNE;
    }
  }
}

void myLine (int x1, int y1, int x2, int y2)
{
  if (abs(x2-x1) - abs(y2-y1) > 0) {
    // More horizontal than vertical
    if (x2 - x1 >= 0) {
      // Left to right
      midpointLineX(x1, y1, x2, y2);
    } else {
      // Right to left
      midpointLineX(x2, y2, x1, y1);
    }
  } else {
    // More vertical than horizontal
    if (y2 - y1 >= 0) {
      // Top to bottom
      midpointLineY(x1, y1, x2, y2);
    } else {
      // Bottom to top
      midpointLineY(x2, y2, x1, y1);
    }
  }
  
  // insert your code here to draw a line from (x1, y1) to (x2, y2) 
  // using only calls to point().
  
  // your code should implement the Midpoint algorithm
}

// Returns +1 if point is right of vector from v0 to v1
// Returns -1 if point is left of vector from v0 to v1
int leftRight(int px, int py, int x0, int y0, int x1, int y1) {
  return (int) Math.signum((px - x0)*(y1 - y0) - (py - y0)*(x1 - x0));
}

void myTriangle (int x0, int y0, int x1, int y1, int x2, int y2)
{
  // insert your code here to draw a triangle with vertices (x0, y0), (x1, y1) and (x2, y2) 
  // using only calls to point().
  int x_min = min(min(x0,x1),x2);
  int x_max = max(max(x0,x1),x2);
  int y_min = min(min(y0,y1),y2);
  int y_max = max(max(y0,y1),y2);
  for (int y = y_min; y < y_max; ++y) {
    for (int x = x_min; x < x_max; ++x) {
      int E_01 = leftRight(x, y, x0, y0, x1, y1);
      int E_12 = leftRight(x, y, x1, y1, x2, y2);
      int E_20 = leftRight(x, y, x2, y2, x0, y0);
      if (E_01*E_12*E_20 >= 0) {
        point(x,y);
      }
    }
  }
  
  // your code should implement the the algorithm presented in the video
}



// --------------------------------------------------------------------------------------------
//
//  Do not edit below this lne
//
// --------------------------------------------------------------------------------------------

boolean doMine = true;
int scene = 1;
color backgroundColor = color (150, 150, 150);

void setup () 
{
  size (500, 500);
  background (backgroundColor);
}

void draw ()
{
  fill (0,0,0);
    if (doMine) text ("my solution", 20, 475);
    else text ("reference", 20, 475);
    
  if (scene == 1) doLines();
  if (scene == 2) doHouse();
  
}

void doHouse()
{
  if (!doMine) {
    fill (255, 0, 0);
    stroke (255,0,0);
    triangle (200, 300, 300, 200, 200, 200);
    triangle (300, 300, 300, 200, 200, 300);
    fill (0, 0, 255);
    stroke (0,0,255);
    triangle (200,200, 300, 200, 250, 150);
    stroke (0,255,0);
    fill (0,255,0);
    triangle (250, 300, 275, 300, 250, 250);
    triangle (275, 300, 275, 250, 250, 250);
  }
  else {
    fill (128, 0, 0);
    stroke (128,0,0);
    myTriangle (200, 300, 300, 200, 200, 200);
    myTriangle (300, 300, 300, 200, 200, 300);
    fill (0, 0, 128);
    stroke (0,0,128);
    myTriangle (200,200, 300, 200, 250, 150);
    stroke (0,128,0);
    fill (0,128,0);
    myTriangle (250, 300, 275, 300, 250, 250);
    myTriangle (275, 300, 275, 250, 250, 250);
  }
}

void doLines()
{
  if  (!doMine) {
    stroke (255, 255, 255);
    line (50, 250, 450, 250);
    line (250, 50, 250, 450);
    line (50, 450, 450, 50);
    line (50, 50, 450, 450);
  }
  else {
    stroke (0, 0, 0);
    myLine (50, 250, 450, 250);
    myLine (250, 50, 250, 450);
    myLine (50, 450, 450, 50);
    myLine (50, 50, 450, 450);
  }
}

void keyPressed()
{
  if (key == '1') 
  {
    background (backgroundColor);
    scene = 1;
  }
  
  if (key == '2') 
  {
    background (backgroundColor);
    scene = 2;
  }
  
  if (key == 'm') 
  {
    background (backgroundColor);
    doMine = !doMine;
  }
  
  if (key == 'q') exit();
}
