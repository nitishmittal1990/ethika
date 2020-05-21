<?php
/**
 * Template Name: Register Page
 * 
 */
get_header(); ?>

<section class="agenda register">
	<div class="container">
		<h1>REGISTRATION</h1>
		<p>
            We look forward to have you with us for our Workshop
		</p>
	</div>
</section>
<section class="agenda-workshop">
	<div class="container">
		<p class="font-18">
            Please use the form below to register for a Workshop.
        </p>
        <div class="row">
            <div class="col-lg-8">
                <!-- // <?php do_shortcode('[contact-form-7 id="99" title="Register Form"]'); ?> -->
                <?php echo do_shortcode('[contact-form-7 id="129" title="Register Form"]'); ?>
            </div>
            <div class="col-lg-4">
                <a href="<?php echo get_home_url(); ?>/agenda">
                    <img src="<?php echo get_home_url(); ?>/wp-content/uploads/2020/05/agendaaa1.png" />
                </a>
                <img src="<?php echo get_home_url(); ?>/wp-content/uploads/2020/05/registermow_agenda.png" />
            </div>
        </div>
	</div>
</section>

<?php get_footer(); ?>