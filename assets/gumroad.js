(function () {
  "use strict";

  var CHECKOUT = "https://omegagreed.gumroad.com/l/rdfrl";
  var SUBSCRIBE = "https://omegagreed.gumroad.com/subscribe";

  window.OMEGAGREED_GUMROAD = {
    checkout: CHECKOUT,
    subscribe: SUBSCRIBE,
  };

  document.querySelectorAll("[data-gumroad='checkout']").forEach(function (el) {
    el.setAttribute("href", CHECKOUT);
  });

  document.querySelectorAll("[data-gumroad='subscribe']").forEach(function (el) {
    el.setAttribute("href", SUBSCRIBE);
  });
})();
