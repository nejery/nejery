// JavaScript Document
var oBtnSucA=document.getElementById('btn_suc_a');
var oBtnDanA=document.getElementById('btn_dan_a');

function urls(url)
{
	window.open(url,"_self");
	return false;
};

oBtnSucA.onclick=function()
{
		urls("nejery/index.html")
}

oBtnDanA.onclick=function()
{
		window.close();
}