import type { TaskModel } from '@interfaces/task.interface';
import { atomic, atomicStorage } from '@libraries/state';

export const taskListAtom = atomicStorage<TaskModel[]>('tasks', []);

export const taskSummaryAtom = atomic((get) => {
  const tasks = get(taskListAtom);

  const total = (tasks || []).length;
  const hours = (tasks || []).reduce((acc, current) => Number(acc) + Number(current.time), 0);

  let days: number | string = hours > 0 ? hours / 8 : 0;

  // Check if the result has a decimal part
  const hasDecimals = !Number.isInteger(days);

  // Use toFixed(2) for two decimals if needed, otherwise return without decimals
  days = hasDecimals ? days.toFixed(2) : days.toString();

  return { total, hours, days };
});
