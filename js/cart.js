var cart = localStorage.getItem("cart1");
function cartUpdate() {
  return new Promise((a) => {
    let t = { loadview: "ajax", module: "cart", smart_action: "update" };
    (t.cart = JSON.parse(localStorage.getItem("cart1"))),
      $.ajax({
        type: "POST",
        url: "/action/cart",
        data: t,
        success: function (t) {
          a(t);
        },
      });
  });
}
function cartDraw() {
  cartCount()
    ? ($(".cartpage .empty").hide(),
      $(".cartpage .cartpage-l").show(),
      $(".cartpage .cartpage-r").show(),
      cartUpdate().then((a) => {
        $(".cartpage .cartpage-l .cart-product-list .cart-product").remove(),
          a.list.forEach((a) => {
            let t =
              '<div class="cart-product flex" data-node="' +
              a.node +
              '">\n                                    <div class="delete">+</div>\n                                    <div class="img" style="background-image:url(' +
              a.image1 +
              ')"></div>\n                                    <div class="content">\n                                        <div class="param sku">\n                                            <span class="k">Артикул: </span>\n                                            <span class="v">' +
              a.sku +
              '</span>\n                                        </div>\n                                        <a href="' +
              a.url +
              '" target="_blank" class="title">' +
              a.title +
              '</a>\n                                        <div class="flex flex-st">\n                                            <div class="param">\n                                                <span class="k">Цена: </span>\n                                                <span class="v price">' +
              formatPrice.format(a.price) +
              ' KZT</span>\n                                            </div>\n                                            <div class="sep">/</div>\n                                            <div class="param flex">\n                                                <span class="k">Количество:</span>\n                                                <div class="count-control flex">\n                                                    <div class="count-decr">-</div>\n                                                    <div class="value">' +
              a.cart_count +
              '</div>\n                                                    <div class="count-incr">+</div>\n                                                </div>\n                                            </div>\n                                            <div class="sep">/</div>\n                                            <div class="param">\n                                                <span class="k">Сумма: </span>\n                                                <span class="v price">' +
              formatPrice.format(a.price * a.cart_count) +
              " KZT</span>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>";
            $(".cartpage .cartpage-l .cart-product-list").append(t);
          }),
          $(".js-price-product").text(formatPrice.format(a.price_product)),
          a.discount_proc > 0
            ? ($(".js-price-product").parents(".v").addClass("through"),
              $(
                ".cartpage .cartpage-r .cart-finish .body .param.promocode-discount .v"
              ).text("-" + a.discount_proc + " %"),
              $(
                ".cartpage .cartpage-r .cart-finish .body .param.promocode-discount"
              ).show())
            : ($(".js-price-product").parents(".v").removeClass("through"),
              $(
                ".cartpage .cartpage-r .cart-finish .body .param.promocode-discount"
              ).hide()),
          $(
            ".cartpage .cartpage-r .cart-finish .body .param.price-final .v"
          ).text(formatPrice.format(a.price_product_discount) + " KZT");
      }))
    : ($(".cartpage .empty").show(),
      $(".cartpage .cartpage-l").hide(),
      $(".cartpage .cartpage-r").hide());
}
function cartCount() {
  let a = 0;
  for (key in cart.list) cart.list.hasOwnProperty(key) && a++;
  return $(".item.cart .count").text(a), a;
}
function showNotification(a) {
  $(".notification .content").html(a), $(".notification").fadeIn();
}
function loaderRun() {
  $(".loader").fadeIn(100);
}
function loaderStop() {
  $(".loader").fadeOut();
}
cart
  ? (cart = JSON.parse(cart))
  : ((cart = {
      list: {},
      maxCountList: {},
      delivery: "pickup",
      payment: "cash",
      person: { name: "", phone: "", email: "", rekv: "", accept: !1 },
    }),
    localStorage.setItem("cart1", JSON.stringify(cart))),
  cartCount(),
  cartDraw(),
  $(document).ready(function () {
    if (
      ($(".js-incart").click(function (a) {
        if ($(this).hasClass("disabled")) a.preventDefault();
        else if ($(this).hasClass("js-incart")) {
          a.preventDefault();
          let t = $(this).data(),
            e = parseInt(t.count),
            c = parseInt(t.maxcount);
          (cart.maxCountList[t.node] = c),
            e > 1
              ? (cart.list[t.node] = e)
              : cart.list[t.node] &&
                cart.list[t.node] < cart.maxCountList[t.node]
              ? cart.list[t.node]++
              : ((cart.list[t.node] = 1), cartCount()),
            localStorage.setItem("cart1", JSON.stringify(cart)),
            $(this).removeClass("js-incart").text("Оформить"),
            goal("inkor");
        }
      }),
      $(document).on("click", ".js-incart:not(.disabled)", function (a) {
        if ($(this).hasClass("disabled")) a.preventDefault();
        else if ($(this).hasClass("js-incart")) {
          a.preventDefault();
          let t = $(this).data(),
            e = parseInt(t.count);
          e > 1
            ? (cart.list[t.node] = e)
            : cart.list[t.node]
            ? cart.list[t.node]++
            : ((cart.list[t.node] = 1), cartCount()),
            localStorage.setItem("cart1", JSON.stringify(cart)),
            $(this).removeClass("js-incart").text("Оформить"),
            goal("inkor");
        }
      }),
      $(".cartpageblock").length && $(window).width() > 1310)
    ) {
      let a = $(".cartpage").offset().top,
        t = $(".cartpage .cartpage-r .cart-finish").height();
      $(window).scroll(function () {
        $(window).scrollTop() > a &&
        $(window).scrollTop() + t < a + $(".cartpage .cartpage-l").height()
          ? $(".cart-finish").addClass("fixed")
          : $(".cart-finish").removeClass("fixed");
      });
    }
    $(".cartpageblock.delivery .radioblock .subradioblock .item").click(
      function () {
        let a = $(this);
        $(a).hasClass("active") ||
          ($(this).addClass("active").siblings().removeClass("active"),
          (cart.deliveryPoint = $(this).text()),
          localStorage.setItem("cart1", JSON.stringify(cart)));
      }
    ),
      $(".cartpageblock.delivery .radioblock").click(function () {
        let a = $(this);
        $(a).hasClass("active") ||
          ($(this).addClass("active").siblings().removeClass("active"),
          (cart.delivery = $(this).data("value")),
          localStorage.setItem("cart1", JSON.stringify(cart)),
          "pickup" == cart.delivery
            ? ($(".cartpageblock.delivery .radioblock .subradioblock").show(),
              $(
                ".cartpageblock.delivery .radioblock .subradioblock .item:first"
              ).click())
            : ($(".cartpageblock.delivery .radioblock .subradioblock").hide(),
              delete cart.deliveryPoint),
          "courier-kz" == cart.delivery
            ? ($(".cartpageblock.payment .cash").fadeOut(100),
              $(".cartpageblock.payment .online").click())
            : $(".cartpageblock.payment .cash").fadeIn(100),
          "courier" == cart.delivery
            ? $(".cartpageblock.payment .cash .title").text(
                "Оплата при получении (Наличные, KaspiPay)"
              )
            : $(".cartpageblock.payment .cash .title").text(
                "Оплата при получении (Наличные, Карта, KaspiPay)"
              )),
          cartDraw();
      }),
      $(".cartpageblock.payment .radioblock").click(function () {
        let a = $(this);
        $(a).hasClass("active") ||
          ($(this).addClass("active").siblings().removeClass("active"),
          (cart.payment = $(this).data("value")),
          localStorage.setItem("cart1", JSON.stringify(cart)),
          "credit" == cart.payment
            ? ($(".cartpage .cartpage-l .cartpageblock .creditline").css(
                "display",
                "flex"
              ),
              $(
                ".cartpage .cartpage-r .cart-finish .body .param.credit"
              ).show(),
              $(
                ".cartpage .cartpage-l .cartpageblock .person input.iin"
              ).show())
            : ($(".cartpage .cartpage-l .cartpageblock .creditline").hide(),
              $(
                ".cartpage .cartpage-r .cart-finish .body .param.credit"
              ).hide(),
              $(
                ".cartpage .cartpage-l .cartpageblock .person input.iin"
              ).hide()));
      }),
      $(".cartpage .creditline .duration .item").click(function () {
        let a = $(this);
        $(a).hasClass("active") ||
          ($(this).addClass("active").siblings().removeClass("active"),
          (cart.creditDuration = $(this).data("value")),
          localStorage.setItem("cart1", JSON.stringify(cart)),
          cartDraw());
      }),
      $(".cartpage .person .checks .item.accept").click(function () {
        cart.person.accept
          ? ((cart.person.accept = !1), $(this).removeClass("active"))
          : ((cart.person.accept = !0), $(this).addClass("active"));
      }),
      $(
        ".cartpage .cartpage-l .cartpageblock .person input, .cartpage .cartpage-l .cartpageblock .person textarea"
      ).keyup(function () {
        let a = $(this).attr("name");
        (cart.person[a] = $(this).val()),
          localStorage.setItem("cart1", JSON.stringify(cart));
      }),
      $(".cartpage .cartpage-r .cart-finish .promocode-inp input").keyup(
        function (a) {
          (cart.promocode = $(this).val()),
            localStorage.setItem("cart1", JSON.stringify(cart)),
            13 == a.which && cartDraw();
        }
      ),
      $(
        ".cartpage .cartpage-r .cart-finish .promocode-inp .promocode-inp-btn"
      ).click(function () {
        cartDraw();
      }),
      $(".cartpageblock").length &&
        ($(
          ".cartpageblock.delivery .radioblock[data-value=" +
            cart.delivery +
            "]"
        ).click(),
        $(
          ".cartpageblock.payment .radioblock[data-value=" + cart.payment + "]"
        ).click(),
        cart.person.subscribe &&
          $(
            ".cartpage .cartpage-l .cartpageblock .person .checks .item.subscribe"
          ).addClass("active"),
        cart.person.accept &&
          $(
            ".cartpage .cartpage-l .cartpageblock .person .checks .item.accept"
          ).addClass("active")),
      $(".cartpage").on("click", ".cart-product .delete", function () {
        let a = $(this).parents(".cart-product").data("node");
        delete cart.list[a],
          localStorage.setItem("cart1", JSON.stringify(cart)),
          cartDraw();
      }),
      $(".cartpage").on("click", ".cart-product .count-incr", function () {
        let a = $(this).parents(".cart-product").data("node"),
          t = cart.maxCountList[a];
        cart.list[a] < t && cart.list[a]++,
          localStorage.setItem("cart1", JSON.stringify(cart)),
          cartDraw();
      }),
      $(".cartpage").on("click", ".cart-product .count-decr", function () {
        let a = $(this).parents(".cart-product").data("node");
        cart.list[a] > 1 && cart.list[a]--,
          localStorage.setItem("cart1", JSON.stringify(cart)),
          cartDraw();
      }),
      $(".count-control .value").on("keyup", function () {
        let a = $(this).val(),
          t = $(this)
            .parents(".catalog-node-wholesaler")
            .find(".js-incart")
            .data("maxcount");
        (a = a.replace(/[^0-9]/g, "")), a > t && (a = t);
        let e = a;
        $(this).val(e),
          0 !== e &&
            "" !== e &&
            $(this)
              .parents(".catalog-node-wholesaler")
              .find(".js-incart")
              .data("count", e);
      }),
      $(".catalog-node-wholesaler .count-control .count-decr").click(
        function () {
          let a = +$(this)
            .parents(".catalog-node-wholesaler")
            .find(".js-incart")
            .data("count");
          a > 0 && a--,
            $(this)
              .parents(".catalog-node-wholesaler")
              .find(".js-incart")
              .data("count", a),
            $(this)
              .parents(".catalog-node-wholesaler")
              .find(".count-control .value")
              .val(a);
        }
      ),
      $(".catalog-node-wholesaler .count-control .count-incr").click(
        function () {
          let a = +$(this)
            .parents(".catalog-node-wholesaler")
            .find(".js-incart")
            .data("count");
          a <
            +$(this)
              .parents(".catalog-node-wholesaler")
              .find(".js-incart")
              .data("maxcount") && a++,
            $(this)
              .parents(".catalog-node-wholesaler")
              .find(".js-incart")
              .data("count", a),
            $(this)
              .parents(".catalog-node-wholesaler")
              .find(".count-control .value")
              .val(a);
        }
      ),
      $(".js-cart-finish-btn").click(function () {
        let a = !0;
        (cart.person.name = $(".cartpage .person input.name").val()),
          (cart.person.phone = $(".cartpage .person input.phone").val()),
          (cart.person.email = $(".cartpage .person input.email").val()),
          (cart.person.adress = $(".cartpage .person input.address").val()),
          (cart.person.rekv = $(".cartpage .person .rekv").val()),
          localStorage.setItem("cart1", JSON.stringify(cart)),
          cart.person.name.length < 3 &&
            ((a = !1), $(".cartpage .person input.name").addClass("invalid")),
          -1 !== cart.person.phone.indexOf("_") &&
            ((a = !1), $(".cartpage .person input.phone").addClass("invalid")),
          cart.person.email.length < 3 &&
            ((a = !1), $(".cartpage .person input.email").addClass("invalid")),
          cart.person.adress.length < 10 &&
            "pickup" != cart.delivery &&
            ((a = !1),
            $(".cartpage .person input.address").addClass("invalid")),
          a
            ? (loaderRun(),
              $.ajax({
                type: "POST",
                url: "/action/order",
                data: {
                  loadview: "ajax",
                  module: "order",
                  smart_action: "order",
                  cart: cart,
                },
                success: function (a) {
                  loaderStop(),
                    a.success
                      ? (showNotification(a.message),
                        (cart.list = {}),
                        (cart.promocode = ""),
                        localStorage.setItem("cart1", JSON.stringify(cart)),
                        goal("sendzakaz"),
                        setTimeout(() => {
                          window.location.href = "/profile/orders";
                        }, 5e3))
                      : showNotification(a.message);
                },
              }))
            : $("html, body").animate(
                { scrollTop: $("input.invalid:first").offset().top - 200 },
                200
              );
      });
  });
