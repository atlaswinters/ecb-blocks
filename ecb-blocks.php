<?php
/**
 * Plugin Name:       Elegant Catalog Blocks
 * Description:       A set of minimal and reponsive elegant catalog blocks to use for your blog or e-commerce website.
 * Requires at least: 6
 * Requires PHP:      7.2
 * Version:           0.1.0
 * Author:            CLaudette Raynor
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       ecb-blocks
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_wp_multi_block_block_init() {
	register_block_type( __DIR__ . '/build/blocks/photogrid' );
	register_block_type( __DIR__ . '/build/blocks/verticalgrid' );
	register_block_type( __DIR__ . '/build/blocks/verticalgrid-multilink' );
}
add_action( 'init', 'create_block_wp_multi_block_block_init' );


/**
 * Registering custom category for catalog layouts blocks.
 *
 * @since 0.1.0
 */
function ecb_blocks_add_category( $categories, $post ) {
	return array_merge(
		$categories,
		array(
			array(
				'slug'  => 'ecb-blocks',
				'title' => __( 'Elegant Catalog Blocks', 'ecb-blocks' ),
			),
		)
	);
}
add_filter( 'block_categories', 'ecb_blocks_add_category', 10, 2 );


/**
 * Registering global ecb-block styles - shared across all blocks.
 *
 * @since 0.1.0
 */
add_action(
	'init',
	function () {
		wp_enqueue_style( 'ecb-blocks-styles', plugin_dir_url( __FILE__ ) . '/build/ecb.blocks.styles.css', array() );
	}
);


/**
 *  Registers excerpt REST field for the /wp/v2/search endpoint.
 *
 * @since 0.1.0
 */
add_action( 'rest_api_init', function () {
    register_rest_field( 'search-result', 'excerpt', array(
        'get_callback' => function ( $post_arr ) {
			$excerpt = sanitize_text_field( get_the_excerpt( $post_arr['id'] ) );
            return get_the_excerpt( $post_arr['id'] );
        },
    ) );
} );