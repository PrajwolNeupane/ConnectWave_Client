import { logInInterface } from "@/types/form.schema";

export default function submitForm({ data }: { data: logInInterface }) {
  console.log(data);
}
