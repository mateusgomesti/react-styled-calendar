import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import {
  withKnobs,
  boolean,
  text,
  select,
} from '@storybook/addon-knobs';
import { DatePicker } from '../src';

addDecorator(withKnobs);
storiesOf('DatePicker', module)
  .add('default',
    withInfo('xiao')(() => {
      const weekOptions = {
        d: 'd',
        do: 'do',
        dd: 'dd',
        ddd: 'ddd',
        dddd: 'dddd',
      };
      const monthYearOptions = {
        YYYYMMM: 'YYYY MMM',
        YYYYMMMM: 'YYYY MMMM',
        MMMYYYY: 'MMM YYYY',
        MMMMYYYY: 'MMMM YYYY',
      };
      const DateInputOptions = {
        'YYYY-MM-DD': 'YYYY-MM-DD',
        'DD/MM/YYYY': 'DD/MM/YYYY',
        'YYYY-MM-DD HH:mm': 'YYYY-MM-DD HH:mm',
      };
      return (
        <DatePicker
          showTimeSelector={boolean('showTimeSelector', false)}
          showConfirmButton={boolean('showConfirmButton', false)}
          showCancelButton={boolean('showCancelButton', false)}
          confirmButtonMessage={text('confirmButtonMessage', 'Confirm')}
          cancelButtonMessage={text('cancelButtonMessage', 'Cancel')}
          timeSelectorMessage={text('timeSelectorMessage', 'Pick Up A Time !')}
          formatWeek={select('Week Format', weekOptions)}
          formatMonthYear={select('Month and Year format in Header', monthYearOptions)}
          formatDateInput={select('Dateinput format', DateInputOptions)}
        />
      );
    }));