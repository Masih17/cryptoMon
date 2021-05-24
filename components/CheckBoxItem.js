import React, { useState } from "react";
import { View } from "react-native";
import { CheckBox } from "react-native-elements";

function CheckBoxItem(props) {
  const [check, setCheck] = useState(false);

  const onValueChange = () => {
    setCheck(
      (previous) => {
        return { check: !previous.check };
      },
      () => props.onUpdate()
    );
  };

  return (
    <View>
      <CheckBox title={props.label} checked={check} onPress={onValueChange} />
    </View>
  );
}
export default CheckBoxItem;
