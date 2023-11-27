import PropTypes from 'prop-types';

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
<section className="statistics">
            {title && <h2 className="title">{title}</h2>}

            <ul className="stat-list">
                
                {stats.map(({ id, label, percentage }) => {
          return (
            <li
              className="item"
              key={id}
              style={{ backgroundColor: createColor() }}
            >
              <span className="label">{label}: </span>
              <span className="percentage">{percentage}</span>
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