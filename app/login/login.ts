import { auth } from "../api/auth/[...nextauth]/route";

type loginProps = {
  email: string;
  password: string;
};
export default async function login(props: loginProps) {
  const session = await signIn();
}
