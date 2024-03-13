import React from 'react'
import Image from 'next/image'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Twitter from './components/icons/Twitter'
import Footer from './components/footer/Footer'
import { siteConfig } from './config/site'

const config: DocsThemeConfig = {
  useNextSeoProps() {
    return {
      titleTemplate: `%s – ${siteConfig.name}`,
    };
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (title === '开始使用' ) {
        return (
          <div className='font-medium text-black'>{title}</div>
        )
      }
      return <>{title}</>
    }
  },
  logo: (
    <>
      <Image src="/logo.png" alt={siteConfig.name} width={36} height={36} />
      <span style={{ marginLeft: '.4em', fontWeight: 700 }}>
        {siteConfig.name}
      </span>
    </>
  ),
  logoLink: '/',
  project: {
    link: 'https://github.com/weijunext/NextjsTranslate',
    // icon: '' // 自定义 icon，默认是 Github 图标
  },
  chat: {
    link: 'https://twitter.com/weijunext',
    // 自定义 icon，默认是 Discord 图标
    icon: <Twitter/>
  },
  // search 使用默认配置
  // banner 新特性发布时使用
  banner: {
    key: 'Chinese docs 1.0',
    text: "🎉 本站基于 Next.js 14 文档翻译，会保持更新，感谢关注和支持～"
  },
  docsRepositoryBase: 'https://github.com/weijunext/NextjsTranslate',
  feedback: {
    content: "反馈问题，提交 issue →"
  },
  editLink: {
    text: "修改内容，提交 pr →"
  },
  themeSwitch: {
    useOptions() {
      return {
        light: 'Light',
        dark: 'Dark',
        system: 'System'
      }
    }
  },

  head: (
    <>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name="description" content={siteConfig.description} />
      <meta name="description" content={siteConfig.description} />
      <meta name="keywords" content={siteConfig.keywords.join()}></meta>
      <meta name="author" content={siteConfig.authors[0].name}></meta>

      <meta property='og:title' content={siteConfig.openGraph.title} />
      <meta property="og:site_name" content={siteConfig.openGraph.siteName} />
      <meta property='og:description' content={siteConfig.openGraph.description} />
      <meta property="og:image" content={siteConfig.openGraph.images[0]} />
      <meta name="twitter:card" content={siteConfig.twitter.card} />
      <meta name="twitter:title" content={siteConfig.twitter.title} />
      <meta name="twitter:description" content={siteConfig.twitter.description} />
      <meta name="twitter:image" content={siteConfig.twitter.images[0]} />

      <meta name="robots" content="follow, index" />

      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
    </>
  ),
  footer: {
    component: <Footer/>
  },
}

export default config
