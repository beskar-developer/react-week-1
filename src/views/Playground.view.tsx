import type { FormValues } from "@/components/Playground/Form/LoginForm.type";

const PROFILE_PROPS = {
  name: "یک فرد رندم",
  image: "https://picsum.photos/id/1/400/400",
  description:
    "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و",
};

const Playground = () => {
  const [count, setCount] = useState(1);

  const onSubmit = async ({ mobileNumber, nationalCode }: FormValues) => {
    await delay(1000);

    console.log({ mobileNumber, nationalCode });
  };

  return (
    <div className="app-container flex flex-col items-center justify-center gap-8 align-middle">
      <ThemeToggleButton />

      <ProfileCard {...PROFILE_PROPS} />

      <Counter count={count} onCountChange={setCount} min={0} max={20} />

      <LoginForm onSubmit={onSubmit} />
    </div>
  );
};

export default Playground;
