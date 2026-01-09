// URL-Parameter lesen
const params = new URLSearchParams(window.location.search);

// 2x2 Studienkonfiguration
const EXP = {
  ai: params.get("ai") === "1",         // 0 = no AI, 1 = AI
  hprice: params.get("hprice") === "1"  // 0 = normal price, 1 = high price
};
