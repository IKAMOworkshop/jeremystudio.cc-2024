uniform sampler2D uTexture;
uniform vec2 uTextureSize;
uniform vec2 uPlaneSize;

varying vec2 vUv;

vec2 getUv(vec2 uv, vec2 textureSize, vec2 planeSize){
    vec2 tempUv = uv - vec2(.5);

    float planeAspect = planeSize.x / planeSize.y;
    float textureAspect = textureSize.x / textureSize.y;
    if(planeAspect < textureAspect){
        tempUv = tempUv * vec2(planeAspect / textureAspect, 1.);
    }else{
        tempUv = tempUv * vec2(1, textureAspect / planeAspect);
    }

    tempUv += .5;

    return tempUv;
}

void main(){
    vec2 newUv = getUv(vUv, uTextureSize, uPlaneSize);
    vec4 color = texture2D(uTexture, newUv);
    color.a = .5;
    gl_FragColor = color;
}