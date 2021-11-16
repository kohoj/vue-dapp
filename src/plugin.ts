import { Plugin } from 'vue'
import { clickOutside } from './directive'
import Board from './components/Board.vue'
import Modal from './components/Modal.vue'

export type PluginOptions = {
  infuraId?: string
  appName?: string
}

export const VueDapp: Plugin = {
  install(app, options: PluginOptions) {
    if (!options?.infuraId) {
      console.warn(
        'For enabling WalletConnect and WalletLink, you should provide infura ID in plugin options like "app.use(VueDapp, { infuraId: "<your-id>" })"',
      )
    }
    if (!options?.appName) {
      console.warn(
        'For enabling WalletLink, you should provide the App Name in plugin options like "app.use(VueDapp, { appName: "<your-app-name>" })"',
      )
    }
    app.directive('click-outside', clickOutside)
    app.component('vdapp-board', Board)
    app.component('vdapp-modal', Modal)
    app.provide('infuraId', options?.infuraId)
    app.provide('appName', options?.appName)
  },
}
