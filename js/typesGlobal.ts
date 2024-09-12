// Header
export type LangsData = {
  name: string;
  key: string;
};

export type NavItemData = {
  name: string;
  anchor: string;
};

export type HeaderData = {
  langs: LangsData[];
  navigation: NavItemData[];
};


// Download
export type TitleData = {
  content: string;
  priority: number;
};

type LinkData = {
  name: string;
  url: string;
};

type ImageData = {
  source: string;
  description: string;
};

export type DownloadData = {
  title: TitleData;
  texts: string[];
  links: LinkData[];
  images: ImageData;
};

// Warranty

export type WarrantyData = {
  title: TitleData;
  texts: string[];
  images: ImageData;
};

// Care

export type CareData = {
  title: TitleData;
  texts: string[];
  images: ImageData;
};

// Cashback

export type CashbackData = {
  title: TitleData;
  texts: string[];
  buttonText: string;
};

// Clients

type LogoData = {
  lightSource: string;
  darkSource: string;
};

export type BrandData = {
  name: string;
  logo: LogoData;
};

export type ClientsData = {
  brands: BrandData[];
};

// Footer

type ContentData = {
  type: string;
  data: string;
};

type InfoLinkData = {
  url: string;
  content: ContentData;
};

type CategoryData = {
  name: string;
  links: InfoLinkData[];
};

type InfoLogoData = {
  url: string;
  content: ContentData;
};

export type InfoData = {
  logo: InfoLogoData;
  texts: string[];
  developer: InfoLogoData;
};

export type SecondaryInfoData = {
  categories: CategoryData[];
  info: InfoData;
};

// AppData

export type AppData = {
  primaryInfo: HeaderData;
  download: DownloadData;
  warranty: WarrantyData;
  care: CareData;
  cashback: CashbackData;
  clients: ClientsData;
  secondaryInfo: SecondaryInfoData;
  };
