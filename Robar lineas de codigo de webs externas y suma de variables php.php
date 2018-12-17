<?php $url = 'https://www.leetchi.com/w/en/8466223/6c575e20';
$content = file_get_contents($url);
$first_step1a = explode( '<span class="progressIndicator">' , $content );
$second_step1a = explode("</span>" , $first_step1a[1] );?> 
<?php $url = 'https://www.leetchi.com/w/en/8466223/6c575e20'; 
$content = file_get_contents($url);
$first_step1b = explode( '<h2 class="flagHeading">' , $content );
$second_step1b = explode("</h2>" , $first_step1b[1] );?>

<?php $url = 'https://www.leetchi.com/w/es/8508359/04b1f3ea';
$content = file_get_contents($url);
$first_step2a = explode( '<span class="progressIndicator">' , $content );
$second_step2a = explode("</span>" , $first_step2a[1] );?> 
<?php $url = 'https://www.leetchi.com/w/es/8508359/04b1f3ea'; 
$content = file_get_contents($url);
$first_step2b = explode( '<h2 class="flagHeading">' , $content );
$second_step2b = explode("</h2>" , $first_step2b[1] );?>

<?php $url = 'https://www.leetchi.com/w/es/8508533/2cb28895';
$content = file_get_contents($url);
$first_step3a = explode( '<span class="progressIndicator">' , $content );
$second_step3a = explode("</span>" , $first_step3a[1] );?> 
<?php $url = 'https://www.leetchi.com/w/es/8508533/2cb28895'; 
$content = file_get_contents($url);
$first_step3b = explode( '<h2 class="flagHeading">' , $content );
$second_step3b = explode("</h2>" , $first_step3b[1] );?>

<?php $url = 'https://www.leetchi.com/w/es/8508631/8b7dc0c1';
$content = file_get_contents($url);
$first_step4a = explode( '<span class="progressIndicator">' , $content );
$second_step4a = explode("</span>" , $first_step4a[1] );?> 
<?php $url = 'https://www.leetchi.com/w/es/8508631/8b7dc0c1'; 
$content = file_get_contents($url);
$first_step4b = explode( '<h2 class="flagHeading">' , $content );
$second_step4b = explode("</h2>" , $first_step4b[1] );

// Código añadido para que veas lo que tiene cada array
$i=0;
echo 'Vector A ->: {'.$second_step1a[$i].', '.$second_step2a[$i].', '.$second_step3a[$i].', '.$second_step4a[$i].'}<br>';
echo 'Vector B ->: {'.$second_step1b[$i].', '.$second_step2b[$i].', '.$second_step3b[$i].', '.$second_step4b[$i].'}<br><br>';


// Y una función más sencilla, puesto que sólo necesitamos los dígitos para hacer la suma
function parser($cadena){
	return preg_replace('/\D/','',$cadena);
}

// Código modificado ?>
Ganado: 
<?php echo parser($second_step1b[0])+parser($second_step2b[0])+parser($second_step3b[0])+parser($second_step4b[0]).' EUR'; ?>
<br/>
Suma porcentajes:
<?php echo parser($second_step1a[0])+parser($second_step2a[0])+parser($second_step3a[0])+parser($second_step4a[0]).'%'; ?>



// Forma simple para un solo div (LOS TAGS TIENEN QUE SER UNA CADENA EMPEZAR Y ACABAR CON EL MISMO DIV POR EJEMPLO)

<?php 	$url = 'index.php/tours-test/experience/test-1';
		$content = file_get_contents($url);
		$first_step1a = explode( "<form action="/index.php/tours-test" method="post">" , $content );
		$second_step1a = explode("</form>" , $first_step1a[1] );?>

<?php echo $second_step1a[0]); ?>

