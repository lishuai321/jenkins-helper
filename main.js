
function renderView(){
	var box = document.getElementById('list');
	
	for(var i=0;i<data.length;i++){
		var item = data[i]
		var li = document.createElement('li')
		var a = document.createElement('a')
		a.innerHTML = item

		li.addEventListener('click',function(event){
			var name = event.currentTarget.getAttribute("data-name")
			openUrl(name)
		})
		li.setAttribute("data-name", item);
		li.appendChild(a)
		
		box.appendChild(li)
	}

	
}
function openUrl(name){
	chrome.tabs.create({

		url:'http://jci.beisencorp.com/view/' + name
	})
}
renderView();


