import tecnologias from '../../data/tecnologias';

type TecnologiaProps = {
  nome: string;
};

const tecnologiasValidas = Object.keys(tecnologias) as Array<keyof typeof tecnologias>;

export default function Tecnologia({ nome }: TecnologiaProps) {
  const isTecnologiaValida = tecnologiasValidas.includes(nome as any);
  
  if (!isTecnologiaValida) {
    console.warn(`Tecnologia "${nome}" não encontrada`);
    return null;
  }

  return (
    <div className="flex flex-row gap-2 items-center">
      {tecnologias[nome as keyof typeof tecnologias]}
      <p className="text-[#616161] text-[1.3vw] font-medium max-[900px]:text-[1rem]">
        {nome === 'ReactN' ? 'React Native' : nome}
      </p>
    </div>
  );
}