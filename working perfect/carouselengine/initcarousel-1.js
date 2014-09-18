jQuery(document).ready(function(){
    var scripts = document.getElementsByTagName("script");
    var jsFolder = "";
    for (var i= 0; i< scripts.length; i++)
    {
        if( scripts[i].src && scripts[i].src.match(/initcarousel-1\.js/i))
            jsFolder = scripts[i].src.substr(0, scripts[i].src.lastIndexOf("/") + 1);
    }
    if ( typeof html5Lightbox === "undefined" )
    {
        // html5Lightbox = jQuery(".html5lightbox").html5lightbox({
            // skinsfoldername:"",
            // jsfolder:jsFolder,
            // barheight:64,
            // showtitle:true,
            // showdescription:false,
            // shownavigation:false,
            // thumbwidth:80,
            // thumbheight:60,
            // thumbtopmargin:12,
            // thumbbottommargin:8,
            // titlebottomcss:'{color:#333; font-size:14px; font-family:Armata,sans-serif,Arial; overflow:hidden; text-align:left;}',
            // descriptionbottomcss:'{color:#333; font-size:12px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left; margin:4px 0px 0px; padding: 0px;}'
        // });
    }
    jQuery("#amazingcarousel-1").amazingcarousel({
        jsfolder:jsFolder,
        width:160,
        height:100,
        skinsfoldername:"",
        arrowhideonmouseleave:1000,
        itembottomshadowimagetop:99,
        donotcrop:false,
        navheight:16,
        random:false,
        showhoveroverlay:true,
        height:100,
        arrowheight:48,
        itembackgroundimagewidth:100,
        skin:"Highlight",
        responsive:true,
        bottomshadowimage:"bottomshadow-110-95-0.png",
        navstyle:"bullets",
        enabletouchswipe:true,
        backgroundimagetop:-40,
        arrowstyle:"always",
        bottomshadowimagetop:95,
        transitionduration:100,
        lightboxshowtitle:true,
        hoveroverlayimage:"hoveroverlay-64-64-5.png",
        itembottomshadowimage:"itembottomshadow-100-98-3.png",
        lightboxshowdescription:false,
        width:160,
        showitembottomshadow:true,
        showhoveroverlayalways:false,
        navimage:"bullet-16-16-0.png",
        lightboxtitlebottomcss:"{color:#333; font-size:14px; font-family:Armata,sans-serif,Arial; overflow:hidden; text-align:left;}",
        lightboxshownavigation:false,
        showitembackgroundimage:false,
        itembackgroundimage:"",
        backgroundimagewidth:110,
        playvideoimagepos:"center",
        circular:true,
        arrowimage:"arrows-48-48-2.png",
        scrollitems:1,
        showbottomshadow:false,
        lightboxdescriptionbottomcss:"{color:#333; font-size:12px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left; margin:4px 0px 0px; padding: 0px;}",
        supportiframe:false,
        transitioneasing:"easeOutExpo",
        itembackgroundimagetop:0,
        showbackgroundimage:false,
        lightboxbarheight:64,
        showplayvideo:true,
        spacing:4,
        lightboxthumbwidth:80,
        scrollmode:"page",
        navdirection:"horizontal",
        itembottomshadowimagewidth:100,
        backgroundimage:"",
        lightboxthumbtopmargin:12,
        arrowwidth:48,
        transparent:false,
        navmode:"page",
        lightboxthumbbottommargin:8,
        interval:3000,
        lightboxthumbheight:60,
        navspacing:8,
        pauseonmouseover:true,
        imagefillcolor:"FFFFFF",
        playvideoimage:"playvideo-64-64-0.png",
        visibleitems:3,
        navswitchonmouseover:false,
        direction:"horizontal",
        usescreenquery:false,
        bottomshadowimagewidth:110,
        screenquery:{
	mobile: {
		screenwidth: 600,
		visibleitems: 1
	}
},
        navwidth:16,
        loop:0,
        autoplay:false
    });
});