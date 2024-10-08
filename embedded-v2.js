;(function ($) {
  // 動態添加 Google 字體連結
  var googleFontLink = document.createElement("link");
  googleFontLink.rel = "preconnect";
  googleFontLink.href = "https://fonts.googleapis.com";
  document.head.appendChild(googleFontLink);

  var googleFontLink2 = document.createElement("link");
  googleFontLink2.rel = "preconnect";
  googleFontLink2.href = "https://fonts.gstatic.com";
  googleFontLink2.crossorigin = "anonymous";
  document.head.appendChild(googleFontLink2);

  var googleFontLink3 = document.createElement("link");
  googleFontLink3.rel = "stylesheet";
  googleFontLink3.href =
    "https://fonts.googleapis.com/css2?family=Chocolate+Classical+Sans&family=Figtree:ital,wght@0,300..900;1,300..900&family=Noto+Sans+TC:wght@100..900&display=swap";
  document.head.appendChild(googleFontLink3);

  // 動態添加 Bootstrap Bundle
  var bootstrapScript = document.createElement("script");
  bootstrapScript.src =
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";
  bootstrapScript.crossorigin = "anonymous";
  document.head.appendChild(bootstrapScript);

  bootstrapScript.onload = function () {
    // 動態添加 Bootstrap scoped CSS
    var bootstrapScopedStyle = document.createElement("style");
    bootstrapScopedStyle.id = -"embedded-ad-bootstrap-scoped";
    document.head.appendChild(bootstrapScopedStyle);
    // 動態添加自定 CSS
    var customCSS = document.createElement("style");
    customCSS.type = "text/css";
    customCSS.innerHTML = `:root {
  --inf-embedded-ad-font-9: 9px;
  --inf-embedded-ad-font-8: 8px;
  --inf-embedded-ad-font-12: 12px;
  --inf-embedded-ad-font-13: 13px;
  --inf-embedded-ad-font-14: 14px;
  --inf-embedded-ad-font-15: 15px;
  --inf-embedded-ad-font-16: 16px;
  --inf-embedded-ad-font-18: 18px;
  --inf-embedded-ad-font-21: 21px;
  --inf-embedded-ad-font-custom: 15px;
  --inf-embedded-ad-radius-8: 8px;
  --inf-embedded-ad-dark-yellow: rgba(59, 59, 50, 1);
  --inf-embedded-ad-dark-gray: #3B3B32;
  --inf-embedded-ad-dark-red: #EB7454;
  --inf-embedded-ad-light-gray: rgba(59, 59, 50, 0.30);
}

.embeddedAdContainer {
  padding: 24px;
  margin: 0 auto;
  width: 100%;
  display: none;
}
@media (min-width: 768px) {
  .embeddedAdContainer {
    padding: 32px 36px;
  }
}
.embeddedAdContainer p,
.embeddedAdContainer h3 {
  margin: 0;
  padding: 0;
}
.embeddedAdContainer a {
  text-decoration: none !important;
  color: inherit;
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  font-weight: normal;
  font-style: normal;
  display: inline;
}
.embeddedAdContainer a:hover,
.embeddedAdContainer a:visited,
.embeddedAdContainer a:link,
.embeddedAdContainer a:active {
  text-decoration: none;
}
.embeddedAdContainer a:focus {
  outline: none;
}
.embeddedAdContainer .embeddedAdContainer__title {
  font-family: "Chocolate Classical Sans", "Figtree", sans-serif;
  text-align: center;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #000;
  font-size: var(--inf-embedded-ad-font-16);
  letter-spacing: 1.6px;
  margin-bottom: 24px;
}
@media (min-width: 768px) {
  .embeddedAdContainer .embeddedAdContainer__title {
    color: var(--inf-embedded-ad-dark-yellow), var(--inf-embedded-ad-dark-gray);
    font-size: var(--inf-embedded-ad-font-21);
    letter-spacing: 26px;
    letter-spacing: 0.84px;
    font-weight: 500;
    margin-bottom: 24px;
  }
}
.embeddedAdContainer .embeddedAdImgContainer {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  gap: 32px 24px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
}
@media (min-width: 768px) {
  .embeddedAdContainer .embeddedAdImgContainer {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: no-wrap;
        flex-wrap: no-wrap;
    gap: 0 48px;
    width: 100%;
    height: 100%;
    -ms-flex-pack: center;
        justify-content: center;
    width: 100%;
    margin: 0 auto;
    max-width: 951px;
    overflow: visible;
  }
}
@media (min-width: 768px) {
  .embeddedAdContainer .embeddedAdImgContainer .slick-prev,
  .embeddedAdContainer .embeddedAdImgContainer .slick-next {
    width: 24px;
    height: 24px;
  }
  .embeddedAdContainer .embeddedAdImgContainer .slick-slide,
  .embeddedAdContainer .embeddedAdImgContainer .slick-slider .slick-track,
  .embeddedAdContainer .embeddedAdImgContainer .slick-slider .slick-list {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-perspective: 1000;
    -ms-perspective: 1000;
    perspective: 1000;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  .embeddedAdContainer .embeddedAdImgContainer .slick-prev:before,
  .embeddedAdContainer .embeddedAdImgContainer .slick-prev {
    top: 45%;
    left: -32px;
  }
  .embeddedAdContainer .embeddedAdImgContainer .slick-next:before,
  .embeddedAdContainer .embeddedAdImgContainer .slick-next {
    top: 45%;
    right: -32px;
  }
}
.embeddedAdContainer .embeddedAdImgContainer .slick-slider {
  position: relative;
  display: block;
  box-sizing: border-box;
  touch-action: auto;
  -ms-touch-action: auto;
}
.embeddedAdContainer .embeddedAdImgContainer .embeddedItem {
  cursor: pointer;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
      flex-direction: column;
  width: 100%;
  -ms-flex-pack: center;
      justify-content: center;
  -ms-flex-align: center;
      align-items: center;
  row-gap: 12px;
  padding: 0 12px;
  padding-bottom: 48px;
}
@media (min-width: 768px) {
  .embeddedAdContainer .embeddedAdImgContainer .embeddedItem {
    padding-bottom: 0;
  }
}
.embeddedAdContainer .embeddedAdImgContainer .embeddedItem .embeddedItem__img {
  position: relative;
}
.embeddedAdContainer .embeddedAdImgContainer .embeddedItem .embeddedItem__img .embeddedItem__img--tag {
  position: absolute;
  top: 4px;
  left: 4px;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
      justify-content: center;
  -ms-flex-align: center;
      align-items: center;
  gap: 10px;
}
@media (min-width: 768px) {
  .embeddedAdContainer .embeddedAdImgContainer .embeddedItem .embeddedItem__img .embeddedItem__img--tag {
    top: 8px;
    left: 8px;
  }
}
.embeddedAdContainer .embeddedAdImgContainer .embeddedItem .embeddedItem__img .embeddedItem__img--tag div {
  z-index: 1;
  padding: 3px 4px;
  border-radius: 100px;
  background: rgba(59, 59, 50, 0.14);
  -webkit-backdrop-filter: blur(3.5px);
          backdrop-filter: blur(3.5px);
  -webkit-background-filter: blur(3.5px);
  color: #F3F3EF;
  text-align: center;
  font-family: "Chocolate Classical Sans", "Figtree", sans-serif;
  font-size: var(--inf-embedded-ad-font-8);
  line-height: 11px;
  font-style: normal;
  font-weight: 400;
}
@media (min-width: 768px) {
  .embeddedAdContainer .embeddedAdImgContainer .embeddedItem .embeddedItem__img .embeddedItem__img--tag div {
    padding: 5px 8px;
    font-size: var(--inf-embedded-ad-font-14);
    line-height: 17px;
  }
}
.embeddedAdContainer .embeddedAdImgContainer .embeddedItem .embeddedItem__img .embeddedItem__imgBox {
  width: 100%;
  padding-top: 100%;
  position: relative;
  overflow: hidden;
}
.embeddedAdContainer .embeddedAdImgContainer .embeddedItem .embeddedItem__img img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
  border-radius: var(--inf-embedded-ad-radius-8);
  -webkit-border-radius: var(--inf-embedded-ad-radius-8);
  -moz-border-radius: var(--inf-embedded-ad-radius-8);
  -ms-border-radius: var(--inf-embedded-ad-radius-8);
  -o-border-radius: var(--inf-embedded-ad-radius-8);
}
.embeddedAdContainer .embeddedAdImgContainer .embeddedItem .embeddedItemInfo {
  padding-top: 8px;
  width: 100%;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
      flex-direction: column;
  width: 100%;
  gap: 3px 0;
}
@media (min-width: 768px) {
  .embeddedAdContainer .embeddedAdImgContainer .embeddedItem .embeddedItemInfo {
    padding-top: 12px;
    gap: 6px 0;
  }
}
.embeddedAdContainer .embeddedAdImgContainer .embeddedItem .embeddedItemInfo .embeddedItemInfo__title {
  color: var(--inf-embedded-ad-dark-gray);
  text-align: center;
  font-family: "Noto Sans TC", "Figtree", sans-serif;
  font-size: var(--inf-embedded-ad-font-13);
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.26px;
  overflow: hidden;
  display: -webkit-box;
  display: box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
  box-orient: vertical;
}
@media (min-width: 768px) {
  .embeddedAdContainer .embeddedAdImgContainer .embeddedItem .embeddedItemInfo .embeddedItemInfo__title {
    font-family: "Chocolate Classical Sans", "Figtree", sans-serif;
    // font-size: var(--inf-embedded-ad-font-18);
    font-size: var(--inf-embedded-ad-font-custom);
    font-style: normal;
    line-height: 23px;
    /* 127.778% */
    letter-spacing: 0.36px;
  }
}
.embeddedAdContainer .embeddedAdImgContainer .embeddedItem .embeddedItemInfo .embeddedItemInfo__price--original {
  color: #3B3B32;
  text-align: center;
  font-family: "Figtree", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 17px;
}
@media (min-width: 768px) {
  .embeddedAdContainer .embeddedAdImgContainer .embeddedItem .embeddedItemInfo .embeddedItemInfo__price--original {
    color: #3B3B32;
    text-align: center;
    font-family: "Figtree", sans-serif;
    // font-size: var(--inf-embedded-ad-font-18);
    font-size: var(--inf-embedded-ad-font-custom);
    font-style: normal;
    font-weight: 500;
    line-height: 23px;
  }
}
.embeddedAdContainer .embeddedAdImgContainer .embeddedItem .embeddedItemInfo .embeddedItemInfo__content {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
      justify-content: center;
  -ms-flex-align: baseline;
      align-items: baseline;
}
.embeddedAdContainer .embeddedAdImgContainer .embeddedItem .embeddedItemInfo .embeddedItemInfo__content .embeddedItemInfo__price {
  margin-right: 8px;
  color: var(--inf-embedded-ad-dark-red);
  font-family: "Figtree", sans-serif;
  font-size: var(--inf-embedded-ad-font-12);
  font-style: normal;
  font-weight: 500;
  line-height: 17px;
  /* 141.667% */
}
@media (min-width: 768px) {
  .embeddedAdContainer .embeddedAdImgContainer .embeddedItem .embeddedItemInfo .embeddedItemInfo__content .embeddedItemInfo__price {
    // font-size: var(--inf-embedded-ad-font-18);
    font-size: var(--inf-embedded-ad-font-custom);
    line-height: 23px;
    /* 127.778% */
  }
}
.embeddedAdContainer .embeddedAdImgContainer .embeddedItem .embeddedItemInfo .embeddedItemInfo__content .embeddedItemInfo__price--original {
  color: var(--inf-embedded-ad-light-gray);
  font-family: "Figtree", sans-serif;
  font-size: var(--inf-embedded-ad-font-9);
  font-weight: 500;
  line-height: 14px;
}
@media (min-width: 768px) {
  .embeddedAdContainer .embeddedAdImgContainer .embeddedItem .embeddedItemInfo .embeddedItemInfo__content .embeddedItemInfo__price--original {
    font-size: var(--inf-embedded-ad-font-12);
    line-height: 17px;
  }
}
  `;
    document.head.appendChild(customCSS);
    $("body").css("display", "none");
    $("body").offset(); // 觸發重排
    $("body").css("display", "");

    $(function () {
      console.log("DOM is ready");

      // Fetch the Bootstrap CSS from CDN
      fetch(
        "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      )
        .then((response) => response.text())
        .then((css) => {
          // Scope the Bootstrap CSS to only work under .custom-scope class
          const scopedCSS = css.replace(
            /(^|\})\s*([^{]+)\s*\{/g,
            function (match, p1, p2) {
              // Ignore keyframes and other special rules
              if (p2.startsWith("@") || p2.startsWith(":root")) {
                return match;
              }
              return p1 + "#embedded-ad-container " + p2 + " {";
            }
          );

          // Inject the scoped CSS into the page
          document.getElementById(-"embedded-ad-bootstrap-scoped").textContent =
            scopedCSS;
        });
    });

    $(document).on("click", ".embeddedItem", function () {
      const title = $(this).data("title"); // 取得 data-title 屬性
      const link = $(this).data("link"); // 取得 data-link 屬性

      // 觸發 Google Analytics 的事件追蹤
      gtag("event", "click_embedded_item", {
        send_to: "G-PQQRC09ZPS",
        event_category: "embedded",
        event_label: title,
        event_value: link,
      });
    });
    $(document).on("click", ".a-left", function () {
      // 觸發 Google Analytics 的事件追蹤
      gtag("event", "click_embedded_item", {
        send_to: "G-PQQRC09ZPS",
        event_category: "embedded",
        event_label: "arrow-left",
        event_value: "left",
      });
    });
    $(document).on("click", ".a-right", function () {
      // 觸發 Google Analytics 的事件追蹤
      gtag("event", "click_embedded_item", {
        send_to: "G-PQQRC09ZPS",
        event_category: "embedded",
        event_label: "arrow-right",
        event_value: "right",
      });
    });
    $(window).on("scroll", function () {
      if ($(".embeddedAdImgContainer").hasClass("slick-initialized")) {
        $(".embeddedAdImgContainer").slick("slickPlay"); // 重新啟動自動播放
      }
    });
    const getEmbeddedAds = () => {
      const requestData = {
        Brand: "PME",
        LGVID: "2Zdl1XTfRX3FdvPqGEhs",
        MRID: "",
        recom_num: "12",
      };
      const options = {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
        },
        body: JSON.stringify(requestData),
      };
      fetch(
        "https://gha6kqf5ff.execute-api.ap-northeast-1.amazonaws.com/v0/extension/recom_product",
        options
      )
        .then((response) => response.json())
        .then((response) => {
          let jsonData = response.map((item) => {
            let newItem = Object.assign({}, item);
            newItem.sale_price = item.sale_price
              ? parseInt(item.sale_price.replace(/\D/g, "")).toLocaleString()
              : "";
            newItem.price = parseInt(
              item.price.replace(/\D/g, "")
            ).toLocaleString();
            return newItem;
          });
          if (window.innerWidth > 992) {
            if (jsonData.length >= 6) {
              $(".embeddedAdContainer").show();
              updatePopAd(jsonData);
            }
          } else {
            if (jsonData.length >= 4) {
              $(".embeddedAdContainer").show();
              updatePopAd(jsonData);
            }
          }
        })
        .catch((err) => {
          console.error(err);
        });
    };

    function updatePopAd(images) {
      const items = images
        .map(
          (img) =>
            `
        <a class="embeddedItem slickSlide" href="${
          img.link
        }" target="_blank" data-title="${img.title}" data-link="${img.link}">
            <div class="embeddedItem__img">
            <div class="embeddedItem__imgBox" style="background-color:#efefef;">
                <img src="${img.image_link}" alt="${
              img.description
            }" style="width: 100%; height: 100%; object-fit: cover; filter: brightness(80%);opacity:0.8;">
            </div>
            </div>
            <div class="embeddedItemInfo">
                <h3 class="embeddedItemInfo__title">${img.title}</h3>
                ${
                  img.sale_price
                    ? `<div class="embeddedItemInfo__content">
                    <p class="embeddedItemInfo__price">$${img.sale_price}</p>
                   <p class="embeddedItemInfo__price--original">$${img.price}</p>`
                    : `<p class="embeddedItemInfo__price--original">$${img.price}</p>`
                }
                </div>
            </div>
        </a>
        `
        )
        .join("");
      // const items = fakeData
      //   .map(
      //     (img) =>
      //       `
      //     <a class="embeddedItem slickSlide" href="${img.link})" target="_blank">
      //         <div class="embeddedItem__img">
      //         <div class="embeddedItem__img--tag">
      //             <div>新品搶先價</div>
      //             <div>65折</div>
      //         </div>
      //         <div style="background-color:#efefef;">
      //             <img src="${img.src}" alt="${img.alt}" style="width: 100%; height: 100%; object-fit: cover; filter: brightness(80%);opacity:0.8;">
      //         </div>
      //         </div>
      //         <div class="embeddedItemInfo">
      //             <h3 class="embeddedItemInfo__title">${img.alt}</h3>
      //             <div class="embeddedItemInfo__content">
      //                 <p class="embeddedItemInfo__price">$${img.price}</p>
      //                 <p class="embeddedItemInfo__price--original">$${img.original_price}</p>
      //             </div>
      //         </div>
      //     </a>
      //     `
      //   )
      //   .join("");
      $(".embeddedAdImgContainer").html(items);

      $(".embeddedAdImgContainer").slick({
        // useTransform: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        mobileFirst: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3500,
        dots: false,
        arrows: false,
        useCSS: false,
        responsive: [
          {
            breakpoint: 0,
            settings: {
              rows: 2,
              slidesToShow: 2,
              slidesToScroll: 2,
              pauseOnFocus: false,
              pauseOnHover: false,
              arrows: false,
              dots: false,
              useCSS: false,
              easing: "ease",
              // useTransform: false,
              touchThreshold: 1000,
              speed: 240,
            },
          },
          {
            breakpoint: 768,
            settings: {
              rows: 1,
              slidesToShow: 6,
              slidesToScroll: 6,
              arrows: true,
              prevArrow:
                "<img class='a-left control-c prev slick-prev' src='https://raw.githubusercontent.com/infFITSDevelopment/pop-ad/refs/heads/main/slide-arrow-left.svg'>",
              nextArrow:
                "<img class='a-right control-c next slick-next' src='https://raw.githubusercontent.com/infFITSDevelopment/pop-ad/refs/heads/main/slide-arrow-right.svg'>",
              dots: false,
              useCSS: false,
            },
          },
        ],
      });

      $(".embeddedAdImgContainer").on("touchstart", function () {
        $(".embeddedAdImgContainer").slick("slickPlay");
      });
      $(".embeddedAdImgContainer").on(
        "touchend touchcancel touchmove",
        function () {
          $(this).slick("slickPlay");
        }
      );
      var xCoordStart,
        yCoordStart,
        xSlideTrigger = 10,
        slickElement = $(".embeddedAdImgContainer");

      slickElement.bind("touchstart", function (e) {
        xCoordStart = e.originalEvent.touches[0].clientX;
        yCoordStart = e.originalEvent.touches[0].clientY;
      });

      slickElement.bind("touchend", function (e) {
        var xCoordEnd = e.originalEvent.changedTouches[0].clientX;
        var yCoordEnd = e.originalEvent.changedTouches[0].clientY;

        var deltaX = Math.abs(xCoordEnd - xCoordStart);
        var deltaY = Math.abs(yCoordEnd - yCoordStart);

        if (deltaX > deltaY) {
          // prevent slide while scrolling vertically
          if (xCoordStart > xCoordEnd + xSlideTrigger) {
            slickElement.slick("slickNext");
          } else if (xCoordStart < xCoordEnd + xSlideTrigger) {
            slickElement.slick("slickPrev");
          }
        }
      });
    }

    // console.log("DOM is ready");
    let embeddedContainer = `
        <div class="embeddedAdContainer" id="embedded-ad-container">
        <h3 class="embeddedAdContainer__title">您可能也會喜歡</h3>
        <div class="embeddedAdImgContainer carouselContainer ">
            <!-- ad 內容將由 JavaScript 動態生成 -->
        </div>
      </div>
    `;
    $(".pd-box").after(embeddedContainer);
    getEmbeddedAds();
  };
})(jQuery);
