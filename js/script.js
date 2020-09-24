window.onload = init;

// button.onclick = handleButtonClick;

// var button = getElementById("CreateText");

function init(){
    var button = document.getElementById("CreateText")
    button.onclick = handleButtonClick;

    var button_01 = document.getElementById("ChangeVar")
    button_01.onclick = handleButtonClick_01;
}

function handleButtonClick() {

	// var div = document.createElement("div");
	// div.id = "my-div";
	// div.innerHTML = "Some text with <b>bold text</b>";
	// // var text = document.createTextNode("Some text");
	// // div1.appendChild(text);

	var my_text_01 = "Жили-были {var1} да {var2}Была у них {var3} <br>"
	var my_text_02 = "Снесла {var3} {var4}, не простое - золотое- <br>"
	var my_text_03 = "{var1} бил, бил - не разбил- {var2} била, била - не разбила <br>"
	var my_text_04 = "{var5} бежала, {var6} задела, {var4} упало и разбилось. <br>"
	var my_text_05 = "{var1} плачет, {var2} плачет, а {var3} кудахчет:{speach} <br>"


	var div_01  =  document.getElementById("my_div_01");
	div_01.innerHTML = my_text_01 + my_text_02 + my_text_03 + my_text_04+ my_text_05;
}


function handleButtonClick_01() {

	var text_var = document.getElementById("var1");
	var text_var_1 = text_var.value;

	var text_var = document.getElementById("var2");
	var text_var_2 = text_var.value;

	var text_var = document.getElementById("var3");
	var text_var_3 = text_var.value;

	var text_var = document.getElementById("var4");
	var text_var_4 = text_var.value;

	var text_var = document.getElementById("var5");
	var text_var_5 = text_var.value;

	var text_var = document.getElementById("var6");
	var text_var_6 = text_var.value;

	var text_var = document.getElementById("speach1");
	var text_var_7 = text_var.value;

	var my_text_01 = "Жили-были " + text_var_1 + " да " + text_var_2 + " Была у них " + text_var_3 + "<br>"
	var my_text_02 = "Снесла " + text_var_3 + " " + text_var_4 + " , не простое - золотое- <br>"
	var my_text_03 = text_var_1 + " бил, бил - не разбил- " + text_var_2 + " била, била - не разбила <br>"
	var my_text_04 = text_var_5 + " бежала, " + text_var_6 + " задела, " + text_var_4 + " упало и разбилось. <br>"
	var my_text_05 = text_var_1 + " плачет, " + text_var_2 + " плачет, а " + text_var_3 + " кудахчет: " + text_var_7 + " <br>"


	var div_01  =  document.getElementById("my_div_01");
	div_01.innerHTML = my_text_01 + my_text_02 + my_text_03 + my_text_04+ my_text_05;

	// vText = "qqq_qqq";
 //    alert(vText);
}