let balance = 1000;
document.getElementById("spinBtn").addEventListener("click", () => {
  let win = Math.floor(Math.random() * 100);
  balance += win - 10;
  document.getElementById("result").innerText = "رصيدك الافتراضي: " + balance + " نقاط";
});
