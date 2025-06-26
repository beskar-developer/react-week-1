interface Props {
  name: string;
  image: string;
  description: string;
}

export const ProfileCard = ({ name, image, description }: Props) => {
  return (
    <Card className="w-80" scale>
      <ImageLoader src={image} className="size-80" />

      <div className="flex flex-col gap-2 p-3">
        <h1 className="text-base font-bold tracking-tight text-gray-900 dark:text-white">{name}</h1>

        <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
      </div>
    </Card>
  );
};
