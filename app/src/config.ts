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

/** Bilingual text. `zh` is the fallback when `en` is missing and vice versa. */
export interface LocalizedText {
  en: string;
  zh: string;
}

export type ProductBadge = 'recommended' | 'new' | 'pinned';

export type ProductCategory = 'Tools' | 'Libraries' | 'Tutorials';

export interface Product {
  id: number;
  /** URL slug used in /product/:slug */
  slug: string;
  name: LocalizedText;
  version: string;
  category: ProductCategory;
  /** Technical tags, language-neutral (e.g. "LLM", "RAG") */
  tags: string[];
  /** Card cover image */
  icon: string;
  /** Extra images shown in the detail gallery */
  screenshots: string[];
  badge?: ProductBadge;
  /** Display date, e.g. "2026-07-31" */
  date: string;
  views: number;
  likes: number;
  comments: number;
  /** One-line pitch shown on the card */
  excerpt: LocalizedText;
  /** Detail page intro paragraphs */
  description: LocalizedText[];
  /** Detail page feature bullets */
  features: LocalizedText[];
  size: string;
  platform: string;
  license: string;
  repoUrl: string;
  downloadUrl: string;
}

export interface ProductsConfig {
  categories: Array<'All' | ProductCategory>;
  products: Product[];
}

export const productsConfig: ProductsConfig = {
  categories: ['All', 'Tools', 'Libraries', 'Tutorials'],
  products: [
    {
      id: 1,
      slug: 'easyml-toolkit',
      name: { en: 'EasyML Toolkit', zh: 'EasyML 工具包' },
      version: '2.4.1',
      category: 'Libraries',
      tags: ['ML', 'scikit-learn', 'Python'],
      icon: '/images/tools.jpg',
      screenshots: ['/images/tools.jpg', '/images/research.jpg', '/images/education.jpg'],
      badge: 'pinned',
      date: '2026-07-31',
      views: 12840,
      likes: 326,
      comments: 45,
      excerpt: {
        en: 'A batteries-included ML toolkit that turns 200 lines of boilerplate into 5.',
        zh: '开箱即用的机器学习工具包，把 200 行模板代码压缩到 5 行。',
      },
      description: [
        {
          en: 'EasyML Toolkit wraps the most common machine learning workflows—data cleaning, feature engineering, training, and evaluation—behind a single, consistent API. It is built for developers who want results without drowning in boilerplate.',
          zh: 'EasyML 工具包将最常见的机器学习工作流——数据清洗、特征工程、训练与评估——封装在一套统一 API 之后，为想要快速拿到结果、不想淹没在模板代码里的开发者而生。',
        },
        {
          en: 'Every pipeline is fully inspectable and exportable, so you never lose control. Start with the presets, then peel back the layers as your needs grow.',
          zh: '每条流水线都完全可检查、可导出，你永远不会失去控制权。先用预设跑起来，再随需求深入每一层。',
        },
      ],
      features: [
        { en: 'One-line training pipelines for tabular data', zh: '一行代码完成表格数据训练流水线' },
        { en: 'Automatic feature engineering and selection', zh: '自动特征工程与特征选择' },
        { en: 'Built-in model comparison leaderboard', zh: '内置模型对比排行榜' },
        { en: 'Exports pure scikit-learn code', zh: '可导出纯 scikit-learn 代码' },
      ],
      size: '4.2 MB',
      platform: 'Windows / macOS / Linux',
      license: 'MIT',
      repoUrl: 'https://github.com/alexchen-ai/easyml-toolkit',
      downloadUrl: 'https://github.com/alexchen-ai/easyml-toolkit/releases',
    },
    {
      id: 2,
      slug: 'llm-playground',
      name: { en: 'LLM-Playground', zh: 'LLM 游乐场' },
      version: '1.9.0',
      category: 'Tools',
      tags: ['LLM', 'Prompt', 'OpenAI'],
      icon: '/images/collaboration.jpg',
      screenshots: ['/images/collaboration.jpg', '/images/blog-tech.jpg'],
      badge: 'recommended',
      date: '2026-07-26',
      views: 23100,
      likes: 892,
      comments: 134,
      excerpt: {
        en: 'Compare prompts across 20+ models side by side, with cost and latency tracking.',
        zh: '并排对比 20+ 模型的提示词效果，自带成本与延迟追踪。',
      },
      description: [
        {
          en: 'LLM-Playground is a local-first workbench for prompt engineering. Run the same prompt against multiple models, diff the outputs, and track what every experiment costs—before you ship it.',
          zh: 'LLM 游乐场是一个本地优先的提示词工程工作台。用同一条提示词同时跑多个模型，对比输出差异，并在上线前追踪每次实验的成本。',
        },
      ],
      features: [
        { en: 'Side-by-side output diffing across models', zh: '多模型输出并排对比' },
        { en: 'Per-request cost and latency dashboard', zh: '按请求统计成本与延迟' },
        { en: 'Prompt version history with rollback', zh: '提示词版本历史与回滚' },
      ],
      size: '38 MB',
      platform: 'macOS / Windows',
      license: 'MIT',
      repoUrl: 'https://github.com/alexchen-ai/llm-playground',
      downloadUrl: 'https://github.com/alexchen-ai/llm-playground/releases',
    },
    {
      id: 3,
      slug: 'visionai-starter',
      name: { en: 'VisionAI-Starter', zh: 'VisionAI 入门套件' },
      version: '0.8.3',
      category: 'Libraries',
      tags: ['CV', 'YOLO', 'ONNX'],
      icon: '/images/research.jpg',
      screenshots: ['/images/research.jpg'],
      date: '2026-07-22',
      views: 8470,
      likes: 203,
      comments: 28,
      excerpt: {
        en: 'Pre-trained detection and segmentation models with a 10-minute quickstart.',
        zh: '预训练检测与分割模型，10 分钟即可跑通快速上手。',
      },
      description: [
        {
          en: 'VisionAI-Starter packages production-grade computer vision models behind three lines of code. Detection, segmentation, and pose estimation all run locally on CPU or GPU.',
          zh: 'VisionAI 入门套件将生产级计算机视觉模型封装到三行代码之内。检测、分割与姿态估计均可在本地 CPU 或 GPU 上运行。',
        },
      ],
      features: [
        { en: 'ONNX runtime, no PyTorch install required', zh: 'ONNX 运行时，无需安装 PyTorch' },
        { en: 'CPU fallback with quantized models', zh: '量化模型支持 CPU 回退' },
      ],
      size: '96 MB',
      platform: 'Windows / macOS / Linux',
      license: 'Apache-2.0',
      repoUrl: 'https://github.com/alexchen-ai/visionai-starter',
      downloadUrl: 'https://github.com/alexchen-ai/visionai-starter/releases',
    },
    {
      id: 4,
      slug: 'ml-deployment-guide',
      name: { en: 'ML Deployment Guide', zh: '机器学习部署指南' },
      version: '3.0',
      category: 'Tutorials',
      tags: ['MLOps', 'Docker', 'FastAPI'],
      icon: '/images/tutorials.jpg',
      screenshots: ['/images/tutorials.jpg', '/images/integration.jpg'],
      date: '2026-07-16',
      views: 15230,
      likes: 671,
      comments: 96,
      excerpt: {
        en: 'From notebook to production: a complete deployment playbook with working code.',
        zh: '从 Notebook 到生产环境：附带完整可运行代码的部署实战手册。',
      },
      description: [
        {
          en: 'This guide walks through twelve real deployment scenarios, from a single FastAPI endpoint to autoscaling GPU inference on Kubernetes. Every chapter ships with a runnable repository.',
          zh: '本指南涵盖十二个真实部署场景，从单个 FastAPI 接口到 Kubernetes 上自动伸缩的 GPU 推理服务。每一章都附带可运行的代码仓库。',
        },
      ],
      features: [
        { en: '12 end-to-end deployment scenarios', zh: '12 个端到端部署场景' },
        { en: 'Docker Compose and K8s manifests included', zh: '附带 Docker Compose 与 K8s 清单' },
        { en: 'Load testing scripts with k6', zh: '附带 k6 压测脚本' },
      ],
      size: '—',
      platform: 'Web / PDF',
      license: 'CC BY 4.0',
      repoUrl: 'https://github.com/alexchen-ai/ml-deployment-guide',
      downloadUrl: 'https://github.com/alexchen-ai/ml-deployment-guide',
    },
    {
      id: 5,
      slug: 'nlp-utils',
      name: { en: 'NLP-Utils', zh: 'NLP 工具集' },
      version: '1.5.2',
      category: 'Libraries',
      tags: ['NLP', 'Tokenizer', 'zh'],
      icon: '/images/blog-tech.jpg',
      screenshots: ['/images/blog-tech.jpg'],
      badge: 'new',
      date: '2026-08-03',
      views: 3150,
      likes: 118,
      comments: 12,
      excerpt: {
        en: 'Fast multilingual tokenization and text cleaning, with first-class Chinese support.',
        zh: '快速的多语言分词与文本清洗，对中文提供一流支持。',
      },
      description: [
        {
          en: 'NLP-Utils is a zero-dependency text processing library tuned for Chinese-English mixed content. It handles segmentation, normalization, and entity extraction without pulling in a deep learning framework.',
          zh: 'NLP 工具集是一个零依赖的文本处理库，专为中英混合内容调优。分词、归一化与实体抽取全都不需要引入深度学习框架。',
        },
      ],
      features: [
        { en: 'Chinese-English mixed segmentation', zh: '中英混合分词' },
        { en: 'Zero runtime dependencies', zh: '零运行时依赖' },
      ],
      size: '1.1 MB',
      platform: 'Windows / macOS / Linux',
      license: 'MIT',
      repoUrl: 'https://github.com/alexchen-ai/nlp-utils',
      downloadUrl: 'https://github.com/alexchen-ai/nlp-utils/releases',
    },
    {
      id: 6,
      slug: 'ai-best-practices',
      name: { en: 'AI Best Practices', zh: 'AI 最佳实践' },
      version: '2026.7',
      category: 'Tutorials',
      tags: ['Guide', 'Architecture'],
      icon: '/images/blog-patterns.jpg',
      screenshots: ['/images/blog-patterns.jpg', '/images/blog-solutions.jpg'],
      date: '2026-07-08',
      views: 19800,
      likes: 764,
      comments: 152,
      excerpt: {
        en: 'Opinionated patterns for structuring AI projects that survive production.',
        zh: '一套经得起生产环境考验的 AI 项目结构设计实践。',
      },
      description: [
        {
          en: 'A living document distilling five years of shipping AI products: how to structure repositories, version prompts and datasets, evaluate models honestly, and avoid the failure modes that only show up in production.',
          zh: '一份持续更新的文档，浓缩五年 AI 产品上线经验：如何组织代码仓库、管理提示词与数据集版本、诚实地评估模型，以及避开那些只在生产环境才暴露的坑。',
        },
      ],
      features: [
        { en: 'Repository layout templates', zh: '代码仓库结构模板' },
        { en: 'Evaluation harness patterns', zh: '模型评估框架设计模式' },
        { en: 'Production incident case studies', zh: '生产事故案例复盘' },
      ],
      size: '—',
      platform: 'Web',
      license: 'CC BY 4.0',
      repoUrl: 'https://github.com/alexchen-ai/ai-best-practices',
      downloadUrl: 'https://github.com/alexchen-ai/ai-best-practices',
    },
    {
      id: 7,
      slug: 'rag-starter-kit',
      name: { en: 'RAG-Starter-Kit', zh: 'RAG 入门套件' },
      version: '0.4.0',
      category: 'Tools',
      tags: ['RAG', 'Embedding', 'VectorDB'],
      icon: '/images/product-1.jpg',
      screenshots: ['/images/product-1.jpg', '/images/blog-projects.jpg'],
      badge: 'new',
      date: '2026-08-01',
      views: 5420,
      likes: 246,
      comments: 37,
      excerpt: {
        en: 'A working RAG pipeline in one docker-compose: ingest, embed, retrieve, chat.',
        zh: '一条 docker-compose 即可跑通的 RAG 流水线： ingest、向量检索、对话全内置。',
      },
      description: [
        {
          en: 'RAG-Starter-Kit gives you a retrieval-augmented generation pipeline that actually works on day one. Point it at a folder of documents and start chatting with your data in five minutes.',
          zh: 'RAG 入门套件给你一条第一天就能跑通的检索增强生成流水线。指向一个文档文件夹，五分钟内开始与你的数据对话。',
        },
      ],
      features: [
        { en: 'Pluggable vector stores (Qdrant, pgvector, SQLite-VSS)', zh: '可插拔向量库（Qdrant、pgvector、SQLite-VSS）' },
        { en: 'Built-in citation and source highlighting', zh: '内置引用来源高亮' },
        { en: 'One-command local LLM mode', zh: '一条命令切换本地大模型模式' },
      ],
      size: '212 MB',
      platform: 'Docker',
      license: 'MIT',
      repoUrl: 'https://github.com/alexchen-ai/rag-starter-kit',
      downloadUrl: 'https://github.com/alexchen-ai/rag-starter-kit/releases',
    },
    {
      id: 8,
      slug: 'promptflow-designer',
      name: { en: 'PromptFlow Designer', zh: 'PromptFlow 设计器' },
      version: '1.2.0',
      category: 'Tools',
      tags: ['Prompt', 'Workflow', 'GUI'],
      icon: '/images/product-2.jpg',
      screenshots: ['/images/product-2.jpg'],
      date: '2026-06-30',
      views: 9610,
      likes: 318,
      comments: 41,
      excerpt: {
        en: 'Drag-and-drop canvas for building and testing LLM workflows visually.',
        zh: '可视化拖拽画布，用图形方式构建并测试 LLM 工作流。',
      },
      description: [
        {
          en: 'PromptFlow Designer turns prompt chains into visual graphs you can run, pause, and debug node by node. Export to YAML when you are ready to version control your flow.',
          zh: 'PromptFlow 设计器把提示词链路变成可视化流程图，可逐节点运行、暂停与调试。完成后可导出 YAML 纳入版本管理。',
        },
      ],
      features: [
        { en: 'Visual node-based flow editor', zh: '可视化节点流程编辑器' },
        { en: 'Per-node run and debug', zh: '逐节点运行与调试' },
      ],
      size: '84 MB',
      platform: 'macOS / Windows',
      license: 'MIT',
      repoUrl: 'https://github.com/alexchen-ai/promptflow-designer',
      downloadUrl: 'https://github.com/alexchen-ai/promptflow-designer/releases',
    },
    {
      id: 9,
      slug: 'tinygpt-from-scratch',
      name: { en: 'TinyGPT from Scratch', zh: '从零手写 TinyGPT' },
      version: '1.0',
      category: 'Tutorials',
      tags: ['GPT', 'NumPy', 'Course'],
      icon: '/images/education.jpg',
      screenshots: ['/images/education.jpg', '/images/subhero-tech.jpg'],
      badge: 'recommended',
      date: '2026-06-18',
      views: 28450,
      likes: 1203,
      comments: 218,
      excerpt: {
        en: 'Build a working GPT in 600 lines of NumPy. No frameworks, pure understanding.',
        zh: '用 600 行 NumPy 手写一个可运行的 GPT。不用框架，只讲透原理。',
      },
      description: [
        {
          en: 'This course builds a complete GPT model from first principles: tokenization, attention, backpropagation, and sampling—all in plain NumPy. By the end, every line of a transformer will make sense to you.',
          zh: '本课程从第一性原理出发构建完整的 GPT 模型：分词、注意力、反向传播与采样——全部使用纯 NumPy。学完之后，Transformer 的每一行代码你都能看懂。',
        },
      ],
      features: [
        { en: '600 lines of annotated NumPy', zh: '600 行逐行注释的 NumPy 代码' },
        { en: 'Trains on CPU in under an hour', zh: 'CPU 上一小时内即可完成训练' },
        { en: 'Interactive notebooks for every chapter', zh: '每章附带可交互 Notebook' },
      ],
      size: '—',
      platform: 'Jupyter / Web',
      license: 'MIT',
      repoUrl: 'https://github.com/alexchen-ai/tinygpt-from-scratch',
      downloadUrl: 'https://github.com/alexchen-ai/tinygpt-from-scratch',
    },
    {
      id: 10,
      slug: 'agentbench',
      name: { en: 'AgentBench', zh: 'AgentBench 评测框架' },
      version: '0.9.1',
      category: 'Libraries',
      tags: ['Agent', 'Eval', 'Benchmark'],
      icon: '/images/integration.jpg',
      screenshots: ['/images/integration.jpg'],
      date: '2026-06-05',
      views: 7230,
      likes: 189,
      comments: 24,
      excerpt: {
        en: 'Reproducible evaluation harness for LLM agents, with 40 built-in tasks.',
        zh: '可复现的 LLM 智能体评测框架，内置 40 个评测任务。',
      },
      description: [
        {
          en: 'AgentBench scores agent behavior on realistic tasks—file editing, web navigation, multi-step reasoning—and produces comparable, reproducible reports across model versions.',
          zh: 'AgentBench 在真实任务上评测智能体表现——文件编辑、网页操作、多步推理——并生成跨模型版本可对比、可复现的报告。',
        },
      ],
      features: [
        { en: '40 realistic agent tasks included', zh: '内置 40 个真实智能体任务' },
        { en: 'Deterministic, reproducible scoring', zh: '确定性、可复现的评分' },
      ],
      size: '12 MB',
      platform: 'Windows / macOS / Linux',
      license: 'Apache-2.0',
      repoUrl: 'https://github.com/alexchen-ai/agentbench',
      downloadUrl: 'https://github.com/alexchen-ai/agentbench/releases',
    },
    {
      id: 11,
      slug: 'whisper-notes',
      name: { en: 'Whisper-Notes', zh: 'Whisper 语音笔记' },
      version: '2.0.0',
      category: 'Tools',
      tags: ['Whisper', 'STT', 'Offline'],
      icon: '/images/product-3.jpg',
      screenshots: ['/images/product-3.jpg', '/images/blog-trends.jpg'],
      badge: 'new',
      date: '2026-08-02',
      views: 4380,
      likes: 205,
      comments: 19,
      excerpt: {
        en: 'Offline voice memos transcribed on-device. Private by default, fast by design.',
        zh: '完全离线的语音笔记转写工具。默认保护隐私，为速度而生。',
      },
      description: [
        {
          en: 'Whisper-Notes records and transcribes voice memos entirely on your machine using optimized Whisper models. Your audio never leaves the device, and transcription keeps up with real time.',
          zh: 'Whisper 语音笔记使用优化后的 Whisper 模型在你本机完成录音与转写。音频永不离开设备，转写速度可跟上实时语速。',
        },
      ],
      features: [
        { en: 'Fully offline, on-device transcription', zh: '完全离线的设备端转写' },
        { en: 'Chinese and English auto-detection', zh: '中英文自动识别' },
        { en: 'Exports to Markdown and SRT', zh: '支持导出 Markdown 与 SRT 字幕' },
      ],
      size: '1.4 GB',
      platform: 'macOS',
      license: 'MIT',
      repoUrl: 'https://github.com/alexchen-ai/whisper-notes',
      downloadUrl: 'https://github.com/alexchen-ai/whisper-notes/releases',
    },
    {
      id: 12,
      slug: 'ml-interview-guide',
      name: { en: 'ML Interview Guide', zh: '机器学习面试指南' },
      version: '4.1',
      category: 'Tutorials',
      tags: ['Interview', 'Career'],
      icon: '/images/training.jpg',
      screenshots: ['/images/training.jpg'],
      date: '2026-05-20',
      views: 31020,
      likes: 1480,
      comments: 263,
      excerpt: {
        en: '400+ real ML interview questions with reference answers and coding drills.',
        zh: '400+ 道真实机器学习面试题，附参考答案与编程练习。',
      },
      description: [
        {
          en: 'A community-maintained collection of machine learning interview questions from real loops at top companies, organized by topic and difficulty, each with a reference answer and follow-up drills.',
          zh: '由社区维护的机器学习面试题库，全部来自一线公司真实面试，按主题与难度整理，每题附参考答案与进阶练习。',
        },
      ],
      features: [
        { en: '400+ questions with reference answers', zh: '400+ 道题附参考答案' },
        { en: 'Coding drills with test cases', zh: '附带测试用例的编程练习' },
      ],
      size: '—',
      platform: 'Web / PDF',
      license: 'CC BY-SA 4.0',
      repoUrl: 'https://github.com/alexchen-ai/ml-interview-guide',
      downloadUrl: 'https://github.com/alexchen-ai/ml-interview-guide',
    },
  ],
};

export const getProductBySlug = (slug: string): Product | undefined =>
  productsConfig.products.find((p) => p.slug === slug);

export const getRelatedProducts = (product: Product, limit = 4): Product[] =>
  productsConfig.products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, limit);

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
