import app from './server';

const main = async () => {
  app.listen(3000);
  console.log(`Server on port 3000`);
};

main();
