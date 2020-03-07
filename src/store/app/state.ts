import { ChannelId } from '@/types/entity-ids'
import { Theme } from '@/types/theme'

export interface S {
  loaded: boolean
  componentLoaded: boolean
  currentChannelId: ChannelId
  theme: Theme
}

export const state: S = {
  loaded: false,
  componentLoaded: false,
  currentChannelId: '',
  theme: {
    accent: {
      primary: '#005BAC',
      notification: '#F2994A',
      online: '#28F0E4'
    },
    background: {
      primary: '#FFFFFF',
      secondary: '#F6F7F9',
      tertiary: '#ECEFF3'
    },
    ui: {
      primary: '#525E67',
      secondary: '#828E96',
      tertiary: '#ECEFF3'
    },
    text: {
      primary: '#333333',
      secondary: '#79797A'
    }
  }
}