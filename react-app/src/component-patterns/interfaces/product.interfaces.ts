export interface PoductCardProps {
  product: Product;
  children?: React.ReactNode;
  className?: string;
}

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface Buttons {
  counter: number;
  increaseBy: (value: number) => void;
}

export interface ProdContextProps {
  counter: number;
  product: Product;
  increaseBy: (value: number) => void;
}

export interface ProductCardChildrens {
  ({ children, product }: PoductCardProps): JSX.Element;
  Title: ({ className }: { className?: string }) => JSX.Element;
  Buttons: ({
    className,
    style,
  }: {
    className?: string;
    style: React.CSSProperties;
  }) => JSX.Element;
  Image: ({ className }: { className?: string }) => JSX.Element;
}
