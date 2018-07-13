(function(){
	
	function check_valid(){
		var forms = document.getElementsByClassName('need-validation');
		var user = document.getElementById('validation1');
		var pass = document.getElementById('validation2');
		var user_detil = [];
		var validation = Array.prototype.filter.call(forms, function(form){
			form.addEventListener('submit', function(event){
				if(form.checkValidity() === false){
					event.preventDefault();
					event.stopPropagation();
				}else{
					user_detil.push("user:" + user.value + "pass:" + pass.value );
					alert(user_detil[0]);
				}
				form.classList.add('was-validated');
			},false);
		});
	}
			
	window.addEventListener('load', check_valid, false);
	
	
})();