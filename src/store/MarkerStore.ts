import { OrderedMark } from '@/interfaces/Mark'
import { reactive } from 'vue'

const allMarks: OrderedMark[] = []
export const MarkerStore = reactive({
  marksArray: allMarks
})
export default MarkerStore;
