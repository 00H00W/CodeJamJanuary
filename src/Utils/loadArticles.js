import fs from "fs";
import path from "path";

const articleFileNames = [
  "/articles.txt",
  "/articles1.txt",
  "/articles2.txt",
  "/articles3.txt"
];

function joinPaths(...paths) {
  return paths.join("/").replace(/\/+/g, "/");
}

const readArticleFile = async (fileName) => {
  try {
    const filePath = joinPaths("articles", fileName);
    const response = await fetch(filePath);
    const text = await response.text();
    const [title, ...contentText] = text.split("\n");
    return { title: title.trim(), content: contentText.join("\n").trim() };
  } catch (error) {
    console.error(`Error reading ${fileName}:`, error);
    return null;
  }
};

const loadArticles = async () => {
  const articlePromises = articleFileNames.map(readArticleFile);
  const articles = await Promise.all(articlePromises);
  return articles.filter((article) => article !== null);
};

export default loadArticles;
