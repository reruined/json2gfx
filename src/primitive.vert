uniform mat4 projection;
uniform mat4 view;
uniform mat4 world;

attribute vec4 position;
attribute vec4 color;

varying vec4 vColor;

void main() {
    vColor = color;
    gl_Position = projection * view * world * position;
}
