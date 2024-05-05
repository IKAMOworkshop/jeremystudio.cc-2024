uniform float uTime;
uniform sampler2D uTexture;
uniform vec2 uTextureSize;
uniform vec2 uPlaneSize;

varying vec2 vUv;
varying float vOffsetY;

vec2 getUv(vec2 uv, vec2 textureSize, vec2 planeSize){
    vec2 tempUv = uv - vec2(.5);

    float planeAspect = uPlaneSize.x / uPlaneSize.y;
    float textureAspect = uTextureSize.x / uTextureSize.y;
    if(planeAspect < textureAspect){
        tempUv = tempUv * vec2(planeAspect / textureAspect, 1.) * .5;
    }else{
        tempUv = tempUv * vec2(1, textureAspect / planeAspect) * .5;
    }

    tempUv += .5;

    return tempUv;
}

void main() {
    vec2 newUv = getUv(vUv, uTextureSize, uPlaneSize);

    vec4 color = texture2D(uTexture, newUv);

    gl_FragColor = color;
}