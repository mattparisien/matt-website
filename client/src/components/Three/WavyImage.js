import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import vertex from "./shaders/vertex.glsl";
import fragment from "./shaders/fragment.glsl";

function WavyImage({ container, imageSrc }) {
	const textures = useRef([]);
	textures.current = [];

	useEffect(() => {
		//Load image textures for mesh
		const urls = [];

		if (imageSrc && container) {
      
			const texture = new THREE.TextureLoader().load(imageSrc);
			textures.current.push(texture);

			function lerp(start, end, t) {
				return start * (1 - t);
			}

			

			let targetX = 0;
			let targetY = 0;

			class Webgl {
				constructor() {
					this.container = container;
					this.scene = new THREE.Scene();
					this.perspective = 1000; // Camera perspective
					this.sizes = new THREE.Vector2(0, 0); //Mesh sizes
					this.offset = new THREE.Vector2(0, 0); //Mesh position
					this.uniforms = {
						uTexture: { value: textures.current[0] },
						uAlpha: { value: 0.0 },
						uOffset: { value: new THREE.Vector2(0.0, 0.0) },
					};

					this.addEventListeners(container);
					this.setupCamera();
					this.onMouseMove();
					this.createMesh();
					this.render();
				}

				get viewport() {
					let width = window.innerWidth;
					let height = window.innerHeight;
					let aspect = width / height;

					return { width, height, aspect };
				}

				addEventListeners(element) {
					element.addEventListener("mouseenter", () => {
						this.hovered = true;
					});

					element.addEventListener("mouseleave", () => {
						this.hovered = false;
					});
				}

				setupCamera() {
					//Readjust camera dimensions on resize
					window.addEventListener("resize", this.onWindowResize.bind(this));

					let fov =
						(180 *
							(2 * Math.atan(this.viewport.height / 2 / this.perspective))) /
						Math.PI;
					this.camera = new THREE.PerspectiveCamera(
						fov,
						this.viewport.aspectRatio,
						0.1,
						1000
					);

					this.camera.position.set(0, 0, this.perspective);

					//Rendered/canvas
					this.renderer = new THREE.WebGL1Renderer({
						antialias: true,
						alpha: true,
					});
					this.renderer.setSize(this.viewport.width, this.viewport.height);
					this.renderer.setPixelRatio(window.devicePixelRatio);
					this.container.appendChild(this.renderer.domElement);
				}

				onWindowResize() {
					this.camera.aspect = this.viewport.aspectRatio;
					this.camera.fov =
						(180 *
							(2 * Math.atan(this.viewport.height / 2 / this.perspective))) /
						Math.PI;
					this.renderer.setSize(this.viewport.width, this.viewport.height);
					this.camera.updateProjectionMatrix();
				}

				onMouseMove() {
					window.addEventListener("mousemove", e => {
						targetX = e.clientX;
						targetY = e.clientY;
					});
				}

				createMesh() {
					this.geometry = new THREE.PlaneGeometry(1, 1, 20, 20);
					// this.material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
					this.material = new THREE.ShaderMaterial({
						uniforms: this.uniforms,
						vertexShader: `
            uniform vec2 uOffset;
            varying vec2 vUv;
      
            void main() {
              vUv = uv;
              vec3 newPosition = position;
              gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );
            }
          `,
						fragmentShader: `
            uniform sampler2D uTexture;
            uniform float uAlpha;
            varying vec2 vUv;
      
            void main() {
              vec3 color = texture2D(uTexture,vUv).rgb;
              gl_FragColor = vec4(color,1.0);
            }
          `,
						transparent: true,
					});
					this.mesh = new THREE.Mesh(this.geometry, this.material);
					this.sizes.set(250, 350);
					this.mesh.scale.set(this.sizes.x, this.sizes.y);
					this.mesh.position.set(this.offset.x, this.offset.y, 0);
					this.scene.add(this.mesh);
				}

				render() {
					this.offset.x = lerp(this.offset.x, targetX, 0.1);
					this.offset.y = lerp(this.offset.y, targetY, 0.1);
					this.uniforms.uOffset.value.set(
						(targetX - this.offset.x) * 0.0005,
						-(targetY - this.offset.Y) * 0.0005
					);
					this.renderer.render(this.scene, this.camera);
					requestAnimationFrame(this.render.bind(this));
				}
			}

			new Webgl();
		}
	}, [imageSrc]);

	return <div className='c-wavyImage'></div>;
}

export default WavyImage;
