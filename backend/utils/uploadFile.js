const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
require("dotenv").config();

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: (req, file) => {
    return {
      folder:
        "crowdup/" + (!file.mimetype.startsWith("image/") ? "pdfs" : "images"), // folder in Cloudinary where the files will be stored
      allowed_formats: !file.mimetype.startsWith("image/")
        ? ["pdf"]
        : ["jpg", "jpeg", "png", "gif"],
      resource_type: !file.mimetype.startsWith("image/") ? "raw" : "image",
    };
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 10, // limit file size to 10MB
  },
  fileFilter: (req, file, cb) => {
    console.log("ff:", file.mimetype);
    if (
      file.mimetype !== "application/pdf" &&
      file.mimetype !== "application/x-pdf" &&
      !file.mimetype.startsWith("image/")
    ) {
      cb(new Error("Only img, pdf files are allowed"));
    } else {
      cb(null, true);
    }
  },
});

async function uploadFiles(req, res, next) {
  console.log("vv", req.body);
  upload.any()(req, res, async () => {
    const files = req.files;

    console.log(req.files, req.files[0], req.files[1]);

    if (!files) {
      return res.json({ msg: "error file (nofile)" });
    }

    const [pdfFile, imageFile] = req.files[0]?.mimetype.startsWith("image/")
      ? [req.files[1], req.files[0]]
      : [req.files[0], req.files[1]];

    // console.log("lolo", pdfFile, imageFile);

    if (!pdfFile && !imageFile) {
      return res.json({ msg: "error file" });
    }

    req.body.report = pdfFile?.path;
    req.body.logo = imageFile?.path;

    next();
  });
}

module.exports = { uploadFiles };
