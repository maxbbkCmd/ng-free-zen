type LangsData = {
  name: string;
  key: string;
};

type NavItemData = {
  name: string;
  anchor: string;
};

export type HeaderData = {
  langs: LangsData[];
  navigation: NavItemData[];
};
