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
           var cnzz_protocol = (("https:" == document.location.protocol) ? "https://" : "http://");
           document.write(
               unescape("%3Cspan id='cnzz_stat_icon_"+config["statistics"].cnzz_id+"'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s95.cnzz.com/z_stat.php%3Fid%3D'"+config["statistics"].cnzz_id+" type='text/javascript'%3E%3C/script%3E")
           );
       }

    });
});



