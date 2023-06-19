const { v2 } = require("cloudinary");
const fs = require("fs");
const { CLOUDINARY_NAME, CLOUDINARY_APIKEY, CLOUDINARY_SECRET } = process.env;
v2.config({
  cloud_name: CLOUDINARY_NAME,
  api_key: CLOUDINARY_APIKEY,
  api_secret: CLOUDINARY_SECRET,
  secure: true,
});

async function uploadImage(filePath) {
  if (!Array.isArray(filePath)) {
    try {
      const imageUpload = await v2.uploader.upload(filePath.tempFilePath);

      //delete file
      fs.unlinkSync(filePath.tempFilePath);
      return [imageUpload.url];
    } catch (error) {
      //delete file
      fs.unlinkSync(filePath.tempFilePath);

      console.log("Error uploading the image ", error);
    }
  } else {
    let imagens = filePath.map((e) => e.tempFilePath);
    const uploadPromises = imagens.map((image) => {
      return v2.uploader.upload(image);
    });
    try {
      const imageUploades = await Promise.all(uploadPromises);
      //delete files
      imagens.map((e) => {
        fs.unlinkSync(e);
      });
      return imageUploades.map((e) => e.url);
    } catch (error) {
      imagens.map((e) => {
        fs.unlinkSync(e);
      });
      console.log("Error uploading the images ", error);
    }
  }
}

async function uploadPDF(filePath) {
  try {
    const pdfUploaded = await v2.uploader.upload(filePath.tempFilePath, {
      resource_type: "raw",
    });

    //delete file
    fs.unlinkSync(filePath.tempFilePath);

    return pdfUploaded.url;
  } catch (error) {
    //delete file
    fs.unlinkSync(filePath.tempFilePath);

    console.log("Error uploading the PDF ", error);
  }
}

async function deleteImageByUrl(imageUrl) {
  try {
    const publicId = imageUrl.split("/").reverse()[0].split(".")[0];
    const { result } = await v2.uploader.destroy(publicId);
    if (result === "ok") return true;
    else return false;
  } catch (error) {
    console.error("Error trying to delete image from cloud:", error);
  }
}

module.exports = {
  uploadImage,
  uploadPDF,
  deleteImageByUrl,
};
