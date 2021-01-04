import React from "react";
import { Input } from "../../../components/input";
import { withFormik } from "formik";
import { ButtonContainer } from "../styles";
import * as Yup from "yup";
import { Button } from "../../../components/button";
import * as RootNavigation from "../../../utils/RootNavigation";
import EmailIcon from "../../../assets/icons/email.svg";
import KeyIcon from "../../../assets/icons/key.svg";

const submit = (values: any) => {
  RootNavigation.navigate("MainTab");
};

const Form = (props) => {
  return (
    <>
      <Input name="email" props={props} placeholder="E-mail" Icon={EmailIcon} />
      <Input
        name="password"
        props={props}
        password
        placeholder="Senha"
        Icon={KeyIcon}
      />
      <ButtonContainer>
        <Button onPress={props.handleSubmit} text="Entrar" />
      </ButtonContainer>
    </>
  );
};

export default withFormik({
  mapPropsToValues: () => ({ email: "", password: "" }),
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Digite um e-mail válido")
      .required("E-mail Obrigatório"),
    password: Yup.string()
      .min(6, "A senha deve ter no mínimo 6 caracteres")
      .required("Senha Obrigatória"),
  }),
  handleSubmit: submit,
})(Form);
