<?php
/*
  Plugin Name: Icu Request
*/





 
function my_scripts() {
	function register_vendor_script($script, $path) {
		wp_register_script($script, plugin_dir_url( __FILE__ ).'/node_modules/'.$path);
	}

	register_vendor_script('core-js', 'core-js/client/shim.min.js');
	register_vendor_script('zone.js', 'zone.js/dist/zone.js');
	register_vendor_script('reflect-metadata', 'reflect-metadata/Reflect.js');
	register_vendor_script('system', 'systemjs/dist/system.src.js');
	register_vendor_script('Rx', 'rxjs/bundles/Rx.js');

	wp_enqueue_style( 'style', plugin_dir_url(__FILE__).'style.css' );
	wp_enqueue_style( 'style', 'https://fonts.googleapis.com/icon?family=Material+Icons' );
	wp_enqueue_script(
        	'system-start',
        	plugin_dir_url(__FILE__).'/dist/system-start.js',
        	array('core-js', 'zone.js', 'reflect-metadata','system', 'Rx')
        );
	

	wp_localize_script(
		'system-start',
		'baseUrl',
		trailingslashit(plugins_url('root'))
	);

}

add_action( 'wp_enqueue_scripts', 'my_scripts');


//insert the component <new-request> to the page.
function bootstrap( $atts ){
	return '<new-request>loading</new-request>';
}
//insert the component <search-request> to the page.
function bootstrapSearch( $atts ){
	
	return '<search-request>loading</search-request>';
}
add_shortcode( 'new-request', 'bootstrap' );
add_shortcode( 'search-request', 'bootstrapSearch' );

function widgets_registered() {
  	// We check if the Elementor plugin has been installed / activated.
  	if(defined('ELEMENTOR_PATH') && class_exists('Elementor\Widget_Base')){

		$search_template_file = plugin_dir_path(__FILE__).'search_template.php';
		$new_template_file = plugin_dir_path(__FILE__).'new_template.php';
 		if ( $search_template_file && is_readable( $search_template_file ) ) {
	    	require_once $search_template_file;
	 	}
	 	if ( $new_template_file && is_readable( $new_template_file ) ) {
	    	require_once $new_template_file;
	 	}
	}
}
add_action( 'elementor/widgets/widgets_registered',  'widgets_registered' );
