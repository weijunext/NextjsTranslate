import KeyButton from "@/components/home/KeyButton";
import { siteConfig } from "@/config/site";

const Introduction = () => {
  return (
    <section className="w-full flex flex-col items-center gap-4 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
      <h1 className="font-medium text-xl sm:text-3xl md:text-4xl lg:text-5xl">
        {siteConfig.name}
      </h1>
      <p className="leading-normal text-muted-foreground sm:text-xl sm:leading-8">
        {siteConfig.description}
      </p>
      <KeyButton />
    </section>
  );
};

export default Introduction;
