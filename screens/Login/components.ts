import styled from "styled-components/native";
import { COLORS, FONTS, SIZES } from "../../constants/theme";

export const Image = styled.Image`
  width: 100%;
  max-height: 200px;
`;

export const LoginContainer = styled.View`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

export const HeadingText = styled.Text`
  color: ${COLORS.dark};
  font-size: ${SIZES.extraLarge};
  font-family: ${FONTS.bold};
  margin-bottom: 20px;
`;
export const LoginForm = styled.View`
  margin-bottom: 10%;
`;

export const LoginTextInput = styled.TextInput`
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

export const ForgotPassText = styled.Text`
  font-family: ${FONTS.medium};
  font-size: ${SIZES.medium};
  color: ${COLORS.primary};
  align-self: flex-end;
  margin-bottom: 15px;
`;

export const Pressable = styled.View`
  border-radius: 40px;
  background-color: ${COLORS.primary};
`;
export const LoginText = styled.Text`
  margin: 15px;
  text-align: center;
  font-size: ${SIZES.large};
  font-family: ${FONTS.semiBold};
  color: ${COLORS.white};
`;

export const NewToFindrContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
`;

export const NewToFindrText = styled.Text`
  font-family: ${FONTS.medium};
  font-size: ${SIZES.medium};
  color: ${COLORS.dark};
  align-self: flex-end;
  margin-bottom: 15px;
`;

export const RegisterText = styled.Text`
  font-family: ${FONTS.medium};
  font-size: ${SIZES.medium};
  color: ${COLORS.primary};
  align-self: flex-end;
  margin-bottom: 15px;
`;