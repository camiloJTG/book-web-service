import multer from 'multer';
import { extname } from 'path';
import { v4 as randomId } from 'uuid';

const storage = multer.diskStorage({
  destination: 'src/controllers/public/images',
  filename: (req, file, cb) => {
    cb(null, randomId() + extname(file.originalname));
  },
});

export default multer({ storage });
