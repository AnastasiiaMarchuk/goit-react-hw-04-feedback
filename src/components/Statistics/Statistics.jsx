import { List, ListItem, Span } from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total = 0,
  positivePercentage,
}) => {
  return (
    <List>
      <span>
        <ListItem>
          Good:<Span>{good}</Span>
        </ListItem>
        <ListItem>
          Neutral: <Span>{neutral}</Span>
        </ListItem>
        <ListItem>
          Bad:<Span>{bad}</Span>
        </ListItem>
      </span>
      <span>
        <ListItem>
          Total: <Span>{total}</Span>
        </ListItem>
        <ListItem>
          Positive feedback: <Span>{positivePercentage}%</Span>
        </ListItem>
      </span>
    </List>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
