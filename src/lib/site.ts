const rawUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const site = {
  email: "Info@spiconosur.com",
  linkedin: "https://www.linkedin.com/company/servicios-para-la-industria-sa",
  url: (rawUrl ? rawUrl.replace(/\/$/, "") : "https://spiconosur.com"),
  ogImage: "/images/hero.jpg",
  founded: 2024,
};
