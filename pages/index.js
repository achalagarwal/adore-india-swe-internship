import Head from 'next/head'
import { useAmp } from 'next/amp'
import Layout from '../components/Layout'

export const config = {
  amp: true,
}

export default function IndexPage() {
  const isAmp = useAmp()

  return (
    <><Layout>
      <Head>
        <meta
          name="amp-script-src"
          content="sha384-hash"
        />
        <title>Adore Test</title>
      </Head>


      <main id="content" role="main" class="main commerce-listing">

        <section class="commerce-listing-content mx-auto flex flex-wrap pb4">

          <div class="col-12 md-col-7 pt2 pb3 md-px4 md-pt1 md-pb7">
            <div
              class="md-commerce-header relative md-flex flex-wrap items-center md-mx0 md-mb2"
              style={{textAlignLast:"center"}}
            >
              <h1 class="h3 mb2 md-mt2 md-mb2 md-ml0 flex-auto px2" style={{ display: "inline-flex", justifyContent:"center" }}>A <span> <div class="h3 mb2 md-mt2 md-mb2 md-ml0 px2" style={{ display: "inline-flex", color:"green" }}>D <span> <div class="h3 mb2 md-mt2 md-mb2 md-ml0 px2" style={{ display: "inline-flex",  color:"orange"  }} >O <span> <div class="h3 mb2 md-mt2 md-mb2 md-ml0 px2" style={{ display: "inline-flex",  color:"hotpink"  }}>R  <span> <div class="h3 mb2 md-mt2 md-mb2 md-ml0 px2" style={{color:"blue"}}>E </div> </span> </div> </span> </div> </span> </div> </span></h1>

            </div>

            <amp-layout
              class="mx1 md-mxn1"
              layout="container"
            >
              <div>
                <div
                  class="commerce-listing-product text-decoration-none inline-block col-6 md-col-4 lg-col-3 px1 mb2 md-mb4 relative"
                >
                  <div class="flex flex-column justify-between">
                    <div>
                      <h2 class="commerce-listing-product-name h6" style={{textAlign: "center"}}> Soothing <b style={{color:"green"}}> Green </b> </h2>
                    </div>
                    <amp-layout style={{ justifyContent: "space-around", alignItems: "center" }}>
                      <amp-script style={{ marginLeft: "auto" }} data-ampdevmode src="/green.js" layout="fixed-height" height="25px">

                        <div class="quantity">
                          <div id="green_decrement" class="quantity__minus"><span>-</span></div>
                          <div id="green_count_display" class="quantity__input" />
                          <div id="green_increment" class="quantity__plus"><span>+</span></div>
                        </div>
                      </amp-script>

                    </amp-layout>
                  </div>
                </div>
                <div
                  class="commerce-listing-product text-decoration-none inline-block col-6 md-col-4 lg-col-3 px1 mb2 md-mb4 relative"
                >
                  <div class="flex flex-column justify-between">
                    <div>
                      <h2 class="commerce-listing-product-name h6" style={{textAlign: "center"}}> Brightly <b style={{color:"orange"}}> Orange </b> </h2>

                      <amp-layout style={{ justifyContent: "space-around", alignItems: "center" }}>
                        <amp-script style={{ marginLeft: "auto" }} data-ampdevmode src="/orange.js" layout="fixed-height" height="25px">

                          <div class="quantity">
                            <div id="orange_decrement" class="quantity__minus"><span>-</span></div>
                            <div id="orange_count_display" class="quantity__input" />
                            <div id="orange_increment" class="quantity__plus"><span>+</span></div>
                          </div>

                        </amp-script>
                      </amp-layout>

                    </div>

                  </div>
                </div>
                <div

                  class="commerce-listing-product text-decoration-none inline-block col-6 md-col-4 lg-col-3 px1 mb2 md-mb4 relative"
                >
                  <div class="flex flex-column justify-between">
                    <div>
                      <h2 class="commerce-listing-product-name h6"style={{textAlign: "center"}} > Royally <b style={{color:"hotpink"}}> Pink </b> </h2>

                      <amp-layout style={{ justifyContent: "space-around", alignItems: "center" }}>
                        <amp-script style={{ marginLeft: "auto" }} data-ampdevmode src="/pink.js" layout="fixed-height" height="25px">
                          <div class="quantity">
                            <div id="pink_decrement" class="quantity__minus"><span>-</span></div>
                            <div id="pink_count_display" class="quantity__input" />
                            <div id="pink_increment" class="quantity__plus"><span>+</span></div>
                          </div>

                        </amp-script>
                      </amp-layout>
                    </div>

                  </div>
                </div>
                <div
                  class="commerce-listing-product text-decoration-none inline-block col-6 md-col-4 lg-col-3 px1 mb2 md-mb4 relative"
                >
                  <div class="flex flex-column justify-between" >
                    <div>

                      <h2 class="commerce-listing-product-name h6" style={{textAlign: "center"}}> Usually <b style={{color:"blue"}}> Blue </b> </h2>
                    </div>
                    <amp-layout style={{ justifyContent: "space-around", alignItems: "center" }}>
                      <amp-script style={{ marginLeft: "auto" }} data-ampdevmode src="/blue.js" layout="fixed-height" height="25px">

                        <div class="quantity">
                          <div id="blue_decrement" class="quantity__minus"><span>-</span></div>
                          <div id="blue_count_display" class="quantity__input" />
                          <div id="blue_increment" class="quantity__plus"><span>+</span></div>
                        </div>
                      </amp-script>
                    </amp-layout>
                  </div>
                </div>
              </div>
            </amp-layout>
          </div>

        </section>
      </main>
    </Layout>
    </>
  )
}
