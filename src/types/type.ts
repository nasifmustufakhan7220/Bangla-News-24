export interface INavlink {
  slug: string;
  title: string;
  scrapable: string;
}

export interface IMarquee {
  id: string;
  title: string;
}

export interface IMainNew {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  imageAlt: string;
  firstPublished: string;
}

export interface IOtherNews {
  title: string;
  curationType: string;
  curationId: string;
  articles: {
    id: string;
    category: string;
    description: string;
    firstPublished: string;
    imageAlt: string;
    imageUrl: string;
    title: string;
  }[];
}

export interface INewsCard {
  id: string;
  category: string;
  description: string;
  firstPublished: string;
  imageAlt: string;
  imageUrl: string;
  title: string;
}

export interface IMostRead {
  id: string;
  title: string;
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
