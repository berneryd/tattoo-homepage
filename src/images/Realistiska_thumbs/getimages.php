<?
  header('Content-Type: text/javascript; charset=UTF-8');
//PHP SCRIPT: getimages.php
//This function gets the file names of all images in the current directory
//and ouputs them as a JavaScript array
function returnimages($dirname=".") {
$pattern="(\.jpg$)|(\.png$)|(\.jpeg$)|(\.gif$)"; //valid image extensions
$files = array();
$curimage=0;
if($handle = opendir($dirname)) {
while(false !== ($file = readdir($handle))){
if(eregi($pattern, $file)){ //if this file is a valid image
//Output it as a JavaScript array element
echo 'galleryarray_thumbs['.$curimage.']="'.$file .'";';
$curimage++;
}
}

closedir($handle);
}
return($files);
}

echo 'var galleryarray_thumbs=new Array();'; //Define array in JavaScript
returnimages() //Output the array elements containing the image file names

?>