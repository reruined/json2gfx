uniform mat4 projection;
uniform mat4 view;
uniform mat4 world;

attribute vec4 position;
attribute vec3 normal;

varying vec3 localPosition;
varying vec3 worldNormal;

void main() {
    localPosition = position.xyz;
    worldNormal = mat3(world) * normal;
    gl_Position = projection * view * world * vec4(localPosition, position.w);
}
