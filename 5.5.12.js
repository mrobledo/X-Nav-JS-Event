function change(){
	//document.getElementById('out').innerHTML = this.value;
	document.body.style.backgroundColor=this.value;
}

document.getElementById('in').addEventListener('input',change,false);
            
