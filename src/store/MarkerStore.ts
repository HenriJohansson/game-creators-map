import { OrderedMark } from '@/interfaces/Mark'
import { reactive } from 'vue'

const allMarks: OrderedMark[] = []
const currentMark: OrderedMark | null = null


export const MarkerStore = reactive({
  marksArray: allMarks,
  chosenMark: currentMark,
})

export const StoreHooks = {
  /**
   * When pushing a Mark, new Date is automatically created.
   * @param mark Mark you want to push
   */
  marksArrayPush: (mark: OrderedMark): void => {
    mark.creation_date = new Date()
    MarkerStore.marksArray.push(mark)
  }
}
