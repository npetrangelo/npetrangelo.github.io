class cgIShape {
    constructor () {
        this.points = [];
        this.bary = [];
        this.indices = [];
    }
    
    addTriangle (x0,y0,z0,x1,y1,z1,x2,y2,z2) {
        var nverts = this.points.length / 4;
        
        // push first vertex
        this.points.push(x0);  this.bary.push (1.0);
        this.points.push(y0);  this.bary.push (0.0);
        this.points.push(z0);  this.bary.push (0.0);
        this.points.push(1.0);
        this.indices.push(nverts);
        nverts++;
        
        // push second vertex
        this.points.push(x1); this.bary.push (0.0);
        this.points.push(y1); this.bary.push (1.0);
        this.points.push(z1); this.bary.push (0.0);
        this.points.push(1.0);
        this.indices.push(nverts);
        nverts++
        
        // push third vertex
        this.points.push(x2); this.bary.push (0.0);
        this.points.push(y2); this.bary.push (0.0);
        this.points.push(z2); this.bary.push (1.0);
        this.points.push(1.0);
        this.indices.push(nverts);
        nverts++;
    }

    addTriangleV(v0, v1, v2) {
        this.addTriangle(v0.x, v0.y, v0.z, v1.x, v1.y, v1.z, v2.x, v2.y, v2.z);
    }

    addQuad(v0,v1,v2,v3) {
        this.addTriangleV(v0, v1, v2);
        this.addTriangleV(v0, v2, v3);
    }

    addParallelogram(v0, v1, v3) {
        // v2 = v1 + v3 - v0
        let v2 = v1.add(v3).subtract(v0);
        this.addQuad(v0,v1,v2,v3);
    }

    makeParallelogram(v0, v1, v3, sub1, sub3) {
        let V1 = v1.subtract(v0).scale(1.0/sub1);
        let V3 = v3.subtract(v0).scale(1.0/sub3);
        for (let i = 0; i < sub1; i++) {
            for (let j = 0; j < sub3; j++) {
                // v0 + i*V1 + j*V3, v0 + (i+1)*V1 + j*V3, v0 + i*V1 + (j+1)*V3
                this.addParallelogram(
                    v0.add(V1.scale(i)).add(V3.scale(j)),
                    v0.add(V1.scale(i+1)).add(V3.scale(j)),
                    v0.add(V1.scale(i)).add(V3.scale(j+1))
                );
            }
        }
    }

    addCircle(center, radius, radialdivision, up) {
        let angles = [...Array(radialdivision).keys()].map(x => x * 2*Math.PI/radialdivision);
        angles.push(0);
        if (!up) {
            angles = angles.reverse();
        }
        let vectors = angles.map(a => new Vector(Math.cos(a), Math.sin(a), center.z/radius).scale(radius));
        for (let i = 0; i < vectors.length - 1; i++) {
            let a = vectors[i];
            let b = vectors[i+1];
            this.addTriangleV(center, a, b);
        }
        return vectors;
    }
}

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

class Cube extends cgIShape {
    
    constructor (subdivisions) {
        super();
        this.makeCube (subdivisions);
    }
    
    makeCube (subdivisions) {
        // fill in your cube code here.
        let origin = new Vector(0.0,0.0,0.0);
        let i_hat = new Vector(1.0,0.0,0.0);
        let j_hat = new Vector(0.0,1.0,0.0);
        let k_hat = new Vector(0.0,0.0,1.0);
        let v0 = new Vector(-0.5, -0.5, -0.5);

        this.makeParallelogram(v0.add(origin), v0.add(i_hat), v0.add(j_hat), subdivisions, subdivisions);
        this.makeParallelogram(v0.add(origin), v0.add(j_hat), v0.add(k_hat), subdivisions, subdivisions);
        this.makeParallelogram(v0.add(origin), v0.add(k_hat), v0.add(i_hat), subdivisions, subdivisions);

        this.makeParallelogram(v0.add(origin).add(k_hat), v0.add(j_hat).add(k_hat), v0.add(i_hat).add(k_hat), subdivisions, subdivisions);
        this.makeParallelogram(v0.add(origin).add(i_hat), v0.add(k_hat).add(i_hat), v0.add(j_hat).add(i_hat), subdivisions, subdivisions);
        this.makeParallelogram(v0.add(origin).add(j_hat), v0.add(i_hat).add(j_hat), v0.add(k_hat).add(j_hat), subdivisions, subdivisions);
    }
}


class Cylinder extends cgIShape {

    constructor (radialdivision, heightdivision) {
        super();
        this.makeCylinder (radialdivision,heightdivision);
    }
    
    makeCylinder (radialdivision, heightdivision) {
        // fill in your cylinder code here
        let vectors = this.addCircle(new Vector(0,0,0.5), 0.5, radialdivision, true);
        this.addCircle(new Vector(0,0,-0.5), 0.5, radialdivision, false);
        for (let i = 0; i < vectors.length - 1; i++) {
            let a = vectors[i];
            let b = vectors[i+1];
            this.makeParallelogram(a, a.add(new Vector(0,0,-1)), b, heightdivision, 1);
        }
    }
}

class Cone extends cgIShape {

    constructor (radialdivision, heightdivision) {
        super();
        this.makeCone (radialdivision, heightdivision);
    }
    
    
    makeCone (radialdivision, heightdivision) {
    
        // Fill in your cone code here.
    }
}
    
class Sphere extends cgIShape {

    constructor (slices, stacks) {
        super();
        this.makeSphere (slices, stacks);
    }
    
    makeSphere (slices, stacks) {
        // fill in your sphere code here
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
                this.addQuad(
                    new Vector(vLats[j].s*vLongs[i].x, vLats[j].s*vLongs[i].y, vLats[j].z),
                    new Vector(vLats[j].s*vLongs[i+1].x, vLats[j].s*vLongs[i+1].y, vLats[j].z),
                    new Vector(vLats[j+1].s*vLongs[i+1].x, vLats[j+1].s*vLongs[i+1].y, vLats[j+1].z),
                    new Vector(vLats[j+1].s*vLongs[i].x, vLats[j+1].s*vLongs[i].y, vLats[j+1].z)
                );
            }
        }
    }

}


function radians(degrees) {
  return degrees * (Math.PI/180);
}

