// Participant identity and condition assignment shared by the entry pages.
const PARTICIPANT_KEY = "STUDY_PARTICIPANT";
const CONDITION_MAP_KEY = "STUDY_CONDITIONS";

function isUsableParam(value) {
  return Boolean(value && !value.includes("{{") && !value.includes("}}"));
}

function makeTestId() {
  const digits = typeof crypto !== "undefined" && crypto.getRandomValues
    ? crypto.getRandomValues(new Uint32Array(1))[0] % 1000000
    : Math.floor(Math.random() * 1000000);
  return `TEST${String(digits).padStart(6, "0")}`;
}

function urlValue(name) {
  const params = new URLSearchParams(window.location.search);
  const wanted = name.toLowerCase();
  for (const [key, value] of params.entries()) {
    if (key.toLowerCase() === wanted && isUsableParam(value)) return value;
  }
  return null;
}

function getParticipant() {
  const stored = JSON.parse(localStorage.getItem(PARTICIPANT_KEY) || "null") || {};
  const prolificPid = urlValue("PROLIFIC_PID") || stored.prolific_pid || makeTestId();
  const studyId = urlValue("STUDY_ID") || stored.study_id || makeTestId();
  const sessionId = urlValue("SESSION_ID") || stored.session_id || null;
  const isTest = prolificPid.startsWith("TEST");
  const conditions = JSON.parse(localStorage.getItem(CONDITION_MAP_KEY) || "{}");

  if (!Number.isInteger(conditions[prolificPid])) {
    conditions[prolificPid] = Math.floor(Math.random() * 4);
    localStorage.setItem(CONDITION_MAP_KEY, JSON.stringify(conditions));
  }

  const participant = {
    prolific_pid: prolificPid,
    study_id: studyId,
    session_id: sessionId,
    condition: conditions[prolificPid],
    is_test: isTest
  };
  localStorage.setItem(PARTICIPANT_KEY, JSON.stringify(participant));
  return participant;
}

async function getAssignedCondition(participant) {
  if (participant.is_test) return participant.condition;

  try {
    const response = await fetch("/api/participant", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        prolific_pid: participant.prolific_pid,
        study_id: participant.study_id
      })
    });
    if (!response.ok) throw new Error(`Condition assignment failed (${response.status})`);
    const result = await response.json();
    if (Number.isInteger(result.condition)) {
      participant.condition = result.condition;
      const conditions = JSON.parse(localStorage.getItem(CONDITION_MAP_KEY) || "{}");
      conditions[participant.prolific_pid] = result.condition;
      localStorage.setItem(CONDITION_MAP_KEY, JSON.stringify(conditions));
    }
  } catch (error) {
    console.warn("Using cached condition assignment:", error);
  }
  return participant.condition;
}

window.STUDY_PARTICIPANT = getParticipant();
