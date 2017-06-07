uniform mat4 projection;
uniform mat4 view;
uniform mat4 world;

attribute vec4 position;
varying vec3 worldPos;

void main() {
    worldPos = (world * vec4(position)).xyz;
    gl_Position = projection * view * world * position;
}
