// need datgui lib & threejs lib

var Ctrl = function(_blob, _light, _pbr, _audio, _cube){
	this.params = {
		show_hdr: true,
		debug_shadow_map: false,
		cam_ziggle: true,
		light_ziggle: true,
		toggle_bnw_hdr: false
	}
	
	// var _g_blob = new dat.GUI();
	var _g_scene = new dat.GUI();

	this.blob = _blob;
	this.light = _light;
	this.pbr = _pbr;
	this.audio = _audio;
	this.cube = _cube;

    // _g_scene.add(this.params, 'debug_shadow_map').onFinishChange( this.update_params.bind(this) );

    _g_scene.add(this.params, 'cam_ziggle');
    // _g_scene.add(this.params, 'light_ziggle');
    _g_scene.add(this.params, 'toggle_bnw_hdr').onFinishChange( this.update_params.bind(this) );;

    // _g_blob.add(this.pbr, 'normal', 0., 5.);
    // _g_blob.add(this.pbr, 'roughness', 0., 10.);
    // _g_blob.add(this.pbr, 'metallic', 0., 10.);
    // _g_blob.add(this.pbr, 'exposure', 0., 20.);
    // _g_blob.add(this.pbr, 'gamma', 0., 10.);

    this.update_params();

    dat.GUI.toggleHide();
};

Ctrl.prototype.update_params = function(){
	var _p = this.params;
	
	this.blob.debug_shadow_map(_p.debug_shadow_map);

	this.cube.toggle_bnw(this.params.toggle_bnw_hdr);
	this.blob.set_cubemap(this.cube);

	this.light.set_light_pos( new THREE.Vector3(_p.light_posx, _p.light_posy, _p.light_posz) );
};