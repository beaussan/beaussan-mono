import React from 'react';
import { getOutLayout } from '../../layouts/WithUserOut';
import { getCsrfToken, getProviders, signIn } from 'next-auth/react';
import { getServerSession } from 'next-auth/next';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { Logo } from '../../components/Logo';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import { Loader } from '../../components/Loader';
import { authOptions } from '../api/auth/[...nextauth]';

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { res } = context;
  const session = await getServerSession(context.req, context.res, authOptions);

  console.log('AUTH LOGIN PAGE :', session);

  if (session && res && session.token) {
    res.writeHead(302, {
      Location: '/',
    });
    res.end();
  }

  return {
    props: {
      session: session ?? null,
      providers: await getProviders(),
      csrfToken: await getCsrfToken(),
    },
  };
};
export const Login = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  console.log('LOGIN PROPS');
  console.log(props);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Logo className="mx-auto h-16 w-auto" />
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
          Login into the app
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div>
            <div className="flex flex-col items-start content-center justify-center">
              <div>We only support loggin with your student email.</div>
            </div>
          </div>
          <div className="mt-6">
            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm leading-5">
                <span className="px-2 bg-white text-gray-500">
                  Sign in with
                </span>
              </div>
            </div>
            <Formik<{ email: string }>
              initialValues={{ email: '' }}
              validationSchema={yup.object({
                email: yup.string().email().required(),
              })}
              onSubmit={async ({ email }) => {
                console.log(email);
                await signIn('email', { email });
              }}
            >
              {({ isValid, isValidating, isSubmitting }) => (
                <Form>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    label="Email address"
                  />
                  <div className="mt-4 w-full grid">
                    {isSubmitting ? (
                      <Loader />
                    ) : (
                      <Button disabled={!isValid || isValidating} type="submit">
                        Sign in with Email
                      </Button>
                    )}
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
  // return <LoginComponent hero="Login into the app" />;
};

Login.getLayout = getOutLayout;

export default Login;
