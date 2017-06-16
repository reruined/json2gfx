export default {
    compile,
    destroy
};

function compile(gl, type, source) {
    const glShader = gl.createShader(type);
    gl.shaderSource(glShader, source);
    gl.compileShader(glShader);

    if(!gl.getShaderParameter(glShader, gl.COMPILE_STATUS)) {
        const info = gl.getShaderInfoLog(glShader);
        gl.deleteShader(glShader);
        throw new Error(`Failed to compile shader:\n${info}`);
    }

    console.log(`Shader.compile(${type}, ...) succeeded`);
    return glShader;
}

function destroy(gl, shader) {
    if(!gl.isShader(shader)) {
        throw new TypeError(`Attempted to destroy non-shader object '${shader}'`);
    }

    gl.deleteShader(shader);
    return null;
}
