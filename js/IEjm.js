// JavaScript Document
oDivCueMove.onmousedown=oDivCueMoveCommon;
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
		urls("http://rj.baidu.com/soft/detail/14744.html?ald")
}