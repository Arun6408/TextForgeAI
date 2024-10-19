import { Template } from "./app/dashboard/_components/TempleteListSection";
export const Templetes: Template[] = [
  // 1. Catchy Blog Titles
  {
    name: "Catchy Blog Titles",
    description:
      "Create attention-grabbing, SEO-optimized blog titles based on your niche and outline.",
    category: "Blog",
    icon: "/blog.png",
    aiPrompt:
      "Generate 10 SEO-friendly blog titles based on the given niche and outline. Ensure titles are optimized for search engines and trends.",
    slug: "catchy-blog-titles",
    form: [
      {
        label: "Enter your blog niche",
        feild: "input",
        name: "blogNiche",
        required: true,
      },
      {
        label: "Enter blog outline (Optional)",
        feild: "textarea",
        name: "blogOutline",
      },
    ],
  },

  // 2. Hashtag Suggestions
  {
    name: "Hashtag Suggestions",
    description:
      "Find trending and relevant hashtags for your social media posts.",
    category: "Social Media",
    icon: "/hashtag.png",
    aiPrompt:
      "Suggest 20 trending hashtags based on the provided topic and platform. Ensure hashtags are relevant and increase visibility.",
    slug: "hashtag-suggestions",
    form: [
      {
        label: "Enter topic or keyword",
        feild: "input",
        name: "postTopic",
        required: true,
      },
      {
        label: "Select platform",
        feild: "select",
        options: ["Twitter", "Instagram", "Facebook", "LinkedIn"],
        name: "platform",
        required: true,
      },
    ],
  },

  // 3. YouTube SEO Titles
  {
    name: "YouTube SEO Titles",
    description:
      "Craft optimized YouTube video titles to increase search visibility.",
    category: "YouTube",
    icon: "/youtube.png",
    aiPrompt:
      "Generate 5 SEO-friendly YouTube video titles based on the provided topic. Titles should attract viewers and boost discoverability.",
    slug: "youtube-seo-titles",
    form: [
      {
        label: "Enter video topic",
        feild: "input",
        name: "videoTopic",
        required: true,
      },
    ],
  },

  // 4. Social Media Post Writer
  {
    name: "Social Media Post Writer",
    description:
      "Create engaging posts tailored for platforms like Twitter, Instagram, and Facebook.",
    category: "Social Media",
    icon: "/social-media.png",
    aiPrompt:
      "Write 5 engaging social media posts based on the given topic and on the given platform. Include relevant hashtags and emojis.",
    slug: "social-media-post-writer",
    form: [
      {
        label: "Enter your topic",
        feild: "input",
        name: "postTopic",
        required: true,
      },
      {
        label: "Select platform",
        feild: "select",
        options: ["Twitter", "Instagram", "Facebook", "LinkedIn"],
        name: "platform",
        required: true,
      },
    ],
  },

  // 5. Article Rewriter
  {
    name: "Article Rewriter",
    description:
      "Enhance or rewrite your existing content for better clarity and engagement.",
    category: "Content Writing",
    icon: "/article.png",
    aiPrompt:
      "Rewrite the provided content to improve clarity, readability, and engagement while maintaining the original message.",
    slug: "article-rewriter",
    form: [
      {
        label: "Paste your content",
        feild: "textarea",
        name: "content",
        required: true,
      },
    ],
  },

  // 6. YouTube Script Creator
  {
    name: "YouTube Script Creator",
    description:
      "Generate compelling YouTube video scripts with a structured flow and strong call-to-action.",
    category: "YouTube",
    icon: "/youtube.png",
    aiPrompt:
      "Create a YouTube video script based on the provided topic. Include an engaging intro, structured content, and a call-to-action.",
    slug: "youtube-script-creator",
    form: [
      {
        label: "Enter video topic",
        feild: "input",
        name: "videoTopic",
        required: true,
      },
      {
        label: "Enter video outline (Optional)",
        feild: "textarea",
        name: "videoOutline",
      },
    ],
  },

  // 7. Text Improver
  {
    name: "Text Improver",
    description: "Improve the quality and tone of your writing.",
    category: "Writing",
    icon: "/text-formatting.png",
    aiPrompt:
      "Enhance the provided text by improving its clarity, tone, and flow while maintaining the original message.",
    slug: "text-improver",
    form: [
      {
        label: "Paste your text",
        feild: "textarea",
        name: "text",
        required: true,
      },
    ],
  },

  // 8. Daily Planner
  {
    name: "Daily Planner",
    description: "Plan your day with detailed tasks and priorities.",
    category: "Productivity",
    icon: "/planner.png",
    aiPrompt:
      "Create a daily plan based on the user's tasks and goals. Include time blocks for each task and prioritize the most important ones.",
    slug: "daily-planner",
    form: [
      {
        label: "Enter your tasks for the day",
        feild: "textarea",
        name: "tasks",
        required: true,
      },
      {
        label: "Specify your priority task",
        feild: "input",
        name: "priorityTask",
      },
    ],
  },

  // 9. Study Planner
  {
    name: "Study Planner",
    description:
      "Organize your study schedule with specific goals and time blocks for each subject.",
    category: "Education",
    icon: "/notebook.png",
    aiPrompt:
      "Create a study plan based on the provided subjects. Allocate time for each subject, and include breaks and revision sessions.",
    slug: "study-planner",
    form: [
      {
        label: "Enter subjects/topics to study",
        feild: "textarea",
        name: "studyTopics",
        required: true,
      },
      {
        label: "Enter available time (hours)",
        feild: "input",
        name: "availableTime",
        required: true,
      },
    ],
  },

  // 10. App Feature Ideas
  {
    name: "App Feature Ideas",
    description:
      "Create a structured list of features and benefits for your app idea.",
    category: "App Development",
    icon: "/application.png",
    aiPrompt:
      "Generate a detailed list of features for the app based on the provided app type. Include descriptions and user benefits.",
    slug: "app-feature-ideas",
    form: [
      {
        label: "Enter app type",
        feild: "input",
        name: "appType",
        required: true,
      },
      {
        label: "Enter app target audience",
        feild: "input",
        name: "targetAudience",
      },
    ],
  },

  // 11. Recipe Creator
  {
    name: "Recipe Creator",
    description:
      "Generate step-by-step recipes based on cuisine type and ingredients.",
    category: "Cooking",
    icon: "/recipe.png",
    aiPrompt:
      "Create a recipe based on the provided dish type and ingredients. Include step-by-step instructions, cooking time, and tips.",
    slug: "recipe-creator",
    form: [
      {
        label: "Enter dish type",
        feild: "input",
        name: "dishType",
        required: true,
      },
      {
        label: "Enter main ingredients",
        feild: "textarea",
        name: "ingredients",
        required: true,
      },
    ],
  },

  // 12. Email Subject Line Ideas
  {
    name: "Email Subject Line Ideas",
    description:
      "Generate effective subject lines for your emails to boost open rates.",
    category: "Marketing",
    icon: "/subject.png",
    aiPrompt:
      "Create 10 email subject line ideas based on the provided topic. Make sure they are engaging and optimize for open rates.",
    slug: "email-subject-line-ideas",
    form: [
      {
        label: "Enter email topic",
        feild: "input",
        name: "emailTopic",
        required: true,
      },
    ],
  },

  // 13. Presentation Outline
  {
    name: "Presentation Outline",
    description:
      "Craft an organized outline for your presentation, including key points and flow.",
    category: "Business",
    icon: "/board.png",
    aiPrompt:
      "Create a presentation outline based on the provided topic. Include key points, sections, and a structured flow.",
    slug: "presentation-outline",
    form: [
      {
        label: "Enter presentation topic",
        feild: "input",
        name: "presentationTopic",
        required: true,
      },
      {
        label: "Enter main points (Optional)",
        feild: "textarea",
        name: "mainPoints",
      },
    ],
  },

  // 14. Resume Enhancer
  {
    name: "Resume Enhancer",
    description:
      "Improve your resume by optimizing job titles, descriptions, and keywords.",
    category: "Career",
    icon: "/cv.png",
    aiPrompt:
      "Enhance the provided resume by optimizing job titles, descriptions, and keywords for better job prospects.",
    slug: "resume-enhancer",
    form: [
      {
        label: "Paste your resume",
        feild: "textarea",
        name: "resumeContent",
        required: true,
      },
    ],
  },

  // 15. LinkedIn Profile Summary
  {
    name: "LinkedIn Profile Summary",
    description:
      "Write a compelling LinkedIn profile summary that highlights your skills and achievements.",
    category: "Career",
    icon: "/linkedin.png",
    aiPrompt:
      "Write a LinkedIn profile summary based on the provided details. Highlight skills, achievements, and career goals.",
    slug: "linkedin-profile-summary",
    form: [
      {
        label: "Enter your key skills and achievements",
        feild: "textarea",
        name: "skillsAchievements",
        required: true,
      },
    ],
  },
];
