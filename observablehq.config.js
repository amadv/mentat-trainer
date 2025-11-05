// See https://observablehq.com/framework/config for documentation.
export default {
  // The app’s title; used in the sidebar and webpage titles.
  title: "Mentat Trainer",

  // The pages and sections in the sidebar. If you don’t specify this option,
  // all pages will be listed in alphabetical order. Listing pages explicitly
  // lets you organize them into sections and have unlisted pages.
  pages: [
    // {
    //   name: "Examples",
    //   pages: [
    //     {name: "Dashboard", path: "/example-dashboard"},
    //     {name: "Report", path: "/example-report"}
    //   ]
    // },
    {
      name: "Books",
      open: false,
      pages: [
        {name: "Mind Hacker", path: "/books/mind-hacker"},
        {name: "Mind Performance Hacks", path: "/books/mind-performance-hacks"}
      ]
    },
    {
      name: "Memory Techniques",
      path: '/memory-technique/',
      open: false,
      pages: [
        {name: "Alphabet Feats", path: "/memory-technique/alphabet-feats"},
        {name: "Alphabet Systems", path: "/memory-technique/alphabet-systems"},
        {name: "Binary Numbers System", path: "/memory-technique/binary-numbers-system"},
        {name: "Body List", path: "/memory-technique/body-list"},
        {name: "Calendar Feats", path: "/memory-technique/calendar-feats"},
        {name: "Calendar System", path: "/memory-technique/calendar-system"},
        {name: "Dominic System", path: "/memory-technique/dominic-system"},
        {name: "Knights Tour Memory", path: "/memory-technique/knights-tour-memory"},
        {name: "Limbic Stimulation", path: "/memory-technique/limbic-stimulation"},
        {name: "Link Quickly", path: "/memory-technique/link-quickly"},
        {name: "Link System", path: "/memory-technique/link-system"},
        {name: "Major System", path: "/memory-technique/major-system"},
        {name: "Mem Kata", path: "/memory-technique/mem-kata"},
        {name: "Memory Chart", path: "/memory-technique/memory-chart"},
        {name: "Memory Palace", path: "/memory-technique/memory-palace"},
        {name: "Memory Training", path: "/memory-technique/memory-training"},
        {name: "Nook and Cranny", path: "/memory-technique/nook-and-cranny-method"},
        {name: "Number Rhyme System", path: "/memory-technique/number-rhyme-system"},
        {name: "Number Shape System", path: "/memory-technique/number-shape-system"},
        {name: "Number Syllable System", path: "/memory-technique/number-syllable-system"},
        {name: "Number Systems", path: "/memory-technique/number-systems"},
        {name: "Peg System", path: "/memory-technique/peg-system"},
        {name: "Pi Memorization", path: "/memory-technique/pi-memorization"},
        {name: "Playing Card Feats", path: "/memory-technique/playing-card-feats"},
        {name: "Playing Card Systems", path: "/memory-technique/playing-card-systems"},
        {name: "Sem Cubed", path: "/memory-technique/sem-cubed"},
        {name: "Spaced Repetition", path: "/memory-technique/spaced-repetition"},
        {name: "What We Must Remember", path: "/memory-technique/what-we-must-remember"}
      ]
    },
    {
      name: "Mental Math",
      path: '/mental-math/',
      open: false,
      pages: [
        {name: "Cube Roots", path: "/mental-math/cube-roots"},
        {name: "Cubing Numbers", path: "/mental-math/cubing-numbers"},
        {name: "Fifth Roots", path: "/mental-math/fifth-roots"},
        {name: "Flash Cards", path: "/mental-math/flash-card"},
        {name: "Knights Tour Math", path: "/mental-math/knights-tour-math"},
        {name: "Logarithm Technique", path: "/mental-math/logarithm-technique"},
        {name: "Magic Square", path: "/mental-math/magic-square"},
        {name: "Numbers Near Multiples of Ten", path: "/mental-math/numbers-near-multiples-of-ten"},
        {name: "Physio Arithmetics", path: "/mental-math/physio-arithmetics"},
        {name: "Square Roots", path: "/mental-math/square-roots"},
        {name: "Squaring Numbers", path: "/mental-math/squaring-numbers"}
      ]
    },
    {
      name: "Improving Intelligence",
      path: '/improving-intelligence/',
      open: false,
      pages: [
        {name: "Bio Feedback", path: "/improving-intelligence/bio-feedback"},
        {name: "Brain Training Games", path: "/improving-intelligence/brain-training-games"},
        {name: "Coffee for Productivity", path: "/improving-intelligence/coffee-for-productivity"},
        {name: "Meditation", path: "/improving-intelligence/meditation"},
        {name: "Physical Exercise", path: "/improving-intelligence/physical-exercise"},
        {name: "Smart Drugs", path: "/improving-intelligence/smart-drug"},
        {name: "Smart Food", path: "/improving-intelligence/smart-food"},
        {name: "Use Working Memory Efficiently", path: "/improving-intelligence/use-working-memory-efficiently"}
      ]
    },
    {
      name: "Think Better",
      open: false,
      pages: [
        {name: "Creative Thinking", path: "/think-better/creative-thinking"},
        {name: "Critical Thinking", path: "/think-better/critical-thinking"},
        {name: "Tool Mapping", path: "/think-better/tool-mapping"}
      ]
    },
    {
      name: "Other Pages",
      open: false,
      pages: [
        {name: "Brain Blogs", path: "/other-pages/brain-blogs"},
        {name: "Brain Books", path: "/other-pages/brain-books"},
        {name: "Brain Storming", path: "/other-pages/brain-storming"},
        {name: "Date Code", path: "/other-pages/date-code"},
        {name: "Growth Mindset", path: "/other-pages/growth-mindset"},
        {name: "Hack The Senses", path: "/other-pages/hack-the-senses"},
        {name: "How To Forget", path: "/other-pages/how-to-forget"},
        {name: "Improve Your Surroundings", path: "/other-pages/improve-your-surroundings"},
        {name: "Language Learning", path: "/other-pages/language-learning"},
        {name: "Mastering Skills", path: "/other-pages/mastering-skills"},
        {name: "Mental Health", path: "/other-pages/mental-health"},
        {name: "Mental World Records", path: "/other-pages/mental-world-records"},
        {name: "Mentat Training Plan", path: "/other-pages/mentat-training-plan"},
        {name: "Mind Mapping", path: "/other-pages/mind-mapping"},
        {name: "Note Taking", path: "/other-pages/note-taking"},
        {name: "Multi Tasking", path: "/other-pages/multi-tasking"},
        {name: "Self Discipline", path: "/other-pages/self-discipline"},
        {name: "Self Tracking", path: "/other-pages/self-tracking"},
        {name: "Short Hand System", path: "/other-pages/short-hand-system"},
        {name: "Speed Reading", path: "/other-pages/speed-reading"},
        {name: "The Name Mentat", path: "/other-pages/the-name-mentat"}
      ]
    }
  ],

  // Content to add to the head of the page, e.g. for a favicon:
  head: '<link rel="icon" href="observable.png" type="image/png" sizes="32x32">',

  // The path to the source root.
  root: "src",

  // Some additional configuration options and their defaults:
  theme: "default", // try "light", "dark", "slate", etc.
  // header: "", // what to show in the header (HTML)
  // footer: "Built with Observable.", // what to show in the footer (HTML)
  sidebar: true, // whether to show the sidebar
  // toc: true, // whether to show the table of contents
  // pager: true, // whether to show previous & next links in the footer
  output: "dist", // path to the output root for build
  search: true, // activate search
  // linkify: true, // convert URLs in Markdown to links
  // typographer: false, // smart quotes and other typographic improvements
  // preserveExtension: false, // drop .html from URLs
  // preserveIndex: false, // drop /index from URLs
};
