uniform float uTime;
uniform sampler2D uTexture;

varying vec2 vUv;
varying float vOffsetY;

vec3 rgbShift(sampler2D textureImage, vec2 uv, float offset) {
    float r = texture2D(textureImage, uv + vec2(offset)).r;
    vec2 gb = texture2D(textureImage, uv).gb;\
    
    return vec3(r,gb);
}

void main() {
    vec3 color = rgbShift(uTexture, vUv, vOffsetY);
    // vec4 color = texture2D(uTexture, vUv);
    gl_FragColor = vec4(color, .5);
}