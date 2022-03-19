import React, { Dispatch, ReactNode, SetStateAction, useContext } from "react";
import { Popup, Favourite } from "./style";
import { Location } from "grommet-icons";
import { UserContext } from "../../providers/user";

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
  const { user } = useContext(UserContext);

  const handleClick = (event: React.MouseEvent<HTMLParagraphElement>) => {
    if (hasOrigin) {
      return setDestination(event.currentTarget.innerText);
    }

    setOrigin(event.currentTarget.innerText);
    setHasOrigin(true);
  };

  return (
    <Popup>
      <section>
        {children}

        {user?.favoritesPlaces && user?.favoritesPlaces.length !== 0 && <h2>FAVORITOS</h2>}
        {user?.favoritesPlaces && user?.favoritesPlaces.map((place) => (
          <Favourite key={place.id}>
            <div>
              <Location color="white" />
            </div>
            <p onClick={handleClick}>{place.name}</p>
          </Favourite>
        ))}
      </section>
    </Popup>
  );
}

export default Modal;
