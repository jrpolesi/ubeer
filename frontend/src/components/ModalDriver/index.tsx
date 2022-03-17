import React, { ReactNode, useContext } from "react";
import { TravelContext } from "../../providers/travel/index";
import { PopupDriver, PopupWaitingDriver } from "./style";
import { Indicator } from "grommet-icons";

function ModalDriver({ children }: { children: ReactNode }) {
  const { travelStatus, updateTravelStatus } = useContext(TravelContext);
  return (
    <>
      {travelStatus === "in transit" ? (
        <PopupDriver>
          <div>
            {children}
            <h2>Favorios</h2>
            <div>
              <Indicator />
              <div>
                {/*             {favoritesplaces.map((element) => (
      <>
        <h4>{element.place}</h4>
        <p>{element.city}</p>
      </>
    ))} */}
              </div>
            </div>
          </div>
        </PopupDriver>
      ) : travelStatus === "finished" ? (
        <PopupWaitingDriver>
          <div>
            <button
              onClick={() => {
                updateTravelStatus("finished");
              }}
            >
              Chamar o Motorista
            </button>
            <h2>Favorios</h2>
            <div>
              <Indicator />
              <div>
                {/*             {favoritesplaces.map((element) => (
          <>
            <h4>{element.place}</h4>
            <p>{element.city}</p>
          </>
        ))} */}
              </div>
            </div>
          </div>
        </PopupWaitingDriver>
      ) : (
        <></>
      )}
    </>
  );
}

export default ModalDriver;
