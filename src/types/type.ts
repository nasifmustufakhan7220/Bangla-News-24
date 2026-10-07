export interface INavlink {
  slug: string;
  title: string;
  scrapable: string
}

export interface IMarquee{
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