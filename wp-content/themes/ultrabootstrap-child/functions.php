<?php
function my_theme_enqueue_styles() {

    $parent_style = 'ultrabootstrap-style'; // This is 'twentyfifteen-style' for the Twenty Fifteen theme.
    $bootstrap = 'ultrabootstrap-bootstrap';
    wp_enqueue_style( $bootstrap, get_template_directory_uri().'/css/bootstrap.css' );	
    wp_enqueue_style( $parent_style, get_template_directory_uri() . '/style.css' );
    wp_enqueue_style( 'child-style',
        get_stylesheet_directory_uri() . '/style.css',
        array( $bootstrap, $parent_style),
        wp_get_theme()->get('Version')
    );
}
add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_styles' );






add_action( 'wp_enqueue_scripts', 'custom_script' , 120);

function custom_script() {
    
    wp_enqueue_script('jquery');
    wp_enqueue_script( 'ultrabootstrap-bootstrap', get_template_directory_uri() . '/js/bootstrap.js', array(), '1.0.0', true );
    wp_enqueue_script( 'ultrabootstrap-scripts', get_template_directory_uri() . '/js/script.js', array(), '1.0.0', true );
    
    wp_enqueue_script(
        'custom-script',
        get_stylesheet_directory_uri() . '/js/custom-script.js',
        array('jquery','ultrabootstrap-bootstrap','ultrabootstrap-scripts'), '', true
    );
};

