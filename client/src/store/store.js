import { create } from 'zustand';

const useStore = create((set) => ({
  // cardCount now as an object to track job applications by date
  cardCount: {},
  cards: [],
  isSidebarOpen: false,
  formData: {
    jobTitle: '',
    company: '',
    status: '',
    date: '',
    location: '',
    contactName: '',
    contactEmail: '',
  },
  openSidebar: () => set(() => ({ isSidebarOpen: true })),
  closeSidebar: () => set(() => ({ isSidebarOpen: false })),
  setFormData: (newFormData) => set(() => ({ formData: newFormData })),
  handleFormSubmit: (newData) =>
    set((state) => {
      const newCount = state.cardCount[newData.date] ? state.cardCount[newData.date] + 1 : 1;

      return {
        cards: [...state.cards, newData],
        isSidebarOpen: false,
        cardCount: {
          ...state.cardCount,
          [newData.date]: newCount,
        },
      };
    }),
}));

export default useStore;
