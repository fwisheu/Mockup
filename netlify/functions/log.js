import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI);

export async function handler(event) {
  const body = JSON.parse(event.body);

  await client.connect();
  const db = client.db("hotel_experiment");

  await db.collection(body.collection).insertOne(body.data);

  return {
    statusCode: 200,
    body: JSON.stringify({ ok: true })
  };
}

fetch("/.netlify/functions/log", {
  method: "POST",
  body: JSON.stringify({
    collection: "recommendations",
    data: {
      session_id,
      recommendation_count: hotels.length,
      recommendation_source: "ai",
      recommendation_order: hotels.map(h => h.id),
      timestamp: new Date().toISOString()
    }
  })
});
