import { Section, TitleSt, List, ListItem } from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      <TitleSt>{title}</TitleSt>
      <List>
        {stats.map(stat => (
          <ListItem key={stat.id}>
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}%</span>
          </ListItem>
        ))}
      </List>
    </Section>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object),
};
