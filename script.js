/* ==========================================================
   CONFIGURACIÓN — edita esto con los datos reales de WK SPORTS
   ========================================================== */
const BRAND = "WK SPORTS";
const WHATSAPP_NUMBER = "+1 (809) 355-7957".replace(/\D/g, ""); // ← Pon tu número con código de país, sin + ni espacios (RD: 1809..., 1829... o 1849...)
const CURRENCY = "RD$";

/* ==========================================================
   PRODUCTOS (precios de ejemplo: cámbialos por los reales)
   Cada producto tiene "colors": cada color con su propia foto.
   category: camisetas | entrenamiento | femenino | conjuntos | uniformes | gorras | tenis | bolsos | medias
   bg: color de fondo de la foto (para que se vea completa)
   ========================================================== */
const SIZES_U = ["S", "M", "L", "XL", "XXL"];
const SIZES_F = ["XS", "S", "M", "L", "XL"];
const NEGRO  = { name: "Negro",  hex: "#0a0a0a" };
const BLANCO = { name: "Blanco", hex: "#f4f4f4" };
const IMG = n => `img/${n}.webp`; // fotos de diseño (carpeta img)

const PRODUCTS = [
  /* ---------- CAMISETAS Y POLOS ---------- */
  { id: 2,  name: "Polo Oversize WK", category: "camisetas", price: 1800, badge: "STREETWEAR",
    desc: "Polo oversize en algodón premium 230 gsm con estampado de alta calidad. Logo al pecho y gran logo en la espalda.",
    sizes: SIZES_U, colors: [ { ...NEGRO, img: IMG("6f23edc7-c66c-470a-a78a-beb0f8878aad"), bg: "#000" }, { ...BLANCO, img: IMG("16423ccd-1d73-4558-92bf-c06834e6f4c8"), bg: "#010101" } ] },

  /* ---------- ENTRENAMIENTO ---------- */
  { id: 3,  name: "Camiseta Deportiva Pro", category: "entrenamiento", price: 1200, badge: "",
    desc: "Camiseta de entrenamiento con paneles de contraste y tela transpirable.",
    sizes: SIZES_U, colors: [ { ...BLANCO, img: IMG("684b4c86-04de-4700-89b6-a56388fb2576"), bg: "#000" }, { ...NEGRO, img: IMG("a222789c-6cf0-4246-b94d-b67874a6242b"), bg: "#010101" } ] },

  { id: 16, name: "Camiseta Manga Larga WK", category: "entrenamiento", price: 1600, badge: "NUEVO",
    desc: "Manga larga de entrenamiento con vivos blancos en las mangas y logo WK al pecho.",
    sizes: SIZES_U, colors: [ { ...NEGRO, img: IMG("ff9f0fd3-1127-4049-b7e6-6285427372d8"), bg: "#fff" } ] },

  { id: 18, name: "Short Deportivo Hombre", category: "entrenamiento", price: 1300, badge: "",
    desc: "Short con paneles laterales de contraste, bolsillos y cordón ajustable. Disponible en negro y blanco.",
    sizes: SIZES_U, colors: [ { name: "Negro / Blanco", hex: "linear-gradient(135deg,#0a0a0a 50%,#f4f4f4 50%)", img: IMG("3ef7dc61-319b-4aff-91f5-2a8b16f2e0c3"), bg: "#0a0a0a" } ] },

  /* ---------- ROPA FEMENINA ---------- */
  { id: 5,  name: "Esqueleto Racerback Mujer", category: "femenino", price: 1000, badge: "TOP",
    desc: "Esqueleto de espalda deportiva con paneles de contraste. Ajuste cómodo para entrenar.",
    sizes: SIZES_F, colors: [
      { name: "Negro / Blanco", hex: "linear-gradient(135deg,#0a0a0a 50%,#f4f4f4 50%)", img: IMG("1fb5a566-deb1-4857-8633-c9a2c47a7540"), bg: "#000" },
      { name: "Negro / Azul",   hex: "linear-gradient(135deg,#0a0a0a 50%,#2563ff 50%)", img: IMG("1e7ff3c1-ee5f-4ada-9309-dd736ed83eb9"), bg: "#000" },
      { name: "Blanco / Negro", hex: "linear-gradient(135deg,#f4f4f4 50%,#0a0a0a 50%)", img: "img/esqueleto-mujer-blanco-wk.webp", bg: "#000" } ] },

  { id: 6,  name: "Crop Top WK", category: "femenino", price: 750, badge: "",
    desc: "Crop top ajustado con el logo WK al pecho. Ideal para gym o uso diario.",
    sizes: SIZES_F, colors: [ { ...NEGRO, img: IMG("4adfb305-6b1f-4fe2-a0ec-2302ab1b9f96"), bg: "#000" }, { ...BLANCO, img: IMG("cd34d572-7dd8-4292-8170-0563ec9f3871"), bg: "#000" } ] },

  { id: 7,  name: "Short Deportivo Mujer", category: "femenino", price: 950, badge: "NUEVO",
    desc: "Short de tiro alto con paneles laterales de contraste. Cómodo y firme.",
    sizes: SIZES_F, colors: [ { ...NEGRO, img: IMG("5114e9e7-5721-4b16-9e78-01c263280da5"), bg: "#0b0c0b" }, { ...BLANCO, img: IMG("c7067bf7-e643-40a1-902f-3e7ce8f60db4"), bg: "#0a0a0a" } ] },

  { id: 11, name: "Chaqueta Entallada Mujer", category: "femenino", price: 2200, badge: "",
    desc: "Chaqueta ajustada con cierre, cuello alto y vivos reflectantes. Hecha para moverte.",
    sizes: SIZES_F, colors: [ { ...NEGRO, img: IMG("ceb7aa95-8c3a-4f1d-a885-31e5869e6586"), bg: "#010101" } ] },

  { id: 19, name: "Pantalón Acampanado Mujer", category: "femenino", price: 1500, badge: "",
    desc: "Pantalón de tiro alto con basta acampanada y logo WK en la cintura.",
    sizes: SIZES_F, colors: [ { ...NEGRO, img: IMG("7392315f-3954-473f-89a3-6356f8aacd1c"), bg: "#d6d6d6" } ] },

  /* ---------- CONJUNTOS Y CHAQUETAS ---------- */
  { id: 8,  name: "Conjunto Chaqueta + Pantalón", category: "conjuntos", price: 3800, badge: "CONJUNTO",
    desc: "Chaqueta con cierre y vivos, más pantalón acampanado de tiro alto. Toca la foto para ver el conjunto completo.",
    sizes: SIZES_F, colors: [
      { ...BLANCO, img: IMG("2149610f-07c2-4c56-91e4-a9b77c5a2759"), full: IMG("7292fdb3-9880-4870-8748-1a56b84fe0fc"), bg: "#010201" },
      { ...NEGRO,  img: IMG("4f592d5a-0312-4791-8aa5-5bee692fa0e9"), full: IMG("a11e35bd-d917-4d33-9b69-47f651a4bbb7"), bg: "#d0cac5" } ] },

  { id: 9,  name: "Chaqueta Cortaviento", category: "conjuntos", price: 3200, badge: "",
    desc: "Chaqueta ligera con capucha, bolsillos con cierre y paneles blancos de contraste.",
    sizes: SIZES_U, colors: [ { ...NEGRO, img: IMG("5d3f91f8-14d5-4377-baae-a9e2241db76f"), bg: "#000" } ] },

  { id: 10, name: "Hoodie Sport", category: "conjuntos", price: 2800, badge: "",
    desc: "Sudadera con capucha, bolsillo canguro y vivos blancos en las mangas.",
    sizes: SIZES_U, colors: [ { ...BLANCO, img: IMG("f280659a-960a-4320-9ad1-3f9939deecb9"), bg: "#000" }, { ...NEGRO, img: IMG("f922aba2-08fb-4cc2-baf4-9f22772c4553"), bg: "#000" } ] },

  { id: 17, name: "Pantalón Jogger WK", category: "conjuntos", price: 2200, badge: "",
    desc: "Jogger con vivos laterales, cintura con cordón y logo WK SPORTS.",
    sizes: SIZES_U, colors: [ { ...BLANCO, img: IMG("c7ecbb33-8495-4cf5-a2ab-ef6d1c1e562b"), bg: "#000" }, { ...NEGRO, img: IMG("ca053c95-2c50-4f28-9f4b-c71e985f12b9"), bg: "#000" } ] },

  /* ---------- UNIFORMES ---------- */
  { id: 20, name: "Uniforme de Baloncesto", category: "uniformes", price: 1800, badge: "PERSONALIZABLE",
    desc: "Camiseta + short para tu equipo, en varios diseños. Agregamos tu logo, nombre y número.",
    sizes: SIZES_U, colors: [
      { name: "Blanco y negro", hex: "linear-gradient(135deg,#f4f4f4 50%,#0a0a0a 50%)", img: "img/uniformes-baloncesto-blanco-negro.webp", bg: "#000" },
      { name: "Rojo y azul",    hex: "linear-gradient(135deg,#d6202e 50%,#1f45c8 50%)", img: "img/uniformes-baloncesto-rojo-azul.webp", bg: "#000" } ] },

  { id: 12, name: "Uniforme de Árbitro", category: "uniformes", price: 2500, badge: "",
    desc: "Camisa de rayas con cuello polo y logo WK. También en versión personalizada.",
    sizes: SIZES_U, colors: [ { name: "Rayas", hex: "linear-gradient(90deg,#fff 50%,#000 50%)", img: IMG("abe8ee46-8e81-4b23-9b97-1bb5127a90c1"), bg: "#000" } ] },

  { id: 13, name: "Jersey Personalizado", category: "uniformes", price: 1500, badge: "PERSONALIZABLE",
    desc: "Elige entre +20 diseños y combinaciones de color. Agregamos tu logo, nombre y número.",
    sizes: SIZES_U, colors: [
      { name: "20 diseños",   hex: "linear-gradient(90deg,#2563ff 50%,#0a0a0a 50%)", img: IMG("5c79023c-fad5-4559-a3c0-34f235067deb"), bg: "#020202" },
      { name: "Combinaciones", hex: "linear-gradient(90deg,#ff7a1a 50%,#14b8a6 50%)", img: IMG("c3e4e32e-083c-4a40-99d8-9b4981d2c25f"), bg: "#020202" } ] },

  /* ---------- GORRAS (bordado 3D: logo WK, dragón y flores de sakura) ---------- */
  { id: 14, name: "Gorra WK Dragón & León", category: "gorras", price: 1500, badge: "NUEVO",
    desc: "Bordado 3D con logo WK, dragón y flores de sakura al frente, y un león en el lateral. Visera plana y cierre ajustable.",
    sizes: ["Ajustable"], colors: [
      { name: "Rosa palo",    hex: "#e39aa6", img: "img/gorra-rosapalo.jpg",    full: "img/gorra-rosapalo-full.jpg" },
      { name: "Rosa",         hex: "#f27fa6", img: "img/gorra-rosa.jpg",        full: "img/gorra-rosa-full.jpg" },
      { name: "Fucsia",       hex: "#e0237a", img: "img/gorra-fucsia.jpg",      full: "img/gorra-fucsia-full.jpg" },
      { name: "Azul rey",     hex: "#1f45c8", img: "img/gorra-azul.jpg",        full: "img/gorra-azul-full.jpg" },
      { name: "Beige",        hex: "#e7d3ae", img: "img/gorra-beige.jpg",       full: "img/gorra-beige-full.jpg" },
      { name: "Negro / Rosa", hex: "linear-gradient(135deg,#0a0a0a 50%,#e0457b 50%)", img: "img/gorra-negro-rosa.jpg", full: "img/gorra-negro-rosa-full.jpg" } ] },

  { id: 15, name: "Gorra WK Dragón & Gorila", category: "gorras", price: 1500, badge: "NUEVO",
    desc: "Bordado 3D con logo WK, dragón y flores de sakura al frente, y un gorila guerrero en el lateral. Cierre ajustable.",
    sizes: ["Ajustable"], colors: [
      { name: "Negro / Plata", hex: "linear-gradient(135deg,#0a0a0a 50%,#c9ccd4 50%)", img: "img/gorra-negro-plata.jpg", full: "img/gorra-negro-plata-full.jpg" },
      { name: "Negro / Rojo",  hex: "linear-gradient(135deg,#0a0a0a 50%,#e0182d 50%)", img: "img/gorra-negro-rojo.jpg",  full: "img/gorra-negro-rojo-full.jpg" } ] },

  /* ---------- TENIS ---------- */
  { id: 22, name: "Tenis WK Runner", category: "tenis", price: 4500, badge: "NUEVO",
    desc: "Tenis deportivos ligeros y transpirables, con el logo WK en el lateral. Para correr y para el día a día.",
    sizes: ["38", "39", "40", "41", "42", "43", "44"], colors: [ { ...BLANCO, img: IMG("41b44625-722d-4c96-a04d-f4a229b7452a"), bg: "#0f0f0f" }, { ...NEGRO, img: IMG("a043e0c7-ac7e-4d28-ad2d-937d7e32dd08"), bg: "#0d0d0d" } ] },

  /* ---------- MEDIAS ---------- */
  { id: 23, name: "Medias Deportivas WK", category: "medias", price: 350, badge: "",
    desc: "Medias deportivas con el logo WK. Cómodas, con buen ajuste y tejido resistente.",
    sizes: ["M", "L"], colors: [ { ...BLANCO, img: IMG("cc045d9e-41ec-4fad-b5af-05581a77d2c1"), bg: "#fff" }, { name: "Negro / Gris", hex: "linear-gradient(135deg,#0a0a0a 50%,#8a8a8a 50%)", img: IMG("906e4150-a1ae-4ea4-9214-5f62479bcc3a"), bg: "#fff" } ] }
];

/* ==========================================================
   UTILIDADES Y ESTADO
   ========================================================== */
const $  = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const money = n => CURRENCY + n.toLocaleString("es-DO");
const waUrl = text => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

const CART_KEY = "wksports_cart";
let cart = [];
try { cart = JSON.parse(localStorage.getItem(CART_KEY)) || []; } catch (e) { cart = []; }
const saveCart = () => { try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch (e) {} };

const catLabel = { camisetas: "Camisetas y polos", entrenamiento: "Entrenamiento", femenino: "Femenino", conjuntos: "Conjuntos", uniformes: "Uniformes", gorras: "Gorras", tenis: "Tenis", bolsos: "Bolsos y muñequeras", medias: "Medias" };
const state = {}; // id -> { color, size }
const getState = p => (state[p.id] ||= { color: 0, size: p.sizes[Math.min(1, p.sizes.length - 1)] });

/* ==========================================================
   RENDER DE PRODUCTOS
   ========================================================== */
const catalog = $("#catalog");

function productCard(p, i) {
  const st = getState(p);
  const col = p.colors[st.color];
  return `
    <article class="product" style="animation-delay:${i * 50}ms" data-id="${p.id}">
      <div class="product-img" data-zoom style="background:${col.bg || "#0d1530"}">
        <img src="${col.img}" alt="${p.name} — ${col.name}" loading="lazy">
        ${p.badge ? `<span class="badge">${p.badge}</span>` : ""}
      </div>
      <div class="product-info">
        <span class="product-cat">${catLabel[p.category]}</span>
        <h3 class="product-name">${p.name}</h3>
        <p class="product-desc">${p.desc}</p>
        ${p.colors.length > 1 ? `
          <div class="opt-label">Color · ${col.name}</div>
          <div class="swatches">
            ${p.colors.map((c, k) => `<button class="swatch ${k === st.color ? "active" : ""}" data-color="${k}" title="${c.name}" aria-label="${c.name}" style="background:${c.hex}"></button>`).join("")}
          </div>` : ""}
        <div class="opt-label">Talla</div>
        <div class="sizes">
          ${p.sizes.map(s => `<button class="size ${s === st.size ? "active" : ""}" data-size="${s}">${s}</button>`).join("")}
        </div>
        <div class="product-row">
          <span class="price">${money(p.price)}</span>
          <button class="add-btn" data-add>Agregar +</button>
        </div>
      </div>
    </article>`;
}

/* Apartados de la tienda. Para sumar productos a un apartado, usa su category (p. ej. "tenis"). */
const GROUP_LABEL = {
  camisetas: "Camisetas y polos", entrenamiento: "Ropa de entrenamiento", femenino: "Ropa femenina",
  conjuntos: "Conjuntos y chaquetas", uniformes: "Uniformes", gorras: "Gorras", tenis: "Tenis",
  bolsos: "Bolsos y muñequeras", medias: "Medias deportivas"
};
const APARTADOS = [
  { id: "ropa",       eyebrow: "Catálogo",   title: "Ropa deportiva",    groups: ["camisetas", "entrenamiento", "femenino", "conjuntos", "uniformes"] },
  { id: "gorras",     eyebrow: "Accesorios", title: "Gorras",            groups: ["gorras"] },
  { id: "tenis",      eyebrow: "Calzado",    title: "Tenis",             groups: ["tenis"] },
  { id: "accesorios", eyebrow: "Más",        title: "Medias y accesorios", groups: ["medias", "bolsos"] }
];

function renderCatalog() {
  catalog.innerHTML = APARTADOS.map((a, ai) => `
    <section class="section ${ai % 2 === 0 ? "alt" : ""} apartado" id="${a.id}">
      <div class="section-head"><p class="eyebrow">${a.eyebrow}</p><h2>${a.title}</h2></div>
      ${a.groups.map(g => {
        const list = PRODUCTS.filter(p => p.category === g);
        return `
        <div class="group" id="cat-${g}">
          ${a.groups.length > 1 ? `<h3 class="group-title">${GROUP_LABEL[g]}</h3>` : ""}
          ${list.length
            ? `<div class="grid">${list.map(productCard).join("")}</div>`
            : `<div class="soon-card"><b>${GROUP_LABEL[g]} · Próximamente</b><span>Estamos preparando esta línea. ¿La quieres ya? <a href="#" data-ask="${GROUP_LABEL[g]}">Escríbenos por WhatsApp</a>.</span></div>`}
        </div>`;
      }).join("")}
    </section>`).join("");
}

catalog.addEventListener("click", e => {
  const ask = e.target.closest("[data-ask]");
  if (ask) { e.preventDefault(); window.open(waUrl(`Hola ${BRAND}! Me interesa la línea de ${ask.dataset.ask}.`), "_blank"); return; }

  const card = e.target.closest(".product");
  if (!card) return;
  const p = PRODUCTS.find(x => x.id === Number(card.dataset.id));
  const st = getState(p);

  const sw = e.target.closest(".swatch");
  if (sw) {
    st.color = Number(sw.dataset.color);
    const col = p.colors[st.color];
    $("img", card).src = col.img;
    $("img", card).alt = `${p.name} — ${col.name}`;
    $(".product-img", card).style.background = col.bg || "#0d1530";
    $$(".swatch", card).forEach(b => b.classList.toggle("active", b === sw));
    $(".opt-label", card).textContent = `Color · ${col.name}`;
    return;
  }
  const sz = e.target.closest(".size");
  if (sz) {
    st.size = sz.dataset.size;
    $$(".size", card).forEach(b => b.classList.toggle("active", b === sz));
    return;
  }
  if (e.target.closest("[data-add]")) { addToCart(p, st.color, st.size); return; }
  if (e.target.closest("[data-zoom]")) { const col = p.colors[st.color]; openLightbox(col.full || col.img, `${p.name} — ${col.name}`); }
});

/* ==========================================================
   CARRITO
   ========================================================== */
function addToCart(p, colorIdx, size) {
  const found = cart.find(i => i.id === p.id && i.color === colorIdx && i.size === size);
  if (found) found.qty++;
  else cart.push({ id: p.id, color: colorIdx, size, qty: 1 });
  saveCart(); renderCart();
  toast(`${p.name} (${p.colors[colorIdx].name}, ${size}) agregado ✓`);
}

function renderCart() {
  const box = $("#cartItems");
  let total = 0, count = 0;
  cart = cart.filter(i => PRODUCTS.some(p => p.id === i.id && p.colors[i.color]));

  if (!cart.length) {
    box.innerHTML = `<p class="cart-empty">Tu carrito está vacío.</p>`;
  } else {
    box.innerHTML = cart.map((item, idx) => {
      const p = PRODUCTS.find(x => x.id === item.id);
      const col = p.colors[item.color];
      total += p.price * item.qty; count += item.qty;
      return `
        <div class="cart-item">
          <div class="cart-thumb" style="background-image:url('${col.img}'); background-color:${col.bg || "#0d1530"}"></div>
          <div>
            <h4>${p.name}</h4>
            <small>${col.name} · Talla ${item.size} · ${money(p.price)}</small>
            <div class="qty">
              <button data-dec="${idx}" aria-label="Menos">−</button>
              <span>${item.qty}</span>
              <button data-inc="${idx}" aria-label="Más">+</button>
            </div>
          </div>
          <div>
            <strong>${money(p.price * item.qty)}</strong>
            <a href="#" class="remove" data-rm="${idx}">Quitar</a>
          </div>
        </div>`;
    }).join("");
  }
  $("#cartTotal").textContent = money(total);
  $("#cartCount").textContent = count;
}

$("#cartItems").addEventListener("click", e => {
  const t = e.target;
  if (t.dataset.inc !== undefined) cart[t.dataset.inc].qty++;
  else if (t.dataset.dec !== undefined) { const i = t.dataset.dec; cart[i].qty--; if (cart[i].qty <= 0) cart.splice(i, 1); }
  else if (t.dataset.rm !== undefined) { e.preventDefault(); cart.splice(t.dataset.rm, 1); }
  else return;
  saveCart(); renderCart();
});

$("#clearCart").addEventListener("click", () => { cart = []; saveCart(); renderCart(); });

$("#checkout").addEventListener("click", () => {
  if (!cart.length) return toast("Tu carrito está vacío");
  let total = 0;
  const lines = cart.map(i => {
    const p = PRODUCTS.find(x => x.id === i.id);
    const col = p.colors[i.color];
    total += p.price * i.qty;
    return `• ${p.name} (${col.name}, Talla ${i.size}) x${i.qty} — ${money(p.price * i.qty)}`;
  });
  window.open(waUrl(`Hola ${BRAND}! Quiero hacer este pedido:\n\n${lines.join("\n")}\n\nTotal: ${money(total)}`), "_blank");
});

const cartEl = $("#cart"), overlay = $("#overlay");
const openCart  = () => { cartEl.classList.add("open"); overlay.classList.add("show"); };
const closeCart = () => { cartEl.classList.remove("open"); overlay.classList.remove("show"); };
$("#openCart").addEventListener("click", openCart);
$("#closeCart").addEventListener("click", closeCart);
overlay.addEventListener("click", closeCart);

/* ==========================================================
   LIGHTBOX
   ========================================================== */
const lb = $("#lightbox");
function openLightbox(src, alt) { $("#lbImg").src = src; $("#lbImg").alt = alt || ""; lb.classList.add("show"); lb.setAttribute("aria-hidden", "false"); }
function closeLightbox() { lb.classList.remove("show"); lb.setAttribute("aria-hidden", "true"); }
lb.addEventListener("click", e => { if (e.target !== $("#lbImg")) closeLightbox(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") { closeCart(); closeLightbox(); } });

/* ==========================================================
   MENÚ, HEADER Y EXTRAS
   ========================================================== */
const nav = $("#nav");
$("#burger").addEventListener("click", () => nav.classList.toggle("open"));
$$("#nav a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

const header = $("#header");
const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 30);
window.addEventListener("scroll", onScroll, { passive: true }); onScroll();

/* Enlaces a WhatsApp */
const waGeneral = `Hola ${BRAND}! Quisiera más información.`;
const waQuote   = `Hola ${BRAND}! Quiero cotizar uniformes personalizados para mi equipo. Deporte: __ · Cantidad: __ · Colores/logo: __`;
$("#waLink").href = waUrl(waGeneral);   $("#waLink").target = "_blank";
$("#waFooter").href = waUrl(waGeneral); $("#waFooter").target = "_blank";
$("#quoteBtn").href = waUrl(waQuote);   $("#quoteBtn").target = "_blank";

/* Formulario de contacto → WhatsApp */
$("#contactForm").addEventListener("submit", e => {
  e.preventDefault();
  window.open(waUrl(`Hola ${BRAND}! Soy ${$("#cName").value} (${$("#cEmail").value}).\n\n${$("#cMsg").value}`), "_blank");
  e.target.reset();
});

/* Toast */
let toastTimer;
function toast(text) {
  const t = $("#toast");
  t.textContent = text; t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2200);
}

$("#year").textContent = new Date().getFullYear();

/* Inicio */
renderCatalog();
renderCart();
