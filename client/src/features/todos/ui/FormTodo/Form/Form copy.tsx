import { memo, useCallback, useState } from 'react';
import cls from './Form.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { todosActions } from 'features/todos/model/slices/todosSlice';
import { Todo } from 'entities/todo/model/types/todo';
import { TodoInfo } from '../FormTodo';

interface FormProps {
  className?: string;
  onClose: () => void;
  header?: string;
  todo?: TodoInfo;
}

export const Form = memo((props: FormProps) => {
  const { className, onClose, header, todo } = props;
  const dispatch = useAppDispatch();
  const [task, setTask] = useState(todo ? todo : { title: '', text: '', status: 'new' });
  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTask({ ...task, status: e.target.value });
  };
  const addNewTask = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();
      if (task.text !== '' && task.title !== '') {
        dispatch(todosActions.addTodo(task));
        onClose();
        setTask({ title: '', text: '', status: 'new' });
      }
    },
    [task],
  );
  return (
    <div className={classNames(cls.FormBlock, {}, [className])}>
      <h2>{header}</h2>
      <form className={cls.form}>
        <input
          type='text'
          placeholder='Введите название'
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
        />
        <textarea
          placeholder='Введите описание'
          value={task.text}
          onChange={(e) => setTask({ ...task, text: e.target.value })}></textarea>
        <div className={cls.selectBlock}>
          <span>Выберете статус</span>
          <select value={task.status} onChange={handleStatusChange}>
            <option value='new'>Новая</option>
            <option value='inprogress'>В работе</option>
            <option value='completed'>Завершенная</option>
          </select>
        </div>
        <button onClick={(e) => addNewTask(e)}>Добавить</button>
      </form>
    </div>
  );
});
