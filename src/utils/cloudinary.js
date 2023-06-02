const {v2} = require("cloudinary")


v2.config({ 
    cloud_name: 'drwtxza2l', 
    api_key: '479449722438873', 
    api_secret: 'J1SkMSK-QSQ5jA1p0ACzOp477h4',
    secure: true 
  });

async function uploadImage(filePath) {
    return await v2.uploader.upload(filePath,{
        folder: "AutoBid"
    })
    
}


module.exports = {
    uploadImage
}