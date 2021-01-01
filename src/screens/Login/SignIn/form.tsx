import React from "react";
import { Input } from "../../../components/input";
import { withFormik } from "formik";
import { ButtonContainer } from "../styles";
import * as Yup from "yup";
import { Button } from "../../../components/button";
import * as RootNavigation from "../../../utils/RootNavigation";

const submit = (values: any) => {
  RootNavigation.navigate("MainTab");
};

const Form = (props) => {
  return (
    <>
      <Input name="email" props={props} placeholder="E-mail" />
      <Input name="password" props={props} password placeholder="Senha" />
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
