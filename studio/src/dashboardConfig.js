export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "61705f3c1aa94d8576c2ca1c",
                  title: "Sanity Studio",
                  name: "sanit-ely-studio",
                  apiId: "41a2b79b-7053-4bec-b7f4-be780e9effb0",
                },
                {
                  buildHookId: "61705f3c1aa94d8487c2c84f",
                  title: "Blog Website",
                  name: "sanit-ely",
                  apiId: "ed441277-da74-461a-ad3f-758b64a5bd9d",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/elykahn/sanit-ely",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanit-ely.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
