import t from "tcomb-form-native";
import { View } from "react-native";

interface Props {
  userValues?: { email: string; username: string; password: string };
  handleSubmit?: () => {};
}

export const LoginForm: React.FC<Props> = ({ userValues }) => {
  const userInfo = t.struct({
    email: t.String,
    username: t.String,
    password: t.String
  });

  const defaultOptions = {
    auto: "placeholders"
  };

  const Form = t.form.Form;
  const defaultSubmit = () => {};

  return (
    <View>
      <Form
        type={userInfo}
        value={userValues ? userValues : undefined}
        options={defaultOptions}
      />
    </View>
  );
};
