import Feature from "@/components/home/Feature";
import KeyButton from "@/components/home/KeyButton";
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
      <KeyButton />
    </main>
  );
}
