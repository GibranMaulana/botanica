import { 
    Scene, 
    PerspectiveCamera, 
    WebGLRenderer, 
    ACESFilmicToneMapping, 
    PCFSoftShadowMap, 
    PMREMGenerator, 
    AmbientLight, 
    DirectionalLight, 
    SpotLight, 
    TextureLoader, 
    SRGBColorSpace, 
    MeshPhysicalMaterial, 
    DoubleSide, 
    Color, 
    MeshStandardMaterial, 
    Group 
} from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import gsap from 'gsap';

export class CandleScene {
   constructor() {
      this.canvas = document.querySelector("#hero-candle");
      if (!this.canvas) return;

      this.init();
      this.loadModel();
      this.animate();
      this.handleResize();
      this.handleMouseMove(); 
   }

   init() {
      this.scene = new Scene();
      
      const container = this.canvas.parentElement;
      const width = container.clientWidth;
      const height = container.clientHeight;

      this.camera = new PerspectiveCamera(45, width / height, 0.1, 100);
      this.camera.position.set(0, 0, 8); 
      this.renderer = new WebGLRenderer({ 
         canvas: this.canvas, 
         alpha: true, 
         antialias: true 
      });
      
      this.renderer.setSize(width, height);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      
      this.renderer.toneMapping = ACESFilmicToneMapping;
      this.renderer.toneMappingExposure = 1.0; 
      this.renderer.shadowMap.enabled = true;
      this.renderer.shadowMap.type = PCFSoftShadowMap;

      const pmremGenerator = new PMREMGenerator(this.renderer);
      this.scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;

      const ambientLight = new AmbientLight(0xffffff, 0.2);
      this.scene.add(ambientLight);

      const windowLight = new DirectionalLight(0xfff0dd, 3); 
      windowLight.position.set(-5, 2, 5); 
      windowLight.castShadow = true;      
      windowLight.shadow.bias = -0.0001;
      this.scene.add(windowLight);
      
      const rimLight = new SpotLight(0xffffff, 5);
      rimLight.position.set(5, 5, -5); 
      rimLight.lookAt(0, 0, 0);
      this.scene.add(rimLight);

      this.mouseX = 0;
      this.mouseY = 0;
   }

   loadModel() {
      const textureLoader = new TextureLoader();
      const labelTexture = textureLoader.load('/assets/textures/label-botanica.png');
      labelTexture.flipY = true; 
      labelTexture.colorSpace = SRGBColorSpace; 

      const loader = new GLTFLoader();

      loader.load('/assets/models/candle.glb', (gltf) => {
         this.candle = gltf.scene;

         this.candle.traverse((node) => {
               if (node.isMesh) {
                  node.castShadow = true;
                  node.receiveShadow = true;
               }
         });

         this.candle.traverse((child) => {
               if (child.isMesh) {
                  
                  if (child.name.includes('Cup')) {
                     child.material = new MeshPhysicalMaterial({
                           color: 0x222222,       
                           roughness: 0.6,        
                           metalness: 0.1,
                           clearcoat: 0.5,        
                           clearcoatRoughness: 0.4, 
                           side: DoubleSide
                     });
                  }

                  if (child.name.includes('Wax')) {
                     child.material = new MeshPhysicalMaterial({
                           color: 0xfffae6,       
                           roughness: 0.3,        
                           metalness: 0.0,
                           transmission: 0.2,     
                           thickness: 1.5,        
                           attenuationColor: new Color(0xffd700), 
                           attenuationDistance: 0.5,
                     });
                  }

                  if (child.name.includes('Label')) {
                     child.material = new MeshStandardMaterial({
                           map: labelTexture,     
                           color: 0xfffef0,       
                           roughness: 0.9,
                           metalness: 0.0,
                           side: DoubleSide
                     });
                  }

                  if (child.name.includes('Wick')) {
                     child.material = new MeshStandardMaterial({
                           color: 0x3b2e25,       
                           roughness: 1.0
                     });
                  }

                  if (child.name.includes('Twine')) {
                     child.material = new MeshStandardMaterial({
                           color: 0xd2c290,       
                           roughness: 1.0
                     });
                  }
               }
         });

         this.candleContainer = new Group();
         this.candleContainer.add(this.candle);
         
         this.candleContainer.position.y = -0.5; 
         this.candleContainer.scale.set(1.3,1.3,1.3); 
         this.candleContainer.rotation.x = Math.PI / 12; 
         this.candleContainer.rotation.z = Math.PI / 24;
         this.candleContainer.rotation.y = Math.PI 

         this.scene.add(this.candleContainer);

         gsap.from(this.candleContainer.rotation, { y: 0, duration: 2, ease: "power3.out" });
         gsap.from(this.candleContainer.position, { y: -3, duration: 1.5, ease: "expo.out" });
      });
   }

   handleResize() {
      window.addEventListener('resize', () => {
            const container = this.canvas.parentElement;
            const width = container.clientWidth;
            const height = container.clientHeight;
            
            this.camera.aspect = width / height;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(width, height);
      });
   }

   handleMouseMove() {
      window.addEventListener('mousemove', (e) => {
         this.mouseX = (e.clientX / window.innerWidth) * 2 - 1;
         this.mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
      });
   }

   animate() {
      if (!this.renderer) return;
      requestAnimationFrame(this.animate.bind(this));

      if (this.candleContainer) {
         this.candleContainer.position.y = -0.5 + Math.sin(Date.now() * 0.001) * 0.05;

         this.candleContainer.rotation.y += 0.005; 

         
         const targetRotationX = (Math.PI / 12) + (this.mouseY * 0.1);
         this.candleContainer.rotation.x += (targetRotationX - this.candleContainer.rotation.x) * 0.05;

         const targetRotationZ = (Math.PI / 24) - (this.mouseX * 0.05);
         this.candleContainer.rotation.z += (targetRotationZ - this.candleContainer.rotation.z) * 0.05;
      }

      this.renderer.render(this.scene, this.camera);
   }

   kill() {
      this.renderer.dispose();
      this.renderer = null;
      if (this.scene.environment) this.scene.environment.dispose();
   }
}