var JSMoudle=JSMoudle||{};//模块名称
//隐藏序列帧模块
let hideBoxFPS=function(){$("#FpsmMainBox").hide();}
//显示序列帧模块
let showBoxFPS=function(){$("#FpsmMainBox").show();}		
//隐藏不可拖拽序列帧
let hideStaticFPS=function(){$("#mpic2").hide();}
//显示不可拖拽序列帧
let showStaticFPS=function(){$("#mpic2").show();}		
//隐藏可拖拽序列帧
let hideTouchFPS=function(){$("#containerPic").hide();}
//显示可拖拽序列帧
let showTouchFPS=function(){$("#containerPic").show();}			
//启动序列帧模块	
//隐藏所有控制按钮
function hideAllBtn(){$("#ButtonList").hide();JSMoudle.removeStyle();$("#clickHat").hide();}
//显示楼层控制按钮
function showAllBtn(){$("#ButtonList").show();JSMoudle.PlayOneFps();$("#clickHat").hide();}	
JSMoudle.counts = 1;
JSMoudle.myanime;
JSMoudle.imgbox = [];
JSMoudle.imgNum = 129;
JSMoudle.imgCount = 0;
JSMoudle.btpic = [];
JSMoudle.gygfPic = [];
JSMoudle.gygfPic1=[];
JSMoudle.gygfPic2 = [];
JSMoudle.gygfPic3 = [];
JSMoudle.gygfPic4 = [];
JSMoudle.gygfPic5 = [];
JSMoudle.P1=null;
JSMoudle.instanceFPS=null;
JSMoudle.ClickLabelDatas=[
	//第一层
	// {"floortype":1,"name":"法国高等理事会","px":545,"py":129,"labelw":187,"labelh":96,"panoUrl":"","id":0},
	// {"floortype":1,"name":"国际公证联盟","px":365,"py":224,"labelw":220,"labelh":74,"panoUrl":"","id":1},
	// {"floortype":1,"name":"一带一路公证联盟","px":715,"py":219,"labelw":209,"labelh":76,"panoUrl":"","id":2},
	// {"floortype":1,"name":"天府法务门户网站","px":670,"py":393,"labelw":222,"labelh":83,"panoUrl":"","id":3},
	// {"floortype":1,"name":"自助服务区","px":670,"py":393,"labelw":222,"labelh":83,"panoUrl":"","id":4},
	// {"floortype":1,"name":"公共法律服务中心","px":232,"py":705,"labelw":210,"labelh":76,"panoUrl":"","id":5},
	{"floortype":1,"name":"一楼展厅","px":730,"py":535,"labelw":200,"labelh":60,"panoUrl":"./panos.html?type=07","id":19},
	//第二层
	// {"floortype":2,"name":"省知识产权促进中心","px":740,"py":373,"labelw":230,"labelh":71,"panoUrl":"","id":6},
	// {"floortype":2,"name":"法院系统","px":77,"py":440,"labelw":239,"labelh":74,"panoUrl":"","id":7},
	// {"floortype":2,"name":"企业融合服务窗口","px":454,"py":457,"labelw":237,"labelh":84,"panoUrl":"","id":8},
	// {"floortype":2,"name":"公安系统","px":106,"py":600,"labelw":240,"labelh":74,"panoUrl":"","id":9},
	// {"floortype":2,"name":"天府中央法务区检察服务中心","px":742,"py":586,"labelw":245,"labelh":84,"panoUrl":"","id":10},
	//第三层
	{"floortype":3,"name":"北京通商(成都)律师事务所","px":443,"py":345,"labelw":234,"labelh":61,"panoUrl":"./panos.html?type=06","id":11},
	{"floortype":3,"name":"成都仲裁委","px":838,"py":346,"labelw":217,"labelh":63,"panoUrl":"./panos.html?type=01","id":12},
	{"floortype":3,"name":"泰和泰律师事务所","px":596,"py":449,"labelw":218,"labelh":60,"panoUrl":"./panos.html?type=05","id":13},
	{"floortype":3,"name":"四川矩衡律师事务所","px":897,"py":520,"labelw":210,"labelh":62,"panoUrl":"./panos.html?type=02","id":14},
	{"floortype":3,"name":"一带一路商事调解中心","px":454,"py":656,"labelw":220,"labelh":62,"panoUrl":"./panos.html?type=03","id":15},
	{"floortype":3,"name":"四川基因格司法鉴定中心","px":842,"py":649,"labelw":220,"labelh":62,"panoUrl":"./panos.html?type=04","id":16},
	//第四层
	// {"floortype":4,"name":"四川联通办公室","px":478,"py":109,"labelw":212,"labelh":89,"panoUrl":"","id":17},
	// {"floortype":4,"name":"办公室","px":970,"py":284,"labelw":225,"labelh":93,"panoUrl":"","id":18}
]
    /**
     * 
     * date:-2021-3-5
     * author:baiyu
     * create fps animation
     * 注释：iframe框
     */
JSMoudle.iFrameItem=function(FloorType,ConfigXml,DomObj,iSshow,PanoUrl,Title,callback){
	'use strict';
	var _this=this;
	this.FloorType=FloorType;//楼层类型
	this.ConfigXml=ConfigXml;//配置文件
	this.DomObj=DomObj;//div对象
	this.iSshow=iSshow;//是否显示
	this.PanoUrl=PanoUrl;//全景地址
	this.Title=Title;//标题
	this.Methond=function(){
		
	}
}	
/**
 * 
 * date:-2021-3-2
 * author:baiyu
 * 注释：设置div属性并加载到clickhant下
 */
JSMoudle.ableClickLabel=function(/*FloorType,name,px,py*/items){	
	let thisdom=document.createElement("div");
	let parentbody=$("#clickHat");
	let clickhantHeight=937;
	let rotes=parentbody.height()/clickhantHeight;//偏移值比率

	$(thisdom).className="hatitems";
	$(thisdom).title=items.name;
	$(thisdom).addClass("hatitems");
	$(thisdom).attr("data-id",items.id);
	$(thisdom).attr("title",items.name);
	$(thisdom).attr("data-url",items.panoUrl);
	$(thisdom).css("position","absolute");
	$(thisdom).css("left",items.px*rotes);
	$(thisdom).css("top",items.py*rotes);
	$(thisdom).css("width",items.labelw*rotes);
	$(thisdom).css("height",items.labelh*rotes);
	parentbody.append($(thisdom));
}

/**
 * 
 * date:-2021-3-2
 * author:baiyu
 * 注释：筛选同类型的标牌信息
 */
JSMoudle.EachControl=function(Element,type){
	for(var i=0;i<Element.length;i++){
		if(Element[i].floortype==type){
			JSMoudle.ableClickLabel(Element[i]);
		}		
	}
}

JSMoudle.HotPoint=function(){
	$(".hatitems").html("<div class='hotpoint_pano'></div>");
}
/**
 * 
 * date:-2021-3-2
 * author:baiyu
 * 注释：设置遮罩盖子的宽高和偏移位置
 */
JSMoudle.setHat=function(floortype){
	floortype?floortype:console.log("缺少楼层参数！");
	let domobj=$("#clickHat");
	let pfspic=$("#mpic2");
	domobj.width(pfspic.width());
	domobj.height(pfspic.height());
	domobj.css("left",pfspic.offset().left);
	domobj.css("top",0);
	switch(floortype){
		case 1:$("#clickHat").empty();JSMoudle.EachControl(JSMoudle.ClickLabelDatas,1);JSMoudle.bindEventclick();break;
		case 2:$("#clickHat").empty();JSMoudle.EachControl(JSMoudle.ClickLabelDatas,2);JSMoudle.bindEventclick();break;
		case 3:$("#clickHat").empty();JSMoudle.EachControl(JSMoudle.ClickLabelDatas,3);JSMoudle.bindEventclick();break;
		case 4:$("#clickHat").empty();JSMoudle.EachControl(JSMoudle.ClickLabelDatas,4);JSMoudle.bindEventclick();break;
		default:break;
	}
}
JSMoudle.bindEventclick=function(){
	JSMoudle.HotPoint();
	$(".hatitems").bind("click",function(){
		let ids= $(this).data("id");
		$("#mainIframe").attr("src",$(this).data("url"));
		$(".pano_titles").html($(this).attr("title"));
		$("#iframeBox").show(500);
		$("#ButtonList").hide();
		})
}
    /**
     * 1
     * date:-2021-2-2
     * author:baiyu
     * create fps animation
     * 注释：创建一个序列帧动画,构造函数
     */
JSMoudle.AnimationFps = function(name, imgobj, imgurl, speed, count, px, py, file, prefix, step,callback2,callback3,loop) {
    'use strict';
    var _this = this;
    this.name = name;//动画序列帧名称
    this.imgobj = imgobj;//序列帧图片
    this.imgobj.src = imgurl;//图片地址
    this.speed = speed;//播放速度
    this.count = count;//序列帧图片总数
	this.file=file;//图片所在文件
	this.prefix=prefix;//图片前缀名
    this.px = px;//
    this.py = py;//
	this.loop=loop;//是否循环播放
    this.fps = function() {
        function animes(time) {
			var IsLoop=_this.loop ? _this.loop : false;
            var pr = _this.prefix ? _this.prefix : ''
            if (JSMoudle.counts <_this.count) {
                JSMoudle.myanime = requestAnimationFrame(animes)
                JSMoudle.counts +=step;
                var nowid = parseInt(JSMoudle.counts);
                _this.imgobj[nowid].src = './' + _this.file + '/' + pr + parseInt(JSMoudle.counts) + '.png'
				if(_this.imgobj[nowid].src==undefined){
					return;
				}
                _this.imgobj[nowid].onload = function() {
                    $("#mpic2").attr("src", './' + _this.file + '/' + pr + parseInt(JSMoudle.counts) + '.png');
                }
            }
            if (parseInt(JSMoudle.counts) == _this.count) {
				if(IsLoop){
					JSMoudle.counts=1;
				}else{
					JSMoudle.counts = JSMoudle.counts
					cancelAnimationFrame(JSMoudle.myanime); //关闭后动画不再重复执行
					console.log("序列帧：" + _this.name + "加载完成!");
					callback2?callback2():function(){};
					callback3?callback3():function(){};
				}
            }
        }
        animes();
    }
}
/**
 * 3
 * date:-2021-2-2
 * author:baiyu
 * on init scene
 * 注释：判断图片是否加载完成
 */
JSMoudle.PicLoadComplete=function() {
    JSMoudle.imgCount++;
    if (JSMoudle.imgNum == JSMoudle.imgCount) {
        $("#fingerprint").fadeIn(800);
    }
}
/**
 * 4
 * date:-2021-2-2
 * author:baiyu
 * on init scene
 * 注释：预加载图片
 */
JSMoudle.CreateImg = function(ImgArry, url, prName, count, func) {
    let arrs = ImgArry ? ImgArry : []; //图片数组
    let imgurl = url ? url : "./"; //根地址
    let prevName = prName ? prName : ""; //图片前缀名称
    let Allcount = count ? count : ""; //总数
    let callback = func ? func : function() {}; //加载完成回调函数
    let i = 0;
    for (i; i <= Allcount; i++) {
        arrs[i] = new Image();
        arrs[i].src = imgurl + "/" + prevName + i + ".png";
        arrs[i].onload = function() {
            JSMoudle.PicLoadComplete();
        }
    }
    callback();
}
/**
 * *
 * date:2021-3-23
 * author:baiyu
 * 注释：可拖拽序列构造器
 * */
 JSMoudle.touchFps=function(DomName,PicArr,loop,isMouseDown,jq,step,counts,speed){
		let _this=this;
		this.DomName=document.getElementById(DomName);//获取组件DOM ID名称
		this.PicArr=PicArr;//序列帧图片
		this.loop=loop;//
		this.isMouseDown=false;//鼠标是否按下判断
		this.startX=0;//默认鼠标X起始位置
		this.picNum=0;//显示的图片名称
		this.speed=speed;//拖拽旋转速度
		this.step=step;//鼠标拖拽步长
		this.counts=counts;//总共的图片数量
		this.Init=function(){
			//初始化序列帧到第一张
			// let picIMG="<img class='item-pic item-pic-active' src='./InitIMG/XH_0.png' width='100%' height='100%'/>";
			// for(var i=0;i<this.PicArr.length;i++){
			// 	picIMG=picIMG+"<img class='item-pic' src='"+this.PicArr[i]+"' width='100%' height='100%'/>"; 
			// }
			// this.DomName.innerHTML=picIMG;
			this.startX=0;
			this.picNum=0;
			jq("#itemPic").attr("src","./InitIMG/XH_0.png");
		}
		jq(this.DomName).mousedown(function(e){
			_this.isMouseDown=true;
			_this.startX=e.clientX;
			//console.log(_this.startX);
		})
		jq(this.DomName).mousemove(function(event){
			if(_this.isMouseDown){
				if(event.clientX>_this.startX){	
					//正向
					if(event.clientX-_this.startX>0){						
						_this.picNum=_this.picNum+_this.speed;
						if(parseInt(_this.picNum)<56){
							//console.log(parseInt(_this.picNum));
							jq("#itemPic").attr("src","./InitIMG/XH_"+parseInt(_this.picNum)+".png")
							_this.startX=event.clientX;
						}else{
							_this.picNum=0
						}						
					}
				}else{
					//反向
					if(event.clientX-_this.startX<0){
						_this.picNum=_this.picNum-_this.speed;
						if(parseInt(_this.picNum)>0){
							//console.log(parseInt(_this.picNum));
							jq("#itemPic").attr("src","./InitIMG/XH_"+parseInt(_this.picNum)+".png");
							_this.startX=event.clientX;
						}else{
							_this.picNum=56
						}						
					}
				}				
			}
		})
		jq(this.DomName).mouseup(function(e){
			_this.isMouseDown=false;
		})		
	}
//预加载所有图片
JSMoudle.CreateImg(JSMoudle.gygfPic1, "./InitIMG", "XH_", 56);
JSMoudle.CreateImg(JSMoudle.gygfPic2, "./F1", "F1_", 34);
JSMoudle.CreateImg(JSMoudle.gygfPic3, "./F2", "F2_", 34);
JSMoudle.CreateImg(JSMoudle.gygfPic4, "./F3", "F3_", 33);
JSMoudle.CreateImg(JSMoudle.gygfPic5, "./F4", "F4_", 33);

//拖拽动画部分
JSMoudle.instanceFPS=new JSMoudle.touchFps('containerPic',JSMoudle.gygfPic1,true,false,$,4,56,0.2);

/**
 * 
 * date:-2021-2-2
 * author:baiyu
 * on init scene
 * 注释：当初始化程序，播放法务区楼宇第一套序列帧
 */
JSMoudle.PlayOneFps = function() {
	hideTouchFPS();
	showBoxFPS();
	showStaticFPS();
    JSMoudle.counts = 1;
    cancelAnimationFrame(JSMoudle.myanime);
    JSMoudle.P1= new JSMoudle.AnimationFps("xh", JSMoudle.gygfPic1, "./InitIMG/XH_1.png", 68, 56, 0, 0, "InitIMG", "XH_", 0.2,function(){
		//hideStaticFPS();
		//$threeSixty.reStart();
		showTouchFPS();
	},function(){},true);
    JSMoudle.P1.fps();
	$(".home3").addClass("active");	
}
//显示群楼可拖拽序列帧
JSMoudle.RoundFps=function(){
	$(".hatitems").empty();
	$("#clickHat").hide();
	JSMoudle.instanceFPS.Init();
	showBoxFPS();
	hideStaticFPS();
	showTouchFPS();
}
//播放序列帧一楼
JSMoudle.playFPS_P1=function() {
	$("#clickHat").hide();
	showBoxFPS();
	showStaticFPS();
	hideTouchFPS();
    JSMoudle.counts = 0;
    cancelAnimationFrame(JSMoudle.myanime);
    let F1 = new JSMoudle.AnimationFps("F1", JSMoudle.gygfPic2, "./F1/F1_1.png", 68, 34, 0, 0, "F1", "F1_", 0.35,function(){
		$("#clickHat").show();
		JSMoudle.setHat(1);
	},function(){},false);
    F1.fps();
}

//播放序列帧二楼
JSMoudle.playFPS_P2=function() {
	$("#clickHat").hide();
	showBoxFPS();
	showStaticFPS();
	hideTouchFPS();
    JSMoudle.counts = 0;
    cancelAnimationFrame(JSMoudle.myanime);
    let F2 = new JSMoudle.AnimationFps("F2", JSMoudle.gygfPic3, "./F2/F2_1.png", 68, 34, 0, 0, "F2", "F2_", 0.5,function(){
		$("#clickHat").show();
		JSMoudle.setHat(2);
	},function(){},false);
    F2.fps();
}

//播放序列帧三楼
JSMoudle.playFPS_P3=function() {
	$("#clickHat").hide();
	showBoxFPS();
	showStaticFPS();
	hideTouchFPS();
    JSMoudle.counts = 0;
    cancelAnimationFrame(JSMoudle.myanime);
    let F3 = new JSMoudle.AnimationFps("F3", JSMoudle.gygfPic4, "./F3/F3_1.png", 68, 33, 0, 0, "F3", "F3_", 0.5,function(){
		$("#clickHat").show();
		JSMoudle.setHat(3);
	},function(){},false);
    F3.fps();
}

//播放序列帧四楼
JSMoudle.playFPS_P4=function() {
	$("#clickHat").hide();
	showBoxFPS();
	showStaticFPS();
	hideTouchFPS();
    JSMoudle.counts = 0;
    cancelAnimationFrame(JSMoudle.myanime);
    let F4 = new JSMoudle.AnimationFps("F4", JSMoudle.gygfPic5, "./F4/F4_1.png", 68, 33, 0, 0, "F4", "F4_", 0.5,function(){
		$("#clickHat").show();
		JSMoudle.setHat(4);
	},function(){},false);
    F4.fps();
}
JSMoudle.removeStyle=function(){
	$(".btnstyle").removeClass("active")
}
$(".btnstyle").click(function(){
	//$threeSixty.reStart();
	let thisid=$(this).data("id")
	JSMoudle.removeStyle();
	$(this).addClass("active");	
	$("#clickHat").hide();
	switch(thisid){
		case 0:JSMoudle.RoundFps();break;
		case 1:JSMoudle.playFPS_P1();break;
		case 2:JSMoudle.playFPS_P2();break;
		case 3:JSMoudle.playFPS_P3();break;
		case 4:JSMoudle.playFPS_P4();break;
		default:break;
	}
})
$(".pano_close_button").click(function(){
	$("#ButtonList").show();
	$("#iframeBox").hide();
})
