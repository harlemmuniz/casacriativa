const express = require('express')

const server = express()

const ideas = [
    {
        img: "https://image.flaticon.com/icons/png/512/2729/2729032.png",
        title: "Karaokê",
        category: "Diversão em Família",
        description: "Lorem ipsum dolor sit amet, adhuc nulla definiebas mei ad",
        url: "https://www.rocketseat.com.br",
    },
    {
        img: "https://image.flaticon.com/icons/png/512/2729/2729032.png",
        title: "Meditação",
        category: "Diversão em Família",
        description: "Lorem ipsum dolor sit amet, adhuc nulla definiebas mei ad",
        url: "https://www.rocketseat.com.br",
    },
    {
        img: "https://image.flaticon.com/icons/png/512/2729/2729032.png",
        title: "Atividade Física",
        category: "Diversão em Família",
        description: "Lorem ipsum dolor sit amet, adhuc nulla definiebas mei ad",
        url: "https://www.rocketseat.com.br",
    },
    {
        img: "https://image.flaticon.com/icons/png/512/2729/2729032.png",
        title: "Beber",
        category: "Diversão em Família",
        description: "Lorem ipsum dolor sit amet, adhuc nulla definiebas mei ad",
        url: "https://www.rocketseat.com.br",
    }
]

server.use(express.static("public"))

const nunjucks = require("nunjucks")
nunjucks.configure("views", {
    express: server,
    noCache: true
})

server.get("/", function (req, res) {

    const reversedIdeas = [...ideas].reverse()

    let lastIdeas = []
    for (idea of reversedIdeas) {
        if (lastIdeas.length < 2) {
            lastIdeas.push(idea)
        }
    }

    return res.render("index.html", { ideas: lastIdeas })
})

server.get("/ideas", function (req, res) {

    const reversedIdeas = [...ideas].reverse()

    return res.render("ideas.html", { ideas: reversedIdeas })
})

server.listen(3000)