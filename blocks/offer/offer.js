export default async function decorate(block) {
  console.log("offer component executed successfully");
  const aempublishurl = 'https://publish-p148716-e1519766.adobeaemcloud.com';
  const aemauthorurl = 'https://author-p148716-e1519766.adobeaemcloud.com';
  const cfReq = await fetch("https://author-p148716-e1519766.adobeaemcloud.com/content/dam/british-airways/content-fragment/offers/credit-card-offer/jcr%3Acontent/data/master.json")
  .then((response) => response.json()).then((contentfragment) => {
    console.log("response val {}", contentfragment);
    let offer = {};
    if (contentfragment) {
      offer.ctaButtonText = contentfragment.ctaButtonText;
      offer.ctaRedirectLink = contentfragment.ctaRedirectLink;
      offer.description = contentfragment.description;
      offer.imagePath = contentfragment.imagePath;
      offer.preTitle = contentfragment.preTitle;
      offer.shortDescription = contentfragment.shortDescription;
      offer.title = contentfragment.title;
    }
    return offer;
  });
  console.log("final response {}", cfReq);
  // <div class='banner-content' data-aue-type="reference" data-aue-filter="cf">
  //     <div data-aue-prop="heroImage" data-aue-type="media" class='banner-detail' style="background-image: linear-gradient(90deg,rgba(0,0,0,0.6), rgba(0,0,0,0.1) 80%) ,url(${cfReq.bannerimage});">
  //         <p data-aue-prop="title" data-aue-type="text" class='headline'>${cfReq.title}</p>
  //         <p data-aue-prop="subtitle" data-aue-type="text" class='pretitle'>${cfReq.subtitle}</p>
  //         <p data-aue-prop="detail" data-aue-type="richtext" class='detail'>${cfReq.description}</p>
  //         <p class="button-container"><a data-aue-prop="ctaUrl" data-aue-type="text" href="${cfReq.ctaurl}" title="${cfReq.ctalabel}" class="button">${cfReq.ctalabel}</a></p>
  //     </div>
  // </div>

  block.innerHTML = "<h1>Component Test<h1>";
}
