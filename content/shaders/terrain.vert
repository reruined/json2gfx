uniform mat4 projection;
uniform mat4 view;
uniform mat4 world;
uniform float totalTime;

attribute vec4 position;
attribute vec3 normal;
attribute vec2 uv;

varying vec3 localPosition;

void main() {
    localPosition = position.xyz;
    gl_Position = projection * view * world * vec4(localPosition, position.w);
}
