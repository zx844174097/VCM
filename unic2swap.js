<section data-id="home" class="animated-section">

                <div class="section-content">

                  <div class="row justify-content-center">

                    <!-- Contact Form -->
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                      <br><br>
                      <div class="page-title">
                        <h3>VCC Swap</h3>
                      </div>
                      <br><br>

                      <form id="token_form" class="contact-form" action="#" method="post">

                        <div class="block-title">
                          <h3>Balance <span id="tokenBalance">- UNC</span></h3>
                        </div>
                        <div class="messages"></div>

                        <div class="controls three-columns">
                          <div class="fields clearfix">
                            <div class="center-column">
                              <div class="form-group form-group-with-icon">
                                <span class="d-inline-block" tabindex="0" onClick="maxToken()" style="z-index: 10; color: #5e2fd6;cursor: pointer; position: absolute;top: 15px;right: 20px;outline: none;">Max</span>
                                <input id="token-input" type="text" name="number" class="form-control" placeholder="" required="required" data-error="Enter the  amount to swap">
                                <label>From UNC</label>
                                <div class="form-control-border"></div>
                                <div class="help-block with-errors"></div>
                              </div>
                              <div>
                                <img src="https://vccswap.github.io/swapicon.svg" height="30px" onClick="$('#token_form').hide(); $('#trx_form').show();" style="margin: 10px auto 20px;cursor: pointer;">
                              </div>
                              <div class="form-group form-group-with-icon">
                                <input id="trx-swap" type="text" name="name" class="form-control" placeholder="To TRX" disabled required="required">
                                <div class="form-control-border"></div>
                                <div class="help-block with-errors"></div>
                              </div>
                            </div>
                          </div>

                          <input type="button" class="button btn-send" value="Swap" onClick="swapToken()" style="cursor: pointer;">
                        </div>
                      </form>
                      

                      <form id="trx_form" class="contact-form" action="#" method="post" style="display: none">

                        <div class="block-title">
                          <h3>Balance <span id="trxBalance">- TRX</span></h3>
                        </div>
                        <div class="messages"></div>

                        <div class="controls three-columns">
                          <div class="fields clearfix">
                            <div class="center-column">
                              <div class="form-group form-group-with-icon">
                                <span class="d-inline-block" tabindex="0" onClick="maxTRX()" style="z-index: 10; color: #5e2fd6;cursor: pointer; position: absolute;top: 15px;right: 20px;outline: none;">Max</span>
                                <input id="trx-input" type="text" name="number" class="form-control" placeholder="" required="required" data-error="Enter the TRX amount to swap">
                                <label>From TRX</label>
                                <div class="form-control-border"></div>
                                <div class="help-block with-errors"></div>
                              </div>
                              <div>
                                <img src="https://vccswap.github.io/swapicon.svg" height="30px" onClick="$('#trx_form').hide(); $('#token_form').show();" style="margin: 10px auto 20px;cursor: pointer;">
                              </div>
                              <div class="form-group form-group-with-icon">
                                <input id="token-swap" type="text" name="name" class="form-control" placeholder="To UNC" disabled required="required">
                                <div class="form-control-border"></div>
                                <div class="help-block with-errors"></div>
                              </div>
                            </div>
                          </div>

                          <input type="button" class="button btn-send" value="Swap" onClick="swapTRX()" style="cursor: pointer;">
                        </div>
                      </form>
                    </div>
