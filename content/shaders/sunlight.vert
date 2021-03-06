uniform mat4 projection;
uniform mat4 view;
uniform mat4 world;
uniform float totalTime;

attribute vec4 position;
attribute vec3 normal;

varying vec3 surfaceNormal;

void main() {
    surfaceNormal = mat3(world) * normal;

    vec4 worldPos = world * position;
    float amplitude = (sin(-worldPos.x / 16.0 + (totalTime/1000.0)) + 1.0) / 2.0;
    float sway = sin(totalTime/1000.0) * position.y * amplitude;
    vec4 surfacePosition = worldPos + vec4(sway, 0, 0, 0);
    gl_Position = projection * view * surfacePosition;
}
