var store = localStorage;

function save(){
	var user  = {},
		obj ={},
		user_name = document.querySelector(".user_name"),
		user_tel = document.querySelector(".user_tel"),
		user_company = document.querySelector(".user_company"),
		saveBtn = document.querySelector(".btnSave");

	saveBtn.addEventListener("click",function (){
			obj.name_value = user_name.value,
			obj.tel_value = user_tel.value,
			obj.company_value = user_company.value;
			var value = JSON.stringify(obj);
			if(obj.name_value!==''&&obj.tel_value!==''&&obj.company_value!==''){
				store.setItem(obj.tel_value,value)
				// showMsg()
				alert('创建成功')
				setTimeout(function (){
					user_name.value = '';
					user_tel.value = '';
					user_company.value=''
				},100)
			}else{
				alert("请将信息填写完整");
			}
			
	},false)
}


function findOne(){
	var showMsg = document.querySelector('.showMsg'),
		telNumber =document.querySelector(".telNumber"),
		telName = document.querySelector(".telName"),
		findOne = document.querySelector(".findOne"),
		findName = document.querySelector('.findName');

	findOne.addEventListener('click',function (){
		var number = findName.value
		if(number!==''){
			obj = JSON.parse(store.getItem(number));
			if(obj){
				showMsg.style.display ='block';
				telNumber.innerText = number;
				telName.innerText = obj.name_value
			}else{
				alert("查无此人");
			}
			
		}else{
			alert("电话号码不能为空");
		}
	
	},false)

	findName.addEventListener('focus',function(){
		showMsg.style.display = 'none'
	},false)
}

function showMsg(){
	var tbody = document.querySelector("tbody"),
		showBtn = document.querySelector(".showBtn"),
		str = '',
		obj = null,
		key = '';
	showBtn.addEventListener("click",function (){
		var len = store.length;
		if(len>0){
			for(var i=0;i<store.length;i++){
			key = store.key(i);//获取第i个数据的key
			// localStorage存取的值的顺序是最后添加的key在最前面
			// console.log(key);
			obj = JSON.parse(store.getItem(key))
			str +=`<tr><td>${obj.name_value}</td><td>${obj.tel_value}</td><td>${obj.company_value}</td></tr>`
			// console.log(str);
			tbody.innerHTML = str;
			}
			str = ''
		}else{
			alert("请先创建联系人");
		}
		
	},false)
	
}

function hidden(){
	var hiddenBtn = document.querySelector('.hiddenBtn'),
		tbody = document.querySelector("tbody");
	hiddenBtn.addEventListener('click',function (){
		tbody.innerHTML = ''
	})
}
save()	
findOne()
showMsg()
hidden()