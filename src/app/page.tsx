import { redirect } from "next/navigation";

export default function Home() {
  redirect("/failed-payment-recovery");
}
