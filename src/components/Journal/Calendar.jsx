import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

import { StyledListItemCalendar } from './styled';
import { BackCalend, StyledList, StyledListItemText } from '../HorizontalCalend/styled';

const Calendar = (props) => {
  const { weekNames, planned, resolved } = props;
  return (
    <BackCalend container>
      <StyledList>
        {weekNames.map((item, indx) => (
          <StyledListItemCalendar
            key={`calend-${indx}`}
            planned={planned.filter(itemPlanned => item.date === itemPlanned).length}
            done={resolved.filter(itemResolved => item.date === itemResolved).length}
          >
            <StyledListItemText
              disableTypography
              primary={<Typography variant="h6" color="inherit" gutterBottom>{item.name}</Typography>}
              secondary={<Typography variant="subtitle1" color="inherit" gutterBottom>{item.date}</Typography>}
            />
          </StyledListItemCalendar>
        ))}
      </StyledList>
    </BackCalend>
  );
};

Calendar.propTypes = {
  weekNames: PropTypes.instanceOf(Array),
  resolved: PropTypes.instanceOf(Array),
  planned: PropTypes.instanceOf(Array)
};

Calendar.defaultProps = {
  weekNames: [],
  planned: [],
  resolved: []
};

export { Calendar };
