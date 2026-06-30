/** Anonymous public persona — no legal name on pages */
export const persona = {
  name: "Georgie the Educator",
  shortName: "Georgie",
  title: "Engineer · Trader · Educator",
  tagline: "I teach everything",
  subtagline: "Crypto · Trading · Code · Tech · Algo — Mon–Fri",
  youtube: "https://www.youtube.com/@georgietheeducator",
  shopUrl: process.env.NEXT_PUBLIC_GK_LAB_URL ?? "https://gk-lab.vercel.app",
  vibeUrl: process.env.NEXT_PUBLIC_GK_WOO_URL ?? "https://gk-woo.vercel.app",
} as const;
