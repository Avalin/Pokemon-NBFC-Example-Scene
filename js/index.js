let scene, camera, renderer, texLoader, cube;

function init()
{
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
        75, 
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    camera.position.z = 5;
    renderer = new THREE.WebGL1Renderer({antialies: true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    texLoader = new THREE.TextureLoader();

    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const material1 = new THREE.MeshBasicMaterial( { color: 0xFF99FF } );
    const texture  = texLoader.load("img/about.jpg");
    const material = new THREE.MeshBasicMaterial( { map: texture, overdraw: 0.5 } );
    cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
}

function animate()
{
    requestAnimationFrame(animate);  
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}

function onWindowResize()
{
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener("resize", onWindowResize, false);

init();
animate();