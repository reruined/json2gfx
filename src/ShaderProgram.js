export default {
    compile
}

function compile(gl, ...shaders) {
    console.assert(gl instanceof WebGLRenderingContext);

    const program = gl.createProgram();
    shaders.forEach(shader => {
        gl.attachShader(program, shader);
    });
    gl.linkProgram(program);

    if(!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.warn('Failed to load shader program "%s": %s',
            name, gl.getProgramInfoLog(program));
        return null;
    }

    program.attributes = {};
    program.attributes.vertexPosition = gl.getAttribLocation(program, 'aVertexPosition');

    program.uniforms = {};
    program.uniforms.world = gl.getUniformLocation(program, 'uWorld');
    program.uniforms.view = gl.getUniformLocation(program, 'uView');
    program.uniforms.projection = gl.getUniformLocation(program, 'uProjection');
    program.uniforms.color = gl.getUniformLocation(program, 'uColor');

    console.log(`ShaderProgram.compile() succeeded`);

    return program;
}

/*
const ShaderProgram = Object.freeze({
    destroy: function () {
        console.assert(this.isValid());
        this.gl.deleteProgram(this.glProgram);
        this.glProgram = null;
    },

    isValid: function () {
        if(!this.glProgram) {
            return false;
        }

        return this.gl.isProgram(this.glProgram);
    }
});


export default function (gl) {
    console.assert(gl instanceof WebGLRenderingContext);

    return {
        create,
    };

    function create(...shaders) {
        const instance = Object.assign(Object.create(ShaderProgram), {
            gl,
            glProgram: compileProgram(shaders)
        });
        return instance;
    }

    function compileProgram([vs, fs]) {
        const program = gl.createProgram();
        vs = vs.glShader;
        fs = fs.glShader;
        gl.attachShader(program, vs);
        gl.attachShader(program, fs);
        gl.linkProgram(program);

        if(!gl.getProgramParameter(program, gl.LINK_STATUS)) {
            console.warn('Failed to load shader program "%s": %s',
                name, gl.getProgramInfoLog(program));
            return null;
        }

        program.attributes = {};
        program.attributes.vertexPosition = gl.getAttribLocation(program, 'aVertexPosition');

        program.uniforms = {};
        program.uniforms.world = gl.getUniformLocation(program, 'uWorld');
        program.uniforms.view = gl.getUniformLocation(program, 'uView');
        program.uniforms.projection = gl.getUniformLocation(program, 'uProjection');

        return program;
    }
}
*/
