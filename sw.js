// Mantén el resto del código de Workbox intacto
if (!self.define) {
  let e,
    i = {};
  const r = (r, s) => (
    (r = new URL(r + ".js", s).href),
    i[r] ||
      new Promise((i) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = r), (e.onload = i), document.head.appendChild(e);
        } else (e = r), importScripts(r), i();
      }).then(() => {
        let e = i[r];
        if (!e) throw new Error("Module ${r} didn’t register its module");
        return e;
      })
  );
  self.define = (s, f) => {
    const o =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (i[o]) return;
    let n = {};
    const b = (e) => r(e, o),
      c = { module: { uri: o }, exports: n, require: b };
    i[o] = Promise.all(s.map((e) => c[e] || b(e))).then((e) => (f(...e), n));
  };
}
define(["./workbox-48867127"], function (e) {
  "use strict";
  self.addEventListener("message", (e) => {
    e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting();
  }),
    e.precacheAndRoute(
      [
        {
          url: "css/estilos.css",
          revision: "7e7c656ab7b373e8c8152969909383a8",
        },
        { url: "img/1.jpg", revision: "8120a40180dba833fe0b75abe7bfbfe5" },
        { url: "img/2.jpg", revision: "b20d2557fa8627db45e3ba3d2e2f1372" },
        { url: "img/3.jpg", revision: "a5d05f6149d5866bbd9b7b8cb6c70dc5" },
        { url: "img/4.jpg", revision: "8e0249cb5a0613f217a9fc22f3f0f690" },
        { url: "img/5.jpg", revision: "8b61b001e77d2e44a3f54a7ed00c7ae5" },
        { url: "img/6.jpg", revision: "4a9d2554f9a7340ff23cd02148ec91f0" },
        { url: "img/7.jpg", revision: "01e216ed6920846c096c7e78462d295a" },
        { url: "img/8.jpg", revision: "edb2fbabb00a555c1558de8427961968" },
        {
          url: "img/bg-textura.png",
          revision: "fa6a95e71d181ae6ac1f7586f0d8515a",
        },
        { url: "img/bg.jpg", revision: "9ab5941cd0b719b26b14b41e1f107f6f" },
        {
          url: "img/icon-192x192.jpg",
          revision: "ff2efe01ba360ae47f453f13d588f29b",
        },
        {
          url: "img/icon-512x512.jpg",
          revision: "30e31f169d02c62c5b0d7049c153f527",
        },
        { url: "img/icon.ico", revision: "12244b97427b53ffef697987ac3ff6a4" },
        { url: "index.html", revision: "31e89878aa143ab9f2b83f0585373d03" },
        { url: "js/efectos.js", revision: "195611958bb7978ac5e92731dd01e0fe" },
        {
          url: "js/jquery-1.12.3.min.js",
          revision: "2b6294333db8eeb65bc7717144357d23",
        },
        { url: "js/parallax.js", revision: "9d1a4e508c779a2087099b439b6d1a06" },
        { url: "manifest.json", revision: "641500040809ddcd2210008046527663" },
      ],
      { ignoreURLParametersMatching: [/^utm_/, /^fbclid$/] }
    );
    importScripts("firebase-messaging-sw.js");
});
