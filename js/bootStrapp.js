$(function() {
	
//			downloadIamge(imgsrc,name){
//			  let image = new Image();
//			  // 解决跨域 Canvas 污染问题
//			  image.setAttribute("crossOrigin", "anonymous");
//			  image.onload = function(){
//			    let canvas = document.createElement("canvas");
//			    canvas.width = image.width;
//			    canvas.height = image.height;
//			    let context = canvas.getContext("2d");
//			    context.drawImage(image, 0, 0, image.width, image.height);
//			    let url = canvas.toDataURL("image/png"); //得到图片的base64编码数据
//			    let a = document.createElement("a"); // 生成一个a元素
//			    let event = new MouseEvent("click"); // 创建一个单击事件
//			    a.download = name || "photo"; // 设置图片名称
//			    a.href = url; // 将生成的URL设置为a.href属性
//			    a.dispatchEvent(event); // 触发a的单击事件
//			  }
//			  
//			  image.src = imgsrc;
//			}
//			var imgsrc = "https://pic.yupoo.com/xfdepersonalyu/1b870d62/86f183c8.jpg";
//			var name = "yin"
//			downloadIamge(imgsrc,name)

	
			$("#login-button").click();
			
			location.href = 'mailto:18136256360@163.com?subject=dssdsds';
			
			var valM = "";
			var iAlertModel = 0;
			var pcm = 1000;
			var hm1 = 0;
			var upm = 2;
			var iM = 0;
			var cHeight= 40;
			function alertModel(valM){
				iM++;
				var curInd = $("#alertModelFather>div").index();
				if(curInd=="-1"){
					iAlertModel = 0;
				}
				var divModel = "<div title='"+valM+"' mid= '"+iAlertModel+"' style='z-index:"+parseInt(pcm)+";position:absolute;top: 120px;right: 20px;width: 250px;height: auto;background: whitesmoke;box-shodow:1px 1px 1px gray;border:1px solid gainsboro;border-radius:10px;'><p style='padding:10px;float:left;width:200px'>"+valM+"</p><div style='float: right;cursor: pointer;font-size: 20px;padding-left: 5px;padding-right: 2px'>×</div></div>";
				for(var pi=0;pi<iM;pi++){
					var v = $("#alertModelFather>div:eq("+pi+")>p").html();
					if(v==valM){
						upm = 1;
						$("#alertModelFather>div:eq("+pi+")").css("background","white");
						pcm++;
						$("#alertModelFather>div:eq("+pi+")").css("z-index",pcm)
						setTimeout("$('#alertModelFather>div:eq("+pi+")').css('background','whitesmoke')",300)
					}
				}
				if(upm==2){
					$("#alertModelFather").append(divModel);
				}
				$("[mid='"+iAlertModel+"']").animate({"top":(parseInt(cHeight)+iAlertModel)+"px"},800)
				if(valM.length>=10){
					cHeight = ((valM.length/10)*10)+40;
				}
				if(upm==2){
					iAlertModel = iAlertModel+25;
				}
				upm = 2;
				$("#alertModelFather>div").click(function(){
					//var curInd = $(this).attr("mid");
					$(this).css("z-index",pcm)
					pcm++;
				})
				$("#alertModelFather>div>div").click(function(){
					//var curInd = $(this).attr("mid");
					$(this).parent("div").remove();
				})
				hm1++;
			}
			function xgM(){
				
			}
			
				
				var tMusic = "../bgm.mp3"
				
			$("[name = 'align']:eq(0)").click(function(){
				$(".titleContent").css("text-align","left")
				$(".titleContent").css({"left":"","top":""})
				$(".setBkgTitle").css({"left":"30px","top":"90px"})
			})
			$("[name = 'align']:eq(1)").click(function(){
				$(".titleContent").css("text-align","right")
				$(".titleContent").css({"left":"1050px","top":""})
				$(".setBkgTitle").css({"left":"1050px","top":"130px"})
			})
			$("[name = 'align']:eq(2)").click(function(){
				$(".titleContent").css({"left":"447px","top":"260px"})
				$(".setBkgTitle").css({"left":"447px","top":"325px"})
			})
			
			$(".playGameOnTime").mousemove(function(){
				if(sessionstorage.stimeGameFinish!=1){
					$(this).css({"background":"burlywood","transition":"0.2s all"})
				}
			})
			$(".playGameOnTime").mouseout(function(){
				if(sessionstorage.stimeGameFinish!=1){
					$(this).css("background","wheat")
				}
			})
			
			$(".hoildayImg").click(function(){
				location.href = "http://www.baidu.com";
			})
			
			//skip the adver
			$(".skipAdver2").mousemove(function(){
				$(".word2").html("哼╭(╯^╰)╮")
			})
			
			$(".skipAdver2").mouseout(function(){
				$(".word2").html("略略略略略")
			})
			
			$(".skipAdver2").click(function(){
					$(".trick2").hide();
					sessionstorage.sSkip = 1					
				
			})
			
//			$(".weather").click(function(){
//				alert(1)
//				alert($(this).val())
//			})
			
			
				
				/*var lit1 = ["a","b"]
				var list = [lit1,"list2"]
				var str = JSON.stringify(list); 
     			localStorage.setItem("options",str);
var optionss=localStorage.getItem("options");
alert(JSON.parse(optionss)[0]);*/

				var timeSet = "1300"				
				$(".count").mouseover(function(){
					$(this).animate({"height":"129px"},"2000");
					$(".jindu").animate({"top":"122px"},"2000")
					if(sessionstorage.sessionPass!=null){
						$("#weather").show("2000");
					}
					//
				})
				$(".count").mouseout(function(){
					$(this).animate({"height":"30px"},"2000");
					$(".jindu").animate({"top":"20px"},"2000")
					$("#weather").hide();
				})
				
				$(".loginGetMoney").click(function(){
					if(sessionstorage.sloginGet==null){
						var remoney = parseInt(storage.scountMoney)
						storage.scountMoney = remoney+50;
						$(".money").html(remoney+50);
						valM = "签到成功，获得30！"
						alertModel(valM)
						sessionstorage.sloginGet = 1
					}else{
						valM= "已签过，明天再来吧~"
						alertModel(valM)
					}
				})
				
				var str = ""
				var time = 3;
				var funFun = 1;
				var bomb = 1;
				var kk = 1;
				var lll =1;
				var word = "再再试一下绵(*ω*)/..."
				var commonSpecial = 0;
				var hardWords = ["来咬我呀","点我点我","嗨皮be思得to右，祝你生日...恭喜发财，红包拿来","一首hop送给你","哈哈哈哈哈哈，被我打败啦，全都一起上把，我根本没得....","哈哈哈（假装有后台）","你是不是又在偷偷背着我打游戏","我是你天边最美的云彩","金刚葫芦娃就是我！","我这一生不靠浆也不靠帆，全靠浪","让我们策...额，荡起双桨","这次没啥好说的，就祝你恭喜发财吧[滑稽]",".心简单，世界就简单，幸福才会生长;心自由，生活就自由，到哪都有快乐。","不甘心的时候，就是在进步。痛苦的时候，就是在成长。","你不快乐是因为你没有好好爱自己 而是常常因为别人而消耗着自己","”假如你不够快乐，也不要把眉头深锁，人生本来短暂为什么还要栽培苦涩。","别沮丧，生活就像心电图，一帆风顺就证明你挂了。","门庭若市却孜然一身，车水马龙却素昧平生。","有些事，藏在心里是莫大的委屈。话到嘴边、又觉得无足挂齿不值一提。","做一个识趣的人真的太重要了 这样既不会为难别人 也不会让自己难堪 简直就是皆大欢喜","所有人都祝你快乐 我只愿你阅遍山河觉得人间值得","爱的魔力转圈圈，想你想到黑夜白天"]
				
				$(".page>div").click(function(){
					$(".trick").show();
					$(".trick").animate({"left":"510px"},"6000")
					$(".jindutiao").animate({"width":"80px"},"slow")
					$(".allSettiong").html("△");
				})
				
				$(".page>div").mouseover(function(){
					$(this).css({"color":"blue","transition":"0.3s all"})
				})
				$(".page>div").mouseout(function(){
					$(this).css("color","")
				})
				
				function startGeme(){
						$(".allSetXiaoguo1").animate({"left":"620px"},"2000");
						$(".allSetXiaoguo1").hide();
						$(".allSetXiaoguo2").hide("3000");
						$(".xianXiaoguo1").animate({"width":"1px"},"2000");
						$(".xianXiaoguo2").animate({"height":"1px"},"2000");
						$(".allSetXiaoguo2").animate({"left":"620px"},"5000");
						$(".xianXiaoguo1").hide();
						$(".xianXiaoguo2").hide("5000")
					if(sessionstorage.sessionPass!=null){
						var trickWord = Math.floor(Math.random() * 9+1); //1-10
						if(sessionstorage.sx==null){
							if(trickWord>4&&trickWord<=6){
								valM = "万万没想到你居然又进来了，哼"
								alertModel(valM)
							}else if(trickWord==2||trickWord==8){
								valM = "啧啧啧"
								alertModel(valM)
							}
							sessionstorage.sx = 1										
						}
					}
					$(".game").show();
							$(".page").fadeOut();
							show();
							$(".pause").show();
							//bkg
						if(storage.sred==null){
							if(storage.commonBkg==4){
								$(".bkg").css("background","plum")
							}else if(storage.commonBkg==2){
								$(".bkg").css("background","lightskyblue")
							}else if(storage.commonBkg==3){
								$(".bkg").css("background","lightgreen")
							}else{
								$(".bkg").css("background","whitesmoke")
							}
							$("select:eq(0)>option:eq("+(storage.commonBkg-1)+")").attr("selected","selected")
							
						}else{
							var str = "<option class='ziDingYi'>自定义</option>"
							$("select:eq(0)").append(str)
							$(".ziDingYi").attr("selected","selected")
							$(".bkg").css("background","rgb("+storage.sred+","+storage.sgreen+","+storage.sblue+")")
						}
							
							$(".trick").hide();
				}
				
				$("#body").mousemove(function(){
					var sprotectEyeTime1 = parseInt(sessionstorage.sprotectEyeTime1)
					if(sessionstorage.spanDuan!=1){
						if(sessionstorage.sessionPass!=null){
							if(sessionstorage.stimeInit==null||sessionstorage.stimeInitHour==null){
								sessionstorage.stimeInit = new Date().getMinutes();
								sessionstorage.stimeInitHour = new Date().getHours();
							}else{
								var newTime = new Date().getMinutes();
								var newTimeHour = new Date().getHours();
								var oldTime = parseInt(sessionstorage.stimeInit)
								var oldTimeHour =  parseInt(sessionstorage.stimeInitHour)
								if(newTimeHour==oldTimeHour){
									if(parseInt(newTime)-oldTime>=sprotectEyeTime1){
										valM = "你已经玩了将近"+sessionstorage.sprotectEyeTime1+"分钟了，该休息休息眼睛了，我已强制为你跳转到另一个页面，不用谢我~[嘻嘻]"
										alertModel(valM)
										if(sessionstorage.sqz==null){
											valM = "时间到了的话，双击(还需要输入密码)或者快捷键（无需密码）即可跳出~"
											alertModel(valM)
											sessionstorage.sqz = 1											
										}
										sessionstorage.stimeInit = newTime
										sessionstorage.spanDuan = 1
										$(".relaxJsp").show();
										
										if(sprotectEyeTime1-10<=0){
											sprotectEyeTime1 = 5														
										}else{
											sprotectEyeTime1 = sprotectEyeTime1-10
										}
										sessionstorage.sprotectEyeTime1 = sprotectEyeTime1
										
										ha = 1
										timeCountPlan();
										storage.stimeTot = 300
									}
								}else{
									var timeReset = parseInt(newTime)+(60-parseInt(oldTime))
									if(timeReset>=sprotectEyeTime1){
										valM = "你已经玩了将近"+sessionstorage.sprotectEyeTime1+"分钟了，该休息休息眼睛了，我已强制为你跳转到另一个页面，不用谢我~[嘻嘻]"
										alertModel(valM)
										sessionstorage.stimeInit = newTime
										sessionstorage.spanDuan = 1
										$(".relaxJsp").show();
										
										if(sprotectEyeTime1-10<=0){
											sprotectEyeTime1 = 5														
										}else{
											sprotectEyeTime1 = sprotectEyeTime1-10
										}
										sessionstorage.sprotectEyeTime1 = sprotectEyeTime1
										
										ha = 1
										timeCountPlan();
										storage.stimeTot = 300
									}
								}
							}
						}
						
					}
					
				})
				var ha = 0
				function aysn(){
					var v = parseInt(storage.stimeTot)
					if(v!=0){
						v--;
						storage.stimeTot = v
						var minuteCount = parseInt(v / 60)
						console.log(minuteCount+"min")
						var secondCount = v%60
						console.log(secondCount.length+"sec")
						if(secondCount<=9){
							secondCount = "0"+v%60
						}
						var sum = "0"+minuteCount+":"+secondCount;
						$(".timeLength").html(sum)
					}else{
						ha = 0;
						//sessionstorage.removeItem("stimeInit")
//						$(".relaxJsp").hide();
						//sessionstorage.removeItem("spanDuan")
						//storage.stimeTot = 10
					}
				}
				
				function timeCountPlan(){
					var value = $(".timeLength").html();
					aysn();
					if(ha==1){
						setTimeout(timeCountPlan,"1000")
					}else{
						
					}
				}
				
				var TimeFn1 = null;
				
				 
				
				$('.relaxJsp').click(function () {
				
				    // 取消上次延时未执行的方法
				
				    clearTimeout(TimeFn1);
				
				    //执行延时
				
				    TimeFn1 = setTimeout(function(){
				
				        //do function在此处写单击事件要执行的代码
				
				    },300);
				
				});
				
				$(".timeLength").click(function(){
					valM = "如果页面的计时没有动静，刷新试试看，刷新如果也没用的话，直接关闭当前浏览器再重开一下即可~"
					alertModel(valM)
				})
				
				 
				
				$('.relaxJsp').dblclick(function(){
				
				     // 取消上次延时未执行的方法
				
				    clearTimeout(TimeFn1);
				
				    //双击事件的执行代码
					if(ha==0){
					    if(hgl==1){
					    	var name=prompt("亲解锁需要要输入密码哟~")
							if(storage.word==null){
								if (name!=null && name!=""&&name==ppss){
									sessionstorage.removeItem("stimeInit")
									$(".relaxJsp").hide();
									sessionstorage.removeItem("spanDuan")
									storage.stimeTot = 300
								}else{
									var name1=prompt("密匙不正确，可联系作者哟...","")
									if (name1!=null && name1!=""&&name1==ppss){
										sessionstorage.removeItem("stimeInit")
										$(".relaxJsp").hide();
										sessionstorage.removeItem("spanDuan")
										storage.stimeTot = 300
									}else{
										alert("密匙还是不正确...")
									}
								}	
							}else{
								if (name!=null && name!=""&&storage.word==name){
									sessionstorage.removeItem("stimeInit")
									$(".relaxJsp").hide();
									sessionstorage.removeItem("spanDuan")
									storage.stimeTot = 300
								}else{
									var name1=prompt("密匙不正确，可联系作者哟...","")
									if (name1!=null && name1!=""&&name1==storage.word){
										sessionstorage.removeItem("stimeInit")
										$(".relaxJsp").hide();
										sessionstorage.removeItem("spanDuan")
										storage.stimeTot = 300
									}else{
										alert("密匙还是不正确...")
									}
								}
							}
						}
					}else{
						valM = "时间还没到哦~"
						alertModel(valM)
					}
				})
				
				
				
				$(".skip").click(function(){
					
					if(lll==1){
						lll++;
						$(".word").html("想多了，你以为我这么容易能让你进去qwq，你再点一下试试看[手动滑稽]...")
					}else if(lll==2){
						lll++;
						$(".word").html("哎呀，还是没打开，嘻嘻，你再再点一下，这次不骗你")
					}else{
						var trickChange = Math.floor(Math.random() * 3 + 1); //1-10
						if(trickChange==2){
								startGeme();
								
//								if(storage.j==null){
//								}else{
//									var newAnotherMinute = new Date().getMinutes();
//									if(newAnotherMinute>oldMinute){
//										if(newAnotherMinute-oldMinute>=1){
//											startGeme();
//											storage.removeItem("j");
//										}else{
//											alert("1分钟还没到呢，再等等，做个眼保健操或者看看广告也行")
//										}
//										
//									}else{
//										alert("1分钟还没到呢，再等等，做个眼保健操或者看看广告也行")
//									}
//									
//								}
						}else{
							word = "再"+word;
							$(".word").html(word)
						}
					}
				})
				var hu = 1;
				//test
//				var sn = {}
//				sn["key"] = 1;
//				alert(sn["key"])
				
				
				
				
//var obj ={}
//for( var i = 0;i<3;i++) {
//obj["test"+i] = [0,i,i+1];
//}
////调用
//console.log(obj["test1"])
//for( var i = 0;i<3;i++) {
//console.log(obj["test"+i])
//}
				
				var udf = 2;
				
				var uj = 1;
				var hf = 0;
				var testI =1
				var uh = 0;
				var obj = []
				function show() {
					var bgm2 = document.getElementById("bgm2")
					if(storage.bgm2==null){
						bgm2.muted = true;
					}
					
					$(".addXiaoGuo3").css("top","270px")
					$(".addXiaoGuo2").css("top","270px")
					$(".surp").css("font-size","5px");
					$(".top").css("left","400px");
					$(".countSpecial").css("left","400px");
					$(".countMoney").css("left","400px");
					
					var panduan = 1;
					
										//biao
					if(hu==1){
						$(".countTime").css("color","black");
						var biao = parseInt($(".countTime>span").html());
					
						var width = parseInt($(".jindu").css("width"))
						var bei = width/biao;
						width = width-bei;
						$(".jindu").css("width",width+"px")
						if(biao-1<=0){
							time = 2;
							$(".countTime>span").show();
								$(".failReason").html("你超时啦！")
								
							$(".countTime>span").html("00")
							$(".countTime").css("color","red")
						}else{
							biao--;
							if(biao<10){
								$(".countTime>span").show();					
								$(".countTime>span").html("0"+biao)
								$(".countTime>span").fadeOut("fast");
							}else{
								$(".countTime>span").show();
								$(".countTime>span").html(biao)
							}
						}
					}else{
						uj++;
						if(uj>=uh){
							hu = 1;
							uj = 1;
						}
					}
					
					
					
					//countStep
					funFun++;
					
					
					//记录表初始时间
					if(funFun==2){
						var timeCountValue = storage.timeCount 
						var timeBiao = parseInt($(".countTime>span").html());
						storage.stime = timeBiao
						if(timeCountValue==null){
							timeCountValue = 1
						}else{
							timeCountValue = parseInt(timeCountValue)+1
						}
						var year = new Date().getFullYear();
						var month = new Date().getMonth()+1;
						var day = new Date().getDate();
						var hour = new Date().getHours();
						var minute = new Date().getMinutes();
						var second = new Date().getSeconds();
						
						//保存历史记录的
						var  dateTimeCount= year+"-"+month+"-"+day+" "+hour+":"+minute+":"+second
						var slist = []
						if(storage.countTestI==null){
							testI++;
						}else{
							testI = storage.countTestI
							testI++;
						}
						slist.push(timeCountValue)
						slist.push(timeBiao)
						slist.push(dateTimeCount)
						obj["obj"+testI] = slist;
						console.log(obj["obj"+testI])
						bList.push(obj["obj"+testI]);
						var str = JSON.stringify(bList);
						storage.bs = str
						
						
						if(timeCountValue%10==1){
							storage.timeOne = timeBiao
							storage.timeCountOne = timeCountValue
							storage.dateOne = month+"月"+day+"号"+hour+"时"+minute+"分"
						}else if(timeCountValue%10==2){
							storage.timeTwo = timeBiao
							storage.timeCountTwo = timeCountValue
							storage.dateTwo = month+"月"+day+"号"+hour+"时"+minute+"分"
						}else if(timeCountValue%10==3){
							storage.timeThree = timeBiao
							storage.timeCountThree = timeCountValue
							storage.dateThree = month+"月"+day+"号"+hour+"时"+minute+"分"
						}else if(timeCountValue%10==4){
							storage.timeFour = timeBiao
							storage.timeCountFour = timeCountValue
							storage.dateFour = month+"月"+day+"号"+hour+"时"+minute+"分"
						}else if(timeCountValue%10==5){
							storage.timeFive = timeBiao
							storage.timeCountFive = timeCountValue
							storage.dateFive = month+"月"+day+"号"+hour+"时"+minute+"分"
						}else if(timeCountValue%10==6){
							storage.timeSix = timeBiao
							storage.timeCountSix = timeCountValue
							storage.dateSix = month+"月"+day+"号"+hour+"时"+minute+"分"
						}else if(timeCountValue%10==7){
							storage.timeSeven = timeBiao
							storage.timeCountSeven = timeCountValue
							storage.dateSeven = month+"月"+day+"号"+hour+"时"+minute+"分"
						}else if(timeCountValue%10==8){
							storage.timeEight = timeBiao
							storage.timeCountEight = timeCountValue
							storage.dateEight = month+"月"+day+"号"+hour+"时"+minute+"分"
						}else if(timeCountValue%10==9){
							storage.timeNine = timeBiao
							storage.timeCountNine = timeCountValue
							storage.dateNine = month+"月"+day+"号"+hour+"时"+minute+"分"
						}else if(timeCountValue%10==0){
							storage.timeTen = timeBiao
							storage.dateTen = month+"月"+day+"号"+hour+"时"+minute+"分"
							storage.timeCountTen = timeCountValue
						}
					}
					
					var rand1 = Math.floor(Math.random() * 9+1); //1-10 
					var initHardWord = $(".hardWord>span").html();
					if(rand1<=5){
						if(funFun>=15&&funFun<30){
							var rand2 = Math.floor(Math.random() * 9 + 1); //1-10 
							if(rand2<=5){
								$(".hardWord>span").html("呦呵，不错绵ლ(′◉❥◉｀ლ)")
							}else{
								$(".hardWord>span").html("呃呃")
							}
						}else if(funFun>=5&&funFun<15){
							$(".hardWord>span").html("你个小菜菜")
						}else if(funFun>=30&&funFun<50){
							var rand3 = Math.floor(Math.random() * 9 + 1); //1-10 
							if(rand3<=5){
								$(".hardWord>span").html("厉害了，是不是开过挂了，嘻嘻")
								
							}else{
								$(".hardWord>span").html("略略略")
							}
						}else if(funFun>=50&&funFun<80){
							var rand4 = Math.floor(Math.random() * 9 + 1); //1-10 
							if(rand4<=5){
								$(".hardWord>span").html("喂喂，你得给我的游戏留点自尊心鸭")
								
							}else{
								$(".hardWord>span").html("不跟你玩了，哼，溜了")
							}
						}else if(funFun>=80&&funFun<90){
							var rand5 = Math.floor(Math.random() * 9 + 1); //1-10 
							if(rand5<=5){
								$(".hardWord>span").html("不跟你玩了，哼，溜了")
								
							}else{
								$(".hardWord>span").html(initHardWord)	
							}
						}else{
							$(".hardWord>span").html(initHardWord)
						}
					}
					
					if(funFun<=10){
						var totalBomb = Math.floor(Math.random() * 3 + 1)+bomb; //1-10
					}else{
						timeSet = parseInt(timeSet)-20;
						if(timeSet<=600){
							timeSet = 600
						}
						var ss = (funFun-10)/5;
						if(ss==1){
							bomb++;
							kk++;
						}
						if(ss==kk){
							bomb++;
							kk++;
						}
						var totalBomb = Math.floor(Math.random() * 3 + 1)+bomb; //1-10
						if(totalBomb>=15){
							totalBomb = Math.floor(Math.random() * 3 + 1)+1; //1-10 
						}
					}
					
					
					$(".bkg>div").hide("1000")
					$(".bkg>div").remove();
					
					if(funFun>=10){
						var randTrick = Math.floor(Math.random() * 3 + 1); //1-10 
						if(randTrick==1){
							var total = Math.floor(Math.random() * 3 + 1)+1; //1-10 
						}else if(randTrick==4){
							var total = 0;
						}else if(randTrick==2||randTrick==3){
							var total = 1;
						}
					}else{
						var total = Math.floor(Math.random() * 3 + 1)+1; //1-10 
					}
					if(funFun>=5&&commonSpecial==1){
						var special =  Math.floor(Math.random() * 3 + 1)+1;
						if(special==3){
							var specialLeft = Math.floor(Math.random() * 430+ 1) + 30; //10-510
							var specialTop = Math.floor(Math.random() * 430 + 1) + 30; //10-510
							str = "<div bid='getScoreBubSpecial' class=1 style='border-radius: 50%;width: 30px;height:30px;background: url(../love2.png);opacity: 0.8;position: absolute;cursor:pointer;left: "+specialLeft+"px;top: "+specialTop+"px;'></div>"
							$(".bkg").append(str)
						}
					}
				//
					
					
					for(var j = 0; j < totalBomb; j++) {
						var left = Math.floor(Math.random() * 430+ 1) + 30; //10-510
						var top = Math.floor(Math.random() * 430 + 1) + 30; //10-510
						str = "<div bid='removeScoreBub' class=2 style='border-radius: 50%;width: 32px;height:32px;background-color: black;background-size: 100% 100%;cursor:pointer;background: url(../black.gif);opacity: 0.8;position: absolute;left: "+left+"px;top: "+top+"px;'></div>"
						$(".bkg").append(str)
					}
					
					for(var i = 0; i < total; i++) {
						var color = Math.floor(Math.random() * 3 + 1); //1是绿，2是黄，3是蓝
						var left = Math.floor(Math.random() * 430+ 1) + 30; //10-510
						var top = Math.floor(Math.random() * 430 + 1) + 30; //10-510
						if(color==1){
							str = "<div bid='getScoreBubGreen' class=2  style='border-radius: 50%;width: 32px;height:32px;background-color: green;opacity: 0.8;cursor:pointer;position: absolute;background-size: 100% 100%;background: url(../green.gif);left: "+left+"px;top: "+top+"px;'></div>"
						}else if(color==2){
							str = "<div bid='getScoreBubYellow' class=2  style='border-radius: 50%;width: 32px;height:32px;background-color: yellow;opacity: 0.8;cursor:pointer;position: absolute;background-size: 100% 100%;background: url(../yellow.gif);left: "+left+"px;top: "+top+"px;'></div>"
						}else{
							str = "<div bid='getScoreBubBlue' class=2  style='border-radius: 50%;width: 32px;height:32px;background-color: blue;opacity: 0.8;cursor:pointer;position: absolute;background-size: 100% 100%;background: url(../blue.gif);left: "+left+"px;top: "+top+"px;'></div>"
						}
						$(".bkg").append(str)
					}
					
					//
					$(".bkg>div").click(function(){
						if(storage.bgm2==null){
							bgm2.currentTime = 0;
							bgm2.muted = false;
						}
												
							var clas = $(this).attr("class")
							if(clas==1){
								hf++;
								$(".countSpecial>span").html(hf)
								$(this).hide("1000")
								$(".surp").show();
								$(".surp").css({"left":(specialLeft-20)+"px","top":specialTop+"px"})
								$(".surp").animate({"font-size":"22px"},"4000")
								$(".surp").hide("16000");
								
								var total = Math.floor(Math.random() * 9 + 1); //1-10 
								if(total==3||total==7){
									$(".hardWord>span").html("呦呵...")
									var count = $(".count").html();
									count = parseInt(count) +50;
									$(".count").html(count)
									$(".addXiaoGuo2").show("2000");
									$(".addXiaoGuo2").animate({"top":"250px"},"5000")
									$(".addXiaoGuo2").fadeOut("8000");
								}else if(total==5){
									if(hu==1){
										hu = 2;
										$(".countTime").css("color","orange");
										$(".addXiaoGuo3").show();
										$(".addXiaoGuo3").animate({"top":"250px"},"3000")
										$(".addXiaoGuo3").fadeOut("5000");
										uh = uh+4;
									}else{
										
									}
								}else{
									
								}
								
							}
							
							
							if(panduan==1){
								$(".addXiaoGuo1").css("top","290px")
								$(".addXiaoGuo").css("top","290px")
								var scorePanDuan = $(this).attr("bid");
								if(scorePanDuan=="removeScoreBub"){
									$(this).css({"width":"1px","transition":"0.2s all","height":"1px","background":"url(../smallBlack.png)"})
									var pLeft = $(this).css("left");
									var pTop = $(this).css("top");
									$("addXiaoGuo1").css({"left":pLeft,"top":pTop})
									$(".addXiaoGuo1").show();
									$(".addXiaoGuo1").animate({"top":"275px"},"3000")
									$(".addXiaoGuo1").fadeOut("4000");
									var count = $(".count").html();
									if(parseInt(count)-20<=0){
										time = 2;
										$(".count").html(0)
										$(".failReason").html("你因为点错减少 （积分） 而失败了！")
										$(".count").css("color","red");
										$(".countTime>span").html(00)
										$(".countTime").css("color","black");
									}else{
										count = parseInt(count) -20;
										$(".count").html(count)
									}
									
									var biao = parseInt($(".countTime>span").html());
									if(biao-3<=0){
										time = 2;
										$(".countTime>span").html(00)
										$(".count").html(0)
										$(".count").css("color","red");
											$(".failReason").html("你因为点错减少（ 时间或者积分） 而失败了！")
										$(".countTime").css("color","red")
									}else{
										biao = biao-3;
										if(biao<10){
											$(".countTime>span").show();					
											$(".countTime>span").html("0"+biao)
											$(".countTime>span").fadeOut("fast");
										}else{
											$(".countTime>span").html(biao)
											$(".countTime>span").show();
										}
									}
								}else{
									var scorePanDuan = $(this).attr("bid");
									if(scorePanDuan=="getScoreBubGreen"){
										$(this).css({"width":"1px","transition":"0.2s all","height":"1px","background":"url(../smallGreen.png)"})
									}else if(scorePanDuan=="getScoreBubBlue"){
										$(this).css({"width":"1px","transition":"0.2s all","height":"1px","background":"url(../smallBlue.png)"})
									}else if(scorePanDuan=="getScoreBubYellow"){
										$(this).css({"width":"1px","transition":"0.2s all","height":"1px","background":"url(../smallYellow.png)"})
									}
									var pLeft = $(this).css("left");
									var pTop = $(this).css("top");
									$("addXiaoGuo").css({"left":pLeft,"top":pTop})
									$(".addXiaoGuo").show();
									$(".addXiaoGuo").animate({"top":"275px"},"3000")
									$(".addXiaoGuo").fadeOut("4000");
									var count = $(".count").html();
									count = parseInt(count)+10;
									$(".count").html(count)
									
									var biao = parseInt($(".countTime>span").html());
									if(biao+1>=55){
										$(".countTime>span").html("55")
									}else{
										biao = biao+1;
										if(biao<10){
											$(".countTime>span").html("0"+biao)					
										}else{
											$(".countTime>span").html(biao)
											$(".countTime>span").show();
										}
									}
								}
								panduan++;
							}
					})
					
					var c = parseInt($(".count").html());
					var startCount = parseInt($(".startTopCount").html());
					var topC = parseInt($(".top>span").html()); 
					if(topC>startCount){
						if(storage.stime!=null){
							if(storage.stime<=11){
								storage.countHistroy = topC;
								storage.stime2 = storage.stime
							}
						}
					}
					
					if(c>=topC){
						$(".top>span").html(c)
						var timeCountValue2 = storage.timeCount 
						if(timeCountValue2==null){
							timeCountValue2 = 1
						}else{
							timeCountValue2 = parseInt(timeCountValue2)+1
						}
						if(timeCountValue2%10==1){
							storage.countOne = c
							storage.countTotalOne = funFun
						}else if(timeCountValue2%10==2){
							storage.countTwo = c
							storage.countTotalTwo = funFun
						}else if(timeCountValue2%10==3){
							storage.countThree = c
							storage.countTotalthree = funFun
						}else if(timeCountValue2%10==4){
							storage.countFour = c
							storage.countTotalFour = funFun
						}else if(timeCountValue2%10==5){
							storage.countFive = c
							storage.countTotalFive = funFun
						}else if(timeCountValue2%10==6){
							storage.countSix = c
							storage.countTotalSix = funFun
						}else if(timeCountValue2%10==7){
							storage.countSeven = c
							storage.countTotalSeven= funFun
						}else if(timeCountValue2%10==8){
							storage.countEight = c
							storage.countTotalEight = funFun
						}else if(timeCountValue2%10==9){
							storage.countNine = c
							storage.countTotalNine = funFun
						}else if(timeCountValue2%10==0){
							storage.countTen = c
							storage.countTotalTen = funFun
						}
						
					}
					
					//
					if(time==2){
						
						if(hf!=0){
							//
						}
						
						var vc = []
						if(c>=topC){
							vc.push(c)
							vc.push(funFun)
							
						}else{
							vc.push(topC)
							vc.push(funFun)
						}
						
						obj1["obj2"+testI] = vc;
						bList2.push(obj1["obj2"+testI]);
						var str1 = JSON.stringify(bList2);
						storage.bs2 = str1
					}
					
					var tScort = parseInt($(".top>span").html());
					var sCount = parseInt($(".countSpecial>span").html());
					var totalMoney = Math.floor(parseInt(tScort)/20)+(parseInt(sCount)*2)
					$(".countMoney>span").html(totalMoney)
					var moneyBefore = $(".money").html();
					var totalMoneyNow = parseInt(moneyBefore)+ parseInt(totalMoney)
					if(totalMoneyNow<=99999){
						storage.scountMoney = totalMoneyNow
					}
					
					if(time==1){
						setTimeout(show, timeSet)
					}else if(time==2){
						timeSet = 1300
						$(".over").fadeIn("1000");
						$(".top").animate({"left":"10px"},"2000")
						setTimeout("$('.countSpecial').animate({'left':'10px'},'4000')","150")
						
						setTimeout("$('.countMoney').animate({'left':'10px'},'4000')","300")
//						//总场次
						if(storage.timeCount==null){
							storage.timeCount = 1
						}else{
							var changCi = parseInt(storage.timeCount)
							changCi++;
							storage.timeCount = changCi;
						}
						/*var s = JSON.parse(storage.bs)
						console.log(s[1]);*/
					}
					
				}
				var obj1  =[]
				
				
				$(".button").click(function(){
					if(time==1){
						$(".pause").show();
						time = 3;
					}
					$(".setting").fadeIn("1000");
					$(".pause>div").html("▷");
					$(".extraSettingButton").show("1000");
				})
				
				$(".bkg").click(function(){
					$(".setting").fadeOut("1000");
					n=1;
					$(".extraSettingButton").hide();
					$(".extraSetting").hide();
				})
				
				var n = 1;
				$(".extraSettingButton").click(function(){
					if(n==1){
						$(".extraSetting").animate({"width":"100px"},"500")
						$(".extraSetting").show();
						n = 2;
					}else if(n==2){
						n = 1;
						$(".extraSetting").animate({"width":"0px"},"500")
						$(".extraSetting").hide("2000");
					}
				})
				
				var oldMinute;
				$(".button1").click(function(){
					if(sessionstorage.sessionPass==null){
						$(this).css("background","white")
						var input12 = $(".timeset>input").val();
						$(".countTime>span").html(parseInt(input12))
						$(".count,.countTime").css("color","black");
						$(".jindu").css("width","500px")
						//						//总场次
//						if(storage.timeCount==null){
//							storage.timeCount = 1
//						}else{
//							var changCi = parseInt(storage.timeCount)
//							changCi++;
//							storage.timeCount = changCi;
//						}
						$(".count").html(0)
						funFun = 1;
						bomb = 1;
						kk = 1;
						time = 1;
						hf = 0;
						show();
						timeSet = 1300
						$(".top>span").html(0)
						$(".over").fadeOut("400");
						
							//
							if(window.localStorage)
							{
								var restSize= 1024 * 1024 * 5 - unescape(encodeURIComponent(JSON.stringify(localStorage))).length;
								console.log(parseInt(restSize/1024));
								var restValue = parseInt(restSize/1024)
								if(restValue<=30){
										while(udf == 2){
											var p = prompt("内存已满，请联系作者输入密码清理缓存：");
											if(p=="11"){
												alert("密码正确，已为您清除完毕！")
												udf = 1
												storage.removeItem("bs")
												storage.removeItem("bs2")
												storage.removeItem("timeCount")
												history.go(0);
											}else{
												alert("密码错误！")
											}
										}											
									}
								}
							
						
					}else{
						//
						if(window.localStorage)
							{
								var restSize= 1024 * 1024 * 5 - unescape(encodeURIComponent(JSON.stringify(localStorage))).length;
								console.log(parseInt(restSize/1024));
								var restValue = parseInt(restSize/1024)
								if(restValue<=30){
										storage.removeItem("bs")
										storage.removeItem("bs2")
										storage.removeItem("timeCount")
										history.go(0);
										valM = "您的历史记录缓存已满，已为您自动清理完毕！"
										alertModel(valM)
								}
							}
						
								$(this).css("background","white")
								var input12 = $(".timeset>input").val();
								$(".countTime>span").html(parseInt(input12))
								$(".count,.countTime").css("color","black");
								$(".jindu").css("width","500px")
								$(".count").html(0)
								funFun = 1;
								bomb = 1;
								kk = 1;
								time = 1;
								hf = 0;
								show();
								$(".over").fadeOut("400");
//							}
						
					}
				})
				$(".button2").click(function(){
					$(this).css("background","white")
					history.go(0)
				})
				
//				window.scroll = function(){
//					
//				}

				//挂
				$(".guaMa").click(function(){
					var guaNum=prompt("请输入激活码~")
					if(guaNum!="QAZWSX"){
						alert("激活码错误！")
					}else if(guaNum==""){
					}else if(guaNum=="QAZWSX"){
						alert("激活码正确,已为你修改了金币,可反复获取哟~")
						$(".money").html("99999")
						storage.scountMoney = 99999
					}
				})
				
				
				$(".skipAdver").click(function(){
					var f = confirm("跳过广告需支付200金币哟，是否继续")
					if(f==true){
						var money = $(".money").html();
						if(parseInt(money)-200<0){
							alert("你的金币不够啦，已为你取消交易~")
						}else{
							var restMoney = parseInt(money)-200
							storage.scountMoney = restMoney
							storage.sSkipLockOff = 1
							startGeme();
							$(".money").html(restMoney);
							alert("支付成功！你还剩下"+restMoney+"元哟~")
							$(".word2").html("想把我甩掉，哼哼（来自广告君的深深恶意）");
							setTimeout("$('.trick2').show()","5000")
						}
					}else{
						alert("支付取消")
					}
				})
				
		//右键
		
				//标题字体设置
					//定义setTimeout执行方法

				var TimeFn = null;
				
				 
				
				$('div').click(function () {
				
				    // 取消上次延时未执行的方法
				
				    clearTimeout(TimeFn);
				
				    //执行延时
				
				    TimeFn = setTimeout(function(){
				
				        //do function在此处写单击事件要执行的代码
				
				    },300);
				
				});
				
				 
				
				$('.titleContent').dblclick(function(){
				
				     // 取消上次延时未执行的方法
				
				    clearTimeout(TimeFn);
				
				    //双击事件的执行代码
				    if(hgl==1){
						
						$(".setBkgTitle").slideDown();
						$(".buttonGroup").fadeOut();
					}
				
				})
				
				$(".setBkgTitleOpicty>span").click(function(){
					var selectSet = $(this).html();
					if(selectSet!=""){
						$(this).html("●").siblings().html("|");
						$(this).css("font-size","26px").siblings().css("font-size","12px")
						var zhi = $(this).attr("class")
						if(zhi=="twenty"){
							$(".titleContent").css("opacity","0.2")
							storage.sopacity = 0.2
						}else if(zhi=="forty"){
							$(".titleContent").css("opacity","0.4")
							storage.sopacity = 0.4
						}else if(zhi=="sixty"){
							$(".titleContent").css("opacity","0.6")
							storage.sopacity = 0.6
						}else if(zhi=="eighty"){
							$(".titleContent").css("opacity","0.8")
							storage.sopacity = 0.8
						}else if(zhi=="oneHundred"){
							$(".titleContent").css("opacity","1")
							storage.sopacity = 1
						}
					}
				})
				$(".closeSetting").click(function(){
					$(".setBkgTitle").hide();
				})
					
				$("#body div").mousedown(function(e) {
					if(sessionstorage.spanDuan!=1){
						if(sessionstorage.lockOn!=1){
							if(sessionstorage.sessionPass!=null){
								if(3 == e.which){
									if((e.pageY+220) > document.documentElement.clientHeight&&(e.pageX+250) > document.documentElement.clientWidth){
										$("#menu").css({"position":"absolute","left":(e.pageX-550)+"px","top":(e.pageY-450-200)+"px"})
										$("#menu").show();
										$("#smenu").css({"left":(e.pageX+252-550)+"px","top":(e.pageY+34-450-200)+"px"})
										$("#secondMenu").css({"left":(e.pageX+252-550)+"px","top":(e.pageY+212-450-200)+"px"})
										$("#thirdMenu").css({"left":(e.pageX+252-550)+"px","top":(e.pageY+315-450-200)+"px"})
									}else if ((e.pageY+220) > document.documentElement.clientHeight){
										//往下
										$("#menu").css({"position":"absolute","left":(e.pageX-250)+"px","top":(e.pageY-450)+"px"})
										$("#menu").show();
										$("#smenu").css({"left":(e.pageX+252-250)+"px","top":(e.pageY+34-450)+"px"})
										$("#secondMenu").css({"left":(e.pageX+252-250)+"px","top":(e.pageY+212-450)+"px"})
										$("#thirdMenu").css({"left":(e.pageX+252-250)+"px","top":(e.pageY+315-450)+"px"})
									}else if((e.pageX+250) > document.documentElement.clientWidth){
										$("#menu").css({"position":"absolute","left":(e.pageX-550)+"px","top":e.pageY+"px"})
										$("#menu").show();
										$("#smenu").css({"left":(e.pageX+252-550)+"px","top":(e.pageY+34)+"px"})
										$("#secondMenu").css({"left":(e.pageX+252-550)+"px","top":(e.pageY+212)+"px"})
										$("#thirdMenu").css({"left":(e.pageX+252-550)+"px","top":(e.pageY+315)+"px"})
									}else if((e.pageY+220) < document.documentElement.clientHeight||(e.pageX+250)< document.documentElement.clientWidth){
										$("#menu").css({"position":"absolute","left":e.pageX+"px","top":e.pageY+"px"})
										$("#menu").show();
										$("#smenu").css({"left":(e.pageX+252)+"px","top":(e.pageY+34)+"px"})
										$("#secondMenu").css({"left":(e.pageX+252)+"px","top":(e.pageY+212)+"px"})
										$("#thirdMenu").css({"left":(e.pageX+252)+"px","top":(e.pageY+315)+"px"})
									}
								}else if(e.which==1){
									$("#menu").fadeOut()
								}
								
							}else{
								if(3 == e.which){
									$("#initMenu").css({"position":"absolute","left":e.pageX+"px","top":e.pageY+"px"})
									$("#initMenu").show();
								}else if(e.which==1){
									$("#initMenu").fadeOut()
								}
							}
							
						}
					}
				})
				
				$(".historyScore").mousedown(function(e) {
					if(sessionstorage.sessionPass!=null){
						if(3 == e.which){
							$("#menu").hide();
							$("#otherMenu").css({"position":"absolute","left":e.pageX+"px","top":e.pageY+"px"})
							$("#otherMenu").show();
						}else if(e.which==1){
							$("#otherMenu").fadeOut()
						}
						
					}

				})
				
				$(".getKuaijieMenu").click(function(){
					var g  = prompt("请先输入密码：");
					if(g==ppss||g==storage.word){
							if(storage.srandCode==null){
								alert("密码输入正确，快捷键为：( ctrl+X )...")
							}else{
								alert("密码输入正确，快捷键为：( ctrl+"+storage.srandKey+" )...")
							}
					}else if(g==""){
					}else{
						alert("密码错误！")
					}
					})
				
				//初始页面的右键
				$(".closeInitMenu").click(function(){
					$("#initMenu").hide();
				})
				
				var listPad = [];
				var jlb;
				var indD = 0;
				var indSelect = 1;
				var indS = 0;
				$(".showHistoryScore").click(function(){
					$("#initMenu").hide();
					$(".historyScore").slideDown();
					//
					var sh = ""
					var jn = ""
					var jn1 = ""
					var vb = ""
					var vc = ""
					var hd = ""
					if(storage.bs!=null&&storage.bs2!=null){
						//var sh ="<div style='text-align: left;width: 1000px;margin:auto auto;padding: 3px;'><span style='font-weight: 500;font-size: 26px;'>时间：</span><hr color='#888888'/><div style='margin-left: 8px;'><p>分数：</p><p>分数：</p><p>分数：</p><p>分数：</p></div></div>";
						
						//取出历史记录
						var s = JSON.parse(storage.bs)
						var s2 = JSON.parse(storage.bs2)
						console.log(s);
						console.log(s2);
						var hb = 0
						var hg = 0
						var vf = 0;
						var vx = 0;
						var nb = 0;
						
						for(var i = 0;i<s.length;i++){
							for(var j= 0;j<(s[i]).length;j++){
								if(j==2){
									nb++;
									storage.snb = nb
									var b2 = ((s[i])[j])
									var indexOfFirst = (s[i])[j].indexOf("-");
									var indexOfSecond = (s[i])[j].indexOf("-",indexOfFirst+1);
									var indThird = (s[i])[j].indexOf("-",indexOfSecond+1);
									var m2 = (s[i])[j].indexOf(":");
									var m3 = ((s[i])[j]).substring(0,(m2-2)).trim();
									var b = ((s[i])[j]).substring((indexOfFirst+1),indexOfSecond)+"月"+((s[i])[j]).substring((indexOfSecond+1),(indexOfSecond+3))+"号"
//									if(sh!=""){
//										for(var jh = 0;jh<listPad.length;jh++){
//											alert(m3)
//											if(listPad[jh]!=m3){
//												//sh+="<div id='"+nb+"' style='text-align: left;width: 1000px;margin:auto auto;padding: 3px;padding-bottom:20px'><span title='"+(s[i])[j]+"' class='timeHistoty' style='font-weight: 500;font-size: 23px;'><em>"+b2+"</em></span><hr color='#888888'/><p></p></div>"
//												//listPad.push(m3)
//												console.log(1)
//											}
//										}
//									}else{
//										sh+="<div id='"+nb+"' style='text-align: left;width: 1000px;margin:auto auto;padding: 3px;padding-bottom:20px'><span title='"+(s[i])[j]+"' class='timeHistoty' style='font-weight: 500;font-size: 23px;'><em>"+b2+"</em></span><hr color='#888888'/><p></p></div>"
//										listPad.push(m3)
//									}
									if(sh!=""){
										console.log("m3:"+m3+",jlb:"+jlb)
										if(m3!=jlb){
											sh+="<div id='"+nb+"' style='text-align: left;width: 1000px;margin:auto auto;padding: 3px;padding-bottom:20px'><span title='"+(s[i])[j]+"' class='timeHistoty' style='font-weight: 500;font-size: 23px;'><em>"+m3+"</em></span><hr color='#888888'/><p></p></div>"
											if(hg==8){
													$(".navUl").css("overflow","auto")
													$(".navUl").css("height","200px")
											}
											hg++;
											hd += "<li id = 'li"+hg+"' style='border-bottom:1px solid antiquewhite'><span style='padding-right:4px;color:red;font-size:8px'><em>"+hg+"</em>.</span><span dateId='"+(s[i])[j]+"'>"+b+"</span><span style='float:right;padding-left:1px'>></span></li>"
											jlb = m3
											indS++;
											listPad.push(indS)
											indS = 0;
										}else{
											indS++;
											
											
											jlb = m3
											
											
										}
									}else{
										hg++;
										sh+="<div id='"+nb+"' style='text-align: left;width: 1000px;margin:auto auto;padding: 3px;padding-bottom:20px'><span title='"+(s[i])[j]+"' class='timeHistoty' style='font-weight: 500;font-size: 23px;'><em>"+m3
										+"</em></span><hr color='#888888'/><p></p></div>"
										hd += "<li id = 'li"+nb+"' style='border-bottom:1px solid antiquewhite'><span style='padding-right:4px;color:red;font-size:8px'><em>"+nb+"</em>.</span><span dateId='"+(s[i])[j]+"'>"+b+"</span><span style='float:right;padding-left:1px'>></span></li>"
										jlb = m3
									}
									
								}
							}
						}
						listPad.push(indS)
						sh+= "<div style='height:700px'></div>"
						$(".navUl>li").remove();
						$(".navUl").append(hd)
						$(".historyScore>div").remove();
						$(".historyScore").append(sh);
						
						
						
						for(var i = 0;i<s.length;i++){
							for(var j= 0;j<(s[i]).length;j++){
								var le = parseInt(listPad[i])
								if(j==0){
									for(var u1 = 0;u1<(le);u1++){
										jn1+="<span style='margin-left:8px'>初始时间："+(s[i])[j]+"</span>"
										$(".historyScore>div>p:eq("+i+")>span:eq("+u1+")").insertAfter(jn1)
										jn1 = ""
									}
//									jn="<span style='margin-left:8px'>初始时间："+(s[i])[j]+"</span>"
//									$(".historyScore>div>p:eq("+hb+")").append(jn)
//									hb++;
								}
								if(j==1){
									console.log(le+"--le")
									for(var u = 0;u<(le);u++){
										indD++;
										jn+="<span style='margin-left:8px'>这是您的第"+indD+"场游戏</span><br/>"
									}
									$(".historyScore>div>p:eq("+i+")").prepend(jn)
									jn = ""
									//$("#topId>span").html(indD);
											
//									jn="<span style='margin-left:8px'>这是您的第"+(s[i])[j]+"场游戏</span>"
//									$(".historyScore>div>p:eq("+hg+")").append(jn)
//									hg++;
//									$("#topId>span").html(hg);
								}
							}
						}
						
						
						
//						for(var i = 0;i<s2.length;i++){
//							for(var j= 0;j<(s2[i]).length;j++){
//								if(j==1){
//									vc="<span style='margin-left:8px'>总共约用时："+(s2[i])[j]+"(秒)</span>"
//									$(".historyScore>div>p:eq("+vx+")").append(vc)
//									vx++;
//								}
//								if(j==0){
//									vb="<span style='margin-left:8px'>分数："+(s2[i])[j]+"</span>"
//									$(".historyScore>div>p:eq("+vf+")").append(vb)
//									vf++;
//								}
//							}
//						}
						
						$(window).scroll(function() {
							for(var y = 1;y<=storage.snb;y++){
								//var toTopHeight = $("#"+y+"").offset().top;
								var topId = $("#topId").offset().top;
								if( $(document).scrollTop() > topId ){
									$(".historyScore>p:eq(0)").css("box-shadow","1.5px 1.5px 1.5px 1.5px #999");
									$(".goTop").show();
									var num = "总计"+$("#topId>span").html()+"条数据";
									$(".scrollTotal").html(num)
								}else{
									$(".historyScore>p:eq(0)").css("box-shadow","");
									$(".goTop").hide();
									$(".scrollTotal").html("")
								}
								
//								if( $(document).scrollTop() > toTopHeight ){
//									if(y>2){
//										$(".scrollHtml").html($(".timeHistoty:eq("+(y-1)+")").attr("title"))
//									}else{
//										$(".scrollHtml").html("")
//									}
//									
//									$(".navUl>li:eq("+(y-1)+")").css("background","wheat").siblings().css("background","")
//									var pos = parseInt($(".navUl>li:eq("+(y-1)+")").index())+1;
//									location.hash = "#li"+pos
//								}else{
//								}
								
							}
						})
						
						
						$(".historyScore>div>p>span").mousemove(function(){
							$(this).css("color","blue")
						})
						$(".historyScore>div>p>span").mouseout(function(){
							$(this).css("color","")
						})
						
						$(".navUl>li").mouseover(function(e){
							var dateDetail = $(this).children("span:eq(1)").attr("dateId")
							$(".ulDetail").html(dateDetail);
							$(".ulDetail").show();
							$(".ulDetail").css({"left":(e.pageX+38)+"px","top":(e.pageY-20)+"px"})
							$(this).children("span:eq(2)").html("")
							
						})
						
						$(".navUl>li").mouseout(function(){
							$(".ulDetail").hide();
							$(this).children("span:eq(2)").html(">")
							
						})

						$(".goTop").click(function(){
							location.hash = "#topId"
						})
						
						$(".navUl>li").click(function(){
							var pos = parseInt($(this).index())+1;
							location.hash = "#"+pos
							
						})
						
					}else{
						var sy = "<div style='text-align: left;width: 1000px;margin:auto auto;padding: 3px;'><p><h3>暂无记录</h3></p></div>";
						$(".historyScore>div").remove();
						$(".historyScore").append(sy);
						$(".navUl").hide();
					}
					
				})
				
				$(".closeHistoryScore").click(function(){
					$(".historyScore").slideUp();
				})
//				$(".clearStorage").click(function(){
//					$("#initMenu").hide();
//					
//					var f = prompt("请输入密码：");
//					if(f=="11"){
//						alert("密码正确，缓存已清！")
//						storage.clear();
//						history.go(0)
//					}else{
//						alert("密码错误")
//					}
//				})
				$(".clearCookie,#secondMenu").mousemove(function(e) {
					$("#secondMenu").show();
				})
				$("#secondMenu,.clearCookie").mouseout(function(e) {
					$("#secondMenu").hide();
				})
				
				$(".lockOnShowShadow").mousedown(function(e) {
					if(sessionstorage.sessionPass!=null){
						if(3 == e.which){
							$("#menu").hide();
//							alert(document.documentElement.clientHeight+"c")
//							alert(document.documentElement.scrollHeight+"o")							
							if((e.pageY+220) > document.documentElement.clientHeight&&(e.pageX+250) > document.documentElement.clientWidth){
								$("#anotherMenu").css({"position":"absolute","left":(e.pageX-250)+"px","top":(e.pageY-220)+"px"})
								$("#anotherMenu").show()
							}else if ((e.pageY+220) > document.documentElement.clientHeight){
								$("#anotherMenu").css({"position":"absolute","left":e.pageX+"px","top":(e.pageY-220)+"px"})
								$("#anotherMenu").show();
							}else if((e.pageX+250) > document.documentElement.clientWidth){
								$("#anotherMenu").css({"position":"absolute","left":(e.pageX-250)+"px","top":e.pageY+"px"})
								$("#anotherMenu").show()
							}else if((e.pageY+220) < document.documentElement.clientHeight||(e.pageX+250)< document.documentElement.clientWidth){
								$("#anotherMenu").css({"position":"absolute","left":e.pageX+"px","top":e.pageY+"px"})
								$("#anotherMenu").show();
							}
							
						}else if(e.which==1){
							$("#anotherMenu").fadeOut();
						}
						
					}
				})
				$(".closeAnotherMenu").click(function(){
					$("#anotherMenu").hide();
				})
				var uio = 1
				$(".open").click(function(){
					$(".setBkgTitle").slideUp();
					if(uio==1){
						$(".buttonGroup").show();
						$(".buttonGroup").animate({"width":"200px"},"2000")
						$("#anotherMenu").hide();
						uio = 2;
					}else{
						$(".buttonGroup").fadeOut("3000");
						$(".buttonGroup").animate({"width":"0px"},"4000")
						$("#anotherMenu").hide();
						uio = 1;
					}
				})
				function saveBkg(){
					var Bkgid = $(".lockOnShow").attr("id")
					storage.sbkgId = Bkgid;
				}
				$(".saveBkgMenu").click(function(){
					if(sessionstorage.szp==null){
						valM = "此设置只能用于保存除自定义外的图片，自定义还需要在主菜单里的自定义路径里面设置才有效"
						alertModel(valM)
						sessionstorage.szp= 1
					}
					saveBkg();
					$("#anotherMenu").hide();
					valM = "设置成功！"
					alertModel(valM)
				})
				
				$(".closeMenu").click(function(){
					$("#smenu").hide()
				})
				//主页面的背景
				$(".setPath").click(function(){
					$(".path").slideDown();
				})
				$(".setMainPageBkg").click(function(){
					$(".mainPageBkgModel").slideDown();
				})
				$(".closeMainBkgModel").click(function(){
					$(".mainPageBkgModel").slideUp();
				})
				$(".closePath").click(function(){
					$(".path").slideUp();
				})
				$(".setMainPageNavSetBy").click(function(){
					$(".alreadySet").show();
					$(".setBy").hide();
					$(".setMainPageNavSetBy").css("border-bottom","1px solid gainsboro")
					$(".setMainPageNavAlreadySet").css("border-bottom","0px solid gainsboro")
				})
				$(".setMainPageNavAlreadySet").click(function(){
					$(".alreadySet").hide();
					$(".setBy").show();
					$(".setMainPageNavAlreadySet").css("border-bottom","1px solid gainsboro")
					$(".setMainPageNavSetBy").css("border-bottom","0px solid gainsboro")
				})
				$(".alreadySet>ul>li:odd()").click(function(){
					var curSpan = $(this).children("span").attr("hid");
					storage.mainBkg = curSpan
					$(".isNotUsed").hide();
					$(this).children("p:last").show();
					$(".mainPageBkg").css({"background":"url(../"+curSpan+".jpg)","background-size":"100% 100%","background-color":curSpan})
					$(".mainPageBkg1").css("z-index","-22")
					$(".mainPageBkg").css("z-index","-11");
					localStorage.spdIsWho = "mainPageBkg"
				})
				var uyq = 0;
				$(".setBy>input").focus(function(){
					uyq = 1;
				})
				$(".setBy>input").blur(function(){
					uyq = 0;
				})
				if(localStorage.smainBkgVal==null){
					localStorage.smainBkgVal = "C:/Users/lenovo/Desktop/xxx.jpg"
				}else{
					$(".setBy>input").val(localStorage.smainBkgVal);
					$(".mainPageBkg1").css({"background":"url("+localStorage.smainBkgVal+")","background-size":"100% 100%"})
				}
				if(localStorage.spdIsWho!=null){
					if(localStorage.spdIsWho=="mainPageBkg1"){
						$(".mainPageBkg1").css("z-index","-11")
						$(".mainPageBkg").css("z-index","-22");
					}else{
						$(".mainPageBkg1").css("z-index","-22")
						$(".mainPageBkg").css("z-index","-11");
					}
				}
				
				$(document).keyup(function(){
					if(uyq==1){
						var val = $(".setBy>input").val();
						if(val!=localStorage.smainBkgVal){
							$(".saveMainPageBkg").css({"background":"deepSkyBlue","cursor":"pointer"})
							//localStorage.smainBkgVal = val;
						}else{
							$(".saveMainPageBkg").css({"background":"gray","cursor":""})
						}
					}
				})
				$(".saveMainPageBkg").click(function(){
					var stat = $(this).css("cursor");
					if(stat=="pointer"){
						var val = $(".setBy>input").val();
						$(this).css({"background":"gray","cursor":""})
						localStorage.smainBkgVal = val;
						$(".mainPageBkg1").css({"background":"url("+localStorage.smainBkgVal+")","background-size":"100% 100%"})
						$(".mainPageBkg1").css("z-index","-11")
						$(".mainPageBkg").css("z-index","-22");
						localStorage.spdIsWho = "mainPageBkg1"
					}
				})
				
				$(".openBgm1").click(function(){
					var bgm = document.getElementById("bgm")
					if(dd==1){
						$(".bgmSetAlert").html("已静音");
						$(".bgmSet").attr("title","启动音乐")
						storage.bgmTurnOnOrOff = 1;
						bgm.muted = true;
						dd++;
					}else{
						$(".bgmSetAlert").html("未静音");
						$(".bgmSet").attr("title","点击静音")
						storage.bgmTurnOnOrOff = 2;
						bgm.muted = false
						dd--;
					}
					$("#thirdMenu").hide();
				})
				
				var dd2 = 1;
				$(".openBgm2").click(function(){
					var bgm2 = document.getElementById("bgm2")
					if(dd2==1){
						storage.bgm2 = 1;
						dd2++;
					}else{
						storage.removeItem("bgm2");
						dd2--;
					}
					$("#thirdMenu").hide();
				})
				
				$(".openBgm").click(function(){
					if(storage.sqm==null){
						var f = confirm("使用这个便利功能需要支付300，是否支付？")
						if(f==true){
							var money = parseInt(storage.scountMoney)
							if(money-300>=0){
								alert("支付成功！")
								storage.scountMoney = money
								storage.sqm= 1
//								alert("支付成功！")
//								storage.scountMoney = restMon-1000
//								storage.setBkgMenu= 1
								$(".lockImgNine").attr("src","../lockOffPng.png")
////								if(sessionstorage.salertone==null){
////									alert("如果长时间没有反应，那就说明视频解析失败或者重新上传噢~亲")
////									sessionstorage.salertone=1
////								}
//								toInputMenu();
//								//toInputFile();
								$("#menu").hide();
							}else[
								alert("钱不够~")
							]
						}else{
							alert("支付取消！")
						}
					}else{
						//$("#thirdMenu").show();
					}
				})
				$(".openBgm,#thirdMenu").mousemove(function(){
					if(storage.sqm!=null){
						$("#thirdMenu").show();
					}
				})
				$(".openBgm,#thirdMenu").mouseout(function(){
					if(storage.sqm!=null){
						$("#thirdMenu").hide();
					}
				})
				
				var jvc = 1;
				$(".flter").click(function(){
					$("#anotherMenu").hide();
					var color = $(".titleContent").css("color")
					if(jvc==1){
						jvc = 2
						$(".lockOnShowShadow").css("background","transparent")
						$(".lockOnShowShadow").css("opacity","")
						storage.sFlter = 1
					}else{
						jvc = 1
						storage.sFlter = 2
						if(color=="rgb(0, 0, 0)"){
							$(".titleContent").css("color","white")
						}
						$(".lockOnShowShadow").css("background","black")
						$(".lockOnShowShadow").css("opacity","0.5")
					}
				})
				$(".lock,#smenu").mousemove(function(){
					$("#smenu").show();
				})
				$(".lock,#smenu").mouseout(function(){
					$("#smenu").hide();
				})
				$("#menu>div").click(function(){
					$("#menu").hide();
				})
				
				var rc = 1
				$(".redC").focus(function(){
					rc = 2;
				})
				
				$(".redC").blur(function(){
					rc = 1;
				})
				
				var gc = 1
				$(".greenC").focus(function(){
					gc = 2;
				})
				
				$(".greenC").blur(function(){
					gc = 1;
				})
				
				var bc = 1
				$(".blueC").focus(function(){
					bc = 2;
				})
				
				$(".blueC").blur(function(){
					bc = 1;
				})
				
				var fixV = 225
				$(document).keyup(function(event){
					if(rc==2){
					if(event.keyCode<65||event.keyCode>90){
						//red
						var rval = parseInt($(".redC").val());
						var gval = parseInt($(".greenC").val());
						var bval = parseInt($(".blueC").val());
						$(".bkg").css("background","rgb("+rval+","+gval+","+bval+")")
					}else{
						return false;
					}
					}
					
					if(gc==2){
					if(event.keyCode<65||event.keyCode>90){
						//green
						
						var rval = parseInt($(".redC").val());
						var gval = parseInt($(".greenC").val());
						var bval = parseInt($(".blueC").val());
						$(".bkg").css("background","rgb("+rval+","+gval+","+bval+")")
					}else{
						return false;
					}
					}
					
					if(bc==2){
					if(event.keyCode<65||event.keyCode>90){
						//green
						var rval = parseInt($(".redC").val());
						var gval = parseInt($(".greenC").val());
						var bval = parseInt($(".blueC").val());
						$(".bkg").css("background","rgb("+rval+","+gval+","+bval+")")
					}else{
						return false;
					}
					}
					
				})
				
				$(".redSet>li:eq(0)").mousedown(function(){
					var rval = parseInt($(".redC").val());
					if(rval+1>225){
						$(".redC").val(0)
					}else{
						$(".redC").val(rval+1)
						var rval = parseInt($(".redC").val());
						var gval = parseInt($(".greenC").val());
						var bval = parseInt($(".blueC").val());
						$(".bkg").css("background","rgb("+rval+","+gval+","+bval+")")
					}
				})
				
				$(".redSet>li:eq(1)").mousedown(function(){
					var rval = parseInt($(".redC").val());
					if(rval-1<0){
						$(".redC").val(225)
					}else{
						$(".redC").val(rval-1)
						var rval = parseInt($(".redC").val());
						var gval = parseInt($(".greenC").val());
						var bval = parseInt($(".blueC").val());
						$(".bkg").css("background","rgb("+rval+","+gval+","+bval+")")
					}
				})
				
				$(".greenSet>li:eq(0)").mousedown(function(){
					var rval = parseInt($(".greenC").val());
					if(rval+1>225){
						$(".greenC").val(0)
					}else{
						$(".greenC").val(rval+1)
						var rval = parseInt($(".redC").val());
						var gval = parseInt($(".greenC").val());
						var bval = parseInt($(".blueC").val());
						$(".bkg").css("background","rgb("+rval+","+gval+","+bval+")")
					}
				})
				
				$(".greenSet>li:eq(1)").mousedown(function(){
					var rval = parseInt($(".greenC").val());
					if(rval-1<0){
						$(".greenC").val(225)
					}else{
						$(".greenC").val(rval-1)
						var rval = parseInt($(".redC").val());
						var gval = parseInt($(".greenC").val());
						var bval = parseInt($(".blueC").val());
						$(".bkg").css("background","rgb("+rval+","+gval+","+bval+")")
					}
				})
				
				$(".blueSet>li:eq(0)").mousedown(function(){
					var rval = parseInt($(".blueC").val());
					if(rval+1>225){
						$(".blueC").val(0)
					}else{
						$(".blueC").val(rval+1)
						var rval = parseInt($(".redC").val());
						var gval = parseInt($(".greenC").val());
						var bval = parseInt($(".blueC").val());
						$(".bkg").css("background","rgb("+rval+","+gval+","+bval+")")
					}
				})
				
				$(".blueSet>li:eq(1)").mousedown(function(){
					var rval = parseInt($(".blueC").val());
					if(rval-1<0){
						$(".blueC").val(225)
					}else{
						$(".blueC").val(rval-1)
						var rval = parseInt($(".redC").val());
						var gval = parseInt($(".greenC").val());
						var bval = parseInt($(".blueC").val());
						$(".bkg").css("background","rgb("+rval+","+gval+","+bval+")")
					}
				})
				
				$(".saveMyColor").click(function(){
					$(".setGameBkgModelBy").hide();
					var rval = parseInt($(".redC").val());
					var gval = parseInt($(".greenC").val());
					var bval = parseInt($(".blueC").val());
					storage.sred = rval;
					storage.sgreen = gval;
					storage.sblue = bval;
				})
				
				
//				var c = 0;
//			    var tid;
//			    var btn = window.document.getElementById("button");
//			    btn.onclick = function(e){
//			        c++;
//			            btn.innerHTML = c;
//			    };
//			    btn.onmousedown = function(e){
//			        tid = setInterval(function(){
//			            c++;
//			            btn.innerHTML = c;
//			        },500);
//			    };
//			    btn.onmouseup = function(e){
//			        clearInterval(tid);
//			    }
//			    btn.onmouseout = function(e){
//			        clearInterval(tid);
//			    }
				
				$(".greenSet>li:eq(0)").click(function(){
					
				})
				
				$(".greenSet>li:eq(1)").click(function(){
					
				})
				
				$(".blueSet>li:eq(0)").click(function(){
					
				})
				
				$(".blueSet>li:eq(1)").click(function(){
					
				})
				
				$(".setGameBkgBy").click(function(e){
					if(storage.sgameLock1==null){
						var h = confirm("自定义需要支付1000，是否确定？")
						var restMoney = parseInt(storage.scountMoney)
						if(restMoney-1000>=0){
							alert("支付成功！")
							storage.sgameLock1 = 1;
							storage.scountMoney = restMoney
							$(".setGameBkgModelBy").show();
							$(".setGameBkgModelBy").css({"left":e.pageX+"px","top":e.pageY+"px"})
							var color = $(".bkg").css("background-color")
							var ind1 = color.indexOf("(")
							var indOne = parseInt(color.indexOf(","))
							$(".redC").val(color.substring((ind1+1),indOne))
							var ind2 = parseInt(color.indexOf(",",indOne+1))
							var ind3 = parseInt(color.indexOf(")"))
							var sub2 = color.substring((indOne+1),ind2)
							var sub3 = color.substring((ind2+1),ind3)
							$(".blueC").val(sub3)
							$(".greenC").val(sub2)
						}else{
							alert("钱不够哟~")
						}
					}else{
						$(".setGameBkgModelBy").show();
						$(".setGameBkgModelBy").css({"left":e.pageX+"px","top":e.pageY+"px"})
						var color = $(".bkg").css("background-color")
							var ind1 = color.indexOf("(")
							var indOne = parseInt(color.indexOf(","))
							$(".redC").val(color.substring((ind1+1),indOne))
							var ind2 = parseInt(color.indexOf(",",indOne+1))
							var ind3 = parseInt(color.indexOf(")"))
							var sub2 = color.substring((indOne+1),ind2)
							var sub3 = color.substring((ind2+1),ind3)
							$(".blueC").val(sub3)
							$(".greenC").val(sub2)
					}
				})
				
				$(".closeModel").click(function(){
					$(".setGameBkgModelBy").hide();
				})
				
//				$(".setMyselfBkg").click(function(){
//					toInputFile();
//					$("#anotherMenu").hide();
////					$("")
//				})

				//判断是否是假日
					var img = $("#testNone");
		            img.load(function () {
						if(sessionstorage.sessionPass!=null){
		                	img.attr("isLoad", "true");
		               		$(".hoildayCele").show();
		               		var str = "<li title = '节假日的特别活动奖励'>随机场次游戏金币翻倍</li>"
		               		$(".pauseSpecial").append(str);
		               }
		            });
		            img.error(function() {
		            	if(sessionstorage.sessionPass!=null){
		                	 $(".hoildayCele").hide();
		                }
		            });
		            $(".closeHoildayCele").click(function(){
		            	$(".hoildayCele").fadeOut();
		            })
		            //判断是否联网
		            var ifFrame = $("#isOnLine");
		            ifFrame.load(function () {
		            	if(sessionstorage.sessionPass!=null){
		               		 ifFrame.attr("isLoad", "true");
		               }
		            });
		            ifFrame.error(function() {
		            	if(sessionstorage.sessionPass!=null){
		                 	$(".alertInternetIsNot").show();
		               }
		            });
	            //判断是否为新版本
	            var newVersionImg = $("#testIsNewVersion")
	            newVersionImg.load(function () {
	               newVersionImg.attr("isLoad", "true");
	               $(".alertIsNotNewVersion").show();
	            });
	            newVersionImg.error(function() {
	            	$(".alertIsNotNewVersion").hide();
	            });
	            $("#getNewVersion").click(function(){
		           	var version = $("#testIsNewVersion").attr("isLoad")
		           	if(version=="false"){
		           		valM = "已是最新版本！"
		           		alertModel(valM)
		           	}else{
		           		valM = "已在下载列表里,可点击左下角的文件进行查看哟~"
		           		alertModel(valM)
		           		location.href = "https://www.jianguoyun.com/p/DYH3kd0Qu-DDBxjP6L4B/";
		           	}
		        })

				$(".setMusicPath>input").blur(function(){
					var v = $(this).val();
					if(v!=""){
						if(v!=storage.br){
							$(".bgm").attr("src",v);
							storage.br = v
						}
						$(this).hide();
						$(".setMusicPath>span").html("音乐路径:"+v)
						$(".setMusicPath>span").attr("title","游戏音乐路径:"+v)
						$(".setMusicPath>span").show();
					}else{
						storage.removeItem("br")
						$(".setMusicPath>span").hide();
						$(this).show();
						$(".bgm").attr("src","../bgm.mp3");
					}

				})
				
				function imgLoad(img, callback) {
		            var timer = setInterval(function() {
		                if (img.complete) {
		                    callback(img)
		                    clearInterval(timer)
		                }
		            }, 50)
		        }
				function afterpanDuan1(){
					var newSetPath1 = $("#p1").html();
					if(newSetPath1==setPath1){
						 $("#p1").html("加载失败！");
					}
				}
				
				$(".setLockPath>input").blur(function(){
					var v = $(this).val();
					if(v!=""){
						if(v!=storage.slockPath){
							$(".lockOnShow").css({"background":"url("+storage.slockPath+") no-repeat","background-size":"100% 100%"});
				        	$(".video1").attr("src",storage.slockPath)
							storage.slockPath = v
						}
						$(this).hide();
						$(".setLockPath>span").html("屏保路径:"+v)
						$(".setLockPath>span").attr("title","屏保图片路径:"+v)
						$(".setLockPath>span").show();
					}else{
						$(this).show();
						$(".setLockPath>span").hide();
						$(".lockOnShow").css({"background":""});
				        $(".video1").attr("src","")
				        storage.removeItem("slockPath")
					}

				})
				
				var setPath1;
				$(".setMenuPath>input").blur(function(){
					var v = $(this).val();
					if(v!=""){
						if(v!=storage.sMenuBkg){
							$("#p1").show();
							$("#p1").html("正在加载中...");
							setPath1 = $("#p1").html();
							storage.sMenuBkg = v
							$("#menu").css({"background":"url("+storage.sMenuBkg+") no-repeat","background-size":"100% 100%"});
				        	$("#anotherMenu").css({"background":"url("+storage.sMenuBkg+") no-repeat","background-size":"100% 100%"});
				        	$("#otherMenu").css({"background":"url("+storage.sMenuBkg+") no-repeat","background-size":"100% 100%"});
				        	$("#smenu").css({"background":"url("+storage.sMenuBkg+") no-repeat","background-size":"100% 100%"});
				        	$("#secondMenu").css({"background":"url("+storage.sMenuBkg+") no-repeat","background-size":"100% 100%"});
				        	$("#thirdMenu").css({"background":"url("+storage.sMenuBkg+") no-repeat","background-size":"100% 100%"});
				        	$("#initMenu").css({"background":"url("+storage.sMenuBkg+") no-repeat","background-size":"100% 100%"});
				        	imgLoad(menu, function() {
				        		alert(1)
					            $("#p1").html("加载成功！");
					        })
				        	setTimeout(afterpanDuan1,3000)
						}
						$(this).hide();
						$(".setMenuPath>span").html("菜单路径:"+v)
						$(".setMenuPath>span").attr("title","菜单图片路径:"+v)
						$(".setMenuPath>span").show();
					}else{
						$("#menu").css({"background":"smokewhite","background-size":"100% 100%"});
				        	$("#anotherMenu").css({"background":"smokewhite","background-size":"100% 100%"});
				        	$("#otherMenu").css({"background":"smokewhite","background-size":"100% 100%"});
				        	$("#smenu").css({"background":"smokewhite","background-size":"100% 100%"});
				        	$("#secondMenu").css({"background":"smokewhite","background-size":"100% 100%"});
				        	$("#thirdMenu").css({"background":"smokewhite","background-size":"100% 100%"});
				        	$("#initMenu").css({"background":"smokewhite","background-size":"100% 100%"});
						$(this).show();
						$(".setMenuPath>span").hide();
						storage.removeItem("sMenuBkg")
					}

				})
				
				$(".setMenuPath>span").click(function(){
					$(".setMenuPath>span").hide();
					$(".setMenuPath>input").show();
					$(".setMenuPath>input").val(storage.sMenuBkg)
				})
				
				$(".setLockPath>span").click(function(){
					$(".setLockPath>span").hide();
					$(".setLockPath>input").show();
					$(".setLockPath>input").val(storage.slockPath)
				})
				
				$(".setMusicPath>span").click(function(){
					$(".setMusicPath>span").hide();
					$(".setMusicPath>input").show();
					$(".setMusicPath>input").val(storage.br)
				})
				
				function messageDesign(){
					var indPoi = parseInt($(".addTitleHelpOrMessage>li:last").attr("lastId"))-1;
					for(var ipzq = 0;ipzq<=indPoi;ipzq++){
						var h = $(".addTitleHelpOrMessage>li:eq("+ipzq+")").html();
						if(h.length>=4){
							var h2 = h.substring(0,4)
							$(".addTitleHelpOrMessage>li:eq("+ipzq+")").html(h2+"...");
						}
						$(".addTitleHelpOrMessage>li:eq("+ipzq+")").attr("title",h)
					}
				}
				
				$(".addTitleHelpOrMessage>li").mousemove(function(){
					
				})
				
				$(".hrTotal>span:eq(0)").click(function(){
					$(".videoHelpExit").hide();
					$(".messageNew").css("color","blue")
					$(".hrTotalModel").show();
					$(".modelContent>h3>span").html("消息")
					$(".addMessageCon").remove();
					$(".addHelpContent").remove();
					$(".searchVal").hide();
					$(".searchCon").hide();
					if(storage.snewMessage!=1){
						$(".nbsp").show();
						$(".getMessage").show();
						$(".addHelpContentExtra").show();
						$(".deleteMessage").show();
						$(".messageLocation").show();
						$(".messageDate").show();
					}else{
						$(".nbsp").hide();
						$(".getMessage").hide();
						$(".addHelpContentExtra").hide();
						$(".deleteMessage").hide();
						$(".messageLocation").hide();
						$(".messageDate").hide();
					}
					
				})
				
				$(".searchVal").focus(function(){
					$(this).css({"border":"o","outline":"none"})
				})
				
				var helpTitle = ["关于这个密码的问题","快捷键无法触发？","密码的快捷键为什么没有用？","一些作者所熟知的基本快捷键(ps:不仅限于这里面)","如何缩放浏览器？","其他的一些琐碎问题","谷歌浏览器不会用，连百度都找不到？","想手动玩一下自己创一个浏览器页面..."]
				var helpContent = ["相当于一个登陆的过程，只能登陆后才能体验更多的功能,刚开始只能手动点击节日版进行登录，登录过后即可使用密码快捷键（无需密码）快速切换模式","需要点击一下页面才能触发，也可以直接摁Tab再加相应的快捷键即可","先尝试点击页面一下，再摁相应的快捷键有没有用，如果没有用，那就说明密码快捷键已经更换，需要点击右键菜单里的[获取]设置获取一下","Ctrl+c：复制(前提要选中文字)，Ctrl+v:粘贴，Ctrl+x：剪切(也要选中文字)，Alt+鼠标：word工具里面可以并列选中多排文字，Alt+Tab：切换电脑窗口页面(不仅限于这个窗口，还有Alt+Shift+Tab为反向切换)，window+L:锁定电脑","按住Ctrl+鼠标滚动或者找浏览器上有没有放大镜图标的","①在这里面出现最多的应该就是那种白色的提示框，这是系统自带的，所以用起来比较方便（如果没有出现，说明你已经把它禁掉了，去设置里面看看应该有可以重新开启的按钮）","在浏览器上方有一个输入框，输入www.baidu.com不就可以跳到百度了吗，当然也不用这么麻烦，因为你浏览器东西浏览多了，可能浏览器主页就悄悄给你篡改了，真是好人性化[滑稽]~","有点小麻烦，你还是别想了[滑稽]..."]
				$(".hrTotal>span:eq(1)").click(function(){
					$(".helpProvide").css("color","blue")
					$(".hrTotalModel").show();
					$(".videoHelpExit").show();
					$(".modelContent>h3>span").html("帮助")
					var str =""
					var tt = ""
					for(var i = 0;i<helpTitle.length;i++){
						if(i==(helpTitle.length-1)){
							str += "<div id='div"+i+"' style='margin:2px;padding-bottom:200px' class='addHelpContent'><h5>"+(i+1)+"."+helpTitle[i]+"</h5><p>"+helpContent[i]+"</p></div>"							
						}else{
							
							str += "<div id='div"+i+"' style='margin:2px' class='addHelpContent'><h5>"+(i+1)+"."+helpTitle[i]+"</h5><p>"+helpContent[i]+"</p></div>"
						}
						if(helpTitle[i].length>=5){
							tt += "<li class='addMessageCon' title='"+helpTitle[i]+"' style='background: gainsboro;border-bottom: 1px solid grey;font-size:13px'>"+helpTitle[i].substring(0,5)+"...</li>"
							
						}else{
							tt += "<li class='addMessageCon' style='background: gainsboro;border-bottom: 1px solid grey;font-size:13px'>"+helpTitle[i]+"</li>"
						}
					}
					$(".addMessageCon").remove();
					$(".addHelpContent").remove();
					$(".addTitleHelpOrMessage").append(tt)
					$(".modelContent").append(str)
					$(".searchCon").show();
					$(".searchVal").show();
					$(".prePage").show();
					$(".nextPage").show();
					$(".nbsp").hide();
						$(".getMessage").hide();
						$(".addHelpContentExtra").hide();
						$(".deleteMessage").hide();
						$(".messageLocation").hide();
						$(".messageDate").hide();
						$(".addTitleHelpOrMessage>li").click(function(){
							var index = $(this).index();
							location.hash = "#div"+index
						})
				})
				
				//视频帮助
				$(".videoHelpExit").click(function(){
					$(".videoHelpModel").show();
				})
				$(".closeVideoHelpModel").click(function(){
					$(".videoHelpModel").fadeOut();
				})
				$(".saveApp").click(function(){
					$(".saveApp").css("background","orange")
					$(".openGame").css("background","gray")
					$(".pathCopy").css("background","gray")
					$(".videoHelpModel>div>video").attr("src","https://uvd.yupoo.com/xfdepersonalyu/21724167.mp4")
				})
				$(".openGame").click(function(){
					$(".openGame").css("background","orange")
					$(".saveApp").css("background","gray")
					$(".pathCopy").css("background","gray")
					$(".videoHelpModel>div>video").attr("src","https://uvd.yupoo.com/xfdepersonalyu/21724662.mp4")
				})
				$(".pathCopy").click(function(){
					$(".openGame").css("background","gray")
					$(".saveApp").css("background","gray")
					$(".pathCopy").css("background","orange")
					$(".videoHelpModel>div>video").attr("src","https://uvd.yupoo.com/xfdepersonalyu/21723316.mp4")
				})
				
				
				$(".helpProvide").click(function(){
					$(".helpProvide").css("color","blue")
					$(".messageNew").css("color","black")
					$(".modelContent>h3>span").html("帮助")
					$(".videoHelpExit").show();
					var str =""
					var tt = ""
					for(var i = 0;i<helpTitle.length;i++){
						str += "<div id='div"+i+"' style='margin:2px' class='addHelpContent'><h5>"+(i+1)+"."+helpTitle[i]+"</h5><p>"+helpContent[i]+"</p></div>"
						if(helpTitle[i].length>=5){
							tt += "<li class='addMessageCon' title='"+helpTitle[i]+"' style='background: gainsboro;border-bottom: 1px solid grey;font-size:13px'>"+helpTitle[i].substring(0,5)+"...</li>"
							
						}else{
							tt += "<li class='addMessageCon' style='background: gainsboro;border-bottom: 1px solid grey;font-size:13px'>"+helpTitle[i]+"</li>"
						}
						
						if(i==0){
							if(localStorage.pdIsNotFirstSearch!=null){
								var r1 = Math.floor(Math.random() * 9 + 1); //1-10
								$(".searchVal").val(helpTitle[1])
							}
						}
					}
					$(".addMessageCon").remove();
					$(".addHelpContent").remove();
					$(".addTitleHelpOrMessage").append(tt)
					$(".nbsp").hide();
					$(".getMessage").hide();
					$(".addHelpContentExtra").hide();
					$(".deleteMessage").hide();
					$(".messageLocation").hide();
					$(".messageDate").hide();
					$(".modelContent").append(str)
					$(".searchCon").show();
					$(".searchVal").show();
					$(".prePage").show();
					$(".nextPage").show();
						$(".addTitleHelpOrMessage>li").click(function(){
							var index = $(this).index();
							location.hash = "#div"+index
						})
				})
				
				var tpo;
				var yuo = []
				$(".searchVal").click(function(){
					tpo = setInterval(function(){
			            var pstr = ""
						var val = $(".searchVal").val();
						if(val==""){
				        	var str =""
							for(var i = 0;i<helpTitle.length;i++){
									str += "<div id='div"+i+"' style='margin:2px' class='addHelpContent'><h5>"+(i+1)+"."+helpTitle[i]+"</h5><p>"+helpContent[i]+"</p></div>"
							}
							$(".addHelpContent").remove();
							$(".modelContent").append(str)
						}else{
							if(storage.sSearch==null){
								storage.sSearch = val;	
							}else{
								if(storage.sSearch!=val){
									if(val!=""){
										for(var h = 0;h<helpTitle.length;h++){
											if(helpTitle[h].indexOf(val)!="-1"){
												if(helpTitle[h].length<=8){
													pstr+="<li cid = '"+h+"' style='background:gainsboro;padding-left:4px' title = '"+helpTitle[h]+"'>"+helpTitle[h]+"</li>"
												}else{
													pstr+="<li cid = '"+h+"' style='background:gainsboro;padding-left:4px' title = '"+helpTitle[h]+"'>"+helpTitle[h].substring(0,8)+"...</li>"
												}
												yuo.push(h)
											}else{
												
											}
										}
										$(".searchLi>li:not(:first)").remove();	
										$(".searchLi").append(pstr)
										if(pstr!=""){
											$(".searchVal").css("border-bottom","0px")
											
										}
									}else{
										$(".searchLi>li:not(:first)").remove();	
									}
									storage.sSearch = val
								}else{
										
								}
							}
						}
						
						$(".searchLi>li:not(:first)").mousemove(function(){
				        	$(this).css("background","ghostwhite")
				        })
				        $(".searchLi>li:not(:first)").mouseout(function(){
				        	$(this).css("background","gainsboro")
				        })
				        $(".searchLi>li:not(:first)").click(function(){
				        	var ind = $(this).attr("cid");
				        	var str =""
							for(var i = 0;i<helpTitle.length;i++){
								if(i==ind){
									str += "<div id='div"+i+"' style='margin:2px' class='addHelpContent'><h5>"+(i+1)+"."+helpTitle[i]+"</h5><p>"+helpContent[i]+"</p></div>"
								}
							}
							$(".addHelpContent").remove();
							$(".modelContent").append(str)
				        })
				        
				        $(".searchCon").click(function(){
				        	localStorage.pdIsNotFirstSearch = 1;
				        	var str =""
				        	for(var j=0;j<yuo.length;j++){
				        		for(var i = 0;i<helpTitle.length;i++){
				        			if(i==yuo[j]){
				        				str += "<div id='div"+i+"' style='margin:2px' class='addHelpContent'><h5>"+(i+1)+"."+helpTitle[i]+"</h5><p>"+helpContent[i]+"</p></div>"
				        			}else{
//				        				str += "<div style='margin:2px' >未找到相关有用信息...</div>"
				        			}
				        		}
				        	}
				        	if(str==""){
				        		str = "<div class='addHelpContent' style='margin:2px' >未找到相关有用信息...</div>"
				        	}
							$(".addHelpContent").remove();
							$(".modelContent").append(str)
				        })
				        
			        },1000);
				})
				
				$(".searchVal").blur(function(){
					//var s = $(".addHelpContent").html();
					clearInterval(tpo)
					setTimeout("$('.searchLi>li:not(:first)').remove()","200")
				})
				
				messageDesign();
				$(".messageNew").click(function(){
					$(".helpProvide").css("color","black")
					$(".messageNew").css("color","blue")
					$(".modelContent>h3>span").html("消息")
					$(".addMessageCon").remove();
					$(".addHelpContent").remove();
					$(".searchVal").hide();
					$(".videoHelpExit").hide();
					$(".searchCon").hide();
					if(storage.snewMessage!=1){
						$(".nbsp").show();
						$(".getMessage").show();
						$(".addHelpContentExtra").show();
						$(".deleteMessage").show();
						$(".messageLocation").show();
						$(".messageDate").show();
					}else{
						$(".nbsp").hide();
						$(".getMessage").hide();
						$(".addHelpContentExtra").hide();
						$(".deleteMessage").hide();
						$(".messageLocation").hide();
						$(".messageDate").hide();
					}
				})
				
				$(".closeHrTotalModel").click(function(){
					$(".hrTotalModel").fadeOut();
					$(".helpProvide").css("color","black")
					$(".messageNew").css("color","black")
				})
				
				$(".setMySelfColor>li").mousemove(function(){
					$(this).css({"border":"1px solid grey","transform":"skewX(-30deg)","transition":"all 0.2s"})
				})
				
				$(".setMySelfColor>li").mouseout(function(){
					$(this).css({"border":"1px solid gainsboro","transform":"skewX(0deg)"})
				})
				
				var pol = 0;
				$(".getMessage").click(function(){
					if(storage.slk==null){
						pol++;
						if(pol<4){
							$(this).css("background","gainsboro");
							$(this).html("已查收")
							storage.newPlayerMessage = 1
							$(".alertMessage").hide();
							if(storage.scountMoney!=null){
								var mon = parseInt(storage.scountMoney)
						
							}else{
								var mon = parseInt($(".money").html())
							}
							storage.scountMoney = mon+300
							$(".money").html(mon+300)
						}else{
							alert("你在干啥呢[滑稽]~，是不是以为我不知道你在刷钱，之前不是都说了禁止恶意刷钱的吗？我是故意留了这么一个bug想考验考验你的，没想到你居然酱紫~")
							var fal = confirm("哼哼，信不信我封了你的号[滑稽]")
							if(fal==true){
								alert("知道怕了就好，下次不准再刷了听到么有")
							}else{
								alert("哼~~~,没收你的作弊钱~[抠鼻]")
							}
							storage.slk = 1
						}
					}else{
						alert("你又干哈，还刷钱是吗？[滑稽]")
					}
				})
				
				$(".deleteMessage").click(function(){
					storage.snewMessage = 1;
					$(".nbsp").hide();
					$(".getMessage").hide();
					$(".addHelpContentExtra").hide();
					$(".deleteMessage").hide();
					$(".messageLocation").hide();
					$(".messageDate").hide();
				})
				
				$(".addMoneyExit").click(function(){
					$(".addMoneyModel").show();
				})
				
				$(".closeAddMonTrick").click(function(){
					$(".addMoneyModel").hide();
				})
				
				//消息&&帮助
				
				$(".addSetColor").click(function(){
					
				})
				

				$(".setGameMusic").click(function(){
					if(storage.setGameBgm==null){
						var t = confirm("自定义游戏音乐需要支付1200，是否确定？")
						if(t==true){
							var restMon = parseInt(storage.scountMoney)
							if(restMon-1200>=0){
								alert("支付成功！")
								storage.scountMoney = restMon-1200
								storage.setGameBgm= 1
								toInputMusic();
//								toInputFile();
//								$("#anotherMenu").hide();
							}else{
								alert("钱不够的说~")
							}
						}else{
							alert("支付取消！")
						}
					}else{
						toInputMusic();
//								toInputFile();
//								$("#anotherMenu").hide();
					}
				})
				
				//shop
				$(".closeShop").click(function(){
					$(".shop").fadeOut();
				})
				$(".shopTo").click(function(){
					$(".shop").show();
					if(storage.scountMoney!=null){
						$(".restMoneyShow>span").html(storage.scountMoney)
					}
				})
				
				$(".shopNav>li:eq(0)").click(function(){
					$(this).css("color","red")
					$(".shopNav>li:eq(1)").css("color","")
					$(".buy").show();
					$(".randGetShop").hide();
				})
				
				$(".shopNav>li:eq(1)").click(function(){
					$(this).css("color","red")
					$(".shopNav>li:eq(0)").css("color","")
					$(".buy").hide();
					$(".randGetShop").show();
				})
				
				
				//game
				var plm = 0;
				$(".anotherGame>div").click(function(){
					plm = 0;
					var i  = $(this).index()
//					alert("left:"+(i-1))
//					alert("right:"+(i+1))
//					alert("top:"+(i%4))
//					alert("bottom:"+(i+4))
					var leftV = $(".anotherGame>div:eq("+(i-1)+")").css("background")
					var topV = $(".anotherGame>div:eq("+(i-4)+")").css("background")
					var rightV = $(".anotherGame>div:eq("+(i+1)+")").css("background")
					var bottomV = $(".anotherGame>div:eq("+(i+4)+")").css("background")
					var val = $(this).css("background")
					if(leftV=="rgb(128, 128, 128) none repeat scroll 0% 0% / 100% 100% padding-box border-box"){
						$(this).css("background","rgb(128, 128, 128) none repeat scroll 0% 0% / 100% 100% padding-box border-box")
						$(".anotherGame>div:eq("+(i-1)+")").css("background",val)
					}else if(topV=="rgb(128, 128, 128) none repeat scroll 0% 0% / 100% 100% padding-box border-box"){
						$(this).css("background","rgb(128, 128, 128) none repeat scroll 0% 0% / 100% 100% padding-box border-box")
						$(".anotherGame>div:eq("+(i-4)+")").css("background",val)
					}else if(rightV=="rgb(128, 128, 128) none repeat scroll 0% 0% / 100% 100% padding-box border-box"){
						$(this).css("background","rgb(128, 128, 128) none repeat scroll 0% 0% / 100% 100% padding-box border-box")
						$(".anotherGame>div:eq("+(i+1)+")").css("background",val)
					}else if(bottomV=="rgb(128, 128, 128) none repeat scroll 0% 0% / 100% 100% padding-box border-box"){
						$(this).css("background","rgb(128, 128, 128) none repeat scroll 0% 0% / 100% 100% padding-box border-box")
						$(".anotherGame>div:eq("+(i+4)+")").css("background",val)
					}
					for(var i = 0;i<16;i++){
						var vIsRight = $(".anotherGame>div:eq("+i+")").css("background");
						if(i==2){
							if(vIsRight=="rgb(128, 128, 128) none repeat scroll 0% 0% / 100% 100% padding-box border-box"){
								plm++;
							}
						}else{
							var indexV = vIsRight.indexOf(".png")
							if(indexV!="-1"){
								var subInd = vIsRight.substring((indexV-2),indexV)
								if(isNaN(subInd)){
									subInd = vIsRight.substring((indexV-1),indexV)
									if(subInd==(i+1)){
										plm++;
									}
								}else{
									if(subInd==(i+1)){
										plm++;
									}
								}
							}
						}
					}
					if(plm==16){
						$(".timeGameModelFinishShadow").show();
						sessionstorage.stimeGameFinish = 1
					}
				})
				
				//model
				$(".initImg").mousemove(function(){
					$(".bigImg").show();
				})
				
				$(".initImg").mouseout(function(){
					$(".bigImg").hide();
				})
				
				$(".smallTimeGameModel").mousemove(function(){
					$(".alertGameOnTime").hide();
					$(".smallTimeGameModel>span:eq(0)").html("»")
					$(".smallTimeGameModel>span:eq(1)").show();
					var curMin = parseInt(new Date().getMinutes());
					var curHour = parseInt(new Date().getHours());
					var befMin = parseInt(sessionstorage.srestMinuteGame)
					var befHour = parseInt(sessionstorage.srestHourGame)
					if(curHour==befHour){
						var reMin = 60-(curMin-befMin)
						if(reMin<=0){
							$(".restMinuteTimeGame").html(0)
							sessionstorage.stimeGameFinish = 1
							$(".playGameOnTime").html("活动已结束")
							$(".playGameOnTime").css({"background":"gray","cursor":""})
						}else{
							$(".restMinuteTimeGame").html(reMin)
						}
					}else{
						$(".restMinuteTimeGame").html(0)
						sessionstorage.stimeGameFinish = 1
						$(".playGameOnTime").html("活动已结束")
						$(".playGameOnTime").css({"background":"gray","cursor":""})
					}
					
				})
				
				$(".timeGameModelFinishShadow").click(function(){
					$(".timeGameModelFinishShadow").hide();
					$(".timeGameModel").hide()
					$(".anotherGame").hide();
					$(".initImg").hide();
					$(".playGameOnTime").html("活动已结束")
					$(".playGameOnTime").css({"background":"gray","cursor":""})
				})
				
				$(".smallTimeGameModel").mouseout(function(){
					$(".smallTimeGameModel>span:eq(0)").html("«")
					$(".smallTimeGameModel>span:eq(1)").hide();
				})
				
				$(".smallTimeGameModel>span:eq(0)").click(function(){
					$(".smallTimeGameModel").hide();
					$(".timeGameModel").show()
					$(".anotherGame").show();
					$(".initImg").show();
					if(sessionstorage.stimeGameFinish!=1){
						if(onPanDuan==2){
							$(".timeGameModelShadow").show();
						}
					}else{
						$(".timeGameModelShadow").show();
					}
				})
				
				$(".closeTimeGame").click(function(){
					$(".smallTimeGameModel").show();
					$(".timeGameModelShadow").hide();
					$(".timeGameModel").hide()
					$(".anotherGame").hide();
					$(".initImg").hide();
				})
				
				var onTimeGameHeight;
				var onTimeGameCount;
				var onPanDuan = 2;
				var saveHeight;
				var saveCount;
				var afterCount;
				function gameOnTime(){
					if(onTimeGameCount-1>=0){
						onTimeGameCount--;
						onTimeGameHeight = onTimeGameHeight-afterCount;
						$(".onTimeGameCountJinDu>div").css("height",onTimeGameHeight+"px")
						$(".onTimeGameCount>span").html(onTimeGameCount);
					}else{
						onPanDuan = 2
						$(".timeGameModelOverShadow").fadeIn();
						$(".onTimeGameCountJinDu").css("height",saveHeight)
						$(".onTimeGameCount>span").html(saveCount)
					}
					if(onPanDuan==1){
						setTimeout(gameOnTime,"1000")
					}
				}
				
				$(".timeGameModelOverShadow").click(function(){
					if(overPanDuan!=2){
						$(".timeGameModelOverShadow").fadeOut();
						onTimeGameHeight = parseInt($(".onTimeGameCountJinDu").css("height"))
						onTimeGameCount = parseInt($(".onTimeGameCount>span").html())
						afterCount = onTimeGameHeight/onTimeGameCount;
						onPanDuan = 1;
						gameOnTime();
					}
				})
				
				var overPanDuan = 1
				$(".timeGameModelOverShadow>div>a:eq(1)").mouseover(function(){
					overPanDuan = 2
				})
				
				$(".timeGameModelOverShadow>div>a:eq(1)").mouseout(function(){
					overPanDuan = 1
				})
				
				$(".timeGameModelOverShadow>div>a:eq(1)").click(function(){
					$(".timeGameModelOverShadow").hide();
					$(".timeGameModel").hide()
					$(".anotherGame").hide();
					$(".initImg").hide();
					$(".smallTimeGameModel").show();
				})
				
				$(".playGameOnTime").click(function(){
					if(sessionstorage.stimeGameFinish!=1){
						$(".timeGameModelShadow").fadeOut();
						onTimeGameHeight = parseInt($(".onTimeGameCountJinDu").css("height"))
						onTimeGameCount = parseInt($(".onTimeGameCount>span").html())
						afterCount = onTimeGameHeight/onTimeGameCount;
						if(onPanDuan==2){
							saveHeight = parseInt($(".onTimeGameCountJinDu").css("height"))
							saveCount = parseInt($(".onTimeGameCount>span").html())
							onPanDuan = 1;
							gameOnTime();
						}
					}
				})
				
				$(".togther").click(function(){
					var check1 =$(this).attr("checked")
					if(check1==null){
						$(this).attr("checked","checked")
						$(this).attr("oid","1")
						$(".knowClose").css({"background":"white","cursor":"pointer"})
					}else{
						$(this).removeAttr("checked")
						$(this).attr("oid","0")
						$(".knowClose").css({"background":"gray","cursor":""})
					}
				})
				
				$(".knowClose").click(function(){
					var oid = $(".togther").attr("oid")
					if(oid=="1"){
						$(".versionTell").fadeOut();
						storage.stell = 1
						
					}
				})
				
//				$(".anotherGame")
				
				$(".setMyselfBkg1").click(function(){
					if(storage.setBkgFour==null){
						var t = confirm("自定义背景需要支付2000，是否确定？")
						if(t==true){
							var restMon = parseInt(storage.scountMoney)
							if(restMon-2000>=0){
								alert("支付成功！")
								storage.scountMoney = restMon-2000
								storage.setBkgFour= 1
								$(".lockImgFour").attr("src","../lockOffPng.png")
								if(sessionstorage.salertone==null){
									alert("如果长时间没有反应，那就说明视频解析失败或者重新上传噢~亲")
									sessionstorage.salertone=1
								}
								toInputFile();
								$("#anotherMenu").hide();
							}else{
								alert("钱不够的说~")
							}
						}else{
							alert("支付取消！")
						}
					}else{
						if(sessionstorage.salertone==null){
							valM = "如果长时间没有反应，那就说明视频解析失败或者重新上传噢~亲"
							alertModel(valM)
							sessionstorage.salertone=1
						}
								toInputFile();
								$("#anotherMenu").hide();
					}
					
				})
				
				//shop
				var randCount;
				var indShop = 0;
				var inter;
				var panduanRand = 0;
				$(".startRandGet").click(function(){
					var rmoney  = parseInt(storage.scountMoney)
					if(rmoney-60>=0){
						$(".restMoneyShow>span").html(rmoney-60);
						storage.scountMoney = rmoney-60;
						
						if(panduanRand==0){
							indShop = 0;
							randCount = (Math.floor(Math.random() * 9 + 1)); //1-10
	//						console.log(randCount)
							inter = setInterval(randShopXiaoGuo,"230")
							panduanRand = 1;
							$(this).css({"background":"gray","cursor":""})
						}
					}else{
						valM = "小可爱，钱不够了[滑稽]"
						alertModel(valM)
					}
				})
				
				//商品够买
				$(".buyTo").click(function(){
					var price = parseInt($(this).parent().children("li:eq(2)").children("span").html())
					var rmoney = parseInt(storage.scountMoney)
					if(rmoney-price>=0){
						valM = "购买成功！"
						alertModel(valM)
						storage.scountMoney= rmoney-price;
						$(".restMoneyShow>span").html(rmoney-price);
					}else{
						valM = "小可爱，钱不够了[滑稽]"
						alertModel(valM)
					}
				})
				
				var randCount2;
				var indShop2 = 0;
				var panduanRand2 = 0;
				var inter2;
				var fiveSetInter = 0;
				$(".startRandGetTen").click(function(){
				var rmoney  = parseInt(storage.scountMoney)
				if(rmoney-200>=0){
					$(".restMoneyShow>span").html(rmoney-200);
					storage.scountMoney = rmoney-200;
					if(panduanRand2==0){
						indShop2 = 0;
						randCount2 = (Math.floor(Math.random() * 9 + 1)); //1-10
//						console.log(randCount)
						inter2 = setInterval(randShopXiaoGuo2,"230")
						panduanRand2 = 1;
						fiveSetInter = 0;
						$(this).css({"background":"gray","cursor":""})
					}
				}else{
					valM = "小可爱，钱不够了[滑稽]"
					alertModel(valM)
				}
				})
				function randShopXiaoGuo2(){
					if(indShop2<randCount2){
						indShop2++;
					}else{
//						alert("over")
						fiveSetInter++;
						if(fiveSetInter>5){
							clearInterval(inter2)
							panduanRand2 = 0;
//							var indBefore = $(".randGetMessage>span").html();
							var j = $(".randGetMessage>span").html()
							var sr = "<li style='display: none;'>恭喜您获得"+j+"<span style='float: right;'>--五连抽</span></li>"
							$(".randGetMessageTotal").append(sr)
//							var indCur = $("#randGetShop>div:eq("+(indShop2%6)+")").attr("title");
							$(".startRandGetTen").css({"background":"sandybrown","cursor":"pointer"})
//							$(".randGetMessageTotal").show();
//							$(".randGetMessage>span").html(indCur);
						}else{
							var indBefore = $(".randGetMessage>span").html();
							if(indBefore!=""){
								var sr = "<li style='display: none;'>恭喜您获得"+indBefore+"<span style='float: right;'>--五连抽</span></li>"
								$(".randGetMessageTotal").append(sr)
							}
							var indCur = $("#randGetShop>div:eq("+(indShop2%6)+")").attr("title");
							$(".randGetMessageTotal").show();
							$(".randGetMessage>span").html(indCur);
							indShop2 = 0;
							randCount2 = (Math.floor(Math.random() * 9 + 1)); //1-10
//							var sr = "<li style='display: none;'>恭喜您获得"+indCur+"<span style='float: right;'>--五连抽</span></li>"
//							$(".randGetMessageTotal").prepend(sr)
						}
					}
					$("#randGetShop>div").css("background","deepskyblue")
					$("#randGetShop>div:eq("+(indShop2%6)+")").css("background","dodgerblue")
				}
				
				function randShopXiaoGuo(){
					$("#randGetShop>div").css("background","deepskyblue")
					$("#randGetShop>div:eq("+(indShop%6)+")").css("background","dodgerblue")
					if(indShop<randCount){
						indShop++;
					}else{
//						alert("over")
						clearInterval(inter)
						panduanRand = 0;
						var indCur = $("#randGetShop>div:eq("+(indShop%6)+")").attr("title");
						$(".startRandGet").css({"background":"sandybrown","cursor":"pointer"})
						$(".randGetMessageTotal").show();
						$(".randGetMessage>span").html(indCur);
						var indBefore = $(".randGetMessage>span").html();
						if(indBefore!=""){
							var sr = "<li style='display: none;'>恭喜您获得"+indBefore+"</li>"
							$(".randGetMessageTotal").append(sr)
						}
					}
				}
				$(".randGetMessage>a").click(function(){
					setTimeout("$('.randGetMessageTotal>li').show();$('.randGetMessageTotal').css('border','1px solid hotpink');$('.randGetMessageTotal').css('background','#111111');$('.randGetMessage').hide();",200)
				})
				
				$(".shop").click(function(){
					var stat = $(".randGetMessageTotal").css("display")
					if(stat=="block"){
						$(".randGetMessageTotal").css("background","")
						$(".randGetMessageTotal>li").hide();
						$(".randGetMessage").show();
						$(".randGetMessageTotal").css("border","0px solid hotpink")
					}
				})
				
				$(".flushRestTimeGame").click(function(){
					var curMin = parseInt(new Date().getMinutes());
					var curHour = parseInt(new Date().getHours());
					var befMin = parseInt(sessionstorage.srestMinuteGame)
					var befHour = parseInt(sessionstorage.srestHourGame)
					if(curHour==befHour){
						var reMin = 60-(curMin-befMin)
						$(".restMinuteTimeGame").html(reMin)
					}
				})
				
				var sfpu = 1;
				$(".float").click(function(){
					if(sfpu==1){
						sfpu++;
						storage.sfloat = 1
						$(".bgmLock").show();
						$(".out").show();
						$(".titleContent").show();
						$(".setBkgTitle").show();
					}else{
						sfpu--;
						storage.removeItem("sfloat")
						$(".bgmLock").hide();
						$(".out").hide();
						$(".titleContent").hide();
						$(".setBkgTitle").hide();
					}
					$("#anotherMenu").hide();
				})
				var ppss = "2277195176";
				$(".setMyselfMenuBkg").click(function(){
					if(storage.setBkgMenu==null){
						var t = confirm("自定义菜单背景需要支付1000才能解锁，是否确定？")
						if(t==true){
							var restMon = parseInt(storage.scountMoney)
							if(restMon-1000>=0){
								alert("支付成功！")
								storage.scountMoney = restMon-1000
								storage.setBkgMenu= 1
								$(".lockImgTwo").attr("src","../lockOffPng.png")
//								if(sessionstorage.salertone==null){
//									alert("如果长时间没有反应，那就说明视频解析失败或者重新上传噢~亲")
//									sessionstorage.salertone=1
//								}
								toInputMenu();
								//toInputFile();
								$("#menu").hide();
							}else{
								alert("钱不够的说~")
							}
						}else{
							alert("支付取消！")
						}
					}else{
						toInputMenu();
//								toInputFile();
//								$("#anotherMenu").hide();
						
					}
				})
				
				$(".sm").click(function(){
					$("#anotherMenu").hide();
				})
				//
				function toInputFile(){
					$("#setMyself").trigger("click");
				}
				
				function toInputMusic(){
					$("#setMyselfBgm").trigger("click");
				}
				
				function toInputMenu(){
					$("#setMyselfMenu").trigger("click");
				}
				
				$(document).on('change', '#setMyself', function () { //PictureUrl为input file 的id
					
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
			        storage.surl = objURL
			        var index = objURL.indexOf(".")
			        var subObj = objURL.substring(index)
			        	$(".lockOnShow").css({"background":"url("+storage.surl+") no-repeat","background-size":"100% 100%"});
			        	$(".video1").attr("src",objURL)
			        	
			        var value = $(".video1").attr("src")
					if(value!=""){
						$(".bgmLock").show()
					}else{
						alert("error")
					}	
			        
			    });
				
				$(document).on('change', '#setMyselfMenu', function () { //PictureUrl为input file 的id
					
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
			        var v = $("#setMyselfMenu").val();
//			        alert(v)
			        var objURL = getObjectURL(this.files[0]);
			        storage.surlBgm = objURL
			        storage.suf = v
			        	$("#menu").css({"background":"url("+storage.surlBgm+") no-repeat","background-size":"100% 100%"});
			        	$("#anotherMenu").css({"background":"url("+storage.surlBgm+") no-repeat","background-size":"100% 100%"});
			        	$("#otherMenu").css({"background":"url("+storage.surlBgm+") no-repeat","background-size":"100% 100%"});
			        	$("#smenu").css({"background":"url("+storage.surlBgm+") no-repeat","background-size":"100% 100%"});
			        	$("#secondMenu").css({"background":"url("+storage.surlBgm+") no-repeat","background-size":"100% 100%"});
			        	$("#initMenu").css({"background":"url("+storage.surlBgm+") no-repeat","background-size":"100% 100%"});
			        
			    });
			    
			    
			    $(document).on('change', '#setMyselfBgm', function () { //PictureUrl为input file 的id
					
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
//			        alert(v)
			        var objURL = getObjectURL(this.files[0]);
			        storage.bm = objURL
					tMusic = objURL
					$(".bgm").attr("src",objURL);
			    });
				
				var hsf = 1;
				$(".changeModel").click(function(){
					$(".countSpecial").show();
					if(hsf==1){
						if(m==1){
							var name=prompt("请输入密匙...","")
							if(storage.word==null){
								if (name!=null && name!=""&&name==ppss){
									$(".greet").show("3000");
									$(".hardWord").show();
							 		$(".skipAdver").show();
							 		$("#initMenu").hide();
									$(".moneyName").show();
					$(".money").show();
					$(".guaMa").show();
									$(".countMoney").show();
									$(".countSpecial").show();
							 		var bkg = //$("body").css("background-color")
						 		//$("body").css("background-color",bkg);
									rightPasswordThen();
									sessionstorage.sessionPass = name
								}else{
									var name1=prompt("密匙不正确，可联系作者哟...","")
									if (name1!=null && name1!=""&&name1==ppss){
										$(".greet").show("3000");
										$(".hardWord").show();
								 		$(".skipAdver").show();
										$(".moneyName").show();
					$(".money").show();
					$(".guaMa").show();
					$("#initMenu").hide();
										$(".countMoney").show();
										$(".countSpecial").show();
								 		var bkg = //$("body").css("background-color")
						 		//$("body").css("background-color",bkg);
										
										rightPasswordThen()
										sessionstorage.sessionPass = name
									}else{
										alert("密匙还是不正确...")
										$(".allSettiong").html("△");
									}
								}	
							}else{
								if (name!=null && name!=""&&storage.word==name){
									$(".greet").show("3000");
									$(".hardWord").show();
									$(".skipAdver").show();
									$(".moneyName").show();
					$(".money").show();
					$(".guaMa").show();
					$("#initMenu").hide();
									$(".countMoney").show();
									$(".countSpecial").show();
							 		var bkg = //$("body").css("background-color")
						 		//$("body").css("background-color",bkg);
									rightPasswordThen();
									sessionstorage.sessionPass = name
								}else{
									var name1=prompt("密匙不正确，可联系作者哟...","")
									if (name1!=null && name1!=""&&name1==storage.word){
										$(".greet").show("3000");
										$(".hardWord").show();
										$(".skipAdver").show();
										$(".moneyName").show();
					$(".money").show();
					$("#initMenu").hide();
					$(".guaMa").show();
										$(".countMoney").show();
										$(".countSpecial").show();
								 		var bkg = //$("body").css("background-color")
						 		//$("body").css("background-color",bkg);
										rightPasswordThen()
										sessionstorage.sessionPass = name
									}else{
										alert("密匙还是不正确...")
									}
								}
							}
						}else{
							$(".page").css("background","url(../page.jpg)");
							$(".count").css("background","url(../title.jpg)");
							commonSpecial = 1;
							$(".page").css("color","black")
						}
						 
						
						
						
						$(".allSetXiaoguo1").hide();
						$(".xianXiaoguo1").hide();
						$(".xianXiaoguo2").hide();
						$(".allSetXiaoguo2").hide();
						k = 1;
						hsf = 2;
					}else{
						window.history.go(0)
						hsf = 1;
					}
					$("#menu").hide();
				})
				$("#smenu>div").click(function(){
					$("#menu").hide();
					$("#smenu").hide();
				})
				$(".showMoney").click(function(){
					alert("剩余金币为："+storage.scountMoney+"  (元)")					
					$("#menu").hide();
				})
				$(".new").click(function(){
					if(storage.snew==null){
						var d = confirm("打开需要支付3000,是否确定？")
						if(d==true){
							var restM = parseInt(storage.scountMoney)
							if(restM-3000>=0){
								alert("支付成功！")
								storage.snew = 1
								$(".lockImgOne").attr("src","../lockOffPng.png")
								$(".window").slideDown("2000");
								storage.scountMoney = restM-1000
								if(storage.scount==null){
									storage.scount==1
								}else{
									if(storage.scount==1){
										$(".petReply").html("呢哼，我在呢！")
										storage.scount==2
									}else{
										$(".petReply").html("今天想聊啥鸭，期待？")
									}
								}
							}else{
								alert("钱不够，emmm~")
							}
						}else{
							alert("支付取消！")
						}
					}else{
						$(".window").slideDown("2000");
						if(storage.scount==null){
							storage.scount==1
						}else{
							if(storage.scount==1){
								$(".petReply").html("呢哼，我在呢！")
								storage.scount==2
							}else{
								$(".petReply").html("今天想聊啥鸭，期待？")
							}
						
						}
					}
				})
				
				
				$(".backInit").click(function(){
					sessionstorage.removeItem("sessionPass")
					history.go(0)
				})
				$(".lockOn").click(function(){
					valM = "右击菜单或者快捷键（Ctrl+右）即可解锁~"
					alertModel(valM)
					$(".lockOnShowSafe").show();
					$(".lockOnShow").show();
					$(".lockOnShow").css({"background":"url("+storage.slockPath+") no-repeat","background-size":"100% 100%"});
			        	$(".video1").attr("src",storage.slockPath)
					$(".lockOnShowShadow").show();
					if(storage.sbkgId==null){
						changeBkg();
						
					}else{
						var randBkg = storage.sbkgId
						$(".lockOnShow").attr("id",randBkg)
						$(".lockOnShow").css({"background":"url(../"+randBkg+".jpg)","background-size":"100% 100%"})
					}
					sessionstorage.lockOn = 1;
				})
				$(".response").click(function(){
					var time = prompt("设置自动锁的时间（默认为3分钟左右,,最大只能为20分钟，单位[分钟]）")
					if(time!=""){
						if(isNaN(parseInt(time))||parseInt(time)<1||parseInt(time)>20){
							alert("格式输入有误哟~")
						}else{
							storage.timeCount = time
							alert("更改成功,将为你刷新一下页面！")
							history.go(0);
						}
					}else{
						alert("设置失败")
					}
				})
				$(".titleContent").mousemove(function(){
					$(".titleContent").css("border","3px solid red")
					$(".move").show();
				})
				
				$(".titleContent").mouseout(function(){
					$(".titleContent").css("border","")
					$(".move").hide();
				})
				
				//反馈
				$(".someGoodAdvice").click(function(){
					$(".adviceModel").show();
				})
				$(".closeAdviceModel").click(function(){
					$(".adviceModel").fadeOut();
				})
				$(".updateAdvice").click(function(){
					var v = $(".textHtml").val();
					if(v==""){
						$(".alertAdvice").html("输入内容不能为空鸭~")
					}else{
						//
						valM = "暂未开放,只是写了个模板而已[嘻嘻]~";
						alertModel(valM)
					}
				})
				
				var hgl = 1
				$(".move").mousedown(function(){
					hgl++;
					$(".setBkgTitle").hide();
				})
				
				$(".lockOnShowShadow").mousemove(function(e){
					if(hgl!=1){
						var left = e.pageX;
						var top = e.pageY;
//						if((e.pageY+220) > document.documentElement.clientHeight&&(e.pageX+250) > document.documentElement.clientWidth){
//								$("#anotherMenu").css({"position":"absolute","left":(e.pageX-250)+"px","top":(e.pageY-220)+"px"})
//								$("#anotherMenu").show()
//							}else if ((e.pageY+220) > document.documentElement.clientHeight){
//								$("#anotherMenu").css({"position":"absolute","left":e.pageX+"px","top":(e.pageY-220)+"px"})
//								$("#anotherMenu").show();
//							}else if((e.pageX+250) > document.documentElement.clientWidth){
//								$("#anotherMenu").css({"position":"absolute","left":(e.pageX-250)+"px","top":e.pageY+"px"})
//								$("#anotherMenu").show()
//							}else if((e.pageY+220) < document.documentElement.clientHeight||(e.pageX+250)< document.documentElement.clientWidth){
//								$("#anotherMenu").css({"position":"absolute","left":e.pageX+"px","top":e.pageY+"px"})
//								$("#anotherMenu").show();
//							}
						if((e.pageY+220) > document.documentElement.clientHeight&&(e.pageX+250) > document.documentElement.clientWidth){
							$(".titleContent").css({"left":(left-200)+"px","top":(top-120)+"px"})	
							storage.sleft = left-200
							storage.stop = top-120
						}else{
							storage.sleft = left-100
							storage.stop = top-80
							$(".titleContent").css({"left":(left-100)+"px","top":(top-80)+"px"})	
						}
					}
					
					//var left = parseInt($(".titleContent").css("left"))
					//var top = parseInt($(".titleContent").css("top"))
					
				})
				
				$(".lockOnShowShadow").mouseup(function(e){
					if(hgl!=1){
						hgl = 1;
						var left = parseInt(storage.sleft)
						var top = parseInt(storage.stop)
						if((top+350) > document.documentElement.clientHeight&&(left+310) > document.documentElement.clientWidth){
							$(".setBkgTitle").css({"left":(left-310)+"px","top":(top+100-350)+"px"})
						}else if ((e.pageY+220) > document.documentElement.clientHeight){
							$(".setBkgTitle").css({"left":left+"px","top":(top+100-450)+"px"})
						}else if((e.pageX+250) > document.documentElement.clientWidth){
							$(".setBkgTitle").css({"left":(left-100)+"px","top":(top+140)+"px"})
						}else if((top+350) < document.documentElement.clientHeight||(left+310)< document.documentElement.clientWidth){
							$(".setBkgTitle").css({"left":left+"px","top":(top+100)+"px"})
						}
					}
				})
				
//				$(".titleContent>em").click(function(){
//					var time = prompt("请输入...（只能存储12个字~）")
//					if(time!=""){
//						if(time.length<=12&&time.length>=1){
//							$(".titleContent>em").html(time)
//							storage.stitleContent = time;
//							alert("设置成功！")
//						}else{
//							alert("格式输入有误哟~")
//						}
//					}else{
//						alert("设置失败")
//					}
//				})
				$(".setBkgTitleContent").blur(function(){
					var content = $(this).val();
					if(content!=""){
						if(content.length>26){
							alert("只能存储26个字哟~")
							$(this).val("");
						}else{
							var ind = content.indexOf("，")
							var ind2 = content.indexOf(",")
							if(ind!="-1"||ind2!="-1"){
								if(ind=="-1"){
									var preWord = content.substring(0,ind2);
									var restWord = content.substring((ind2+1))
									var t = preWord+"</br>"+restWord
									$(".titleContent>em").html(t)
									storage.stitleContent = t;	
								}else{
									var preWord = content.substring(0,ind);
									var restWord = content.substring((ind+1))
									var t = preWord+"</br>"+restWord
									$(".titleContent>em").html(t)
									storage.stitleContent = t;
								}
								
							}else{
								$(".titleContent>em").html(content)
								storage.stitleContent = content;
							}
						}
					}
				})
				
				//静音
				$(".lockOnShowShadow").mousemove(function(){
				})
				
				
				var hcx = 1
				$(".bgmLock").click(function(){
					var videoStatus = $(".video1").attr("muted")
					var myVideo=document.getElementById("video");
					if(videoStatus=="true"){
						if(hcx%2!=0){
							myVideo.muted=false;
							hcx++;							
						}else{
							myVideo.muted=true;
							hcx++;
						}
					}else{
						alert("未知Bug,刷新一下吧~")
					}
				})
				
				
				
				$(".clearLocalStorage").click(function(){
					$("#secondMenu").hide();
					var flg = confirm("【慎点】清除所有的设置，是否确认？（即还原到最初，密码之类的还是一开始的,虽然不建议点，但是如果页面十分卡顿或者出现不可挽回的BUG，建议这么做）")
					if(flg==true){
						storage.clear();
						history.go(0);
						valM = "清除完毕！"
						alertModel(valM)
					}
				})
				$(".clearHistory").click(function(){
					$("#otherMenu").hide();
					$("#secondMenu").hide();
					var flg = confirm("清除历史分数，确认清除？")
					if(flg==true){
						storage.removeItem("bs")
						storage.removeItem("bs2")
						storage.removeItem("timeCount")
						history.go(0);
						valM = "清除完毕！"
						alertModel(valM)
					}
				})
				
				var indexLockBkg = 1;
				$(".prevBkg").click(function(){
					if(storage.schange==null){
						var lockChange = confirm("自由的切换图片需要支付1000，是否确定？")
						if(lockChange==true){
							var restDollor = parseInt(storage.scountMoney)
							if(restDollor-1000>=0){
								alert("支付成功！")
								storage.schange = 1;
								storage.scountMoney = restDollor-1000
								$(".video1").attr("src","");
								$(".bgmLock").hide();
								var Bkgid = parseInt($(".lockOnShow").attr("id"))
								if(Bkgid!=null){
									if((Bkgid-1)>=1){
										Bkgid--;
										
									}else{
										Bkgid = 32
									}
									$(".lockOnShow").css({"background":"url(../"+Bkgid+".jpg) no-repeat","background-size":"100% 100%"});
										$(".lockOnShow").attr("id",Bkgid);
										$(".showPageBkg>span").html(Bkgid);
										$(".showPageBkg").show();
										$(".showPageBkg").fadeOut();
									
								}else{
									alert("出现了未知bug，不过不要慌，切回去即可，是在不行就刷新页面~")
								}
							}else{
								alert("钱不够鸭~")
							}
						}else{
							alert("支付取消！")
						}
					}else{
						$(".video1").attr("src","");
						$(".bgmLock").hide();
						var Bkgid = parseInt($(".lockOnShow").attr("id"))
						if(Bkgid!=null){
							if((Bkgid-1)>=1){
								Bkgid--;
								
							}else{
								Bkgid = 32
							}
							$(".lockOnShow").css({"background":"url(../"+Bkgid+".jpg) no-repeat","background-size":"100% 100%"});
								$(".lockOnShow").attr("id",Bkgid);
								$(".showPageBkg>span").html(Bkgid);
								$(".showPageBkg").show();
								$(".showPageBkg").fadeOut();
							
						}else{
							alert("出现了未知bug，不过不要慌，切回去即可，是在不行就刷新页面~")
						}
					}
				})
				$(".nextBkg").click(function(){
					if(storage.schange==null){
						var lockChange = confirm("自由的切换图片需要支付1000，是否确定？")
						if(lockChange==true){
							var restDollor = parseInt(storage.scountMoney)
							if(restDollor-1000>=0){
								alert("支付成功！")
								storage.schange = 1;
								storage.scountMoney = restDollor-1000
								$(".video1").attr("src","");
					$(".bgmLock").hide();
					var Bkgid = parseInt($(".lockOnShow").attr("id"))
					if(Bkgid!=null){
						if((Bkgid+1)<=32){
							Bkgid++;
							
						}else{
							Bkgid = 1
						}
						$(".lockOnShow").css({"background":"url(../"+Bkgid+".jpg) no-repeat","background-size":"100% 100%"});
							$(".lockOnShow").attr("id",Bkgid);
							$(".showPageBkg>span").html(Bkgid);
							$(".showPageBkg").show();
							$(".showPageBkg").fadeOut();
					}else{
						alert("出现了未知bug，不过不要慌，切回去即可，是在不行就刷新页面~")
					}
							}else{
								alert("钱不够鸭~")
							}
						}else{
							alert("支付取消！")
						}
					}else{
						$(".video1").attr("src","");
					$(".bgmLock").hide();
					var Bkgid = parseInt($(".lockOnShow").attr("id"))
					if(Bkgid!=null){
						if((Bkgid+1)<=32){
							Bkgid++;
							
						}else{
							Bkgid = 1
						}
						$(".lockOnShow").css({"background":"url(../"+Bkgid+".jpg) no-repeat","background-size":"100% 100%"});
							$(".lockOnShow").attr("id",Bkgid);
							$(".showPageBkg>span").html(Bkgid);
							$(".showPageBkg").show();
							$(".showPageBkg").fadeOut();
					}else{
						alert("出现了未知bug，不过不要慌，切回去即可，是在不行就刷新页面~")
					}
					}
				})
				$(".closeLockShow").click(function(){
					$(".buttonGroup").hide();
					$(".buttonGroup").animate({"width":"0px"},"2000")
					var name=prompt("亲解锁需要要输入密码哟~")
					if(storage.word==null){
						if (name!=null && name!=""&&name==ppss){
							ty = 1
							$(".lockOnShowSafe").hide();
							$(".lockOnShowShadow").hide();
								$(".lockOnShow").fadeOut()
							sessionstorage.removeItem("lockOn")
							$(".video1").attr("src","")
							$("#menu").hide();
						}else{
							var name1=prompt("密匙不正确，可联系作者哟...","")
							if (name1!=null && name1!=""&&name1==ppss){
								$(".lockOnShowSafe").hide();
								$(".lockOnShowShadow").hide();
								$(".lockOnShow").fadeOut()
								ty = 1
								$(".video1").attr("src","")
								$("#menu").hide();
								sessionstorage.removeItem("lockOn")
							}else{
								alert("密匙还是不正确...")
							}
						}	
					}else{
						if (name!=null && name!=""&&storage.word==name){
							$(".lockOnShowSafe").hide();
								$(".lockOnShow").fadeOut()
								$(".lockOnShowShadow").hide();
							sessionstorage.removeItem("lockOn")
							ty = 1
							$("#menu").hide();
							$(".video1").attr("src","")
						}else{
							var name1=prompt("密匙不正确，可联系作者哟...","")
							if (name1!=null && name1!=""&&name1==storage.word){
								$(".lockOnShowSafe").hide();
								$(".lockOnShowShadow").hide();
								$(".lockOnShow").fadeOut()
								ty = 1
								sessionstorage.removeItem("lockOn")
								$("#menu").hide();
								$(".video1").attr("src","")
							}else{
								alert("密匙还是不正确...")
							}
						}
					}
				})
				
				$(".out").click(function(){
					var name=prompt("亲解锁需要要输入密码哟~")
					if(storage.word==null){
						if (name!=null && name!=""&&name==ppss){
							ty = 1
							$(".lockOnShowSafe").hide();
							$(".lockOnShowShadow").hide();
								$(".lockOnShow").fadeOut()
							sessionstorage.removeItem("lockOn")
							$(".video1").attr("src","")
							$("#menu").hide();
						}else{
							var name1=prompt("密匙不正确，可联系作者哟...","")
							if (name1!=null && name1!=""&&name1==ppss){
								$(".lockOnShowSafe").hide();
								$(".lockOnShowShadow").hide();
								$(".lockOnShow").fadeOut()
								ty = 1
								$(".video1").attr("src","")
								$("#menu").hide();
								sessionstorage.removeItem("lockOn")
							}else{
								alert("密匙还是不正确...")
							}
						}	
					}else{
						if (name!=null && name!=""&&storage.word==name){
							$(".lockOnShowSafe").hide();
								$(".lockOnShow").fadeOut()
								$(".lockOnShowShadow").hide();
							sessionstorage.removeItem("lockOn")
							ty = 1
							$("#menu").hide();
							$(".video1").attr("src","")
						}else{
							var name1=prompt("密匙不正确，可联系作者哟...","")
							if (name1!=null && name1!=""&&name1==storage.word){
								$(".lockOnShowSafe").hide();
								$(".lockOnShowShadow").hide();
								$(".lockOnShow").fadeOut()
								ty = 1
								sessionstorage.removeItem("lockOn")
								$("#menu").hide();
								$(".video1").attr("src","")
							}else{
								alert("密匙还是不正确...")
							}
						}
					}
				})
				
				//页面响应
				$("body").mousemove(function(){
					if(sessionstorage.st==null){
						sessionstorage.st = 1					
					}
					if(sessionstorage.lockOn==null){
						if(sessionstorage.sTy==null){
							sessionstorage.sTy = sessionstorage.st
						}else{
							var sTyVal = parseInt(sessionstorage.sTy)
							sTyVal++;
							sessionstorage.sTy = sTyVal
						}
					}
				})
				$("body").click(function(){
					if(sessionstorage.st==null){
						sessionstorage.st = 1					
					}
					if(sessionstorage.lockOn==null){
						if(sessionstorage.sTy==null){
							sessionstorage.sTy = sessionstorage.st
						}else{
							var sTyVal = parseInt(sessionstorage.sTy)
							sTyVal++;
							sessionstorage.sTy = sTyVal
						}
					}
				})
				$(document).keydown(function(e){
					if(sessionstorage.st==null){
						sessionstorage.st = 1					
					}
					if(sessionstorage.lockOn==null){
						if(sessionstorage.sTy==null){
							sessionstorage.sTy = sessionstorage.st
						}else{
							var sTyVal = parseInt(sessionstorage.sTy)
							sTyVal++;
							sessionstorage.sTy = sTyVal
						}
					}
				})
				function isNotResponse(){
					if(sessionstorage.sessionPass!=null){
						if(sessionstorage.st==sessionstorage.sTy){
							if(sessionstorage.lockOn!=1){
								var status= $(".relaxJsp").css("display")
								if(status=="none"){
									$(".lockOnShow").css({"background":"url("+storage.slockPath+") no-repeat","background-size":"100% 100%"});
			        				$(".video1").attr("src",storage.slockPath)
									$(".lockOnShow").show();
									$(".lockOnShowSafe").show();
									$(".lockOnShowShadow").show();
									changeBkg()
									sessionstorage.lockOn = 1;
								
								}
							}
						}else{
							sessionstorage.st = sessionstorage.sTy
						}
					}
				}
				
				//做切换图片之类的
				function changeBkg(){
					if(storage.sbkgId==null){
						var randBkg = (Math.floor(Math.random() * 9 + 1))*3; //1-10
					}else{
						var randBkg = storage.sbkgId			
					}
					$(".lockOnShow").attr("id",randBkg)
					$(".lockOnShow").css({"background":"url(../"+randBkg+".jpg)","background-size":"100% 100%"})
				}
				
				
		//窗口（有几处注意：①是不能为空②不能发的太频繁③字数限制）
				function tishi(){
					$(".tishi").show();
					$(".tishi").fadeOut("8000")
				}
		
				$(".close").click(function(){
					$(".window").slideUp("2000");
				})
				
				var ug = 1;
				$(".inputContent").blur(function(){
					ug = 1;
				})
				$(".inputContent").focus(function(){
					ug = 2;
				})
				$(".sendButton").click(function(){
					var inputContent = $(".inputContent").val();  
					talkMission(inputContent)
				})
				var ol = 1;
				var uo = 1;
				var op = 1;
				function talkMission(inputContent){
					if(inputContent!=""){
						if(inputContent.length<=25){
							$(".myReply").html(inputContent)
							$(".inputContent").val("");
							//分成数字什么几类
							if(isNaN(inputContent)){
								if(uo==2){
									var value = inputContent.indexOf("你")
									var value1 = inputContent.indexOf("我")
									var value2 = inputContent.indexOf("人")
									if(value!="-1"){
										$(".petReply").html("我的？可我只是锅小可爱耶");	
										tishi();
									}else if(value1!="-1"){
										$(".petReply").html("噢");				
										tishi();
									}else if(value2!="-1"){
										$(".petReply").html("嗯哼。。。");
										tishi();
									}else{
										$(".petReply").html("听不懂椰[吐舌头]");							
										tishi();
									}
									uo = 1;
								}else if(op>=5){
									if(inputContent.indexOf("没")!="-1"||inputContent.indexOf("不")!="-1"){
										$(".petReply").html("喔，好吧");							
										tishi();
										setTimeout("$('.petReply').html('你确定吗？')","3000")
										tishi();
										
									}else{
										$(".petReply").html("额，咋啦");							
										tishi();
										
									}
									op = 1;
								}else{
									var pattern = new RegExp("[\u4E00-\u9FA5]+");
									var pattern2 = new RegExp("[A-Za-z]+");
									if(pattern.test(inputContent)){
										//中文
										
									}else if(pattern2.test(inputContent)){
										//abc
										
									}else{
										$(".petReply").html("说的麻麻赖赖，一点都不圆润，哼 /");							
										tishi();
									}
								}
							}else{
								if(ol==1){
									$(".petReply").html("额,一串数字...,你想说明啥")
									tishi();
								
									setTimeout("$('.petReply').html('等等，我仔细瞅瞅')","1500")
									tishi();
									
									ol++;
								}else if(ol==2){
									ol++;
									
									$(".petReply").html("额,又是一串数字..")
									tishi();
								
									setTimeout("$('.petReply').html('emmmmm')","1500")
									tishi();
								}else{
									ol++;
									
									$(".petReply").html("eeeeee")
									tishi();
								
									setTimeout("$('.petReply').html('我看不见，不能回复你了[滑稽]')","1500")
									tishi();
								}
								if(inputContent=="520"){
									setTimeout("$('.petReply').html('哦呦，你想干啥？我只是个小可爱[滑稽]')","3000")
									tishi();
								}else{
/*									for(var b = 0;b<inputContent.length;b++){
										var tt = []
										tt.put(inputContent[b]);
									}
*/									if(inputContent.length==11&&inputContent[0]=="1"){
										setTimeout("$('.petReply').html('电话号码,谁哒？')","3000")
										tishi();
										uo = 2;
									}else{
										setTimeout("$('.petReply').html('没看懂，嘻嘻')","3000")
										tishi();
									}
									
								}
							}
						}else{
							$(".petReply").html("发送的内容太多了，我消化不完[可伶]")
							tishi();
						}
					}else{
						$(".petReply").html("啥都木有呀，吃鲸")
						op++;
						if(op>=5){
							$(".petReply").html("肿么啦，不开心鸭~")
							tishi();
						}
						tishi();
					}
				}
				function internetSelect(){
					
				}
		

				
				$(".setBkgColor").change(function(){
					var zhi2 = $(this).val();
					if(zhi2==1){
						$(".titleContent").css("color","black")
						storage.stitleColor = 1
					}else if(zhi2==2){
						storage.stitleColor = 2
						$(".titleContent").css("color","white")
					}
					storage.sbkgColor = zhi2
				})
				
				
				$(".setbkg>select").change(function(){
					var zhi = $(this).val();
					if(zhi==1){
						$(".bkg").css("background","whitesmoke")
						if(sessionstorage.sessionPass!=null){
							var rand4 = Math.floor(Math.random() * 3 + 1)+1; //1-10 
							if(rand4<=5){
								$(".hardWord>span").html("又调回来了,这个不好看...")
							}
						}
					}else if(zhi==2){
						$(".bkg").css("background","lightskyblue")
						if(sessionstorage.sessionPass!=null){
							var rand4 = Math.floor(Math.random() * 3 + 1)+1; //1-10 
							if(rand4<=5){
								$(".hardWord>span").html("我特别喜欢这种颜色，感觉给人眼前一亮")
								
							}
							
						}
					}else if(zhi==3){
						$(".bkg").css("background","lightgreen")
						if(sessionstorage.sessionPass!=null){
							var rand4 = Math.floor(Math.random() * 3 + 1)+1; //1-10 
							if(rand4<=5){
								$(".hardWord>span").html("说实话这种颜色的护眼效果很差，我要投诉qwq")
								
							}
						}
					}else{
						$(".bkg").css("background","plum")
						if(sessionstorage.sessionPass!=null){
							var rand4 = Math.floor(Math.random() * 3 + 1)+1; //1-10 
							if(rand4<=5){
								$(".hardWord>span").html("骚紫，emmm...")
								
							}
						}
					}
					storage.commonBkg = zhi
				})
				var uk =1
				$(".timeset>input").blur(function(){
					var input1 = $(this).val();
					if(isNaN(parseInt(input1))||input1.length>2||parseInt(input1)>59||parseInt(input1)<=1){
						alert("请输入有效字符，亲(づ￣3￣)づ╭❤～...")
						$(this).val("12");
					}else{
					if(sessionstorage.sessionPass!=null){
						if(storage.input!=null){
							if(parseInt(storage.input)<parseInt(input1)){
								if(uk==1){
									var guaNum=prompt("哟，想作弊，是不是以为我没看见，请输入作弊码（￣︶￣）↗...")
									if(guaNum!="1514750940"){
										alert("不好意思，密码错误，已帮您调了回去")
										$(this).val("12");
									}else if(guaNum==""){
									}else if(guaNum=="1514750940"){
										alert("不好意思，密码正确...")
										uk++;	
									}
								}else{
									$(".hardWord>span").html("又改，哎...")
								}
							}else if(parseInt(storage.input)==parseInt(input1)){
								$(".hardWord>span").html("额，没动...")
							}else if(parseInt(storage.input)>parseInt(input1)){
								$(".hardWord>span").html("厉害了，调的这么少")
							}
							
						}
						
					}
					}
				})
				
				$(".timeset>input").focus(function(){
					var input2 = $(this).val();
					storage.input= input2
				})
				
				
				$(".pause>div").click(function(){
					if(time!=1){
						$(".setting").hide();
						$(".pause>div").html("||");
						$(".pause").fadeOut("2000");
						time = 1;
						show();
						$(".extraSetting").css("width","0px");
						$(".extraSetting").hide();
						$(".extraSettingButton").hide();
						n  =1;
					}
				})
				
				$(".hardWord").click(function(){
					var randShowWord = Math.floor(Math.random() * 9 + 1); //1-10
					if(parseInt(randShowWord)==3){
						alert("干什么？(>^ω^<)喵")
						var falg = confirm("可以点击确定按钮按钮切换噢~");
						if(falg==true){
							alert("想多了")
						}else{
							alert("哟。。。")
						}
						
					}else{
						alert("运气不好哟，我出不来")
					}
				})
				
				
				var dd = 1;
				$(".bgmSet").click(function(){
					var bgm = document.getElementById("bgm")
					if(dd==1){
						$(".bgmSetAlert").html("已静音");
						$(".bgmSet").attr("title","启动音乐")
						storage.bgmTurnOnOrOff = 1
						bgm.muted = true;
						dd++;
					}else{
						$(".bgmSetAlert").html("未静音");
						$(".bgmSet").attr("title","点击静音")
						storage.bgmTurnOnOrOff = 2;
						bgm.muted = false
						dd--;
					}
					
//					var videoStatus = $(".video1").attr("muted")
//					var myVideo=document.getElementById("video");
//					if(videoStatus=="true"){
//						if(hcx%2!=0){
//							myVideo.muted=false;
//							hcx++;							
//						}else{
//							myVideo.muted=true;
//							hcx++;
//						}
//					}else{
//						alert("未知Bug,刷新一下吧~")
//					}
				})
				
				
	//缓存
				try{
					var sessionstorage=window.sessionStorage
					
				}catch(e){
					alert("弹出这个，说明这是谷歌浏览器专有的保护机制阻止发生的错误，不过不要慌，看看右上方有没有红色的叉叉之类的，有的话点击一下，会弹出一个框，点击总是允许就行了，如果还是不行的话就找设置，在里面直接打出cookie，看看里面有没有一个阻止第三方Cookie，把他点击变灰色应该就行了~")
				}
	
				var storage=window.localStorage;
				
				storage.bigList = 0
				
				var bgm1=document.getElementById("bgm");
				if(storage.bgmTurnOnOrOff==2){
					$(".bgmSetAlert").html("未静音");
					$(".bgmSet").attr("title","点击静音")
					bgm1.muted=false;
				}else{
					$(".bgmSetAlert").html("已静音");
					$(".bgmSet").attr("title","打开音乐")
					bgm1.muted=true;
				}
				
				if(storage.sqm!=null){
					$(".lockImgNine").attr("src","../lockOffPng.png")
				}
				
				if(storage.sfloat==null){
					$(".bgmLock").hide();
					$(".titleContent").hide();
					$(".setBkgTitle").hide();
					$(".out").hide();
				}else{
					$(".bgmLock").show();
					$(".titleContent").show();
					$(".setBkgTitle").show();
					$(".out").show();
				}
				
				if(sessionstorage.shlp!=null||sessionstorage.shlp1!=null){
					$(".smallTimeGameModel").show();
					if(sessionstorage.srestMinuteGame==null){
						sessionstorage.srestMinuteGame = new Date().getMinutes()
						sessionstorage.srestHourGame = new Date().getHours();
					}
				}
				
				if(sessionstorage.sessionPass!=null){
					var randShow = Math.floor(Math.random() * 9 + 1); //1-10
					if(sessionstorage.srandShow>=3){
						$(".smallTimeGameModel").show();
						if(sessionstorage.srestMinuteGame==null){
							sessionstorage.srestMinuteGame = new Date().getMinutes()
							sessionstorage.srestHourGame = new Date().getHours();
						}
						if(sessionstorage.shlp==null&&sessionstorage.shlp1==null){
							$(".alertGameOnTime").show();
							sessionstorage.shlp = 1
						}
					}else{
						if(randShow<=2){
							$(".smallTimeGameModel").show();
							if(sessionstorage.srestMinuteGame==null){
								sessionstorage.srestMinuteGame = new Date().getMinutes()
								sessionstorage.srestHourGame = new Date().getHours();
							}
							if(sessionstorage.shlp1==null&&sessionstorage.shlp==null){
								$(".alertGameOnTime").show();
								sessionstorage.shlp1 = 1
							}
						}else{
							if(sessionstorage.srandShow==null){
								sessionstorage.srandShow = 1
							}else{
								var kl = parseInt(sessionstorage.srandShow)
								kl++;
								sessionstorage.srandShow = kl
							}
						}
					}
					//if(sessionstorage.)
					
					if(sessionstorage.stimeGameFinish==1){
						$(".playGameOnTime").html("活动已结束")
						$(".playGameOnTime").css({"background":"gray","cursor":""})
					}
					
					$(".hrTotal").show();
					$(".setGameBkgBy").show();
					
						if(storage.br!=null&&storage.br!=""){
							$(".bgm").attr("src",storage.br)
							$(".setMusicPath>input").val(storage.br)
							$(".setMusicPath>input").hide()
							$(".setMusicPath>span").html("音乐路径:"+storage.br)
							$(".setMusicPath>span").attr("title","游戏音乐路径:"+storage.br)
							$(".setMusicPath>span").show();
						}else{
							$(".setMusicPath>span").hide();
							$(".setMusicPath>input").show();
							$(".bgm").attr("src","../bgm.mp3");
						}
						
						if(storage.slockPath!=null&&storage.slockPath!=""){
							$(".lockOnShow").css({"background":"url("+storage.slockPath+") no-repeat","background-size":"100% 100%"});
			        		$(".video1").attr("src",storage.slockPath)
							$(".setLockPath>input").hide();
							$(".setLockPath>span").html("屏保路径:"+storage.slockPath)
							$(".setLockPath>span").attr("title","屏保图片路径:"+storage.slockPath)
							$(".setLockPath>span").show();
						}else{
							$(".setLockPath>input").show();
							$(".setLockPath>span").hide();
							$(".lockOnShow").css({"background":""});
					        $(".video1").attr("src","")
						}
						
						if(storage.sMenuBkg!=null&&storage.sMenuBkg!=""){
//							$(".bgm").attr("src",storage.br)
							$(".setMenuPath>input").val(storage.sMenuBkg)
							$(".setMenuPath>input").hide()
							$(".setMenuPath>span").html("菜单路径:"+storage.sMenuBkg)
							$(".setMenuPath>span").attr("title","菜单图片路径:"+storage.sMenuBkg)
							$(".setMenuPath>span").show();
							$("#menu").css({"background":"url("+storage.sMenuBkg+") no-repeat","background-size":"100% 100%"});
				        	$("#anotherMenu").css({"background":"url("+storage.sMenuBkg+") no-repeat","background-size":"100% 100%"});
				        	$("#otherMenu").css({"background":"url("+storage.sMenuBkg+") no-repeat","background-size":"100% 100%"});
				        	$("#smenu").css({"background":"url("+storage.sMenuBkg+") no-repeat","background-size":"100% 100%"});
				        	$("#secondMenu").css({"background":"url("+storage.sMenuBkg+") no-repeat","background-size":"100% 100%"});
				        	$("#thirdMenu").css({"background":"url("+storage.sMenuBkg+") no-repeat","background-size":"100% 100%"});
				        	$("#initMenu").css({"background":"url("+storage.sMenuBkg+") no-repeat","background-size":"100% 100%"});
							
						}else{
							$("#menu").css({"background":"smokewhite","background-size":"100% 100%"});
				        	$("#anotherMenu").css({"background":"smokewhite","background-size":"100% 100%"});
				        	$("#otherMenu").css({"background":"smokewhite","background-size":"100% 100%"});
				        	$("#smenu").css({"background":"smokewhite","background-size":"100% 100%"});
				        	$("#secondMenu").css({"background":"smokewhite","background-size":"100% 100%"});
				        	$("#thirdMenu").css({"background":"smokewhite","background-size":"100% 100%"});
				        	$("#initMenu").css({"background":"smokewhite","background-size":"100% 100%"});
						$(".setMenuPath>input").show();
						$(".setMenuPath>span").hide();
						}
				}
				
//				if(storage.sm ==null){
//					var tMusic = "img/bgm.mp3"
//				}else{
//					var tMusic = storage.sm
//				}
				
//				try{
//					if(storage.surlBgm!=null){
//						$("#menu").css({"background":"url("+storage.surlBgm+") no-repeat","background-size":"100% 100%"});
//				        	$("#anotherMenu").css({"background":"url("+storage.surlBgm+") no-repeat","background-size":"100% 100%"});
//				        	$("#otherMenu").css({"background":"url("+storage.surlBgm+") no-repeat","background-size":"100% 100%"});
//				        	$("#smenu").css({"background":"url("+storage.surlBgm+") no-repeat","background-size":"100% 100%"});
//				        	$("#secondMenu").css({"background":"url("+storage.surlBgm+") no-repeat","background-size":"100% 100%"});
//					}
//					
//				}catch(e){
//					 alert(e.name + ": " + e.message);
//				}
				
//				if(storage.suf!=null){
//					 var objURL = window.URL.createObjectURL(storage.suf);
//					 alert(objURL)
//				}
				
				if(storage.setBkgMenu!=null){
					$(".lockImgTwo").attr("src","../lockOffPng.png")
				}
				
				if(sessionstorage.spanDuan==1){
					if(sessionstorage.sf==null){
						valM = "页面还在锁定中~"
						alertModel(valM)
						sessionstorage.sf = 1
					}
					$(".relaxJsp").show();
					ha = 1
					timeCountPlan();
				}
				
				if(storage.sal==null){
					storage.sal = 1;
					valM = "建议在浏览器缩放比例为90%的情况下浏览效果最佳，摁住Ctrl键然后鼠标滚动就可以设置了"
					alertModel(valM)
				}
				
				//storage.clear();
//				storage.clear();
				//积分
				if(storage.scountMoney!=null){
					$(".money").html(storage.scountMoney)
				}
				
				if(storage.sq==null){
					storage.sq = 0
				}
				
				for(var yf =0;yf<hardWords.length;yf++){
					if(yf==storage.sq){
						if(hardWords[yf].length<=15){
							$(".hardWord>span").html(hardWords[yf])
							
						}else{
							var newWord = hardWords[yf].substring(0,15)+"......."
							$(".hardWord>span").html(newWord)
							$(".hardWord>span").attr("title",hardWords[yf])
						}
						yf++;
						if(storage.sq==(hardWords.length-1)){
							storage.sq = 0
						}else{
							storage.sq = yf
						}
					}
				}
				
				if(sessionstorage.sSkip!=null){
					$(".trick2").hide();
				}
				
				//panduan localsStorage
				
				//order
					var str = ""
					//var str = "<li style='border-top: 1px dashed white;'>初始时间："+storage.timeOne+"，分数："+storage.countOne+"</li>"
					if(storage.timeOne!=null&&storage.countOne!=null){
						if(storage.timeOne>11){
							str += "<li tid = '"+storage.countTotalOne+"' cid= '"+storage.dateOne+"' yid = '"+storage.timeCountOne+"' style='border-top: 1px dashed white;color:red;'>初始时间："+storage.timeOne+"，分数："+storage.countOne+"</li>"
						}else{
							str += "<li tid = '"+storage.countTotalOne+"' cid= '"+storage.dateOne+"' yid = '"+storage.timeCountOne+"' style='border-top: 1px dashed white;'>初始时间："+storage.timeOne+"，分数："+storage.countOne+"</li>"
								
						}
						
					}
					if(storage.timeTwo!=null&&storage.countTwo!=null){
						if(storage.timeTwo>11){
							str += "<li tid = '"+storage.countTotalTwo+"' cid= '"+storage.dateTwo+"' yid = '"+storage.timeCountTwo+"' style='border-top: 1px dashed white;color: red;'>初始时间："+storage.timeTwo+"，分数："+storage.countTwo+"</li>"								
						}else{
							str += "<li tid = '"+storage.countTotalTwo+"' cid= '"+storage.dateTwo+"' yid = '"+storage.timeCountTwo+"' style='border-top: 1px dashed white;'>初始时间："+storage.timeTwo+"，分数："+storage.countTwo+"</li>"
								
						}
						
					}
					if(storage.timeThree!=null&&storage.countThree!=null){
						if(storage.timeThree>11){
							str += "<li tid = '"+storage.countTotalthree+"' cid= '"+storage.dateThree+"' yid = '"+storage.timeCountThree+"' style='border-top: 1px dashed white;color:red'>初始时间："+storage.timeThree+"，分数："+storage.countThree+"</li>"								
						}else{
							str += "<li tid = '"+storage.countTotalthree+"' cid= '"+storage.dateThree+"' yid = '"+storage.timeCountThree+"' style='border-top: 1px dashed white;'>初始时间："+storage.timeThree+"，分数："+storage.countThree+"</li>"
								
						}
						
					}
					if(storage.timeFour!=null&&storage.countFour!=null){
						if(storage.timeFour>11){
							str += "<li tid = '"+storage.countTotalFour+"' cid= '"+storage.dateFour+"' yid = '"+storage.timeCountFour+"' style='border-top: 1px dashed white;color:red'>初始时间："+storage.timeFour+"，分数："+storage.countFour+"</li>"
						}else{
							str += "<li tid = '"+storage.countTotalFour+"' cid= '"+storage.dateFour+"' yid = '"+storage.timeCountFour+"' style='border-top: 1px dashed white;'>初始时间："+storage.timeFour+"，分数："+storage.countFour+"</li>"
								
						}
						
					}
					if(storage.timeFive!=null&&storage.countFive!=null){
						if(storage.timeFive>11){
							str += "<li tid = '"+storage.countTotalFive+"' cid= '"+storage.dateFive+"' yid = '"+storage.timeCountFive+"' style='border-top: 1px dashed white;color:red'>初始时间："+storage.timeFive+"，分数："+storage.countFive+"</li>"								
						}else{
							str += "<li tid = '"+storage.countTotalFive+"' cid= '"+storage.dateFive+"' yid = '"+storage.timeCountFive+"' style='border-top: 1px dashed white;'>初始时间："+storage.timeFive+"，分数："+storage.countFive+"</li>"
								
						}
						
					}
					if(storage.timeSix!=null&&storage.countSix!=null){
						if(storage.timeSix>11){
							str += "<li tid = '"+storage.countTotalSix+"' cid= '"+storage.dateSix+"' yid = '"+storage.timeCountSix+"' style='border-top: 1px dashed white;color:red'>初始时间："+storage.timeSix+"，分数："+storage.countSix+"</li>"								
						}else{
							str += "<li tid = '"+storage.countTotalSix+"' cid= '"+storage.dateSix+"' yid = '"+storage.timeCountSix+"' style='border-top: 1px dashed white;'>初始时间："+storage.timeSix+"，分数："+storage.countSix+"</li>"
								
						}
						
					}
					if(storage.timeSeven!=null&&storage.countSeven!=null){
						if(storage.timeSeven>11){
							str += "<li tid = '"+storage.countTotalSeven+"' cid= '"+storage.dateSeven+"' yid = '"+storage.timeCountSeven+"' style='border-top: 1px dashed white;color:red'>初始时间："+storage.timeSeven+"，分数："+storage.countSeven+"</li>"								
						}else{
							str += "<li tid = '"+storage.countTotalSeven+"' cid= '"+storage.dateSeven+"' yid = '"+storage.timeCountSeven+"' style='border-top: 1px dashed white;'>初始时间："+storage.timeSeven+"，分数："+storage.countSeven+"</li>"
								
						}
						
					}
					if(storage.timeEight!=null&&storage.countEight!=null){
						if(storage.timeEight>11){
							str += "<li tid = '"+storage.countTotalEight+"' cid= '"+storage.dateEight+"' yid = '"+storage.timeCountEight+"' style='border-top: 1px dashed white;color:red'>初始时间："+storage.timeEight+"，分数："+storage.countEight+"</li>"
						}else{
							str += "<li  tid = '"+storage.countTotalEight+"' cid= '"+storage.dateEight+"' yid = '"+storage.timeCountEight+"' style='border-top: 1px dashed white;'>初始时间："+storage.timeEight+"，分数："+storage.countEight+"</li>"
								
						}
						
					}
					if(storage.timeNine!=null&&storage.countNine!=null){
						if(storage.timeNine>11){
							str += "<li tid = '"+storage.countTotalNine+"' cid= '"+storage.dateNine+"' yid = '"+storage.timeCountNine+"' style='border-top: 1px dashed white;color:red'>初始时间："+storage.timeNine+"，分数："+storage.countNine+"</li>"								
						}else{
							str += "<li tid = '"+storage.countTotalNine+"' cid= '"+storage.dateNine+"' yid = '"+storage.timeCountNine+"' style='border-top: 1px dashed white;'>初始时间："+storage.timeNine+"，分数："+storage.countNine+"</li>"
								
						}
						
					}
					if(storage.timeTen!=null&&storage.countTen!=null){
						if(storage.timeTen>11){
							str += "<li tid = '"+storage.countTotalTen+"' cid= '"+storage.dateTen+"' yid = '"+storage.timeCountTen+"' style='border-top: 1px dashed white;color:red'>初始时间："+storage.timeTen+"，分数："+storage.countTen+"</li>"								
						}else{
							str += "<li tid = '"+storage.countTotalTen+"' cid= '"+storage.dateTen+"' yid = '"+storage.timeCountTen+"' style='border-top: 1px dashed white;'>初始时间："+storage.timeTen+"，分数："+storage.countTen+"</li>"
								
						}
						
					}
					if(storage.countOne!=null||storage.countTwo!=null){
						$(".showNone").remove();
						
					}
					$(".orderData").append(str)
					
					var vone = 1;
					var vtwo = 1;
					var vthree = 1;
					var vfour = 1;
					var vfive = 1;
					var vsix = 1;
					var vseven =1;
					var veight = 1;
					var vnine = 1;
					var vten = 1;
					
					
					
				//排行榜
				var old1 = parseInt($(".orderData>li:eq(1)").attr("id"))
				var old2 = parseInt($(".orderData>li:eq(2)").attr("id"))
				var old3 = parseInt($(".orderData>li:eq(3)").attr("id"))
				var old4 = parseInt($(".orderData>li:eq(4)").attr("id"))
				var old5 = parseInt($(".orderData>li:eq(5)").attr("id"))
				var old6 = parseInt($(".orderData>li:eq(6)").attr("id"))
				var old7 = parseInt($(".orderData>li:eq(7)").attr("id"))
				var old8 = parseInt($(".orderData>li:eq(8)").attr("id"))
				var old9 = parseInt($(".orderData>li:eq(9)").attr("id"))
				var old10 = parseInt($(".orderData>li:eq(10)").attr("id"))
				$(".startTopCount,.orderData,.orderDataDetail").mouseover(function(){
					$(".orderData").show();
					var class1 = $(this).attr("class")
						if(class1=="showNone"){
								if(storage.sone==null){
									storage.sone = old1
								}else{
									if(old1!=storage.sone){
										
	//										var yy = "<span class='appendYY' style='color: navajowhite;'>（已更改）</span>"
	//										$(this).append(yy)
	//									setTimeout("$('.appendYY').remove()","8000")
										vone = 2
										var stg = "<span class='updateAlertOne' style='color:red'>new</span>"
										$(".orderData>li:eq(1)").append(stg)
										storage.sone = old1
									}
								}
								if(storage.stwo==null){
									storage.stwo = old2
								}else{
									if(old2!=storage.stwo){
										vtwo = 2;
										var stg = "<span class='updateAlertTwo' style='color:red'>new</span>"
										$(".orderData>li:eq(2)").append(stg)
										storage.stwo = old2
									}
								}
								if(storage.sthree==null){
									storage.sthree = old3
								}else{
									if(old3!=storage.sthree){
										vthree = 2
										var stg = "<span  class='updateAlertThree' style='color:red'>new</span>"
										$(".orderData>li:eq(3)").append(stg)
										storage.sthree = old3
									}
								}
								if(storage.sfour==null){
									storage.sfour = old4
								}else{
									if(old4!=storage.sfour){
										vfour = 2
										var stg = "<span  class='updateAlertFour' style='color:red'>new</span>"
										$(".orderData>li:eq(4)").append(stg)
										storage.sfour = old4
									}
								}
								
								if(storage.sfive==null){
									storage.sfive = old5
								}else{
									if(old5!=storage.sfive){
										vfive = 2
										var stg = "<span  class='updateAlertFive' style='color:red'>new</span>"
										$(".orderData>li:eq(5)").append(stg)
										storage.sfive = old5
									}
								}
						
								if(storage.ssix==null){
									storage.ssix = old6
								}else{
									if(old6!=storage.ssix){
										vsix = 2
										var stg = "<span  class='updateAlertSix' style='color:red'>new</span>"
										$(".orderData>li:eq(6)").append(stg)
										storage.ssix = old6
									}
								}
								
								if(storage.sseven==null){
									storage.sseven = old7
								}else{
									if(old7!=storage.sseven){
										vseven = 2
										var stg = "<span  class='updateAlertSeven' style='color:red'>new</span>"
										$(".orderData>li:eq(7)").append(stg)
										storage.sseven = old7
									}
								}
								
								if(storage.seight==null){
									storage.seight = old8
								}else{
									if(old8!=storage.seight){
										veight = 2
										var stg = "<span  class='updateAlertEight' style='color:red'>new</span>"
										$(".orderData>li:eq(8)").append(stg)
										storage.seight = old8
									}
								}
								
								if(storage.sNine==null){
									storage.sNine = old9
								}else{
									if(old9!=storage.sNine){
										vnine = 2
										var stg = "<span  class='updateAlertNine' style='color:red'>new</span>"
										$(".orderData>li:eq(9)").append(stg)
										storage.sNine = old9
									}
								}
						
								if(storage.sTe==null){
									storage.sTe = old10
								}else{
									if(old10!=storage.sTe){
										vten = 2
										var stg = "<span  class='updateAlertTen' style='color:red'>new</span>"
										$(".orderData>li:eq(10)").append(stg)
										storage.sTe = old10
									}
								}
						}
				})
				
				$(".orderData>li").mouseover(function(){
						var index = $(this).index();
						if(index==1){
							$(".updateAlertOne").remove();
							storage.sone = old1
						}else if(index==2){
							$(".updateAlertTwo").remove();
							storage.sTwo = old2
						}else if(index==3){
							$(".updateAlertThree").remove();
							storage.sThree = old3
						}else if(index==4){
							$(".updateAlertFour").remove();
							storage.sfour = old4
						}else if(index==5){
							$(".updateAlertFive").remove();
							storage.sfive = old5
						}else if(index==6){
							$(".updateAlertSix").remove();
							storage.ssix = old6
						}else if(index==7){
							$(".updateAlertSeven").remove();
							storage.sseven = old7
						}else if(index==8){
							$(".updateAlertEight").remove();
							storage.seight = old8
						}else if(index==9){
							$(".updateAlertNine").remove();
							storage.sNine = old9
						}else{
							$(".updateAlertTen").remove();
							storage.sTe = old10
						}
						
						var class1 = $(this).attr("class")
						if(class1=="showNone"){
							$(".showNoneValue").show();
							$(".orderDataIsFirst").hide();
							$(".orderDataNotFirst").hide();
						}else{
							
							if(index!=0){
								$(".orderIndex").html(index)
								$(".orderDataIsFirst").hide();
								$(".orderDataNotFirst").show();
								var id = $(this).attr("yid")
								var cid = $(this).attr("cid")
								$(".gameCountNum").html(id)
								$(".gameStartTime").html(cid)
								var tid = $(this).attr("tid")
								$(".timeTotal").html(tid)
							}else{
								if(storage.stime2!=null){
									var scoreTop = $(".startTopCount").html();
									var str = "<li id='s' class='orderDataIsFirst'>初始时间："+storage.stime2+",分数："+scoreTop+"</li>"
									$("#s").remove();
									$(".orderDataDetail").append(str)
									$(".orderDataIsFirst").show();
									$(".orderDataNotFirst").hide();
								}else{
									$(".orderDataIsFirst").show();
									$(".orderDataNotFirst").hide();
									var str = "<li id='s' class='orderDataIsFirst'>暂无</li>"
									$("#s").remove();
									$(".orderDataDetail").append(str)
									$(".showNoneValue").hide();
								}
							}
							
						}
					})
				
				$(".startTopCount,.orderData,.orderDataDetail").mouseout(function(){
					$(".orderData").hide();
					storage.sTwo = old2
					storage.sone = old1
					storage.sThree = old3
					storage.sfour = old4
					storage.sfive = old5
					storage.ssix = old6
					storage.sseven = old7
					storage.seight = old8
					storage.sNine = old9
					storage.sTe = old10

				})
				$(".orderData,.orderDataDetail").mouseover(function(){
					var width = parseInt($(".orderData").css("width"))
					var left = parseInt($(".orderData").css("left"))
					$(".orderDataDetail").css("left",(width+left+11)+"px");
					$(".orderDataDetail").show();					
				})
				$(".orderData,.orderDataDetail").mouseout(function(){
					$(".orderDataDetail").hide();
				})
					
				
				
				$(".startTopCount").html(storage.countHistroy)
				
				
				if(storage.bs!=null){
					bList = JSON.parse(storage.bs)		
				}else{
					var bList = [];
					
				}
				
				if(storage.bs2!=null){
					bList2 = JSON.parse(storage.bs2)		
				}else{
					var bList2 = [];
					
				}
				
				if(sessionstorage.sprotectEyeTime1==null){
					sessionstorage.sprotectEyeTime1 = 40
				}
				
				if(storage.snew!=null){
					$(".lockImgOne").attr("src","../lockOffPng.png")
				}
				
				if(storage.stitleColor==1){
					$(".setBkgColor>option:eq(1)").attr("selected","selected")
					$(".titleContent").css("color","black")
				}else{
					$(".setBkgColor>option:eq(0)").attr("selected","selected")
					$(".titleContent").css("color","white")
				}
				
				if(storage.sleft!=null){
					var ssleft = parseInt(storage.sleft)
					var sstop = parseInt(storage.stop)
					$(".titleContent").css({"left":(ssleft)+"px","top":(sstop)+"px"})
				}
				
					if(storage.sFlter==1){
						$(".lockOnShowShadow").css("background","transparent")
						$(".lockOnShowShadow").css("opacity","")
					}else{
						$(".lockOnShowShadow").css("background","black")
						$(".lockOnShowShadow").css("opacity","0.5")
					}
					
				if(storage.newPlayerMessage==1){
					$(".alertMessage").hide()
					$(".getMessage").css("background","gainsboro");
					$(".getMessage").html("已查收")
				}
				
				if(storage.snewMessage==1){
						$(".nbsp").hide();
						$(".getMessage").hide();
						$(".addHelpContentExtra").hide();
						$(".deleteMessage").hide();
						$(".messageLocation").hide();
						$(".messageDate").hide();
				}
				
				$(".toolEntrance").click(function(){
					$(".toolList").fadeIn();
				})
				
				$(".closeToolList").click(function(){
					$(".toolList").fadeOut();
				})
				$(".ps").click(function(){
					location.href = "../img2/tool1.html"
				})
				
				if(sessionstorage.sessionPass!=null){
					
				//锁(,,,,)
				
					$(".toolEntrance").show();
					$(".baidu").show();
					$(".greet").show("3000");
					$(".setGameMusic").show();
					$(".hardWord").show();
					$(".skipAdver").show();
					$(".moneyName").show();
					$(".money").show();
					$(".gifFlush").show();
					$(".guaMa").show();
					$(".countMoney").show();
					//$("body").css("background","honeydew");
			 		$("#initMenu").hide();
			 		$(".getPasswordMessage").show();
			 		if(storage.stell==null){
			 			$(".versionTell").show();
			 		}
			 		
			 		if(storage.mainBkg!=null){
			 			$(".isNotUsed").hide();
			 			$("[hid="+storage.mainBkg+"]").parent().children("p:last").show();
			 			$(".mainPageBkg").css({"background":"url(../"+storage.mainBkg+".jpg)","background-size":"100% 100%","background-color":storage.mainBkg})
			 		}else{
			 			$(".mainPageBkg").css("background-color","honeydew")
			 		}
				}else{
					
				}
				if(storage.stitleContent!=null){
					$(".titleContent>em").html(storage.stitleContent)
					if(storage.stitleContent.indexOf("</br>")!="-1"){
						var d = storage.stitleContent.indexOf("</br>")
						var pD = storage.stitleContent.substring(0,d)
						var nD = storage.stitleContent.substring((d+5))
						$(".setBkgTitleContent").val(pD+","+nD)
					}else{
						$(".setBkgTitleContent").val(storage.stitleContent)
					}
				}
				if(storage.sopacity!=null){
					$(".titleContent").css("opacity",storage.sopacity)
					if(storage.sopacity=="0.2"){
						$(".setBkgTitleOpicty>span:eq(0)").html("●").siblings().html("|");
						$(".setBkgTitleOpicty>span:eq(0)").css("font-size","26px").siblings().css("font-size","12px")
					}else if(storage.sopacity=="0.4"){
						$(".setBkgTitleOpicty>span:eq(1)").html("●").siblings().html("|");
						$(".setBkgTitleOpicty>span:eq(1)").css("font-size","26px").siblings().css("font-size","12px")
					}else if(storage.sopacity=="0.6"){
						$(".setBkgTitleOpicty>span:eq(2)").html("●").siblings().html("|");
						$(".setBkgTitleOpicty>span:eq(2)").css("font-size","26px").siblings().css("font-size","12px")
					}else if(storage.sopacity=="0.8"){
						$(".setBkgTitleOpicty>span:eq(3)").html("●").siblings().html("|");
						$(".setBkgTitleOpicty>span:eq(3)").css("font-size","26px").siblings().css("font-size","12px")
					}else if(storage.sopacity=="1"){
						$(".setBkgTitleOpicty>span:eq(4)").html("●").siblings().html("|");
						$(".setBkgTitleOpicty>span:eq(4)").css("font-size","26px").siblings().css("font-size","12px")
					}
				}
				if(sessionstorage.lockOn!=null){
					if(sessionStorage.salertOne==null){
						sessionStorage.salertOne=1	
						valM = "不好意思，你还没有解锁呢"
						alertModel(valM)
					}
					$(".lockOnShow").show();
					$(".lockOnShowSafe").show();
					$(".lockOnShowShadow").show();
					if(storage.sbkgId==null){
						changeBkg();
						
					}else{
						var randBkg = storage.sbkgId
						$(".lockOnShow").attr("id",randBkg)
						$(".lockOnShow").css({"background":"url(../"+randBkg+".jpg)","background-size":"100% 100%"})
					}
				}
				
				if(storage.setBkgFour!=null){
					$(".lockImgFour").attr("src","../lockOffPng.png")
				}
				
				//默认品保时间
				if(storage.timeCount==null){
					var timeIsnotResponse =180000;
				}else{
					var timeIsnotResponse = parseInt(storage.timeCount)*60000;
				}
				setInterval(isNotResponse,timeIsnotResponse)
				
				var year = new Date().getFullYear();
				var month = new Date().getMonth();
				var day = new Date().getDate();
				if(storage.smonth==null){
					storage.smonth = month;
				}else{
					if(parseInt(month)>parseInt(storage.smonth)){
						if(parseInt(month)-parseInt(storage.smonth)>=2){
							//重新写下
							//storage.clear();
						}
						if(sessionstorage.sessionPass!=null){
							if(sessionStorage.salertTwo==null){
								if(parseInt(month)-parseInt(storage.smonth)>0){
									if(storage.sv==null){
										alert("哼，居然"+(parseInt(month)-parseInt(storage.smonth))+"个月没来玩o(´^｀)o,不跟你玩了！")
										var flag = confirm("我给你准备了一份礼物，要不要？");
										if(flag==true){
											alert("想多了，不来看我就算了，还跟我要礼物....")
										}
										else{
											alert("不要礼物那就算了[手动滑稽]")
										}
										storage.sv = 1
									}
								}
								sessionStorage.salertTwo = 1;
							}
							
						}
					}
				}
				
				if(storage.sday==null){
					storage.sday = day
				}else{
					if(sessionstorage.sessionPass!=null){
						if(sessionStorage.salertThree==null){
							if(parseInt(day)>parseInt(storage.sday)){
								if(parseInt(day)-parseInt(storage.sday)>=4){
									if(sessionstorage.gd==null){
										alert("你都有"+(parseInt(day)-parseInt(storage.sday))+"天没来看我了(✪ω✪)")
										sessionstorage.gd = 1
									}
								}
							}
							sessionStorage.salertThree = 1
						}
					}
				}
				
				
				var hour = new Date().getHours();
				if(storage.a==null){
					storage.shour = hour
					storage.a = 2
				}else{
					if(parseInt(hour)>parseInt(storage.shour)){
						if(parseInt(hour)-parseInt(storage.shour)>=2){
							
							if(storage.c ==null){
								storage.c = 0;
								$(".hardWord>span").html(hardWords[parseInt(storage.c)]);
							}else{
								var sc = parseInt(storage.c);
								if(sc>hardWords.length){
									sc = -1
								}
								sc = sc+1;
								storage.c = sc;
								$(".hardWord>span").html(sc)
							}
							
							
							storage.shour = hour
							var randKeyNum1 = Math.floor(Math.random() * 9 + 1); //1-10
							if(randKeyNum1<=3){
								var uo = ["Q","Z","B"];
								var ko = [81,90,66]
							}else if(randKeyNum1>3&&randKeyNum1<=6){
								var uo = ["Y","X","I"]
								var ko = [89,88,73]
							}else{
								var uo = ["C","M","Enter"]
								var ko = [67,77,13]
							}
							var randKeyCode = Math.floor(Math.random() * 9 + 1); //1-10
							if(randKeyCode<=3){
								var randKey = uo[0]
								var keycode = ko[0]
							}else if(randKeyCode>3&&randKeyCode<=6){
								var randKey = uo[1]
								var keycode = ko[1]
							}else{
								var randKey = uo[2]
								var keycode = ko[2]
							}
							storage.srandKey = randKey
							storage.srandCode = keycode
							if(sessionstorage.sessionPass!=null){
								var timeLogin = parseInt(hour) - parseInt(storage.shour)
								if(sessionStorage.salerFour==null){
									alert("你距离上次登录已经有"+timeLogin+"个小时啦,另外密码快捷键已做出更改！")
									sessionStorage.salerFour = 1;
								}
								
							}
						}	
					}
				if(sessionstorage.sessionPass!=null){
					$(".pauseSpecial").show();
//					$("body").css("background","honeydew");
					if(hour>=3&&hour<=6){
						$(".greetContent").html("不好！")
						////$("body").css("background-color","black");
					}
					
					
					
					
						var rand4 = Math.floor(Math.random() * 9 + 1)+1; //1-10 
						if(rand4<=4&&rand4>=0){
							if(hour>=3&&hour<=6){
								if(sessionStorage.salertSix==null){
									var flag = confirm("还不睡！[○･｀Д´･ ○]")
									while(true){
										alert("关不掉的,快睡觉!")
									}
									sessionStorage.salertSix = 1
								}
								////$("body").css("background-color","black");
							}
							if(hour==22){
								if(sessionStorage.salertSeven==null){
									alert("你好碎觉了")
									sessionStorage.salertSeven = 1
								}
								////$("body").css("background-color","lightslategray");
							}
							if(hour>=0&&hour<3){
								if(sessionStorage.salertEight==null){
									$(".greetContent").html("不好！")
									alert("都几点了，还不睡");
									alert("真的是")
									alert("想把我差掉，没辣么容易QAQ")
									alert("╭(╯^╰)╮")
									sessionStorage.salertEight = 1									
								}
								////$("body").css("background-color","lightslategray");
							}
							
						}else{
							if(hour>=3&&hour<=6){
								if(sessionStorage.salertNine==null){
									alert("你居然还没睡觉")
									while(true){
										alert("关不掉的,快睡觉!")
									}
									sessionStorage.salertNine = 1
								}
								////$("body").css("background-color","black");
							}
							if(hour==22){
								if(sessionStorage.salertTen== null){
									alert("我好困鸭，我也要休息的")
									sessionStorage.salertTen = 1
								}
								////$("body").css("background-color","darkgray");
							}
							if(hour>=0&&hour<3){
								if(sessionStorage.salertTenOne==null){
									alert("z~z~~z~~z~~~z,呼....")
									sessionStorage.salertTenOne = 1									
								}
								////$("body").css("background-color","dimgray");
							}
						}
					if(day%2==0){
						if(hour>6&&hour<=9){
							if(sessionStorage.salerTenTwo==null){
								var rand4 = Math.floor(Math.random() * 9 + 1)+1; //1-10 
								if(rand4<=2){
									alert("早上好！(*╹▽╹*)")
								
								}
								sessionStorage.salertTenTwo  = 1
							}
							////$("body").css("background-color","lightyellow");
						}
						if(hour>9&&hour<=11){
							if(sessionStorage.salertTenThree==null){
								var rand4 = Math.floor(Math.random() * 9 + 1)+1; //1-10 
								if(rand4<=2){
									alert("快看看我有没有给你点赞o(￣▽￣)ｄ")
								
								}
								sessionStorage.salertTenThree = 1	
							}
							////$("body").css("background-color","skyblue");
						}
						if(hour>11&&hour<=13){
							if(sessionStorage.salertTenFour==null){
								var rand4 = Math.floor(Math.random() * 9 + 1)+1; //1-10 
								if(rand4<=2){
									var flah = confirm("吃饭了吗١١(❛ᴗ❛),点确定我就知道了")
									if(flah==true){
										alert("好哒")
									}else{
										alert("不吃饭你想干嘛")
										var flah = confirm("是不是有事忙的，点按钮？")
										if(flah==true){
											alert("你个糟老头子,信你了.....")
										}else{
											alert("吆喝，没事还不吃饭，快去吃饭")
											for(var i = 1;i<5;i++){
												alert("吃饭")
											}
										}
									}
								
								}
								sessionStorage.salertTenFour = 1	
							}
							////$("body").css("background-color","antiquewhite");
						}
						if(hour>13&&hour<=17){
							if(sessionStorage.salertTenFive==null){
								var rand4 = Math.floor(Math.random() * 9 + 1)+1; //1-10 
								if(rand4<=2){
									alert("没上课鸭？")
								
								}
								sessionStorage.salertTenFive  = 1
							}
							////$("body").css("background-color","navajowhite");
						}
						
						if(hour>17&&hour<=20){
							if(sessionStorage.salertTenSix==null){
								sessionStorage.salertTenSix = 1
								var rand4 = Math.floor(Math.random() * 9 + 1)+1; //1-10 
								if(rand4<=2){
									alert("在干嘛呢")
								
								}
							}
							////$("body").css("background-color","coral");
						}
						if(hour==20){
							if(sessionStorage.salertTenSeven==null){
								sessionStorage.salertTenSeven = 1
								var rand4 = Math.floor(Math.random() * 9 + 1)+1; //1-10 
								if(rand4<=2){
								
									alert("你好碎觉了")
								}
							}
						}
						if(hour==21){
							if(sessionStorage.salertTenNine==null){
								sessionStorage.salertTenNine = 1
								var rand4 = Math.floor(Math.random() * 9 + 1)+1; //1-10 
								if(rand4<=2){
									alert("你好碎觉了")
								
								}
							}
						}
						if(hour==23){
							if(sessionStorage.salertTenTen=null){
								sessionStorage.salertTenTen = 1
								var rand4 = Math.floor(Math.random() * 9 + 1)+1; //1-10 
								if(rand4<=2){
									alert("你不睡觉我还要睡觉呢")
									for(var i = 1;i<5;i++){
										alert("快点睡觉去(づ￣3￣)づ╭❤～")
									}
								}
							}
							////$("body").css("background-color","lightslategray");
						}
						}else{
							if(hour>7&&hour<=10){
								if(sessionStorage.salertTenTenOne==null){
									sessionStorage.salertTenTenOne = 1
									var rand4 = Math.floor(Math.random() * 9 + 1)+1; //1-10 
									if(rand4<=2){
										alert("干嘛呢？")
									}
								}
							}
						if(sessionStorage.salertTenTenTwo==null){
								sessionStorage.salertTenTenTwo = 1
								if(hour>13&&hour<=15){
								var rand4 = Math.floor(Math.random() * 9 + 1)+1; //1-10 
								if(rand4<=2){
									alert("上课没？")
								}
							}
							if(hour>15&&hour<=17){
								var rand4 = Math.floor(Math.random() * 9 + 1)+1; //1-10 
								if(rand4<=2){
									alert("夕阳无限好，只是近黄昏呐！")
								}
							}
							if(hour>17&&hour<=23){
								var rand4 = Math.floor(Math.random() * 9 + 1)+1; //1-10 
								if(rand4<=2){
									alert("今天也是元气满满的一天额！")
								}
							}
						}
					}
				}
			}
				
				
				var h = 1;
				var uy = 1;
				$(document).keydown(function(oEvent){
				if(sessionstorage.sessionPass!=null){
					if(storage.sz==null){
						alert("记住鸭，为什么有时候嗯快捷键没有用，那不是因为有Bug，而是因为就像你玩4399需要键盘才能玩的小游戏一样，都需要点一下你当前的浏览器页面键盘才会有作用，这边也是同理，当然喽，你可以不用那么麻烦，你可以先点一下Tab键，然后再嗯一下相应的快捷键就OK啦~")
						storage.sz = 1
					}
					
				}
					
					if(oEvent.keyCode==35){
						var f = prompt("（官方人员测试专用，如遇到叉掉即可~）请输入密码：");
						if(f=="11"){
							alert("密码正确，缓存已清！")
							storage.clear();
							history.go(0)
						}else{
							alert("密码错误")
						}
					}
					
					if(oEvent.keyCode==13){
						var inputContent = $(".inputContent").val();  
						talkMission(inputContent)
						tishi();
					}
					
					
					//talk
					if(ug==2){
						uy++;
						var content = $(".inputContent").val();
						var timeMinute = new Date().getMinutes();
						var timeFuzhi = $(".talkFuZhi").val();
						if(timeFuzhi!=""){
							var zhi = parseInt(timeMinute)-parseInt(timeFuzhi)
							if(zhi>=3){
								$(".petReply").html("你好慢鸭..........")
								tishi();
								$(".talkFuZhi").val(timeMinute);
							}else{
								
							}
							if(uy==2){
								$(".petReply").html("饿")
								tishi();	
							}
						}else{
							$(".talkFuZhi").val(timeMinute);
						}
						
					}
					
					//快捷键
					if(storage.srandCode==null){
						if (oEvent.keyCode== 88&& oEvent.ctrlKey) {
							kuaijieWay();
						}	
					}else{
						if (oEvent.keyCode== parseInt(storage.srandCode)&& oEvent.ctrlKey) {
							kuaijieWay();
						}
					}
					
					if(oEvent.ctrlKey&&oEvent.keyCode==37){
						$(".lockOnShowSafe").show();
						$(".lockOnShow").show();
						$(".lockOnShow").css({"background":"url("+storage.slockPath+") no-repeat","background-size":"100% 100%"});
			        	$(".video1").attr("src",storage.slockPath)
						$(".lockOnShowShadow").show();
						if(storage.sbkgId==null){
							changeBkg();
						}else{
							var randBkg = storage.sbkgId
							$(".lockOnShow").attr("id",randBkg)
							$(".lockOnShow").css({"background":"url(../"+randBkg+".jpg)","background-size":"100% 100%"})
						}
						sessionstorage.lockOn = 1;
					}
					
					if(oEvent.ctrlKey&&oEvent.keyCode==39){
					if(sessionstorage.sessionPass!=null){
						if(sessionStorage.lockOn!=null){
							$(".buttonGroup").hide();
						$(".buttonGroup").animate({"width":"0px"},"2000")
						var name=prompt("亲解锁需要要输入密码哟~")
						if(storage.word==null){
							if (name!=null && name!=""&&name==ppss){
								ty = 1
								$(".lockOnShowSafe").hide();
								$(".lockOnShowShadow").hide();
								$(".lockOnShow").fadeOut()
								$(".video1").attr("src","")
								sessionstorage.removeItem("lockOn")
								$("#menu").hide();
							}else{
								var name1=prompt("密匙不正确，可联系作者哟...","")
								if (name1!=null && name1!=""&&name1==ppss){
									$(".lockOnShowSafe").hide();
									$(".video1").attr("src","")
								$(".lockOnShow").fadeOut()
								$(".lockOnShowShadow").hide();
									ty = 1
									$("#menu").hide();
									sessionstorage.removeItem("lockOn")
								}else{
									alert("密匙还是不正确...")
								}
							}	
						}else{
							if (name!=null && name!=""&&storage.word==name){
								$(".lockOnShowSafe").hide();
								$(".lockOnShow").fadeOut()
								$(".lockOnShowShadow").hide();
								sessionstorage.removeItem("lockOn")
								$(".video1").attr("src","")
								ty = 1
								$("#menu").hide();
							}else{
								var name1=prompt("密匙不正确，可联系作者哟...","")
								if (name1!=null && name1!=""&&name1==storage.word){
									$(".lockOnShowSafe").hide();
								$(".lockOnShow").fadeOut()
								$(".lockOnShowShadow").hide();
								$(".video1").attr("src","")
									ty = 1
									sessionstorage.removeItem("lockOn")
									$("#menu").hide();
								}else{
									alert("密匙还是不正确...")
								}
							}
						}
						}else{
							alert("是不是傻，你都没有上锁怎么就解锁了~")
						}
					
					}
							
					}
				})
				
				
				function kuaijieWay(){
					if(ha==0&&sessionstorage.sessionPass!=null){
						sessionstorage.removeItem("stimeInit")
						$(".relaxJsp").hide();
						sessionstorage.removeItem("spanDuan")
						storage.stimeTot = 300
						
						$(".lockOnShowSafe").hide();
								$(".lockOnShow").fadeOut()
								$(".lockOnShowShadow").hide();
								sessionstorage.removeItem("lockOn")
								$(".video1").attr("src","")
								ty = 1
								$("#menu").hide();
						
						$(".countSpecial").show();
					if(h==1){
						if(sessionstorage.sessionPass!=null){
							rightPasswordThen();
							h = 2;
						}else{
							var name=prompt("每次打开浏览器第一次使用快捷键需输入密匙...","")
							if(storage.word==null){
								if (name!=null && name!=""&&name==ppss){
									alert("输入正确，请再使用一次快捷键即可跳转")
									sessionstorage.sessionPass = name
									history.go(0);
									$(".skipAdver").show();
									$(".moneyName").show();
									$(".money").show();
									$(".guaMa").show();
									$(".countMoney").show();
									$(".countSpecial").show();
								}else{
									var name1=prompt("密匙不正确，可联系作者哟...","")
									if (name1!=null && name1!=""&&name1==ppss){
										sessionstorage.sessionPass = name
										history.go(0);
										alert("输入正确，请再使用一次快捷键即可跳转")
										$(".skipAdver").show();
										$(".moneyName").show();
					$(".money").show();
					$(".guaMa").show();
										$(".countMoney").show();
										$(".countSpecial").show();
									}else{
										alert("密匙还是不正确...")
										$(".allSettiong").html("△");
									}
								}	
							}else{
								if (name!=null && name!=""&&storage.word==name){
									sessionstorage.sessionPass = name
									history.go(0);
									alert("输入正确，请再使用一次快捷键即可跳转")
									$(".skipAdver").show();
									$(".moneyName").show();
					$(".money").show();
					$(".guaMa").show();
									$(".countMoney").show();
									$(".countSpecial").show();
								}else{
									var name1=prompt("密匙不正确，可联系作者哟...","")
									if (name1!=null && name1!=""&&name1==storage.word){
										history.go(0);
										sessionstorage.sessionPass = name
										alert("输入正确，请再使用一次快捷键即可跳转")
										$(".skipAdver").show();
										$(".moneyName").show();
					$(".money").show();
					$(".guaMa").show();
										$(".countMoney").show();
										$(".countSpecial").show();
									}else{
										alert("密匙还是不正确...")
									}
								}
							}
						}
					}else{
						h = 1;
						history.go(0);
					}
					}
					
					
				}
				
				
				//localStorage.a=time

				//查找
				
				//console.log(localStorage.a)//1
				
				//删除
				//delete localStorage.a

				//还可以获得数据的数量

				//localStorage.length

				//清除全部的数据

				//localStorage.clear()
				
//如果本地找不到怎么办
				$(".allSetXiaoguo1").click(function(){
					history.go(0)
					$(".page").css("background","url(../startCommon.gif)");
					$(".count").css("background","url(../titleCommon.jpg)");
					commonSpecial = 0;
					
					
					$(".allSetXiaoguo1").hide();
					$(".allSetXiaoguo2").hide();
					$(".xianXiaoguo1").hide();
					$(".xianXiaoguo2").hide();
				})
				
				var m = 1;
				
				
				function rightPasswordThen(){
					$(".page").css("background","url(../page.jpg)");
					$(".count").css("background","url(../title.jpg)");
					commonSpecial = 1;
					m = 2;
					$(".countSpecial").show();
					
					$(".page").css("color","floralwhite")
							
					$(".extrSetFont>p:not(:eq(0))").remove();
					var str = "<p title= '修改密匙可有效防止别人来获取内容，不过不同的浏览器初次登录还是最初的密码...'>修改密匙：</p><p><input class='oldPassword' style='width: 90px;' type='password' placeholder='请先输入旧密码'/><input placeholder='输入新密码' type='password' class='newPassword' style='width:90px'/><input type='button' value='保存' class='savePass'/><span class='getKuaijie'>(获取)</span></p>"
					$(".extrSetFont").append(str);
					
//					var str2 = "<div title='点击获取快捷键，可无需繁琐的密码登录，但是第一次打开需要正确的密码输入...'>获取</div>"
//					$(".extraSetting").append(str2);

					var ut =1;
					function modifyPass(){
						var oldPassIsEmpty = $(".oldPassword").val();
						var newPassIsEmpty = $(".newPassword").val();
						if(oldPassIsEmpty==""||newPassIsEmpty==""){
							alert("旧密码或新密码不能为空！")
						}else{
							if(storage.word==null){
								if(oldPassIsEmpty!=ppss){
									alert("旧密码错误！")
									$(".oldPassword").val("");
								}else{
									var flag = confirm("新密码为"+newPassIsEmpty+",是否确认修改?");
									if(flag==true){
										alert("密码修改成功！")	
										$(".extraSetting").animate({"width":"0px"},"3000")
										$(".extraSetting").hide("3000");
										storage.word = newPassIsEmpty
									}
								}
							}else if(storage.word!=null){
								if(oldPassIsEmpty!=storage.word){
									if(ut!=1){
										alert("旧密码错误!")
										alert("你四不四傻，这个密码已经改过了，旧密码就是你刚刚设置的新密码...")
									}else{
										alert("旧密码错误!")
									}
									//if(ut==1){
									//	ut++;
									//}else{
									//	alert("旧密码错误!")
									//	alert("你四不四傻，这个密码已经改过了，旧密码就是你刚刚设置的新密码...")
									//}
									$(".oldPassword").val("");
								}else{
									var flag = confirm("新密码为"+newPassIsEmpty+",是否确认修改?");
									if(flag==true){
										alert("密码修改成功！")	
										ut++;
										$(".extraSetting").animate({"width":"0px"},"3000")
										$(".extraSetting").hide("3000");
										storage.word = newPassIsEmpty
									}
								}
							}
						}
					}
					
					
					$(".savePass").click(function(){
						modifyPass();
					})
					
					
					function getKuai(){
						var newFlag = confirm("点击确定获取快捷键，可无需繁琐的密码登录，但是第一次打开需要正确的密码输入,快捷键会随着时间长短变化...")
						if(newFlag==true){
							if(storage.srandCode==null){
								alert("密码输入正确，快捷键为：( ctrl+X )...")
							}else{
								alert("密码输入正确，快捷键为：( ctrl+"+storage.srandKey+" )...")
							}
						}
					}
					
					$(".getKuaijie").click(function(){
						var name=prompt("获取需要输入密码...","")
						if(storage.word==null){
							if (name!=null && name!=""&&name==ppss){
								rightPasswordThen();
								sessionstorage.sessionPass = name
								getKuai()
							}else{
								var name1=prompt("密匙不正确，可联系作者哟...","")
								if (name1!=null && name1!=""&&name1==ppss){
									rightPasswordThen()
									sessionstorage.sessionPass = name
									getKuai()
								}else{
									alert("密匙还是不正确...")
									$(".allSettiong").html("△");
								}
							}	
						}else{
							if (name!=null && name!=""&&storage.word==name){
								rightPasswordThen();
								sessionstorage.sessionPass = name
								getKuai()
							}else{
								var name1=prompt("密匙不正确，可联系作者哟...","")
								if (name1!=null && name1!=""&&name1==storage.word){
									rightPasswordThen()
									sessionstorage.sessionPass = name
									getKuai()
								}else{
									alert("密匙还是不正确...")
								}
							}
						}
					})
				}
				
				
				$(".allSetXiaoguo2").click(function(){
					$(".countSpecial").show();
					if(m==1){
						var name=prompt("请输入密匙...","")
						if(storage.word==null){
							if (name!=null && name!=""&&name==ppss){
//								history.go(0)
								$(".hrTotal").show();
								if(storage.mainBkg!=null){
						 			$(".isNotUsed").hide();
						 			$("[hid="+storage.mainBkg+"]").parent().children("p:last").show();
						 			$(".mainPageBkg").css({"background":"url(../"+storage.mainBkg+".jpg)","background-size":"100% 100%","background-color":storage.mainBkg})
						 		}else{
						 			$(".mainPageBkg").css("background-color","honeydew")
						 		}
								
								$(".greet").show("3000");
								$(".hardWord").show();
						 		////$("body").css("background-color","honeydew");
								
								$(".skipAdver").show();
								$(".moneyName").show();
					$(".money").show();
					$(".guaMa").show();
					$("#initMenu").hide();
								$(".countMoney").show();
								$(".countSpecial").show();
								
								rightPasswordThen();
								sessionstorage.sessionPass = name
							}else{
								var name1=prompt("密匙不正确，可联系作者哟...","")
								if (name1!=null && name1!=""&&name1==ppss){
									$(".greet").show("3000");
									$(".hardWord").show();
									$(".skipAdver").show();
									$(".moneyName").show();
					$(".money").show();
					$("#initMenu").hide();
					$(".guaMa").show();
									$(".countMoney").show();
									$(".countSpecial").show();
							 		//$("body").css("background-color","honeydew");
									
									rightPasswordThen()
									sessionstorage.sessionPass = name
								}else{
									alert("密匙还是不正确...")
									$(".allSettiong").html("△");
								}
							}	
						}else{
							if (name!=null && name!=""&&storage.word==name){
								$(".greet").show("3000");
								$(".hardWord").show();
								$(".skipAdver").show();
								$(".hrTotal").show();
//								history.go(0)
								if(storage.mainBkg!=null){
						 			$(".isNotUsed").hide();
						 			$("[hid="+storage.mainBkg+"]").parent().children("p:last").show();
						 			$(".mainPageBkg").css({"background":"url(../"+storage.mainBkg+".jpg)","background-size":"100% 100%","background-color":storage.mainBkg})
						 		}else{
						 			$(".mainPageBkg").css("background-color","honeydew")
						 		}
								
								$(".moneyName").show();
								$("#initMenu").hide();
					$(".money").show();
					$(".guaMa").show();
									$(".countMoney").show();
									$(".countSpecial").show();
									//$("body").css("background-color","honeydew");
								rightPasswordThen();
								sessionstorage.sessionPass = name
							}else{
								var name1=prompt("密匙不正确，可联系作者哟...","")
								if (name1!=null && name1!=""&&name1==storage.word){
									$(".greet").show("3000");
									$(".hardWord").show();
									$(".skipAdver").show();
//									history.go(0)
									$(".moneyName").show();
					$(".money").show();
					$("#initMenu").hide();
					$(".guaMa").show();
									$(".countMoney").show();
									$(".countSpecial").show();
							 		//$("body").css("background-color","honeydew");
									rightPasswordThen()
									sessionstorage.sessionPass = name
								}else{
									alert("密匙还是不正确...")
								}
							}
						}
					}else{
						$(".page").css("background","url(../page.jpg)");
						$(".count").css("background","url(../title.jpg)");
						commonSpecial = 1;
					}
					 
					
					
					
					$(".allSetXiaoguo1").hide();
					$(".xianXiaoguo1").hide();
					$(".xianXiaoguo2").hide();
					$(".allSetXiaoguo2").hide();
					k = 1;
					$(".allSettiong").html("△");
				})
				
				
				$(".page>div").click(function(){
				if(sessionstorage.sessionPass!=null){
					if(storage.sSkipLockOff==null){
						k = 1;
						$(".allSetXiaoguo1").hide();
						$(".xianXiaoguo1").hide();
						$(".xianXiaoguo2").hide();
						$(".allSetXiaoguo2").hide();
						oldMinute = new Date().getMinutes();
						$(".trick").show();
					}else{
						var randEr = Math.floor(Math.random() * 9 + 1);//1-10
						if(randEr<=2){
							var str = "<p class='anotherTrick' style='padding-top:60px'><a href='../first.html' title='熬的不是夜，而是生命！熬夜到底有哪些危害？'>熬的不是夜，而是生...</a> ps:刷新一下即可返回<p>"
						}else if(randEr>2&&randEr<=4){
							var str = "<p class='anotherTrick' style='padding-top:60px'><a href='../second.html' title='熬夜的五大危害，你了解多少？~'>熬夜的五大危害，你了解多少？</a> ps:刷新一下即可返回<p>"
						}else if(randEr>4&&randEr<=6){
							var str = "<p class='anotherTrick' style='padding-top:60px'><a href='../third.html' title='熬夜的危害 女生熬夜有哪些危害~'>熬夜的危害,女生熬夜有哪些危害</a> ps:刷新一下即可返回<p>"
						}else if(randEr>6&&randEr<=8){
							var str = "<p class='anotherTrick' style='padding-top:60px'><a href='../fourth.html' title='别再熬夜了，真的会死！熬夜的危害比你想象还要大！'>别再熬夜了，真的会死！熬夜的危...</a> ps:刷新一下即可返回<p>"
						}else{
							var str = "<p class='anotherTrick' style='padding-top:60px'><a href='../fifth.html' title='都知道熬夜坏处大，但熬夜的4个“好处”却没人提，你知道几个？'>都知道熬夜坏处大，但熬夜的4个...</a> ps:刷新一下即可返回<p>"
						}
						$(".antherTrick").remove();
						$(".trick2").append(str)
						$(".trick2").show();
						startGeme();
					}
				}
					
				})
				
				$(".getPasswordMessage").click(function(){
					if(storage.sbm==null){
						var f = confirm("获取作弊码修改游戏初始时间，需要支付12000，是否确定[滑稽]？")
						if(f==true){
							var restMon = parseInt(storage.scountMoney)
							if(restMon-12000>=0){
								alert("支付成功！,作弊码为（1514750940）")
								storage.scountMoney = restMon-12000
								storage.sbm = 1
							}else{
								alert("钱不够哟~")
							}
						}else{
							alert("交易取消！")
						}
					}else{
						alert("密码为1514750940")						
					}
				})
				
				var k = 1;
				$(".allSettiong").click(function(){
					if(k==1){
						$(".allSettiong").html("▽")
						$(".allSetXiaoguo1").show();
						$(".allSetXiaoguo1").animate({"left":"530px"},"2000");
						$(".allSetXiaoguo2").show("3000");
						$(".xianXiaoguo1").animate({"width":"25px"},"2000");
						$(".xianXiaoguo2").animate({"height":"14px"},"2000");
						$(".allSetXiaoguo2").animate({"left":"530px"},"5000");
						$(".xianXiaoguo1").show();
						$(".xianXiaoguo2").show("5000")
					
						$(".trick").hide();
						k = 2;	
					}else if(k==2){
						$(".allSettiong").html("△")
						$(".allSetXiaoguo1").animate({"left":"620px"},"2000");
						$(".allSetXiaoguo1").hide();
						$(".allSetXiaoguo2").hide("3000");
						$(".xianXiaoguo1").animate({"width":"1px"},"2000");
						$(".xianXiaoguo2").animate({"height":"1px"},"2000");
						$(".allSetXiaoguo2").animate({"left":"620px"},"5000");
						$(".xianXiaoguo1").hide();
						$(".xianXiaoguo2").hide("5000")
						k = 1;	
					}
				})
				
				
				$(".allSetXiaoguo1").click(function(){
					$(".allSettiong").html("△");
					k = 1;
					$(".page").css("color","black")
					
				})
				
				//关闭右击菜单
				window.oncontextmenu=function(e){
					e.preventDefault();
				}
				$(".historyScore").mousedown(function(e){
					if(e.which==3){
						$("#initMenu").hide();
					}
				})
				
			function changGif(){
				var gifChange = Math.floor(Math.random() * 9 + 1);//1-10
				if(gifChange==5){
					$(".gif").attr("src","../kaman1.gif")
				}else if(gifChange==6){
					$(".gif").attr("src","../kaman2.gif")
				}else if(gifChange==3){
					$(".gif").attr("src","../kaman3.gif")
				}else if(gifChange==4){
					$(".gif").attr("src","../kaman4.gif")
				}else if(gifChange==8){
					$(".gif").attr("src","../kaman5.gif")
				}
			}
			changGif();
				
			var gvc = 1;
			$(".gifFlush").click(function(){
				if(gvc==1){
					alert("可能广告君在睡觉，多刷几次哦~")
					gvc++					
				}
				changGif();
			})
			
			function loadJs(path,callback){
				$(".jsPanDuan").show()
			    var header=document.getElementsByTagName("head")[0];
			    var script=document.createElement('script');
			    script.setAttribute('src',path);
			    header.appendChild(script);
			    //对于浏览器的判断是ie还是其他
			    if(!/*@cc_on!@*/false){
			        script.onload=function(){
			            console.log("非ie");
			            callback();
			        }
			    }else{
			        script.onreadystatechange=function(){
			            if(script.readystate=="loaded" ||script.readState=='complate'){
			                console.log("ie");
			                callback();
			            }
			        }
			    }
			}
			loadJs("../../js/jquery-1.12.4.js",function(){
			    //("加载完毕！")
			    $(".jsPanDuan>p").html("加载完毕！")
			    setTimeout("$('.jsPanDuan').fadeOut()","200")
			});
			
})