<?php
/**
 * The template for displaying the footer
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Portfolio_Wordpress
 */

?>

	</div>

	<footer id="colophon" class="site__footer">
		<section class="footer__logo">
			<?php dynamic_sidebar( 'footer__1' ); ?>
		</section>
		<section class="footer__menu">
			<?php dynamic_sidebar( 'footer__2' ); ?>
		</section>
		<section class="footer__social">
			<?php dynamic_sidebar( 'footer__3' ); ?>
		</section>
		<section class="footer-bottom">
			<?php dynamic_sidebar( 'footer-bottom__1' ); ?>
		</section>
	</footer>
</div>

<?php wp_footer(); ?>

</body>
</html>
