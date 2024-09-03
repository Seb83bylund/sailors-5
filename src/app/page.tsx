"useClient";
import { useSession } from "next-auth/react";


export default function Home() {

  const { data: session } = useSession();

  if (session) {
    return (<p>Signed in</p>)
  }


  return (
    <p>
      Running
    </p>
  );
}
