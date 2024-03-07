'use client';

import Card from '@components/ui/card/card.component';
import { useAtomicValue } from '@libraries/state';
import { taskSummaryAtom } from '@states/task.state';

import style from './task-summary.module.scss';

export default function TaskSummary() {
  const summary = useAtomicValue(taskSummaryAtom);

  return (
    <div className={style.container}>
      <Card className={style.card}>
        <h4>Total Tasks</h4>
        <span className={style.counter}>{summary.total}</span>
      </Card>
      <Card className={style.card}>
        <h4>Total Days</h4>
        <span className={style.counter}>{summary.days}</span>
      </Card>
      <Card className={style.card}>
        <h4>Total Hours</h4>
        <span className={style.counter}>{summary.hours}</span>
      </Card>
    </div>
  );
}
