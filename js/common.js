// JavaScript Document

//通过class选取元素
function getByclass(oParent,sClass)
{
	var aResult=[];
	var aEle=document.getElementsByTagName('*');
	for(var i=0; i<aEle.length; i++)
	{
		if(aEle[i].className==sClass)
		{
			aResult.push(aEle[i]);
		}
	};
	return aResult;
};



var oDivCueMove=document.getElementById('div_cue_move');
var oDivCue=document.getElementById('div_cue');

//框拖拽
oDivCueMove.onmousedown=oDivCueMoveSy;
//通用框架移动效果
function oDivCueMoveCommon(ev)
{
	
	var oEvent=ev||event;
	var disX=oEvent.clientX-oDivCue.offsetLeft;
	var disY=oEvent.clientY-oDivCue.offsetTop;
	var oDivCueDiv=document.createElement('div');
	oDivCueDiv.className='div_cue_div';
	oDivCueDiv.style.left=oDivCue.offsetLeft+'px';
	oDivCueDiv.style.top=oDivCue.offsetTop+'px';
	
	oDivCueDiv.style.width=oDivCue.offsetWidth+'px';
	oDivCueDiv.style.height=oDivCue.offsetHeight+'px';
	document.body.appendChild(oDivCueDiv);
	document.onmousemove=function(ev)
	{
		var oEvent=ev||event;
		var l=oEvent.clientX-disX;
		var t=oEvent.clientY-disY
		
		if(l<0)
		{
			l=0;	
		}
		else if(l>document.documentElement.clientWidth-oDivCue.offsetWidth)
		{
			l=document.documentElement.clientWidth-oDivCue.offsetWidth;	
		}
		
		if(t<0)
		{
			t=0;	
		}
		else if(t>document.documentElement.clientHeight-oDivCue.offsetHeight)
		{
			t=document.documentElement.clientHeight-oDivCue.offsetHeight;
		}
		
		oDivCueDiv.style.left=l+'px';
		oDivCueDiv.style.top=t+'px';
		
	};
	
	document.onmouseup=function()
	{
		var iTop=oDivCueDiv.offsetTop+96;
		var iLeft=oDivCueDiv.offsetLeft+181;
		toMove(oDivCue,{top:iTop,left:iLeft},8);
		
		document.onmousemove=null;
		document.onmouseup=null;
		document.body.removeChild(oDivCueDiv);	
	};
	return false;
};

//首页移动框架效果
function oDivCueMoveSy(ev)
{
	var oEvent=ev||event;
	var disX=oEvent.clientX-oDivCue.offsetLeft;
	var disY=oEvent.clientY-oDivCue.offsetTop;
	document.onmousemove=function(ev)
	{
		var oEvent=ev||event;
		var l=oEvent.clientX-disX;
		var t=oEvent.clientY-disY
		
		if(l<0)
		{
			l=0;	
		}
		else if(l>document.documentElement.clientWidth-oDivCue.offsetWidth)
		{
			l=document.documentElement.clientWidth-oDivCue.offsetWidth;	
		}
		
		if(t<0)
		{
			t=0;	
		}
		else if(t>document.documentElement.clientHeight-oDivCue.offsetHeight)
		{
			t=document.documentElement.clientHeight-oDivCue.offsetHeight;
		}
		
		oDivCue.style.left=l+181+'px';
		oDivCue.style.top=t+96+'px';
		
	};
	
	document.onmouseup=function()
	{
		document.onmousemove=null;
		document.onmouseup=null;
			
	};
	return false;
};

//X关闭
var oSpanClose=document.getElementById('div_cue_close');
var oDivCueBg=document.getElementById('div_cue_bg');
oSpanClose.onmouseover=function()
{
	oDivCueBg.style.display='block';
	toMove(oSpanClose,{opacity:100},4);
};
oSpanClose.onmouseout=function()
{
	toMove(this,{opacity:60},4);
};


oSpanClose.onclick=function()
{
	cue_colse();
};

function cue_colse()
{
//判断chrome内核的浏览器版本；
//alert(browser+'__'+version)
	if(browser=='chrome')
	{
		version=parseInt(version);
		if(version<40)
		{
			closeDivDown();
		}
		else
		{
			closeDivUp();
		}
	}
	else
	{
		closeDivUp();
	}
};

	
//div_cue两种消失的方式；
function closeDivDown()
{
	toMove(oDivCueBg,{opacity:0},8);
		oDivCueBg.style.display='none';
		oDivCue.style.display='none';
	toMove(oDivCue,{opacity:0},8);
		
	//document.oncontextmenu=null;
};


function closeDivUp()
	{
		toMove(oDivCueBg,{opacity:0},8,function(){
			oDivCueBg.style.display='none';
			});
		toMove(oDivCue,{opacity:0},8,function(){
			oDivCue.style.display='none';
			});
			
		//document.oncontextmenu=null;
		
	};
	
	
//验证firends

function provingFriends(url,where)
{
	var oFriends=document.getElementById('friends');
	var oBtnSuccess=document.getElementById('btn_success');
	var oBtnDanger=document.getElementById('btn_danger');
	var oBtnSuc=document.getElementById('btn_sus');
	var oBtnDan=document.getElementById('btn_dag');
	var oLiInner=document.getElementById('div_cue_inner').getElementsByTagName('ul')[0].getElementsByTagName('li')[0];
	oLiInner.innerHTML='请输入我初中、高中、大学所在班级：<br><input type="text" class="value_text" autofocus placeholder="×××班">'
	oBtnDan.innerHTML='取消';
	oBtnSuc.innerHTML='确定';
	var oInputFri=getByclass(document.body,'value_text')[0];
	oBtnSuccess.onclick=function()
	{
		rel_friend();
	}
	oBtnDanger.onclick=function()
	{
		cue_colse();	
	}
	oDivCue.style.display='block';
	toMove(oDivCue,{opacity:100},8);
	oDivCueBg.style.display='block';
	toMove(oDivCueBg,{opacity:50},8);
	
	
	function rel_friend()
	{
		ajax(where+new Date().getTime(),function(values){
			var  arrs=eval(values);
			if(oInputFri.value==arrs[0]||oInputFri.value==arrs[1]||oInputFri.value==arrs[2]||oInputFri.value==arrs[3]||oInputFri.value==arrs[4])
			{
				cue_colse();
				function opens(){
				window.open(url,"_self");
				return false;
				}
				opens();
			}
			else
			{
				oLiInner.innerHTML='抱歉您的输入有误，您不能浏览此网页！'
				oBtnSuc.innerHTML='重新输入'
				oInputFri.value='';
				var oPrevious=oBtnSuccess.getElementsByTagName('span')[0];
				oPrevious.className='glyphicon glyphicon-arrow-left';
				oBtnSuccess.onclick=function()
				{
						oLiInner.innerHTML='请输入我初中、高中、大学所在班级：<br><input type="text" class="value_text" autofocus placeholder="×××班">'
						oBtnDan.innerHTML='取消';
						oBtnSuc.innerHTML='确定';
						oPrevious.className='glyphicon glyphicon-ok';
						oBtnSuccess.onclick=function()
						{
						 	rel_friend();
						}
						

				};
				oBtnDanger.onclick=function()
				{
					cue_colse();
				};
			}
			
			},function(str2){
			oLiInner.innerHTML='您读取的文件不存在!'+str2;
				oBtnSuccess.onclick=oBtnDanger.onclick=function()
				{
					cue_colse();
				}
			})
	}
	
};



//rel family

function provingFamily(url,where)
{
	var oFamily=document.getElementById('family');
	var oBtnSuccess=document.getElementById('btn_success');
	var oBtnDanger=document.getElementById('btn_danger');
	var oBtnSuc=document.getElementById('btn_sus');
	var oBtnDan=document.getElementById('btn_dag');
	var oLiInner=document.getElementById('div_cue_inner').getElementsByTagName('ul')[0].getElementsByTagName('li')[0];
	oLiInner.innerHTML='请输入我父亲的姓名：<br><input type="text" class="value_text" autofocus placeholder="×××">'
	oBtnDan.innerHTML='取消';
	oBtnSuc.innerHTML='确定';
	var oInputFri=getByclass(document.body,'value_text')[0];
	oBtnSuccess.onclick=rel_family;
	oBtnDanger.onclick=function()
	{
		cue_colse();
	}
	oDivCue.style.display='block';
	toMove(oDivCue,{opacity:100},8);
	oDivCueBg.style.display='block';
	toMove(oDivCueBg,{opacity:50},8);
	
	
	function rel_family()
	{
		ajax(where+new Date().getTime(),function(values){
			var  arrs=eval(values);
			if(oInputFri.value==arrs[0])
			{
				cue_colse();
				function opens(){
				window.open(url,"_self");
				return false;
				}
				opens();
			}
			else
			{
				oLiInner.innerHTML='抱歉您的输入有误，您不能浏览此网页！'
				oBtnSuc.innerHTML='重新输入'
				oInputFri.value='';
				var oPrevious=oBtnSuccess.getElementsByTagName('span')[0];
				oPrevious.className='glyphicon glyphicon-arrow-left';
				oBtnSuccess.onclick=function()
				{
						oLiInner.innerHTML='请输入我父亲的姓名：<br><input type="text" class="value_text" autofocus  placeholder="×××">'
						oBtnDan.innerHTML='取消';
						oBtnSuc.innerHTML='确定';
						oPrevious.className='glyphicon glyphicon-ok';
						oBtnSuccess.onclick=function()
						{
						 	rel_family();
						}
						

				};
				oBtnDanger.onclick=function()
				{
					cue_colse();
				};
			}
			
			},function(str2){
			oLiInner.innerHTML='您读取的文件不存在!'+str2;
				oBtnSuccess.onclick=oBtnDanger.onclick=function()
				{
					cue_colse();
				}
			})
	}
	
};