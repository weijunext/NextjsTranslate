import { siteConfig } from "@/config/site";
import Link from "next/link";

const KeyButton = () => {
  return (
    <div className="flex space-x-4 w-full justify-center">
      <Link
        href="/docs/getting-started"
        className="border bg-black text-white py-4 px-6 rounded-md select-none"
      >
        开始学习 <span>→</span>
      </Link>
      <Link
        href={siteConfig.authors[0].twitter as string}
        className="border bg-white py-4 px-6 rounded-md select-none"
        rel="noopener noreferrer nofollow"
      >
        关注推特 <span>↗</span>
      </Link>
    </div>
  );
};

export default KeyButton;
