import CommonForm from "../../components/common/CommonForm";
import { toast } from "sonner";
import { registerFormControls } from "../../config/config";
import { registerUser } from "../../store/authSlice";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/store";

const initialState = {
  userName: "",
  email: "",
  password: "",
};

function AuthRegister() {
  const [formData, setFormData] = useState(initialState);
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function onSubmit(event:React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsBtnDisabled(true);
    dispatch(registerUser(formData)).then((data) => {
      if (data?.payload?.success) {
        toast( data?.payload?.message);
        navigate("/auth/login");
      } else {
        toast.error(data?.payload?.message);
        setIsBtnDisabled(false);
      }
    });
  }

  console.log(formData);

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Create new account
        </h1>
        <p className="mt-2">
          Already have an account?
          <Link
            className="font-medium ml-2 text-primary hover:underline"
            to="/auth/login"
          >
            Login
          </Link>
        </p>
      </div>
      <CommonForm
        formControls={registerFormControls}
        buttonText={"Sign Up"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
        isBtnDisabled={isBtnDisabled}
      />
    </div>
  );
}

export default AuthRegister;
