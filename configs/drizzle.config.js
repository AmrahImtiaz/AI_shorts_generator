/** @type { import("drizzle-kit").Config } */

export default {
    schema: "./configs/schema.js",
    dialect: "postgresql",
    dbCredentials: {
      url: "postgresql://ai-short-video-generator_owner:sarRFh40pXbi@ep-damp-hill-a1z4hl4p.ap-southeast-1.aws.neon.tech/ai-short-video-generator?sslmode=require",
    },
  };