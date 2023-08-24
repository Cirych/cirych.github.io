type Params<T extends string = string> = Record<T, string>;

type CommonProps<T extends string = string> = {
  params: Params<T>;
};

type LayoutProps<T extends string = string> = CommonProps<T> & {
  children: React.ReactNode;
};

type PageProps<T extends string = string> = CommonProps<T> & {
  searchParams: Record<string, string | string[] | undefined>;
};

type LayoutComponent<T extends string = string> = (
  props: LayoutProps<T>
) => React.ReactNode;

type PageComponent<T extends string = string> = (
  props: PageProps<T>
) => React.ReactNode;
