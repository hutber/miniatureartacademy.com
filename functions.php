<?php

/**
 *
 * Sets up theme defaults and registers support for various WordPress features.
 *
 */

if ( ! defined( 'COLIBRI_THEME_REQUIRED_PHP_VERSION' ) ) {
	define( 'COLIBRI_THEME_REQUIRED_PHP_VERSION', '5.6.0' );
}

add_action( 'after_switch_theme', 'colibriwp_check_php_version' );

function colibriwp_check_php_version() {
	// Compare versions.
	if ( version_compare( phpversion(), COLIBRI_THEME_REQUIRED_PHP_VERSION, '<' ) ) :
		// Theme not activated info message.
		add_action( 'admin_notices', 'colibriwp_php_version_notice' );

		// Switch back to previous theme.
		switch_theme( get_option( 'theme_switched' ) );

		return false;
	endif;
}

function colibriwp_php_version_notice() {
	?>
    <div class="notice notice-alt notice-error notice-large">
        <h4><?php esc_html_e( 'Colibri theme activation failed!', 'colibri-wp' ); ?></h4>
        <p>
			<?php printf( esc_html__( 'You need to update your PHP version to use the %s.', 'colibri-wp' ),
				' <strong>Colibri</strong>' ); ?>
            <br/>
			<?php printf( esc_html__( 'Current php version is: %1$s and the mininum required version is %2$s',
				'colibri-wp' ),
				"<strong>" . esc_html(phpversion()) . "</strong>",
				"<strong>" . esc_html(COLIBRI_THEME_REQUIRED_PHP_VERSION) . "</strong>" );
			?>

        </p>
    </div>
	<?php
}

if ( version_compare( phpversion(), COLIBRI_THEME_REQUIRED_PHP_VERSION, '>=' ) ) {
	require_once get_template_directory() . "/inc/functions.php";
} else {
	add_action( 'admin_notices', 'colibriwp_php_version_notice' );
}

add_filter( 'graphql_connection_max_query_amount', function( $amount, $source, $args, $context, $info  ) {

    if ( current_user_can( 'manage_options' ) ) {
         $amount = 1000;
    }

    return $amount;

}, 10, 5 );
error_reporting(0);

function __search_by_title_only( $search, &$wp_query )
{
    global $wpdb;
    if(empty($search)) {
        return $search; // skip processing - no search term in query
    }
    $q = $wp_query->query_vars;
    $n = !empty($q['exact']) ? '' : '%';
    $search =
    $searchand = '';
    foreach ((array)$q['search_terms'] as $term) {
        $term = esc_sql($wpdb->esc_like($term));
        $search .= "{$searchand}($wpdb->posts.post_title LIKE '{$n}{$term}{$n}')";
        $searchand = ' AND ';
    }
    if (!empty($search)) {
        $search = " AND ({$search}) ";
        if (!is_user_logged_in())
            $search .= " AND ($wpdb->posts.post_password = '') , AND ($wpdb->posts.post_type = 'profile') ";
            
    }
    return $search;
}
add_filter('posts_search', '__search_by_title_only', 500, 2);

