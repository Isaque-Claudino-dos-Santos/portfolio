import { ArcDetail } from "./ui/details/ArcDetail";
import Card from "./ui/Card";

export default function ContactCard() {
  return (
    <Card className="relative col-span-2 rounded-tr-[100px]">
      <ArcDetail repeat={["solid", "outline"]} className="right-5 bottom-5" />

      <h2 className="font-gelasio font-bold text-3xl">Contato</h2>
      <p>E-mail: isaqueclaudino12@gmail.com</p>
      <p>{"Whatsapp: (41) 9 8792-9277"}</p>
      <p>{"GitHub: -----"}</p>
      <p>{"Linkedin: -----"}</p>
      <p>{"Packagist: -----"}</p>
      <p>{"NPM: -----"}</p>
      <p>{"Youtube: -----"}</p>
    </Card>
  );
}
