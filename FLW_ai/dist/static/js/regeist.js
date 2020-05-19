if(typeof String.prototype.trim !== 'function') {
	String.prototype.trim = function() {
		return this.replace(/^\s+|\s+$/g, ''); 
	}
}

/*function name_check() {
	//檢查姓名
	removeNonStr("#name");
	var name = $('#name').val().trim();
	
	var Errors = [];
	if(name.length == 0) 
		Errors.push("不能為空");
	if(name.length < 2) 
		Errors.push("長度太短");
	if ($("#name")[0].setCustomValidity) {
		if (Errors.length > 0) 
			$("#name")[0].setCustomValidity(Errors.join('\n'));
		else 
			$("#name")[0].setCustomValidity('');
	}else {
		if (Errors.length > 0) 
			$($("#name")[0]).prop('error',Errors.join('\n'));
		else 
			$($("#name")[0]).removeProp();
	}
	
}*/
function password_check() {
	//密碼檢查1
	removeNonStr('#password');
	var val = $('#password').val().trim();
	var Errors = [];
	if(val.length == 0) 
		Errors.push("不能為空");
	if(val.length < 2) 
		Errors.push("長度太短");
	if ($("#password")[0].setCustomValidity) { 
		if (Errors.length > 0) 
			$("#password")[0].setCustomValidity(Errors.join('\n'));
		else 
			$("#password")[0].setCustomValidity('');
	} else {
		if (Errors.length > 0) 
			$($("#password")[0]).prop('error',Errors.join('\n'));
		else 
			$($("#password")[0]).removeProp();
	}
	
}
function password2_check() {
	//密碼檢查2
	removeNonStr('#password2');
	var val = $('#password2').val().trim();
	var val2 = $('#password').val().trim();
	var Errors = [];
	if(val.length == 0) 
		Errors.push("不能為空");
	if(val.length < 2) 
		Errors.push("長度太短");
	if(val != val2)
		Errors.push("兩次密碼不一致");
	if ($("#password2")[0].setCustomValidity) {
		if (Errors.length > 0) 
			$("#password2")[0].setCustomValidity(Errors.join('\n'));
		else 
			$("#password2")[0].setCustomValidity('');
	} else {
		if (Errors.length > 0) 
			$($("#password2")[0]).prop('error',Errors.join('\n'));
		else 
			$($("#password2")[0]).removeProp();
	}
	
}
function birthdate_check() {
	var Errors = [];
	if (msie) {
		//IE瀏覽器
		removeNonNumber('#birthday');
		var val = $('#birthday').val().trim();
		if(val.length != 8)
			Errors.push("沒有8碼");
		var datestr = val.substring(0,4)+'-'+val.substring(4,6)+'-'+val.substring(6);
		var date_value = Date.parse(datestr);
		if(isNaN(date_value)) 
			Errors.push("輸入錯誤日期");
		
		
	}else {
		var val = $('#birthday').val().trim();
		var date_value = Date.parse(val);
		if(isNaN(date_value)) 
			Errors.push("輸入錯誤日期");
		
	}
	if ($("#birthday")[0].setCustomValidity) {
		if (Errors.length > 0) 
			$("#birthday")[0].setCustomValidity(Errors.join('\n'));
		else 
			$("#birthday")[0].setCustomValidity('');
	} else {
		if (Errors.length > 0) 
			$($("#birthday")[0]).prop('error',Errors.join('\n'));
		else 
			$($("#birthday")[0]).removeProp();
	}
}
function isValidDate(d) {
	return d instanceof Date && !isNaN(d);
}

function removeNonNumber(elementID) {
	//移除非數字
	var val = $(elementID).val()
	var newval = val.replace(/(\D+)/,'');
	if(val != newval) 
		$(elementID).val(newval);
	
}

function removeNonStr(elementID) {
	//移除非有效字元A-Za-z0-9_
	var val = $(elementID).val();
	var newval = val.replace(/([^\w\-]+)/,'');
	if(val != newval) 
		$(elementID).val(newval);
}
function signup_click() {
	
	var name = $('#name').val().trim();
	var sex;
	for (i=0;i<document.getElementsByName("data[radio]").length;i++){ 
		if(document.getElementsByName("data[radio]")[i].checked) {
			sex=document.getElementsByName("data[radio]")[i].value;
		}
	}
	var index=document.getElementById("city").selectedIndex;
	var city=document.getElementById("city").options[index].value;
	index=document.getElementById("area").selectedIndex;
	var _area=document.getElementById("area").options[index].value;
	index=document.getElementById("sltjob").selectedIndex;
	var job=document.getElementById("sltjob").options[index].value;
	if(job=="1" || job=="2"){
		index=document.getElementById("sltcourse").selectedIndex;
		var course=document.getElementById("sltcourse").options[index].value;
		if(course=="1" || course=="2" || course=="3"){
			index=document.getElementById("sltgrade").selectedIndex;
			var grade=document.getElementById("sltgrade").options[index].value;
			index=document.getElementById("school_title_2").selectedIndex;
			var school_title=document.getElementById("school_title_2").options[index].value;
			index=document.getElementById("subject_title_2").selectedIndex;
			var subject_title=document.getElementById("subject_title_2").options[index].value;
		}
		else{
			index=document.getElementById("sltgrade_1").selectedIndex;
			var grade=document.getElementById("sltgrade_1").options[index].value;
			index=document.getElementById("school_title_1").selectedIndex;
			var school_title=document.getElementById("school_title_1").options[index].value;
			index=document.getElementById("subject_title_1").selectedIndex;
			var subject_title=document.getElementById("subject_title_1").options[index].value;
		}
		var industry="";
	}
	else{
		var course="";
		var grade="";
		var school_title="";
		var subject_title="";
		index=document.getElementById("sltindustry").selectedIndex;
		var industry=document.getElementById("sltindustry").options[index].value;
	}
	var email = $('#email').val().trim();
	var birthday = $('#birthday').val().trim();
	var PostBody = {};
    var _href = window.location.href;
    var href_split = _href.split("&");
    var token = href_split[0].split("=")[1];
    var userid = href_split[1].split("=")[1];
    
	PostBody['FBToken'] = token;
	PostBody['FBUserID'] = userid;
	PostBody['Name'] = name ;
	PostBody['Sex'] = sex;
	PostBody['City'] = city;
	PostBody['Area'] = _area;
	PostBody['Job'] = job;
	PostBody['Course'] = course;
	PostBody['Grade'] = grade;
	PostBody['SchoolTitle'] = school_title;
	PostBody['SubjectTitle'] = subject_title;
	PostBody['Industry'] = industry;
	if (birthday.length == 8) {
		birthday = birthday.substring(0,4)+'-'+birthday.substring(4,6)+'-'+birthday.substring(6)
		PostBody['Birthday'] = birthday;
	}else 
		PostBody['Birthday'] = birthday;
	if (email.length > 0) 
		PostBody['Email'] = email;

    console.log(PostBody);
		
    $.ajax({
      dataType: "json",
      data:JSON.stringify (PostBody),
      type: "POST",
      url: "/textbook/interactive/auth/regeist",
      contentType: "application/json"
    }).done(function(data) {
      //alert(data['message']);
      $( "#dialog p" ).text(data['message']);
      $( "#dialog" ).show();
      window.location.href = "/textbook/interactive";
    });
}

function email_check() {
	var email = $('#email').val();
	
	$.ajax({
		dataType: "json",
		data:JSON.stringify ({"Email":email}),
		type: "POST",
		//url: "http://192.168.56.102:5000/ReportInfo/CheckWorkerIdIsAvile",
		url: "../api/ReportInfo/CheckWorkerIdIsAvile",
		contentType: "application/json"
		
		}).done(function(data ) {
			if(data['result'] == 'Fail') {
				if($("#workerid")[0].setCustomValidity) 
					$("#workerid")[0].setCustomValidity(data['message']);
				else 
					alert(data['message']);
			}
			else {
				if($("#workerid")[0].setCustomValidity) 
					$("#workerid")[0].setCustomValidity('');
			}
			
		});
}

function loaded() {
	//$('#workerid').keyup(workerid_check);
	//$('#name').focusout(name_check);
	//$('#password').keyup(password_check);
	//$('#password').keyup(password2_check);
	//$('#password2').keyup(password_check);
	//$('#password2').keyup(password2_check);
	$('#birthday').keyup(birthdate_check);
	
	$('#Signup').click(signup_click);
	

}
var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");
$( document ).ready(loaded);
