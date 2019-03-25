export interface Article {
  author: string | null;
  content: string;
  publishedAt?: string;
  description: string;
  source?: any;
  title: string;
  url: string;
  urlToImage: string;
}
