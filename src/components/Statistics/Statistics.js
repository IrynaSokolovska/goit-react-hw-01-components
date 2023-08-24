import {
  Section,
  TitleSt,
  List,
  ListItem,
  SpanLable,
  SpanNumber,
} from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      <TitleSt>{title}</TitleSt>
      <List>
        {stats.map(stat => (
          <ListItem key={stat.id}>
            <SpanLable>{stat.label}</SpanLable>
            <SpanNumber>{stat.percentage}%</SpanNumber>
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
