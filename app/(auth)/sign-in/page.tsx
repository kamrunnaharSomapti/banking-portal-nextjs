import AuthForm from "@/components/AuthForm";

const signIn = () => {
  return (
    <section className="ring size-full flex-center max-sm:px-6">
      <AuthForm type="sign-in"></AuthForm>
    </section>
  );
};

export default signIn;
