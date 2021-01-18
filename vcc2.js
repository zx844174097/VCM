window.addEventListener('message', async function (e) {
          if (e.data.message && e.data.message.action == "setAccount") {
            var address = e.data.message.data.address;
            $("#wallet").text("connected: " + address.substr(0,3) + '...' + address.substr(31,3));
            
            var acc = await tronWeb.trx.getAccount();
            $("#trxBalance").text((acc.balance / 1000000).toFixed(2) + " TRX");
            if (acc.assetV2){
                var tokenBalance = acc.assetV2.find(function(o){return o.key == "1003621";});
                if (tokenBalance){
                  $("#tokenBalance").text((tokenBalance.value / 1000000).toFixed(2) + " VCC");
                }
                else{
                  $("#tokenBalance").text("0 VCC");
                }
            }
            else{
              $("#tokenBalance").text("0 VCC");
            }
          }
        });

        const timer = setInterval(async() => {
          const tronWebState = {
            installed: !!window.tronWeb,
            loggedIn: window.tronWeb && window.tronWeb.ready
          };
          tronWebState.installed = !!window.tronWeb;
          tronWebState.loggedIn = window.tronWeb && window.tronWeb.ready;
          if (tronWebState.loggedIn){
            var address = window.tronWeb.defaultAddress.base58;
            $("#wallet").text("connected: " + address.substr(0,3) + '...' + address.substr(31,3));

            var acc = await tronWeb.trx.getAccount();
            $("#trxBalance").text((acc.balance / 1000000).toFixed(2) + " TRX");
            if (acc.assetV2){
                var tokenBalance = acc.assetV2.find(function(o){return o.key == "1003621";});
                if (tokenBalance){
                  $("#tokenBalance").text((tokenBalance.value / 1000000).toFixed(2) + " VCC");
                }
                else{
                  $("#tokenBalance").text("0 VCC");
                }
            }
            else{
              $("#tokenBalance").text("0 VCC");
            }
            clearInterval(timer);
          }
        }, 500);

        
              function change(){
                try{
                  var tokens = $("#token-input").val();
                  $("#trx-swap").val(tokens * 10).change();


                  var value = $("#trx-input").val();
                  $("#token-swap").val(value / 10).change();

                }catch{}
              }

              $("#token-input").change(function(){
                  change();
              })

              $("#trx-input").change(function(){
                  change();
              })

              $("#token-input").keyup(function(){
                  change();
              })

              $("#trx-input").keyup(function(){
                  change();
              })
