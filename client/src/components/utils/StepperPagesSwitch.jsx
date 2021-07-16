import React from 'react';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';
import { Button, MobileStepper } from '@material-ui/core';

export const StepperPagesSwitch = ({
  stepsMax,
  activeStep,
  clickNext,
  clickBack,
  disabledNextButton,
  disabledBackButton,
}) => (
  <MobileStepper
    steps={stepsMax}
    activeStep={activeStep}
    position="static"
    variant="text"
    nextButton={
      <Button size="small" onClick={clickNext} disabled={disabledNextButton}>
        Next
        <KeyboardArrowRight />
      </Button>
    }
    backButton={
      <Button size="small" onClick={clickBack} disabled={disabledBackButton}>
        <KeyboardArrowLeft /> 
        Back
      </Button>
    }
  />
);
