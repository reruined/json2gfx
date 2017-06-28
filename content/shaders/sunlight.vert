uniform mat4 projection;
uniform mat4 view;
uniform mat4 world;

attribute vec4 position;
attribute vec3 normal;
attribute vec2 uv;

varying vec3 surfaceNormal;
varying vec2 surfaceUv;

void main() {
    surfaceUv = uv;
    surfaceNormal = mat3(world) * normal;
    gl_Position = projection * view * world * position;
}
