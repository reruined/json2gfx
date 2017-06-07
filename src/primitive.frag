precision mediump float;

uniform vec4 color;
uniform vec3 lightPos;
varying vec3 worldPos;

void main() {
    float falloff = length(lightPos - worldPos);
    gl_FragColor = color * (1.0 - falloff);
    gl_FragColor.a = 1.0;
}
