function init(){

    var scene = new THREE.Scene();

    var box= getBox(1,1,1);
    var plane=getPlane(4);
    plane.rotation.x=Math.PI/2;
    box.position.y=box.geometry.parameters.height/2;

    scene.add(box);
    scene.add(plane);

    var camera= new THREE.PerspectiveCamera(
        45, //field of view
        window.innerWidth/window.innerHeight,  //aspect ratio
        1,  //near clipping planes. Optimization to clip planes outside a range
        1000  //far clipping planes
    );
    
    camera.position.z=5;
    camera.position.x=1;
    camera.position.y=2;
    camera.lookAt(new THREE.Vector3(0,0,0));

    

    var renderer = new THREE.WebGLRenderer();

    

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('webgl').appendChild(renderer.domElement);
    update(renderer,scene,camera);
    
    }

    //by default camera is in the same spot as the box!



    function getBox(w,h,d){

        
        var geometry= new THREE.BoxGeometry(w,h,d);
        var material= new THREE.MeshBasicMaterial({color : 0x00ff00});
        var mesh = new THREE.Mesh(
            geometry,
            material
        );
        
        return mesh;
    }

    function getPlane(size){

        
        var geometry= new THREE.PlaneGeometry(size,size);
        var material= new THREE.MeshBasicMaterial({
            color : 0xff0000,
            side : THREE.DoubleSide
        });
        var mesh = new THREE.Mesh(
            geometry,
            material
        );
        
        return mesh;
    }
    
    function update(renderer,scene,camera){
        renderer.render(scene,camera);
        requestAnimationFrame(function()
         {update(renderer,
            scene,
            camera);})                       //callback syntax javascript
    }

    init();


    //visiblity is common amongst all.


    //we need continuous renders

  