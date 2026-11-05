async function redirectIfSessionCompleted() {
  const participant = window.STUDY_PARTICIPANT;
  const storedStudy = JSON.parse(sessionStorage.getItem("STUDY_SESSION") || "null");
  const sessionId = participant?.session_id || storedStudy?.session_id;

  if (!participant?.prolific_pid || !participant.study_id || !sessionId) {
    return false;
  }

  document.documentElement.style.visibility = "hidden";

  try {
    const response = await fetch("/api/session-status", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        prolific_pid: participant.prolific_pid,
        study_id: participant.study_id
      })
    });

    if (!response.ok) throw new Error(`Session status check failed (${response.status})`);

    const result = await response.json();
    if (result.completed) {
      const condition = await getAssignedCondition(participant);
      const params = new URLSearchParams({
        PROLIFIC_PID: participant.prolific_pid,
        STUDY_ID: participant.study_id,
        SESSION_ID: sessionId,
        CONDITION: Number.isInteger(storedStudy?.condition)
          ? storedStudy.condition
          : condition
      });

      window.location.replace(
        `https://lmubwl.eu.qualtrics.com/jfe/form/SV_di0S93IFjvdDiCy?${params.toString()}`
      );
      return true;
    }
  } catch (error) {
    console.warn("Entry session status check failed:", error);
  }

  document.documentElement.style.visibility = "visible";
  return false;
}

redirectIfSessionCompleted();
