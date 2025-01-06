import type { MDXComponents } from "mdx/types";
import Pre from "./components/mdx/Pre";
import Code from "./components/mdx/Code";
import H1 from "./components/mdx/H1";
import H2 from "./components/mdx/H2";
import H3 from "./components/mdx/H3";
import H4 from "./components/mdx/H4";
import P from "./components/mdx/P";
import Ol from "./components/mdx/Ol";
import Ul from "./components/mdx/Ul";
import Li from "./components/mdx/Li";
import A from "./components/mdx/A";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    pre: (props) => <Pre {...props} />,
    code: (props) => <Code {...props} />,
    h1: (props) => <H1 {...props} />,
    h2: (props) => <H2 {...props} />,
    h3: (props) => <H3 {...props} />,
    h4: (props) => <H4 {...props} />,
    p: (props) => <P {...props} />,
    ol: (props) => <Ol {...props} />,
    ul: (props) => <Ul {...props} />,
    li: (props) => <Li {...props} />,
    a: (props) => <A {...props} />,
  };
}
