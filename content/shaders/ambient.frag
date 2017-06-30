precision mediump float;

uniform vec4 albedo;
uniform vec4 ambient;
// uniform sampler2D albedoSampler;
// uniform float uvScale;

varying vec2 surfaceUv;

void main() {
    // gl_FragColor = vec4((albedo.xyz + texture2D(albedoSampler, surfaceUv * uvScale).xyz) * 0.7, 1);
    gl_FragColor = vec4(albedo.xyz * 0.2, 1);
}
