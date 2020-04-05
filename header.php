<?php
/**
 * The main template file
 *
 * @package Portfolio_Wordpress
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div>
	<!--a class="skip-link" href="#content"><?php esc_html_e( 'Skip to content', 'portfolio-wordpress' ); ?></a-->

	<header class="header">
		<div class="header-logo">
			<?php
			the_custom_logo();
			if ( is_front_page() && is_home() ) :
				?>
				<h1 class=""><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
				<?php
			else :
				?>
				<p class=""><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></p>
				<?php
			endif;
			$portfolio_wordpress_description = get_bloginfo( 'description', 'display' );
			if ( $portfolio_wordpress_description || is_customize_preview() ) :
				?>
				<p class=""><?php echo $portfolio_wordpress_description; ?></p>
			<?php endif; ?>
		</div>

		<nav>
			<!--button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false">
				<?php esc_html_e( 'Primary Menu', 'portfolio-wordpress' ); ?>
			</button-->
			<?php
			wp_nav_menu( array(
				'theme_location' 	=> 	'menu-1',
				'container'				=>	'',
				'menu_class'		 	=>	'menu',
				'menu_id'        	=> 	'primary-menu',
			) );
			?>
		</nav>
	</header>

	<div id="content" class="site-content">
