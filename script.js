/* ==========================================================
   CONFIGURACIÓN — edita esto con los datos reales de WK SPORTS
   ========================================================== */
const BRAND = "WK SPORTS";
const WHATSAPP_NUMBER = "18090000000"; // ← Pon tu número con código de país, sin + ni espacios (RD: 1809..., 1829... o 1849...)
const CURRENCY = "RD$";

/* ==========================================================
   PRODUCTOS (precios de ejemplo: cámbialos por los reales)
   Cada producto tiene "colors": cada color con su propia foto.
   category: entrenamiento | femenino | conjuntos | uniformes | casual
   ========================================================== */
const SIZES_U = ["S", "M", "L", "XL", "XXL"];
const SIZES_F = ["XS", "S", "M", "L", "XL"];
const NEGRO  = { name: "Negro",  hex: "#0a0a0a" };
const BLANCO = { name: "Blanco", hex: "#f4f4f4" };

const PRODUCTS = [
  { id: 1,  name: "Camiseta WK Classic", category: "casual", price: 850, badge: "NUEVO",
    desc: "Camiseta de corte clásico con el logo WK SPORTS al pecho. Cómoda y versátil.",
    sizes: SIZES_U, colors: [ { ...NEGRO, img: "img/tee-negro.jpg" }, { ...BLANCO, img: "img/tee-blanco.jpg" } ] },

  { id: 2,  name: "Polo Oversize WK", category: "casual", price: 1800, badge: "STREETWEAR",
    desc: "Polo oversize en algodón premium 230 gsm con estampado de alta calidad. Estilo callejero.",
    sizes: SIZES_U, colors: [ { ...NEGRO, img: "img/polo-negro.jpg", back: "img/polo-negro-espalda.jpg" }, { ...BLANCO, img: "img/polo-blanco.jpg", back: "img/polo-blanco-espalda.jpg" } ] },

  { id: 3,  name: "Camiseta Deportiva Pro", category: "entrenamiento", price: 1200, badge: "",
    desc: "Camiseta de entrenamiento con paneles de contraste y tela transpirable.",
    sizes: SIZES_U, colors: [ { ...NEGRO, img: "img/sport-negro.jpg" }, { ...BLANCO, img: "img/sport-blanco.jpg" } ] },

  { id: 4,  name: "Esqueleto Deportivo Hombre", category: "entrenamiento", price: 1100, badge: "TOP",
    desc: "Esqueleto de corte atlético con costuras de contraste. Libertad total de movimiento.",
    sizes: SIZES_U, colors: [ { ...NEGRO, img: "img/tank-hombre.jpg" }, { ...BLANCO, img: "img/tank-blanco.jpg" } ] },

  { id: 5,  name: "Esqueleto Racerback Mujer", category: "femenino", price: 1000, badge: "",
    desc: "Esqueleto de espalda deportiva con detalles blancos. Ajuste cómodo para entrenar.",
    sizes: SIZES_F, colors: [ { ...NEGRO, img: "img/tank-mujer.jpg" } ] },

  { id: 6,  name: "Crop Top WK", category: "femenino", price: 750, badge: "",
    desc: "Crop top ajustado con el logo WK SPORTS. Ideal para gym o uso diario.",
    sizes: SIZES_F, colors: [ { ...NEGRO, img: "img/crop-negro.jpg" }, { ...BLANCO, img: "img/crop-blanco.jpg" } ] },

  { id: 7,  name: "Short Deportivo Mujer", category: "femenino", price: 950, badge: "NUEVO",
    desc: "Short de tiro alto con paneles laterales de contraste. Cómodo y firme.",
    sizes: SIZES_F, colors: [ { ...NEGRO, img: "img/short-negro.jpg" }, { ...BLANCO, img: "img/short-blanco.jpg" } ] },

  { id: 8,  name: "Conjunto Chaqueta + Pantalón", category: "conjuntos", price: 3800, badge: "CONJUNTO",
    desc: "Chaqueta con cierre y vivos reflectantes, más pantalón acampanado de tiro alto.",
    sizes: SIZES_F, colors: [ { ...NEGRO, img: "img/conjunto-fem.jpg" } ] },

  { id: 9,  name: "Chaqueta Cortaviento", category: "conjuntos", price: 3200, badge: "",
    desc: "Chaqueta ligera con capucha, bolsillos con cierre y paneles blancos de contraste.",
    sizes: SIZES_U, colors: [ { ...NEGRO, img: "img/cortaviento.jpg" } ] },

  { id: 10, name: "Hoodie Sport", category: "conjuntos", price: 2800, badge: "",
    desc: "Sudadera con capucha, bolsillo canguro y vivos blancos en las mangas.",
    sizes: SIZES_U, colors: [ { ...NEGRO, img: "img/hoodie.jpg" } ] },

  { id: 11, name: "Chaqueta Entallada Mujer", category: "femenino", price: 2200, badge: "",
    desc: "Chaqueta ajustada con cierre, cuello alto y vivos reflectantes. Hecha para moverte.",
    sizes: SIZES_F, colors: [ { ...NEGRO, img: "img/chaqueta-real.jpg" } ] },

  { id: 12, name: "Uniforme de Árbitro", category: "uniformes", price: 2500, badge: "",
    desc: "Camisa de rayas con cuello polo y logo en la manga. También en versión personalizada.",
    sizes: SIZES_U, colors: [ { name: "Rayas", hex: "linear-gradient(90deg,#fff 50%,#000 50%)", img: "img/arbitro.jpg" } ] },

  { id: 13, name: "Jersey Personalizado", category: "uniformes", price: 1500, badge: "PERSONALIZABLE",
    desc: "Elige entre +20 diseños y combinaciones de color. Agregamos tu logo, nombre y número.",
    sizes: SIZES_U, colors: [ { name: "A tu gusto", hex: "linear-gradient(90deg,#2563ff 50%,#0a0a0a 50%)", img: "img/catalogo-jerseys.jpg" } ] }
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

const catLabel = { entrenamiento: "Entrenamiento", femenino: "Femenino", conjuntos: "Conjuntos", uniformes: "Uniformes", casual: "Casual" };
const state = {}; // id -> { color, size }
const getState = p => (state[p.id] ||= { color: 0, size: p.sizes[Math.min(1, p.sizes.length - 1)] });

/* ==========================================================
   RENDER DE PRODUCTOS
   ========================================================== */
const grid = $("#productGrid");

function productCard(p, i) {
  const st = getState(p);
  const col = p.colors[st.color];
  return `
    <article class="product" style="animation-delay:${i * 50}ms" data-id="${p.id}">
      <div class="product-img" data-zoom>
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

function renderProducts(filter = "todo") {
  const list = filter === "todo" ? PRODUCTS : PRODUCTS.filter(p => p.category === filter);
  grid.innerHTML = list.map(productCard).join("");
}

grid.addEventListener("click", e => {
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
  if (e.target.closest("[data-zoom]")) openLightbox(p.colors[st.color].img, p.name);
});

$("#filters").addEventListener("click", e => {
  const chip = e.target.closest(".chip");
  if (!chip) return;
  $$(".chip").forEach(c => c.classList.toggle("active", c === chip));
  renderProducts(chip.dataset.filter);
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
          <div class="cart-thumb" style="background-image:url('${col.img}')"></div>
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
renderProducts();
renderCart();
