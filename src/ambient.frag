precision mediump float;

uniform vec4 albedo;
uniform vec4 ambient;
uniform sampler2D albedoSampler;

varying vec2 surfaceUv;

void main() {
    gl_FragColor = vec4((albedo.xyz + texture2D(albedoSampler, surfaceUv).xyz) * 0.7, 1);
}
