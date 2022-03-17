import React, {
  Dispatch,
  EventHandler,
  ReactNode,
  SetStateAction,
  useContext,
  MouseEvent,
  ChangeEvent,
} from "react";
import { Popup, PopupWaiting, Favourite } from "./style";
import { Search, Location } from "grommet-icons";
import { TravelContext } from "../../providers/travel/index";

function Modal({
  children,
  setOrigin,
  setDestination,
}: {
  children: ReactNode;
  setOrigin: Dispatch<SetStateAction<string>>;
  setDestination: Dispatch<SetStateAction<string>>;
}) {
  const { travelStatus, updateTravelStatus } = useContext(TravelContext);

  function proximoPasso(busca: string) {
    setOrigin(busca);
    updateTravelStatus("waiting for driver");
  }

  function posDestino(busca: string) {
    setDestination(busca);
  }

  return (
    <>
      {travelStatus === false ? (
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
              <p>Av Parana, 434, Cacoal Rondonia</p>
            </Favourite>
            <Favourite>
              <div>
                <Location color="white" />
              </div>
              <p>Rua Prof Antonio Reginato Vianna 232, Curitiba</p>
            </Favourite>
          </section>
        </Popup>
      ) : travelStatus === "waiting for driver" ? (
        <PopupWaiting>
          <section>
            {children}
            <button
              onClick={() => {
                updateTravelStatus("in transit");
              }}
            >
              Chamar o Motorista
            </button>
            <h2>Favoritos</h2>
            <Favourite>
              <div>
                <Location color="white" />
              </div>
              <p
                onClick={(event: React.MouseEvent<HTMLParagraphElement>) => {
                  posDestino(event.currentTarget.innerText);
                }}
              >
                Bar do Alemão, Curitiba
              </p>
            </Favourite>
            <Favourite>
              <div>
                <Location color="white" />
              </div>
              <p>Myr hoppy, centro Curitiba</p>
            </Favourite>
            <Favourite>
              <div>
                <Location color="white" />
              </div>
              <p>Bar boteco do Bodega</p>
            </Favourite>
          </section>
        </PopupWaiting>
      ) : (
        <></>
      )}
    </>
  );
}

export default Modal;
