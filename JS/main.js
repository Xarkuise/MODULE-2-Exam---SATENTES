// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Resize handling
window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});

//Lights
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);
const sunlight = new THREE.DirectionalLight(0xffffff, 0.8);
scene.add(sunlight);

//Floor
const floorGeometry = new THREE.PlaneGeometry(200, 200);
const floorMaterial = new THREE.MeshPhongMaterial({ color: 0x654321, side: THREE.DoubleSide });
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
scene.add(floor);

//Walls
const wallMaterial = new THREE.MeshPhongMaterial({ color: 0xD3D3D3 });

//Back wall
const backWallGeometry = new THREE.PlaneGeometry(200, 200);
const backWall = new THREE.Mesh(backWallGeometry, wallMaterial);
scene.add(backWall);

//Left wall
const leftWallGeometry = new THREE.PlaneGeometry(200, 170);
const leftWall = new THREE.Mesh(leftWallGeometry, wallMaterial);
scene.add(leftWall);

//Right wall
const rightWallGeometry = new THREE.PlaneGeometry(200, 180);
const rightWall = new THREE.Mesh(rightWallGeometry, wallMaterial);
scene.add(rightWall);

//Ceiling
const ceilingGeometry = new THREE.PlaneGeometry(200, 200);
const ceilingMaterial = new THREE.MeshPhongMaterial({ color: 0x999999, side: THREE.DoubleSide });
const ceiling = new THREE.Mesh(ceilingGeometry, ceilingMaterial);
scene.add(ceiling);

//Bed
const bedGeometry = new THREE.BoxGeometry(50, 20, 80);
const bedMaterial = new THREE.MeshPhongMaterial({ color: 0x5C2C26 });
const bed = new THREE.Mesh(bedGeometry, bedMaterial);
scene.add(bed);

//Head Board in Bed
const headBoardBedGeometry = new THREE.BoxGeometry(50, 80, 5);
const headBoardBedMaterial = new THREE.MeshPhongMaterial({ color: 0x5C2C26 });
const headBoardBed = new THREE.Mesh(headBoardBedGeometry, headBoardBedMaterial);
scene.add(headBoardBed);

//Bed leg
const bedLegGeometry = new THREE.BoxGeometry(50, 38, 5);
const bedLegMaterial = new THREE.MeshPhongMaterial({ color: 0x5C2C26 });
const bedLeg = new THREE.Mesh(bedLegGeometry, bedLegMaterial);
scene.add(bedLeg);

//Bed Sheet
const bedSheetGeometry = new THREE.BoxGeometry(45, 20, 70);
const bedSheetMaterial = new THREE.MeshPhongMaterial({ color: 0xFFFFFF });
const bedSheet = new THREE.Mesh(bedSheetGeometry, bedSheetMaterial);
scene.add(bedSheet);


//Small shelf
const shelfGeometry = new THREE.BoxGeometry(45, 40, 36);
const shelfMaterial = new THREE.MeshPhongMaterial({ color: 0x523e2a });
const shelf = new THREE.Mesh(shelfGeometry, shelfMaterial);
scene.add(shelf);

//Inside of the Shelf
const cabGeometry = new THREE.BoxGeometry(40, 26, 22);
const cabMaterial = new THREE.MeshPhongMaterial({ color: 0x765742});
const cab = new THREE.Mesh(cabGeometry, cabMaterial);
scene.add(cab);

//knob
const knobGeometry = new THREE.SphereGeometry( 2, 64, 34 )
const knobMaterial = new THREE.MeshPhongMaterial({ color: 0xE1C16E});
const knob = new THREE.Mesh(knobGeometry, knobMaterial);
scene.add(knob);

//table
const tableGeometry = new THREE.BoxGeometry(40, 40, 24);
const tableMaterial = new THREE.MeshPhongMaterial({ color: 0x3b3b3b });
const table = new THREE.Mesh(tableGeometry, tableMaterial);
scene.add(table);

//Study area
const deskGeometry = new THREE.BoxGeometry(30, 45, 20);
const deskMaterial = new THREE.MeshPhongMaterial({ color: 0x333333 });
const desk = new THREE.Mesh(deskGeometry, deskMaterial);
scene.add(desk);

//Monitor
const monitorGeometry = new THREE.BoxGeometry(20, 15, 2);
const monitorMaterial = new THREE.MeshPhongMaterial({ color: 0x0000ff });
const monitor = new THREE.Mesh(monitorGeometry, monitorMaterial);
scene.add(monitor);

//Chair
const chairGeometry = new THREE.BoxGeometry(20, 30, 20);
const chairMaterial = new THREE.MeshPhongMaterial({ color: 0xaaaaaa });
const chair = new THREE.Mesh(chairGeometry, chairMaterial);
scene.add(chair);

// Window
const windowFrameGeometry = new THREE.BoxGeometry(80, 50, 5);
const windowFrameMaterial = new THREE.MeshPhongMaterial({ color: 0xaaaaaa });
const windowFrame = new THREE.Mesh(windowFrameGeometry, windowFrameMaterial);
scene.add(windowFrame);

// Window Glass
const firstwindowGlassGeometry = new THREE.BoxGeometry(76, 46, 1);
const firstwindowGlassMaterial = new THREE.MeshPhongMaterial({ color: 0xadd8e6, transparent: true, opacity: 0.5 });
const firstwindowGlass = new THREE.Mesh(firstwindowGlassGeometry, firstwindowGlassMaterial);
scene.add(firstwindowGlass);

// Second Window
const secondWindowFrameGeometry = new THREE.BoxGeometry(80, 50, 5);
const secondWindowFrameMaterial = new THREE.MeshPhongMaterial({ color: 0xaaaaaa });
const secondWindowFrame = new THREE.Mesh(secondWindowFrameGeometry, secondWindowFrameMaterial);
scene.add(secondWindowFrame);

// Second Window Glass
const secondWindowGlassGeometry = new THREE.BoxGeometry(76, 46, 1);
const secondWindowGlassMaterial = new THREE.MeshPhongMaterial({ color: 0xadd8e6, transparent: true, opacity: 0.5 });
const secondWindowGlass = new THREE.Mesh(secondWindowGlassGeometry, secondWindowGlassMaterial);
scene.add(secondWindowGlass);

// Camera position
camera.position.set(0, 75, 150);

// Animation loop
function animate() {
    requestAnimationFrame(animate);

        //Light position
       sunlight.position.set(0, 200, 100);

       //Floor position
       floor.rotation.x = -Math.PI / 2;

      // Left wall position
      leftWall.position.x = -100;
      leftWall.position.y = 40;
      leftWall.rotation.y = Math.PI / 2;

      // Right wall position
      rightWall.position.x = 100;
      rightWall.position.y = 50;
      rightWall.rotation.y = -Math.PI / 2;

      // Back wall position
      backWall.position.z = -100;
      backWall.position.y = 50;

      //First window frame
      windowFrame.position.x = 0;
      windowFrame.position.y = 60;
      windowFrame.position.z = -100;

      //First glass position
      firstwindowGlass.position.x = 0;
      firstwindowGlass.position.y = 60;
      firstwindowGlass.position.z = -98;
      
      //Second window frame
      secondWindowFrame.position.x = 100;
      secondWindowFrame.position.y = 60;
      secondWindowFrame.rotation.y = -Math.PI / 2;

      //Second Glass position
      secondWindowGlass.position.x = 97.5;
      secondWindowGlass.position.y = 60;
      secondWindowGlass.rotation.y = -Math.PI / 2;
      
      //Bed position
      bed.position.y =  16;
      bed.position.x =  -72;
      bed.position.z =  -20;

      //Head Board for bed
      headBoardBed.position.y =  12;
      headBoardBed.position.x =  -72;
      headBoardBed.position.z =  -59;

      //Leg of the Bed 
      bedLeg.position.y =  12;
      bedLeg.position.x =  -72;
      bedLeg.position.z =  19;

      //Shelf position
      shelf.position.y =  12;
      shelf.position.x =  62;
      shelf.position.z =  -80;

      cab.position.y =  17;
      cab.position.x =  62;
      cab.position.z =  -70;

      knob.position.y =  17;
      knob.position.x =  62;
      knob.position.z =  -54;

      //Bed sheet position
      bedSheet.position.y =  18;
      bedSheet.position.x =  -72;
      bedSheet.position.z =  -20;


      //Table position
      table.position.set(60, 1, 40);

      //Desk position
      desk.position.set(60, 1, 40);

      //Monitor position
      monitor.position.x = 55;
      monitor.position.y = 35;
      monitor.position.z = 52;

      // Ceiling position and color adjustment
      ceiling.position.y = 120;
      ceiling.rotation.x = Math.PI / 2;
  
      // Chair position
      chair.position.set(60, 7.5, 10);
      renderer.render(scene, camera);
  }
  animate();