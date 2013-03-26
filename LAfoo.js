/**
 *
 * just code
 * coder@computer.org
 *
 *
 */

try { WebGLFloatArray; } catch (e) { WebGLFloatArray = Float32Array; }
glMatrixArrayType = WebGLFloatArray;
var Vector3Df = {};
var Vector4Df = {};

var Matrix3x3f = {};
var Matrix4x4f = {};

Vector3Df.create = function(vec0)
{
     var vec = new glMatrixArrayType(3);
     if(vec0)
     {
         vec[0] = vec0[0];
         vec[1] = vec0[1];
         vec[2] = vec0[2];

     }else{
         vec[0] = vec[1] = vec[2] = 0.0;
     }
     return vec;
};

Vector4Df.create = function(vec0)
{
     var vec = new glMatrixArrayType(4);
     if(vec0)
     {
         vec[0] = vec0[0];
         vec[1] = vec0[1];
         vec[2] = vec0[2];
         vec[3] = vec0[3];

     }else{
         vec[0] = vec[1] = vec[2] = 0.0; vec[3] = 1.0;
     }
     return vec;
};



Vector3Df.set = function(dst, srcu)
{

    dst[0] = src[0];
    dst[1] = src[1];
    dst[2] = src[2];

    return dst;
};

Vector3Df.add = function(a, b)
{
    a[0] += b[0];
    a[1] += b[1];
    a[2] += b[2];
    return a;
};

Vector3Df.sub = function(a, b)
{
    Vector3Df.add(a, -b);
    return a;
};

Vector3Df.cross = function(a, b)
{
    var t = Vector3Df.create(a);

    a[0] = t[1] * b[2] - b[1] * t[2];
    a[1] = t[2] * b[0] - b[2] * t[0];
    a[2] = t[0] * b[1] - b[0] * t[1];

    return a;
};

Vector3Df.dot = function(a, b)
{
    var s = a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
    return s;
};

Vector3Df.normalize = function(a)
{
    var s = Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2]);
    if(s > 0.0)
    {
        s = 1.0/s; a[0] *= s; a[1] *= s; a[2] *=s;
    }else{
        a[0] = a[1] = 0.0; a[2] = 1.0;
    }

    return a;
};

Vector3Df.length = function(a)
{
    var s = Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2]);
    return s;
};

Vector3Df.lengthSqr = function(a)
{
    var s = a[0] * a[0] + a[1] * a[1] + a[2] * a[2];
    return s;

};

Vector3Df.getVector4Df = function(a)
{
    var t = Vector4Df.create();

    t[0] = a[0]; t[1] = a[1]; t[2] = a[2]; t[3] = 1.0;
    return t;
};


Matrix3x3f.create = function(mat0)
{
     var mat = new glMatrixArrayType(3 * 3);
     if(mat0)
     {
         for(var i = 0; i < 3 * 3; i++)
         {
             mat[i] = mat0[i];
         }

     }else{
         for(var i = 0; i < 3 * 3; i++)
         {
             mat[i] = 0.0;
         }
     }
     return mat;
};

Matrix4x4f.create = function(mat0)
{
     var mat = new glMatrixArrayType(4 * 4);
     if(mat0)
     {
         for(var i = 0; i < 4 * 4; i++)
         {
             mat[i] = mat0[i];
         }

     }else{
         for(var i = 0; i < 4 * 4; i++)
         {
             mat[i] = 0.0;
         }
     }
     return mat;
};


Matrix3x3f.set = function(a, b)
{   
    for(var i = 0; i < 3 * 3; i++)
    {
        a[i] = b[i];
    }

    return a;
}

Matrix4x4f.set = function(a, b)
{   
    for(var i = 0; i < 4 * 4; i++)
    {
        a[i] = b[i];
    }

    return a;
}

Matrix3x3f.add = function(a, b)
{
    return a;
};

Matrix3x3f.sub = function(a, b)
{
    return a;
};

Matrix3x3f.mul = function(a, b)
{

    return a;
};

Matrix3x3f.idx = function(i, j)
{
    var id = 3 * i + j;
    return id;
};

Matrix3x3f.identity = function(a)
{
    idx = Matrix3x3f.idx;
    a[idx(0, 0)] = a[idx(1, 1)] = a[idx(2, 2)] = 1.0;
    return a;
};

Matrix3x3f.transpose = function(a)
{
    idx = Matrix3x3f.idx;
    var s;
    s = a[idx(0, 2)]; a[idx(0, 2)] = a[idx(2, 0)]; a[idx(2, 0)] = s;
    s = a[idx(0, 1)]; a[idx(0, 1)] = a[idx(1, 0)]; a[idx(1, 0)] = s;
    s = a[idx(1, 2)]; a[idx(1, 2)] = a[idx(2, 1)]; a[idx(2, 1)] = s;
    return a;
};

Matrix3x3f.determinant = function(a)
{
    idx = Matrix3x3f.idx;
    var s = a[idx(0, 0)] * (a[idx(1, 1)] * a[idx(2, 2)] - a[idx(2, 1)] * a[idx(1, 2)]) +
            a[idx(1, 0)] * (a[idx(2, 1)] * a[idx(0, 2)] - a[idx(0, 1)] * a[idx(2, 2)]) +
            a[idx(2, 0)] * (a[idx(0, 1)] * a[idx(1, 2)] - a[idx(1, 1)] * a[idx(0, 2)]);
    return s;
};

Matrix3x3f.det = function(a)
{
    idx = Matrix3x3f.idx;
    var s = a[idx(0,0)] * a[idx(1, 1)] * a[idx(2, 2)] +
            a[idx(0,1)] * a[idx(1, 2)] * a[idx(2, 0)] +
            a[idx(0,2)] * a[idx(1, 0)] * a[idx(2, 1)] -
        (   a[idx(2,0)] * a[idx(1, 1)] * a[idx(0, 2)] +
            a[idx(2,1)] * a[idx(1, 2)] * a[idx(0, 0)] +
            a[idx(2,2)] * a[idx(1, 0)] * a[idx(0, 1)]   );
    return s;

}

Matrix3x3f.string = function(a)
{
    idx = Matrix3x3f.idx;
    return "[(" +
            a[idx(0, 0)] + ", " + a[idx(0, 1)] + ", " + a[idx(0, 2)] + "), \n  " +
            a[idx(1, 0)] + ", " + a[idx(1, 1)] + ", " + a[idx(1, 2)] + "), \n  " +
            a[idx(2, 0)] + ", " + a[idx(2, 1)] + ", " + a[idx(2, 2)] + ")] \n";
};

Matrix3x3f.string_octave = function(a)
{
    idx = Matrix3x3f.idx;
    return "[" +
            a[idx(0, 0)] + "," + a[idx(0, 1)] + "," + a[idx(0, 2)] + ";" +
            a[idx(1, 0)] + "," + a[idx(1, 1)] + "," + a[idx(1, 2)] + ";" +
            a[idx(2, 0)] + "," + a[idx(2, 1)] + "," + a[idx(2, 2)] + "]";
};

Matrix4x4f.idx = function(i, j)
{
    var id = 4 * i + j;
    return id;
};

Matrix4x4f.set = function(a, b)
{
    for(var i = 0; i < 16; i++)
    {
        a[i] = b[i];
    }
    return a;
};
Matrix3x3f.getMatrix4x4f = function(a)
{ 
    idx3 = Matrix3x3f.idx;
    idx4 = Matrix4x4f.idx;
    var t = Matrix4x4f.create();
    t[idx4(0, 0)] = a[idx3(0, 0)]; t[idx4(0, 1)] = a[idx3(0, 1)]; t[idx4(0, 2)] = a[idx3(0, 2)]; t[idx4(0, 3)] = 0;
    t[idx4(1, 0)] = a[idx3(1, 0)]; t[idx4(1, 1)] = a[idx3(1, 1)]; t[idx4(1, 2)] = a[idx3(1, 2)]; t[idx4(1, 3)] = 0;
    t[idx4(2, 0)] = a[idx3(2, 0)]; t[idx4(2, 1)] = a[idx3(2, 1)]; t[idx4(2, 2)] = a[idx3(2, 2)]; t[idx4(2, 3)] = 0;
    t[idx4(3, 0)] = 0; t[idx4(3, 1)] = 0; t[idx4(3, 2)] = 0; t[idx4(3, 3)] = 1;
    return t;
};

Matrix4x4f.add = function(a, b)
{
    return a;
};

Matrix4x4f.sub = function(a, b)
{
    return a;
};

Matrix4x4f.setEuler = function(mat, a, b, c)
{

    a *= 3.14159265359/180.0;
    b *= 3.14159265359/180.0;
    c *= 3.14159265359/180.0;

    ca = Math.cos(a); sa = Math.sin(a);
    cb = Math.cos(b); sb = Math.sin(b);
    cc = Math.cos(c); sc = Math.sin(c);
    mat[0]= ca*cb;
    mat[4]= sa*cb;
    mat[8]=-sb;

    mat[1]=-sa*cc+ca*sc*sb;
    mat[5]= ca*cc+sa*sc*sb;
    mat[9]= cb*sc;

    mat[2]= sa*sc+ca*cc*sb;
    mat[6]=-ca*sc+sa*cc*sb;
    mat[10]= cb*cc;

    mat[3]= 0.0;
    mat[7]= 0.0;
    mat[11]= 0.0;

    mat[12]= 0.0; //z
    mat[13]= 0.0; //y
    mat[14]= 0.0; //x

    mat[15]= 1.0;

    return mat;

};

Matrix4x4f.mul = function(a, b)
{
    idx = Matrix4x4f.idx;

    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
    var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
    var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
    var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

    var b00 = b[0], b01 = b[1], b02 = b[2], b03 = b[3];
    var b10 = b[4], b11 = b[5], b12 = b[6], b13 = b[7];
    var b20 = b[8], b21 = b[9], b22 = b[10], b23 = b[11];
    var b30 = b[12], b31 = b[13], b32 = b[14], b33 = b[15];

    a[0] = b00*a00 + b01*a10 + b02*a20 + b03*a30;
    a[1] = b00*a01 + b01*a11 + b02*a21 + b03*a31;
    a[2] = b00*a02 + b01*a12 + b02*a22 + b03*a32;
    a[3] = b00*a03 + b01*a13 + b02*a23 + b03*a33;
    a[4] = b10*a00 + b11*a10 + b12*a20 + b13*a30;
    a[5] = b10*a01 + b11*a11 + b12*a21 + b13*a31;
    a[6] = b10*a02 + b11*a12 + b12*a22 + b13*a32;
    a[7] = b10*a03 + b11*a13 + b12*a23 + b13*a33;
    a[8] = b20*a00 + b21*a10 + b22*a20 + b23*a30;
    a[9] = b20*a01 + b21*a11 + b22*a21 + b23*a31;
    a[10] = b20*a02 + b21*a12 + b22*a22 + b23*a32;
    a[11] = b20*a03 + b21*a13 + b22*a23 + b23*a33;
    a[12] = b30*a00 + b31*a10 + b32*a20 + b33*a30;
    a[13] = b30*a01 + b31*a11 + b32*a21 + b33*a31;
    a[14] = b30*a02 + b31*a12 + b32*a22 + b33*a32;
    a[15] = b30*a03 + b31*a13 + b32*a23 + b33*a33;


    return a;
};


Matrix4x4f.identity = function(a)
{
    idx = Matrix4x4f.idx;
    a[idx(0, 0)] = a[idx(1, 1)] = a[idx(2, 2)] = 1.0;
    return a;
};

Matrix4x4f.transpose = function(a)
{
    idx = Matrix4x4f.idx;
    var s;
    s = a[idx(0, 2)]; a[idx(0, 2)] = a[idx(2, 0)]; a[idx(2, 0)] = s;
    s = a[idx(0, 1)]; a[idx(0, 1)] = a[idx(1, 0)]; a[idx(1, 0)] = s;
    s = a[idx(1, 2)]; a[idx(1, 2)] = a[idx(2, 1)]; a[idx(2, 1)] = s;
    s = a[idx(0, 3)]; a[idx(0, 3)] = a[idx(3, 0)]; a[idx(3, 0)] = s;
    s = a[idx(1, 3)]; a[idx(1, 3)] = a[idx(3, 1)]; a[idx(3, 1)] = s;
    s = a[idx(2, 3)]; a[idx(2, 3)] = a[idx(3, 2)]; a[idx(3, 2)] = s;

    return a;
};

Matrix4x4f.determinant = function(a)
{
    idx = Matrix4x4f.idx;
    var s =  a[idx(2, 0)] * (a[idx(0, 1)] * (a[idx(1, 2)] * a[idx(3, 3)] - a[idx(3, 2)] * a[idx(1, 3)]) +
                             a[idx(1, 1)] * (a[idx(3, 2)] * a[idx(0, 3)] - a[idx(0, 2)] * a[idx(3, 3)]) +
                             a[idx(3, 1)] * (a[idx(0, 2)] * a[idx(1, 3)] - a[idx(1, 2)] * a[idx(0, 3)]))  -
             a[idx(2, 1)] * (a[idx(0, 0)] * (a[idx(1, 2)] * a[idx(3, 3)] - a[idx(3, 2)] * a[idx(1, 3)]) +
                             a[idx(1, 0)] * (a[idx(3, 2)] * a[idx(0, 3)] - a[idx(0, 2)] * a[idx(3, 3)]) +
                             a[idx(3, 0)] * (a[idx(0, 2)] * a[idx(1, 3)] - a[idx(1, 2)] * a[idx(3, 0)]))  +
             a[idx(2, 2)] * (a[idx(0, 0)] * (a[idx(1, 1)] * a[idx(3, 3)] - a[idx(3, 1)] * a[idx(1, 3)]) +
                             a[idx(1, 0)] * (a[idx(3, 1)] * a[idx(0, 3)] - a[idx(0, 1)] * a[idx(3, 3)]) +
                             a[idx(3, 0)] * (a[idx(0, 1)] * a[idx(1, 3)] - a[idx(1, 1)] * a[idx(3, 0)]))  -
             a[idx(2, 3)] * (a[idx(0, 0)] * (a[idx(1, 1)] * a[idx(3, 2)] - a[idx(3, 1)] * a[idx(1, 2)]) +
                             a[idx(1, 0)] * (a[idx(3, 1)] * a[idx(0, 2)] - a[idx(0, 1)] * a[idx(3, 2)]) +
                             a[idx(3, 0)] * (a[idx(0, 1)] * a[idx(1, 2)] - a[idx(1, 1)] * a[idx(0, 2)]));  
    return s;
};

Matrix4x4f.string = function(a)
{
    idx = Matrix4x4f.idx;
    return "[(" +
            a[idx(0, 0)] + ", " + a[idx(0, 1)] + ", " + a[idx(0, 2)] + ", " + a[idx(0, 3)] + "), \n  " +
            a[idx(1, 0)] + ", " + a[idx(1, 1)] + ", " + a[idx(1, 2)] + ", " + a[idx(1, 3)] + "), \n  " +
            a[idx(2, 0)] + ", " + a[idx(2, 1)] + ", " + a[idx(2, 2)] + ", " + a[idx(2, 3)] + "), \n  " +
            a[idx(3, 0)] + ", " + a[idx(3, 1)] + ", " + a[idx(3, 2)] + ", " + a[idx(3, 3)] + "), \n  " +
            ")] \n";

};






