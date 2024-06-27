export interface ExperimentData {
  id: string;
  title: string;
  description: string;
  question: string;
  alt: string;
  origin: string;
  origin_link: string;
  yes_votes: number;
  no_votes: number;
  image_url: string;
  slug: string;
}

export interface Votes {
  yes_votes: number;
  no_votes: number;
}
