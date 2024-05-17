import React, { useState } from "react";

// ControlledOnboardingFlow benefits: ensures steps are in proper order, tracks data, easy way to reset the onboarding process

//In controlled version -> the parent take care of the states
export const ControlledOnboardingFlow = ({
  children,
  onFinish,
  currentIndex,
  onNext,
}) => {
  const goToNext = (stepData) => {
    console.log("ControlledOnboardingFlow stepData", stepData);
    onNext(stepData);
  };

  const currentChild = React.Children.toArray(children)[currentIndex];

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goToNext });
  }

  return currentChild;
};
