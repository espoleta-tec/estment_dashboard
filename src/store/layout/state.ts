export interface LayoutState {
  leftDrawer: boolean,
  currentView: string
}

export default function () {
  return {
    leftDrawer: false,
    currentView: '',
  }
}
