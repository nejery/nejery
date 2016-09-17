// JavaScript Documentvar v
//move Cue style
oDivCueMove.onmousedown=function()
{
	oDivCueMoveSy();
};
//zpxs change
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


var oSec=getByclass(document,'zpxs')[0];
var oSecUl=oSec.getElementsByTagName('ul')[0];
var aSecUlLi=oSecUl.getElementsByTagName('li');
var oSecOl=oSec.getElementsByTagName('ol')[0];
var aSecOlLi=oSecOl.getElementsByTagName('li');
var aSecImg=getByclass(oSecUl,'boxs')
var aSecSpan=oSecUl.getElementsByTagName('span');
var oHeader=getByclass(document.body,'header')[0];
var oBackFlower=getByclass(document.body,'backg_folwer')[0]
var oSwf=getByclass(document.body,'top_left_swf')[0];

var nowZindex=2;

for(var i=0; i<aSecImg.length; i++)
{
	aSecImg[i].till=i;
	aSecImg[i].onmouseover=function()
	{
		toMove(aSecSpan[this.till],{bottom:0,opacity:100},8)
		toMove(this.parentNode,{opacity:100},8);
		this.style.transform='scale(1.1)';		
	}
	
	aSecImg[i].onmouseout=function()
	{
		toMove(aSecSpan[this.till],{bottom:-25,opacity:0},8)
		toMove(this.parentNode,{opacity:80},8);
		this.style.transform='scale(1.0)';		
	}
	
	//点击切换大图
	aSecImg[i].index=i;
	aSecImg[i].onclick=function()
	{
		toMove(oHeader,{opacity:0,top:-280},8,function(){
			oHeader.style.display='none'
			});
		toMove(oBackFlower,{opacity:0,right:-200},8,function(){
			oBackFlower.style.display='none';
			});
		toMove(oSecUl,{opacity:0},8,function(){
			oSecUl.style.display='none';
			});
		toMove(oSwf,{left:-760,opacity:0},8,function(){
			oSwf.style.display='none';
			});
			
		aSecOlLi[this.index].style.zIndex=nowZindex++;
		aSecOlLi[this.index].style.display='block';
		toMove(aSecOlLi[this.index],{opacity:100,top:-180},8,function(){
			document.body.style.background='#000000';
			});
	}
	aSecOlLi[i].onclick=function()
	{
		document.body.style.background='#FFFFF0';	
		toMove(this,{opacity:0},8);
		this.style.display='none';
		
		
		toMove(oSwf,{left:0},8,function(){
			oSwf.style.display='block';
			toMove(oSwf,{opacity:100},8);
			});
		
		oSecUl.style.display='block';
		toMove(oSecUl,{opacity:100},8);
		
		oBackFlower.style.display='block';
		toMove(oBackFlower,{opacity:100,right:0},8);
		
		oHeader.style.display='block';
		toMove(oHeader,{opacity:100, top:0},8);
	}
		

}

window.onload=function()
{
	cue_colse();
}

/*相册验证*/
var oFriends=document.getElementById('friends');
oFriends.onclick=function()
{
	provingFriends('../xc/friends.html','files/dfsdfasfewswefsdfef.txt?=');
};
//验证Family
var oFamily=document.getElementById('family');
oFamily.onclick=function()
{
	
	provingFamily('../xc/family_home.html','files/sdjofrnjsdlkfhlskjdfh.txt?=');
}