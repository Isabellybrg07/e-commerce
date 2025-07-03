import Input from "../../components/Input";
import Button from "../../components/Button"
import { useEffect, useState } from "react";

type viaCepInfo = {
  bairro: string;
  cep: string;
  estado:string;
  logradouro: string;
  uf: string;
  localidade: string
}


  const [cep, setCep] = useState("");
  const [cepInfo, setCepInfo] = useState<viaCepInfo | null>(null)

  const getCepInfo = async () => {
    const request = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const response = await request.json();
    setCepInfo(response)
  }

  useEffect(() => {
    if (cep.length != 8) {
      return;
    }
    getCepInfo();
  }, [cep])
  return (




    <div className="adress-form">
      <div className="adressl1">
        <div className="adressl2">
          <h2>Dados <br />  do <br /> Endereço</h2>
        </div >
        <label htmlFor="">Núm. para contato</label>
        <Input type="number" label="cep" placeholder="xx xxxxx-xxxx" />

        <label htmlFor="">CEP</label>
        <Input
           onChange={(value) => setCep(value as string)} 
           label="cep" 
           />

        <label htmlFor="">Cidade</label>
        <Input 
        label="cidade"
        value={cepInfo?.localidade}
        />

        <label htmlFor="">Estado</label>
        <Input  
        label="Estado"
        value={cepInfo?.UF}
        />

        
        <Input 
        label="Bairro"
value={cepInfo?.bairro}
        />


        <Input 
        label="Rua"
        value={cepInfo?.logradouro}
        readOnly
        />

        <label htmlFor="">Núm.</label>
        <Input className="input-2-columns" placeholder="" />

        <Button > Adicionar</Button>
        <Button> Próxima</Button>
      </div>

    </div>

  )
};


export default Adress