import { prisma } from "@/utils/prisma";
import multer from "multer";
import jwt from "jsonwebtoken";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/uploads/");
  },
  filename: (req, file, cb) => {
    const fileName =
      Date.now() + "-" + file.originalname.toLowerCase().split(" ").join("-");
    cb(null, fileName);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 10000000 },
});

export default async function handler(req, res) {
  try {
    switch (req.method) {
      case "POST":
        upload.single("image")(req, res, async function (err) {
          if (err) {
            res.status(400).json({ message: err.message });
            return;
          }
          try {
            const { title, author, publisher, year, pages } = req.body;
            const token = req.cookies.token;
            if (!token) {
              return res.status(400).json({ message: "Invalid credentials" });
            }
            const user = jwt.verify(token, process.env.JWT_SECRET);
            if (!user) {
              return res.status(400).json({ message: "Invalid credentials" });
            }
            const book = await prisma.book.create({
              data: {
                title,
                author,
                publisher,
                year: parseInt(year),
                pages: parseInt(pages),
                image: req.file.path.split("public")[1],
              },
            });
            res.json({ book });
          } catch (err) {
            console.log("err", err);
            return res.status(400).json({ message: "Book already exists" });
          }
        });
      case "GET":
        try {
          const books = await prisma.book.findMany({
            orderBy: {
              title: "asc",
            },
          });
          return res.json({ books });
        } catch (err) {
          console.log(err);
          return res.status(400).json({ message: "Something went wrong" });
        }
      default:
        res.status(400).json({ message: "Invalid request method" });
    }
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Something went wrong" });
  }
}

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};
