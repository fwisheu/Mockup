// -------------------------
// URL Parameter
// -------------------------
const params = new URLSearchParams(window.location.search);

// -------------------------
// Study Configuration
// -------------------------
const STUDY = {
  factors: {
    ai: params.get("ai") === "1",
    hprice: params.get("hprice") === "1"
  },

  meta: {
    version: "1.0",
    created: "2026-01-12"
  }
};
