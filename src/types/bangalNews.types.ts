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


export interface INewsDetails {
  id: string;
  body: {
    altText: string;
    caption: string;
    copyrightHolder: string;
    height: string;
    type: string;
    url: string;
    width: number;
    text: string;
  }[];
  byline: {
    name: string;
    role: string;
  }[];
  description: {
    blocks: {
      type: string;
      model: {
        blocks: {
          type: string;
          model: {
            text: string;
            blocks: {
              type: string;
              model: {
                text: string;
                attributes: [];
              };
            }[];
          };
        }[];
      };
    }[];
  };
  firstPublished: string;
  imageUrl: string;
  lastPublished: string;
  link: string;
  source: string;
  sourceUrl: string;
  tags: string[];
  text: string;
  title: string;
  topics: {
    id: string;
    name: string;
  }[];
  wordCount: number;
}