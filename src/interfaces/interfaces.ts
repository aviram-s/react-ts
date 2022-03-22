export interface HeaderProps {
  onSwitchTheme: () => void;
  theme: string;
}

export interface CategoryButtonProps {
  Text?: String;
  Icon?: String;
  handleClick?: () => void;
}

export interface ProductProps {
  Img?: String;
  Name: String;
  PriceWas: Number;
  PriceNow: Number;
  Date: Date;
}
