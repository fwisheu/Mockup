const STUDY = JSON.parse(sessionStorage.getItem("STUDY_SESSION"));

if (!STUDY) {
  console.error("No study session found");
}

window.STUDY = STUDY;

function redirectToQualtrics({ hotel, rank }) {
  const base =
    "https://lmubwl.eu.qualtrics.com/jfe/form/SV_di0S93IFjvdDiCy";

  const time = Date.now() - STUDY.session_start;

  const params = new URLSearchParams({
    user_id: STUDY.user_id,
    session_id: STUDY.session_id,
    choice: hotel.id,
    rank: rank,
    time: time,
    ai: STUDY.condition,
  });

  window.location.href = `${base}?${params.toString()}`;
}