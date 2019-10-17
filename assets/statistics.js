require(["gitbook"], function(gitbook) {
    gitbook.events.bind("start", function(e, config) {

        config["statistics"] = config["statistics"] || {};

       if (config["statistics"].bd_token !== "") {
           var hm = document.createElement('script');
           hm.src =config["statistics"].bd_url+'?' + config["statistics"].bd_token;
           var s = document.getElementsByTagName('script')[0];
           s.parentNode.insertBefore(hm, s);
       }

       if (config["statistics"].cnzz_id !== 0) {
           var res = "<div style='display:none'><script type=\"text/javascript\">document.write(unescape(\"%3Cspan id='cnzz_stat_icon_\"+config[\"statistics\"].cnzz_id+\"'%3E%3C/span%3E%3Cscript src='\" + config[\"statistics\"].cnzz_url + \"%3Fid%3D\"+config[\"statistics\"].cnzz_id+\"' type='text/javascript'%3E%3C/script%3E\"));</script></div>"
           $('body').append(res);
       }

    });
});