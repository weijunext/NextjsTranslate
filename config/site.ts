import { SiteConfig } from "@/types/siteConfig";
import { BsGithub, BsTwitterX, BsWechat } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { SiBuymeacoffee, SiJuejin } from "react-icons/si";

const SITE_URL = "https://nextjstranslate.com"

const baseSiteConfig = {
  name: "Next.js 中文文档",
  description:
    "🎉 本站基于 Next.js 最新文档翻译，会保持更新，感谢关注和支持～",
  url: SITE_URL,
  ogImage: `${SITE_URL}/og.png`,
  metadataBase: '/',
  keywords: ["next.js 中文文档", "next.js 文档翻译", "next.js 文档", "next.js docs", "next.js chinese docs"],
  authors: [
    {
      name: "weijunext",
      url: "https://weijunext.com",
      twitter: 'https://twitter.com/weijunext',
    }
  ],
  creator: '@weijunext',
  themeColor: '#fff',
  icons: {
    icon: "/favicon.ico",
    shortcut: "/logo.png"
  },
  footerLinks: [
    { name: 'email', href: "mailto:weijunext@gmail.com", icon: MdEmail },
    { name: 'twitter', href: "https://twitter.com/weijunext", icon: BsTwitterX },
    { name: 'github', href: "https://github.com/weijunext/", icon: BsGithub },
    { name: 'buyMeCoffee', href: "https://www.buymeacoffee.com/weijunext", icon: SiBuymeacoffee },
    { name: 'juejin', href: "https://juejin.cn/user/26044008768029", icon: SiJuejin },
    { name: 'weChat', href: "https://weijunext.com/make-a-friend", icon: BsWechat }
  ],
  footerProducts: [
    { url: 'https://weijunext.com/', name: 'J实验室' },
    { url: 'https://smartexcel.cc/', name: 'Smart Excel' },
    { url: 'https://landingpage.weijunext.com/', name: 'Landing Page Boilerplate' },
    { url: 'https://nextjs.weijunext.com/', name: 'Next.js Practice' },
    { url: 'https://starter.weijunext.com/', name: 'Next.js Starter' },
    { url: 'https://githubbio.com', name: 'Github Bio Generator' },
    { url: 'https://github.com/weijunext/indie-hacker-tools', name: 'Indie Hacker Tools' },
    { url: SITE_URL, name: 'Next.js 中文文档' },
  ]
}

export const siteConfig: SiteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name,
    images: [`${baseSiteConfig.url}/og.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}/og.png`],
    creator: baseSiteConfig.creator,
  },
}
