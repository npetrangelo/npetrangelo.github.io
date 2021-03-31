class Vector {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    static fromArray(v) {
        return new Vector(v[0], v[1], v[2]);
    }

    add(that) {
        return new Vector(this.x + that.x, this.y + that.y, this.z + that.z);
    }

    subtract(that) {
        return this.add(that.scale(-1));
    }

    scale(scalar) {
        return new Vector(scalar * this.x, scalar * this.y, scalar * this.z);
    }
}

function addTriangleV(v0, v1, v2) {
    addTriangle(v0.x, v0.y, v0.z, v1.x, v1.y, v1.z, v2.x, v2.y, v2.z);
}

function addQuad(v0,v1,v2,v3) {
    addTriangleV(v0, v1, v2);
    addTriangleV(v0, v2, v3);
}

function addParallelogram(v0, v1, v3) {
    // v2 = v1 + v3 - v0
    let v2 = v1.add(v3).subtract(v0);
    addQuad(v0,v1,v2,v3);
}

function makeParallelogram(v0, v1, v3, sub1, sub3) {
    let V1 = v1.subtract(v0).scale(1.0/sub1);
    let V3 = v3.subtract(v0).scale(1.0/sub3);
    for (let i = 0; i < sub1; i++) {
        for (let j = 0; j < sub3; j++) {
            // v0 + i*V1 + j*V3, v0 + (i+1)*V1 + j*V3, v0 + i*V1 + (j+1)*V3
            addParallelogram(
                v0.add(V1.scale(i)).add(V3.scale(j)),
                v0.add(V1.scale(i+1)).add(V3.scale(j)),
                v0.add(V1.scale(i)).add(V3.scale(j+1))
            );
        }
    }
}

//
// fill in code that creates the triangles for a cube with dimensions 1x1x1
// on each side (and the origin in the center of the cube). with an equal
// number of subdivisions along each cube face as given by the parameter
//subdivisions
//
function makeCube(subdivisions) {
    // fill in your code here.
    // delete the code below first.
    let origin = new Vector(0.0,0.0,0.0);
    let i_hat = new Vector(1.0,0.0,0.0);
    let j_hat = new Vector(0.0,1.0,0.0);
    let k_hat = new Vector(0.0,0.0,1.0);
    let v0 = new Vector(-0.5, -0.5, -0.5);

    makeParallelogram(v0.add(origin), v0.add(i_hat), v0.add(j_hat), subdivisions, subdivisions);
    makeParallelogram(v0.add(origin), v0.add(j_hat), v0.add(k_hat), subdivisions, subdivisions);
    makeParallelogram(v0.add(origin), v0.add(k_hat), v0.add(i_hat), subdivisions, subdivisions);

    makeParallelogram(v0.add(origin).add(k_hat), v0.add(j_hat).add(k_hat), v0.add(i_hat).add(k_hat), subdivisions, subdivisions);
    makeParallelogram(v0.add(origin).add(i_hat), v0.add(k_hat).add(i_hat), v0.add(j_hat).add(i_hat), subdivisions, subdivisions);
    makeParallelogram(v0.add(origin).add(j_hat), v0.add(i_hat).add(j_hat), v0.add(k_hat).add(j_hat), subdivisions, subdivisions);
}

function addCircle(center, radius, radialdivision, up) {
    let angles = [...Array(radialdivision).keys()].map(x => x * 2*Math.PI/radialdivision);
    angles.push(0);
    if (!up) {
        angles = angles.reverse();
    }
    let vectors = angles.map(a => new Vector(Math.cos(a), Math.sin(a), center.z/radius).scale(radius));
    for (let i = 0; i < vectors.length - 1; i++) {
        let a = vectors[i];
        let b = vectors[i+1];
        addTriangleV(center, a, b);
    }
    return vectors;
}

//
// fill in code that creates the triangles for a cylinder with diameter 1
// and height of 1 (centered at the origin) with the number of subdivisions
// around the base and top of the cylinder (given by radialdivision) and
// the number of subdivisions along the surface of the cylinder given by
//heightdivision.
//
function makeCylinder(radialdivision, heightdivision) {
    let vectors = addCircle(new Vector(0,0,0.5), 0.5, radialdivision, true);
    addCircle(new Vector(0,0,-0.5), 0.5, radialdivision, false);
    for (let i = 0; i < vectors.length - 1; i++) {
        let a = vectors[i];
        let b = vectors[i+1];
        makeParallelogram(a, a.add(new Vector(0,0,-1)), b, heightdivision, 1);
    }
}


//
// fill in code that creates the triangles for a cone with diameter 1
// and height of 1 (centered at the origin) with the number of
// subdivisions around the base of the cone (given by radialdivision)
// and the number of subdivisions along the surface of the cone
//given by heightdivision.
//
function makeCone(radialdivision, heightdivision) {
    let vectors = addCircle(new Vector(0,0,-0.5), 0.5, radialdivision, false);

    // fill in your code here.
}
    
//
// fill in code that creates the triangles for a sphere with diameter 1
// (centered at the origin) with number of slides (longitude) given by
// slices and the number of stacks (lattitude) given by stacks.
// For this function, you will implement the tessellation method based
// on spherical coordinates as described in the video (as opposed to the
//recursive subdivision method).
//
function makeSphere (slices, stacks) {
    let longs = [...Array(slices).keys()].map(x => x * 2*Math.PI/slices);
    let lats = [...Array(stacks).keys()].map(x => -Math.PI/2 + x*Math.PI/stacks);

    longs.push(0);
    let vLongs = longs.map(a => { return {
        x: Math.cos(a),
        y: Math.sin(a),
    }});

    lats.push(Math.PI/2);
    let vLats = lats.map(a => { return {
        s: Math.cos(a)/2,
        z: Math.sin(a)/2,
    }});

    for (let i = 0; i < vLongs.length - 1; i++) {
        for (let j = 0; j < vLats.length - 1; j++) {
            addQuad(
                new Vector(vLats[j].s*vLongs[i].x, vLats[j].s*vLongs[i].y, vLats[j].z),
                new Vector(vLats[j].s*vLongs[i+1].x, vLats[j].s*vLongs[i+1].y, vLats[j].z),
                new Vector(vLats[j+1].s*vLongs[i+1].x, vLats[j+1].s*vLongs[i+1].y, vLats[j+1].z),
                new Vector(vLats[j+1].s*vLongs[i].x, vLats[j+1].s*vLongs[i].y, vLats[j+1].z)
            );
        }
    }
    // fill in your code here.
}


////////////////////////////////////////////////////////////////////
//
//  Do not edit below this line
//
///////////////////////////////////////////////////////////////////

function radians(degrees)
{
  var pi = Math.PI;
  return degrees * (pi/180);
}

function addTriangle(x0,y0,z0,x1,y1,z1,x2,y2,z2) {
    var nverts = points.length / 4;
    
    // push first vertex
    points.push(x0);  bary.push (1.0);
    points.push(y0);  bary.push (0.0);
    points.push(z0);  bary.push (0.0);
    points.push(1.0);
    indices.push(nverts);
    nverts++;
    
    // push second vertex
    points.push(x1); bary.push (0.0);
    points.push(y1); bary.push (1.0);
    points.push(z1); bary.push (0.0);
    points.push(1.0);
    indices.push(nverts);
    nverts++
    
    // push third vertex
    points.push(x2); bary.push (0.0);
    points.push(y2); bary.push (0.0);
    points.push(z2); bary.push (1.0);
    points.push(1.0);
    indices.push(nverts);
    nverts++;
}
