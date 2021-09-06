window.onscroll = function() {navScrolling()};
        function navScrolling(){
            if(document.body.scrollTop > 400 || document.documentElement.scrollTop > 400){
                document.getElementById("navbar").style.backgroundColor= "#000000";
                document.getElementById("navbar").style.borderBottom= "#2e2e2efc 0.2px solid";
                document.getElementById("body").style.backgroundColor= "#000c20fc";
                document.getElementById("maincontainer").style.opacity= 0;

            }
            else{
                document.getElementById("navbar").style.backgroundColor= "";
                document.getElementById("navbar").style.borderBottom= "";
                document.getElementById("body").style.backgroundColor= "";
                document.getElementById("maincontainer").style.opacity= 1;
            }
        }