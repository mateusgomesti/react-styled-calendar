import React, { Component } from 'react';
import PropTypes from 'prop-types';
import dateFns from 'date-fns';
import {
  PickerContainer,
  PickerBodyContainer,
  Header,
  Footer,
  DateInput,
  DateCell,
} from './shared';

class WeekPicker extends Component {
  state = {
    selectedDate: new Date(),
    editting: false,
    buttonCounter: 0,
  }

  onButtonClick = (e) => {
    e.preventDefault();

    this.setState(prevState => ({ ...prevState, editting: true }));
  }

  onSave = () => {
    this.setState(prevState => ({ ...prevState, editting: false }));
  }

  onCancel = () => {
    this.setState(prevState => ({
      ...prevState,
      editting: false,
      selectedDate: new Date(),
    }));
  }

  onWeekClick = (day, showConfirmButton) => {
    this.setState(prevState => ({
      ...prevState,
      selectedDate: day,
    }));

    if (!showConfirmButton) {
      this.onSave();
    }
  }

  nextYear = () => {
    this.setState(prevState => ({
      ...prevState,
      selectedDate: dateFns.addYears(prevState.selectedDate, 1),
    }));
  }

  prevYear = () => {
    this.setState(prevState => ({
      ...prevState,
      selectedDate: dateFns.subYears(prevState.selectedDate, 1),
    }));
  }

  render() {
    const {
      selectedDate,
      editting,
      buttonCounter,
    } = this.state;


    const {
      showCancelButton,
      showConfirmButton,
      confirmButtonMessage,
      cancelButtonMessage,
      withLabel,
      labelMessage,
    } = this.props;

    return (
      <PickerContainer>
        <DateInput
          selectedDate={selectedDate}
          onButtonClick={this.onButtonClick}
          editting={editting}
          view="week"
          withLabel={withLabel}
          labelMessage={labelMessage}
        />
        <PickerBodyContainer className={editting ? 'open' : ''} editting={editting}>
          <Header
            selectedDate={selectedDate}
            prev={this.prevYear}
            next={this.nextYear}
            view="week"
            formatMonthYear="YYYY MM DD"
          />
          <DateCell
            selectedDate={selectedDate}
            showConfirmButton={showConfirmButton}
            onItemClick={this.onWeekClick}
            dateFormat="D"
            view="week"
          />
          <Footer
            showTimeSelector={false}
            showCancelButton={showCancelButton}
            showConfirmButton={showConfirmButton}
            cancelButtonMessage={cancelButtonMessage}
            confirmButtonMessage={confirmButtonMessage}
            timeSelectorMessage=""
            onTimeEditting={() => {}}
            onCancel={this.onCancel}
            onSave={this.onSave}
            buttonCounter={buttonCounter}
          />
        </PickerBodyContainer>
      </PickerContainer>
    );
  }
}

WeekPicker.defaultProps = {
  showCancelButton: false,
  showConfirmButton: true,
  confirmButtonMessage: 'Confrim',
  cancelButtonMessage: 'Cancel',
  withLabel: false,
  labelMessage: 'Week',
};

WeekPicker.propTypes = {
  showCancelButton: PropTypes.bool,
  showConfirmButton: PropTypes.bool,
  confirmButtonMessage: PropTypes.string,
  cancelButtonMessage: PropTypes.string,
  withLabel: PropTypes.bool,
  labelMessage: PropTypes.string,
};

export default WeekPicker;
