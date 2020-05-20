<?php
/**
 * Template Name: Partner Page
 * 
 */
get_header(); ?>

<section class="agenda partner">
	<div class="container">
		<h1>PARTNER</h1>
		<p>
            Sharing the Synergies! We are looking at increasing our <br/> network and would like to partner with like-minded <br/> companies.
        </p>
	</div>
</section>
<section class="agenda-workshop grp-insu">
	<div class="container">
		<p class="font-18">
            We are looking at increasing our network and would like partner with like-minded companies who share our vision of enhanced workplace wellness and Happiness, and can bring more value to our tool.
        </p>
        <p class="font-18">
            We would love to explore synergies with companies working in employee engagement, employee development, employee wellness., and human resource services domains. We also look forward to collaborating with channel partners and resellers for our tool.
        </p>
        <?php  do_shortcode('[contact-form-7 id="98" title="Partner Form"]') ?>
        <?php echo do_shortcode('[contact-form-7 id="128" title="Partner Form"]') ?>
        
	</div>
</section>


<?php get_footer(); ?>