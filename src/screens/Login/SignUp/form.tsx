import React from "react";
import { Input } from "../../../components/input";
import { withFormik } from "formik";
import { ButtonContainer } from "../styles";
import * as Yup from "yup";
import { Button } from "../../../components/button";

const submit = (values: any) => {
  console.log("values: ", values);
};

const Form = (props) => {
  return (
    <>
      <Input name="email" props={props} placeholder="E-mail" />
      <Input name="password" props={props} password placeholder="Senha" />
      <Input
        name="passwordConfirmation"
        props={props}
        password
        placeholder="Confirme a Senha"
      />
      <ButtonContainer>
        <Button onPress={props.handleSubmit} text="Cadastrar" />
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
    passwordConfirmation: Yup.string()
      .oneOf([Yup.ref("password"), null], "As senhas precisam ser iguais")
      .required("Confirmação obrigatória"),
  }),
  handleSubmit: submit,
})(Form);
