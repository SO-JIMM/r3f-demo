import { nanoid } from "nanoid"
import { produce } from "immer"
import { create } from "zustand"
import drop from "lodash/drop"

export const usePointStore = create((set, get) => ({
  points: [],
  addPoint: (point) =>
    set(
      produce((state) => {
        state.points.push({ id: nanoid(8), point })
      })
    ),
  dropPoint: () => set(produce((state) => ({ points: drop(state.points) }))),
}))
