precision mediump float;

uniform vec4 albedo;
uniform vec4 lightColor;
uniform vec3 lightDirection;
uniform float lightIntensity;
uniform sampler2D albedoSampler;
uniform float uvScale;

varying vec2 surfaceUv;
varying vec3 surfaceNormal;

void main() {
    vec3 surfaceColor = albedo.xyz + texture2D(albedoSampler, surfaceUv * uvScale).xyz;
    float facing = max(dot(normalize(-lightDirection), normalize(surfaceNormal)), 0.0);
    gl_FragColor = vec4(surfaceColor * lightColor.rgb * facing * lightIntensity, 1);
}
