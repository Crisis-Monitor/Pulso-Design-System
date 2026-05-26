import { generateStaticParamsFor, importPage } from 'nextra/pages';
import { useMDXComponents } from '../../../mdx-components';

export const generateStaticParams = generateStaticParamsFor('mdxPath');

export default async function Page(props: { params: Promise<{ mdxPath?: string[] }> }) {
  const params = await props.params;
  const result = await importPage(params.mdxPath);
  const { default: MDXContent, metadata, sourceCode, toc } = result;
  const components = useMDXComponents({});
  const Wrapper = components.wrapper;

  return (
    <Wrapper metadata={metadata} sourceCode={sourceCode} toc={toc}>
      <MDXContent components={components} params={params} />
    </Wrapper>
  );
}
