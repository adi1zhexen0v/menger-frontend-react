export interface ICourse {
  _id: string;
  title: string;
  slug: string;
  description: string;
  benefits: string[];
  price: number;
  imageUrl: string;
  isPublic: boolean;
  createdAt: string;
  updatedAt: string;
}