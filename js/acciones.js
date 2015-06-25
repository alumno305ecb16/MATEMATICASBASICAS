// JavaScript Document
$(document).ready(function(e) {	
document.addEventListener("deviceready",function(){
	var numaleatorio1=0;
	var numaleatorio2=0;
	
	var operacion=0;
	var resultadousu="";
	var caracteresoperacion=0;
	var caracteresresusu;
	var remp="";
	var idoperador="";
	var puntos=0;
	var puntosmal=0;
	var numeropuntos=0;
	var vcount=0;
	var signo="";
	var nummul=0;
	
	var count=60;
	var counter=clearInterval(timer,1000);
	
	function timer()
	{
		count=count-1
		$('#contador').html("TIEMPO:"+count);
		if(count==0)
		{
			clearInterval(counter);
			alert("TU TIEMPO A TERMINADO")
			$(location).attr('href','#resultado'); 
			$('#puntaje').html(puntos);
			$('#puntajemal').html(puntosmal);
			
		}
	
	}
	
	function numerosaleatorios()
	{
		vcount=vcount+1;
		if(vcount==1)
		{
		
			counter=setInterval(timer,1000);
		}
		
		switch (idoperador)
		{
			case("facsuma"):
				$('#tema').html("SUMAS NIVEL FACIL");
				numaleatorio1 = Math.floor(Math.random()*10)+1
				numaleatorio2 = Math.floor(Math.random()*10)+1
				operacion=numaleatorio1+numaleatorio2;
				signo="+";
				break
			case("medsuma"):
				$('#tema').html("SUMAS NIVEL MEDIO");
				numaleatorio1 = Math.floor(Math.random()*100)+1
				numaleatorio2 = Math.floor(Math.random()*100)+1
				operacion=numaleatorio1+numaleatorio2;
				signo="+";
				break
			case("difsuma"):
				$('#tema').html("SUMAS NIVEL DIFICIL");
				numaleatorio1 = Math.floor(Math.random()*200)+1
				numaleatorio2 = Math.floor(Math.random()*200)+1
				operacion=numaleatorio1+numaleatorio2;
				signo="+";
				break;
			case("facres"):
				$('#tema').html("RESTA NIVEL FACIL");
				numaleatorio1 = Math.floor(Math.random()*10)+1
				numaleatorio2 = Math.floor(Math.random()*10)+1
				
				if(numaleatorio1<numaleatorio2)
				{
					numerosaleatorios();
				}
				operacion=numaleatorio1-numaleatorio2;
				signo="-";
				break;
			case("medres"):
				$('#tema').html("RESTA NIVEL MEDIO");
				numaleatorio1 = Math.floor(Math.random()*100)+1
				numaleatorio2 = Math.floor(Math.random()*100)+1
				
				if(numaleatorio1<numaleatorio2)
				{
					numerosaleatorios();
				}
				operacion=numaleatorio1-numaleatorio2;
				signo="-";
				break;
			case("difres"):
				$('#tema').html("RESTA NIVEL DIFICIL");
				numaleatorio1 = Math.floor(Math.random()*200)+1
				numaleatorio2 = Math.floor(Math.random()*200)+1
				
				if(numaleatorio1<numaleatorio2)
				{
					numerosaleatorios();
				}
				operacion=numaleatorio1-numaleatorio2;
				signo="-";
				break;
			case("mul2"):
				$('#tema').html("TABLA 2");
				nummul=nummul+1;
				numaleatorio1=2;
				numaleatorio2 = nummul;
				operacion=numaleatorio1*numaleatorio2;
				signo="X";
				break
			case("mul3"):
				$('#tema').html("TABLA 3");
				nummul=nummul+1;
				numaleatorio1=3;
				numaleatorio2 = nummul;
				operacion=numaleatorio1*numaleatorio2;
				signo="X";
				break
			case("mul4"):
				$('#tema').html("TABLA 4");
				nummul=nummul+1;
				numaleatorio1=4;
				numaleatorio2 = nummul;
				operacion=numaleatorio1*numaleatorio2;
				signo="X";
				break
			case("mul5"):
				$('#tema').html("TABLA 5");
				nummul=nummul+1;
				numaleatorio1=5;
				numaleatorio2 = nummul;
				operacion=numaleatorio1*numaleatorio2;
				signo="X";
				break
			case ("mul6"):
				$('#tema').html("TABLA 6");
				nummul=nummul+1;
				numaleatorio1=6;
				numaleatorio2 = nummul;
				operacion=numaleatorio1*numaleatorio2;
				signo="X";
				break
			case ("mul7"):
				$('#tema').html("TABLA 7");
				nummul=nummul+1;
				numaleatorio1=7;
				numaleatorio2 = nummul;
				operacion=numaleatorio1*numaleatorio2;
				signo="X";
				break
			case ("mul8"):
				$('#tema').html("TABLA 8");
				nummul=nummul+1;
				numaleatorio1=8;
				numaleatorio2 = nummul;
				operacion=numaleatorio1*numaleatorio2;
				signo="X";
				break
			case ("mul9"):
				$('#tema').html("TABLA 9");
				nummul=nummul+1;
				numaleatorio1=9;
				numaleatorio2 = nummul;
				operacion=numaleatorio1*numaleatorio2;
				signo="X";
				break
			case("mulaleatorias"):
				$('#tema').html("MULTIPLICACIONES ALEATORIAS");
				numaleatorio1 = Math.floor(Math.random()*10)+1
				numaleatorio2 = Math.floor(Math.random()*10)+1
				operacion=numaleatorio1*numaleatorio2;
				signo="X";
				break
		}
		
	}
	
			//GUIONES BAJOS
				function guionesbajo(){
						caroperacion=operacion.toString().length;
							switch (caroperacion)
							{
							case 1:
									$('#num1').html(numaleatorio1+signo+numaleatorio2+"="+"_");
									break;
							case 2:
								 	$('#num1').html(numaleatorio1+signo+numaleatorio2+"="+"__");
								 	break;
							case 3:
									$('#num1').html(numaleatorio1+signo+numaleatorio2+"="+"___");
								 	break;
							case 4:
									$('#num1').html(numaleatorio1+signo+numaleatorio2+"="+"____");
								 	break;
						}	
	}
		
		
	$('#btnborrar').on('tap', function (){
			resultadousu="";									
			guionesbajo();
	})
		
		
	$('.ope').on('tap', function (){
					clearInterval(counter);
					count=60;
					vcount=0;
					puntos=0;
					puntosmal=0;
					nummul=0;
					$('#puntos').html("BUENAS:"+puntos);
					$('#puntosmal').html("MALAS:"+puntosmal);
					idoperador = $(this).attr('id')
					numerosaleatorios();
					guionesbajo();	
												
	})
	
	
	$('.valope').on('tap', function (){
			var idbtnnumero = $(this).attr('id')
			var numeroactual = $("#"+idbtnnumero).val();
			
			if(numeroactual==".")
			{
				numeropuntos=numeropuntos+1
				if(numeropuntos==1)
				{
					remp=document.getElementById("num1").innerHTML;
					var remplaso=remp.replace("_",numeroactual)
					$('#num1').html(remplaso);
					resultadousu=resultadousu+numeroactual;
				}
				
			}else
			{
					remp=document.getElementById("num1").innerHTML;
					var remplaso=remp.replace("_",numeroactual)
					$('#num1').html(remplaso);
					resultadousu=resultadousu+numeroactual;
			}
			
			caracteresresusu=resultadousu.toString().length;
			
			if(caroperacion==caracteresresusu)
			{
				resultadousu=parseInt(resultadousu);
				if(resultadousu==operacion)
				{
						numeropuntos=0;
						puntos=puntos+1;
						resultadousu="";	
						numerosaleatorios();
						guionesbajo();	
				}else
					{
					numeropuntos=0;	
					
						puntosmal=puntosmal+1;
														
						resultadousu="";
						numerosaleatorios();
						guionesbajo();	
					}
					
					$('#puntos').html("BUENAS:"+puntos);
					$('#puntosmal').html("MALAS:"+puntosmal);
			}
			
	})
	
}); 
});