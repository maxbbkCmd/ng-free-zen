type ContentData = {
  type: string;
  data: string;
};

type LinkData = {
  url: string;
  content: ContentData;
};

type CategoryData = {
  name: string;
  links: LinkData[];
};

type LogoData = {
  url: string;
  content: ContentData;
};

export type InfoData = {
  logo: LogoData;
  texts: string[];
  developer: LogoData;
};

export type SecondaryInfoData = {
  categories: CategoryData[];
  info: InfoData;
};
