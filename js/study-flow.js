const STUDY = JSON.parse(sessionStorage.getItem("STUDY_SESSION") || "null");

if (!STUDY) {
  console.error("No study session found");
  window.location.replace("index.html");
}

window.STUDY = STUDY;

function studyMetadata() {
  return {
    prolific_pid: STUDY.prolific_pid,
    study_id: STUDY.study_id,
    session_id: STUDY.session_id,
    condition: STUDY.condition
  };
}

function logStudy(collection, data, operation, filter) {
  return fetch("/api/log", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      collection,
      operation,
      filter,
      data: { ...studyMetadata(), ...data }
    })
  }).catch(error => console.warn("Study logging failed:", error));
}

function redirectToQualtrics({ hotel, rank }) {
  const base =
    "https://lmubwl.eu.qualtrics.com/jfe/form/SV_di0S93IFjvdDiCy";

  const params = new URLSearchParams({
    PROLIFIC_PID: STUDY.prolific_pid,
    STUDY_ID: STUDY.study_id,
    SESSION_ID: STUDY.session_id,
    CONDITION: STUDY.condition,
  });

  window.location.href = `${base}?${params.toString()}`;
}
