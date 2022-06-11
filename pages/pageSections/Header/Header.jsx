import { useState } from "react";
import HeaderStyle from "../../../styles/Header.module.css";
import Image from "next/image";
import { CgProfile } from "react-icons/cg";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import ContainerSmall from "../../../component/ContainerSmall/ContainerSmall";
import Socials from "../../../component/Socials/Socials";

const closeModalStyle = {
  height: "30px",
  width: "30px",
  border: "3px solid aqua",
};

const Header = () => {
  const OverlayOne = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropInvert="20%"
      backdropBlur="5px"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<OverlayOne />);

  return (
    <ContainerSmall>
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        <div>
          <span >
            <Image
              src="/header_logo.png"
              alt="logo"
              height="100px"
              width="110px"
            />
          </span>

          <span className={HeaderStyle.hero_socials}>
            <Socials />
          </span>
        </div>

        <CgProfile
          size={35}
          onClick={() => {
            setOverlay(<OverlayOne />);
            onOpen();
          }}
          // style={{ cursor: "pointer" }}
          className={HeaderStyle.modalBtn}
        />

        <Modal
          onClose={onClose}
          isOpen={isOpen}
          isCentered
          motionPreset="slideInRight"
          size="xl"
          blockScrollOnMount={true}
        >
          {overlay}
          <ModalContent>
            <ModalHeader>ABOUT ME</ModalHeader>

            <ModalBody>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              architecto doloremque dignissimos laborum aut soluta nostrum quas
              facilis et suscipit? Eaque iusto nam omnis aperiam labore ipsa
              nisi facilis corporis rerum iure iste culpa minima veritatis
              laboriosam, pariatur aut quis.
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </header>
    </ContainerSmall>
  );
};

export default Header;
