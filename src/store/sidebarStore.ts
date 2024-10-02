import {create} from 'zustand'

type SidebarState = {
    collapsed: boolean,
    onExpand: () => void,
    onCollapse: () => void
}

export const useSidebar = create<SidebarState>((set) => ({
    collapsed: false,
    onExpand: () => set(() => ({collapsed: false})),
    onCollapse: () => set(() => ({ collapsed: true }))
}))