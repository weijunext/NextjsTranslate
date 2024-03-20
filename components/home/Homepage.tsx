import CTAButton from "@/components/home/CTAButton";
import Feature from "@/components/home/Feature";
import { useData } from "nextra/data";
import Introduction from "./Introduction";

type StaticProps = {
  stars: number;
};

export function Homepage() {
  const { stars } = useData() as StaticProps;
  return (
    <main>
      <Introduction />
      <Feature />
      <CTAButton />
    </main>
  );
}
