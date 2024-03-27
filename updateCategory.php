<?php
require __DIR__ . '/vendor/autoload.php';
$consumer_key = "ck_f53fa7750f4ca5691104f56eb724e0e4f648299e";
$consumer_secret = "cs_e356b274f2ce3999dafdbad4b670353fffc453a9";

use Automattic\WooCommerce\Client;

$woocommerce = new Client(
    'http://localhost/wordpress/',
    $consumer_key,
    $consumer_secret,
    [
        'version' => 'wc/v3',
    ]
);

$categories = json_decode($_POST['categories'], true);

for($i=0; $i<sizeof($categories); $i++){
    $woocommerce->post('products/categories', $categories[$i]);
}

print_r(json_encode($woocommerce->get("products/categories")));


?>