/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=623f3e31626cbee56c681511").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
]

let Controller

class ShopView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/ShopController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = ShopView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '623f3e31626cbe3bee681535'
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
    const proxies = ShopView.Controller !== ShopView ? transformProxies(this.props.children) : {

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
            <div style={{opacity: 0}} className="af-class-page-wrap">
              <div data-collapse="medium" data-animation="over-right" data-duration={400} data-easing="ease" data-easing2="ease" role="banner" className="af-class-navbar w-nav">
                <div className="af-class-container af-class-nav-container">
                  <a href="index.html" className="af-class-brand w-nav-brand"><img src="images/fracto_logo-removebg-preview.png" width={100} sizes="100px" srcSet="images/fracto_logo-removebg-preview-p-500.png 500w, images/fracto_logo-removebg-preview.png 703w" alt className="af-class-brand-logo" /></a>
                  <div className="af-class-nav-right-wrap">
                    <nav role="navigation" className="af-class-nav-menu w-nav-menu">
                      <a href="about.html" className="af-class-nav-link w-nav-link">Collection</a>
                      <a href="free-workouts.html" className="af-class-nav-link w-nav-link">Resources</a>
                      <a href="shop.html" aria-current="page" className="af-class-nav-link w-nav-link w--current">About</a>
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
              <div className="af-class-section af-class-free-w-hero af-class-wf-section">
                <div className="af-class-container af-class-flex-center">
                  <div className="af-class-hero-image-mask"><img src="images/guillaume-bolduc-hdBaq9W0hRY-unsplash.jpg" sizes="95vw" srcSet="images/guillaume-bolduc-hdBaq9W0hRY-unsplash-p-500.jpeg 500w, images/guillaume-bolduc-hdBaq9W0hRY-unsplash-p-800.jpeg 800w, images/guillaume-bolduc-hdBaq9W0hRY-unsplash-p-1080.jpeg 1080w, images/guillaume-bolduc-hdBaq9W0hRY-unsplash-p-1600.jpeg 1600w, images/guillaume-bolduc-hdBaq9W0hRY-unsplash-p-2000.jpeg 2000w, images/guillaume-bolduc-hdBaq9W0hRY-unsplash.jpg 2255w" alt className="af-class-hero-image" /><img src="images/Group-117.svg" alt className="af-class-free-workout-shape" /></div>
                  <div className="af-class-hero-line af-class-shop-line">
                    <h1 className="af-class-no-margin">Premium Programs</h1>
                  </div>
                </div>
                <div className="af-class-container af-class-shop-container">
                  <div className="af-class-blog-categories">
                    <div className="af-class-label af-class-categories-label">Categories</div>
                    <div className="af-class-categories-sideflex">
                      <a href="shop.html" aria-current="page" className="af-class-button af-class-categories-button w-button w--current">All</a>
                      <div className="w-dyn-list">
                        <div role="list" className="af-class-categories-list w-dyn-items">
                          <div role="listitem" className="w-dyn-item">
                            <a href="#" className="af-class-button af-class-categories-button w-button" />
                          </div>
                        </div>
                        <div className="w-dyn-empty">
                          <div>No items found.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="af-class-products-list-wrapper w-dyn-list">
                    <div role="list" className="af-class-product-list w-dyn-items">
                      <div role="listitem" className="af-class-product-item w-dyn-item">
                        <a href="#" className="af-class-product-card w-inline-block">
                          <div className="af-class-product-image-wrap"><img src alt className="af-class-product-image" /></div>
                          <div className="af-class-product-description">
                            <div>
                              <div className="af-class-label af-class-_15-margin" />
                              <h5 />
                            </div>
                            <div className="af-class-price-wrap">
                              <h6 className="af-class-scribble-text" />
                              <h6 className="af-class-scribble-text af-class-compare-at" />
                            </div>
                            <div className="af-class-link">View</div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="af-class-product-list af-class-no-items w-dyn-empty">
                      <h3>No products added</h3>
                      <div>Please add yout products in the Ecommerce tab.</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="af-class-section af-class-newsletter-section af-class-wf-section">
                <div className="af-class-container">
                  <div className="af-class-newsletter-form w-form">
                    <form id="email-form" name="email-form" data-name="Email Form" method="get" className="af-class-form-content">
                      <h2>Get our free meal plan</h2>
                      <p className="af-class-big-paragraph af-class-max-800">Signup to our newsletter to get a free 30 day meal plan. You will receive all guidance on what to eat, how to cook and how much to eat.</p>
                      <div className="af-class-form-grid"><input type="text" className="af-class-form-field w-input" maxLength={256} name="Full-Name-2" data-name="Full Name 2" placeholder="Full Name" id="Full-Name-2" required /><input type="email" className="af-class-form-field w-input" maxLength={256} name="email-2" data-name="Email 2" placeholder="Email" id="email-2" required /><input type="submit" defaultValue="Signup" data-wait="Please wait..." id="w-node-_3a7d5772-7f47-7fed-e944-7964f45e6597-f45e658c" className="af-class-button w-button" /></div>
                    </form>
                    <div className="af-class-sucess-message w-form-done">
                      <div>Thank you! Your submission has been received!</div>
                    </div>
                    <div className="w-form-fail">
                      <div>Oops! Something went wrong while submitting the form.</div>
                    </div>
                  </div>
                </div><img src="images/logan-weaver-pD5kSwtNgMc-unsplash.jpg" sizes="100vw" srcSet="images/logan-weaver-pD5kSwtNgMc-unsplash-p-500.jpeg 500w, images/logan-weaver-pD5kSwtNgMc-unsplash-p-800.jpeg 800w, images/logan-weaver-pD5kSwtNgMc-unsplash-p-1080.jpeg 1080w, images/logan-weaver-pD5kSwtNgMc-unsplash-p-1600.jpeg 1600w, images/logan-weaver-pD5kSwtNgMc-unsplash-p-2000.jpeg 2000w, images/logan-weaver-pD5kSwtNgMc-unsplash.jpg 2067w" alt className="af-class-section-bg-image af-class-top-align" />
              </div>
              <div data-w-id="417cd7da-3e29-9aa3-1365-ee8b75b4dc84" className="af-class-section af-class-footer-insta af-class-wf-section">
                <div className="af-class-container af-class-insta-container">
                  <div className="af-class-insta-row af-class-row-1">
                    <div className="af-class-insta-post-wrap"><img src="images/derick-mckinney-__QqvTI5Edc-unsplash-1.jpg" sizes="(max-width: 479px) 150px, (max-width: 991px) 200px, 400px" srcSet="images/derick-mckinney-__QqvTI5Edc-unsplash-p-500.jpeg 500w, images/derick-mckinney-__QqvTI5Edc-unsplash-p-800.jpeg 800w, images/derick-mckinney-__QqvTI5Edc-unsplash-p-1080.jpeg 1080w, images/derick-mckinney-__QqvTI5Edc-unsplash-1.jpg 1588w" alt className="af-class-insta-post-image" /></div>
                    <div className="af-class-insta-post-wrap"><img src="images/geert-pieters-3RnkZpDqsEI-unsplash.jpg" sizes="(max-width: 479px) 150px, (max-width: 991px) 200px, 400px" srcSet="images/geert-pieters-3RnkZpDqsEI-unsplash-p-1080.jpeg 1080w, images/geert-pieters-3RnkZpDqsEI-unsplash-p-1600.jpeg 1600w, images/geert-pieters-3RnkZpDqsEI-unsplash-p-2000.jpeg 2000w, images/geert-pieters-3RnkZpDqsEI-unsplash-p-2600.jpeg 2600w, images/geert-pieters-3RnkZpDqsEI-unsplash.jpg 3131w" alt className="af-class-insta-post-image" /></div>
                    <div className="af-class-insta-post-wrap"><img src="images/guillaume-bolduc-cfmBbDcCAQo-unsplash.jpg" sizes="(max-width: 479px) 150px, (max-width: 991px) 200px, 400px" srcSet="images/guillaume-bolduc-cfmBbDcCAQo-unsplash-p-500.jpeg 500w, images/guillaume-bolduc-cfmBbDcCAQo-unsplash-p-800.jpeg 800w, images/guillaume-bolduc-cfmBbDcCAQo-unsplash-p-1080.jpeg 1080w, images/guillaume-bolduc-cfmBbDcCAQo-unsplash-p-2000.jpeg 2000w, images/guillaume-bolduc-cfmBbDcCAQo-unsplash-p-2600.jpeg 2600w, images/guillaume-bolduc-cfmBbDcCAQo-unsplash.jpg 2725w" alt className="af-class-insta-post-image" /></div>
                    <div className="af-class-insta-post-wrap"><img src="images/angelos-michalopoulos-S3Rs0DcvvK0-unsplash.jpg" sizes="(max-width: 479px) 150px, (max-width: 991px) 200px, 400px" srcSet="images/angelos-michalopoulos-S3Rs0DcvvK0-unsplash-p-500.jpeg 500w, images/angelos-michalopoulos-S3Rs0DcvvK0-unsplash-p-800.jpeg 800w, images/angelos-michalopoulos-S3Rs0DcvvK0-unsplash-p-1080.jpeg 1080w, images/angelos-michalopoulos-S3Rs0DcvvK0-unsplash-p-1600.jpeg 1600w, images/angelos-michalopoulos-S3Rs0DcvvK0-unsplash.jpg 1759w" alt className="af-class-insta-post-image" /></div>
                    <div className="af-class-insta-post-wrap"><img src="images/kelly-sikkema-IZOAOjvwhaM-unsplash.jpg" sizes="(max-width: 479px) 150px, (max-width: 991px) 200px, 400px" srcSet="images/kelly-sikkema-IZOAOjvwhaM-unsplash-p-500.jpeg 500w, images/kelly-sikkema-IZOAOjvwhaM-unsplash-p-1080.jpeg 1080w, images/kelly-sikkema-IZOAOjvwhaM-unsplash-p-1600.jpeg 1600w, images/kelly-sikkema-IZOAOjvwhaM-unsplash-p-2000.jpeg 2000w, images/kelly-sikkema-IZOAOjvwhaM-unsplash.jpg 2314w" alt className="af-class-insta-post-image" /></div>
                  </div>
                  <div className="af-class-insta-row af-class-row-2">
                    <div className="af-class-insta-post-wrap"><img src="images/derick-mckinney-__QqvTI5Edc-unsplash-1.jpg" sizes="(max-width: 479px) 150px, (max-width: 991px) 200px, 400px" srcSet="images/derick-mckinney-__QqvTI5Edc-unsplash-p-500.jpeg 500w, images/derick-mckinney-__QqvTI5Edc-unsplash-p-800.jpeg 800w, images/derick-mckinney-__QqvTI5Edc-unsplash-p-1080.jpeg 1080w, images/derick-mckinney-__QqvTI5Edc-unsplash-1.jpg 1588w" alt className="af-class-insta-post-image" /></div>
                    <div className="af-class-insta-post-wrap"><img src="images/derick-mckinney-__QqvTI5Edc-unsplash-1.jpg" sizes="(max-width: 479px) 150px, (max-width: 991px) 200px, 400px" srcSet="images/derick-mckinney-__QqvTI5Edc-unsplash-p-500.jpeg 500w, images/derick-mckinney-__QqvTI5Edc-unsplash-p-800.jpeg 800w, images/derick-mckinney-__QqvTI5Edc-unsplash-p-1080.jpeg 1080w, images/derick-mckinney-__QqvTI5Edc-unsplash-1.jpg 1588w" alt className="af-class-insta-post-image" /></div>
                    <div className="af-class-insta-post-wrap"><img src="images/guillaume-bolduc-zFzR5K2-_xc-unsplash.jpg" sizes="(max-width: 479px) 150px, (max-width: 991px) 200px, 400px" srcSet="images/guillaume-bolduc-zFzR5K2-_xc-unsplash-p-500.jpeg 500w, images/guillaume-bolduc-zFzR5K2-_xc-unsplash-p-800.jpeg 800w, images/guillaume-bolduc-zFzR5K2-_xc-unsplash-p-1080.jpeg 1080w, images/guillaume-bolduc-zFzR5K2-_xc-unsplash-p-1600.jpeg 1600w, images/guillaume-bolduc-zFzR5K2-_xc-unsplash-p-2000.jpeg 2000w, images/guillaume-bolduc-zFzR5K2-_xc-unsplash.jpg 2338w" alt className="af-class-insta-post-image" /></div>
                    <div className="af-class-insta-post-wrap"><img src="images/morgan-petroski-rx6wXNsXUOE-unsplash.jpg" sizes="(max-width: 479px) 150px, (max-width: 991px) 200px, 400px" srcSet="images/morgan-petroski-rx6wXNsXUOE-unsplash-p-500.jpeg 500w, images/morgan-petroski-rx6wXNsXUOE-unsplash-p-800.jpeg 800w, images/morgan-petroski-rx6wXNsXUOE-unsplash-p-1080.jpeg 1080w, images/morgan-petroski-rx6wXNsXUOE-unsplash-p-1600.jpeg 1600w, images/morgan-petroski-rx6wXNsXUOE-unsplash-p-2000.jpeg 2000w, images/morgan-petroski-rx6wXNsXUOE-unsplash-p-2600.jpeg 2600w, images/morgan-petroski-rx6wXNsXUOE-unsplash.jpg 3195w" alt className="af-class-insta-post-image" /></div>
                    <div className="af-class-insta-post-wrap"><img src="images/hipcravo-DC5akQJyH4I-unsplash.jpg" sizes="(max-width: 479px) 150px, (max-width: 991px) 200px, 400px" srcSet="images/hipcravo-DC5akQJyH4I-unsplash-p-500.jpeg 500w, images/hipcravo-DC5akQJyH4I-unsplash-p-800.jpeg 800w, images/hipcravo-DC5akQJyH4I-unsplash-p-1080.jpeg 1080w, images/hipcravo-DC5akQJyH4I-unsplash-p-1600.jpeg 1600w, images/hipcravo-DC5akQJyH4I-unsplash-p-2000.jpeg 2000w, images/hipcravo-DC5akQJyH4I-unsplash-p-2600.jpeg 2600w, images/hipcravo-DC5akQJyH4I-unsplash.jpg 3018w" alt className="af-class-insta-post-image" /></div>
                  </div>
                </div>
                <div className="af-class-insta-section-line">
                  <a href="https://twitter.com/webflow" target="_blank" className="af-class-social-wrap w-inline-block"><img src="images/003-twitter-logo-button.svg" alt className="af-class-social-icon" />
                    <div>@fitnesso</div>
                  </a>
                  <a href="https://www.instagram.com/webflow/" target="_blank" className="af-class-social-wrap af-class-left-social w-inline-block"><img src="images/instagram.svg" alt className="af-class-social-icon" />
                    <div>@fitnesso</div>
                  </a>
                  <a href="https://www.linkedin.com/company/webflow-inc-/" className="af-class-social-wrap w-inline-block"><img src="images/004-linkedin-logo-button.svg" alt className="af-class-social-icon" />
                    <div>Fitnesso</div>
                  </a>
                  <a href="https://www.youtube.com/channel/UCELSb-IYi_d5rYFOxWeOz5g" target="_blank" className="af-class-social-wrap af-class-left-social w-inline-block"><img src="images/youtube.svg" alt className="af-class-social-icon" />
                    <div>/Fitnesso</div>
                  </a>
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
                    <a href="shop.html" aria-current="page" className="af-class-footer-link w--current">Premium Courses</a>
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

export default ShopView

/* eslint-enable */