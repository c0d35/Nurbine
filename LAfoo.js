/**
 *
 * just code
 * coder@computer.org
 *
 *
 */

try { WebGLFloatArray; } catch (x) { WebGLFloatArray = Float32Array; }
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

Matrix4x4f.mul = function(a, b)
{

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






