export interface HeaderProps {
  onSwitchTheme: () => void;
  theme: string;
}

export interface CategoryButtonProps {
  Text?: string;
  Icon?: string;
  handleClick?: () => void;
}

export interface ProductProps {
  Img?: string;
  Name: string;
  PriceWas: number;
  PriceNow: number;
  Date: string;
  Id: number;
}
export interface CategoryType {
  Name: string;
  Id: number;
}
