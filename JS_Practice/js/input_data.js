(function(){
	
	function check_valid(){
		var forms = document.getElementsByClassName('need-validation');
		
		var validation = Array.prototype.filter.call(forms, function(form){
			form.addEventListener('submit', function(event){
				if(form.checkValidity() === false){
					event.preventDefault();
					event.stopPropagation();
				}
				form.classList.add('was-validated');
			},false);
		});
	}
	
	window.addEventListener('load', check_valid, false);
})();