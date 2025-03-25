let result=document.getElementById("inputtext");
	function calculate(number){
		result.value+=number;
	}

	function r(){
		result.value=eval(result.value);
	}
	function C(){
		result.value="";
	}