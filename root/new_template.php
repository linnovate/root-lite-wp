<?php
namespace Elementor;
if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

class Widget_New_Request extends Widget_Base {

 public function get_name() {
      return 'new-request';
   }

   public function get_title() {
      return __( 'New Request', 'elementor' );
   }

   public function get_icon() {
      return 'eicon-plus';
   }

   public function get_categories() {
      return [ 'general-elements' ];
   }

   public function is_reload_preview_required() {
      return true;
   }

   protected function render() {
      $shortcode = $this->get_settings( 'shortcode' );

      $shortcode = do_shortcode( shortcode_unautop( '[new-request]' ) );
      ?>
      <div class="elementor-shortcode"><?php echo $shortcode; ?></div>
      <?php
   }

   public function render_plain_content() {
      // In plain mode, render without shortcode
      echo $this->get_settings( 'shortcode' );
   }

   protected function _content_template() {}
}


 Plugin::instance()->widgets_manager->register_widget_type( new Widget_New_Request() );
