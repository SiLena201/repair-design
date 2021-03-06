<header class="header">
  <div class="container">

    <div class="menu">
      <div class="logo menu__logo">Repair Design Project</div>
      <nav class="nav menu__nav">
        <a href="index.php" class="nav__item active">Главная</a>
        <a href="projects.php" class="nav__item">Проекты</a>
        <a href="work.php" class="nav__item">Замер</a>
        <a href="team.php" class="nav__item">Команда</a>
        <a href="customers.php" class="nav__item">Отзывы</a>
        <a href="#" class="nav__item">Контакты</a>
      </nav>

      <div class="contacts menu__contacts">
        <a href="tel:+79069542715" class="phone contacts__phone">+7 (906) 954-27-15</a>
        <button class="button contacts__button button--primary" href="#modal" data-toggle="modal">Заказать звонок</button>
      </div>
    </div>

  </div>
</header>



<?php
/**
 * Displays a navigation menu
 * @param array $args Arguments
 */
$args = array(
  'menu'            => '',
  'container'       => 'div',
  'container_class' => 'header',
  'container_id'    => '',
  'menu_class'      => 'header',
  'menu_id'         => '',
  'echo'            => true,
  'fallback_cb'     => 'wp_page_menu',
  'before'          => '',
  'after'           => '',
  'link_before'     => '',
  'link_after'      => '',
  'items_wrap'      => '<ul id="%1$s" class="%2$s">%3$s</ul>',
  'item_spacing'    => 'preserve',
  'depth'           => 0,
  'walker'          => '',
  'theme_location'  => '',
);
wp_nav_menu($args); ?>