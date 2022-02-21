import BaseBtn from '@/components/ui/BaseBtn'
import BaseModalBox from '@/components/ui/BaseModalBox'
import BaseFieldSearch from '@/components/ui/BaseFieldSearch'

export const registerComponents = (app) => {
  app.component('base-btn', BaseBtn)
  app.component('base-modal-box', BaseModalBox)
  app.component('base-field-search', BaseFieldSearch)
}
