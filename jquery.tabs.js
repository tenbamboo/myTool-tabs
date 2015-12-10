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
	 * loadBefore:function  加载之前执行的function
	 * loadAfter:function  加载之之后执行的function
	 * 
	 */
	/**
	 * 方法说明<BR>
	 * setActive: 指定被激活的tab页 ($.tabs("setActive","test1")) 
	 * 
	 */


	 var Tabs= function (element, options) {
		this.element = $(element);
		this.active = options.active ||  '';
		this.loadBefore = options.loadBefore || function(){};
		this.loadAfter = options.loadAfter || function(){};
		this._init();
		
	}

	Tabs.prototype ={
		constructor: Tabs,
		_init:function(){
			this.initEvent();
			this.initDOM();
		},
		initDOM:function(){
			var $this=this.element;
			$this.find(".content>div").hide();

			if(this.active){
				this.setActive(this.active);
			}else{
				$this.find(".tabs li:first").addClass("current");
				$this.find(".content>div:first").fadeIn();
			}
			
		},
		initEvent : function() {
			var $this=this.element;
			var opt=this;
			$this.find('.tabs a').click(function(e) {
//				e.preventDefault();
				var id=$(this).attr('data-url');
				opt.loadBefore(id);
				$this.find(".content>div").hide();
				$this.find(".tabs li.current").removeClass("current");
				$(this).parent().addClass("current")
				$('#' + $(this).attr('data-url')).fadeIn();
				opt.loadAfter(id);
			});
		},
		setActive:function(id){
			var $this=this.element;
			$this.find(".content>div").hide();
			$this.find(".tabs li.current").removeClass("current");
			$this.find(".tabs li a[data-url='"+id+"']").parent().addClass("current");
			$this.find(".content>div#"+id).fadeIn();
		},



		
	};
	$.fn.tabs = function (option) {
		var args = Array.apply(null, arguments);
		args.shift();
		var internal_return;
		this.each(function () {
			var $this = $(this),
				data = $this.data('tabs'),
				options = typeof option == 'object' && option;
			if (!data) {
				$this.data('tabs', (data = new Tabs(this, $.extend({}, $.fn.tabs.defaults, options))));
			}
			if (typeof option == 'string' && typeof data[option] == 'function') {
				internal_return = data[option].apply(data, args);
				if (internal_return !== undefined) {
					return false;
				}
			}
		});
		if (internal_return !== undefined)
			return internal_return;
		else
			return this;
	};
	$.fn.tabs.defaults = {};


})(jQuery);