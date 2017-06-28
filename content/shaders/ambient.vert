uniform mat4 projection;
uniform mat4 view;
uniform mat4 world;

attribute vec4 position;
attribute vec2 uv;

varying vec2 surfaceUv;

void main() {
    surfaceUv = uv;
    gl_Position = projection * view * world * position;
}
