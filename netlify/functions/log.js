import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI, {
  serverApi: { version: "1", strict: true, deprecationErrors: true }
});
let db;

export async function handler(event) {
  if (event.httpMethod !== "POST") return { statusCode: 405, body: "Method Not Allowed" };
  const body = JSON.parse(event.body || "{}");
  if (!body.collection || !body.data) {
    return { statusCode: 400, body: JSON.stringify({ error: "collection and data are required" }) };
  }

  if (!db) {
    await client.connect();
    db = client.db("searchhotels_data"); // DB-Name
  }

  if (body.operation === "update") {
    if (!body.filter || typeof body.filter !== "object") {
      return { statusCode: 400, body: JSON.stringify({ error: "filter is required for updates" }) };
    }
    const result = await db.collection(body.collection).updateOne(
      body.filter,
      { $set: body.data }
    );
    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true, modifiedCount: result.modifiedCount })
    };
  }

  const result = await db.collection(body.collection).insertOne(body.data);
  return {
    statusCode: 200,
    body: JSON.stringify({ ok: true, insertedId: result.insertedId })
  };
}
