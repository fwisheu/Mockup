const STUDY = JSON.parse(sessionStorage.getItem("STUDY_SESSION") || "null");

if (!STUDY) {
  console.error("No study session found");
  window.location.replace("index.html");
}

window.STUDY = STUDY;

// Prevent the results page from becoming interactive while the server checks
// whether this session has already been completed.
document.documentElement.style.visibility = "hidden";

function qualtricsUrl() {
  const base =
    "https://lmubwl.eu.qualtrics.com/jfe/form/SV_di0S93IFjvdDiCy";

  const params = new URLSearchParams({
    PROLIFIC_PID: STUDY.prolific_pid,
    STUDY_ID: STUDY.study_id,
    SESSION_ID: STUDY.session_id,
    CONDITION: STUDY.condition,
  });

  return `${base}?${params.toString()}`;
}

async function checkSessionCompleted() {
  try {
    const response = await fetch("/api/session-status", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        prolific_pid: STUDY.prolific_pid,
        study_id: STUDY.study_id,
        session_id: STUDY.session_id
      })
    });

    if (!response.ok) throw new Error(`Session status check failed (${response.status})`);

    const result = await response.json();
    if (result.completed) {
      window.STUDY_SESSION_COMPLETED = true;
      window.location.replace(qualtricsUrl());
      return true;
    }
  } catch (error) {
    console.warn("Session status check failed:", error);
  }

  window.STUDY_SESSION_COMPLETED = false;
  document.documentElement.style.visibility = "visible";
  return false;
}

window.STUDY_SESSION_GUARD = checkSessionCompleted();

function studyMetadata() {
  return {
    prolific_pid: STUDY.prolific_pid,
    study_id: STUDY.study_id,
    session_id: STUDY.session_id,
    condition: STUDY.condition
  };
}

function logStudy(collection, data, operation, filter) {
  return window.STUDY_SESSION_GUARD.then(completed => {
    if (completed) return null;

    return fetch("/api/log", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        collection,
        operation,
        filter,
        data: { ...studyMetadata(), ...data }
      })
    })
      .then(response => {
        if (!response.ok) throw new Error(`Study logging failed (${response.status})`);
        return response.json();
      })
      .catch(error => {
        console.warn("Study logging failed:", error);
        return null;
      });
  });
}

function redirectToQualtrics({ hotel, rank }) {
  window.location.replace(qualtricsUrl());
}
