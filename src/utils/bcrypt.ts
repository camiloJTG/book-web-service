import { genSalt, hash, compare } from 'bcrypt';

export const generateSalts = async () => {
  try {
    const result = await genSalt(3);
    return result;
  } catch (e: any) {
    console.error(e.message);
    throw 'Error generating salts in hash bcrypt';
  }
};

export const encrypt = async (data: string) => {
  try {
    const salts = await generateSalts();
    if (typeof salts === 'undefined')
      throw new Error('Error in generate encrypted');
    const result = await hash(data, salts);
    return result;
  } catch (e: any) {
    console.error(e.message);
    throw 'Error encrypting data in bcrypt';
  }
};

export const validateHash = async (data: string, dataEncrypted: string) => {
  try {
    const isValid = await compare(data, dataEncrypted);
    return isValid;
  } catch (e: any) {
    console.error(e.message);
    throw 'Error validating data in bcrypt';
  }
};
