declare global {
    namespace NodeJS {
      interface ProcessEnv {
        JWT_SK: string;
        NODE_ENV: 'development' | 'production';
        PORT?: string;
        PWD: string;
      }
    }
  }