import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI, {
  serverApi: { version: "1", strict: true, deprecationErrors: true }
});
let db;

export async function handler(event) {
  const body = JSON.parse(event.body);

  if (!db) {
    await client.connect();
    db = client.db("searchhotels_data"); // DB-Name
  }

  const result = await db.collection(body.collection).insertOne(body.data);

  return {
    statusCode: 200,
    body: JSON.stringify({ ok: true, insertedId: result.insertedId })
  };
}