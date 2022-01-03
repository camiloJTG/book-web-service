import { unlink } from 'fs-extra';

export const deleteLocalFile = async (filename: string[] | string) => {
  try {
    if (typeof filename === 'string') {
      await unlink(filename);
    } else {
      for (const file of filename) {
        await unlink(file);
      }
    }
  } catch (error) {
    throw 'Error deleting local file';
  }
};
