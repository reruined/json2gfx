precision mediump float;

uniform vec4 color;
uniform vec4 lightColor;
uniform vec3 lightPos;

varying vec3 surfacePos;
varying vec3 surfaceNormal;

void main() {
    vec3 surfaceToLight = lightPos - surfacePos;
    float facing = clamp(dot(normalize(surfaceToLight), normalize(surfaceNormal)), 0.0, 1.0);
    float attenuation = 1.0 - length(surfaceToLight);
    gl_FragColor = vec4(color.xyz * lightColor.xyz * facing * attenuation, 1);
}
