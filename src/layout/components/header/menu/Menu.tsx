import { Link } from "react-router-dom";
import { Modal } from "../../../../components/modal/Modal";
import { ModalSize } from "../../../../components/modal/Modal.model";
import { routerPaths } from "../../../../router.model";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type MenuProps = {
  onClose: () => void;
};

export function Menu({ onClose }: Readonly<MenuProps>) {
  const preparePathToDisplay = (path: string) => {
    const home = path.trim() === '/' ? "HOME" : ""; 
    return home || path.replace("/", "").trim().toUpperCase();
  };

  return (
    <Modal size={ModalSize.FULL}>
      <div className="flex flex-row">
        <div className="w-1/2">
          <button className="block absolute top-2 left-2 p-4 hover:text-blue" type="button" onClick={() => onClose()}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
          <ul className="mt-4 py-4 pl-8 flex flex-col gap-4">
            {routerPaths.map((route) => (
              <li key={route.path}>
                <Link
                  className="hover:underline text-blue text-xl"
                  to={route.path}
                  onClick={() => onClose()}
                >
                  {preparePathToDisplay(route.path)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={`hidden md:flex flex-1 h-screen bg-menu bg-cover -mt-10 -mr-10`}>
        </div>
      </div>
    </Modal>
  );
}
