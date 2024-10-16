/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
      },
    env: {
      API_URL: "http://localhost:3000",
        DB_URI: "mongodb://localhost:27017/buyitnow",

        CLOUD_NAME: "robishopitnow",
        CLOUDINARY_API_KEY: "831538294576999",
        CLOUDINARY_API_SECRET: "",

        STRIPE_PUBLIC_KEY: "pk_test_51Pxo9lL7cVZaJauDcKjKGuJCC9gGjCTB4K6fxXGDNY428nI0ZKkvB7LfUuoUtAvx1h7N7rjj6tormoNfiyH41Vi200flBxUESY",
        STRIPE_PRIVATE_KEY: "sk_test_51Pxo9lL7cVZaJauD4ZXV3RXTH1kNOUc3kfuvWKgpQ7v4z0MO28yHyfpMhsEiiVrCwasLr4I6TMyJFjIcqOTZ5xLN00jS9026NS",
        STRIPE_WEBHOOK_SECRET: 'whsec_807abcc115e991caa244070b074cf73a6cc18f0f4b5787c5c7a5d7f636e2772c',
        
        NEXTAUTH_SECRET:"codingwithabbas",
      },
      images: {
        domains: ["res.cloudinary.com"],
      },
};

export default nextConfig;
