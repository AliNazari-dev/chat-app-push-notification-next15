import Link from "next/link";
import Button from "./components/Button";

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center ">
      <h1 className="mb-1 text-6xl font-extrabold text-blue-500">Rayan chat</h1>
      <p className="mb-10 ">coolest chat app on the planet</p>
      <Button as={Link} href="/chat">
        Start chatting
      </Button>
    </div>
  );
}
