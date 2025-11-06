import express from "express";
import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";

console.log("PRISMA VALUE:", prisma);

const router = express.Router();
// const prisma = new PrismaClient();

router.post("/signup", async (req, res) => {
    const { email, password } = req.body;

    // Basic validation
    if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required." });
    }

    // Check if user already exists
    const existing = await prisma.user.findUnique({
        where: { email },
    });

    if (existing) {
        return res.status(400).json({ error: "Email already in use." });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await prisma.user.create({
        data: {
            email,
            password: hashedPassword,
        },
    });

    return res.json({ message: "Signup successful", userId: user.id });
});

export default router;