import express from "express";
import posts from "./data/posts.js";

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  const search = (req.query.search || "").trim();
  const searchText = search.toLowerCase();

  const filteredPosts = searchText
    ? posts.filter((post) => {
        return (
          post.title.toLowerCase().includes(searchText) ||
          post.excerpt.toLowerCase().includes(searchText) ||
          post.category.toLowerCase().includes(searchText) ||
          post.content.toLowerCase().includes(searchText)
        );
      })
    : posts;

  res.render("index", {
    title: "Home",
    posts: filteredPosts,
    search: search,
  });
});

app.get("/post/:id", (req, res) => {
  const post = posts.find((post) => post.id === Number(req.params.id));

  if (!post) {
    return res.status(404).render("404", {
      title: "Not Found",
    });
  }

  res.render("post", {
    title: post.title,
    post: post,
  });
});

app.get("/compose", (req, res) => {
  res.render("compose", {
    title: "Write",
  });
});

app.post("/posts", (req, res) => {
  const newPost = {
    id: Date.now(),
    title: req.body.title,
    excerpt: req.body.excerpt,
    category: req.body.category,
    date: new Date().toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
    readTime: Math.max(
      1,
      Math.ceil(req.body.content.trim().split(/\s+/).length / 200),
    ),
    content: req.body.content,
  };

  posts.unshift(newPost);

  res.redirect("/");
});

app.post("/posts/:id/delete", (req, res) => {
  const postIndex = posts.findIndex(
    (post) => post.id === Number(req.params.id),
  );

  if (postIndex === -1) {
    return res.status(404).render("404", {
      title: "Not Found",
    });
  }

  posts.splice(postIndex, 1);

  res.redirect("/");
});

app.get("/posts/:id/edit", (req, res) => {
  const post = posts.find((post) => post.id === Number(req.params.id));

  if (!post) {
    return res.status(404).render("404", {
      title: "Not Found",
    });
  }

  res.render("edit", {
    title: "Edit Article",
    post: post,
  });
});

app.post("/posts/:id/edit", (req, res) => {
  const post = posts.find((post) => post.id === Number(req.params.id));

  if (!post) {
    return res.status(404).render("404", {
      title: "Not Found",
    });
  }

  post.title = req.body.title;
  post.category = req.body.category;
  post.excerpt = req.body.excerpt;
  post.content = req.body.content;

  post.readTime = Math.max(
    1,
    Math.ceil(req.body.content.trim().split(/\s+/).length / 200),
  );

  res.redirect(`/post/${post.id}`);
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
  });
});

app.use((req, res) => {
  res.status(404).render("404", {
    title: "Not Found",
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
