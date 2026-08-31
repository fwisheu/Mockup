import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI, {
  serverApi: { version: "1", strict: true, deprecationErrors: true }
});
let db;

export async function handler(event) {
  if (event.httpMethod !== "POST") return { statusCode: 405, body: "Method Not Allowed" };

  try {
    const { prolific_pid, study_id } = JSON.parse(event.body || "{}");
    if (!prolific_pid || prolific_pid.startsWith("TEST")) {
      return { statusCode: 400, body: JSON.stringify({ error: "A real prolific_pid is required" }) };
    }

    if (!db) {
      await client.connect();
      db = client.db("searchhotels_data");
    }

    const collection = db.collection("participants");
    await collection.createIndex({ prolific_pid: 1 }, { unique: true });
    await collection.updateOne(
      { prolific_pid },
      { $setOnInsert: { prolific_pid, condition: Math.floor(Math.random() * 4), created_at: new Date() }, $set: { study_id, updated_at: new Date() } },
      { upsert: true }
    );
    const participant = await collection.findOne({ prolific_pid }, { projection: { _id: 0, condition: 1 } });
    return { statusCode: 200, body: JSON.stringify({ condition: participant.condition }) };
  } catch (error) {
    console.error("Participant assignment error:", error);
    return { statusCode: 500, body: JSON.stringify({ error: "Could not assign condition" }) };
  }
}
