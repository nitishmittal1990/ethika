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
                <?php echo do_shortcode("[ninja_form id='2']"); ?>
            </div>
            <div class="col-lg-4">
                <a href="<?php echo get_home_url(); ?>/agenda">
                    <img src="https://www.ethikaworklife.com/wp-content/uploads/2020/01/agendaaa1.png" />
                </a>
                <img src="https://www.ethikaworklife.com/wp-content/uploads/2020/01/registermow_agenda.png" />
            </div>
        </div>
	</div>
</section>

<?php get_footer(); ?>