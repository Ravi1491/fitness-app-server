import "dotenv/config";

const applicationConfig = {
  port: process.env.PORT || 4000,
  mongoDBUrl: process.env.MONGODB_URL,
};

export default applicationConfig;
