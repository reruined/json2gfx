precision mediump float;

uniform sampler2D layerTexture;
varying vec3 localPosition;

void main() {
    const float offset = 1.5;
    const float amp = 0.01;
    const float freq = 10.0;
    float u = ((localPosition.y + 1.0) / 2.0) + sin((localPosition.x + localPosition.z) * freq + offset) * amp;
    vec3 color = texture2D(layerTexture, vec2(1.0 - u, 0.5)).rgb * 0.5;

    gl_FragColor = vec4(color, 1.0);
}

