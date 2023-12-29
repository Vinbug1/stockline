import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import PinView, { PinViewProps } from 'react-native-pin-view';

interface PinViewWrapperProps extends PinViewProps {
  onComplete: (val: string) => void;
  buttonTextColor?: string;
}

export interface PinViewWrapperRef {
  // Define any methods you want to expose
  // For example, you can expose a method to clear the PIN input
  clear: () => void;
}

const PinViewWrapper: React.ForwardRefRenderFunction<PinViewWrapperRef, PinViewWrapperProps> = (
  { onComplete, buttonTextColor, ...rest },
  ref
) => {
  const pinViewRef = useRef<any>(null);

  useImperativeHandle(ref, () => ({
    // Expose a method to clear the PIN input
    clear: () => {
      if (pinViewRef.current) {
        pinViewRef.current.clear();
      }
    },
  }));

  return (
    <PinView
      ref={pinViewRef}
      onComplete={(val: string) => {
        if (onComplete) {
          onComplete(val);
        }
      }}
      buttonTextColor={buttonTextColor}
      {...rest}
    />
  );
};

export default forwardRef<PinViewWrapperRef, PinViewWrapperProps>(PinViewWrapper);
