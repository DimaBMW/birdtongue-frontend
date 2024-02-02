//Types for reading various files
declare module "*.module.scss";
declare module "*.jpg";
declare module "*.svg";
declare module "*.png";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.mp4";
declare module "*.vtt";
declare module "*.srt";
declare module 'vtt.js';
declare module 'jsonwebtoken';
declare module '@editorjs/header';
declare module '@editorjs/list';
declare module '@editorjs/Code';
declare module '@editorjs/Paragraph';
declare module '@editorjs/checklist';
declare module '@editorjs/delimiter';
declare module '@editorjs/embed';
declare module '@editorjs/image';
declare module '@editorjs/inline-code';
declare module '@editorjs/link';
declare module '@editorjs/quote';
declare module '@editorjs/simple-image';
declare module '@editorjs/table';
declare module '@editorjs/warning';
declare module '@editorjs/marker';
declare module 'Tools.js';
declare namespace Express {
  export interface Request {
      user: any;
  }
  export interface Response {
      user: any;
  }
}
interface JwtPayload {
  // Здесь добавьте необходимые поля из токена JWT
  user: {
    name: string;
    // Дополнительные поля пользователя
    // ...
  };
  // Дополнительные поля из токена JWT
  // ...
}





