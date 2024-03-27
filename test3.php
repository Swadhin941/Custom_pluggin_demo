<?php
require __DIR__ . '/vendor/autoload.php';
$id = $_POST['id'];
$_SESSION['id'] = $_POST['id'];
$demoCategory = json_decode($_POST['categories']);
$data = json_decode($id, true);
// print_r(json_decode($demoCategory));

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

for ($i = 0; $i < sizeof($demoCategory); $i++) {
  $woocommerce->post('products/categories', $demoCategory[$i]);
}

print_r("Updated successfully");

// for ($i = 0; $i < sizeof($data); $i++) {
//   $woocommerce->post('products', $data[$i]);
// }

// $res= file_get_contents('http://ws-na1.spexlive.net/service/rest/catalog?method=getCategories&appId=231593&catalog=na&locale=en_us&mapped=false');
// $res2= file_get_contents('https://ws-na1.spexlive.net/service/rest/catalog?method=search&appId=231592&catalog=na&locale=en_us&keywordFilter=device&descriptionTypes=all&category=default');
// print_r($res);
// print_r($res2);
// $tempResponse = json_decode($res, true);



// print_r("Updated successfully");

// require __DIR__ . '/vendor/autoload.php';
// $api_url = 'http://localhost:5000/products';


// $response = file_get_contents($api_url);
// $data= [];


// if ($response === false) {

//     echo "Error fetching data from the API.";
// } else {
//     echo "<script>console.log('$response')</script>";
//     $data = json_decode($response, true);
// }
// print_r($data);

// json_encode()

// $consumer_key= "ck_f53fa7750f4ca5691104f56eb724e0e4f648299e";
// $consumer_secret= "cs_e356b274f2ce3999dafdbad4b670353fffc453a9";

// use Automattic\WooCommerce\Client;

// $woocommerce = new Client(
//   'http://localhost/wordpress/',
//   $consumer_key,
//   $consumer_secret,
//   [
//     'version' => 'wc/v3',
//   ]
// );

// for($i = 0; $i <sizeof($data); $i++){
//     $woocommerce->post('products', $data[$i]);
// }
// print_r("Updated successfully");