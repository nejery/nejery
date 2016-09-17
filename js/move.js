// JavaScript Document

//这里是getStyle  提取非行间样式
function getStyle(obj,name)
{
	if(obj.currentStyle)
	{
		return obj.currentStyle[name];
	}
	else
	{
		return getComputedStyle(obj,false)[name];
	}
};



//这里是运动框架
function toMove(obj, json,varrr,fnEnd)
{
	clearInterval(obj.timer)

	obj.timer=setInterval(function(){
		var bStop=true;   //假设全部的东西已经到了；
		
		for(var attr in json)
		{
			var curent=0;
			if(attr=='opacity')
			{
				curent=parseFloat(getStyle(obj,attr))*100;
			}
			else
			{
				curent=Math.round(parseInt(getStyle(obj,attr)));
			};
			var speed=(json[attr]-curent)/varrr;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			
			if(curent!=json[attr])
			{
				bStop=false;
			}
			
			if(attr=='opacity')
			{
				obj.style.filter='alpha(opacity:'+(curent+speed)+')';
				obj.style.opacity=(curent+speed)/100;
				
			}
			else
			{
				obj.style[attr]=curent+speed+'px';
			}
		};
		if(bStop)
		{
			clearInterval(obj.timer);
			if(fnEnd)
			{
				fnEnd()
			}
		};
		
		
		},30);
};

