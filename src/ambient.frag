precision mediump float;

uniform vec4 color;

void main() {
    gl_FragColor = vec4(color.xyz * 0.3, color.a);
}
