import Badge from "./ui/Badge";

export function ThanksCard() {
  return (
    <div className="relative flex h-full flex-col">

      <div className="flex h-full flex-col items-center justify-center gap-5 text-center">
        <h1 className="font-gelasio text-9xl font-bold uppercase">
          obrigado pela sua visita !!
        </h1>

        <div className="flex items-center gap-3">
          <Badge />
          <Badge className="font-dancing-script" size="lg">
            Não se esqueça de me contatar, espero te ver em breve!
          </Badge>
          <Badge />
        </div>
      </div>

      <div className="mb-10 flex justify-around">
        <Badge type="solid" className="light" size="lg">
          {"(41) 9 8792-9277"}
        </Badge>
        <Badge type="solid" className="light font-dancing-script" size="lg">
          {"isaqueclaudino12@gmail.com"}
        </Badge>
      </div>
    </div>
  );
}
