
function reinitIframe(){
         var iframe = document.getElementById("mid_right1");
         try{
             var bHeight = iframe.contentWindow.document.body.scrollHeight;   
             var dHeight = iframe.contentWindow.document.documentElement.scrollHeight;
             var height = Math.max(bHeight, dHeight);
             iframe.height =  height;
         }catch (ex){}
         }
window.onload = function(){
	window.setInterval("reinitIframe()",500);
};