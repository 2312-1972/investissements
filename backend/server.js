// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { authHandler } from "./auth.js";

dotenv.config();

console.log("🚀 Démarrage du serveur... routes en cours de chargement");

const app = express();
app.use(cors({ credentials: true, origin: "http://localhost:3000" })); // autorise le frontend
app.use(express.json());

// 🔐 Route Auth.js — gère tout sous /auth/*
app.use("/auth", async (req, res) => {
  return authHandler(req, res);
});

// ✅ Page d'accueil
app.get("/", (req, res) => {
  res.send("✅ Backend Auth.js + Prisma est en ligne !");
});

// 🔐 Route de login : redirige manuellement vers GitHub
app.get("/login", (req, res) => {
  console.log("➡️ Route /login visitée");

  const githubAuthorizeUrl = `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_ID}&redirect_uri=http://localhost:3001/auth/callback/github`;

  console.log("🔗 Redirection vers :", githubAuthorizeUrl);
  res.redirect(githubAuthorizeUrl);
});

// 🔎 Route pour récupérer la session (optionnelle)
app.get("/me", async (req, res) => {
  await authHandler(
    { ...req, url: "/auth/session", method: "GET" },
    {
      ...res,
      end: (body) => res.send(JSON.parse(body)),
      setHeader: res.setHeader.bind(res),
      status: res.status.bind(res),
    }
  );
});

// 🚪 Route de déconnexion
app.get("/logout", (req, res) => {
  res.setHeader("Set-Cookie", [
    "authjs.session-token=; Max-Age=0; Path=/",
    "authjs.callback-url=; Max-Age=0; Path=/",
  ]);
  res.redirect("/");
});

// 🚀 Démarrage du serveur
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`✅ Serveur lancé sur http://localhost:${PORT}`);
});


