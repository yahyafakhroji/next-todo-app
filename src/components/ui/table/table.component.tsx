import { nanoid } from 'nanoid';

import style from './table.module.scss';

interface Cols {
  key: string;
  title?: React.ReactNode;
  width?: number;
  render: (value?: any) => React.ReactNode;
}

export default function Table({
  columns,
  data,
  emptyContent,
}: {
  columns: Cols[];
  data: any[];
  emptyContent?: React.ReactNode;
}) {
  return (
    <table className={style.table}>
      <thead className={style.thead}>
        <tr className={style.trow}>
          {columns.map((col) => {
            return (
              <th key={`head_${col.key}`} className={style.tcell} style={{ width: col.width || 'auto' }}>
                <div className={style['tcell-content']}>{col.title || ''}</div>
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody className={style.tbody}>
        {(data || []).length === 0 && emptyContent && (
          <tr>
            <td colSpan={columns.length}>{emptyContent}</td>
          </tr>
        )}
        {data.map((val) => {
          return (
            <tr key={nanoid()} className={style.trow}>
              {columns.map((col) => {
                return (
                  <td key={`body_${col.key}`} className={style.tcell} width={col.width}>
                    {col.render(val)}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
