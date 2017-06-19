precision mediump float;

uniform sampler2D sampler;
varying vec2 surfaceUv;

void main() {
    // gl_FragColor = texture2D(sampler, surfaceUv);
    gl_FragColor = vec4(surfaceUv.x, surfaceUv.y, 0, 1);
}
