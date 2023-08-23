import { Section, TitleSt, List, ListItem, Span } from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      <TitleSt>{title}</TitleSt>
      <List>
        {stats.map(stat => (
          <ListItem key={stat.id}>
            <Span className="label">{stat.label}</Span>
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
