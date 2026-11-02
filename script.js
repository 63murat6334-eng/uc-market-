// YAYINLAMADAN ÖNCE aşağıdaki numarayı kendi WhatsApp numaranla değiştir.
// Ülke kodu dahil, + işareti ve boşluk olmadan yaz. Örnek biçim: 905xxxxxxxxx
const WHATSAPP_NUMBER = "905300659034";

document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll(".choose").forEach(button => {
  button.addEventListener("click", () => {
    document.getElementById("package").value = button.dataset.package;
    document.getElementById("siparis").scrollIntoView({ behavior: "smooth" });
  });
});

document.getElementById("orderForm").addEventListener("submit", event => {
  event.preventDefault();
  const pack = document.getElementById("package").value;
  const playerId = document.getElementById("playerId").value.trim();
  const name = document.getElementById("customerName").value.trim();
  const note = document.getElementById("note").value.trim();

  if (!pack || !playerId || !name) return;

  if (WHATSAPP_NUMBER.includes("X")) {
    document.getElementById("result").textContent =
      "Sipariş formu hazır. Site sahibinin script.js içindeki WhatsApp numarasını gerçek numarayla değiştirmesi gerekiyor.";
    return;
  }

  const message = [
    "Merhaba UC MARKET, sipariş talebi oluşturmak istiyorum.",
    "Paket: " + pack,
    "Oyuncu ID: " + playerId,
    "Ad: " + name,
    note ? "Not: " + note : ""
  ].filter(Boolean).join("\n");

  const url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
  window.open(url, "_blank", "noopener");
});
