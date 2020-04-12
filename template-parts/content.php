<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Portfolio_Wordpress
 */

?>

<?php $upload_dir = wp_upload_dir(); 

function the_breadcrumb() {
	if (is_category() || is_single()) {
		the_category('title_li=');
		if (is_single()) { ?>
			<span></span>
			<?php the_title();
		}
	} elseif (is_page()) {
		echo the_title();
	}
}

?>

<article id="post-<?php the_ID(); ?>" >
	<header class="banner__area" <?php post_class(); ?> style="background: url(<?php echo $upload_dir['url'] . '/common-banner.png' ?>) no-repeat center;">
		<div class="banner__content">
			<?php
				if ( is_singular() ) :
					the_title( '<h1 class="h1">', '</h1>' );
				else :
					the_title( '<h2 class="entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h2>' );
				endif;

				if ( 'post' === get_post_type() ) :
			?>
				<!--div class="entry-meta">
			<?php
				portfolio_wordpress_posted_on();
				portfolio_wordpress_posted_by();
			?>
				</div-->
			<?php endif; ?>
			<p class="paragraph"><?php the_breadcrumb(); ?></p>
		</div>
	</header>

	<?php portfolio_wordpress_post_thumbnail(); ?>

	<div class="entry-content">
		<?php
		the_content( sprintf(
			wp_kses(
				/* translators: %s: Name of current post. Only visible to screen readers */
				__( 'Continue reading<span class="screen-reader-text"> "%s"</span>', 'portfolio-wordpress' ),
				array(
					'span' => array(
						'class' => array(),
					),
				)
			),
			get_the_title()
		) );

		wp_link_pages( array(
			'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'portfolio-wordpress' ),
			'after'  => '</div>',
		) );
		?>
	</div>

	<footer class="entry-footer">
		<?php portfolio_wordpress_entry_footer(); ?>
	</footer>
</article>
<?php the_ID(); ?>
