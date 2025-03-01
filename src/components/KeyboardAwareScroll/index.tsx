import React, { ReactNode, useRef } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const KeyboardAwareScroll = ({ children }: { children: ReactNode }) => {
  const refKeyboardView = useRef<KeyboardAwareScrollView>(null);

  return (
    <KeyboardAwareScrollView
      ref={refKeyboardView}
      extraScrollHeight={150}
      enableAutomaticScroll={true}
      enableOnAndroid={true}
      showsVerticalScrollIndicator={false}
      style={{ flex: 1 }}
    >
      {children}
    </KeyboardAwareScrollView>
  );
};

export default KeyboardAwareScroll;
