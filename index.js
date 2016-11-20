'use strict';

/*
 * This is called an immediately-invoked function expression, or IIFE.
 * By putting your code in here, it is not global to the site. This is
 * generally a good thing. Anything you *want* to be globally visible,
 * add it to the "exports" object.
 */

(function (exports) {
    // set up the render loop
    var sim = new altspace.utilities.Simulation();
    sim.camera.position.set(0, 0, 5);

    if (altspace.inClient) {
        // convert scene to meter scale from pixel scale
        altspace.getEnclosure().then(function (enc) {
            sim.scene.scale.setScalar(enc.pixelsPerMeter);
        });
    }

    // create planets
    var geometry = new THREE.SphereGeometry(250, 32, 32);
    var material = new THREE.MeshBasicMaterial({ transparent: false, map: THREE.ImageUtils.loadTexture('https://textures.forrest.cz/textures/library/maps/Earth-hires.jpg') });
    var sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // add the box to the scene
    sim.scene.add(box);

    // export important objects
    exports.sim = sim;
    exports.box = box;
}
)(window.MyProject = window.MyProject || {});
