import { IconArrowsExchange, IconCode } from '@tabler/icons'
import { useRouter } from 'next/router'

import { LinksGroupProps } from '@/components/Layout/Navbar/Link/NavbarLink'

export const List: LinksGroupProps[] = [
  {
    label: 'Converter',
    icon: IconArrowsExchange,
    links: [
      {
        label: 'CSS Units converter',
        link: '/converter/css-units',
        description: 'Convert CSS units (ex: rem to px)',
        keywords: ['convert', 'css units'],
      },
      {
        label: 'Color converter',
        link: '/converter/color',
        description: 'Convert color (ex: rgb to hex)',
        keywords: ['convert', 'color'],
      },
    ],
  },
  {
    label: 'Code',
    icon: IconCode,
    links: [
      {
        label: 'Source code viewer',
        link: '/code/source-code-viewer',
        description: 'Type the URL to view the source code of web page',
        keywords: ['source code', 'code', 'viewer'],
      },
    ],
  },
]

export const Actions = () => {
  const list = []
  const router = useRouter()

  List.forEach((nested) => {
    nested.links.forEach((item) => {
      const obj = {}
      obj['group'] = nested.label
      obj['title'] = item.label
      obj['onTrigger'] = () => router.push(item.link)
      obj['description'] = item.description
      obj['keywords'] = item.keywords
      list.push(obj)
    })
  })

  return list
}
