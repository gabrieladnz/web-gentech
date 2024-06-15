export interface Author {
  fullName: string;
  userName: string;
  profilePhotoUrl: string;
}

export interface Forum {
  slug: string;
  title: string;
  description: string;
  createdAt: string;
  author: Author;
}
