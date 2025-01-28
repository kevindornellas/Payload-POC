import type { CollectionConfig } from 'payload'
import { requireAdmin, isSeedData, isNotSeedData } from '../AccessModifiers/Access'

export const Assets: CollectionConfig = {
  slug: 'asset',
  access: {
    read: requireAdmin,
  },
  fields: [
    {
      name: 'original_filename',
      type: 'text',
      required: true,
    },
    {
      name: 'asset_content_type',
      type: 'text',
      required: true,
    },
  ],
  upload: true,
}

export const elasticus: CollectionConfig = {
  slug: 'elasticus',
  labels: {
    singular: 'Elastic User',
    plural: 'Elastic Users',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'email',
      type: 'text',
      required: true,
    },
    {
      name: 'first_name',
      type: 'text',
      required: true,
    },
    {
      name: 'username',
      type: 'text',
      required: true,
    },
  ],
  upload: true,
}

export const customers: CollectionConfig = {
  slug: 'customer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'access_key',
      type: 'text',
      required: true,
      admin: {
        condition: isSeedData,
      },
    },
    {
      name: 'origin',
      type: 'text',
      required: true,
      admin: {
        condition: isSeedData,
      },
    },
    {
      name: 'number',
      type: 'text',
      required: true,
      admin: {
        condition: isNotSeedData,
        components: {
          Field: '../app/components/component',
        },
      },
    },
  ],
  upload: true,
}

export const campaign_recipients: CollectionConfig = {
  slug: 'campaign_recipients',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'Campaigns',
      type: 'relationship',
      relationTo: 'campaigns',
      hasMany: false,
    },
    // {
    //   name: 'subject',
    //   type: 'join',
    //   collection: 'campaigns',
    //   on: 'subject',
    // },
    {
      name: 'email',
      type: 'text',
      required: true,
    },
    {
      name: 'first_name',
      type: 'text',
      required: true,
    },
    {
      name: 'last_name',
      type: 'text',
      required: true,
    },
  ],
  upload: true,
}

export const campaigns: CollectionConfig = {
  slug: 'campaigns',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'id',
      type: 'text',
      required: true,
    },
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'subject',
      type: 'text',
      required: true,
    },
  ],
  upload: true,
}
