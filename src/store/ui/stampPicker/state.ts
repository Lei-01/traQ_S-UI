import { StampId } from '@/types/entity-ids'
import { StampSet } from '@/components/Main/StampPicker/use/stampSetSelector'

enum StampEffect {
  wiggle = 'wiggle',
  rotate = 'rotate'
}
enum StampSize {
  small = 'small',
  large = 'large',
  exLarge = 'ex-large'
}

export type SelectedStampData = {
  id: StampId
  effects?: StampEffect[]
  size?: StampSize
}
export type StampSelectHandler = (stamp: SelectedStampData) => void

export const defaultSelectHandler = (_: SelectedStampData) => {}

export interface S {
  targetPortalName: string

  selectHandler: StampSelectHandler
  currentStampSet: StampSet
  position: { x: number; y: number }
}

export const state: S = {
  targetPortalName: '',
  selectHandler: defaultSelectHandler,
  currentStampSet: {
    type: 'history',
    id: ''
  },
  position: { x: 0, y: 0 }
}
