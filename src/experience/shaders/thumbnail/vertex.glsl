uniform float uTime;
uniform float uOffsetY;

varying vec2 vUv;
varying float vOffsetY;

float PI = 3.14159265359;

void main(){
    vec2 newUV = uv;

    vec4 modelPosition = modelMatrix * vec4(position, 1.0);

    // Bend the plane
    modelPosition.z -= sin(PI*uv.x)*1.5;


    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectionPosition = projectionMatrix * viewPosition;
    gl_Position = projectionPosition;

    // Parallax on the thumbnails
    newUV *= vec2(.5, .9);
    newUV += vec2(0.2, 0.0);
    newUV.x += modelPosition.x * .09;
    newUV.y += modelPosition.y * .09;

    vUv = newUV;
    vOffsetY = uOffsetY;
}