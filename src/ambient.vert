uniform mat4 projection;
uniform mat4 view;
uniform mat4 world;

attribute vec4 position;

void main() {
    gl_Position = projection * view * world * position;
}
