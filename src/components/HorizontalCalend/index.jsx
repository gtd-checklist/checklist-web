import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

import { StyledListItem, BackCalend, StyledList, StyledListItemText } from './styled';

const HorizontalCalend = (props) => {
  const { selectedIndex, handleListItemClick, week, currentDay } = props;
  return (
    <BackCalend container>
      <StyledList>
        {week.map((item, indx) => (
          <StyledListItem
            key={`data-${indx}`}
            button
            day={currentDay === indx ? 1 : 0}
            selected={selectedIndex === indx}
            onClick={event => handleListItemClick(event, indx)}
          >
            <StyledListItemText
              disableTypography
              primary={<Typography variant="h6" gutterBottom>{item.name}</Typography>}
              secondary={<Typography variant="subtitle1" gutterBottom>{item.date}</Typography>}
            />
          </StyledListItem>
        ))}
      </StyledList>
    </BackCalend>
  );
};

HorizontalCalend.propTypes = {
  handleListItemClick: PropTypes.func,
  selectedIndex: PropTypes.number,
  week: PropTypes.instanceOf(Array),
  currentDay: PropTypes.number
};

HorizontalCalend.defaultProps = {
  handleListItemClick: () => null,
  selectedIndex: 0,
  week: [],
  currentDay: 0
};

export { HorizontalCalend };
