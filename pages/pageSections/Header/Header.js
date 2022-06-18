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
import ContainerSmall from "../../../component/Container/Container";
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
          <span>
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

        {/* modal button */}
        <div className={HeaderStyle.modalBtn} onClick={() => {
              setOverlay(<OverlayOne />);
              onOpen();
            }}>
          <Image
            src="/IMG_9647.jpg"
            alt="aboutMe image"
            className={HeaderStyle.modalBtn_img}
            height="100%"
            width="100%"
            onClick={() => {
              setOverlay(<OverlayOne />);
              onOpen();
            }}
          />
        </div>

        {/* modal body */}
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
              <div>
                <p style={{ fontSize: "clamp(1.1rem, 3.8vw, 1.2rem)" }}>
                  A coding enthusiast, quick learner, and I am always eager to
                  learn about any tool or technology that would allow me to
                  develop web or mobile applications with seamless, intuitive,
                  and dynamic user experiences. <br /> <br />
                  Asides coding, I also enjoy playing basketball and FPS video
                  games.
                </p>
              </div>
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
