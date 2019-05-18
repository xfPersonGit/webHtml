$(function(){
			
				$("#fowardToolPhoto").click(function(){
					//doShot();
				})
				
				$(".importPhotoButton").click(function(){
					$("#importPhotoCur").val("")
					$("#importPhotoCur").trigger("click");
					
				})
				
				$(".hideOrShowPhoto").mousemove(function(){
					$(this).css("background","gainsboro")
				})
				$(".hideOrShowPhoto").mouseout(function(){
					$(this).css("background","darkgray")
				})
				$(".hideOrShowPhoto").click(function(){
					$("#functionNav").hide();
					$("#body").css("width","100%")
				})
				$(".showToolList").click(function(){
					$("#functionNav").show();
					$("#body").css("width","85%")
				})
				
				$(".saveCurPage").click(function(){
					doScreenShot(curIndexBox);
				})
				
				//点击截图
				function doScreenShot(curIndexBox){
				 html2canvas($(".box"), {
				  onrendered: function(canvas) {
				   canvas.id = "mycanvas"; 
				   var mainwh=$(".box>div:eq("+curIndexBox+")").width(); 
				   var mainhg=$(".box>div:eq("+curIndexBox+")").height();
				   var img = convertCanvasToImage(canvas);
				   console.log(img);
				   //document.body.appendChild(img);
				   $("#dw").append(img) 
				   img.onload = function() {
				    img.onload = null;
				    canvas = convertImageToCanvas(img, 0, 0, 1024, 600); //设置图片大小和位置
				    img.src = convertCanvasToImage(canvas).src;
				    $(img).css({
				     background:"#fff" 
				    });
				    //调用下载方法 
				     if(browserIsIe()){ //假如是ie浏览器    
				      DownLoadReportIMG(img.src);
				     }else{
				      download(img.src)
				     }
				    }
				   }    
				 });
				}
				//绘制显示图片 
				function convertCanvasToImage(canvas) {
				 var image = new Image();
				 image.src = canvas.toDataURL("image/png"); //获得图片地址
				 return image;
				}
				//生成canvas元素，相当于做了一个装相片的框架
				function convertImageToCanvas(image, startX, startY, width, height) {
				 var canvas = document.createElement("canvas");
				 canvas.width = width;
				 canvas.height = height;
				 canvas.getContext("2d").drawImage(image, startX, startY, width, height, 20, 20, 960, 600); //在这调整图片中内容的显示（大小,放大缩小,位置等）
				 return canvas;
				}
				 function DownLoadReportIMG(imgPathURL) {
				 //如果隐藏IFRAME不存在，则添加
				 if (!document.getElementById("IframeReportImg"))
				  $('<iframe style="display:none;" id="IframeReportImg" name="IframeReportImg" onload="DoSaveAsIMG();" width="0" height="0" src="about:blank"></iframe>').appendTo("body");
				 if (document.all.IframeReportImg.src != imgPathURL) {
				  //加载图片
				  document.all.IframeReportImg.src = imgPathURL;
				 }
				 else {
				  //图片直接另存为
				  DoSaveAsIMG();
				 }
				}
				function DoSaveAsIMG() {
				 if (document.all.IframeReportImg.src != "about:blank")
				  window.frames["IframeReportImg"].document.execCommand("SaveAs");
				}
				// 另存为图片
				function download(src) {
				 var $a = $("<a></a>").attr("href", src).attr("download", "img.png");
				 $a[0].click();
				}
				//判断是否为ie浏览器
				function browserIsIe() {
				 if (!!window.ActiveXObject || "ActiveXObject" in window)
				  return true;
				 else
				  return false;
				}
				
				var p = 1;
				var curIndexBox;
				$(".importNav").click(function(){
					if(p==1){
						$(".importWay").slideDown();
						$(this).css("border-bottom","1px dashed lightblue")
						$(this).children("a").html("﹀")
						p = 2;
					}else{
						p = 1;
						$(".importWay").slideUp();
						$(this).css("border-bottom","0px dashed lightblue");
						$(this).children("a").html("︿");
					}
				})
				$(".firstPageTo>a:eq(0)").click(function(){
					$(".firstPage").show();
					$(".box>div:not(:first)").hide();
					$(".functionSmallMenu>li:even").css("background","gainsboro")
					$(".functionSmallMenu>li:first").css("background","white")
				})
				$(".firstPageTo>a:eq(1)").click(function(){
					var val = $(".functionSmallMenu>li:eq(2)").html()
					if(val!=""){
						$(".functionSmallMenu>li:eq(2)").css("background","white")
					}
					$(".firstPage").hide();
					$(".firstPageTo").hide();
				})
				var lq = 0;
				$("#showNav").click(function(){
					if(lq==0){
						$(this).html("+");	
						$(".mainMenu>li:not(:first)").slideUp();			
						lq = 1;
					}else{
						lq = 0;
						$(this).html("-");	
						$(".mainMenu>li:not(:first)").slideDown();	
					}
				})
				
				var yu = 0;
				$("#altNav").click(function(){
					if(yu==0){
						yu = 1;
						$("#altNav>a").html("﹀")
						$(".altNavList").slideUp();
					}else{
						yu = 0;
						$("#altNav>a").html("︿")
						$(".altNavList").slideDown();
					}
				})
				
				var u = 0;
				var llp = 0;
				$(".openNew").click(function(){
					u++;
					curIndexBox = u
					if(u>=6){
						if(llp<=0){
							alert("页面新建不得超过5页~")
						}else{
							$(".functionSmallMenu>li:even").css("background","gainsboro")
							var str = "<li style='float: left;font-size: 22px;padding-left: 5px;padding-right: 5px;width: 10px;height: 10px;'></li><li lid = '"+u+"' style='float: left;background: white;border-radius: 15px;width: 180px;height: 30px;line-height: 30px;' title='新建页面"+u+"'><a style='margin-left: 20px;'>新建页面"+u+"</a><span style='margin-left: 50px;cursor: pointer;'>×</span></li>"
							$(".functionSmallMenu").append(str)
							var hideStr = "<div did='"+u+"' style='background:;width:100%;height:100%;margin:0px;padding:0px;display:none'></div>"
							$(".box").append(hideStr)
							var str1 = "";
							$(".box>div").hide();
							$(".box>div:eq("+(u)+")").show()
							llp--;
							
							$(".functionSmallMenu>li:not(:first)>a").click(function(){
								$(".box>div").hide();
								var i = $(this).parent().attr("lid");
								$(".box>div:eq("+(i)+")").show();
								$(".functionSmallMenu>li:even").css("background","gainsboro");
								$(this).parent().css("background","white");
							})
							$(".functionSmallMenu>li:not(:first)>span").click(function(){
								var i = $(this).parent().attr("lid");
								$(".box>div:eq("+(i)+")").hide();
								$(this).parent().hide();
								$(".functionSmallMenu>li:eq("+(i-1)+")").hide();
								var val = $(".functionSmallMenu>li:eq("+(i+2)+")").html()
								var st = $(this).parent().css("background-color");
								if(st!="rgb(220, 220, 220)"){
									if(val!=""){
										$(".functionSmallMenu>li:eq("+(i+2)+")").css("background","white")
										//notFinish
										
									}
								}
								$(this).parent().prev().hide();
							})
							$(document).on('change', '#importPhotoCur', function () { //PictureUrl为input file 的id
					
						        function getObjectURL(file) {
						            var url = null;
						            if (window.createObjcectURL != undefined) {
						                url = window.createOjcectURL(file);
						            } else if (window.URL != undefined) {
						                url = window.URL.createObjectURL(file);
						            } else if (window.webkitURL != undefined) {
						                url = window.webkitURL.createObjectURL(file);
						            }
						            return url;
						        }
						        var objURL = getObjectURL(this.files[0]);
						        var str = "<div style='position:absolute;left:600px;top:300px'><img src= '"+objURL+"' width='200px' height='auto'></div>"
						        if(curIndexBox!=null){
						        	$(".box>div:eq("+curIndexBox+")").append(str)			        
						        }else{
						        	alert("出现未知错误或者是没有新建的页面！")
						        }
						    });
						}
					}else{
						$(".functionSmallMenu>li:even").css("background","gainsboro")
						var str = "<li style='float: left;font-size: 22px;padding-left: 5px;padding-right: 5px;width: 10px;height: 10px;'></li><li lid = '"+u+"' style='float: left;background: white;border-radius: 15px;width: 180px;height: 30px;line-height: 30px;' title='新建页面"+u+"'><a style='margin-left: 20px;'>新建页面"+u+"</a><span style='margin-left: 50px;cursor: pointer;'>×</span></li>"
						$(".functionSmallMenu").append(str)
						var hideStr = "<div did='"+u+"' style='background:;width:100%;height:100%;margin:0px;padding:0px;display:none'></div>"
						$(".box").append(hideStr)
						var str1 = "";
						$(".box>div").hide();
						$(".box>div:eq("+(u)+")").show()
						
						$(".functionSmallMenu>li:not(:first)>a").click(function(){
							$(".box>div").hide();
							var i = $(this).parent().attr("lid");
							$(".box>div:eq("+(i)+")").show();
							$(".functionSmallMenu>li:even").css("background","gainsboro");
							$(this).parent().css("background","white");
							curIndexBox = i;
						})
						$(".functionSmallMenu>li:not(:first)>span").click(function(){
							var i = $(this).parent().attr("lid");
							$(".box>div:eq("+(i)+")").hide();
							$(this).parent().hide();
							$(this).parent().prev().hide();
							var val = $(".functionSmallMenu>li:eq("+(i+2)+")").html()
							var st = $(this).parent().css("background-color");
							if(st!="rgb(220, 220, 220)"){
								if(val!=""){
									$(".functionSmallMenu>li:eq("+(i+2)+")").css("background","white")
									//notFinish
								}
							}
							llp++;
						})
						
						$(document).on('change', '#importPhotoCur', function () { //PictureUrl为input file 的id
					
					        function getObjectURL(file) {
					            var url = null;
					            if (window.createObjcectURL != undefined) {
					                url = window.createOjcectURL(file);
					            } else if (window.URL != undefined) {
					                url = window.URL.createObjectURL(file);
					            } else if (window.webkitURL != undefined) {
					                url = window.webkitURL.createObjectURL(file);
					            }
					            return url;
					        }
					        var objURL = getObjectURL(this.files[0]);
					        var str = "<div style='position:absolute;left:600px;top:300px'><img src= '"+objURL+"' width='200px' height='auto'></div>"
					        if(curIndexBox!=null){
					        	$(".box>div:eq("+curIndexBox+")").append(str)			        
					        }else{
					        	alert("出现未知错误或者是没有新建的页面！")
					        }
					    });
					}
				})
			})