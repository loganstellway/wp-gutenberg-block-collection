<?php

/**
 * Plugin Name: Logan Stellway - Block Collection for Gutenberg
 * Plugin URI: www.loganstellway.com
 * Description: Plugin that adds a collection of Gutenberg blocks for extended editor functionality.
 * Version: 1.0
 * Author: Logan Stellway
 * Author URI: www.loganstellway.com
 * License: GNU GPL v2
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 */

namespace LoganStellway\Gutenberg;

// Prevent direct access to script
defined( 'ABSPATH' ) or die();

if ( ! class_exists('\LoganStellway\Gutenberg\Blocks') ) {
    class Blocks
    {
        public function __construct() {
            add_action( 'init', array( $this, 'registerBlock' ) );
        }

        /**
         * Initialize 
         */
        public function registerBlock()
        {
            /**
             * Register editor assets
             */
            wp_register_script(
                'loganstellway-gutenberg-blocks-editor',
                plugins_url( 'dist/editor.js', __FILE__ ),
                array( 'wp-editor', 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-components' ),
                filemtime( plugin_dir_path( __FILE__ ) . 'dist/editor.js' ),
                true
            );

            wp_register_style(
                'loganstellway-gutenberg-blocks-editor',
                plugins_url( 'dist/editor-styles.css', __FILE__ ),
                array( 'wp-edit-blocks' ),
                filemtime( plugin_dir_path( __FILE__ ) . 'dist/editor-styles.css' )
            );
        
            /**
             * Register client assets
             */
            wp_register_script(
                'loganstellway-gutenberg-blocks-client',
                plugins_url( 'dist/client.js', __FILE__ ),
                array('wp-element'),
                filemtime( plugin_dir_path( __FILE__ ) . 'dist/client.js' ),
                true
            );

            wp_register_style(
                'loganstellway-gutenberg-blocks-client',
                plugins_url( 'dist/client-styles.css', __FILE__ ),
                array( 'wp-edit-blocks' ),
                filemtime( plugin_dir_path( __FILE__ ) . 'dist/client-styles.css' )
            );
        
            /**
             * Register block
             */
            register_block_type( 'loganstellway/google-maps', array(
                'style' => 'loganstellway-gutenberg-blocks-client',
                'script' => 'loganstellway-gutenberg-blocks-client',
                'editor_style' => 'loganstellway-gutenberg-blocks-editor',
                'editor_script' => 'loganstellway-gutenberg-blocks-editor',
            ) );
        }
    }

    new Blocks();
}
