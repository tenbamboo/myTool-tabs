/**
 * @todo tab页
 * @namespace tabs
 * @author haze.liu
 * @copyright (c) 2015, Dalian Roiland Information CO., LTD All Rights Reserved.
 * @since 2015年8月20日 下午2:34:22
 */
(function($) {
	/**
	 * 参数说明<BR>
	 * 
	 */
	var defaults = {
//		open : undefined,
//		close : undefined,
	};
	var methods = null;
	var _methods = null;
	methods = {
		init : function(options) {
			defaults = $.extend(defaults, options);
			_methods.initEvent();
			_methods.initDOM();
		},
	};
	_methods = {
		initDOM:function(){
			$(".g-tabWrap .content>div").hide();
			$(".g-tabWrap .tabs li:first").addClass("current");
			$(".g-tabWrap .content>div:first").fadeIn();
			
		},
		initEvent : function() {
			$('.g-tabWrap .tabs a').click(function(e) {
//				e.preventDefault();
				$(".g-tabWrap .content>div").hide();
				$(".g-tabWrap .tabs li.current").removeClass("current");
				$(this).parent().addClass("current")
				$('#' + $(this).attr('data-url')).fadeIn();
				return false;
			});
		},
		
	};
	$.fn.tabs = function() {
		var method = arguments[0];
		if (methods[method]) {
			method = methods[method];
			arguments = Array.prototype.slice.call(arguments, 1);
		} else if (typeof (method) == 'object' || !method) {
			method = methods.init;
		} else {
			$.error('Method ' + method + ' does not exist on jQuery.comanySelect');
			return this;
		}
		return method.apply(this, arguments);
	};
	$.tabs = function() {
		var method = arguments[0];
		if (methods[method]) {
			method = methods[method];
			arguments = Array.prototype.slice.call(arguments, 1);
		} else if (typeof (method) == 'object' || !method) {
			method = methods.init;
		} else {
			$.error('Method ' + method + ' does not exist on jQuery.comanySelect');
			return this;
		}
		return method.apply(this, arguments);
	};
})(jQuery);