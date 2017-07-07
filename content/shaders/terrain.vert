#define M_PI 3.1415926535897932384626433832795
uniform mat4 projection;
uniform mat4 view;
uniform mat4 world;
uniform float totalTime;

attribute vec4 position;
attribute vec2 uv;

varying vec3 localPosition;

void main() {
    localPosition = position.xyz;
    localPosition.y *= sin(((clamp(localPosition.x, -1.0, 1.0) + 1.0) / 2.0) * M_PI);
    localPosition.y *= sin(((clamp(localPosition.z, -1.0, 1.0) + 1.0) / 2.0) * M_PI);
    localPosition.y = 1.0 - localPosition.y;
    gl_Position = projection * view * world * vec4(localPosition, position.w);
}
