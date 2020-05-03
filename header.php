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
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.0/css/all.css"
    integrity="sha384-Bfad6CLCknfcloXFOyFnlgtENryhrpZCe29RTifKEixXQZ38WheV+i/6YWSzkz3V" crossorigin="anonymous">
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
        <h1 class=""><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a>
        </h1>
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

      <!--button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false">
				<?php esc_html_e( 'Primary Menu', 'portfolio-wordpress' ); ?>
      </button-->

      <?php if (!is_single()) { ?>
      <nav class="menu-nav">
        <?php wp_nav_menu( array( 
            'theme_location' 	=> 'header-menu',
            'container'				=>	'',
            'menu_class'		 	=>	'menu menu-1',
            'menu_id'        	=> 	'primary-menu',
            ) ); 
          ?>
      </nav>
      <?php } else { ?>
      <nav>
        <?php wp_nav_menu( array( 
          'theme_location' 	=> 'header-menu',
          'container'				=>	'',
          'menu_class'		 	=>	'menu menu-2',
          'menu_id'        	=> 	'primary-menu',
          ) ); 
        ?>
      </nav>
      <?php } ?>

      <div class="hamburger hamburger--a js-hover">
        <div class="hamburger__line hamburger__line--01">
          <div class="hamburger__line-in hamburger__line-in--01"></div>
        </div>
        <div class="hamburger__line hamburger__line--02">
          <div class="hamburger__line-in hamburger__line-in--02"></div>
        </div>
        <div class="hamburger__line hamburger__line--03">
          <div class="hamburger__line-in hamburger__line-in--03"></div>
        </div>
        <div class="hamburger__line hamburger__line--cross01">
          <div class="hamburger__line-in hamburger__line-in--cross01"></div>
        </div>
        <div class="hamburger__line hamburger__line--cross02">
          <div class="hamburger__line-in hamburger__line-in--cross02"></div>
        </div>
      </div>
    </header>

    <div id="content" class="site-content">