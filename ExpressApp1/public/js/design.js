    	var yesImg = $("<img />");
    	var tpList = [];
    	var pageIndex = 0;
    	var selTplId = "";
    	var selTpl = {};
    	var persons = [];
    	var selPerson = 0;
    	var activeTab = 0;

        var stage = new Kinetic.Stage({container: "cardCanvas"});
        var layer = new Kinetic.FastLayer();
        var stageE = new Kinetic.Stage({container: "cardCanvasE"});
        var layerE = new Kinetic.FastLayer();
        var currentdesign = {};

        function drawImg(can, tplUrl, logoUrl, left, top, width, height, target){
            var img = new Image();
            img.onload = function () {
                can.width = img.naturalWidth;
                can.height = img.naturalHeight;
                var ctx = can.getContext("2d");
                ctx.drawImage(img, 0, 0);

                var logo = new Image();
                logo.onload = function () {
                    var lwidth = logo.naturalWidth;
                    var lheight = logo.naturalHeight;
                    var scale = lwidth / lheight;
                    if (lwidth <= width && lheight <= height){
                        ctx.drawImage(logo, left, top, lwidth, lheight);
                    } else if (lwidth > width && lheight <= height){
                        ctx.drawImage(logo, left, top, width, width / scale);
                    } else if (lwidth < width && lheight >= height){
                        ctx.drawImage(logo, left, top, height * scale, height);
                    } else{
                        if (scale >= width / height) {
                            lheight = width / scale;
                            lwidth = width;
                        } else {
                            lwidth = height * scale;
                            lheight = height;
                        }
                        ctx.drawImage(logo, left, top, lwidth, lheight);
                    }

                    target.css('background-image', 'url("' + can.toDataURL() + '")');
                };
                logo.src = logoUrl;
            }
            img.src = tplUrl;
        }

        function drawImg2(tplUrl, logoUrl, left, top, width, height, target){
            var img = new Image();
			img.onload = function () {
				stage.width(img.naturalWidth);
                stage.height(img.naturalHeight);
				var i = new Kinetic.Image({ x: 0, y: 0, image: img });
                layer.add(i);
                stage.add(layer);

				var logo = new Image();
                logo.onload = function () {
                    var lwidth = logo.naturalWidth;
                    var lheight = logo.naturalHeight;
                    var scale = lwidth / lheight;
                    if (lwidth <= width && lheight <= height){

                    } else if (lwidth > width && lheight <= height){
                    	lwidth = width;
                    	lheight = width / scale;
                    } else if (lwidth < width && lheight >= height){
                    	lwidth = height * scale;
                    	lheight = height;
                    } else{
                        if (scale >= width / height) {
                            lwidth = width;
                            lheight = width / scale;
                        } else {
                            lwidth = height * scale;
                            lheight = height;
                        }
                    }
                    var l = new Kinetic.Image({ x: left, y: top, width: lwidth, height: lheight, image: logo });
                    layer.add(l);

					refreshCTexts();

                    stage.toDataURL({
	                    mimeType: "image/jpeg",
	                    quality: 1.0,
	                    callback: function(dataUrl) {
	                        target.css('background-image','url("' + dataUrl + '")');
	                    }
	                });
                };
                logo.src = logoUrl;
			};
			img.src = tplUrl;
        }

        function drawImg2E(tplUrl, logoUrl, left, top, width, height, target){
            var img = new Image();
			img.onload = function () {
				stageE.width(img.naturalWidth);
                stageE.height(img.naturalHeight);
				var i = new Kinetic.Image({ x: 0, y: 0, image: img });
                layerE.add(i);
                stageE.add(layerE);

				var logo = new Image();
                logo.onload = function () {
                    var lwidth = logo.naturalWidth;
                    var lheight = logo.naturalHeight;
                    var scale = lwidth / lheight;
                    if (lwidth <= width && lheight <= height){

                    } else if (lwidth > width && lheight <= height){
                    	lwidth = width;
                    	lheight = width / scale;
                    } else if (lwidth < width && lheight >= height){
                    	lwidth = height * scale;
                    	lheight = height;
                    } else{
                        if (scale >= width / height) {
                            lwidth = width;
                            lheight = width / scale;
                        } else {
                            lwidth = height * scale;
                            lheight = height;
                        }
                    }
                    var l = new Kinetic.Image({ x: left, y: top, width: lwidth, height: lheight, image: logo });
                    layerE.add(l);

                    refreshETexts();

                    stageE.toDataURL({
	                    mimeType: "image/jpeg",
	                    quality: 1.0,
	                    callback: function(dataUrl) {
	                        target.css('background-image','url("' + dataUrl + '")');
	                    }
	                });
                };
                logo.src = logoUrl;
			};
			img.src = tplUrl;
        }

		$(document).ready(function() {
			yesImg.attr("src", "/images/default/勾选icon.png");
    		yesImg.css("position", "absolute");
    		// console.log($('html').height());
    		// console.log($('body').height());
    		// console.log($('#fullpage').height());
    		// console.log($('#section0').height());
    		// console.log($('#section0 .content').height());
    		// console.log($('#section0 #showpanel').height());
    		$('#section1 .inputInfo input.required').after("<span>*</span>");

    		$('#section0 #showpanel .template').click(function () {
    			// console.log($(this).data("tplId"));
    			if (typeof $(this).data("tplId") === "undefined") return;
    			if ($(this).data("tplId") === "") return;

		        $('#section0 #showpanel .template').removeClass("imgopacity");//将所有图片回复正常
		        $(this).addClass("imgopacity");//将选中的图片变灰
		        //console.log($(this).parent());
		        //console.log($(this).offset());

		        //将对号图片显示在选中的图片之上
		        yesImg.show();
		        var selLeft = $(this).offset().left;
		        var selTop = $(this).offset().top;
		        yesImg.appendTo($(this).parent());
		        yesImg.offset({ top: selTop + $(this).height() / 2 - yesImg.width()/2, left: selLeft + $(this).width() / 2 - yesImg.height()/2 });

		        selTplId = $(this).data("tplId");
		        selTpl = {};

		        if (layer) { layer.removeChildren();  }
		        if (layerE) { layerE.removeChildren();  }
		        if (stage) { stage.clearCache(); stage.clear(); }
		        if (stageE) { stageE.clearCache(); stageE.clear();  }
		        currentdesign = {};
		    });

			$('#fullpage').fullpage({
				// anchors: ['firstPage', 'secondPage', '3rdPage'],
				//sectionsColor: ['#C63D0F', '#1BBC9B', '#7E8F7C', '#C63D0F', '#1BBC9B', '#7E8F7C'],
				verticalCentered: true,
				css3: true,

				onLeave: function (index, nextIndex, direction) {
                    // console.log("onLeave: " + index + "==" + nextIndex + "==" + direction);
                    var leavingSection = $(this);

		            //after leaving section 1
		            if(index == 1 && direction =='down'){
		                // console.log("Going to section 2!");
		                if (selTplId != "" && (!layer.hasChildren() || !layerE.hasChildren())) {
		                	$.get("/api/design/" + selTplId, function(data){
		                		if (!data) {alert("Wrong Template!");return;}
		                		if (('success' in data) && !data.success) {alert(data.errmsg);return;}
		                		selTpl = data;
		                		currentdesign.template = { objectId: selTpl._id, designId: selTpl.designId };

		                		var $tpl = $('#section1 .template');
								var $cnr = $tpl.eq(0).find('.preview-container');

                                drawImg2("/api/design/" + selTpl.designId + "/image/" + selTpl.file,
                                	$('#section0 #uploadDiv img').attr('src'),
                                	selTpl.logoX, selTpl.logoY, selTpl.logoWidth, selTpl.logoHeight,$cnr.eq(0));
                                drawImg2E("/api/design/" + selTpl.designId + "/image/" + selTpl.eFile,
                                	$('#section0 #uploadDiv img').attr('src'),
                                	selTpl.eLogoX, selTpl.eLogoY, selTpl.eLogoWidth, selTpl.eLogoHeight,$cnr.eq(1));
		                	});
		                }
		            } else if(index == 2 && direction =='down'){
    	        		if (updatePerson() == false) { return false; }

		            	var $tpl = $('#section1 .template');
						var $cnr = $tpl.eq(0).find('.preview-container');

						var $tpl2 = $('#section2 .template');
						var $cnr2 = $tpl2.eq(0).find('.preview-container');
						$cnr2.eq(0).css("background-image", $cnr.eq(0).css("background-image"));
						$cnr2.eq(1).css("background-image", $cnr.eq(1).css("background-image"));

						if (selPerson > 0 && selPerson == persons.length){
							selPerson--;
							changePerson();
						}
		            }
                }
			});

			var url = window.location.href;
			url = getUrlParam('tl');
			if (url != null && url.length > 0){
				$('#section0 #uploadDiv img').attr("src", "/tmp/upload_" + url);
			}

            $('#cCompanyName,#eCompanyName,#cName,#eName,#cCell,#eCell,#cTitle,#eTitle,.textblock').keypress(function (e) {
                if (e.keyCode == 13) {
                    updateTextInLayer(this);
                    return false;
                }
            });

            $('#cCompanyName,#eCompanyName,#cName,#eName,#cCell,#eCell,#cTitle,#eTitle,.textblock').blur(function () {
            	// alert($(this).parent().html());
                updateTextInLayer(this);
            });

            $('.personInfo input').focus(function(){
            	$('.tab-content .tab-pane .personInfo').css("opacity", 1);
            });

            $('.inputInfo input').focus(function(){
            	$(this).css("opacity", 1);
            });

            $('#addPerson').click(function(){
            	$('.tab-content .tab-pane .personInfo').css("opacity", 1);

            	var $foreinputs = $('.personInfo .fore input');
            	var $backinputs = $('.personInfo .back input');
            	var person = { 'fore': {}, 'back': {}};
            	var bForePass = true;
            	var bBackPass = true;
            	if (selPerson == persons.length){
	        		$foreinputs.each(function(){
						if ($(this).hasClass('required') && $(this).val().trim().length == 0){
							bForePass = false;
						}
						if ($(this).val().trim().length > 0){
							person.fore[$(this).attr('name')] = $(this).val().trim();
						}
					});
					$backinputs.each(function(){
						if ($(this).hasClass('required') && $(this).val().trim().length == 0){
							bBackPass = false;
						}
						if ($(this).val().trim().length > 0){
							person.back[$(this).attr('name')] = $(this).val().trim();
						}
					});
	            	if(activeTab == 0) {
						if (bForePass && bBackPass){
							persons.push(person);
							selPerson = persons.length;

							$foreinputs.each(function(){
								$(this).val('');
							});
							$backinputs.each(function(){
								$(this).val('');
							});
							changePerson();
							$foreinputs.first().focus();
						} else if (!bForePass){
							if ($.isEmptyObject(person.fore) && $.isEmptyObject(person.back)){
								//
							} else {
								showModalAlert("请确认", "请检查正面必填项。");
							} 
							$foreinputs.first().focus();
						} else if (!bBackPass){
							showModalAlert("请确认", "请检查反面必填项。");
							$backinputs.first().focus();
						}
	            	} else {
						if (bForePass && bBackPass){
							persons.push(person);
							selPerson = persons.length;

							$foreinputs.each(function(){
								$(this).val('');
							});
							$backinputs.each(function(){
								$(this).val('');
							});
							changePerson();
							$backinputs.first().focus();
						} else if (!bBackPass){
							if ($.isEmptyObject(person.fore) && $.isEmptyObject(person.back)){
								//
							} else {
								showModalAlert("请确认", "请检查反面必填项。");
							} 
							$backinputs.first().focus();
						} else if (!bForePass){
							showModalAlert("请确认", "请检查正面必填项。");
							$foreinputs.first().focus();
						}
	            	}
	            } else {
            		if (updatePerson() == false) { return; }

	            	if(activeTab == 0) {
						selPerson = persons.length;

						$foreinputs.each(function(){
							$(this).val('');
						});
						$backinputs.each(function(){
							$(this).val('');
						});
						changePerson();
						$foreinputs.first().focus();
	            	} else {
						selPerson = persons.length;

						$foreinputs.each(function(){
							$(this).val('');
						});
						$backinputs.each(function(){
							$(this).val('');
						});
						changePerson();
						$backinputs.first().focus();
					}
	            }
            	// console.log(persons);
            });
            $('#prevPerson').click(function(){
        		if (updatePerson() == false) { return; }
            	if (selPerson > 0) {
            		selPerson--;

	            	changePerson();
            	}
            });
            $('#nextPerson').click(function(){
        		if (updatePerson() == false) { return; }
            	if (selPerson < persons.length - 1) {
            		selPerson++;

            		changePerson();
            	}
            });
            $('.nav-pills a[data-toggle="pill"]').on('shown.bs.tab', function(e){
            	// console.log(e.target); //a element
            	// console.log($(e.target).text()); //正面
            	if(e.target.text == "正面"){
            		activeTab = 0;
            	} else if (e.target.text == "反面") {
            		activeTab = 1;
            	}
            });
		});

		var $logofile = $('#section0 input[type=file]');
        $('#section0 #uploadDiv .btn').click(function() {
            $logofile.click();
        });
        $logofile.change(function() {
            var path = $(this).val();
            if (!path){
            	console.log("you cancelled file selection.");
            	return;
            }
            // console.log("selected: " + path);

            if ($logofile[0].files.length === 0) { return; }
			var oFile = $logofile[0].files[0];

			var oFReader = new FileReader();
			oFReader.onload = function (oFREvent) {
				$('#section0 #uploadDiv img').attr("src", oFREvent.target.result);
			};
			oFReader.readAsDataURL(oFile);
        });

        $('#section0 #uploadDiv img').load(function () {
			// console.log(this.naturalWidth + ":::" + this.naturalHeight);
			var naturalWidth = this.naturalWidth;
			var naturalHeight = this.naturalHeight;

			autoSize(this);

			// get card template list from server
			$.get("/api/design/" + naturalWidth + "/" + naturalHeight, function(data){
				// console.log(data);
				//console.log(data.length);
				// console.log(data[0]._id + ":" + data[0].file);
				if (data.length > 0){
					tpList = data;
					pageIndex = 0;

					fillTemplates();
				} else {
					alert("没有模板能够匹配！");
				}
			}).fail(function(jqXHR, textStatus, errorThrown){
				console.log(jqXHR.status);
				console.log(jqXHR.readyState);
				console.log(textStatus);
				console.log(errorThrown);
				console.log(jqXHR.responseText);
				alert(jqXHR.status + ":" + jqXHR.readyState + ":" + textStatus + ":" + errorThrown + ":" + jqXHR.responseText);
			});
		});

		function autoSize(img) {
			var $logoContainer = $(img).parent();
			var previewrWidth = $logoContainer.width();
			var previewrHeight = $logoContainer.height();
			// console.log(previewrWidth + "::" + previewrHeight);
			var width = img.naturalWidth;
			var height = img.naturalHeight;
			var scale = width / height;
			if (scale >= previewrWidth / previewrHeight) {
				height = previewrWidth / scale;
				width = previewrWidth;
			} else {
				width = previewrHeight * scale;
				height = previewrHeight;
			}
			// console.log(width + ":" + height);
			$(img).css({
				width: width,
				height: height,
				top: (previewrHeight - height) / 2,
				left: (previewrWidth - width) / 2
			}).show();
		}

		function fillTemplates(){
			//fill
			if (tpList.length - pageIndex > 0){
				// reset
				var $tpl = $('#section0 #showpanel .template');
				$tpl.data("tplId", "");
				$tpl.find('.preview-container').css("background-image", "url('/images/default/gray logo icon.png')");
				$tpl.removeClass("imgopacity");
				yesImg.hide();

				// fill
				var $cnr = $tpl.eq(0).find('.preview-container');
				$cnr.eq(0).css("background-image", "url(/api/design/" + tpList[pageIndex].designId + "/image/" + tpList[pageIndex].designId + ".sample.jpg)");
				$cnr.eq(1).css("background-image", "url(/api/design/" + tpList[pageIndex].designId + "/image/" + tpList[pageIndex].designId + ".b.sample.jpg)");
				$tpl.eq(0).data("tplId", tpList[pageIndex]._id);
				pageIndex++;

				if (tpList.length - pageIndex > 0){
					var $cnr1 = $tpl.eq(1).find('.preview-container');
					$cnr1.eq(0).css("background-image", "url(/api/design/" + tpList[pageIndex].designId + "/image/" + tpList[pageIndex].designId + ".sample.jpg)");
					$cnr1.eq(1).css("background-image", "url(/api/design/" + tpList[pageIndex].designId + "/image/" + tpList[pageIndex].designId + ".b.sample.jpg)");
					$tpl.eq(1).data("tplId", tpList[pageIndex]._id);
					pageIndex++;

					if (tpList.length - pageIndex > 0){
						var $cnr2 = $tpl.eq(2).find('.preview-container');
						$cnr2.eq(0).css("background-image", "url(/api/design/" + tpList[pageIndex].designId + "/image/" + tpList[pageIndex].designId + ".sample.jpg)");
						$cnr2.eq(1).css("background-image", "url(/api/design/" + tpList[pageIndex].designId + "/image/" + tpList[pageIndex].designId + ".b.sample.jpg)");
						$tpl.eq(2).data("tplId", tpList[pageIndex]._id);
						pageIndex++;
					}
				}
			} else {
				alert("没有更多！");
			}
		}

		$('#section0 #prevBatch').click(function(){
			if (tpList.length == 0) { return; }
			var pageN = Math.ceil(pageIndex / 3);
			pageN--;
			pageIndex = (pageN - 1) * 3;
			if (pageIndex < 0) { pageIndex = 0; }
			fillTemplates();
		});
		$('#section0 #nextBatch').click(function(){
			if (tpList.length == 0) { return; }
			fillTemplates();
		});

		$('.nextstep').click(function(){
			$.fn.fullpage.moveSectionDown();
		});

		$('#pPerson').click(function(){
			if (selPerson > 0) {
        		selPerson--;

        		changePerson();
        	}
		});
		$('#nPerson').click(function(){
        	if (selPerson < persons.length - 1) {
        		selPerson++;

        		changePerson();
        	}
		});
		$('#editPerson').click(function(){
			$.fn.fullpage.moveSectionUp();
		});
		$('#pdfSave').click(function(){
			var size = stage.size();
			var ptwidth = px2ptby300(size.width);
			var ptheight = px2ptby300(size.height);
			stage.toDataURL({
                mimeType: "image/jpeg",
                quality: 1,
                callback: function(dataUrl) {
                    var pdf = new jsPDF('l', 'pt', [ptwidth,ptheight]); 
                    pdf.addImage(dataUrl, 'JPEG', 0, 0, ptwidth, ptheight);


                    size = stageE.size();
                    ptwidth = px2ptby300(size.width);
                    ptheight = px2ptby300(size.height);
                    stageE.toDataURL({
                    	mimeType: "image/jpeg",
                    	quality: 1,
                    	callback: function(edataUrl) {
                    		pdf.addPage(ptwidth, ptheight);
                    		pdf.addImage(edataUrl, 'JPEG', 0, 0, ptwidth, ptheight);

                    		pdf.save("card.pdf");
                    	}
                    });
                }
            });
		});
		$('#submitSave').click(function(){
			if (selTplId == "" || !('designId' in selTpl)){ return; }
			if (!currentdesign.template) return;
			if (persons.length == 0) { return; }

			var companyInfo = {};
			var $inputs = $('.companyInfo .fore input');
        	$inputs.each(function(){
				var name = $(this).attr('name');
				if (typeof name !== typeof undefined && name !== false) {
					companyInfo[name] = $(this).val().trim();
				}
				var label = $(this).data('label');
				if (typeof label !== typeof undefined && label) {
					companyInfo[label] = $(this).val().trim();
				}
			});
			$inputs = $('.companyInfo .back input');
			$inputs.each(function(){
				var name = $(this).attr('name');
				if (typeof name !== typeof undefined && name !== false) {
					companyInfo[name] = $(this).val().trim();
				}
				var label = $(this).data('label');
				if (typeof label !== typeof undefined && label) {
					companyInfo[label] = $(this).val().trim();
				}
			});

			if (!currentdesign.fore){
				currentdesign.fore = { saved: [] };
				currentdesign.fore.page = 'fore';
				currentdesign.fore.block = { tagName: 'cTB' };
				currentdesign.fore.bgfile = "/api/design/" + selTpl.designId + "/image/" + selTpl.file;

				layer.children.forEach(function(element, index, array){
					if (element.className == "Text"){
						currentdesign.fore.saved.push({
							className: element.className,
							id: element.attrs.id,
							x: element.attrs.x,
							y: element.attrs.y,
							text: element.attrs.text,
							fontFamily: element.attrs.fontFamily,
							fontSize: element.attrs.fontSize,
							fill: element.attrs.fill,
							textWidth: element.getTextWidth(),
							textHeight: element.getHeight()
						});
					} else if (element.className == "Image"){
						currentdesign.fore.saved.push({
							className: element.className,
							x: element.attrs.x,
							y: element.attrs.y,
							width: element.attrs.width,
							height: element.attrs.height,
							image: element.attrs.image.src ? element.attrs.image.src : element.attrs.image.href
						});
					}
				});

				currentdesign.fore.logo = { 
					file: currentdesign.fore.saved[1].image,
					x: currentdesign.fore.saved[1].x, 
					y: currentdesign.fore.saved[1].y, 
					width: currentdesign.fore.saved[1].width, 
					height: currentdesign.fore.saved[1].height
				};
			}
			if (!currentdesign.back){
				currentdesign.back = { saved: [] };
				currentdesign.back.page = 'fore';
				currentdesign.back.block = { tagName: 'eTB' };
				currentdesign.back.bgfile = "/api/design/" + selTpl.designId + "/image/" + selTpl.file;

				layerE.children.forEach(function(element, index, array){
					if (element.className == "Text"){
						currentdesign.back.saved.push({
							className: element.className,
							id: element.attrs.id,
							x: element.attrs.x,
							y: element.attrs.y,
							text: element.attrs.text,
							fontFamily: element.attrs.fontFamily,
							fontSize: element.attrs.fontSize,
							fill: element.attrs.fill,
							textWidth: element.getTextWidth(),
							textHeight: element.getHeight()
						});
					} else if (element.className == "Image"){
						currentdesign.back.saved.push({
							className: element.className,
							x: element.attrs.x,
							y: element.attrs.y,
							width: element.attrs.width,
							height: element.attrs.height,
							image: element.attrs.image.src ? element.attrs.image.src : element.attrs.image.href
						});
					}
				});

				currentdesign.back.logo = { 
					file: currentdesign.back.saved[1].image,
					x: currentdesign.back.saved[1].x, 
					y: currentdesign.back.saved[1].y, 
					width: currentdesign.back.saved[1].width, 
					height: currentdesign.back.saved[1].height
				};
			}

			// send the data to server
			$.post("/api/carddesign/new", { 
				cinfo: companyInfo, 
				persons: persons, 
				product: currentdesign
			}).done(function(data){
				// console.log("post return:");
				// console.log(data);
				if (data.success){
					window.location.href = data.next;
				} else {
					if (data.error){
						console.log(data.error);
						if (data.error == "NOTLOGIN"){
							window.location.href = data.next;
						}
					}
				}
			}).fail(function(jqXHR, textStatus, errorThrown){
				console.log(jqXHR.status);
				console.log(jqXHR.readyState);
				console.log(textStatus);
				console.log(errorThrown);
				console.log(jqXHR.responseText);
				alert(jqXHR.status + ":" + jqXHR.readyState + ":" + textStatus + ":" + errorThrown + ":" + jqXHR.responseText);
			});
		});

		function getUrlParam(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
            var r = window.location.search.substr(1).match(reg);  //匹配目标参数
            if (r != null) return unescape(r[2]); return null; //返回参数值
        }

        function updateTextInLayer(me) {
        	// console.log($(me).parent().html());
        	// console.log($(me).val());
        	if (selTplId != "") {
            	// var pos = tpList.map(function(e) { return e._id; }).indexOf(selTplId);
            	// if (pos >= 0) {
            	if ('designId' in selTpl){
            		var $tpl = $('#section1 .template');
					var $cnr = $tpl.eq(0).find('.preview-container');

					switch($(me).attr('name')){
					case 'company':
		            	renderText('company', selTpl.companyX, selTpl.companyY, selTpl.companyFontSize, selTpl.companyFont,
		            		selTpl.companyLength, selTpl.companyLines, selTpl.companyFontColor, $(me).val(), $cnr.eq(0));
						break;
					case 'eCompany':
						renderTextE('eCompany', selTpl.eCompanyX, selTpl.eCompanyY, selTpl.eCompanyFontSize, selTpl.eCompanyFont,
		            		selTpl.eCompanyLength, selTpl.eCompanyLines, selTpl.eCompanyFontColor, $(me).val(), $cnr.eq(1));
						break;
					case "name":
		            	renderText('name', selTpl.nameX, selTpl.nameY, selTpl.nameFontSize, selTpl.nameFont,
		            		selTpl.nameLength, selTpl.nameLines, selTpl.fontColor, $(me).val(), $cnr.eq(0));
						break;
					case "eName":
						renderTextE('eName', selTpl.eNameX, selTpl.eNameY, selTpl.eNameFontSize, selTpl.eNameFont,
		            		selTpl.eNameLength, selTpl.eNameLines, selTpl.fontColor, $(me).val(), $cnr.eq(1));
						break;
					case "mobile":
		            	renderText('mobile', selTpl.mobileX, selTpl.mobileY, selTpl.mobileFontSize, selTpl.mobileFont,
		            		selTpl.mobileLength, 1, selTpl.fontColor, $(me).val(), $cnr.eq(0));
						break;
					case "eMobile":
						renderTextE('eMobile', selTpl.eMobileX, selTpl.eMobileY, selTpl.eMobileFontSize, selTpl.eMobileFont,
		            		selTpl.eMobileLength, 1, selTpl.fontColor, $(me).val(), $cnr.eq(1));
						break;
					case "title":
		            	renderText('title', selTpl.titleX, selTpl.titleY, selTpl.titleFontSize, selTpl.titleFont,
		            		selTpl.titleLength, selTpl.titleLines, selTpl.fontColor, $(me).val(), $cnr.eq(0));
						break;
					case "eTitle":
						renderTextE('eTitle', selTpl.eTitleX, selTpl.eTitleY, selTpl.eTitleFontSize, selTpl.eTitleFont,
		            		selTpl.eTitleLength, selTpl.eTitleLines, selTpl.fontColor, $(me).val(), $cnr.eq(1));
						break;
					default:
						//text block
						// alert($(me).val());
						if ($(me).hasClass("textblock")){
							if ($(me).parent().parent().hasClass("fore")){
								if (currentdesign.fore){
									var tid = 'cTB1'+$(me).data('label');
									var edtid = 'ed'+tid;
									if (arrayHasPropValue('id',edtid,currentdesign.fore.saved)){
										var linetext = "",maxLen = selTpl.textLength;
										linetext = $(me).val(); 
										if (colen(linetext) > maxLen) {
											var tbF = [];
											do {
												var s1 = substr(linetext, maxLen);
												tbF.push(s1);
												linetext = linetext.substring(s1.length);
											} while(colen(linetext) > maxLen);
											if (linetext.length > 0) { tbF.push(linetext); }
											linetext = tbF.join('\n');
										}
										renderText(tid, 0, 0, 0, '',0,0,'',linetext, $cnr.eq(0));
									} else {
										var x = selTpl.textX,y = selTpl.textY,linetext = "",maxLen = selTpl.textLength;
										if ($(me).hasClass('no-label')){
										}else{
											var lid = 'cTB0'+$(me).data('label');
											var edlid = 'ed'+lid;
											if (arrayHasPropValue('id',edlid,currentdesign.fore.saved)){
												var t = stage.get('#' + lid)[0];
												x = x + t.getTextWidth();
												y = t.y();
												maxLen = maxLen - colen(t.text());
											} else {
												var t = renderText(lid, x, y, selTpl.textFontSize, selTpl.textFont,selTpl.textLength, selTpl.textLines, selTpl.fontColor,
													$(me).data('label'), $cnr.eq(0));
												x = x + t.getTextWidth();
												maxLen = maxLen - colen($(me).data('label'));
											}
										}
										linetext = $(me).val(); 
										if (colen(linetext) > maxLen) {
											var tbF = [];
											do {
												var s1 = substr(linetext, maxLen);
												tbF.push(s1);
												linetext = linetext.substring(s1.length);
											} while(colen(linetext) > maxLen);
											if (linetext.length > 0) { tbF.push(linetext); }
											linetext = tbF.join('\n');
										}
										var t = renderText(tid, x, y, selTpl.textFontSize, selTpl.textFont,selTpl.textLength, selTpl.textLines, selTpl.fontColor,
												linetext, $cnr.eq(0));
									}
								} else {
									var tbF = [];
									var x = selTpl.textX;
									var y = selTpl.textY;
									$(".fore .textblock").each(function(){
										// console.log($(this).data('label') + "=" + $(this).val());
										if ($(this).val().trim().length > 0) { 
											var tempx = x;
											var linetext = "";
											var maxLen = selTpl.textLength;
											if ($(this).hasClass('no-label')){
											}else{
												var t = renderText('cTB0'+$(this).data('label'), x, y, selTpl.textFontSize, selTpl.textFont,selTpl.textLength, selTpl.textLines, selTpl.fontColor,
													$(this).data('label'), $cnr.eq(0), true);
												x = x + t.getTextWidth();
												maxLen = maxLen - colen($(this).data('label'));
											}
											linetext = $(this).val(); 
											if (colen(linetext) > maxLen) {
												tbF = [];
												do {
													var s1 = substr(linetext, maxLen);
													tbF.push(s1);
													linetext = linetext.substring(s1.length);
												} while(colen(linetext) > maxLen);
												if (linetext.length > 0) { tbF.push(linetext); }
												linetext = tbF.join('\n');
											}
											var t = renderText('cTB1'+$(this).data('label'), x, y, selTpl.textFontSize, selTpl.textFont,selTpl.textLength, selTpl.textLines, selTpl.fontColor,
													linetext, $cnr.eq(0), true);
											x = tempx;
											y = y + t.getHeight();
										}
									});
								}
							} else if ($(me).parent().parent().hasClass("back")){
								if (currentdesign.back){
									var tid = 'eTB1'+$(me).data('label');
									var edtid = 'ed'+tid;
									if (arrayHasPropValue('id',edtid,currentdesign.back.saved)){
										var linetext = "",maxLen = selTpl.eTextLength;
										linetext = $(me).val(); 
										if (colen(linetext) > maxLen) {
											var tbF = [];
											do {
												var s1 = substr(linetext, maxLen);
												tbF.push(s1);
												linetext = linetext.substring(s1.length);
											} while(colen(linetext) > maxLen);
											if (linetext.length > 0) { tbF.push(linetext); }
											linetext = tbF.join('\n');
										}
										renderTextE(tid, 0, 0, 0, '',0,0,'',linetext, $cnr.eq(1));
									} else {
										var x = selTpl.eTextX,y = selTpl.eTextY,linetext = "",maxLen = selTpl.eTextLength;
										if ($(me).hasClass('no-label')){
										}else{
											var lid = 'eTB0'+$(me).data('label');
											var edlid = 'ed'+lid;
											if (arrayHasPropValue('id',edlid,currentdesign.back.saved)){
												var t = stageE.get('#' + lid)[0];
												x = x + t.getTextWidth();
												y = t.y();
												maxLen = maxLen - colen(t.text());
											} else {
												var t = renderTextE(lid, x, y, selTpl.eTextFontSize, selTpl.eTextFont,selTpl.eTextLength, selTpl.eTextLines, selTpl.fontColor,
													$(me).data('label'), $cnr.eq(1));
												x = x + t.getTextWidth();
												maxLen = maxLen - colen($(me).data('label'));
											}
										}
										linetext = $(me).val(); 
										if (colen(linetext) > maxLen) {
											var tbF = [];
											do {
												var s1 = substr(linetext, maxLen);
												tbF.push(s1);
												linetext = linetext.substring(s1.length);
											} while(colen(linetext) > maxLen);
											if (linetext.length > 0) { tbF.push(linetext); }
											linetext = tbF.join('\n');
										}
										var t = renderTextE(tid, x, y, selTpl.eTextFontSize, selTpl.eTextFont,selTpl.eTextLength, selTpl.eTextLines, selTpl.fontColor,
												linetext, $cnr.eq(1));
									}
								} else {
									var tbB = [];
									var x = selTpl.eTextX;
									var y = selTpl.eTextY;
									$(".back .textblock").each(function(){
										if ($(this).val().trim().length > 0) { 
											var tempx = x;
											var linetext = "";
											var maxLen = selTpl.eTextLength;
											if ($(this).hasClass('no-label')){
											} else {
												var t = renderTextE('eTB0'+$(this).data('label'), x, y, selTpl.eTextFontSize, selTpl.eTextFont,selTpl.eTextLength, selTpl.eTextLines, selTpl.fontColor,
													$(this).data('label'), $cnr.eq(1), true);
												x = x + t.getTextWidth();
												maxLen = maxLen - colen($(this).data('label'));
											}
											linetext = $(this).val(); 
											if (colen(linetext) > maxLen) {
												tbB = [];
												do {
													var s1 = substr(linetext, maxLen);
													tbB.push(s1);
													linetext = linetext.substring(s1.length);
												} while(colen(linetext) > maxLen);
												if (linetext.length > 0) { tbB.push(linetext); }
												linetext = tbB.join('\n');
											}
											var t = renderTextE('eTB1'+$(this).data('label'), x, y, selTpl.eTextFontSize, selTpl.eTextFont,selTpl.eTextLength, selTpl.eTextLines, selTpl.fontColor,
													linetext, $cnr.eq(1), true);
											x = tempx;
											y = y + t.getHeight();
										}
									});
								}
							} else {
								alert("What is " + $(me).val());
							}
						}
					}
                }
            }
        }

        function renderText(shapeid, x, y, fontsize, font, length, lines, color, text, target, toremove){
        	toremove = typeof toremove !== 'undefined' ? toremove : false;
        	var t = stage.get('#' + shapeid)[0];
            if (t && !toremove) { 
            	t.setText(text);
            	if (currentdesign.fore){
            		arraySetValues(currentdesign.fore.saved, "id", "ed" + shapeid, {text: text});
            	}
            } else {
            	if (t) { t.remove(); }
	            t = new Kinetic.Text({ x: x, y: y, fontSize: pt2pxby300(fontsize), fontFamily: font, text: text, fill:color, id: shapeid});
	            layer.add(t);
	            if (currentdesign.fore){
	            	arraySetValues(currentdesign.fore.saved, "", "", 
	            		{className: t.className, id: "ed" + shapeid, x: x, y: y, text: text, fontFamily: font, fontSize: t.attrs.fontSize,
	            		fill: color, textWidth: t.getTextWidth(), textHeight: t.getHeight()});
	            }
	        }

			stage.toDataURL({
                mimeType: "image/jpeg",
                quality: 1.0,
                callback: function(dataUrl) {
                    target.css('background-image','url("' + dataUrl + '")');
                }
            });
            return t;
        }
        function renderTextE(shapeid, x, y, fontsize, font, length, lines, color, text, target, toremove){
        	toremove = typeof toremove !== 'undefined' ? toremove : false;
        	var t = stageE.get('#' + shapeid)[0];
            if (t && !toremove) { 
            	t.setText(text);
            	if (currentdesign.back){
            		arraySetValues(currentdesign.back.saved, "id", "ed" + shapeid, {text: text});
            	}
            } else {
            	if (t) { t.remove(); }
	            t = new Kinetic.Text({ x: x, y: y, fontSize: pt2pxby300(fontsize), fontFamily: font, text: text, fill:color, id: shapeid});
	            layerE.add(t);
	            if (currentdesign.back){
	            	arraySetValues(currentdesign.back.saved, "", "", 
	            		{className: t.className, id: "ed" + shapeid, x: x, y: y, text: text, fontFamily: font, fontSize: t.attrs.fontSize,
	            		fill: color, textWidth: t.getTextWidth(), textHeight: t.getHeight()});
	            }
	        }

			stageE.toDataURL({
                mimeType: "image/jpeg",
                quality: 1.0,
                callback: function(dataUrl) {
                    target.css('background-image','url("' + dataUrl + '")');
                }
            });
            return t;
        }
        function refreshCTexts(){
        	if (currentdesign.fore){
	        	$(".fore input[id]").each(function(){
	    			var tagName = $(this).attr('name');
	    			var text = $(this).val().trim();
	    			var t = stage.get('#' + tagName)[0];
		            if (t) { 
		            	t.setText(text); 
		            	arraySetValues(currentdesign.fore.saved, "id", "ed" + tagName, {text: text});
		            }
	        	});

	        	$(".fore input.textblock").each(function(){
	        		var tid = 'cTB1'+$(this).data('label');
	    			var t = stage.get('#' + tid)[0];
	    			if (t){
		    			var linetext = $(this).val().trim();
		    			var maxLen = selTpl.textLength;
		    			if (colen(linetext) > maxLen) {
							var tbF = [];
							do {
								var s1 = substr(linetext, maxLen);
								tbF.push(s1);
								linetext = linetext.substring(s1.length);
							} while(colen(linetext) > maxLen);
							if (linetext.length > 0) { tbF.push(linetext); }
							linetext = tbF.join('\n');
						}
						t.setText(linetext);
						arraySetValues(currentdesign.fore.saved, "id", "ed" + tid, {text: linetext});
					}
	        	});
        		return;
        	}

        	// Following is for before using editor

        	$(".fore input[id]").each(function(){
    			var tagName = $(this).attr('name');
    			var t = stage.get('#' + tagName)[0];
	            if (t) { t.remove(); }
        		if ($(this).val().trim().length > 0) {
		            t = new Kinetic.Text({ x: selTpl[tagName + 'X'], y: selTpl[tagName + 'Y'], 
		            	fontSize: pt2pxby300(selTpl[tagName + 'FontSize']), fontFamily: selTpl[tagName + 'Font'], 
		            	text: $(this).val(), 
		            	fill:selTpl[tagName + 'FontColor'] ? selTpl[tagName + 'FontColor'] : selTpl.fontColor, 
		            	id: tagName});
		            layer.add(t); 
        		}
        	});

        	var tbF = [];
			var x = selTpl.textX;
			var y = selTpl.textY;
        	$(".fore input.textblock").each(function(){
        		if ($(this).val().trim().length > 0) { 
        			// if ($(this).hasClass('no-label')){
        			// 	tbF.push($(this).val()); 
        			// } else {
	        		// 	tbF.push($(this).data('label') + $(this).val()); 
	        		// }

	        		var tempx = x;
					var linetext = "";
					var maxLen = selTpl.textLength;
					if ($(this).hasClass('no-label')){
					}else{
						// var t = renderText('cTB0'+$(this).data('label'), x, y, selTpl.textFontSize, selTpl.textFont,selTpl.textLength, selTpl.textLines, selTpl.fontColor,
							// $(this).data('label'), $cnr.eq(0));
						var t = stage.get('#cTB0'+$(this).data('label'))[0];
			            if (t) { t.remove(); }
			            t = new Kinetic.Text({ x: x, y: y, fontSize: pt2pxby300(selTpl.textFontSize), fontFamily: selTpl.textFont, 
			            	text: $(this).data('label'), fill:selTpl.fontColor, id: 'cTB0'+$(this).data('label')});
			            layer.add(t);

						x = x + t.getTextWidth();
						maxLen = maxLen - colen($(this).data('label'));
					}
					linetext = $(this).val(); 
					if (colen(linetext) > maxLen) {
						tbF = [];
						do {
							var s1 = substr(linetext, maxLen);
							tbF.push(s1);
							linetext = linetext.substring(s1.length);
						} while(colen(linetext) > maxLen);
						if (linetext.length > 0) { tbF.push(linetext); }
						linetext = tbF.join('\n');
					}
					// var t = renderText('cTB1'+$(this).data('label'), x, y, selTpl.textFontSize, selTpl.textFont,selTpl.textLength, selTpl.textLines, selTpl.fontColor,
							// linetext, $cnr.eq(0));
					var t = stage.get('#cTB1'+$(this).data('label'))[0];
		            if (t) { t.remove(); }
		            t = new Kinetic.Text({ x: x, y: y, fontSize: pt2pxby300(selTpl.textFontSize), fontFamily: selTpl.textFont, 
		            	text: linetext, fill:selTpl.fontColor, id: 'cTB1'+$(this).data('label')});
		            layer.add(t);

					x = tempx;
					y = y + t.getHeight();
        		}
        	});
    		// var t = stage.get('#cTB')[0];
      //       if (t) { t.remove(); }
      //   	if (tbF.length > 0) {
	     //        t = new Kinetic.Text({ x: selTpl.textX, y: selTpl.textY, fontSize: pt2pxby300(selTpl.textFontSize), fontFamily: selTpl.textFont, text: tbF.join('\n'), fill:selTpl.fontColor, id: 'cTB'});
	     //        layer.add(t);
	     //    }
        }
        function refreshETexts(){
        	if (currentdesign.back){
	        	$(".back input[id]").each(function(){
	    			var tagName = $(this).attr('name');
	    			var text = $(this).val().trim();
	    			var t = stageE.get('#' + tagName)[0];
		            if (t) { 
		            	t.setText(text); 
		            	arraySetValues(currentdesign.back.saved, "id", "ed" + tagName, {text: text});
		            }
	        	});

	        	$(".back input.textblock").each(function(){
	        		var tid = 'eTB1'+$(this).data('label');
	    			var t = stageE.get('#' + tid)[0];
	    			if (t){
		    			var linetext = $(this).val().trim();
		    			var maxLen = selTpl.eTextLength;
		    			if (colen(linetext) > maxLen) {
							var tbF = [];
							do {
								var s1 = substr(linetext, maxLen);
								tbF.push(s1);
								linetext = linetext.substring(s1.length);
							} while(colen(linetext) > maxLen);
							if (linetext.length > 0) { tbF.push(linetext); }
							linetext = tbF.join('\n');
						}
						t.setText(linetext);
						arraySetValues(currentdesign.back.saved, "id", "ed" + tid, {text: linetext});
					}
	        	});
        		return;
        	}

        	// Following is for before using editor

        	$(".back input[id]").each(function(){
    			var tagName = $(this).attr('name');
    			var t = stageE.get('#' + tagName)[0];
	            if (t) { t.remove(); }
        		if ($(this).val().trim().length > 0) {
		            t = new Kinetic.Text({ x: selTpl[tagName + 'X'], y: selTpl[tagName + 'Y'], 
		            	fontSize: pt2pxby300(selTpl[tagName + 'FontSize']), fontFamily: selTpl[tagName + 'Font'], 
		            	text: $(this).val(), 
		            	fill:selTpl[tagName + 'FontColor'] ? selTpl[tagName + 'FontColor'] : selTpl.fontColor, 
		            	id: tagName});
		            layerE.add(t); 
        		}
        	});

			var tbB = [];
			var x = selTpl.eTextX;
			var y = selTpl.eTextY;
			$(".back input.textblock").each(function(){
				if ($(this).val().trim().length > 0) { 
					// if ($(this).hasClass('no-label')){
					// 	tbB.push($(this).val());
					// } else {
					// 	tbB.push($(this).data('label') + $(this).val()); 
					// }

					var tempx = x;
					var linetext = "";
					var maxLen = selTpl.eTextLength;
					if ($(this).hasClass('no-label')){
					}else{
						// var t = renderTextE('eTB0'+$(this).data('label'), x, y, selTpl.eTextFontSize, selTpl.eTextFont,selTpl.eTextLength, selTpl.eTextLines, selTpl.fontColor,
							// $(this).data('label'), $cnr.eq(1));
			    		var t = stageE.get('#eTB0'+$(this).data('label'))[0];
			            if (t) { t.remove(); }
			            t = new Kinetic.Text({ x: x, y: y, fontSize: pt2pxby300(selTpl.eTextFontSize), fontFamily: selTpl.eTextFont, 
			            	text: $(this).data('label'), fill:selTpl.fontColor, id: 'eTB0'+$(this).data('label')});
			            layerE.add(t);

						x = x + t.getTextWidth();
						maxLen = maxLen - colen($(this).data('label'));
					}
					linetext = $(this).val(); 
					if (colen(linetext) > maxLen) {
						tbB = [];
						do {
							var s1 = substr(linetext, maxLen);
							tbB.push(s1);
							linetext = linetext.substring(s1.length);
						} while(colen(linetext) > maxLen);
						if (linetext.length > 0) { tbB.push(linetext); }
						linetext = tbB.join('\n');
					}
					// var t = renderTextE('eTB1'+$(this).data('label'), x, y, selTpl.eTextFontSize, selTpl.eTextFont,selTpl.eTextLength, selTpl.eTextLines, selTpl.fontColor,
							// linetext, $cnr.eq(1));
		    		var t = stageE.get('#eTB1'+$(this).data('label'))[0];
		            if (t) { t.remove(); }
		            t = new Kinetic.Text({ x: x, y: y, fontSize: pt2pxby300(selTpl.eTextFontSize), fontFamily: selTpl.eTextFont, 
		            	text: linetext, fill:selTpl.fontColor, id: 'eTB1'+$(this).data('label')});
		            layerE.add(t);

					x = tempx;
					y = y + t.getHeight();
				}
			});
   //  		var t = stageE.get('#eTB')[0];
   //          if (t) { t.remove(); }
			// if (tbB.length > 0) {
	  //           t = new Kinetic.Text({ x: selTpl.eTextX, y: selTpl.eTextY, fontSize: pt2pxby300(selTpl.eTextFontSize), fontFamily: selTpl.eTextFont, text: tbB.join('\n'), fill:selTpl.fontColor, id: 'eTB'});
	  //           layerE.add(t);
	  //       }
        }
        function updatePerson(){
        	var $foreinputs = $('.personInfo .fore input');
        	var $backinputs = $('.personInfo .back input');
        	var bForePass = true;
        	var bBackPass = true;
        	if (selPerson == persons.length){
        		var person = { 'fore': {}, 'back': {}};
        		$foreinputs.each(function(){
					if ($(this).hasClass('required') && $(this).val().trim().length == 0){
						bForePass = false;
					}
					if ($(this).val().trim().length > 0){
						person.fore[$(this).attr('name')] = $(this).val().trim();
					}
				});
				$backinputs.each(function(){
					if ($(this).hasClass('required') && $(this).val().trim().length == 0){
						bBackPass = false;
					}
					if ($(this).val().trim().length > 0){
						person.back[$(this).attr('name')] = $(this).val().trim();
					}
				});
				if (bForePass && bBackPass){
					persons.push(person);
					return true;
				} else if ($.isEmptyObject(person.fore) && $.isEmptyObject(person.back)){
					return true;
				} else {
					showModalAlert("请确认", "请检查正反面必填项。");
					return false;
				}
        	} else {
        		$foreinputs.each(function(){
					if ($(this).hasClass('required') && $(this).val().trim().length == 0){
						bForePass = false;
					}
					if ($(this).val().trim().length > 0){
						persons[selPerson].fore[$(this).attr('name')] = $(this).val().trim();
					}
				});
				$backinputs.each(function(){
					if ($(this).hasClass('required') && $(this).val().trim().length == 0){
						bBackPass = false;
					}
					if ($(this).val().trim().length > 0){
						persons[selPerson].back[$(this).attr('name')] = $(this).val().trim();
					}
				});
				if (bForePass && bBackPass){
					return true;
				} else {
					showModalAlert("请确认", "请检查正反面必填项。");
					return false;
				}
        	}
        }
        function showModalAlert(tt, bd){
        	$('#alertModal .modal-title').text(tt);
        	$('#alertModal .modal-body').text(bd);
        	$('#alertModal').modal();
        }
        function changePerson(){
        	if (selPerson < persons.length){
	        	var $foreinputs = $('.personInfo .fore input');
	        	var $backinputs = $('.personInfo .back input');
	        	$foreinputs.each(function(){
	        		$(this).val(persons[selPerson].fore[$(this).attr('name')]);
	        	});
	    		$backinputs.each(function(){
	        		$(this).val(persons[selPerson].back[$(this).attr('name')]);
	        	});
			}

			var $tpl = $('#section1 .template');
			var $cnr = $tpl.eq(0).find('.preview-container');

			var $tpl2 = $('#section2 .template');
			var $cnr2 = $tpl2.eq(0).find('.preview-container');

        	refreshCTexts();
        	stage.toDataURL({
                mimeType: "image/jpeg",
                quality: 1.0,
                callback: function(dataUrl) {
                    $cnr.eq(0).css('background-image','url("' + dataUrl + '")');
					$cnr2.eq(0).css("background-image", $cnr.eq(0).css("background-image"));
                }
            });
        	refreshETexts();
        	stageE.toDataURL({
                mimeType: "image/jpeg",
                quality: 1.0,
                callback: function(dataUrl) {
                    $cnr.eq(1).css('background-image','url("' + dataUrl + '")');
    				$cnr2.eq(1).css("background-image", $cnr.eq(1).css("background-image"));
                }
            });
        }
        function px2pt(pxValue) {
			var tmpNode = document.createElement("DIV");
            tmpNode.style.cssText = "width:1in;height:1in;position:absolute;left:0px;top:0px;z-index:99;visibility:hidden";
            document.body.appendChild(tmpNode);
            var dpi = parseInt(tmpNode.offsetWidth);
			return pxValue * 72 / dpi;
		}
		function pt2px(ptValue) {
			var tmpNode = document.createElement("DIV");
            tmpNode.style.cssText = "width:1in;height:1in;position:absolute;left:0px;top:0px;z-index:99;visibility:hidden";
            document.body.appendChild(tmpNode);
            var dpi = parseInt(tmpNode.offsetWidth);
			return ptValue * dpi / 72;
		}
		function pt2pxby300(ptvalue){
			return ptvalue * 300 / 72;
		}
		function px2ptby300(pxvalue){
			return pxvalue * 72 / 300;
		}
		function px300px(pxValue){
			return pt2px(px2ptby300(pxValue));
		}
		function colen(str){ 
			var totalCount = 0; 
			for(var i=0; i<str.length; i++){ 
				var c = str.charCodeAt(i); 
				if ((c >= 0x0001 && c <= 0x007e) || (0xff60<=c && c<=0xff9f)){ 
					totalCount++; 
				} 
				else{      
					totalCount+=2; 
				} 
			} 
			return totalCount; 
		}
	    function substr(str, len)
	    {
		    if(!str || !len) { return ''; }
		    var a = 0;
		    var i = 0;
		    var temp = '';
		    for (i=0;i<str.length;i++) {
			    if (str.charCodeAt(i)>255) {
				    a+=2;
			    }
			    else {
				    a++;
			    }
			    if(a > len) { return temp; }
			    temp += str.charAt(i);
		    }
		    return str;
	    }


	    //editor
        $('#editorModalDlg').draggable({handle: ".modal-header"});
        var editorStage = new Kinetic.Stage({container: "editorDiv"});
        var editorLayer = new Kinetic.Layer();
        var editorTpl = {};
        var $textref;
	    $('#section1 .preview-container').dblclick(function(){
			editorTpl = { deleted: [], created: [], saved: [] };
			if (currentdesign.fore && $(this).index() == 0){
				editorTpl.page = currentdesign.fore.page;
				editorTpl.bgfile = currentdesign.fore.bgfile;
				editorTpl.logo = { 
					file: currentdesign.fore.saved[1].image,
					x: currentdesign.fore.saved[1].x, 
					y: currentdesign.fore.saved[1].y, 
					width: currentdesign.fore.saved[1].width, 
					height: currentdesign.fore.saved[1].height};
				currentdesign.fore.saved.forEach(function(ele, ind, arr){
					editorTpl.saved.push(ele);
				});
				editorTpl.block = {};
				editorTpl.block.tagName = 'cTB';
			} else if (currentdesign.back && $(this).index() == 1){
				editorTpl.page = currentdesign.back.page;
				editorTpl.bgfile = currentdesign.back.bgfile;
				editorTpl.logo = { 
					file: currentdesign.back.saved[1].image,
					x: currentdesign.back.saved[1].x, 
					y: currentdesign.back.saved[1].y, 
					width: currentdesign.back.saved[1].width, 
					height: currentdesign.back.saved[1].height};
				currentdesign.back.saved.forEach(function(ele, ind, arr){
					editorTpl.saved.push(ele);
				});
				editorTpl.block = {};
				editorTpl.block.tagName = 'eTB';
			} else {
	        	if (selTplId != "") {
	            	if ('designId' in selTpl){
	            		var $tpl = $('#section1 .template');
						var $cnr = $tpl.eq(0).find('.preview-container');

						// console.log("dblclick index:" + $(this).index());
						if ($(this).index() == 0){
							editorTpl.page = "fore";
							editorTpl.bgfile = "/api/design/" + selTpl.designId + "/image/" + selTpl.file;
							editorTpl.logo = { 
								file: $('#section0 #uploadDiv img').attr('src'), 
								x: selTpl.logoX,
								y: selTpl.logoY,
								width: selTpl.logoWidth,
								height: selTpl.logoHeight };

							editorTpl.input = [];
				        	$(".fore input[id]").each(function(){
				    			var tagName = $(this).attr('name');
				    			editorTpl.input.push({
				    				tagName: tagName,
				    				value: $(this).val(),
				    				x: selTpl[tagName + 'X'],
				    				y: selTpl[tagName + 'Y'],
				    				fontSize: pt2pxby300(selTpl[tagName + 'FontSize']), 
				    				fontFamily: selTpl[tagName + 'Font'], 
					            	fill:selTpl[tagName + 'FontColor'] ? selTpl[tagName + 'FontColor'] : selTpl.fontColor
				    			});
				        	});

				        	editorTpl.block = { items: [] };
			        		editorTpl.block.x = selTpl.textX;
			        		editorTpl.block.y = selTpl.textY;
			        		editorTpl.block.fontSize = pt2pxby300(selTpl.textFontSize);
			        		editorTpl.block.fontFamily = selTpl.textFont;
			        		editorTpl.block.fill = selTpl.fontColor;
			        		editorTpl.block.maxLength = selTpl.textLength;
			        		editorTpl.block.tagName = 'cTB';
				        	$(".fore input.textblock").each(function(){
				        		if ($(this).val().trim().length > 0) { 
				        			if ($(this).hasClass('no-label')){
				        				editorTpl.block.items.push({
				        					label: $(this).data('label'),
				        					value: $(this).val(),
				        					showlabel: false
				        				});
				        			} else {
					        			editorTpl.block.items.push({
				        					label: $(this).data('label'),
				        					value: $(this).val(),
				        					showlabel: true
				        				});
					        		}
				        		}
				        	});
						} else {
							editorTpl.page = "back";
							editorTpl.bgfile = "/api/design/" + selTpl.designId + "/image/" + selTpl.eFile;
							editorTpl.logo = { 
								file: $('#section0 #uploadDiv img').attr('src'), 
								x: selTpl.eLogoX,
								y: selTpl.eLogoY,
								width: selTpl.eLogoWidth,
								height: selTpl.eLogoHeight };

							editorTpl.input = [];
				        	$(".back input[id]").each(function(){
				    			var tagName = $(this).attr('name');
				    			editorTpl.input.push({
				    				tagName: tagName,
				    				value: $(this).val(),
				    				x: selTpl[tagName + 'X'],
				    				y: selTpl[tagName + 'Y'],
				    				fontSize: pt2pxby300(selTpl[tagName + 'FontSize']), 
				    				fontFamily: selTpl[tagName + 'Font'], 
					            	fill:selTpl[tagName + 'FontColor'] ? selTpl[tagName + 'FontColor'] : selTpl.fontColor
				    			});
				        	});

				        	editorTpl.block = { items: [] };
			        		editorTpl.block.x = selTpl.eTextX;
			        		editorTpl.block.y = selTpl.eTextY;
			        		editorTpl.block.fontSize = pt2pxby300(selTpl.eTextFontSize);
			        		editorTpl.block.fontFamily = selTpl.eTextFont;
			        		editorTpl.block.fill = selTpl.fontColor;
			        		editorTpl.block.maxLength = selTpl.eTextLength;
			        		editorTpl.block.tagName = 'eTB';
				        	$(".back input.textblock").each(function(){
				        		if ($(this).val().trim().length > 0) { 
				        			if ($(this).hasClass('no-label')){
				        				editorTpl.block.items.push({
				        					label: $(this).data('label'),
				        					value: $(this).val(),
				        					showlabel: false
				        				});
				        			} else {
					        			editorTpl.block.items.push({
				        					label: $(this).data('label'),
				        					value: $(this).val(),
				        					showlabel: true
				        				});
					        		}
				        		}
				        	});
						}
	            	}
	            }
	        }
            initEditor();
	    });
	    function initEditor(){
	    	if (!editorTpl.bgfile){ return; }
	    	// console.log(layer);
	    	// console.log(layerE);
	    	// console.log(selTpl);
	    	// console.log(editorTpl);
	    	editorLayer.removeChildren();
	    	editorStage.removeChildren();
	    	if (editorTpl.saved.length > 0){
	            var img = new Image();
				img.onload = function () {
					var pWidth = img.naturalWidth;
					var pHeight = img.naturalHeight;
					// console.log(pWidth);
					// console.log(pHeight);
					$('#editorDiv').width(pWidth);
					$('#editorDiv').height(pHeight);
					editorStage.width(pWidth);
	                editorStage.height(pHeight);
					var i = new Kinetic.Image({ x: 0, y: 0, width: pWidth, height: pHeight, image: img });
	                editorLayer.add(i);
	                editorStage.add(editorLayer);

					var logo = new Image();
	                logo.onload = function () {
	                    var lwidth = editorTpl.logo.width;
	                    var lheight = editorTpl.logo.height;
	                    var l = new Kinetic.Image({ 
	                    	x: editorTpl.logo.x, 
	                    	y: editorTpl.logo.y, 
	                    	width: lwidth, 
	                    	height: lheight, 
	                    	image: logo, 
	                    	draggable: true });
	                    editorLayer.add(l);

	                    editorTpl.saved.forEach(function(ele, ind, arr){
	                    	if (ele.className == "Text"){
	                    		var t = new Kinetic.Text({ x: ele.x, y: ele.y, fontSize: ele.fontSize, fontFamily: ele.fontFamily, 
					            	text: ele.text, fill:ele.fill, id: ele.id, draggable: true
					            }).on('dblclick', function(){
									$textref = this;
									settextediton($textref);
								});
					            editorLayer.add(t); 
	                    	}
	                    });

						editorStage.draw();
						$('#editor').modal({
							backdrop: 'static',
							keyboard: false
						}).css({
							width: 'auto',
							overflow: 'hidden'
						});
	                };
	                logo.src = editorTpl.logo.file;
				};
				img.src = editorTpl.bgfile;
	    	} else {
	            var img = new Image();
				img.onload = function () {
					var pWidth = img.naturalWidth;
					var pHeight = img.naturalHeight;
					// console.log(pWidth);
					// console.log(pHeight);
					$('#editorDiv').width(pWidth);
					$('#editorDiv').height(pHeight);
					editorStage.width(pWidth);
	                editorStage.height(pHeight);
					var i = new Kinetic.Image({ x: 0, y: 0, width: pWidth, height: pHeight, image: img });
	                editorLayer.add(i);
	                editorStage.add(editorLayer);

					var logo = new Image();
	                logo.onload = function () {
	                    var lwidth = logo.naturalWidth;
	                    var lheight = logo.naturalHeight;
	                    var scale = lwidth / lheight;
	                    if (lwidth <= editorTpl.logo.width && lheight <= editorTpl.logo.height){

	                    } else if (lwidth > editorTpl.logo.width && lheight <= editorTpl.logo.height){
	                    	lwidth = editorTpl.logo.width;
	                    	lheight = editorTpl.logo.width / scale;
	                    } else if (lwidth < editorTpl.logo.width && lheight >= editorTpl.logo.height){
	                    	lwidth = editorTpl.logo.height * scale;
	                    	lheight = editorTpl.logo.height;
	                    } else{
	                        if (scale >= editorTpl.logo.width / editorTpl.logo.height) {
	                            lwidth = editorTpl.logo.width;
	                            lheight = editorTpl.logo.width / scale;
	                        } else {
	                            lwidth = editorTpl.logo.height * scale;
	                            lheight = editorTpl.logo.height;
	                        }
	                    }
	                    var l = new Kinetic.Image({ 
	                    	x: editorTpl.logo.x, 
	                    	y: editorTpl.logo.y, 
	                    	width: lwidth, 
	                    	height: lheight, 
	                    	image: logo, 
	                    	draggable: true });
	                    editorLayer.add(l);


	                    editorTpl.input.forEach(function(element, index, array){
		                    var t = editorStage.get('#ed' + element.tagName)[0];
				            if (t) { t.remove(); }
			        		if (element.value.trim().length > 0) {
					            t = new Kinetic.Text({ x: (element.x), y: (element.y), 
					            	fontSize: (element.fontSize), fontFamily: element.fontFamily, 
					            	text: element.value, fill:element.fill, 
					            	id: 'ed' + element.tagName, draggable: true 
					            }).on('dblclick', function(){
									$textref = this;
									settextediton($textref);
								});
					            editorLayer.add(t); 
			        		}
						});

				        var tbF = [];
						var x = editorTpl.block.x;
						var y = editorTpl.block.y;
			        	editorTpl.block.items.forEach(function(element, index, array){
			        		var tempx = x;
							var linetext = "";
							var maxLen = editorTpl.block.maxLength;
							if (element.showlabel){
								var lid = 'ed' + editorTpl.block.tagName + "0" + element.label;
								var t = editorStage.get('#' + lid)[0];
					            if (t) { t.remove(); }
					            t = new Kinetic.Text({ x: x, y: y, fontSize: editorTpl.block.fontSize, fontFamily: editorTpl.block.fontFamily, 
					            	text: element.label, fill:editorTpl.block.fill, id: lid, draggable: true 
					            }).on('dblclick', function(){
									$textref = this;
									settextediton($textref);
								});
					            editorLayer.add(t);

								x = x + t.getTextWidth();
								maxLen = maxLen - colen(element.label);
							}
							linetext = element.value; 
							if (colen(linetext) > maxLen) {
								tbF = [];
								do {
									var s1 = substr(linetext, maxLen);
									tbF.push(s1);
									linetext = linetext.substring(s1.length);
								} while(colen(linetext) > maxLen);
								if (linetext.length > 0) { tbF.push(linetext); }
								linetext = tbF.join('\n');
							}
							var tid = 'ed' + editorTpl.block.tagName + "1" + element.label;
							var t = editorStage.get('#' + tid)[0];
				            if (t) { t.remove(); }
				            t = new Kinetic.Text({ x: x, y: y, fontSize: editorTpl.block.fontSize, fontFamily: editorTpl.block.fontFamily, 
				            	text: linetext, fill:editorTpl.block.fill, id: tid, draggable: true 
				            }).on('dblclick', function(){
								$textref = this;
								settextediton($textref);
							});
				            editorLayer.add(t);

							x = tempx;
							y = y + t.getHeight();
			        	});


	                    editorStage.draw();
						$('#editor').modal({
							backdrop: 'static',
							keyboard: false
						}).css({
							width: 'auto',
							overflow: 'hidden'
						});
	                };
	                logo.src = editorTpl.logo.file;
				};
				img.src = editorTpl.bgfile;
			}
        }

		function settextediton($ref){
			$('#textedit_textfield').val($ref.getText());
			$('#textedit_fontsize').val($ref.fontSize());
			$('#textedit_fontfield').val($ref.fontFamily());
		    // $('#textedit_textfield').resizable({handles: "se"});
			$('#textedit').show(); // to make div visible after setting values.
		}

		var editorSaved = false;
		$('#textedit_textfield').keyup(function() {
			$textref.setText($('#textedit_textfield').val());
			editorLayer.draw();
		});
		$('#textedit_fontfield').change(function() {
			$textref.fontFamily($('#textedit_fontfield').val());
			editorLayer.draw();
		});
		$('#textedit_fontsize').keyup(function() {
			$textref.fontSize($('#textedit_fontsize').val());
			editorLayer.draw();
		});
		$('#exittextedit').click(function(){
			$textref = null;
			$('#textedit').hide();
		});
		$('#deletetext').click(function() {
			editorTpl.deleted.push({ id: $textref.attrs.id });
			$textref.remove();
			editorLayer.draw();
			$( "#exittextedit" ).trigger( "click" );
		});
		$('#addtextbutton').click(function() {   
			var newid = "new_" + editorTpl.page + "_" + new Date().getTime();
			var t = editorStage.get('#' + newid)[0];
            if (t) { return; }
			var textadd = new Kinetic.Text({
				// width: width,
				text: '拖动并双击我进行修改',
				fontSize: 25,
				fontFamily: 'Calibri',
				draggable: true,
				fill: 'black',
				// padding: 10,
				align: false,
				x: false,
				y: false,
				id: newid
			}).on('dblclick', function(){
				$textref = this;
				settextediton($textref);
			});
			editorLayer.add(textadd);
			editorLayer.draw();
			editorTpl.created.push({ id: textadd.attrs.id });
		});
		$('#editor').on('show.bs.modal', function(e) {
			$('#textedit').hide();
			editorSaved = false;
		});
		$('#editor').on('hide.bs.modal', function(e) {    
			if (editorSaved == false){   
				if(!confirm('你确定退出?? 你所做过的改动将不会保存！')) {
					e.preventDefault();
					e.stopImmediatePropagation();
				}
			}
		});
		$('#editor #savebutton').click(function() {
			editorTpl.saved = [];
			// console.log(editorLayer);
			editorLayer.children.forEach(function(element, index, array){
				if (element.className == "Text"){
					editorTpl.saved.push({
						className: element.className,
						id: element.attrs.id,
						x: element.attrs.x,
						y: element.attrs.y,
						text: element.attrs.text,
						fontFamily: element.attrs.fontFamily,
						fontSize: element.attrs.fontSize,
						fill: element.attrs.fill,
						textWidth: element.getTextWidth(),
						textHeight: element.getHeight()
					});
				} else if (element.className == "Image"){
					editorTpl.saved.push({
						className: element.className,
						x: element.attrs.x,
						y: element.attrs.y,
						width: element.attrs.width,
						height: element.attrs.height,
						image: element.attrs.image.src ? element.attrs.image.src : element.attrs.image.href
					});
				}
			});

			currentdesign[editorTpl.page] = editorTpl;
			// console.log(currentdesign);
			// console.log(editorTpl);

			editorSaved = true;
			$('#editor').modal('hide');
			afterEditor();
		});

		function afterEditor(){
			var $tpl = $('#section1 .template');
			var $cnr = $tpl.eq(0).find('.preview-container');

			if (currentdesign.fore){
				currentdesign.fore.deleted.forEach(function(ele, ind, arr){
					// if (ele.id.substr(3,3) == currentdesign.fore.block.tagName) {
					// 	currentdesign.fore.block.items.forEach(function(btt, index, array){
					// 		if (ele.id.substr(6) == btt.label){
					// 			if (ele.id.substr(0, 3) == 'ed0') {
					// 				btt.labelDeleted = true;
					// 			} else if (ele.id.substr(0, 3) == 'ed1'){
					// 				btt.valueDeleted = true;
					// 			}
					// 		}
					// 	});
					// } else {
					// 	currentdesign.fore.input.forEach(function(inpp, index, array){
					// 		if (ele.id.substr(2) == inpp.tagName){
					// 			inpp.deleted = true;
					// 			// $(".inputInfo input[name='" + inpp.tagName + "']").val('');
					// 			// console.log(inpp.tagName);
					// 			// console.log($(".inputInfo input[name='" + inpp.tagName + "']").val());
					// 			$(".inputInfo input[name='" + inpp.tagName + "']").val('');
					// 			$(".inputInfo input[name='" + inpp.tagName + "']").css("opacity", 0.2);
					// 		}
					// 	});
					// }

            		if (ele.id.substr(2,3) == currentdesign.fore.block.tagName) {
            			var lbl = ele.id.substr(6);
            			if (ele.id.substr(5, 1) == '1'){
            				$(".inputInfo .fore input[data-label='" + lbl + "']").val('');
            				$(".inputInfo .fore input[data-label='" + lbl + "']").css("opacity", 0.2);
            			}
            		} else {
            			var eid = ele.id.substr(2);
						$(".inputInfo .fore input[name='" + eid + "']").val('');
						$(".inputInfo .fore input[name='" + eid + "']").css("opacity", 0.2);
            		}
				});

				if (layer) { layer.removeChildren();  }
		        if (stage) { stage.clearCache(); stage.clear(); }
				afterEditorDraw(stage, layer, currentdesign.fore, $cnr.eq(0));
			}
			if (currentdesign.back){
				currentdesign.back.deleted.forEach(function(ele, ind, arr){
					// if (ele.id.substr(3,3) == currentdesign.back.block.tagName) {
					// 	currentdesign.back.block.items.forEach(function(btt, index, array){
					// 		if (ele.id.substr(6) == btt.label){
					// 			if (ele.id.substr(0, 3) == 'ed0') {
					// 				btt.labelDeleted = true;
					// 			} else if (ele.id.substr(0, 3) == 'ed1'){
					// 				btt.valueDeleted = true;
					// 			}
					// 		}
					// 	});
					// } else {
					// 	currentdesign.back.input.forEach(function(inpp, index, array){
					// 		if (ele.id.substr(2) == inpp.tagName){
					// 			inpp.deleted = true;
					// 			$(".inputInfo input[name='" + inpp.tagName + "']").val('');
					// 			$(".inputInfo input[name='" + inpp.tagName + "']").css("opacity", 0.2);
					// 		}
					// 	});
					// }

            		if (ele.id.substr(2,3) == currentdesign.back.block.tagName) {
            			var lbl = ele.id.substr(6);
            			if (ele.id.substr(5, 1) == '1'){
            				$(".inputInfo .back input[data-label='" + lbl + "']").val('');
            				$(".inputInfo .back input[data-label='" + lbl + "']").css("opacity", 0.2);
            			}
            		} else {
            			var eid = ele.id.substr(2);
						$(".inputInfo .back input[name='" + eid + "']").val('');
						$(".inputInfo .back input[name='" + eid + "']").css("opacity", 0.2);
            		}
				});

				if (layerE) { layerE.removeChildren();  }
		        if (stageE) { stageE.clearCache(); stageE.clear();  }
				afterEditorDraw(stageE, layerE, currentdesign.back, $cnr.eq(1));
			}
			// console.log(currentdesign);
		}

		function afterEditorDraw(st, la, de, target){
            var img = new Image();
			img.onload = function () {
				st.width(img.naturalWidth);
                st.height(img.naturalHeight);
				var i = new Kinetic.Image({ x: 0, y: 0, image: img });
                la.add(i);
                st.add(la);

				var logo = new Image();
                logo.onload = function () {
                    var l = new Kinetic.Image({ x: de.saved[1].x, y: de.saved[1].y, width: de.saved[1].width, height: de.saved[1].height, image: logo });
                    la.add(l);

                    de.saved.forEach(function(ele, ind, arr){
                    	if (ele.className == "Text"){
                    		var eid = "";
                    		if (ele.id.substr(2,3) == de.block.tagName) {
                    			eid = ele.id.substr(2);

                    			if (ele.id.substr(5,1) == "1"){
	                    			$(".inputInfo input[data-label='" + ele.id.substr(6) + "']").val(ele.text);
	                    		}
                    		} else {
                    			if (ele.id.substr(0, 4) == "new_"){
                    				eid = ele.id.substr(4);
                    			} else {
	                    			eid = ele.id.substr(2);
	                    			$(".inputInfo input[name='" + eid + "']").val(ele.text);
	                    		}
                    		}
                    		var t = new Kinetic.Text({ x: ele.x, y: ele.y, fontSize: ele.fontSize, fontFamily: ele.fontFamily, 
				            	text: ele.text, fill:ele.fill, 
				            	id: eid});
				            la.add(t); 
                    	}
                    });

                    if (target){
	                    st.toDataURL({
		                    mimeType: "image/jpeg",
		                    quality: 1.0,
		                    callback: function(dataUrl) {
		                        target.css('background-image','url("' + dataUrl + '")');
		                    }
		                });
	                }
                };
                logo.src = de.saved[1].image;
			};
			img.src = de.bgfile;
		}

		function arrayHasPropValue(prop, value, arr) {
			return arr.some(function(obj) {
				return prop in obj && obj[prop] === value;
			});
		}
		function arraySetValues(arr, prop, value, values){
			if (prop == ""){
				var obj = {};
				for(var k in values){
					if (values.hasOwnProperty(k)) { obj[k] = values[k]; }
				}
				arr.push(obj);
			} else {
				return arr.some(function(obj) {
					if (prop in obj && obj[prop] === value){
						for(var k in values){
							if (values.hasOwnProperty(k)) { obj[k] = values[k]; }
						}
						return true;
					} else {
						return false;
					}
				});
			}
		}
