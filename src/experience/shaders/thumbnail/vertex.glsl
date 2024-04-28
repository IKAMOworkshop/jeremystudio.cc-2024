uniform float uTime;

varying vec2 vUv;

float PI = 3.14159265359;

void main(){
    vec2 newUV = uv;

    vec4 modelPosition = modelMatrix * vec4(position, 1.0);

    // modelPosition.z += sin(PI*uv.x)*1.5;

    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectionPosition = projectionMatrix * viewPosition;

    gl_Position = projectionPosition;

    // newUV *= vec2(.4, .9);
    // newUV += vec2(0.3, .05);

    // newUV.x += modelPosition.x * .06;

    vUv = newUV;
}