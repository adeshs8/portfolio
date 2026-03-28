const siteData = {
  name: "Adesh",
  brandName: "Adesh Srivastava",
  heroTitle: "Hello, I'm Adesh.",
  heroAccent: "Software Engineering, Distributed Systems and Systems Thinking.",
  summary: [
    "I am a backend-focused Software Engineer with around 9 years of experience working across architecture, platform thinking, and engineering execution. My work centers on systems that need to scale cleanly, behave reliably, and stay understandable as teams and complexity grow.",
    "I operate with a staff-engineering lens: improving technical direction, raising design quality, and helping teams make better architectural decisions in production-facing systems.",
    "This site collects the articles and books I am reading/writing, and AI & engineering practice notes I keep revisiting."
  ],
  footer:
    "Static site for GitHub Pages. Replace the placeholder links and entries in data.js with your own material.",
  socialLinks: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/adeshs8/" },
    { label: "Resume", href: "./resume.pdf", newTab: true },
    { label: "GitHub", href: "https://github.com/adeshs8" },
    { label: "Substack", href: "https://substack.com/@adeshs" },
    { label: "Medium", href: "https://medium.com/@adeshsrivastava0" }
  ],
  featuredWork: [
    {
      meta: "Featured Work",
      title: "Fly.io Distributed Systems Challenge Solutions",
      subtitle:
        "A Maelstrom-based set of distributed systems solutions covering broadcast, replication, fault tolerance, and coordination patterns under failure.",
      href: "https://github.com/adeshs8/maelstrom-work",
      context: "An implementation-focused project that showcases practical distributed-systems thinking beyond interview-style design notes.",
      cta: "View project"
    },
    {
      meta: "Featured Work",
      title: "pydantic-cli",
      subtitle:
        "A typed CLI project built around Pydantic, aimed at practical Python tooling and AI-adjacent developer workflows.",
      href: "https://github.com/adeshs8/pydantic-cli",
      context: "A smaller but sharp project that highlights developer experience, type safety, and practical tool-building.",
      cta: "View project"
    }
  ],
  articles: [
    {
      meta: "Jan 2026",
      title: "Scaling PostgreSQL to power 800 million ChatGPT users",
      subtitle: "OpenAI's engineering writeup on scaling PostgreSQL with replicas, pooling, caching, and workload isolation for massive read-heavy traffic.",
      href: "https://openai.com/index/scaling-postgresql/"
    },
    {
      meta: "Dec 2025",
      title: "How Netflix Built a Distributed Write Ahead Log For Its Data Platform",
      subtitle: "An engineering breakdown of Netflix's write-ahead log system for durability, retries, replication, and consistency across its data platform.",
      href: "https://blog.bytebytego.com/p/how-netflix-built-a-distributed-write?r=4ostd&utm_campaign=post&utm_medium=web&triedRedirect=true"
    },
    {
      meta: "Dec 2025",
      title: "How Reddit Migrated Comments Functionality from Python to Go",
      subtitle: "A migration story about breaking a Python monolith into Go services with dual writes, sister datastores, and careful verification.",
      href: "https://blog.bytebytego.com/p/how-reddit-migrated-comments-functionality?utm_source=%2Finbox%2Fsaved&utm_medium=reader2"
    },
    {
      meta: "Nov 2025",
      title: "Building Truly Idempotent Systems",
      subtitle: "Practical notes on designing systems that remain safe and repeatable under retries, duplicates, and partial failures.",
      href: "https://sahilserver.substack.com/p/building-truly-idempotent-systems?utm_source=%2Finbox%2Fsaved&utm_medium=reader2"
    }
  ],
  reading: [
    {
      meta: "Mar 2026",
      title: "Fly.io Distributed Systems Challenge Solutions",
      subtitle: "My Maelstrom-based solutions for Fly.io's distributed systems challenges, covering replication, broadcast, fault tolerance, and coordination patterns.",
      href: "https://github.com/adeshs8/maelstrom-work"
    },
    {
      meta: "Mar 2020",
      title: "How to Write a Timestamp-Based Task Scheduler",
      subtitle: "A design walkthrough for building a distributed, horizontally scalable scheduler that executes tasks at a predefined time.",
      href: "https://medium.com/better-programming/how-to-write-a-timestamp-based-task-scheduler-1312abe9e6d?source=user_profile_page---------0-------------6d942bd27962----------------------"
    },
    {
      meta: "Aug 2018",
      title: "Decorator Design Patterns",
      subtitle: "An introduction to the decorator pattern with a practical Java example and a runtime composition mindset.",
      href: "https://medium.com/@adeshsrivastava0/decorator-design-patterns-3d6ed6d5aba9"
    },
    {
      meta: "Aug 2018",
      title: "Decorator Design Patterns",
      subtitle: "A DZone version of the decorator pattern writeup focused on dynamic behavior extension without changing core classes.",
      href: "https://dzone.com/articles/decorator-design-patterns"
    }
  ],
  aiLlms: {
    href: "./ai.html",
    title: "AI Articles and Learnings",
    description: "Selected articles and practical learnings across agents, applied AI systems, and real-world LLM engineering.",
    items: [
      {
        meta: "Aug 2025",
        title: "pydantic-cli",
        subtitle: "A typed CLI project built around Pydantic, useful as part of practical Python tooling and AI-adjacent developer workflows.",
        href: "https://github.com/adeshs8/pydantic-cli"
      },
      {
        meta: "Aug 2025",
        title: "A practical guide to building agents",
        subtitle: "OpenAI's guide to agent foundations, orchestration patterns, guardrails, and human-in-the-loop design.",
        href: "https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/"
      },
      {
        meta: "Feb 2025",
        title: "Introducing deep research",
        subtitle: "OpenAI's release note and design rationale for agentic, multi-step web research in ChatGPT.",
        href: "https://openai.com/index/introducing-deep-research/"
      },
      {
        meta: "Dec 2024",
        title: "Building effective agents",
        subtitle: "Anthropic's guidance on simple, composable agent patterns that work better than over-engineered frameworks.",
        href: "https://www.anthropic.com/research/building-effective-agents/"
      }
    ]
  },
  learning: [
    {
      key: "hld",
      href: "./hld.html",
      label: "System Design",
      title: "System Design",
      archiveTitle: "System Design",
      archiveIntro: "A complete list of high-level design exercises and architecture notes.",
      description: "Large-scale design problems, system boundaries, and tradeoff notes.",
      items: [
        {
          meta: "Mar 2026",
          title: "Tinder",
          subtitle: "Profile discovery, swipes, match generation, and geolocation-aware feeds at very high engagement volume.",
          href: "https://newsletter.systemdesign.one/p/tinder-architecture"
        },
        {
          meta: "Feb 2026",
          title: "Real time chat system",
          subtitle: "Persistent connections, fan-out, delivery guarantees, and online presence in a large-scale messaging system.",
          href: "https://systemdesign.one/slack-architecture/"
        },
        {
          meta: "Jan 2026",
          title: "Uber Driver/Rider Matching service",
          subtitle: "Real-time matching, geospatial indexing, ETA estimation, and high-throughput location updates for a ride-hailing platform.",
          href: "https://www.uber.com/en-JP/blog/reinforcement-learning-for-modeling-marketplace-balance/"
        },
        {
          meta: "Jan 2026",
          title: "Web crawler",
          subtitle: "URL frontier management, politeness, deduplication, distributed fetching, and scalable crawl orchestration.",
          href: "https://newsletter.systemdesign.one/p/web-crawler-system-design"
        }
      ]
    },
    {
      key: "lld",
      href: "./lld.html",
      label: "LLD",
      title: "Low Level Design",
      archiveTitle: "Low Level Design",
      archiveIntro: "A complete list of low-level design exercises and object modeling notes.",
      description: "Object modeling, extensibility, and code-structure decisions.",
      items: [
        {
          meta: "Mar 2026",
          title: "Queue service",
          subtitle: "Message ingestion, retries, visibility, job states, and worker coordination in a queue-backed processing system.",
          href: "https://github.com/vduseev/raquel"
        },
        {
          meta: "Feb 2026",
          title: "Chat server",
          subtitle: "WebSocket connection handling, rooms, message persistence, fan-out, and session/state management.",
          href: "https://github.com/Psychevus/WebSocket-ChatApp"
        },
        {
          meta: "Jan 2026",
          title: "Quick commerce",
          subtitle: "Low-level design around catalog, cart, inventory reservation, fulfillment, and delivery orchestration for quick commerce.",
          href: "https://github.com/adeshs8/qcommerce"
        }
      ]
    },
    {
      key: "code",
      href: "./code.html",
      label: "Code",
      title: "Code",
      archiveTitle: "Code I Have Solved",
      archiveIntro: "A complete list of coding patterns and problems I keep organized for practice.",
      description: "Problem-solving notes grouped by reusable coding patterns.",
      items: [
        {
          meta: "Mar 2026",
          title: "Making a Large Island",
          subtitle: "A grid-connectivity problem combining DFS/Union-Find ideas to evaluate how one flip changes connected component size.",
          href: "https://leetcode.com/problems/making-a-large-island/"
        },
        {
          meta: "Mar 2026",
          title: "Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit",
          subtitle: "A sliding-window problem that uses monotonic queues to maintain min/max bounds while expanding and shrinking the window.",
          href: "https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/description/"
        },
        {
          meta: "Mar 2026",
          title: "Shortest connection between two actors",
          subtitle: "A BFS search problem over actor-movie graphs to find the shortest path between two actors.",
          href: "https://cs50.harvard.edu/ai/2024/projects/0/degrees/"
        },
        {
          meta: "Feb 2026",
          title: "Find the Biggest BST from binary tree",
          subtitle: "Tree DP and BST validation logic for identifying the largest BST subtree inside a binary tree.",
          href: "https://leetcode.doocs.org/en/lc/333/"
        },
        {
          meta: "Jan 2026",
          title: "Union-find and connectivity",
          subtitle: "Disjoint set problems focused on connectivity, component merges, and near-constant-time union/find operations.",
          href: "https://leetcode.doocs.org/en/lc/323/"
        },
        {
          meta: "Jan 2026",
          title: "Sliding window and monotonic queue",
          subtitle: "Problems around rolling windows, deque-based maxima/minima, and amortized O(n) optimization.",
          href: "https://leetcode.doocs.org/en/lc/239/"
        }
      ]
    }
  ]
};
