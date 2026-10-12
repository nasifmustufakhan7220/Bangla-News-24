export interface ICategory {
  slug: string;
  title: string;
  topicId: string | null;
  url: string;
  scrapable: boolean;
}

export interface IHeadLine {
  id: string;
  title: string;
  description: string;
  link: string | null;
  imageUrl: string;
  imageAlt: string;
  category: string;
  type: string;
  isLive: boolean;
  firstPublished: string | null;
  lastPublished: string | null;
  source: string;
}


export interface INews {
  title: string;
  curationId: string;
  curationType: string;
  link: string | null;
  count: number;
  articles: {
      id: string;
      title: string;
      description: string;
      link: string | null;
      imageUrl: string;
      imageAlt: string;
      category: string;
      type: string;
      isLive: boolean;
      firstPublished: null | string;
      lastPublished: null | string;
      source: string;
  }[]
}
