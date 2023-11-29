

<!-- //  if (mysqli_connect_error()){
//   echo " teeeeeeeeeeeeeeestttttttttt";
//    echo mysqli_connect_error();
//    exit ;
//   }else
//     echo " connecting succefully";
//   $sql = " SELECT* FROM articels ORDER By published_at" ;
//   $result = mysqli_query($conn , $sql);
//   if ($result ===false){
//     echo $sql;
//   }else{
// $articels = mysqli_fetch_all($result,MYSQLI_ASSOC);
// var_dump( $articels) ;
//   } 
// ; -->
<!-- $sql = "INSERT INTO articels ( titel , content , published_at ) VALUES (' '); -->
<?php require 'index1.php' ;
 ?>



<?php 

if ($_SERVER["REQUEST_METHOD"]=="POST") {

  require 'index1.php' ;
  $sql = "INSERT INTO articels (titel,content,published_at)
         VALUES ('".$_POST['titre']."','".$_POST['contenu']."','".$_POST['temp']."')";
  // $sql = " SELECT* FROM articels ORDER By published_at" ;
  $result = mysqli_query($conn , $sql);

 if ($result==false){
  echo mysqli_error($conn);
 }else {
  $id = mysqli_insert_id($conn);
  echo " you just insert reccoordc: $id ";
 }}

 ?>


  <form method="post">
  <input name="titre" type="text" id="titel" >
  <textarea name="contenu" type="text" id="content" ></textarea>
  <input name="temp" type="datetime-local" id="time" >
  <button>submit</button>
  </form>




