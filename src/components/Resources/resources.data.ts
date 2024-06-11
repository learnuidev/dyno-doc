'use client'

import { GridPattern } from '@/components/GridPattern'

import { ChatBubbleIcon } from '@/components/icons/ChatBubbleIcon'
import { EnvelopeIcon } from '@/components/icons/EnvelopeIcon'
import { UserIcon } from '@/components/icons/UserIcon'
import { UsersIcon } from '@/components/icons/UsersIcon'

interface Resource {
  href: string
  name: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  pattern: Omit<
    React.ComponentPropsWithoutRef<typeof GridPattern>,
    'width' | 'height' | 'x'
  >
}

export const resources: Array<Resource> = [
  {
    href: '/tables',
    name: 'Tables',
    description:
      'Learn about the table model and how to create, clone, retrieve, update, delete, and list tables.',
    icon: UserIcon,
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  {
    href: '/users',
    name: 'Users',
    description:
      'Learn about the conversation user and how to create, retrieve, update, delete, and list users.',
    icon: ChatBubbleIcon,
    pattern: {
      y: -6,
      squares: [
        [-1, 2],
        [1, 3],
      ],
    },
  },
  {
    href: '/messages',
    name: 'Messages',
    description:
      'Learn about the message model and how to create, retrieve, update, delete, and list messages.',
    icon: EnvelopeIcon,
    pattern: {
      y: 32,
      squares: [
        [0, 2],
        [1, 4],
      ],
    },
  },
  {
    href: '/ai',
    name: 'Dyno AI',
    description: 'Learn about the Dyno AI',
    icon: UsersIcon,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
]
