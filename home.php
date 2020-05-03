<?php
/**
 * The main template file
 *
 * @package Portfolio_Wordpress
 */

get_header();
?>

<?php wp_mybanner_banner(); ?>

<?php wp_mystatistics_statistics(); ?>

<?php echo do_shortcode( '[show_cat cat="about-me"]'); ?>

<?php wp_myservice_service(); ?>

<?php wp_mytestimonial_testimonial(); ?>

<?php echo do_shortcode( '[show_cat_post cat="post"]'); ?>

<div class="global-menu">
  <div class="global-menu__wrap">
    <nav>
      <?php wp_nav_menu( array( 
        'theme_location' 	=> 'header-menu',
        'container'				=>	'',
        'menu_class'		 	=>	'menu menu-2',
        'menu_id'        	=> 	'primary-menu',
        ) ); 
      ?>
    </nav>
  </div>
  
</div>
<svg class="shape-overlays" preserveaspectratio="none" viewbox="0 0 100 100">
  <defs>
    <linearGradient id="gradient1" x1="0%" x2="0%" y1="0%" y2="100%">
      <stop offset="0%" stop-color="#00c99b"/>
      <stop offset="100%" stop-color="#ff0ea1"/>
    </linearGradient>
    <linearGradient id="gradient2" x1="0%" x2="0%" y1="0%" y2="100%">
      <stop offset="0%" stop-color="#ffd392"/>
      <stop offset="100%" stop-color="#ff3898"/>
    </linearGradient>
    <linearGradient id="gradient3" x1="0%" x2="0%" y1="0%" y2="100%">
      <stop offset="0%" stop-color="#110046"/>
      <stop offset="100%" stop-color="#32004a"/>
    </linearGradient>
  </defs>
  <path class="shape-overlays__path"></path>
  <path class="shape-overlays__path"></path>
  <path class="shape-overlays__path"></path>
</svg>


<!--h1 class="h1"> Tag </h1>
<hr class="line-small">
<h1 class="h1">
Frontend
</h1> 

<h2 class="h2">
Frontend
</h2> 

<h3 class="h3">
Frontend
</h3> 

<h4 class="h4">
Frontend
</h4> 

<h5 class="h5">
Frontend
</h5> 

<h6 class="h6">
Frontend
</h6> 

<p class="paragraph">
  Frontend
</p>

<h1 class="h1"> Buttons </h1>
<hr class="line-small">
<a href="#" class="btn btn-primary">
  Buttons
</a-->

<?php get_footer(); ?>