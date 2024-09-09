export type ClientsData = {
  brands: BrandsData[];
};

export type BrandsData = {
  name: string;
  logo: LogoData;
};

type LogoData = {
  lightSource: string;
  darkSource: string;
};
