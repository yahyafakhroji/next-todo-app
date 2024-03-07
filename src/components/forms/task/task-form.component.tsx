'use client';

import Button from '@components/ui/button/button.component';
import Input from '@components/ui/input/input.component';
import type { TaskModel } from '@interfaces/task.interface';
import { useAtomicSetter } from '@libraries/state';
import { taskListAtom } from '@states/task.state';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import style from './task-form.module.scss';

export default function TaskForm({ record }: { record?: TaskModel }) {
  const setTask = useAtomicSetter(taskListAtom);
  const [formData, setFormData] = useState<TaskModel>({
    title: '',
    time: 0,
  });

  useEffect(() => {
    if (record) {
      setFormData(record);
    } else {
      setFormData({
        title: '',
        time: 0,
      });
    }
  }, [record]);

  const validateField = (name: string, value: string) => {
    const errors = [];

    switch (name) {
      case 'title':
        if (!value) {
          errors.push('Task Title is required');
        }

        if (value.length > 128) {
          errors.push('Task Title cannot exceed 128 characters.');
        }

        break;
      case 'time':
        // eslint-disable-next-line no-case-declarations
        const timeValue = parseFloat(value);
        if (Number.isNaN(timeValue)) {
          errors.push('Task Time must be a valid number.');
        } else if (timeValue < 0 || timeValue > 24) {
          errors.push('Task Time must be between 0 and 24.');
        }

        break;
      default:
        break;
    }

    return errors;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let validationErrors: string[] = [];

    // eslint-disable-next-line guard-for-in, no-restricted-syntax
    for (const field in formData) {
      const errors = validateField(field, (formData as any)[field]);

      validationErrors = [...validationErrors, ...errors];
    }

    if (validationErrors.length > 0) {
      toast.error(
        <div className={style.error}>
          {validationErrors.map((error) => (
            <p key={nanoid()}>{error}</p>
          ))}
        </div>,
        { duration: 6000, style: { minWidth: '200px' } }
      );

      return;
    }

    // Handle form submission here (e.g., send data to server)
    setTask((old) => [...old, { id: nanoid(), ...formData }]);

    // Reset Form Field
    setFormData({
      title: '',
      time: 0,
    });

    toast.success(`New Task created successfully!`);
  };

  return (
    <form className={style.form} noValidate onSubmit={handleSubmit}>
      <div className={style.section}>
        <Input maxLength={128} name="title" label="Title" value={formData.title} onChange={handleChange} required />
        <Input
          maxLength={128}
          type="number"
          name="time"
          label="Time Required (in Hrs)"
          value={formData.time}
          onChange={handleChange}
          required
        />
        <Button type="submit" color="primary" label="Save" />
      </div>
    </form>
  );
}
