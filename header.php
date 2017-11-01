<!DOCTYPE html>
<html lang="en">

  <head>


    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" href="../../assets/ico/favicon.ico">
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">

    <title><?php wp_title(''); bloginfo( 'name' ); ?></title>

    <?php wp_head(); ?>

  </head>

  <body <?php body_class(); ?>>


  <div data-aos="fade-down" class="brand">
    <a href="#!">  <img src="<?php echo get_template_directory_uri()?>/img/BHRS-01.png" class="img-fluid" alt="BHRS logo" /></a>
  </div>

  <div class="container-fluid upper-nav">
      <div class="info">

        <div data-aos="fade-down" class="header-item1"><?php do_action('wpml_add_language_selector'); ?></div>
        <a href="#"><div data-aos="fade-down" class="header-item2">hello@bhrs.info</div></a>
        <a href="#"><div data-aos="fade-down" class="header-item3">+372 663 66 62</div></a>
        <a href="#"><div data-aos="fade-down" class="header-item4">Estonia</div></a>



        </div>
  </div>

  <div class="lower-nav">
      <section class="navigation">
        <div class="nav-container container-fluid ">
          <nav>
            <div class="nav-mobile"><a id="nav-toggle" href="#!"><span></span></a></div>
            <ul class="nav-list">

              <li class="menu-line">
                <a href="#">Main</a>
              </li>
              <li class="menu-line">
                <a href="#">Hospitality</a>
              </li>
              <li class="menu-line">
                <a href="#">Wellness</a>
              </li>
              <li class="menu-line">
                <a href="#">Retail</a>
              </li>
              <li class="menu-line">
                <a href="#">References</a>
              </li>
              <li class="menu-line">
                <a href="#">Contact</a>
              </li>

            </ul>

            <button type="button" class="btn btn-outline-primary btn-login">
              <span class="fa-stack fa-lg">
                <i class="fa fa-circle fa-stack-2x "></i>
                <i class="fa fa-lock fa-stack-1x"></i>
              </span> Login</button>

              <div class="searchico">
                <form class="search">
                  <div class="search__wrapper">
                    <input type="text" name="" placeholder="Search here!" class="search__field">
                    <button type="submit" class="fa fa-search search__icon"></button>
                  </div>
                </form>
              </div>


          </nav>


        </div>
      </section>
  </div>
