<?php 
	$conn = mysqli_connect("localhost", "root", "", "iot");
	if($conn != null){
		$err_conn = false;
		$conn_msg = "Coneccion establecida";
	}
	else{
		$err_conn = true;
		$conn_msg = "Error al accesar a la BD: ".mysqli_connect_error($conn);
	}
   
	}