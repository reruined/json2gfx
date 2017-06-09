precision mediump float;

uniform vec4 color;
uniform vec4 lightColor;
uniform vec3 lightPos;
uniform float lightLinearTerm;
uniform float lightQuadraticTerm;
uniform float lightRadius;
uniform float lightCutoff;
uniform float lightIntensity;

varying vec3 surfacePos;
varying vec3 surfaceNormal;

float getAttenuation(float constant, float linear, float quadratic, float dist) {
    return 1.0 / (constant + linear * dist + quadratic * (dist*dist));
}

// https://imdoingitwrong.wordpress.com/2011/01/31/light-attenuation/
float getAttenuation2(float radius, float intensity, float cutoff, float dist) {
    float d = max(dist - radius, 0.0);
    float denom = d/radius + 1.0;
    float attenuation = 0.0;
    attenuation = intensity / (denom*denom);
    attenuation = (attenuation - cutoff) / (1.0 - cutoff);
    attenuation = max(attenuation, 0.0);
    return attenuation;
}

void main() {
    vec3 surfaceToLight = lightPos - surfacePos;
    float dist = length(surfaceToLight);
    float facing = max(dot(normalize(surfaceToLight), normalize(surfaceNormal)), 0.0);

    float attenuation = getAttenuation2(lightRadius, lightIntensity, lightCutoff, dist);
    gl_FragColor = vec4(color.xyz * lightColor.xyz * facing * attenuation, 1);
}
