import { v2 } from 'cloudinary';
import configs from '../configs/config';

const { config, uploader, api } = v2;
const { cloudinary } = configs;
const { apiKey, apiName, apiSecret, mainFolder } = cloudinary;

config({
  cloud_name: apiName,
  api_key: apiKey,
  api_secret: apiSecret,
  secure: true,
});

export const uploadFile = async (file: string, folderName: string) => {
  try {
    const result = await uploader.upload(file, {
      folder: `${mainFolder}/${folderName}`,
    });
    return result;
  } catch (err) {
    throw `Error uploading file in cloudinary. ${err}`;
  }
};

export const deleteFile = async (publicId: string[]) => {
  try {
    const result = await api.delete_resources(publicId);
    return result;
  } catch (e) {
    throw `Error deleting file in cloudinary. ${e}`;
  }
};
