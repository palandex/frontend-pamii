import { AppDataSource } from '../config/orm.config';

async function syncDb() {
  try {
    await AppDataSource.initialize();
    console.log('Database synchronized successfully!');
  } catch (error) {
    console.error('Error synchronizing database:', error);
    process.exit(1);
  } finally {
    await AppDataSource.destroy();
  }
}

syncDb();
