precision mediump float;

uniform vec4 albedo;
uniform vec4 lightColor;
uniform vec3 lightDirection;
uniform float lightIntensity;

varying vec3 surfaceNormal;

void main() {
    vec3 surfaceColor = albedo.xyz;
    float facing = max(dot(normalize(-lightDirection), normalize(surfaceNormal)), 0.0);
    gl_FragColor = vec4(surfaceColor * lightColor.rgb * facing * lightIntensity, 1);
}
