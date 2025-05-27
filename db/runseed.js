const { seed } = require("./seed");
const mongoose = require("mongoose");

exports.runSeed = async () => {
  try {
    await seed();
    console.log("🌱 Seed complete");
  } catch (err) {
    console.error("❌ Seed error:", err);
  } finally {
    mongoose.connection.close(); // ✅ THIS IS IMPORTANT
  }
};