import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI, {
  serverApi: { version: "1", strict: true, deprecationErrors: true }
});
let db;

export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { prolific_pid, study_id } = JSON.parse(event.body || "{}");

    if (!prolific_pid || !study_id) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "prolific_pid and study_id are required" })
      };
    }

    if (!db) {
      await client.connect();
      db = client.db("searchhotels_data");
    }

    const session = await db.collection("sessions").findOne(
      {
        prolific_pid,
        study_id,
        session_end: { $exists: true },
        selected_hotel_id: { $exists: true }
      },
      { projection: { _id: 0, session_end: 1, selected_hotel_id: 1, selected_rank: 1 } }
    );

    return {
      statusCode: 200,
      body: JSON.stringify({
        completed: Boolean(session),
        session: session || null
      })
    };
  } catch (error) {
    console.error("Session status error:", error);
    return { statusCode: 500, body: JSON.stringify({ error: "Could not read session status" }) };
  }
}
