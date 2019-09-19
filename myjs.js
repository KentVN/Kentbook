
function setDay(){
	let day = 31;
	let options = "";
	for( let i = 0; i <= day; i++){
		
		if(i=== 0){
			options += "<option value="+i+">Ngày</option>";
		}else{
			options += "<option value="+i+">"+i+"</option>";
		}
	}

	document.getElementById("days").innerHTML = options;
}


function setMonth(){
	let month = 12;
	let options = "";
	for( let i = 0; i <= month; i++){
		if(i=== 0){
			options += "<option value="+i+">Tháng</option>";
		}else{
			options += "<option value="+i+">"+i+"</option>";
		}
	}
	document.getElementById("months").innerHTML = options;
}

function setYear(){
	let startYear = 1900;
	let nowYear = new Date().getFullYear();
	let options = "";
	for( let i = nowYear; i >= startYear; i--){
		if(i == nowYear){
			options += "<option value="+i+">Năm</option>";
		}else{
			options += "<option value="+i+">"+i+"</option>";
		}
		
	}
	document.getElementById("years").innerHTML = options;
}

setYear();
setMonth();
setDay();