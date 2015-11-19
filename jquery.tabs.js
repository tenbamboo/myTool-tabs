/**
 * @todo tab页
 * @namespace tabs
 * @author haze.liu
 * @since 2015年8月20日 下午2:34:22
 */
(function($) {
	/**
	 * 参数说明<BR>
	 * active: 指定被激活的tab页 (传data-url中的值) 
	 * 
	 */
	/**
	 * 方法说明<BR>
	 * setActive: 指定被激活的tab页 ($.tabs("setActive","test1")) 
	 * 
	 */

	var defaults = {
		active:'',
	};
	var methods = null;
	var _methods = null;
	methods = {
		init : function(options) {
			defaults = $.extend(defaults, options);
			_methods.initEvent();
			_methods.initDOM();
		},
		setActive:function(id){
			_methods.setActive(id);
		},
	};
	_methods = {
		initDOM:function(){
			$(".g-tabWrap .content>div").hide();

			if(defaults.active){
				_methods.setActive(defaults.active);
			}else{
				$(".g-tabWrap .tabs li:first").addClass("current");
				$(".g-tabWrap .content>div:first").fadeIn();
			}
			
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
		setActive:function(id){
				$(".g-tabWrap .content>div").hide();
				$(".g-tabWrap .tabs li.current").removeClass("current");
				$(".g-tabWrap .tabs li a[data-url='"+id+"']").parent().addClass("current");
				$(".g-tabWrap .content>div#"+id).fadeIn();
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
			$.error('Method ' + method + ' does not exist on jQuery.tabs');
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
			$.error('Method ' + method + ' does not exist on jQuery.tabs');
			return this;
		}
		return method.apply(this, arguments);
	};
})(jQuery);