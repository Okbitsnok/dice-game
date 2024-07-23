import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { signIn } from "next-auth/react";
import ModalBase from "../ModalBase/ModalBase";
import * as S from "./index.styled";
import { useState } from "react";
import LoaderIcon from "@/assets/icons/loader.svg";

const schema = yup.object().shape({
  login: yup.string().required("Login is required"),
  password: yup.string().required("Password is required"),
});

const AuthModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: { login: string; password: string }) => {
    setLoading(true);
    const result = await signIn("credentials", {
      redirect: false,
      login: data.login,
      password: data.password,
    });

    if (result?.ok) {
      onClose();
    } else {
      alert("Failed to sign in");
    }

    onClose();
    reset();
    setLoading(false);
  };

  if (!isOpen) return null;

  return (
    <ModalBase isOpen={isOpen} onClose={onClose}>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.Input type="text" placeholder="Login" {...register("login")} />
        <S.ErrorMessage>{errors.login && errors.login.message}</S.ErrorMessage>
        <S.Input
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        <S.ErrorMessage>
          {errors.password && errors.password.message}
        </S.ErrorMessage>
        <S.Button disabled={loading} type="submit">
          {loading ? <LoaderIcon /> : "Войти"}
        </S.Button>
      </S.Form>
    </ModalBase>
  );
};

export default AuthModal;
