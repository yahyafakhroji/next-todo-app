import TaskForm from '@components/forms/task/task-form.component';
import TaskTable from '@components/tables/task/task-table.component';
import TaskSummary from '@components/task-summary/task-summary.component';
import Card from '@components/ui/card/card.component';
import { Suspense } from 'react';

import style from './page.module.scss';

export default function Home() {
  return (
    <Suspense>
      <main className={style.container}>
        <TaskSummary />
        <Card>
          <div className={style.section}>
            <h3>Task Form</h3>
            <TaskForm />
          </div>

          <div className={`${style.section} ${style.list}`}>
            <h3>Task List</h3>
            <div className={style.table}>
              <TaskTable />
            </div>
          </div>
        </Card>
      </main>
    </Suspense>
  );
}
