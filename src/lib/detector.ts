import { UserGroupId, UserId } from '@/types/entity-ids'

interface StructData {
  type: string
  raw: string
  id: string
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isStructData = (data: any): data is StructData =>
  typeof data['type'] === 'string' &&
  typeof data['raw'] === 'string' &&
  typeof data['id'] === 'string'

const parse = (str: string): StructData | null => {
  try {
    const data = JSON.parse(str)
    if (!isStructData(data)) {
      return null
    }
    return data
  } catch {
    return null
  }
}

const detect = (
  text: string,
  checker: (data: StructData | null) => boolean
) => {
  let isInside = false
  let startIndex = -1
  let isString = false
  for (let i = 0; i < text.length; i++) {
    if (isInside) {
      if (text[i] === '"') {
        isString = !isString
      } else if (!isString && text[i] === '}') {
        isInside = false
        const data = parse(text.substr(startIndex + 1, i - startIndex))
        if (checker(data)) {
          return true
        } else {
          i = startIndex + 1
        }
      }
    } else {
      if (i < text.length - 1 && text[i] === '!' && text[i + 1] === '{') {
        startIndex = i
        i++
        isInside = true
        isString = false
      }
    }
  }
  return false
}

const isMentionOfMe = (
  myId: UserId,
  myGroupIds: UserGroupId[],
  data: StructData | null
) => {
  if (data === null) return false
  if (data.type === 'user' && data.id === myId) return true
  if (data.type === 'group' && myGroupIds.includes(data.id)) return true
  return false
}

export const detectMentionOfMe = (
  text: string,
  myId: UserId,
  myGroupIds: UserGroupId[]
) => detect(text, data => isMentionOfMe(myId, myGroupIds, data))
