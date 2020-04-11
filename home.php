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
