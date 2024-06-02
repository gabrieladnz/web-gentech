export interface Author {
  fullName: string;
  username: string;
  profilePhotoUrl: string;
}

export interface Category {
  name: string;
}

export interface Artigo {
  slug: string;
  title: string;
  publicationContent: string;
  coverImageUrl: string;
  createAt: Date;
  author: Author;
  category?: Category;
}
