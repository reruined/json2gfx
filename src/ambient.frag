precision mediump float;

uniform vec4 albedo;
uniform vec4 ambient;

void main() {
    gl_FragColor = vec4(albedo.xyz * 0.3, 1);
}
