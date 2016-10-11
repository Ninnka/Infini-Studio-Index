/*
 * @Author: lan
 * @Date:   2016-10-09 20:59:41
 * @Last Modified by:   lan
 * @Last Modified time: 2016-10-10 19:47:56
 */

$(document).ready(function() {
	var db = $(document.body);
	$(".floatlist_item").height($(".first_item img").height()+$(".first_item .show_main_title").height());
	$("#content_wrapper").css("visibility", "visible");
	$(window).resize(function() {
		switch ($("#content_wrapper").width()) {
			case 1215:
			case 1216:
			case 840:
			case 839:
			case 481:
			case 480:
				break;
			default:
				$(".floatlist_item").height($(".first_item img").height()+$(".first_item .show_main_title").height());
		}
	});
	$(".floatlist_item_link").mouseenter(function() {
		$(this).find(".show_shadow_title").show();
	});
	$(".floatlist_item_link").mouseleave(function() {
		$(this).find(".show_shadow_title").hide();
	});
	$(".banner_bg_wrapper").mouseenter(function() {
		$(this).find("#banner_bg_previous").css("display", "block");
		$(this).find("#banner_bg_next").css("display", "block");
	});
	$(".banner_bg_wrapper").mouseleave(function() {
		$(this).find("#banner_bg_previous").css("display", "none");
		$(this).find("#banner_bg_next").css("display", "none");
	});

	$(".header_nav_item").click(function(){
		let selectorStr = $.trim($(this).text()).toLowerCase();
		scrollToNavItem(selectorStr);
		console.log(selectorStr);
	});

	function scrollToNavItem(selectorStr){
		let queryStr = "."+selectorStr+"_destination";
		let item = $(queryStr);
		let ww = $(window).width();
		let hh = ww > 640 ? 130 : 90;
		console.log("item.offset().top: "+item.offset().top);
		db.animate({scrollTop: item.offset().top - hh}, 500);
	}
});
