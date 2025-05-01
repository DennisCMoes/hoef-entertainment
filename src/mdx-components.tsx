import type { MDXComponents } from 'mdx/types'

const MDXComponents: MDXComponents = {
  h1: ({ children }) => <h1 className="mt-8 mb-5 text-3xl">{children}</h1>,
  h2: ({ children }) => <h2 className="mt-6 mb-3 text-2xl">{children}</h2>,
  h3: ({ children }) => <h3 className="mt-4 mb-2 text-xl">{children}</h3>,
  p: ({ children }) => <p className='text-4xl'>{children}</p>
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  }
}
