import { Rating } from './blog_types';

export type UserRegisterValues = {
  firstName: string;
  secondName: string;
  email: string;
  password: string;
};

export type RegisterErrorValues = {
  firstName?: string;
  secondName?: string;
  email?: string;
  password?: string;
};

export type LoginValues = {
  email: string;
  password: string;
};

export type LoginErrorValues = {
  email?: string;
  password?: string;
};

export type BlogFormValues = {
  id: number;
  userId: number;
  author: string;
  title: string;
  image: string;
  content: string;
  rating: Rating;
};

export type EditBlogFormValues = {
  id?: number;
  userId?: number;
  author?: string;
  title?: string;
  image?: string;
  content?: string;
  rating?: Rating;
};

export type BlogFormErrorValues = {
  id?: number;
  userId?: number;
  author?: string;
  title?: string;
  image?: string;
  content?: string;
  rating?: Rating;
};
