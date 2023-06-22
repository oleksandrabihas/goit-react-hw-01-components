import PropTypes from 'prop-types';
import { SectionStatistic, Title, StatList, Item, Label, Percentage } from './Statistics.styled';
import { generateRandomColor } from 'components/generateRandomColor';

export const Statistics = ({ title = '', stats }) => {
  return (
    <SectionStatistic>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(stat => (
          <Item
            key={stat.id}
            backgroundColor={generateRandomColor()}
            itemCount={stats.length}
          >
            <Label>{stat.label} </Label>
            <Percentage>{stat.percentage}%</Percentage>
          </Item>
        ))}
      </StatList>
    </SectionStatistic>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
