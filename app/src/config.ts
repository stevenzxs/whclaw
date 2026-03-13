// ─── Site ────────────────────────────────────────────────────────────────────

export interface SiteConfig {
  title: string;
  description: string;
  language: string;
}

export const siteConfig: SiteConfig = {
  title: "Wh Claw | Open Source AI",
  description: "Free AI resources, open source tools, and educational content for the developer community. Sharing knowledge to make AI accessible to everyone.",
  language: "en",
};

// ─── Navigation ──────────────────────────────────────────────────────────────

export interface MenuLink {
  label: string;
  href: string;
}

export interface SocialLink {
  icon: string;
  label: string;
  href: string;
}

export interface NavigationConfig {
  brandName: string;
  menuLinks: MenuLink[];
  socialLinks: SocialLink[];
  searchPlaceholder: string;
  cartEmptyText: string;
  cartCheckoutText: string;
  continueShoppingText: string;
  menuBackgroundImage: string;
}

export const navigationConfig: NavigationConfig = {
  brandName: "Wh Claw",
  menuLinks: [
    { label: "Home", href: "#hero" },
    { label: "Resources", href: "#products" },
    { label: "About", href: "#about" },
    { label: "Blog", href: "#blog" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
  socialLinks: [
    { icon: "Twitter", label: "Twitter", href: "https://twitter.com/alexchen_ai" },
    { icon: "Linkedin", label: "LinkedIn", href: "https://linkedin.com/in/alexchen-ai" },
    { icon: "Github", label: "GitHub", href: "https://github.com/alexchen-ai" },
  ],
  searchPlaceholder: "Search resources...",
  cartEmptyText: "No items selected",
  cartCheckoutText: "Get Notified",
  continueShoppingText: "Continue Browsing",
  menuBackgroundImage: "/images/menu-bg.jpg",
};

// ─── Hero ────────────────────────────────────────────────────────────────────

export interface HeroConfig {
  tagline: string;
  title: string;
  ctaPrimaryText: string;
  ctaPrimaryTarget: string;
  ctaSecondaryText: string;
  ctaSecondaryTarget: string;
  backgroundImage: string;
}

export const heroConfig: HeroConfig = {
  tagline: "OPEN SOURCE AI FOR EVERYONE",
  title: "Free Tools,\nTutorials &\nResources",
  ctaPrimaryText: "Explore Resources",
  ctaPrimaryTarget: "#products",
  ctaSecondaryText: "Read the Blog",
  ctaSecondaryTarget: "#blog",
  backgroundImage: "/images/hero-opensource.jpg",
};

// ─── SubHero ─────────────────────────────────────────────────────────────────

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface SubHeroConfig {
  tag: string;
  heading: string;
  bodyParagraphs: string[];
  linkText: string;
  linkTarget: string;
  image1: string;
  image2: string;
  stats: Stat[];
}

export const subHeroConfig: SubHeroConfig = {
  tag: "My Mission",
  heading: "Making AI Accessible Through Open Source",
  bodyParagraphs: [
    "I believe AI should be accessible to everyone, not just large tech companies with massive budgets. That's why I create and share free tools, tutorials, and resources for the developer community.",
    "Everything here is open source and free to use. Whether you're a student learning ML, a startup building your first AI feature, or a researcher pushing boundaries—I hope these resources help you on your journey.",
  ],
  linkText: "Learn More About Me",
  linkTarget: "#about",
  image1: "/images/education.jpg",
  image2: "/images/collaboration.jpg",
  stats: [
    { value: 25, suffix: "+", label: "Open Source Projects" },
    { value: 50, suffix: "K+", label: "GitHub Stars" },
    { value: 100, suffix: "K+", label: "Monthly Readers" },
    { value: 10, suffix: "K+", label: "Community Members" },
  ],
};

// ─── Video Section ───────────────────────────────────────────────────────────

export interface VideoSectionConfig {
  tag: string;
  heading: string;
  bodyParagraphs: string[];
  ctaText: string;
  ctaTarget: string;
  backgroundImage: string;
}

export const videoSectionConfig: VideoSectionConfig = {
  tag: "Free Learning",
  heading: "Learn AI at Your Own Pace",
  bodyParagraphs: [
    "I've created comprehensive tutorials and courses covering everything from ML fundamentals to advanced topics like LLMs and computer vision. All completely free, with code examples you can run yourself.",
    "The content is designed for hands-on learning—read, code, experiment, and build. No paywalls, no subscriptions, just knowledge shared openly with the community.",
  ],
  ctaText: "Start Learning",
  ctaTarget: "#blog",
  backgroundImage: "/images/tutorials.jpg",
};

// ─── Products ────────────────────────────────────────────────────────────────

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
}

export interface ProductsConfig {
  tag: string;
  heading: string;
  description: string;
  viewAllText: string;
  addToCartText: string;
  addedToCartText: string;
  categories: string[];
  products: Product[];
}

export const productsConfig: ProductsConfig = {
  tag: "Free Resources",
  heading: "Open Source Tools & Libraries",
  description: "A collection of free, open-source AI tools, libraries, and resources I've built for the community. Use them, fork them, contribute to them— they're yours.",
  viewAllText: "View All on GitHub",
  addToCartText: "Learn More",
  addedToCartText: "Added to List",
  categories: ["All", "Tools", "Libraries", "Tutorials"],
  products: [
    { id: 1, name: "EasyML Toolkit", price: 0, category: "Libraries", image: "/images/tools.jpg" },
    { id: 2, name: "LLM-Playground", price: 0, category: "Tools", image: "/images/collaboration.jpg" },
    { id: 3, name: "VisionAI-Starter", price: 0, category: "Libraries", image: "/images/research.jpg" },
    { id: 4, name: "ML Deployment Guide", price: 0, category: "Tutorials", image: "/images/tutorials.jpg" },
    { id: 5, name: "NLP-Utils", price: 0, category: "Libraries", image: "/images/blog-tech.jpg" },
    { id: 6, name: "AI Best Practices", price: 0, category: "Tutorials", image: "/images/blog-patterns.jpg" },
  ],
};

// ─── Features ────────────────────────────────────────────────────────────────

export interface Feature {
  icon: "Truck" | "ShieldCheck" | "Leaf" | "Heart";
  title: string;
  description: string;
}

export interface FeaturesConfig {
  features: Feature[];
}

export const featuresConfig: FeaturesConfig = {
  features: [
    {
      icon: "ShieldCheck",
      title: "100% Open Source",
      description: "All code is MIT licensed. Use it commercially, modify it, contribute back—complete freedom to build what you need.",
    },
    {
      icon: "Truck",
      title: "Active Maintenance",
      description: "Projects are actively maintained with regular updates, bug fixes, and new features based on community feedback.",
    },
    {
      icon: "Leaf",
      title: "Community Driven",
      description: "Built with input from the community. Feature requests, PRs, and discussions shape the direction of every project.",
    },
    {
      icon: "Heart",
      title: "Free Forever",
      description: "No freemium, no trials, no paywalls. Everything here is and always will be completely free for everyone.",
    },
  ],
};

// ─── Blog ────────────────────────────────────────────────────────────────────

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  image: string;
  excerpt: string;
}

export interface BlogConfig {
  tag: string;
  heading: string;
  viewAllText: string;
  readMoreText: string;
  posts: BlogPost[];
}

export const blogConfig: BlogConfig = {
  tag: "Knowledge Sharing",
  heading: "Latest from the Blog",
  viewAllText: "View All Articles",
  readMoreText: "Read More",
  posts: [
    {
      id: 1,
      title: "Building Your First Neural Network from Scratch",
      date: "March 12, 2026",
      image: "/images/blog-tech.jpg",
      excerpt: "A step-by-step guide to understanding and implementing a neural network using only NumPy. No frameworks, just pure understanding.",
    },
    {
      id: 2,
      title: "LLM Fine-tuning: A Practical Guide",
      date: "March 8, 2026",
      image: "/images/research.jpg",
      excerpt: "Everything you need to know about fine-tuning large language models for your specific use case, with working code examples.",
    },
    {
      id: 3,
      title: "MLOps for Solo Developers",
      date: "March 1, 2026",
      image: "/images/blog-patterns.jpg",
      excerpt: "Production-ready ML pipelines that don't require a team of DevOps engineers. Simple, effective approaches for small teams.",
    },
  ],
};

// ─── FAQ ─────────────────────────────────────────────────────────────────────

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export interface FaqConfig {
  tag: string;
  heading: string;
  ctaText: string;
  ctaTarget: string;
  faqs: FaqItem[];
}

export const faqConfig: FaqConfig = {
  tag: "Common Questions",
  heading: "Frequently Asked Questions",
  ctaText: "Still have questions? Reach out",
  ctaTarget: "#contact",
  faqs: [
    {
      id: 1,
      question: "Is everything really free?",
      answer: "Yes, absolutely. All tools, libraries, tutorials, and resources on this site are completely free and open source under the MIT license. You can use them for personal projects, commercial work, or anything else—no attribution required (though it's appreciated!).",
    },
    {
      id: 2,
      question: "How can I contribute?",
      answer: "Contributions are welcome! You can submit bug reports, feature requests, or pull requests on GitHub. Even sharing the resources with others who might find them helpful is a valuable contribution to the community.",
    },
    {
      id: 3,
      question: "What skill level are the tutorials for?",
      answer: "I try to make content accessible to a wide range of skill levels. Tutorials typically include both beginner-friendly explanations and advanced implementation details. If you're ever stuck, feel free to ask questions in the GitHub discussions.",
    },
    {
      id: 4,
      question: "Can I use these tools in production?",
      answer: "Many of these tools are used in production by companies and individuals. However, as with any open source software, you should evaluate whether they meet your specific requirements. All projects include documentation about their current state and any known limitations.",
    },
    {
      id: 5,
      question: "How do you sustain this work?",
      answer: "I maintain these projects in my spare time as a way to give back to the community that taught me. If you find value in my work and want to support it, the best way is to contribute code, report bugs, or simply share the resources with others.",
    },
  ],
};

// ─── About ───────────────────────────────────────────────────────────────────

export interface AboutSection {
  tag: string;
  heading: string;
  paragraphs: string[];
  quote: string;
  attribution: string;
  image: string;
  backgroundColor: string;
  textColor: string;
}

export interface AboutConfig {
  sections: AboutSection[];
}

export const aboutConfig: AboutConfig = {
  sections: [
    {
      tag: "About Me",
      heading: "A Developer Giving Back",
      paragraphs: [
        "I'm Alex, a software engineer who's been fortunate to work with AI at some amazing companies. Along the way, I've learned from countless open source projects, free tutorials, and generous community members who shared their knowledge.",
        "This site is my way of paying it forward. I create tools I wish existed, write tutorials I wish I'd had, and share everything openly so others can learn and build faster than I did.",
        "When I'm not coding or writing, you'll find me hiking, reading, or mentoring aspiring developers. I believe technology is at its best when it's shared freely and built collaboratively.",
      ],
      quote: "",
      attribution: "",
      image: "/images/about-opensource.jpg",
      backgroundColor: "#1a1a2e",
      textColor: "#ffffff",
    },
    {
      tag: "My Philosophy",
      heading: "Knowledge Wants to Be Free",
      paragraphs: [],
      quote: "The best way to learn is to teach. The best way to grow is to share. Open source isn't just about code—it's about building a better future together.",
      attribution: "-- Wh Claw",
      image: "/images/opensource-impact.jpg",
      backgroundColor: "#16213e",
      textColor: "#ffffff",
    },
  ],
};

// ─── Contact ─────────────────────────────────────────────────────────────────

export interface FormFields {
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
}

export interface ContactConfig {
  heading: string;
  description: string;
  locationLabel: string;
  location: string;
  emailLabel: string;
  email: string;
  phoneLabel: string;
  phone: string;
  formFields: FormFields;
  submitText: string;
  submittingText: string;
  submittedText: string;
  successMessage: string;
  backgroundImage: string;
}

export const contactConfig: ContactConfig = {
  heading: "Let's Connect",
  description: "Have a question, suggestion, or just want to chat about AI? I'd love to hear from you. Reach out anytime.",
  locationLabel: "Location",
  location: "San Francisco, CA",
  emailLabel: "Email",
  email: "alex@opensource-ai.dev",
  phoneLabel: "GitHub",
  phone: "github.com/alexchen-ai",
  formFields: {
    nameLabel: "Name",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    emailPlaceholder: "your@email.com",
    messageLabel: "Message",
    messagePlaceholder: "Share your thoughts, questions, or ideas...",
  },
  submitText: "Send Message",
  submittingText: "Sending...",
  submittedText: "Sent!",
  successMessage: "Thanks for reaching out! I'll get back to you as soon as I can.",
  backgroundImage: "/images/hero-opensource.jpg",
};

// ─── Footer ──────────────────────────────────────────────────────────────────

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

export interface FooterSocialLink {
  icon: string;
  label: string;
  href: string;
}

export interface FooterConfig {
  brandName: string;
  brandDescription: string;
  newsletterHeading: string;
  newsletterDescription: string;
  newsletterPlaceholder: string;
  newsletterButtonText: string;
  newsletterSuccessText: string;
  linkGroups: FooterLinkGroup[];
  legalLinks: FooterLink[];
  copyrightText: string;
  socialLinks: FooterSocialLink[];
}

export const footerConfig: FooterConfig = {
  brandName: "Wh Claw",
  brandDescription: "Open source AI tools, free tutorials, and educational resources for the developer community. Building a more accessible future for AI.",
  newsletterHeading: "Stay Updated",
  newsletterDescription: "Get notified about new tools, tutorials, and blog posts. No spam, just valuable content.",
  newsletterPlaceholder: "Enter your email",
  newsletterButtonText: "Subscribe",
  newsletterSuccessText: "Thanks for subscribing!",
  linkGroups: [
    {
      title: "Resources",
      links: [
        { label: "Open Source Tools", href: "#" },
        { label: "Tutorials", href: "#" },
        { label: "GitHub Repos", href: "#" },
        { label: "Documentation", href: "#" },
      ],
    },
    {
      title: "Connect",
      links: [
        { label: "About Me", href: "#about" },
        { label: "Blog", href: "#blog" },
        { label: "LinkedIn", href: "https://linkedin.com/in/alexchen-ai" },
        { label: "GitHub", href: "https://github.com/alexchen-ai" },
      ],
    },
    {
      title: "Community",
      links: [
        { label: "Contribute", href: "#" },
        { label: "Discussions", href: "#" },
        { label: "FAQ", href: "#faq" },
        { label: "Contact", href: "#contact" },
      ],
    },
  ],
  legalLinks: [
    { label: "MIT License", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
  copyrightText: "© 2026 Wh Claw. Open source under MIT License.",
  socialLinks: [
    { icon: "Twitter", label: "Twitter", href: "https://twitter.com/alexchen_ai" },
    { icon: "Linkedin", label: "LinkedIn", href: "https://linkedin.com/in/alexchen-ai" },
    { icon: "Github", label: "GitHub", href: "https://github.com/alexchen-ai" },
  ],
};
