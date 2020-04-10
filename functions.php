<?php
/**
 * Portfolio Wordpress functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Portfolio_Wordpress
 */

if ( ! function_exists( 'portfolio_wordpress_setup' ) ) :

	function portfolio_wordpress_setup() {

		load_theme_textdomain( 'portfolio-wordpress', get_template_directory() . '/languages' );

		add_theme_support( 'automatic-feed-links' );

		add_theme_support( 'title-tag' );

		add_theme_support( 'post-thumbnails' );

		// Remove p tags from category description
		remove_filter( 'the_content', 'wpautop' );
		remove_filter( 'the_excerpt', 'wpautop' );


		// My Menus
		function register_my_menus() {
			register_nav_menus(
				array(
					'header-menu' => __( 'Header Menu' ),
					//'extra-menu' => __( 'Extra Menu' )
				)
			);
		}
		add_action( 'init', 'register_my_menus' );

		// Banner
		function wpmybanner_create_post_type() {
			$labels = array(
					'name' => __( 'Banners' ),
					'singular_name' => __( 'banner' ),
					'add_new' => __( 'New banner' ),
					'add_new_item' => __( 'Add New banner' ),
					'edit_item' => __( 'Edit banner' ),
					'new_item' => __( 'New banner' ),
					'view_item' => __( 'View banner' ),
					'search_items' => __( 'Search banners' ),
					'not_found' =>  __( 'No banners Found' ),
					'not_found_in_trash' => __( 'No banners found in Trash' ),
			);
			$args = array(
					'labels' => $labels,
					'menu_icon' => 'dashicons-format-image',
					'has_archive' => true,
					'public' => true,
					'hierarchical' => false,
					'supports' => array(
							'title',
							'editor',
							'excerpt',
							'custom-fields',
							'thumbnail',
							'page-attributes'
					),
					'taxonomies' => array( 'post_tag', 'category'),
			);
			register_post_type( 'banner', $args );
		}
		add_action( 'init', 'wpmybanner_create_post_type' );

		function wp_mybanner_banner() {
			$query = new WP_Query( array(
				'post_type' => 'banner',
			));

			if ( $query->have_posts() ) { ?>
				<?php while ( $query->have_posts() ) : $query->the_post(); 
					$upload_dir = wp_upload_dir();
				?>
					<?php $backgroundImg = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), 'full' ); ?>
						<section id="post-<?php the_ID(); ?>" <?php post_class( 'banner' ); ?> style="background: url('<?php echo $backgroundImg[0]; ?>') no-repeat center;">
							<div class="banner__content">
								<?php the_content(); ?>
								<div class="banner__social">
									<a href="#"><img src="<?php echo $upload_dir['url'] . '/icon-linkedin.svg' ?>"></a>
									<a href="#"><img src="<?php echo $upload_dir['url'] . '/icon-facebook.svg' ?>"></a>
									<a href="#"><img src="<?php echo $upload_dir['url'] . '/icon-whatsapp.svg' ?>"></a>
								</div>
								<a href="" class="btn btn-primary">See my work</a>
							</div>
															
						</section>
				<?php endwhile; ?>
			<?php }
			wp_reset_postdata();
		}

		// Statistics
		function wpmystatistics_create_post_type() {
			$labels = array(
					'name' => __( 'Statistics' ),
					'singular_name' => __( 'statistic' ),
					'add_new' => __( 'New statistic' ),
					'add_new_item' => __( 'Add New statistic' ),
					'edit_item' => __( 'Edit statistic' ),
					'new_item' => __( 'New statistic' ),
					'view_item' => __( 'View statistic' ),
					'search_items' => __( 'Search statistics' ),
					'not_found' =>  __( 'No statistics Found' ),
					'not_found_in_trash' => __( 'No statistics found in Trash' ),
			);
			$args = array(
					'labels' => $labels,
					'menu_icon' => 'dashicons-chart-pie',
					'has_archive' => true,
					'public' => true,
					'hierarchical' => false,
					'supports' => array(
							'title',
							'editor',
							'excerpt',
							'custom-fields',
							'thumbnail',
							'page-attributes'
					),
					'taxonomies' => array( 'post_tag', 'category'),
			);
			register_post_type( 'statistics', $args );
		}
		add_action( 'init', 'wpmystatistics_create_post_type' );

		function wp_mystatistics_statistics() {
			$query = new WP_Query( array(
				'post_type' => 'statistics',
			));

			if ( $query->have_posts() ) { ?>
				<section id="post-<?php the_ID(); ?>" <?php post_class( 'statistics' ); ?>>
					<div class="container">
						<div class="row">
							<?php while ( $query->have_posts() ) : $query->the_post(); ?>
								<div class="col-3 statistics__item">
									<div class="statistics__item-counter">
										<h3 class="h3"><?php the_title(); ?></h3>
										<p class="paragraph"><?php the_content(); ?></p>
									</div>
								</div>
							<?php endwhile; ?>
						</div>
					</div>
				</section>
			<?php }
			wp_reset_postdata();
		}

		// Services
		function wpmyservice_create_post_type() {
			$labels = array(
				'name' => __( 'Services' ),
				'singular_name' => __( 'service' ),
				'add_new' => __( 'New service' ),
				'add_new_item' => __( 'Add New service' ),
				'edit_item' => __( 'Edit service' ),
				'new_item' => __( 'New service' ),
				'view_item' => __( 'View service' ),
				'search_items' => __( 'Search service' ),
				'not_found' =>  __( 'No service Found' ),
				'not_found_in_trash' => __( 'No service found in Trash' ),
			);
			$args = array(
				'labels' => $labels,
				'menu_icon' => 'dashicons-index-card',
				'has_archive' => true,
				'public' => true,
				'hierarchical' => false,
				'supports' => array(
						'title',
						'editor',
						'excerpt',
						'custom-fields',
						'thumbnail',
						'page-attributes'
				),
				'taxonomies' => array( 'post_tag', 'category'),
			);
			register_post_type( 'service', $args );
		}
		add_action( 'init', 'wpmyservice_create_post_type' );
		
		function wp_myservice_service() {
			$query = new WP_Query( array( 'post_type' => 'service', )); ?>
			<section <?php post_class( 'service' ); ?>>
				<div class="container">
					<div class="title">
						<h5 class="h5"> OUR SERVICE</h5>
						<h2 class="h2"> What Service We Offer For You</h2>
					</div>
					<div class="row">
						<?php if ( $query->have_posts() ) { 
							while ( $query->have_posts() ) : $query->the_post(); ?>
								<div id="post-<?php the_ID(); ?>" class="col-4">
									<div class="service__item">
										<figure>
											<?php the_post_thumbnail(); ?>
										</figure>
										<h3 class="h3">
											<?php the_title(); ?>
										</h3>
										<p class="paragraph">
											<?php the_content(); ?>
										</p>
									</div>
								</div>								
							<?php endwhile; ?>
						<?php }
						wp_reset_postdata(); ?>
					</div>
				</div>
			</section>
		<?php }

		// testimonial
		function wpmytestimonial_create_post_type() {
			$labels = array(
				'name' => __( 'testimonial' ),
				'singular_name' => __( 'testimonial' ),
				'add_new' => __( 'New testimonial' ),
				'add_new_item' => __( 'Add New testimonial' ),
				'edit_item' => __( 'Edit testimonial' ),
				'new_item' => __( 'New testimonial' ),
				'view_item' => __( 'View testimonial' ),
				'search_items' => __( 'Search testimonial' ),
				'not_found' =>  __( 'No testimonial Found' ),
				'not_found_in_trash' => __( 'No testimonial found in Trash' ),
			);
			$args = array(
				'labels' => $labels,
				'menu_icon' => 'dashicons-images-alt2',
				'has_archive' => true,
				'public' => true,
				'hierarchical' => false,
				'supports' => array(
						'title',
						'editor',
						'excerpt',
						'custom-fields',
						'thumbnail',
						'page-attributes'
				),
				'taxonomies' => array( 'post_tag', 'category'),
			);
			register_post_type( 'testimonial', $args );
		}
		add_action( 'init', 'wpmytestimonial_create_post_type' );
		
		function wp_mytestimonial_testimonial() {
			$query = new WP_Query( array( 'post_type' => 'testimonial', )); $upload_dir = wp_upload_dir(); ?>
			<section <?php post_class( 'testimonial' ); ?>>
				<div class="container">
					<div class="title">
						<h5 class="h5"> OUR TESITMONIAL </h5>
						<h2 class="h2"> Honourable Client Says About Me </h2>
					</div>			
					<div class="testimonial-slick" style="background: url(<?php echo $upload_dir['url'] . '/about-us.png' ?>) no-repeat left center;">
						<?php if ( $query->have_posts() ) { 
							while ( $query->have_posts() ) : $query->the_post(); ?>
								<div>
									<div class="row">
										<div class="col-7">
											<figure>
												<?php the_post_thumbnail(); ?>
											</figure>								
										</div>
										<div class="col-5">
											<h5 class="h5">
												<?php the_title(); ?>
											</h5>
											<small>
												<?php the_excerpt(); ?>
											</small>
											<p class="paragraph">
												<?php the_content(); ?>
											</p>
										</div>
									</div>
								</div>								
							<?php endwhile; ?>
						<?php }
						wp_reset_postdata(); ?>
					</div>
				</div>
			</section>
		<?php }

		

		// About ME
		function show_category_posts( $atts ){
			extract(shortcode_atts(array('cat'=> ''), $atts));
			query_posts('cat='.$cat.'&orderby;=date&order;=ASC&posts;_per_page=-1');
			if ( have_posts() ) :
				while ( have_posts() ) : the_post(); $upload_dir = wp_upload_dir(); ?>
					<section id="post-<?php the_ID(); ?>" <?php post_class( 'about' ); ?>>
						<div class="container">
							<div class="row">
								<div class="col-6">
									<figure>
										<?php the_post_thumbnail(); ?>
									</figure>				
								</div>
								<div class="col-6">
									<div class="about__content">
										<div class="title">
											<h5 class="h5"> <?php the_title(); ?> </h5>
											<h2 class="h2"> <?php the_excerpt(); ?> </h2>
										</div>
										<p> <?php the_content(); ?> </p>

										<?php $iconDownload = get_post_meta(get_the_ID(), 'Icon Download', true) ?>
										<?php $linkDownload = get_post_meta(get_the_ID(), 'Link Download', true) ?>
										<a href="<?php echo $upload_dir['url'] . '/' . $linkDownload ?>" class="about__link-download" download>
											<?php $iconDownload = get_post_meta(get_the_ID(), 'Icon Download', true) ?>
											<img src="<?php echo $upload_dir['url'] . '/' . $iconDownload ?>">
										</a>
									</div>
									
								</div>
							</div>
						</div>
					</section>
				<?php endwhile;
			endif;
			wp_reset_query();
		}
		
		add_shortcode('show_cat', 'show_category_posts');

		add_theme_support( 'html5', array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
		) );

		add_theme_support( 'custom-background', apply_filters( 'portfolio_wordpress_custom_background_args', array(
			'default-color' => 'ffffff',
			'default-image' => '',
		) ) );

		add_theme_support( 'customize-selective-refresh-widgets' );

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support( 'custom-logo', array(
			'height'      => 250,
			'width'       => 250,
			'flex-width'  => true,
			'flex-height' => true,
		) );
	}
endif;
add_action( 'after_setup_theme', 'portfolio_wordpress_setup' );

function portfolio_wordpress_content_width() {

	$GLOBALS['content_width'] = apply_filters( 'portfolio_wordpress_content_width', 640 );
}
add_action( 'after_setup_theme', 'portfolio_wordpress_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function portfolio_wordpress_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html__( 'Sidebar', 'portfolio-wordpress' ),
		'id'            => 'sidebar-1',
		'description'   => esc_html__( 'Add widgets here.', 'portfolio-wordpress' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );
}
add_action( 'widgets_init', 'portfolio_wordpress_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function portfolio_wordpress_scripts() {
	wp_enqueue_style( 'portfolio-wordpress-style', get_stylesheet_uri() );

	wp_enqueue_script( 'portfolio-wordpress-navigation', get_template_directory_uri() . '/js/navigation.js', array(), '20151215', true );

	wp_enqueue_script( 'portfolio-wordpress-skip-link-focus-fix', get_template_directory_uri() . '/js/skip-link-focus-fix.js', array(), '20151215', true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'portfolio_wordpress_scripts' );

function _themename_assets() {
	wp_enqueue_style( '_themename-stylesheet', get_template_directory_uri() . '/dist/css/bundle.css', array(), '1.0.0', 'all' );
	wp_enqueue_script( '_themename-scripts', get_template_directory_uri() . '/dist/js/bundle.js', array('jquery'), '1.0.0', true );
}
add_action('wp_enqueue_scripts', '_themename_assets');

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}