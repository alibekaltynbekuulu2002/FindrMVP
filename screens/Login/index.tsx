import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { SafeAreaView, TouchableNativeFeedback, View } from "react-native";
import FocusedStatusBar from "../../components/statusBars/FocusedStatusBar";
import { COLORS, FONTS, SIZES } from "../../constants/theme";
import {
  ForgotPassText,
  HeadingText,
  Image,
  LoginContainer,
  LoginForm,
  LoginText,
  LoginTextInput,
  NewToFindrContainer,
  NewToFindrText,
  Pressable,
  RegisterText,
} from "./components";
import { StackParams } from "../../App";

const Login = () => {
  const [pNum, setPNum] = useState("");
  const [pass, setPass] = useState("");
  const [formIsFilled, setFormIsFilled] = useState(false);
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

  return (
    <SafeAreaView>
      <FocusedStatusBar />
      <Image
        source={require("../../assets/png/illustrations/image1.png")}
        resizeMode={"contain"}
      />
      <LoginContainer>
        <HeadingText>Войти</HeadingText>
        <LoginForm>
          <LoginTextInput
            value={pNum}
            placeholder={"+996 123 456 789"}
            cursorColor={COLORS.primaryDark}
            onChangeText={setPNum}
            maxLength={13}
            keyboardType={"phone-pad"}
          />
          <LoginTextInput
            value={pass}
            onChangeText={setPass}
            placeholder={"Пароль"}
            cursorColor={COLORS.primaryDark}
            textContentType={"password"}
            secureTextEntry
          />
          <ForgotPassText>Забыли пароль?</ForgotPassText>
          <Pressable
            style={{
              backgroundColor: formIsFilled ? COLORS.primary : COLORS.lightGray,
            }}
          >
            <TouchableNativeFeedback
              background={TouchableNativeFeedback.Ripple(
                COLORS.primaryPressed,
                true
              )}
              disabled={formIsFilled ? true : false}
            >
              <View>
                <LoginText>Войти</LoginText>
              </View>
            </TouchableNativeFeedback>
          </Pressable>
        </LoginForm>
        <NewToFindrContainer>
          <NewToFindrText>Впервые на Findr?</NewToFindrText>
          <RegisterText onPress={() => navigation.navigate("Register")}>
            Зарегистрироваться
          </RegisterText>
        </NewToFindrContainer>
      </LoginContainer>
    </SafeAreaView>
  );
};

export default Login;
