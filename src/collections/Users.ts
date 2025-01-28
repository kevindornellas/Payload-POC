import type { CollectionConfig } from 'payload'
import { requireAdmin } from '../AccessModifiers/Access'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  access: {
    read: () => true,
    update: requireAdmin,
    delete: requireAdmin,
    create: requireAdmin,
  },
  auth: true,
  fields: [
    // Email added by default
    // Add more fields as needed
    {
      name: 'role',
      type: 'select',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'User', value: 'user' },
      ],
      required: true,
      defaultValue: 'user',
    },
  ],
}
