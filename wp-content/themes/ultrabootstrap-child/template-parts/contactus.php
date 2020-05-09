<?php
/**
 * Template Name: Contactus Page
 * 
 */
get_header(); ?>

<section class="agenda contactus">
	<div class="container">
		<h1>CONTACT US</h1>
		<p>
            Take one step closer to making your organisation <br/>
            a happier Workplace!
		</p>
	</div>
</section>
<section class="agenda-workshop">
	<div class="container">
		<p class="font-18"">
            Get in touch with us, At Ethika Worklife, we believe that Happy Employees mean Happy Buisnesses, thats why we work relently to take well-being and Happiness to organisations. Let us know how we can help you, we’d love to work with you in the journey of building a Culture of Happiness at your Workplace.
        </p>
        <div class="row contactform">
            <div class="col-lg-6">
                <h2>GET IN TOUCH WITH US</h2>
                <?php echo do_shortcode("[ninja_form id='1']"); ?>
            </div>
            <div class="col-lg-6 font-18">
                <h2>ADDRESS</h2>
                <address>
                    <h5>Ethika Worklife</h5>
                    <p>Plot No – 88, Above MRF Tyres, <br/>
                    2nd Floor, Gachibowli – Miyapur Road, <br/>
                    Hyderabad, 500032.</p>
                    <a href="tel:+91994904841">+91 994 904 8418</a> <br/>
                    <a href="mailto:info@ethikaworklife.com">info@ethikaworklife.com</a>
                </address>
                <div class="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d487194.09185232315!2d78.364249!3d17.449955!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1d6d9001448b9420!2sEthika%20Insurance%20Broking%20Pvt.%20Ltd!5e0!3m2!1sen!2sus!4v1589034719225!5m2!1sen!2sus" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
            </div>
        </div>
	</div>
</section>

<?php get_footer(); ?>