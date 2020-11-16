console.log("Hello Hand-In 1 World!");
AFRAME.registerShader('water-caustics', {
    schema: {
      waterColor: {type: 'color', is: 'uniform', default: '#0f6fff'},
      causticColor: {type: 'color', is: 'uniform', default: '#f2feff'},
      opacity: {type: 'number', is: 'uniform', default: 0.5},
      time: {type: 'time', is: 'uniform' },
      causticTexture: { type: 'map', is: 'uniform', default: '#oWater_CST' }
    },
    raw: true,
    vertexShader:`
      precision mediump float;
      precision mediump int;
  
      attribute vec2 uv;
      attribute vec3 position;
  
      uniform mat4 modelViewMatrix;
      uniform mat4 projectionMatrix;
  
      varying vec2 vUV;
  
      void main()	{
          vUV = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,
    fragmentShader: `
      precision mediump float;
      precision mediump int;
  
      uniform float time;
      uniform sampler2D causticTexture;
  
      varying vec2 vUV;
  
      // ##### Attributes #####
      // This receives the waterColor and causticColor value from the schema, which becomes a vec3 in the shader.
      uniform vec3 waterColor;
      uniform vec3 causticColor;
    
      // This receives the opacity value from the schema, which becomes a number.
      uniform float opacity;
    
      // ##### Settings #####
      vec2 scrollVelocity1 = vec2(0.00127, -0.000078);
      vec2 scrollVelocity2 = vec2(-0.000181, 0.0081);
      float timeMultiplier = 0.01;
      float textureTiling = 15.0;
  
      void main()	{
        vec2 vUv1 = vUV * textureTiling + scrollVelocity1 * time * timeMultiplier;
        vec2 vUv2 = vUV * textureTiling + scrollVelocity2 * time * timeMultiplier;
    
        float causticValue1 = texture2D(causticTexture, vUv1).r;
        float causticValue2 = texture2D(causticTexture, vUv2).r;
        float alpha = min(causticValue1, causticValue2);
        alpha = alpha * alpha;
    
        vec4 v4waterColor   = vec4(waterColor, opacity);
        vec4 v4causticColor = vec4(causticColor, opacity);
          gl_FragColor = mix(v4waterColor, v4causticColor, alpha);
      }`
  });