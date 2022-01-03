import { Request } from 'express';
import multer, { MulterError } from 'multer';
import { extname } from 'path';
import { v4 as randomId } from 'uuid';

const storage = multer.diskStorage({
  destination: 'src/controllers/public/images',
  filename: (req, file, cb) => {
    cb(null, randomId() + extname(file.originalname));
  },
});

const fileFilter = (
  req: Request,
  file: Express.Multer.File,
  cb: CallableFunction
) => {
  const { mimetype } = file;
  if (
    mimetype !== 'image/png' &&
    mimetype !== 'image/jpg' &&
    mimetype !== 'image/jpeg'
  ) {
    cb(null, false);
    return cb(new Error('Only accept PNG - JPG and JPEG format '));
  }
  cb(null, true);
};

export default multer({ storage, fileFilter });
