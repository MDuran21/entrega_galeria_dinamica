const products = [
  {
    name: 'Monitor Alurin CoreVision 100IPSLite 23.8" FHD 100Hz Freesync',
    price: 74.95,
    stars: 4.5,
    reviews: 684,
    seller: 'Alurin',
    image:
      'img/1454-alurin-corevision-100ipslite-238-fhd-100hz-freesync-comprar.webp'
  },
  {
    name: 'Portátil PcCom Revolt 4060 Intel Core i9-14900HX 17.3"/32GB/1TB SSD/RTX 4060/ Assassins Shadows II',
    price: 2044.99,
    stars: 4.4,
    reviews: 150,
    seller: 'PcCom',
    image:
      'img/1736-pccom-revolt-4060-intel-core-i9-14900hx-173-32gb-1tb-ssd-rtx-4060-assassins-shadows-ii-windows-comprar.webp'
  },
  {
    name: 'Ordenador Sobremesa PcCom Ready AMD Ryzen 7 5800X / 32GB / 1TB SSD / RTX 5060',
    price: 1029,
    stars: 4.7,
    reviews: 1802,
    seller: 'PcCom',
    image: 'img/166-pccom-ready-amd-ryzen-7-5800x-32gb-1tb-ssd-rtx-5060.webp'
  },
  {
    name: 'Apple AirPods 3ª Generación con Estuche de Carga Lightning',
    price: 107.99,
    stars: 4.7,
    reviews: 708,
    seller: 'Apple',
    image:
      'img/1842-apple-airpods-3a-generacion-con-estuche-de-carga-lightning.webp'
  },
  {
    name: 'TV LG 55NANO82T6B 55" NanoCell Ultra HD 4K SMART TV WebOS24 AI ThinQ',
    price: 379,
    stars: 4.5,
    reviews: 408,
    seller: 'Televisores LG',
    image:
      'img/1447-lg-55nano82t6b-55-nanocell-ultra-hd-4k-smart-tv-webos24-ai-thinq.webp'
  },
  {
    name: 'TV Samsung S90D TQ83S90DAEXXC 83" OLED UltraHD 4K HDR10+',
    price: 1999,
    stars: 4.9,
    reviews: 17,
    seller: 'Samsung',
    image: 'img/1449-samsung-s90d-tq83s90daexxc-83-oled-ultrahd-4k-hdr10.webp'
  },
  {
    name: 'Disco Duro Forgeon Nimbus PRO Disco SSD 1TB 7400MB/S NVMe PCIe 4.0 M.2 Gen4',
    price: 72.95,
    stars: 4.7,
    reviews: 341,
    seller: 'Forgeon',
    image:
      'img/1144-forgeon-nimbus-pro-ssd-m2-1tb-nvme-pcie-40-gen4-comprar.webp'
  },
  {
    name: 'Corsair iCUE LINK RX120 Starter Kit 3 Ventiladores Suplementarios PWM Negros',
    price: 44.9,
    stars: 5,
    reviews: 11,
    seller: 'Corsair',
    image:
      'img/1779-corsair-icue-link-rx120-starter-kit-3-ventiladores-suplementarios-pwm-negros.webp'
  },
  {
    name: 'ASUS ROG Rapture GT-AXE11000 Router Gaming WiFi 6 AXE11000 TriBanda 2.5G',
    price: 433.09,
    stars: 4.6,
    reviews: 247,
    seller: 'Asus',
    image:
      'img/1384-asus-rog-rapture-gt-axe11000-router-gaming-wifi-6-axe11000-tribanda-25g.webp'
  },
  {
    name: 'Corsair K70 Pro Mini Wireless Teclado Mecánico Gaming Inalámbrico RGB Cherry MX Red',
    price: 129.99,
    stars: 4.5,
    reviews: 32,
    seller: 'Corsair',
    image:
      'img/1139-corsair-k70-pro-mini-wireless-teclado-mecanico-gaming-inalambrico-rgb-cherry-mx-red.webp'
  }
]

const generateHeader = () => {
  const header = document.getElementById('main-header')
  header.innerHTML = `
        <div class="header-content">
            <h1>PC Components Store</h1>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Categories</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
    `
}

const generateProducts = () => {
  const productsContainer = document.getElementById('products')
  products.forEach((product) => {
    const productCard = document.createElement('div')
    productCard.className = 'product-card'
    productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">${product.price}€</p>
            <p class="stars">${product.stars}★</p>
            <p class="reviews">(${product.reviews} reviews)</p>
            <p class="seller">Sold by: ${product.seller}</p>
            <button class="buy-button">Add to Cart</button>
        `
    productsContainer.appendChild(productCard)
  })
}

const generateFooter = () => {
  const footer = document.getElementById('main-footer')
  footer.innerHTML = `
        <div class="footer-content">
            <div class="footer-section">
                <h4>About Us</h4>
                <ul>
                    <li>Our History</li>
                    <li>Careers</li>
                    <li>Press Room</li>
                    <li>Corporate Responsibility</li>
                </ul>
            </div>
            <div class="footer-section">
                <h4>Customer Service</h4>
                <ul>
                    <li>Contact Us</li>
                    <li>Shipping Policy</li>
                    <li>Returns & Exchanges</li>
                    <li>FAQ</li>
                </ul>
            </div>
            <div class="footer-section">
                <h4>Follow Us</h4>
                <ul>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                    <li>YouTube</li>
                </ul>
            </div>
            <div class="footer-section">
                <h4>Contact Info</h4>
                <ul>
                    <li>📞 1-800-PC-PARTS</li>
                    <li>📧 support@pcstore.com</li>
                    <li>📍 123 Tech Street, Digital City</li>
                    <li>⏰ Mon-Fri: 9:00-18:00</li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2025 PC Components Store. All rights reserved.</p>
        </div>
    `
}

window.addEventListener('DOMContentLoaded', () => {
  generateHeader()
  generateProducts()
  generateFooter()
})
