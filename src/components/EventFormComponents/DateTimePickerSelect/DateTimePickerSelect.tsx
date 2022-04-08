import React, { FC } from 'react';

import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DateTimePicker } from '@material-ui/pickers';

interface DateTimePickerSelectProps {
  label: string;
  selectedDate: Date | null;
  setDate: (date: Date | null) => void;
}

const DateTimePickerSelect: FC<DateTimePickerSelectProps> = ({
  selectedDate,
  setDate,
}) => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DateTimePicker
        style={{ margin: '0 0 20px 5px' }}
        clearable
        disablePast
        label="Date"
        value={selectedDate}
        onChange={setDate}
      />
    </MuiPickersUtilsProvider>
  );
};

export default DateTimePickerSelect;
