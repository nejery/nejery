//javascript  ajax()


function ajax(method,url,data,fnsuc,fnFaild){
	if(window.XMLHttpRequest){
		var oAjax = new XMLHttpRequest();
	}else{
		var oAjax = new ActiveXObject('Microsoft.XMLHTTP');	
	}
	if (method == 'get' && data) {
		url += '?' + data;
	}
	
	oAjax.open(method,url,true);
	if (method == 'get') {
		oAjax.send();
	} else {
		oAjax.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
		oAjax.send(data);
	}
		
	oAjax.onreadystatechange = function(){
		if(oAjax.readyState == 4){
			if(oAjax.status ==200){
				fnsuc(oAjax.responseText);
			}else{
				if(fnFaild){
					fnFaild(oAjax.status);	
				}
			}
		}
	};
};