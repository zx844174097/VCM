var price = 100;
            var volume = 9417384726553456765;
            var tokenBalance;
            var account;
            $(".price").text(price)
            $(".yourprice").text(price * 34806)
            $(".volume").text(volume.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))

            const timer = setInterval(async() => {
                if (window.tronWeb && window.tronWeb.ready){
                    
                    clearInterval(timer);
                }
            }, 500);

            $("body").on("keyup", "input", function(){
                $("#SwapedToken").text($("input").val() * price)
            });
       
            $("body").on("click", "button", function(){
                swap();
            });
