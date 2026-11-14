/* ══════════════════════════════════════════
   MBCraft — 3D (Three.js) & cinématique (GSAP)
   ══════════════════════════════════════════ */
(function () {
  const root = document.documentElement;
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const isMobile = () => matchMedia('(max-width: 900px)').matches;
  const hasGSAP = !!(window.gsap && window.ScrollTrigger);

  if (!hasGSAP) {
    root.classList.remove('cine', 'cine-loading');
    return;
  }
  gsap.registerPlugin(ScrollTrigger);

  /* ── ÉTAT PARTAGÉ DE LA SCÈNE 3D ── */
  const state = { x: 1.8, y: 0, scale: 1, opacity: 1, morph: 1, intro: reduceMotion ? 1 : 0, camZ: reduceMotion ? 6 : 11, dive: 0, travel: 0 };
  const pointer = { x: 0, y: 0, tx: 0, ty: 0 };

  /* ══════════ SCÈNE THREE.JS ══════════ */
  let scene3d = null;
  if (window.THREE) {
    try { scene3d = initScene(); } catch (e) { console.warn('3D désactivée :', e); }
  }

  function initScene() {
    const canvas = document.createElement('canvas');
    canvas.id = 'scene3d';
    document.body.prepend(canvas);

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
    const dpr = Math.min(window.devicePixelRatio || 1, 1.75);
    renderer.setPixelRatio(dpr);
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = state.camZ;

    const group = new THREE.Group();
    scene.add(group);

    const noiseGLSL = `
      vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}
      vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}
      vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}
      vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
      float snoise(vec3 v){
        const vec2 C=vec2(1.0/6.0,1.0/3.0);
        const vec4 D=vec4(0.0,0.5,1.0,2.0);
        vec3 i=floor(v+dot(v,C.yyy));
        vec3 x0=v-i+dot(i,C.xxx);
        vec3 g=step(x0.yzx,x0.xyz);
        vec3 l=1.0-g;
        vec3 i1=min(g.xyz,l.zxy);
        vec3 i2=max(g.xyz,l.zxy);
        vec3 x1=x0-i1+C.xxx;
        vec3 x2=x0-i2+C.yyy;
        vec3 x3=x0-D.yyy;
        i=mod289(i);
        vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));
        float n_=0.142857142857;
        vec3 ns=n_*D.wyz-D.xzx;
        vec4 j=p-49.0*floor(p*ns.z*ns.z);
        vec4 x_=floor(j*ns.z);
        vec4 y_=floor(j-7.0*x_);
        vec4 x=x_*ns.x+ns.yyyy;
        vec4 y=y_*ns.x+ns.yyyy;
        vec4 h=1.0-abs(x)-abs(y);
        vec4 b0=vec4(x.xy,y.xy);
        vec4 b1=vec4(x.zw,y.zw);
        vec4 s0=floor(b0)*2.0+1.0;
        vec4 s1=floor(b1)*2.0+1.0;
        vec4 sh=-step(h,vec4(0.0));
        vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;
        vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
        vec3 p0=vec3(a0.xy,h.x);
        vec3 p1=vec3(a0.zw,h.y);
        vec3 p2=vec3(a1.xy,h.z);
        vec3 p3=vec3(a1.zw,h.w);
        vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
        p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
        vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);
        m=m*m;
        return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
      }`;

    const makeMaterial = (morphAmount, size) => new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      uniforms: {
        uTime:    { value: 0 },
        uMorph:   { value: morphAmount },
        uIntro:   { value: state.intro },
        uOpacity: { value: 1 },
        uSize:    { value: size * dpr },
        uColorA:  { value: new THREE.Color('#c9a84c') },
        uColorB:  { value: new THREE.Color('#f5e3b0') },
      },
      vertexShader: `
        uniform float uTime, uMorph, uIntro, uSize;
        attribute float aRand;
        varying float vGlow;
        ${noiseGLSL}
        void main(){
          vec3 p = position;
          float n  = snoise(p * 0.9 + uTime * 0.22);
          float n2 = snoise(p * 2.6 - uTime * 0.35) * 0.12;
          vec3 shaped = p * (1.0 + (n * 0.22 + n2) * uMorph);
          vec3 scattered = p * (3.5 + aRand * 5.0);
          vec3 finalPos = mix(scattered, shaped, smoothstep(0.0, 1.0, uIntro));
          vec4 mv = modelViewMatrix * vec4(finalPos, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = uSize * (0.45 + aRand) / -mv.z;
          vGlow = 0.3 + 0.7 * smoothstep(-0.4, 0.7, n);
        }`,
      fragmentShader: `
        uniform float uOpacity;
        uniform vec3 uColorA, uColorB;
        varying float vGlow;
        void main(){
          float d = length(gl_PointCoord - 0.5);
          if (d > 0.5) discard;
          float a = smoothstep(0.5, 0.0, d);
          gl_FragColor = vec4(mix(uColorA, uColorB, vGlow), a * vGlow * uOpacity * 0.9);
        }`,
    });

    const mobile = isMobile();

    // Sphère de particules (répartition de Fibonacci)
    const N = mobile ? 3500 : 8000;
    const pos = new Float32Array(N * 3);
    const rnd = new Float32Array(N);
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < N; i++) {
      const y = 1 - (i / (N - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const t = golden * i;
      const R = 1.6;
      pos[i * 3]     = Math.cos(t) * r * R;
      pos[i * 3 + 1] = y * R;
      pos[i * 3 + 2] = Math.sin(t) * r * R;
      rnd[i] = Math.random();
    }
    const sphereGeo = new THREE.BufferGeometry();
    sphereGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    sphereGeo.setAttribute('aRand', new THREE.BufferAttribute(rnd, 1));
    const sphereMat = makeMaterial(1, 22);
    group.add(new THREE.Points(sphereGeo, sphereMat));

    // Anneau orbital
    const RN = mobile ? 1200 : 2600;
    const rpos = new Float32Array(RN * 3);
    const rrnd = new Float32Array(RN);
    for (let i = 0; i < RN; i++) {
      const a = Math.random() * Math.PI * 2;
      const rad = 2.3 + Math.pow(Math.random(), 1.6) * 0.9;
      rpos[i * 3]     = Math.cos(a) * rad;
      rpos[i * 3 + 1] = (Math.random() - 0.5) * 0.06;
      rpos[i * 3 + 2] = Math.sin(a) * rad;
      rrnd[i] = Math.random() * 0.7;
    }
    const ringGeo = new THREE.BufferGeometry();
    ringGeo.setAttribute('position', new THREE.BufferAttribute(rpos, 3));
    ringGeo.setAttribute('aRand', new THREE.BufferAttribute(rrnd, 1));
    const ringMat = makeMaterial(0.12, 16);
    const ring = new THREE.Points(ringGeo, ringMat);
    ring.rotation.set(1.15, 0, 0.35);
    group.add(ring);

    // Noyau filaire
    const coreMat = new THREE.MeshBasicMaterial({ color: 0xc9a84c, wireframe: true, transparent: true, opacity: 0.12 });
    const core = new THREE.Mesh(new THREE.IcosahedronGeometry(1.0, 1), coreMat);
    group.add(core);

    // Halo lumineux
    const glowCanvas = document.createElement('canvas');
    glowCanvas.width = glowCanvas.height = 128;
    const gctx = glowCanvas.getContext('2d');
    const grad = gctx.createRadialGradient(64, 64, 0, 64, 64, 64);
    grad.addColorStop(0, 'rgba(201,168,76,.55)');
    grad.addColorStop(0.4, 'rgba(201,168,76,.12)');
    grad.addColorStop(1, 'rgba(201,168,76,0)');
    gctx.fillStyle = grad;
    gctx.fillRect(0, 0, 128, 128);
    const glowMat = new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(glowCanvas), blending: THREE.AdditiveBlending, transparent: true, depthWrite: false });
    const glow = new THREE.Sprite(glowMat);
    glow.scale.set(6, 6, 1);
    group.add(glow);

    // Poussière d'étoiles
    const DN = mobile ? 1500 : 3500;
    const DEPTH = 80;
    const dpos = new Float32Array(DN * 3);
    for (let i = 0; i < DN; i++) {
      dpos[i * 3]     = (Math.random() - 0.5) * 30;
      dpos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      dpos[i * 3 + 2] = 6 - Math.random() * DEPTH;
    }
    const dustGeo = new THREE.BufferGeometry();
    dustGeo.setAttribute('position', new THREE.BufferAttribute(dpos, 3));
    const dustMat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      uniforms: { uShift: { value: 0 }, uOpacity: { value: 0.6 }, uSize: { value: 9 * dpr } },
      vertexShader: `
        uniform float uShift, uSize;
        varying float vFade;
        void main(){
          vec3 p = position;
          p.z = mod(p.z + 74.0 + uShift, ${DEPTH.toFixed(1)}) - 74.0;
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = uSize / -mv.z;
          vFade = smoothstep(-74.0, -40.0, p.z) * (1.0 - smoothstep(2.0, 6.0, p.z));
        }`,
      fragmentShader: `
        uniform float uOpacity;
        varying float vFade;
        void main(){
          float d = length(gl_PointCoord - 0.5);
          if (d > 0.5) discard;
          gl_FragColor = vec4(0.91, 0.79, 0.48, smoothstep(0.5, 0.0, d) * vFade * uOpacity);
        }`,
    });
    const dust = new THREE.Points(dustGeo, dustMat);
    scene.add(dust);

    const materials = [sphereMat, ringMat];
    let scrollVel = 0;

    function render(time) {
      const t = time * 0.001;
      pointer.x += (pointer.tx - pointer.x) * 0.05;
      pointer.y += (pointer.ty - pointer.y) * 0.05;

      materials.forEach(m => {
        m.uniforms.uTime.value = t;
        m.uniforms.uIntro.value = state.intro;
        m.uniforms.uOpacity.value = state.opacity * (1 - state.dive * 0.55);
      });
      sphereMat.uniforms.uMorph.value = state.morph;
      coreMat.opacity = 0.12 * state.opacity * state.intro;
      glowMat.opacity = 0.9 * state.opacity * state.intro;
      dustMat.uniforms.uOpacity.value = 0.7 * state.intro;
      dustMat.uniforms.uShift.value = state.travel * 120 + t * 0.4;

      group.position.x = state.x * (1 - state.dive);
      group.position.y = state.y;
      group.scale.setScalar(state.scale * (1 + state.dive * 0.5));
      group.rotation.y = t * 0.08 + pointer.x * 0.35 + scrollVel;
      group.rotation.x = pointer.y * 0.25;
      ring.rotation.z = 0.35 + t * 0.05;
      core.rotation.set(-t * 0.15, -t * 0.2, 0);
      dust.rotation.z = t * 0.01 + state.travel * 1.2;

      camera.position.z = state.camZ - state.dive * 1.6;
      camera.position.x = pointer.x * 0.3;
      camera.position.y = -pointer.y * 0.2;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    }

    function resize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
    window.addEventListener('resize', resize);

    return {
      render,
      setScrollVelocity: v => { scrollVel += (v - scrollVel) * 0.1; },
    };
  }

  if (scene3d) {
    if (reduceMotion) {
      scene3d.render(0);
      window.addEventListener('resize', () => scene3d.render(0));
    } else {
      gsap.ticker.add((time) => scene3d.render(time * 1000));
    }
  }

  if (finePointer) {
    window.addEventListener('mousemove', e => {
      pointer.tx = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.ty = (e.clientY / window.innerHeight) * 2 - 1;
    });
  }

  /* ── Mouvement réduit : 3D statique, pas d'animations ── */
  if (reduceMotion) return;

  /* ══════════ ÉLÉMENTS D'AMBIANCE ══════════ */
  const progress = document.createElement('div');
  progress.className = 'scroll-progress';
  document.body.appendChild(progress);
  gsap.to(progress, { scaleX: 1, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: 0.3 } });

  /* ══════════ INTRO : APPARITION DU HERO ══════════ */
  gsap.set(['.hero-badge', '.hero-title', '.hero-desc', '.hero-cta'], { opacity: 0, y: 30 });
  gsap.set('.hero-number', { yPercent: -50, y: 0, opacity: 0 });
  gsap.timeline({ defaults: { ease: 'power3.out' } })
    .to(state, { intro: 1, camZ: 6, duration: 2, ease: 'expo.out' }, 0)
    .to('.hero-number', { opacity: 1, duration: 1.5 }, 0)
    .to('.hero-badge', { opacity: 1, y: 0, duration: 0.7 }, 0.1)
    .to('.hero-title', { opacity: 1, y: 0, duration: 0.9 }, 0.2)
    .to('.hero-desc', { opacity: 1, y: 0, duration: 0.8 }, 0.35)
    .to('.hero-cta', { opacity: 1, y: 0, duration: 0.8 }, 0.45);

  /* ══════════ VOYAGE : on avance dans les particules ══════════ */
  gsap.to(state, { travel: 1, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: 1.2 } });

  /* ══════════ HERO : DISPARITION DOUCE AU SCROLL (sans bloquer) ══════════ */
  gsap.to(['.hero-content', '.scroll-hint'], {
    opacity: 0, y: -60, ease: 'none',
    scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true },
  });

  /* ══════════ PARCOURS DE LA SPHÈRE DANS LA PAGE ══════════ */
  const mm = gsap.matchMedia();
  const journey = (frames) => {
    gsap.set(state, frames[0]);
    const tl = gsap.timeline({
      defaults: { ease: 'sine.inOut', duration: 1 },
      scrollTrigger: { trigger: '#stats', start: 'top bottom', end: 'max', scrub: 1.4 },
    });
    frames.slice(1).forEach(f => tl.to(state, f));
    return () => tl.kill();
  };
  mm.add('(min-width: 901px)', () => journey([
    { x: 1.8,  y: 0,    scale: 1,    opacity: 1,    morph: 1 },
    { x: -2.6, y: 0.2,  scale: 0.75, opacity: 0.4,  morph: 1.6 },  // services
    { x: 2.8,  y: -0.3, scale: 0.6,  opacity: 0.45, morph: 0.8 },  // méthode
    { x: 0,    y: 0,    scale: 1.5,  opacity: 0.18, morph: 2.2 },  // portfolio
    { x: -2.4, y: 0.3,  scale: 0.7,  opacity: 0.35, morph: 1.2 },  // tarifs
    { x: 2.3,  y: 0,    scale: 0.95, opacity: 0.55, morph: 1 },    // contact
  ]));
  mm.add('(max-width: 900px)', () => journey([
    { x: 0, y: 1.1,  scale: 0.75, opacity: 0.6,  morph: 1 },
    { x: 0, y: 0,    scale: 0.9,  opacity: 0.2,  morph: 1.6 },
    { x: 0, y: -0.5, scale: 1.1,  opacity: 0.15, morph: 2 },
    { x: 0, y: 0,    scale: 0.8,  opacity: 0.25, morph: 1 },
  ]));

  /* ══════════ RÉVÉLATIONS DES SECTIONS ══════════ */
  document.querySelectorAll('.section-header').forEach(header => {
    const tl = gsap.timeline({ scrollTrigger: { trigger: header, start: 'top 82%' } });
    tl.from(header.querySelectorAll('.section-tag'), { opacity: 0, x: -30, duration: 0.8, ease: 'power3.out' })
      .from(header.querySelectorAll('.section-title'), {
        opacity: 0, y: 80, rotationX: -50, transformPerspective: 900, transformOrigin: '50% 100%',
        duration: 1.3, ease: 'expo.out',
      }, '-=0.5')
      .from(header.querySelectorAll('.section-sub'), { opacity: 0, y: 30, duration: 0.9, ease: 'power3.out' }, '-=0.9');
  });

  gsap.set('.service-card, .process-step', { opacity: 0 });
  const cardFrom = { opacity: 0, y: 90, rotationX: -25, transformPerspective: 1000, transformOrigin: '50% 0%' };
  ScrollTrigger.batch('.service-card', {
    start: 'top 88%',
    onEnter: batch => gsap.fromTo(batch, cardFrom, {
      opacity: 1, y: 0, rotationX: 0, duration: 1.1, ease: 'expo.out', stagger: 0.1, overwrite: true,
    }),
  });

  ScrollTrigger.batch('.process-step', {
    start: 'top 85%',
    onEnter: batch => gsap.fromTo(batch, { opacity: 0, y: 50, scale: 0.9 }, {
      opacity: 1, y: 0, scale: 1, duration: 0.9, ease: 'back.out(1.6)', stagger: 0.12, overwrite: true,
    }),
  });

  const processGrid = document.querySelector('.process-grid');
  if (processGrid) {
    const line = document.createElement('div');
    line.className = 'process-progress';
    processGrid.prepend(line);
    gsap.to(line, { scaleX: 1, ease: 'none', scrollTrigger: { trigger: processGrid, start: 'top 80%', end: 'bottom 45%', scrub: true } });
  }

  document.querySelectorAll('.portfolio-item').forEach((item, i) => {
    gsap.fromTo(item,
      { clipPath: 'inset(100% 0% 0% 0%)', opacity: 1 },
      { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.4, ease: 'expo.inOut', delay: (i % 2) * 0.12,
        scrollTrigger: { trigger: item, start: 'top 88%' } });
    const visual = item.firstElementChild;
    if (visual && !visual.classList.contains('portfolio-overlay')) {
      gsap.fromTo(visual, { yPercent: -12, scale: 1.25 }, {
        yPercent: 12, scale: 1.05, ease: 'none',
        scrollTrigger: { trigger: item, start: 'top bottom', end: 'bottom top', scrub: true },
      });
    }
  });

  ['.contact-info', '.contact-form'].forEach((sel, i) => {
    gsap.from(sel, { opacity: 0, y: 60, duration: 1.2, ease: 'expo.out', delay: i * 0.15,
      scrollTrigger: { trigger: '.contact-wrap', start: 'top 80%' } });
  });

  gsap.from('#stats .stat', { opacity: 0, y: 40, duration: 1, stagger: 0.1, ease: 'power3.out',
    scrollTrigger: { trigger: '#stats', start: 'top 90%' } });

  window.addEventListener('load', () => ScrollTrigger.refresh());
})();
