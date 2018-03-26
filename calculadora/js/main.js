$(document).ready(function(){
	let val = "";
	$("#9").click(function(){
		val += "9" 
		$("#num").val(val);
	});
	$("#8").click(function(){
		val += "8"
		$("#num").val(val);
	});
	$("#7").click(function(){
		val += "7"
		$("#num").val(val)
	})
	$("#6").click(function(){
		val += "6"
		$("#num").val(val)
	})
	$("#5").click(function(){
		val += "5"
		$("#num").val(val)
	})
	$("#4").click(function(){
		val += "4"
		$("#num").val(val)
	})
	$("#3").click(function(){
		val += "3"
		$("#num").val(val)
	})
	$("#2").click(function(){
		val += "2"
		$("#num").val(val)
	})
	$("#1").click(function(){
		val += "1"
		$("#num").val(val)
	})
	$("#0").click(function(){
		val += "0"
		$("#num").val(val)
	})
	$("#ponto").click(function(){
		val += ".";
		$("#num").val(val);
	});
});