import { signUpSchema, signUpInterface } from "@/types/form.schema";

export default function submitForm({ data }: { data: signUpInterface }) {
  console.log(data);
}
