<!DOCTYPE html>
<html  lang="en"
  class="light-style layout-menu-fixed "
  dir="ltr"
  data-theme="theme-default">
  <head>
  <?php 
    include_once('./header.php');
  ?>
  </head>
  <body>
    <div class="container-fluid DashBoard-user-profile">
          <?php include_once('./dashboard-nav.php') ?>
          <?php include_once('./dashboard-workshop-view.php') ?>

    </div>

    <?php include_once('./footer.php'); ?>
    <?php include_once('./wip-modal.php'); ?>
  </body>
</html>


<?php include_once('./scriptJS.php') ?>