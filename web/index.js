var ele = document.getElementsByTagName('step')[0];
var refresh = function(){
	ele.innerText = parseInt(ele.innerText) + 1;
	if (parseInt(ele.innerText) == 100){
		clearInterval(inv);
		external.close();
	}
}
var inv = setInterval(refresh, 1000 * external.total_seconds / 100);