import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const port = 3000;
const app = express();
const __dir = dirname(fileURLToPath(import.meta.url));
const blogsArticles = new Array();
const blogsId = 10;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.render(__dir + "/view/index.ejs");
});

app.get("/about", (req, res) => {
    res.render(__dir + "/view/about.ejs");
});

app.get("/blogs", (req, res) => {
    res.render(__dir + "/view/blog.ejs", {
        blogs: blogsArticles
    });
});

app.get("/blogs/:id", (req, res) => {
    let articleID = req.params.id;
    res.render(__dir + "/view/blog-news.ejs", {
        article: blogsArticles[(articleID - 1)]
    })
});

app.listen(port, () => {
    console.log("App listening on port: " + port);
});


blogsArticles.push({
    id: 1,
    title: "Introduction to Quantum Computing",
    content: "Quantum computing represents a paradigm shift from classical computing, leveraging the principles of quantum mechanics to perform calculations at speeds unattainable by traditional computers. This blog explores the basics of quantum bits (qubits), superposition, and entanglement, and discusses potential applications and challenges in the field."
});
blogsArticles.push({
    id: 2,
    title: "Understanding Machine Learning Algorithms",
    content: "Machine learning algorithms enable computers to learn from and make predictions or decisions based on data. This post delves into popular algorithms like linear regression, decision trees, and neural networks, explaining their mechanics and use cases in various industries."
});
blogsArticles.push({
    id: 3,
    title: "The Evolution of Programming Languages",
    content: "Programming languages have evolved significantly since the early days of computing. From assembly language to high-level languages like Python and JavaScript, this blog discusses the history, major milestones, and trends shaping the future of programming languages."
});
blogsArticles.push({
    id: 4,
    title: "A Beginner's Guide to Cybersecurity",
    content: "Cybersecurity is crucial in protecting digital information and infrastructure. This guide provides an overview of fundamental concepts such as encryption, firewalls, and secure coding practices, along with tips for safeguarding personal and organizational data."
});
blogsArticles.push({
    id: 5,
    title: "The Role of Data Structures in Efficient Algorithms",
    content: "Data structures are essential for organizing and managing data efficiently. This post covers common data structures like arrays, linked lists, stacks, and queues, and discusses how choosing the right data structure can enhance algorithm performance and efficiency."
});
blogsArticles.push({
    id: 6,
    title: "Exploring the World of DevOps",
    content: "DevOps is a cultural and technical movement that aims to improve collaboration between development and operations teams. This blog explores key DevOps practices, tools, and methodologies, and their impact on software development and deployment processes."
});
blogsArticles.push({
    id: 7,
    title: "What is Cloud Computing? An Overview",
    content: "Cloud computing provides on-demand computing resources over the internet. This post explains different cloud service models (IaaS, PaaS, SaaS), deployment options, and benefits such as scalability and cost-efficiency, helping readers understand how cloud solutions can transform business operations."
});
blogsArticles.push({
    id: 8,
    title: "The Significance of Algorithms in Computer Science",
    content: "Algorithms are fundamental to computer science, driving the logic behind software and systems. This blog discusses the importance of algorithm design and analysis, covering topics like sorting, searching, and optimization, and their impact on problem-solving in computing."
});
blogsArticles.push({
    id: 9,
    title: "Getting Started with Blockchain Technology",
    content: "Blockchain technology is known for its role in cryptocurrencies but has broader applications in various domains. This post introduces blockchain fundamentals, including its structure, consensus mechanisms, and potential use cases beyond digital currencies."
});
blogsArticles.push({
    id: 10,
    title: "The Future of Artificial Intelligence",
    content: "Artificial Intelligence (AI) is rapidly advancing, with applications spanning various industries. This blog explores emerging trends in AI, such as deep learning, reinforcement learning, and ethical considerations, providing insights into how AI may shape the future."
});