import MDXComponents from "@/components/mdx/MDXComponents";
import { DEFAULT_LOCALE } from "@/i18n/routing";
import { constructMetadata } from "@/lib/metadata";
import fs from "fs/promises";
import { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote-client/rsc";
import path from "path";
import remarkGfm from "remark-gfm";

const options = {
  parseFrontmatter: true,
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
};

async function getMDXContent() {
  const filePath = path.join(process.cwd(), "content", "about", "en.mdx");
  return fs.readFile(filePath, "utf-8");
}

export async function generateMetadata(): Promise<Metadata> {
  return constructMetadata({
    page: "About",
    title: "About",
    description: "About Vorici Calculator",
    noIndex: true,
    locale: DEFAULT_LOCALE,
    path: "/about",
    canonicalUrl: "/about",
  });
}

export default async function AboutPage() {
  const content = await getMDXContent();

  return (
    <article className="w-full px-2 md:w-3/5 md:px-12">
      <MDXRemote source={content} components={MDXComponents} options={options} />
    </article>
  );
}
