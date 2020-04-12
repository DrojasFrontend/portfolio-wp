<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package Portfolio_Wordpress
 */

get_header();
?>

	<div>
		<main id="main" class="site-main">

		<?php while ( have_posts() ) : the_post();
			get_template_part( 'template-parts/content', get_post_type() ); ?>

			<div class="container">
				<div class="row">
					<div class="col-8">
					<?php the_post_navigation(); ?>
					<!--?php if ( comments_open() || get_comments_number() ) :
						comments_template();
					endif; ?-->
					</div>
				</div>
			</div>

		<?php endwhile; ?>

		</main>
	</div>

<?php
get_sidebar();
get_footer();
