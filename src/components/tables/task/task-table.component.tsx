'use client';

import DeleteConfirmation from '@components/delete-confirmation/delete-confirmation.component';
import Button from '@components/ui/button/button.component';
import Table from '@components/ui/table/table.component';
import type { TaskModel } from '@interfaces/task.interface';
import { useAtomic } from '@libraries/state';
import { taskListAtom } from '@states/task.state';
import { useRef, useState } from 'react';
import toast from 'react-hot-toast';

import style from './task-table.module.scss';

export default function TaskTable() {
  const [task, setTask] = useAtomic(taskListAtom);

  const deleteModal = useRef<React.ElementRef<typeof DeleteConfirmation>>(null);

  const [selected, setSelected] = useState<TaskModel>();

  const columns = [
    {
      key: 'title',
      title: <span>Title</span>,
      render: (row: any) => {
        return <span>{row.title}</span>;
      },
    },
    {
      key: 'time',
      title: <span>Time</span>,
      render: (row: any) => {
        return <span>{row.time}</span>;
      },
    },
    {
      key: 'action',
      width: 60,
      render: (row: any) => {
        return (
          <Button
            type="button"
            color="danger"
            label="Delete"
            size="sm"
            onClick={() => {
              setSelected(row);
              deleteModal.current?.open();
            }}
          />
        );
      },
    },
  ];

  const handleDelete = () => {
    if (selected) {
      setTask((old) => old.filter((val) => val.id !== selected.id));
      deleteModal.current?.close();

      toast.success(`Task "${selected.title}" deleted successfully!`);

      setSelected(undefined);
    }
  };

  return (
    <>
      <Table
        columns={columns}
        data={task}
        emptyContent={
          <div className={style.empty}>
            <h2>No items to display</h2>
            <p>It looks like there are no items in this list.</p>
          </div>
        }
      />

      <DeleteConfirmation
        ref={deleteModal}
        title="Delete Task"
        message={`Are you sure to Delete Task "${selected?.title}"?`}
        onDelete={() => {
          if (selected && selected.id) {
            handleDelete();
          }
        }}
      />
    </>
  );
}
