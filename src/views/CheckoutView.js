/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=623f3e31626cbee56c681511").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
]

let Controller

class CheckoutView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/CheckoutController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = CheckoutView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '623f3e31626cbe3999681526'
    htmlEl.dataset['wfSite'] = '623f3e31626cbee56c681511'

    scripts.concat(null).reduce((active, next) => Promise.resolve(active).then((active) => {
      const loading = active.loading.then((script) => {
        new Function(`
          with (this) {
            eval(arguments[0])
          }
        `).call(window, script)

        return next
      })

      return active.isAsync ? next : loading
    }))
  }

  render() {
    const proxies = CheckoutView.Controller !== CheckoutView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/my-fantabulous-site-821a62.webflow.css);
        ` }} />
        <span className="af-view">
          <div>
            <div className="af-class-page-wrap af-class-no-overflow">
              <div data-collapse="medium" data-animation="over-right" data-duration={400} data-easing="ease" data-easing2="ease" role="banner" className="af-class-navbar w-nav">
                <div className="af-class-container af-class-nav-container">
                  <a href="index.html" className="af-class-brand w-nav-brand"><img src="images/fracto_logo-removebg-preview.png" width={100} sizes="100px" srcSet="images/fracto_logo-removebg-preview-p-500.png 500w, images/fracto_logo-removebg-preview.png 703w" alt className="af-class-brand-logo" /></a>
                  <div className="af-class-nav-right-wrap">
                    <nav role="navigation" className="af-class-nav-menu w-nav-menu">
                      <a href="about.html" className="af-class-nav-link w-nav-link">Collection</a>
                      <a href="free-workouts.html" className="af-class-nav-link w-nav-link">Resources</a>
                      <a href="shop.html" className="af-class-nav-link w-nav-link">About</a>
                      <a href="contact.html" className="af-class-button af-class-small w-button">Explore</a>
                    </nav>
                    <div className="af-class-menu-button w-nav-button">
                      <div className="w-icon-nav-menu" />
                    </div>
                    <div data-node-type="commerce-cart-wrapper" data-open-product data-wf-cart-type="rightDropdown" data-wf-cart-query data-wf-page-link-href-prefix className="w-commerce-commercecartwrapper af-class-cart">
                      <a href="#" data-node-type="commerce-cart-open-link" className="w-commerce-commercecartopenlink af-class-cart-button w-inline-block"><svg className="w-commerce-commercecartopenlinkicon" width="17px" height="17px" viewBox="0 0 17 17">
                          <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                            <path d="M2.60592789,2 L0,2 L0,0 L4.39407211,0 L4.84288393,4 L16,4 L16,9.93844589 L3.76940945,12.3694378 L2.60592789,2 Z M15.5,17 C14.6715729,17 14,16.3284271 14,15.5 C14,14.6715729 14.6715729,14 15.5,14 C16.3284271,14 17,14.6715729 17,15.5 C17,16.3284271 16.3284271,17 15.5,17 Z M5.5,17 C4.67157288,17 4,16.3284271 4,15.5 C4,14.6715729 4.67157288,14 5.5,14 C6.32842712,14 7,14.6715729 7,15.5 C7,16.3284271 6.32842712,17 5.5,17 Z" fill="currentColor" fillRule="nonzero" />
                          </g>
                        </svg>
                        <div style={{display: 'none'}} data-count-hide-rule="empty" className="w-commerce-commercecartopenlinkcount af-class-cart-quantity">0</div>
                      </a>
                      <div data-node-type="commerce-cart-container-wrapper" style={{display: 'none'}} className="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-rightDropdown af-class-cart-wrapper">
                        <div data-node-type="commerce-cart-container" className="w-commerce-commercecartcontainer af-class-cart-container">
                          <div className="w-commerce-commercecartheader">
                            <h4 className="w-commerce-commercecartheading af-class-cart-text">Your Cart</h4>
                            <a href="#" data-node-type="commerce-cart-close-link" className="w-commerce-commercecartcloselink w-inline-block"><svg className="af-class-cart-close" width="16px" height="16px" viewBox="0 0 16 16">
                                <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                  <g fillRule="nonzero" fill="#333333">
                                    <polygon points="6.23223305 8 0.616116524 13.6161165 2.38388348 15.3838835 8 9.76776695 13.6161165 15.3838835 15.3838835 13.6161165 9.76776695 8 15.3838835 2.38388348 13.6161165 0.616116524 8 6.23223305 2.38388348 0.616116524 0.616116524 2.38388348 6.23223305 8" />
                                  </g>
                                </g>
                              </svg></a>
                          </div>
                          <div className="w-commerce-commercecartformwrapper">
                            <form data-node-type="commerce-cart-form" style={{display: 'none'}} className="w-commerce-commercecartform">
                              <div className="w-commerce-commercecartlist af-class-cart-list" data-wf-collection="database.commerceOrder.userItems" data-wf-template-id="wf-template-eb031dfa-deb3-741e-1803-f3c9ca034ddb" />
                              <div className="w-commerce-commercecartfooter af-class-cart-footer">
                                <div className="w-commerce-commercecartlineitem">
                                  <div>Subtotal</div>
                                  <div className="w-commerce-commercecartordervalue" />
                                </div>
                                <div>
                                  <div data-node-type="commerce-cart-quick-checkout-actions">
                                    <a data-node-type="commerce-cart-apple-pay-button" style={{backgroundImage: '-webkit-named-image(apple-pay-logo-white)', backgroundSize: '100% 50%', backgroundPosition: '50% 50%', backgroundRepeat: 'no-repeat'}} className="w-commerce-commercecartapplepaybutton">
                                      <div />
                                    </a>
                                    <a data-node-type="commerce-cart-quick-checkout-button" style={{display: 'none'}} className="w-commerce-commercecartquickcheckoutbutton"><svg className="w-commerce-commercequickcheckoutgoogleicon" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={16} height={16} viewBox="0 0 16 16">
                                        <defs>
                                          <polygon id="google-mark-a" points="0 .329 3.494 .329 3.494 7.649 0 7.649" />
                                          <polygon id="google-mark-c" points=".894 0 13.169 0 13.169 6.443 .894 6.443" />
                                        </defs>
                                        <g fill="none" fillRule="evenodd">
                                          <path fill="#4285F4" d="M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469" />
                                          <path fill="#34A853" d="M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16" />
                                          <g transform="translate(0 4)">
                                            <mask id="google-mark-b" fill="#fff">
                                              <use xlinkHref="#google-mark-a" />
                                            </mask>
                                            <path fill="#FBBC04" d="M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337" mask="url(#google-mark-b)" />
                                          </g>
                                          <mask id="google-mark-d" fill="#fff">
                                            <use xlinkHref="#google-mark-c" />
                                          </mask>
                                          <path fill="#EA4335" d="M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291" mask="url(#google-mark-d)" />
                                        </g>
                                      </svg><svg className="w-commerce-commercequickcheckoutmicrosofticon" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16">
                                        <g fill="none" fillRule="evenodd">
                                          <polygon fill="#F05022" points="7 7 1 7 1 1 7 1" />
                                          <polygon fill="#7DB902" points="15 7 9 7 9 1 15 1" />
                                          <polygon fill="#00A4EE" points="7 15 1 15 1 9 7 9" />
                                          <polygon fill="#FFB700" points="15 15 9 15 9 9 15 9" />
                                        </g>
                                      </svg>
                                      <div>Pay with browser.</div>
                                    </a>
                                  </div>
                                  <div style={{position: 'relative'}} data-wf-paypal-button="{&quot;layout&quot;:&quot;horizontal&quot;,&quot;color&quot;:&quot;silver&quot;,&quot;shape&quot;:&quot;rect&quot;,&quot;label&quot;:&quot;paypal&quot;,&quot;tagline&quot;:false,&quot;note&quot;:false}" className="af-class-paypal">
                                    <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0, zIndex: 999, cursor: 'auto'}} />
                                  </div>
                                  <a href="checkout.html" value="Checkout" data-node-type="cart-checkout-button" className="w-commerce-commercecartcheckoutbutton af-class-button af-class-checkout-button" data-loading-text="Hang Tight...">Checkout</a>
                                </div>
                              </div>
                            </form>
                            <div className="w-commerce-commercecartemptystate af-class-empty-state">
                              <h5>Noting here!</h5>
                              <div>Browse around my shop to add fitness programs or nutrition plans</div>
                            </div>
                            <div style={{display: 'none'}} data-node-type="commerce-cart-error" className="w-commerce-commercecarterrorstate af-class-error-state">
                              <div className="w-cart-error-msg" data-w-cart-quantity-error="Product is not available in this quantity." data-w-cart-general-error="Something went wrong when adding this item to the cart." data-w-cart-checkout-error="Checkout is disabled on this site." data-w-cart-cart_order_min-error="The order minimum was not met. Add more items to your cart to continue." data-w-cart-subscription_error-error="Cart failed.">Product is not available in this quantity.</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-node-type="commerce-checkout-form-container" data-wf-checkout-query data-wf-page-link-href-prefix className="w-commerce-commercecheckoutformcontainer af-class-checkout-form">
                <div className="w-commerce-commercelayoutcontainer af-class-shipping-container w-container">
                  <div className="w-commerce-commercelayoutmain">
                    <div data-node-type="commerce-cart-quick-checkout-actions">
                      <a data-node-type="commerce-cart-apple-pay-button" style={{backgroundImage: '-webkit-named-image(apple-pay-logo-white)', backgroundSize: '100% 50%', backgroundPosition: '50% 50%', backgroundRepeat: 'no-repeat'}} className="w-commerce-commercecartapplepaybutton">
                        <div />
                      </a>
                      <a data-node-type="commerce-cart-quick-checkout-button" style={{display: 'none'}} className="w-commerce-commercecartquickcheckoutbutton"><svg className="w-commerce-commercequickcheckoutgoogleicon" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={16} height={16} viewBox="0 0 16 16">
                          <defs>
                            <polygon id="google-mark-a" points="0 .329 3.494 .329 3.494 7.649 0 7.649" />
                            <polygon id="google-mark-c" points=".894 0 13.169 0 13.169 6.443 .894 6.443" />
                          </defs>
                          <g fill="none" fillRule="evenodd">
                            <path fill="#4285F4" d="M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469" />
                            <path fill="#34A853" d="M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16" />
                            <g transform="translate(0 4)">
                              <mask id="google-mark-b" fill="#fff">
                                <use xlinkHref="#google-mark-a" />
                              </mask>
                              <path fill="#FBBC04" d="M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337" mask="url(#google-mark-b)" />
                            </g>
                            <mask id="google-mark-d" fill="#fff">
                              <use xlinkHref="#google-mark-c" />
                            </mask>
                            <path fill="#EA4335" d="M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291" mask="url(#google-mark-d)" />
                          </g>
                        </svg><svg className="w-commerce-commercequickcheckoutmicrosofticon" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16">
                          <g fill="none" fillRule="evenodd">
                            <polygon fill="#F05022" points="7 7 1 7 1 1 7 1" />
                            <polygon fill="#7DB902" points="15 7 9 7 9 1 15 1" />
                            <polygon fill="#00A4EE" points="7 15 1 15 1 9 7 9" />
                            <polygon fill="#FFB700" points="15 15 9 15 9 9 15 9" />
                          </g>
                        </svg>
                        <div>Pay with browser.</div>
                      </a>
                    </div>
                    <form data-node-type="commerce-checkout-customer-info-wrapper" className="w-commerce-commercecheckoutcustomerinfowrapper af-class-checkout-block">
                      <div className="w-commerce-commercecheckoutblockheader af-class-block-header">
                        <h5 className="af-class-no-margin">Customer Info</h5>
                        <div>* Required</div>
                      </div>
                      <fieldset className="w-commerce-commercecheckoutblockcontent af-class-block-content"><label className="w-commerce-commercecheckoutlabel af-class-field-label">Email *</label><input type="text" className="w-commerce-commercecheckoutemailinput af-class-form-field af-class-checkout-field" name="email" required /></fieldset>
                    </form>
                    <form data-node-type="commerce-checkout-shipping-address-wrapper" className="w-commerce-commercecheckoutshippingaddresswrapper af-class-checkout-block">
                      <div className="w-commerce-commercecheckoutblockheader af-class-block-header">
                        <h5 className="af-class-no-margin">Shipping Address</h5>
                        <div>* Required</div>
                      </div>
                      <fieldset className="w-commerce-commercecheckoutblockcontent af-class-block-content"><label className="w-commerce-commercecheckoutlabel af-class-field-label">Full Name *</label><input type="text" className="w-commerce-commercecheckoutshippingfullname af-class-form-field af-class-checkout-field" name="name" required /><label className="w-commerce-commercecheckoutlabel af-class-field-label">Street Address *</label><input type="text" className="w-commerce-commercecheckoutshippingstreetaddress af-class-form-field af-class-checkout-field" name="address_line1" required /><input type="text" className="w-commerce-commercecheckoutshippingstreetaddressoptional af-class-form-field af-class-checkout-field" name="address_line2" />
                        <div className="w-commerce-commercecheckoutrow">
                          <div className="w-commerce-commercecheckoutcolumn"><label className="w-commerce-commercecheckoutlabel af-class-field-label">City *</label><input type="text" className="w-commerce-commercecheckoutshippingcity af-class-form-field af-class-checkout-field" name="address_city" required /></div>
                          <div className="w-commerce-commercecheckoutcolumn"><label className="w-commerce-commercecheckoutlabel af-class-field-label">State/Province</label><input type="text" className="w-commerce-commercecheckoutshippingstateprovince af-class-form-field af-class-checkout-field" name="address_state" /></div>
                          <div className="w-commerce-commercecheckoutcolumn"><label className="w-commerce-commercecheckoutlabel af-class-field-label">Zip/Postal Code *</label><input type="text" data-node-type="commerce-checkout-shipping-zip-field" className="w-commerce-commercecheckoutshippingzippostalcode af-class-form-field af-class-checkout-field" name="address_zip" required /></div>
                        </div><label className="w-commerce-commercecheckoutlabel af-class-field-label">Country *</label><select className="w-commerce-commercecheckoutshippingcountryselector af-class-selector" name="address_country">
                          <option value="AF">Afghanistan</option>
                          <option value="AX">Aland Islands</option>
                          <option value="AL">Albania</option>
                          <option value="DZ">Algeria</option>
                          <option value="AS">American Samoa</option>
                          <option value="AD">Andorra</option>
                          <option value="AO">Angola</option>
                          <option value="AI">Anguilla</option>
                          <option value="AG">Antigua and Barbuda</option>
                          <option value="AR">Argentina</option>
                          <option value="AM">Armenia</option>
                          <option value="AW">Aruba</option>
                          <option value="AU">Australia</option>
                          <option value="AT">Austria</option>
                          <option value="AZ">Azerbaijan</option>
                          <option value="BS">Bahamas</option>
                          <option value="BH">Bahrain</option>
                          <option value="BD">Bangladesh</option>
                          <option value="BB">Barbados</option>
                          <option value="BY">Belarus</option>
                          <option value="BE">Belgium</option>
                          <option value="BZ">Belize</option>
                          <option value="BJ">Benin</option>
                          <option value="BM">Bermuda</option>
                          <option value="BT">Bhutan</option>
                          <option value="BO">Bolivia</option>
                          <option value="BQ">Bonaire, Saint Eustatius and Saba</option>
                          <option value="BA">Bosnia and Herzegovina</option>
                          <option value="BW">Botswana</option>
                          <option value="BR">Brazil</option>
                          <option value="IO">British Indian Ocean Territory</option>
                          <option value="VG">British Virgin Islands</option>
                          <option value="BN">Brunei</option>
                          <option value="BG">Bulgaria</option>
                          <option value="BF">Burkina Faso</option>
                          <option value="BI">Burundi</option>
                          <option value="CV">Cabo Verde</option>
                          <option value="KH">Cambodia</option>
                          <option value="CM">Cameroon</option>
                          <option value="CA">Canada</option>
                          <option value="KY">Cayman Islands</option>
                          <option value="CF">Central African Republic</option>
                          <option value="TD">Chad</option>
                          <option value="CL">Chile</option>
                          <option value="CN">China</option>
                          <option value="CX">Christmas Island</option>
                          <option value="CC">Cocos Islands</option>
                          <option value="CO">Colombia</option>
                          <option value="KM">Comoros</option>
                          <option value="CK">Cook Islands</option>
                          <option value="CR">Costa Rica</option>
                          <option value="HR">Croatia</option>
                          <option value="CU">Cuba</option>
                          <option value="CW">Curacao</option>
                          <option value="CY">Cyprus</option>
                          <option value="CZ">Czechia</option>
                          <option value="CD">Democratic Republic of the Congo</option>
                          <option value="DK">Denmark</option>
                          <option value="DJ">Djibouti</option>
                          <option value="DM">Dominica</option>
                          <option value="DO">Dominican Republic</option>
                          <option value="EC">Ecuador</option>
                          <option value="EG">Egypt</option>
                          <option value="SV">El Salvador</option>
                          <option value="GQ">Equatorial Guinea</option>
                          <option value="ER">Eritrea</option>
                          <option value="EE">Estonia</option>
                          <option value="SZ">Eswatini</option>
                          <option value="ET">Ethiopia</option>
                          <option value="FK">Falkland Islands</option>
                          <option value="FO">Faroe Islands</option>
                          <option value="FJ">Fiji</option>
                          <option value="FI">Finland</option>
                          <option value="FR">France</option>
                          <option value="GF">French Guiana</option>
                          <option value="PF">French Polynesia</option>
                          <option value="TF">French Southern Territories</option>
                          <option value="GA">Gabon</option>
                          <option value="GM">Gambia</option>
                          <option value="GE">Georgia</option>
                          <option value="DE">Germany</option>
                          <option value="GH">Ghana</option>
                          <option value="GI">Gibraltar</option>
                          <option value="GR">Greece</option>
                          <option value="GL">Greenland</option>
                          <option value="GD">Grenada</option>
                          <option value="GP">Guadeloupe</option>
                          <option value="GU">Guam</option>
                          <option value="GT">Guatemala</option>
                          <option value="GG">Guernsey</option>
                          <option value="GN">Guinea</option>
                          <option value="GW">Guinea-Bissau</option>
                          <option value="GY">Guyana</option>
                          <option value="HT">Haiti</option>
                          <option value="HN">Honduras</option>
                          <option value="HK">Hong Kong</option>
                          <option value="HU">Hungary</option>
                          <option value="IS">Iceland</option>
                          <option value="IN">India</option>
                          <option value="ID">Indonesia</option>
                          <option value="IR">Iran</option>
                          <option value="IQ">Iraq</option>
                          <option value="IE">Ireland</option>
                          <option value="IM">Isle of Man</option>
                          <option value="IL">Israel</option>
                          <option value="IT">Italy</option>
                          <option value="CI">Ivory Coast</option>
                          <option value="JM">Jamaica</option>
                          <option value="JP">Japan</option>
                          <option value="JE">Jersey</option>
                          <option value="JO">Jordan</option>
                          <option value="KZ">Kazakhstan</option>
                          <option value="KE">Kenya</option>
                          <option value="KI">Kiribati</option>
                          <option value="XK">Kosovo</option>
                          <option value="KW">Kuwait</option>
                          <option value="KG">Kyrgyzstan</option>
                          <option value="LA">Laos</option>
                          <option value="LV">Latvia</option>
                          <option value="LB">Lebanon</option>
                          <option value="LS">Lesotho</option>
                          <option value="LR">Liberia</option>
                          <option value="LY">Libya</option>
                          <option value="LI">Liechtenstein</option>
                          <option value="LT">Lithuania</option>
                          <option value="LU">Luxembourg</option>
                          <option value="MO">Macao</option>
                          <option value="MG">Madagascar</option>
                          <option value="MW">Malawi</option>
                          <option value="MY">Malaysia</option>
                          <option value="MV">Maldives</option>
                          <option value="ML">Mali</option>
                          <option value="MT">Malta</option>
                          <option value="MH">Marshall Islands</option>
                          <option value="MQ">Martinique</option>
                          <option value="MR">Mauritania</option>
                          <option value="MU">Mauritius</option>
                          <option value="YT">Mayotte</option>
                          <option value="MX">Mexico</option>
                          <option value="FM">Micronesia</option>
                          <option value="MD">Moldova</option>
                          <option value="MC">Monaco</option>
                          <option value="MN">Mongolia</option>
                          <option value="ME">Montenegro</option>
                          <option value="MS">Montserrat</option>
                          <option value="MA">Morocco</option>
                          <option value="MZ">Mozambique</option>
                          <option value="MM">Myanmar</option>
                          <option value="NA">Namibia</option>
                          <option value="NR">Nauru</option>
                          <option value="NP">Nepal</option>
                          <option value="NL">Netherlands</option>
                          <option value="NC">New Caledonia</option>
                          <option value="NZ">New Zealand</option>
                          <option value="NI">Nicaragua</option>
                          <option value="NE">Niger</option>
                          <option value="NG">Nigeria</option>
                          <option value="NU">Niue</option>
                          <option value="NF">Norfolk Island</option>
                          <option value="KP">North Korea</option>
                          <option value="MK">North Macedonia</option>
                          <option value="MP">Northern Mariana Islands</option>
                          <option value="NO">Norway</option>
                          <option value="OM">Oman</option>
                          <option value="PK">Pakistan</option>
                          <option value="PW">Palau</option>
                          <option value="PS">Palestinian Territory</option>
                          <option value="PA">Panama</option>
                          <option value="PG">Papua New Guinea</option>
                          <option value="PY">Paraguay</option>
                          <option value="PE">Peru</option>
                          <option value="PH">Philippines</option>
                          <option value="PN">Pitcairn</option>
                          <option value="PL">Poland</option>
                          <option value="PT">Portugal</option>
                          <option value="PR">Puerto Rico</option>
                          <option value="QA">Qatar</option>
                          <option value="CG">Republic of the Congo</option>
                          <option value="RE">Reunion</option>
                          <option value="RO">Romania</option>
                          <option value="RU">Russia</option>
                          <option value="RW">Rwanda</option>
                          <option value="BL">Saint Barthelemy</option>
                          <option value="SH">Saint Helena</option>
                          <option value="KN">Saint Kitts and Nevis</option>
                          <option value="LC">Saint Lucia</option>
                          <option value="MF">Saint Martin</option>
                          <option value="PM">Saint Pierre and Miquelon</option>
                          <option value="VC">Saint Vincent and the Grenadines</option>
                          <option value="WS">Samoa</option>
                          <option value="SM">San Marino</option>
                          <option value="ST">Sao Tome and Principe</option>
                          <option value="SA">Saudi Arabia</option>
                          <option value="SN">Senegal</option>
                          <option value="RS">Serbia</option>
                          <option value="SC">Seychelles</option>
                          <option value="SL">Sierra Leone</option>
                          <option value="SG">Singapore</option>
                          <option value="SX">Sint Maarten</option>
                          <option value="SK">Slovakia</option>
                          <option value="SI">Slovenia</option>
                          <option value="SB">Solomon Islands</option>
                          <option value="SO">Somalia</option>
                          <option value="ZA">South Africa</option>
                          <option value="GS">South Georgia and the South Sandwich Islands</option>
                          <option value="KR">South Korea</option>
                          <option value="SS">South Sudan</option>
                          <option value="ES">Spain</option>
                          <option value="LK">Sri Lanka</option>
                          <option value="SD">Sudan</option>
                          <option value="SR">Suriname</option>
                          <option value="SJ">Svalbard and Jan Mayen</option>
                          <option value="SE">Sweden</option>
                          <option value="CH">Switzerland</option>
                          <option value="SY">Syria</option>
                          <option value="TW">Taiwan</option>
                          <option value="TJ">Tajikistan</option>
                          <option value="TZ">Tanzania</option>
                          <option value="TH">Thailand</option>
                          <option value="TL">Timor Leste</option>
                          <option value="TG">Togo</option>
                          <option value="TK">Tokelau</option>
                          <option value="TO">Tonga</option>
                          <option value="TT">Trinidad and Tobago</option>
                          <option value="TN">Tunisia</option>
                          <option value="TR">Turkey</option>
                          <option value="TM">Turkmenistan</option>
                          <option value="TC">Turks and Caicos Islands</option>
                          <option value="TV">Tuvalu</option>
                          <option value="VI">U.S. Virgin Islands</option>
                          <option value="UG">Uganda</option>
                          <option value="UA">Ukraine</option>
                          <option value="AE">United Arab Emirates</option>
                          <option value="GB">United Kingdom</option>
                          <option value="US">United States</option>
                          <option value="UM">United States Minor Outlying Islands</option>
                          <option value="UY">Uruguay</option>
                          <option value="UZ">Uzbekistan</option>
                          <option value="VU">Vanuatu</option>
                          <option value="VA">Vatican</option>
                          <option value="VE">Venezuela</option>
                          <option value="VN">Vietnam</option>
                          <option value="WF">Wallis and Futuna</option>
                          <option value="EH">Western Sahara</option>
                          <option value="YE">Yemen</option>
                          <option value="ZM">Zambia</option>
                          <option value="ZW">Zimbabwe</option>
                        </select>
                      </fieldset>
                    </form>
                    <form data-node-type="commerce-checkout-shipping-methods-wrapper" className="w-commerce-commercecheckoutshippingmethodswrapper af-class-checkout-block">
                      <div className="w-commerce-commercecheckoutblockheader af-class-block-header">
                        <h5 className="af-class-no-margin">Shipping Method</h5>
                      </div>
                      <fieldset className="af-class-block-content">
                        <div data-node-type="commerce-checkout-shipping-methods-list" className="w-commerce-commercecheckoutshippingmethodslist af-class-shipping-method-list" data-wf-collection="database.commerceOrder.availableShippingMethods" data-wf-template-id="wf-template-5e8303ddedce1981d53d7dbf000000000042"><label className="w-commerce-commercecheckoutshippingmethoditem af-class-shipping-method"><input type="radio" required name="shipping-method-choice" />
                            <div className="w-commerce-commercecheckoutshippingmethoddescriptionblock">
                              <div className="w-commerce-commerceboldtextblock af-class-field-label" />
                              <div />
                            </div>
                            <div className="af-class-scribble-text af-class-cart-price" />
                          </label></div>
                        <div data-node-type="commerce-checkout-shipping-methods-empty-state" style={{display: 'none'}} className="w-commerce-commercecheckoutshippingmethodsemptystate">
                          <div>No shipping methods are available for the address given.</div>
                        </div>
                      </fieldset>
                    </form>
                    <div className="w-commerce-commercecheckoutpaymentinfowrapper af-class-checkout-block">
                      <div className="w-commerce-commercecheckoutblockheader af-class-block-header">
                        <h5 className="af-class-no-margin">Payment Info</h5>
                        <div>* Required</div>
                      </div>
                      <fieldset className="w-commerce-commercecheckoutblockcontent af-class-block-content"><label className="w-commerce-commercecheckoutlabel af-class-field-label">Card Number *</label>
                        <div data-wf-stripe-element-type="cardNumber" data-wf-style-map="{}" style={{position: 'relative'}} className="w-commerce-commercecheckoutcardnumber af-class-form-field af-class-checkout-field">
                          <div />
                          <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0}} />
                        </div>
                        <div className="af-class-payment-logos-sideflex">
                          <div className="af-class-payment-trustmark-wrap"><img src="images/paypal.svg" alt className="af-class-trustmark-image" /></div>
                          <div className="af-class-payment-trustmark-wrap af-class-powered-by"><img src="images/Stripe_Logo_revised_2016.svg" alt className="af-class-trustmark-image" /></div>
                          <div className="af-class-payment-trustmark-wrap"><img src="images/Visa_2014_logo_detail.svg" alt className="af-class-trustmark-image af-class-smaller" /></div>
                          <div className="af-class-payment-trustmark-wrap"><img src="images/mc_symbol.svg" alt className="af-class-trustmark-image" /></div>
                          <div className="af-class-payment-trustmark-wrap af-class-big-trustmark"><img src="images/download.svg" width={47} alt className="af-class-trustmark-image af-class-big" /></div>
                        </div>
                        <div className="w-commerce-commercecheckoutrow">
                          <div className="w-commerce-commercecheckoutcolumn"><label className="w-commerce-commercecheckoutlabel af-class-field-label">Expiration Date *</label>
                            <div data-wf-stripe-element-type="cardExpiry" data-wf-style-map="{}" style={{position: 'relative'}} className="w-commerce-commercecheckoutcardexpirationdate af-class-form-field af-class-checkout-field">
                              <div />
                              <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0}} />
                            </div>
                          </div>
                          <div className="w-commerce-commercecheckoutcolumn"><label className="w-commerce-commercecheckoutlabel af-class-field-label">Security Code *</label>
                            <div data-wf-stripe-element-type="cardCvc" data-wf-style-map="{}" style={{position: 'relative'}} className="w-commerce-commercecheckoutcardsecuritycode af-class-form-field af-class-checkout-field">
                              <div />
                              <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0}} />
                            </div>
                          </div>
                        </div>
                        <div className="w-commerce-commercecheckoutbillingaddresstogglewrapper"><input type="checkbox" id="billing-address-toggle" data-node-type="commerce-checkout-billing-address-toggle-checkbox" className="w-commerce-commercecheckoutbillingaddresstogglecheckbox" defaultChecked /><label htmlFor="billing-address-toggle" className="w-commerce-commercecheckoutbillingaddresstogglelabel">Billing address same as shipping</label></div>
                      </fieldset>
                    </div>
                    <form data-node-type="commerce-checkout-billing-address-wrapper" style={{display: 'none'}} className="w-commerce-commercecheckoutbillingaddresswrapper af-class-checkout-block">
                      <div className="w-commerce-commercecheckoutblockheader af-class-block-header">
                        <h5 className="af-class-no-margin">Billing Address</h5>
                        <div>* Required</div>
                      </div>
                      <fieldset className="w-commerce-commercecheckoutblockcontent af-class-block-content"><label className="w-commerce-commercecheckoutlabel af-class-field-label">Full Name *</label><input type="text" className="w-commerce-commercecheckoutbillingfullname af-class-form-field af-class-checkout-field" name="name" required /><label className="w-commerce-commercecheckoutlabel af-class-field-label">Street Address *</label><input type="text" className="w-commerce-commercecheckoutbillingstreetaddress af-class-form-field af-class-checkout-field" name="address_line1" required /><input type="text" className="w-commerce-commercecheckoutbillingstreetaddressoptional af-class-form-field af-class-checkout-field" name="address_line2" />
                        <div className="w-commerce-commercecheckoutrow">
                          <div className="w-commerce-commercecheckoutcolumn"><label className="w-commerce-commercecheckoutlabel af-class-field-label">City *</label><input type="text" className="w-commerce-commercecheckoutbillingcity af-class-form-field af-class-checkout-field" name="address_city" required /></div>
                          <div className="w-commerce-commercecheckoutcolumn"><label className="w-commerce-commercecheckoutlabel af-class-field-label">State/Province</label><input type="text" className="w-commerce-commercecheckoutbillingstateprovince af-class-form-field af-class-checkout-field" name="address_state" /></div>
                          <div className="w-commerce-commercecheckoutcolumn"><label className="w-commerce-commercecheckoutlabel af-class-field-label">Zip/Postal Code *</label><input type="text" data-node-type="commerce-checkout-billing-zip-field" className="w-commerce-commercecheckoutbillingzippostalcode af-class-form-field af-class-checkout-field" name="address_zip" required /></div>
                        </div><label className="w-commerce-commercecheckoutlabel af-class-field-label">Country *</label><select className="w-commerce-commercecheckoutbillingcountryselector af-class-selector" name="address_country">
                          <option value="AF">Afghanistan</option>
                          <option value="AX">Aland Islands</option>
                          <option value="AL">Albania</option>
                          <option value="DZ">Algeria</option>
                          <option value="AS">American Samoa</option>
                          <option value="AD">Andorra</option>
                          <option value="AO">Angola</option>
                          <option value="AI">Anguilla</option>
                          <option value="AG">Antigua and Barbuda</option>
                          <option value="AR">Argentina</option>
                          <option value="AM">Armenia</option>
                          <option value="AW">Aruba</option>
                          <option value="AU">Australia</option>
                          <option value="AT">Austria</option>
                          <option value="AZ">Azerbaijan</option>
                          <option value="BS">Bahamas</option>
                          <option value="BH">Bahrain</option>
                          <option value="BD">Bangladesh</option>
                          <option value="BB">Barbados</option>
                          <option value="BY">Belarus</option>
                          <option value="BE">Belgium</option>
                          <option value="BZ">Belize</option>
                          <option value="BJ">Benin</option>
                          <option value="BM">Bermuda</option>
                          <option value="BT">Bhutan</option>
                          <option value="BO">Bolivia</option>
                          <option value="BQ">Bonaire, Saint Eustatius and Saba</option>
                          <option value="BA">Bosnia and Herzegovina</option>
                          <option value="BW">Botswana</option>
                          <option value="BR">Brazil</option>
                          <option value="IO">British Indian Ocean Territory</option>
                          <option value="VG">British Virgin Islands</option>
                          <option value="BN">Brunei</option>
                          <option value="BG">Bulgaria</option>
                          <option value="BF">Burkina Faso</option>
                          <option value="BI">Burundi</option>
                          <option value="CV">Cabo Verde</option>
                          <option value="KH">Cambodia</option>
                          <option value="CM">Cameroon</option>
                          <option value="CA">Canada</option>
                          <option value="KY">Cayman Islands</option>
                          <option value="CF">Central African Republic</option>
                          <option value="TD">Chad</option>
                          <option value="CL">Chile</option>
                          <option value="CN">China</option>
                          <option value="CX">Christmas Island</option>
                          <option value="CC">Cocos Islands</option>
                          <option value="CO">Colombia</option>
                          <option value="KM">Comoros</option>
                          <option value="CK">Cook Islands</option>
                          <option value="CR">Costa Rica</option>
                          <option value="HR">Croatia</option>
                          <option value="CU">Cuba</option>
                          <option value="CW">Curacao</option>
                          <option value="CY">Cyprus</option>
                          <option value="CZ">Czechia</option>
                          <option value="CD">Democratic Republic of the Congo</option>
                          <option value="DK">Denmark</option>
                          <option value="DJ">Djibouti</option>
                          <option value="DM">Dominica</option>
                          <option value="DO">Dominican Republic</option>
                          <option value="EC">Ecuador</option>
                          <option value="EG">Egypt</option>
                          <option value="SV">El Salvador</option>
                          <option value="GQ">Equatorial Guinea</option>
                          <option value="ER">Eritrea</option>
                          <option value="EE">Estonia</option>
                          <option value="SZ">Eswatini</option>
                          <option value="ET">Ethiopia</option>
                          <option value="FK">Falkland Islands</option>
                          <option value="FO">Faroe Islands</option>
                          <option value="FJ">Fiji</option>
                          <option value="FI">Finland</option>
                          <option value="FR">France</option>
                          <option value="GF">French Guiana</option>
                          <option value="PF">French Polynesia</option>
                          <option value="TF">French Southern Territories</option>
                          <option value="GA">Gabon</option>
                          <option value="GM">Gambia</option>
                          <option value="GE">Georgia</option>
                          <option value="DE">Germany</option>
                          <option value="GH">Ghana</option>
                          <option value="GI">Gibraltar</option>
                          <option value="GR">Greece</option>
                          <option value="GL">Greenland</option>
                          <option value="GD">Grenada</option>
                          <option value="GP">Guadeloupe</option>
                          <option value="GU">Guam</option>
                          <option value="GT">Guatemala</option>
                          <option value="GG">Guernsey</option>
                          <option value="GN">Guinea</option>
                          <option value="GW">Guinea-Bissau</option>
                          <option value="GY">Guyana</option>
                          <option value="HT">Haiti</option>
                          <option value="HN">Honduras</option>
                          <option value="HK">Hong Kong</option>
                          <option value="HU">Hungary</option>
                          <option value="IS">Iceland</option>
                          <option value="IN">India</option>
                          <option value="ID">Indonesia</option>
                          <option value="IR">Iran</option>
                          <option value="IQ">Iraq</option>
                          <option value="IE">Ireland</option>
                          <option value="IM">Isle of Man</option>
                          <option value="IL">Israel</option>
                          <option value="IT">Italy</option>
                          <option value="CI">Ivory Coast</option>
                          <option value="JM">Jamaica</option>
                          <option value="JP">Japan</option>
                          <option value="JE">Jersey</option>
                          <option value="JO">Jordan</option>
                          <option value="KZ">Kazakhstan</option>
                          <option value="KE">Kenya</option>
                          <option value="KI">Kiribati</option>
                          <option value="XK">Kosovo</option>
                          <option value="KW">Kuwait</option>
                          <option value="KG">Kyrgyzstan</option>
                          <option value="LA">Laos</option>
                          <option value="LV">Latvia</option>
                          <option value="LB">Lebanon</option>
                          <option value="LS">Lesotho</option>
                          <option value="LR">Liberia</option>
                          <option value="LY">Libya</option>
                          <option value="LI">Liechtenstein</option>
                          <option value="LT">Lithuania</option>
                          <option value="LU">Luxembourg</option>
                          <option value="MO">Macao</option>
                          <option value="MG">Madagascar</option>
                          <option value="MW">Malawi</option>
                          <option value="MY">Malaysia</option>
                          <option value="MV">Maldives</option>
                          <option value="ML">Mali</option>
                          <option value="MT">Malta</option>
                          <option value="MH">Marshall Islands</option>
                          <option value="MQ">Martinique</option>
                          <option value="MR">Mauritania</option>
                          <option value="MU">Mauritius</option>
                          <option value="YT">Mayotte</option>
                          <option value="MX">Mexico</option>
                          <option value="FM">Micronesia</option>
                          <option value="MD">Moldova</option>
                          <option value="MC">Monaco</option>
                          <option value="MN">Mongolia</option>
                          <option value="ME">Montenegro</option>
                          <option value="MS">Montserrat</option>
                          <option value="MA">Morocco</option>
                          <option value="MZ">Mozambique</option>
                          <option value="MM">Myanmar</option>
                          <option value="NA">Namibia</option>
                          <option value="NR">Nauru</option>
                          <option value="NP">Nepal</option>
                          <option value="NL">Netherlands</option>
                          <option value="NC">New Caledonia</option>
                          <option value="NZ">New Zealand</option>
                          <option value="NI">Nicaragua</option>
                          <option value="NE">Niger</option>
                          <option value="NG">Nigeria</option>
                          <option value="NU">Niue</option>
                          <option value="NF">Norfolk Island</option>
                          <option value="KP">North Korea</option>
                          <option value="MK">North Macedonia</option>
                          <option value="MP">Northern Mariana Islands</option>
                          <option value="NO">Norway</option>
                          <option value="OM">Oman</option>
                          <option value="PK">Pakistan</option>
                          <option value="PW">Palau</option>
                          <option value="PS">Palestinian Territory</option>
                          <option value="PA">Panama</option>
                          <option value="PG">Papua New Guinea</option>
                          <option value="PY">Paraguay</option>
                          <option value="PE">Peru</option>
                          <option value="PH">Philippines</option>
                          <option value="PN">Pitcairn</option>
                          <option value="PL">Poland</option>
                          <option value="PT">Portugal</option>
                          <option value="PR">Puerto Rico</option>
                          <option value="QA">Qatar</option>
                          <option value="CG">Republic of the Congo</option>
                          <option value="RE">Reunion</option>
                          <option value="RO">Romania</option>
                          <option value="RU">Russia</option>
                          <option value="RW">Rwanda</option>
                          <option value="BL">Saint Barthelemy</option>
                          <option value="SH">Saint Helena</option>
                          <option value="KN">Saint Kitts and Nevis</option>
                          <option value="LC">Saint Lucia</option>
                          <option value="MF">Saint Martin</option>
                          <option value="PM">Saint Pierre and Miquelon</option>
                          <option value="VC">Saint Vincent and the Grenadines</option>
                          <option value="WS">Samoa</option>
                          <option value="SM">San Marino</option>
                          <option value="ST">Sao Tome and Principe</option>
                          <option value="SA">Saudi Arabia</option>
                          <option value="SN">Senegal</option>
                          <option value="RS">Serbia</option>
                          <option value="SC">Seychelles</option>
                          <option value="SL">Sierra Leone</option>
                          <option value="SG">Singapore</option>
                          <option value="SX">Sint Maarten</option>
                          <option value="SK">Slovakia</option>
                          <option value="SI">Slovenia</option>
                          <option value="SB">Solomon Islands</option>
                          <option value="SO">Somalia</option>
                          <option value="ZA">South Africa</option>
                          <option value="GS">South Georgia and the South Sandwich Islands</option>
                          <option value="KR">South Korea</option>
                          <option value="SS">South Sudan</option>
                          <option value="ES">Spain</option>
                          <option value="LK">Sri Lanka</option>
                          <option value="SD">Sudan</option>
                          <option value="SR">Suriname</option>
                          <option value="SJ">Svalbard and Jan Mayen</option>
                          <option value="SE">Sweden</option>
                          <option value="CH">Switzerland</option>
                          <option value="SY">Syria</option>
                          <option value="TW">Taiwan</option>
                          <option value="TJ">Tajikistan</option>
                          <option value="TZ">Tanzania</option>
                          <option value="TH">Thailand</option>
                          <option value="TL">Timor Leste</option>
                          <option value="TG">Togo</option>
                          <option value="TK">Tokelau</option>
                          <option value="TO">Tonga</option>
                          <option value="TT">Trinidad and Tobago</option>
                          <option value="TN">Tunisia</option>
                          <option value="TR">Turkey</option>
                          <option value="TM">Turkmenistan</option>
                          <option value="TC">Turks and Caicos Islands</option>
                          <option value="TV">Tuvalu</option>
                          <option value="VI">U.S. Virgin Islands</option>
                          <option value="UG">Uganda</option>
                          <option value="UA">Ukraine</option>
                          <option value="AE">United Arab Emirates</option>
                          <option value="GB">United Kingdom</option>
                          <option selected value="US">United States</option>
                          <option value="UM">United States Minor Outlying Islands</option>
                          <option value="UY">Uruguay</option>
                          <option value="UZ">Uzbekistan</option>
                          <option value="VU">Vanuatu</option>
                          <option value="VA">Vatican</option>
                          <option value="VE">Venezuela</option>
                          <option value="VN">Vietnam</option>
                          <option value="WF">Wallis and Futuna</option>
                          <option value="EH">Western Sahara</option>
                          <option value="YE">Yemen</option>
                          <option value="ZM">Zambia</option>
                          <option value="ZW">Zimbabwe</option>
                        </select>
                      </fieldset>
                    </form>
                    <form data-node-type="commerce-checkout-discount-form" className="w-commerce-commercecheckoutdiscounts af-class-checkout-block"><label className="w-commerce-commercecheckoutdiscountslabel af-class-field-label">Discount Code</label><input type="text" data-node-type="commerce-checkout-discount-input" className="w-commerce-commercecheckoutdiscountsinput af-class-form-field af-class-checkout-field w-input" maxLength={256} name="field" data-name="field" placeholder id="field" /><button className="w-commerce-commercecheckoutdiscountsbutton af-class-button af-class-discount">Apply</button></form>
                  </div>
                  <div className="w-commerce-commercelayoutsidebar af-class-sticky-form">
                    <div className="w-commerce-commercecheckoutorderitemswrapper af-class-checkout-block">
                      <div className="w-commerce-commercecheckoutsummaryblockheader af-class-block-header">
                        <h5 className="af-class-no-margin">Items in Order</h5>
                      </div>
                      <fieldset className="w-commerce-commercecheckoutblockcontent af-class-block-content">
                        <div className="w-commerce-commercecheckoutorderitemslist" data-wf-collection="database.commerceOrder.userItems" data-wf-template-id="wf-template-5e8303ddedce1981d53d7dbf000000000086" />
                      </fieldset>
                    </div>
                    <div className="w-commerce-commercecheckoutordersummarywrapper af-class-checkout-block">
                      <div className="w-commerce-commercecheckoutsummaryblockheader af-class-block-header">
                        <h5 className="af-class-no-margin">Order Summary</h5>
                      </div>
                      <fieldset className="w-commerce-commercecheckoutblockcontent af-class-block-content">
                        <div className="w-commerce-commercecheckoutsummarylineitem">
                          <div>Subtotal</div>
                          <div className="af-class-scribble-text af-class-cart-price" />
                        </div>
                        <div className="w-commerce-commercecheckoutordersummaryextraitemslist" data-wf-collection="database.commerceOrder.extraItems" data-wf-template-id="wf-template-5e8303ddedce1981d53d7dbf0000000000a0">
                          <div className="w-commerce-commercecheckoutordersummaryextraitemslistitem">
                            <div />
                            <div className="af-class-scribble-text af-class-shipping-price" />
                          </div>
                        </div>
                        <div className="w-commerce-commercecheckoutsummarylineitem">
                          <div>Total</div>
                          <div className="w-commerce-commercecheckoutsummarytotal af-class-scribble-text af-class-cart-price" />
                        </div>
                      </fieldset>
                    </div>
                    <a href="#" value="Place Order" data-node-type="commerce-checkout-place-order-button" className="w-commerce-commercecheckoutplaceorderbutton af-class-button" data-loading-text="Placing Order...">Place Order</a>
                    <div data-node-type="commerce-checkout-error-state" style={{display: 'none'}} className="w-commerce-commercecheckouterrorstate">
                      <div className="w-checkout-error-msg" data-w-info-error="There was an error processing your customer info.  Please try again, or contact us if you continue to have problems." data-w-shipping-error="Sorry. We can’t ship your order to the address provided." data-w-billing-error="Your payment could not be completed with the payment information provided.  Please make sure that your card and billing address information is correct, or try a different payment card, to complete this order.  Contact us if you continue to have problems." data-w-payment-error="There was an error processing your payment.  Please try again, or contact us if you continue to have problems." data-w-pricing-error="The prices of one or more items in your cart have changed. Please refresh this page and try again." data-w-minimum-error="The order minimum was not met. Add more items to your cart to continue." data-w-extras-error="A merchant setting has changed that impacts your cart. Please refresh and try again." data-w-product-error="One or more of the products in your cart have been removed. Please refresh the page and try again." data-w-invalid-discount-error="This discount is invalid." data-w-expired-discount-error="This discount is no longer available." data-w-usage-reached-discount-error="This discount is no longer available." data-w-requirements-not-met-error="Your order does not meet the requirements for this discount.">There was an error processing your customer info. Please try again, or contact us if you continue to have problems.</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="af-class-section af-class-footer-section af-class-wf-section">
                <div className="af-class-container af-class-footer-container">
                  <div id="w-node-_1d6466da-e94d-115c-c97d-71e22c54b454-2c54b452" className="af-class-column">
                    <a href="#" className="af-class-footer-brand w-nav-brand"><img src="images/Black.svg" alt className="af-class-brand-logo" /></a>
                  </div>
                  <div id="w-node-_1d6466da-e94d-115c-c97d-71e22c54b461-2c54b452" className="af-class-column">
                    <div className="af-class-label af-class-footer-label">Contact</div>
                    <a href="mailto:test@testemail.com" className="af-class-footer-contact-link">contact@fitnesso.com</a>
                    <div className="af-class-_30px-spacer" />
                    <div className="af-class-label af-class-footer-label">Licencing</div>
                    <a href="https://www.flow.ninja/" target="_blank" className="af-class-footer-link">Copyright Flow Ninja</a>
                    <a href="https://webflow.com/" target="_blank" className="af-class-footer-link">Powered By Webflow</a>
                    <a href="licencing.html" className="af-class-footer-link">Licencing</a>
                    <a href="#" className="af-class-footer-link">Support</a>
                  </div>
                  <div id="w-node-_1d6466da-e94d-115c-c97d-71e22c54b46f-2c54b452" className="af-class-column">
                    <div className="af-class-label af-class-footer-label">Explore</div>
                    <a href="shop.html" className="af-class-footer-link">Premium Courses</a>
                    <a href="free-workouts.html" className="af-class-footer-link">Free Courses</a>
                    <a href="blog.html" className="af-class-footer-link">Blog</a>
                    <a href="about.html" className="af-class-footer-link">About</a>
                    <a href="contact.html" className="af-class-footer-link">Contact</a>
                    <a href="brand-guidelines/style-guide.html" className="af-class-footer-link">Style Guide</a>
                  </div>
                </div>
                <div className="af-class-container af-class-payment-logos">
                  <div className="af-class-payment-trustmark-wrap"><img src="images/paypal.svg" alt className="af-class-trustmark-image" /></div>
                  <div className="af-class-payment-trustmark-wrap af-class-powered-by"><img src="images/Stripe_Logo_revised_2016.svg" alt className="af-class-trustmark-image" /></div>
                  <div className="af-class-payment-trustmark-wrap"><img src="images/Visa_2014_logo_detail.svg" alt className="af-class-trustmark-image af-class-smaller" /></div>
                  <div className="af-class-payment-trustmark-wrap"><img src="images/mc_symbol.svg" alt className="af-class-trustmark-image" /></div>
                  <div className="af-class-payment-trustmark-wrap af-class-big-trustmark"><img src="images/download.svg" width={47} alt className="af-class-trustmark-image af-class-big" /></div>
                </div>
              </div>
            </div>
            {/* [if lte IE 9]><![endif] */}
            <style dangerouslySetInnerHTML={{__html: "\n.af-view{\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n" }} />
          </div>
        </span>
      </span>
    )
  }
}

export default CheckoutView

/* eslint-enable */