const cloudinary = require('cloudinary').v2
const uploadImage = (req, res) => {
  const file = req.files.Image
  cloudinary.uploader.upload(file.tempFilePath, (err, result) => {
    if (err) {
      return res.status(400).json({ msg: 'error in uploading image', err })
    }
    return res.status(200).json({ url: result.url })
  })
}

module.exports = uploadImage
