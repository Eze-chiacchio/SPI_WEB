export type ServiceItem = {
  icon: string;
  title: string;
  description: string;
};

export type Dictionary = {
  meta: {
    title: string;
    description: string;
    keywords: string[];
  };
  brand: {
    name: string;
    short: string;
    tagline: string;
  };
  nav: {
    home: string;
    about: string;
    services: string;
    gallery: string;
    contact: string;
  };
  common: {
    contactCta: string;
    learnMore: string;
    viewServices: string;
    followUs: string;
    linkedin: string;
    location: string;
    rights: string;
    home: string;
  };
  home: {
    hero: {
      eyebrow: string;
      title: string;
      lead: string;
    };
    intro: {
      eyebrow: string;
      title: string;
      paragraphs: string[];
      highlights: string[];
    };
    pillars: {
      title: string;
      items: { icon: string; title: string; description: string }[];
    };
    services: {
      eyebrow: string;
      title: string;
      lead: string;
    };
    linkedin: {
      title: string;
      lead: string;
    };
    cta: {
      title: string;
      lead: string;
    };
  };
  about: {
    eyebrow: string;
    title: string;
    lead: string;
    mission: { title: string; text: string };
    vision: { title: string; text: string };
    values: {
      title: string;
      lead: string;
      items: { icon: string; title: string; text: string }[];
    };
  };
  services: {
    eyebrow: string;
    title: string;
    lead: string;
    intro: string[];
    items: ServiceItem[];
    scopeTitle: string;
    scope: string[];
  };
  gallery: {
    eyebrow: string;
    title: string;
    lead: string;
    captions: string[];
  };
  contact: {
    eyebrow: string;
    title: string;
    lead: string;
    companyLabel: string;
    hoursTitle: string;
    hoursValue: string;
    hoursNote: string;
    linkedinLabel: string;
    emailLabel: string;
    form: {
      name: string;
      email: string;
      company: string;
      message: string;
      submit: string;
      note: string;
      subjectPrefix: string;
    };
  };
  footer: {
    tagline: string;
    navTitle: string;
    contactTitle: string;
    rights: string;
  };
};
