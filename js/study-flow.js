function redirectToQualtrics({ hotel, rank, startTime }) {
  const base =
    "https://lmubwl.eu.qualtrics.com/jfe/form/SV_di0S93IFjvdDiCy";

  const time = Date.now() - startTime;

  const params = new URLSearchParams({
    choice: hotel.id,
    rank: rank,
    time: time,
    ai: STUDY?.factors?.ai ? 1 : 0,
    hprice: STUDY?.factors?.hprice ? 1 : 0
  });

  window.location.href = `${base}?${params.toString()}`;
}
