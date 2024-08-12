#include <clipping_planes_pars_fragment>

uniform vec2 resolution;

void main() {
  #include <clipping_planes_fragment>

  gl_FragColor = vec4(gl_FragCoord.x / resolution.x, gl_FragCoord.y / resolution.y, 0.0, 1.0);
}