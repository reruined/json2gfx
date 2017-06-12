precision mediump float;

uniform vec4 color;
uniform vec4 lightColor;
uniform vec3 lightDirection;

varying vec3 surfaceNormal;

void main() {
    vec3 surfaceColor = color.xyz;
    float facing = max(dot(normalize(-lightDirection), normalize(surfaceNormal)), 0.0);
    gl_FragColor = vec4(surfaceColor * lightColor.rgb * facing, 1);
}
