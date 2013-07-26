/*
 *
 *  jQuery ResponsiveText by Gary Hepting - https://github.com/ghepting/responsiveText
 *  
 *  Open source under the MIT License. 
 *
 *  Copyright © 2013 Gary Hepting. All rights reserved.
 *
*/


(function() {
  (function($) {
    var elems;

    elems = [];
    $.fn.responsiveText = function(options) {
      var settings;

      settings = {
        compressor: options.compressor || 10,
        minSize: options.minSize || Number.NEGATIVE_INFINITY,
        maxSize: options.maxSize || Number.POSITIVE_INFINITY
      };
      return this.each(function() {
        var elem;

        elem = $(this);
        elem.attr('data-compression', settings.compressor);
        elem.attr('data-min', settings.minSize);
        elem.attr('data-max', settings.maxSize);
        elem.css("font-size", Math.floor(Math.max(Math.min(elem.width() / settings.compressor, parseFloat(settings.maxSize)), parseFloat(settings.minSize))));
        return elems.push(elem);
      });
    };
    return $(window).on("resize", function() {
      return $(elems).each(function() {
        var elem;

        elem = $(this);
        return elem.css("font-size", Math.floor(Math.max(Math.min(elem.width() / (elem.attr('data-compression')), parseFloat(elem.attr('data-max'))), parseFloat(elem.attr('data-min')))));
      });
    });
  })(jQuery);

}).call(this);
