<?php get_header(); ?>

<section class="lazy slider">

<?php
if( have_rows('slider') ):

 	// loop through the rows of data
    while ( have_rows('slider') ) : the_row(); ?>


      <div class="slide">
        <img src="<?php the_sub_field('image') ?>">
          <h2><?php the_sub_field('heading') ?></h2>
           <a href="#" class="btn btn-explode">View more</a>
      </div>

    <?php endwhile;
else :
endif;

?>
</section>

<div  class="three-container">

    <div class="flex-parent center">

      <?php
      if( have_rows('info_boxes') ):

       	// loop through the rows of data
          while ( have_rows('info_boxes') ) : the_row(); ?>

          <div data-aos="fade-up" class="flex-child box">

            <a href="<?php the_sub_field('link') ?>">
              <div class="line">
            <div class="mask">
              <h3 class="h3"><?php the_sub_field('heading') ?></h3>
              <div class="caret">
              </div>
            </div>
            <img class="img-fluid" src="<?php the_sub_field('image') ?>">
             </div>
            </a>
          </div>

          <?php endwhile;
      else :
      endif;

      ?>

    </div>
</div>

<div class="container-fluid proud-to-be">

  <div class="proud-to-be-container">

      <h1 data-aos="fade-up" class="text-center">We proud to be</h1>

      <div class="flex-parent center">
        <div data-aos="fade-up" class="flex-child">
          <img src="<?php echo get_template_directory_uri()?>/img/logo1.png" style="width:100%;">
        </div>
        <div data-aos="fade-up" class="flex-child">
        <img src="<?php echo get_template_directory_uri()?>/img/logo2.png" style="width:100%;">
        </div>
      </div>

  </div>

</div>


<div class="container-fluid why-choose-us" style="background-image:url('<?php echo get_template_directory_uri()?>/img/why-bg.png');">

  <div class="why-choose-us-container">

      <h1 data-aos="fade-up" class="text-center">Why choose us?</h1>

      <div class="flex-parent center">

        <?php
        if( have_rows('why_choose_us') ):

          // loop through the rows of data
            while ( have_rows('why_choose_us') ) : the_row(); ?>

            <div data-aos="fade-up" class="flex-child why-section">

              <div class="why-section-icon">
                <img class="img-fluid" src="<?php the_sub_field('icon') ?>">
              </div>

              <h3><?php the_sub_field('heading') ?></h3>

              <p class="info"><?php the_sub_field('text') ?></p>

            </div>

            <?php endwhile;
        else :
        endif;

        ?>

      </div>

  </div>

</div>

<div class="container our-clients-main">

  <h1 data-aos="fade-up" class="our-clients-h1">Our clients</h1>

  <section data-aos="fade-up" class="responsive slider">
    <?php
    if( have_rows('clients') ):

      // loop through the rows of data
        while ( have_rows('clients') ) : the_row(); ?>

        <div class="client-slide">
          <img class="img-fluid" src="<?php the_sub_field('icon') ?>">
        </div>

        <?php endwhile;
    else :
    endif;

    ?>
  </section>

</div>

<div class="container contact-main">

  <h3 data-aos="fade-up" class="sub-heading text-center"> Don`t hesitate to contact us and find more how we can help you grow.</h3>

  <div class="row">

    <div data-aos="fade-up" class="col-md-8 contact-form">

        <?php echo do_shortcode( '[gravityform id="2" title="BHRS contact form" description="BHRS contact form"]' ); ?>

    </div>

    <div data-aos="fade-up" class="col-md-4 contact-img hidden-sm-down">

        <img class="img-fluid" src="<?php echo get_template_directory_uri()?>/img/contact-img.png">

    </div>

  </div>

</div>


<!-- MAP -->

<div data-aos="fade-up" id="wrapper">
          <div id="map_canvas"></div>
</div>

<script async defer
   src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAydQPyCshlIDBGIICVHvy6EaS8WsbiPeM">
   </script>


<?php get_footer(); ?>
