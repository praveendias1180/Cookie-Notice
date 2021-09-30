<?php
/**
* Plugin Name: UDSSL Cookie Notice
*/

/**
 * Ennqueue Scripts and Styles.
 */
function enqueue_udssl_cn_scripts()
{
    wp_enqueue_script('udssl_cn_js', plugins_url('udssl-cn.js', __FILE__), array(), false, true);
    wp_enqueue_style('udssl_cn_style', plugins_url('udssl-cn.css', __FILE__), array(), false);
}
add_action('wp_enqueue_scripts', 'enqueue_udssl_cn_scripts');

function udssl_add_cookie_notice()
{
    ob_start(); ?>

<div class="cookie-banner">
    <p class="cookie-text">This website uses cookies to ensure you get the best experience on our website.</p>
    <button class="cookie-button">Accept</button>
    <button class="cookie-button">Deny</button>
    <button class="cookie-button">Close</button>
</div>

<?php
    echo ob_get_clean();
}
add_action('wp_footer','udssl_add_cookie_notice');
?>