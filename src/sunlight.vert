uniform mat4 projection;
uniform mat4 view;
uniform mat4 world;

attribute vec4 position;
attribute vec3 normal;

varying vec3 surfaceNormal;

void main() {
    surfaceNormal = mat3(world) * normal;
    gl_Position = projection * view * world * position;
}
