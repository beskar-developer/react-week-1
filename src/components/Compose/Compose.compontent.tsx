interface Props {
  components: Array<JSXElementConstructor<PropsWithChildren<unknown>>>;
  children: ReactNode;
}

export const Compose = (props: Props) => {
  const { components = [], children } = props;

  return (
    <>
      {components.reduceRight((acc, Comp) => {
        return <Comp>{acc}</Comp>;
      }, children)}
    </>
  );
};
