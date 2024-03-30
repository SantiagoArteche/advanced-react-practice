export interface ProductCardProps {
  product: Product;

  children: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  onChange?: (args: OnChangeArgs) => void;
  count?: number;
  value?: number;
  initialValues?: InitialValues;
}

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface Buttons {
  increaseBy: (value: number) => void;
  shopCount?: number;
}

export interface ProdContextProps {
  product: Product;
  increaseBy: (value: number) => void;
  count: number;
  initialValues: InitialValues;
}

export interface ProductCardChildrens {
  ({ children, product }: ProductCardProps): JSX.Element;
  Title: ({ className }: { className?: string }) => JSX.Element;
  Buttons: ({
    className,
    style,
    countShop,
  }: {
    className?: string;
    countShop?: number;
    style: React.CSSProperties;
  }) => JSX.Element;
  Image: ({
    className,
    img,
  }: {
    className?: string;
    img?: string;
  }) => JSX.Element;
}

export interface OnChangeArgs {
  product: Product;
  count: number;
}

export interface ProductInCart extends Product {
  count: number;
}

export interface InitialValues {
  count?: number;
  maxCount?: number;
}

export interface ProductCardHandlers {
  count: number;
  isMaxCountReached: () => boolean;
  maxCount?: number;
  product: Product;
  increaseBy: (value: number) => void;
  reset: () => void;
}
