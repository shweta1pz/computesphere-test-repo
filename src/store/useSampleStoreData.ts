import { create } from 'zustand'

export interface  I_SampleStore{
  sampleData:any,
  setSampleData:(newSampleData:any)=>void
 
}
export const useSampleDataStore = create<I_SampleStore>((set) => ({
  sampleData: null,
  setSampleData: (newSampleData: any) => set(() => ({sampleData:newSampleData})),
  clearSubscriptions: () => set({ sampleData:null })
}))