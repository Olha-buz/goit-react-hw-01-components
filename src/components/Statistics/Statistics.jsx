import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const createColor = () => {
  const color =
    'rgba(' +
    Math.round(Math.random() * 255) +
    ',' +
    Math.round(Math.random() * 255) +
    ',' +
    Math.round(Math.random() * 255) +
    ',' +
    0.5 +
    ')';

  return color;
};

export const Statistics = ({title, stats}) => {
    return (
      <section className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}

            <ul className={css.statlist}>
                
                {stats.map(({ id, label, percentage }) => {
          return (
            <li
              className={css.item}
              key={id}
              style={{ backgroundColor: createColor() }}
            >
              <span className={css.label}>{label}<br/> </span>
              <span className={css.percentage}>{percentage}</span>
            </li>
          );
                })}
                
            </ul>
</section>
    )
}

Statistics.propTypes = {
  title: PropTypes.string,
    stats: PropTypes.array
};