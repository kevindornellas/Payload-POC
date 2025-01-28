import type { Access, Condition } from 'payload'

export const requireAdmin: Access = ({ req: { user } }) => {
  // Allow users with a role of 'admin'
  if (user && user.role === 'admin') {
    return true
  }
  return false
}

export const isSeedData: Condition = (data) => {
  if (data.origin == 'seed') {
    return false
  } else {
    return true
  }
}

export const isNotSeedData: Condition = (data) => {
  if (data.origin == 'seed') {
    return true
  } else {
    return false
  }
}
