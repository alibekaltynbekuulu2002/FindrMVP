import { useState } from "react";
import { SafeAreaView, TouchableNativeFeedback, View } from "react-native";
import styled from "styled-components/native";
import FocusedStatusBar from "../components/statusBars/FocusedStatusBar";
import { COLORS, FONTS, SIZES } from "../constants/theme";

const Login = () => {
  const [pNum, setPNum] = useState("");
  const [pass, setPass] = useState("");
  const [formIsFilled, setFormIsFilled] = useState(false);

  return (
    <SafeAreaView>
      <FocusedStatusBar />
      <Image
        source={require("../assets/png/illustrations/image1.png")}
        resizeMode={"cover"}
      />
      <LoginContainer>
        <HeadingText>Войти</HeadingText>
        <LoginForm>
          <LoginTextInput
            value={pNum}
            placeholder={"+996 123 456 789"}
            cursorColor={COLORS.primaryDark}
            onChangeText={(val) => {
              setPNum(val);
              if (pNum.length == 13 && pass.length > 5) setFormIsFilled(true);
              else setFormIsFilled(false);
            }}
          />
          <LoginTextInput
            value={pass}
            onChangeText={(val) => {
              setPass(val);
              if (pNum.length == 13 && pass.length > 5) setFormIsFilled(true);
              else setFormIsFilled(false);
            }}
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
              disabled={formIsFilled ? false : true}
            >
              <View>
                <LoginText>Войти</LoginText>
              </View>
            </TouchableNativeFeedback>
          </Pressable>
        </LoginForm>
        <NewToFindrContainer>
          <NewToFindrText>Впервые на Findr?</NewToFindrText>
          <RegisterText>Зарегистрироваться</RegisterText>
        </NewToFindrContainer>
      </LoginContainer>
    </SafeAreaView>
  );
};

const Image = styled.Image`
  width: 100%;
  max-height: 300px;
`;

const LoginContainer = styled.View`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const HeadingText = styled.Text`
  color: ${COLORS.dark};
  font-size: ${SIZES.extraLarge};
  font-family: ${FONTS.bold};
  margin-bottom: 20px;
`;
const LoginForm = styled.View`
  margin-bottom: 10%;
`;

const LoginTextInput = styled.TextInput`
  width: 100%;
  height: 50px;
  border-radius: 40px;
  border: 1px solid ${COLORS.lightGray};
  margin: 0 auto;
  padding: 0 20px;
  font-size: ${SIZES.medium};
  margin-bottom: 15px;
  color: ${COLORS.primary};
  font-family: ${FONTS.medium};
`;

const ForgotPassText = styled.Text`
  font-family: ${FONTS.medium};
  font-size: ${SIZES.medium};
  color: ${COLORS.primary};
  align-self: flex-end;
  margin-bottom: 15px;
`;

const Pressable = styled.View`
  border-radius: 40px;
  background-color: ${COLORS.primary};
`;
const LoginText = styled.Text`
  margin: 15px;
  text-align: center;
  font-size: ${SIZES.large};
  font-family: ${FONTS.semiBold};
  color: ${COLORS.white};
`;

const NewToFindrContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
`;

const NewToFindrText = styled.Text`
  font-family: ${FONTS.medium};
  font-size: ${SIZES.medium};
  color: ${COLORS.dark};
  align-self: flex-end;
  margin-bottom: 15px;
`;

const RegisterText = styled.Text`
  font-family: ${FONTS.bold};
  font-size: ${SIZES.medium};
  color: ${COLORS.primary};
  align-self: flex-end;
  margin-bottom: 15px;
`;

export default Login;
