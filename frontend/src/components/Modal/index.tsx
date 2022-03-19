import React, { Dispatch, ReactNode, SetStateAction } from "react";
import { Popup, Favourite } from "./style";
import { Location } from "grommet-icons";

interface Props {
  children: ReactNode;
  setOrigin: Dispatch<SetStateAction<string>>;
  setDestination: Dispatch<SetStateAction<string>>;
  setHasOrigin: Dispatch<SetStateAction<boolean>>;
  hasOrigin: boolean;
}

function Modal({
  children,
  setOrigin,
  setDestination,
  setHasOrigin,
  hasOrigin,
}: Props) {
  function proximoPasso(busca: string) {
    setOrigin(busca);
    setHasOrigin(true);
  }

  function posDestino(busca: string) {
    setDestination(busca);
  }

  return (
    <Popup>
      <section>
        {children}
        <h2>FAVORITOS</h2>
        <Favourite>
          <div>
            <Location color="white" />
          </div>
          <p
            onClick={(event: React.MouseEvent<HTMLParagraphElement>) => {
              if (hasOrigin) {
                return posDestino(event.currentTarget.innerText);
              }

              proximoPasso(event.currentTarget.innerText);
            }}
          >
            Rua Manoel Eufrasio, 123 Curitiba
          </p>
        </Favourite>
        <Favourite>
          <div>
            <Location color="white" />
          </div>
          <p
            onClick={(event: React.MouseEvent<HTMLParagraphElement>) => {
              if (hasOrigin) {
                return posDestino(event.currentTarget.innerText);
              }

              proximoPasso(event.currentTarget.innerText);
            }}
          >
            Av Parana, 434, Cacoal Rondonia
          </p>
        </Favourite>
        <Favourite>
          <div>
            <Location color="white" />
          </div>
          <p>Rua Prof Antonio Reginato Vianna 232, Curitiba</p>
        </Favourite>
      </section>
    </Popup>
  );
}

export default Modal;
