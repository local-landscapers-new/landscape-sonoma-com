import GhostContentAPI from "@tryghost/content-api";

const API_URL = process.env.GHOST_API_URL;
const API_KEY = process.env.GHOST_API_KEY;

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: API_URL,
  key: API_KEY,
  version: "v3",
});

export async function getPosts() {
  return await api.posts
    .browse({
      limit: "all",
    })
    .catch((err) => {
      console.error(err);
    });
}

export async function getSinglePost(postSlug) {
  return await api.posts
    .read({
      slug: postSlug,
    })
    .catch((err) => {
      console.error(err);
    });
}
