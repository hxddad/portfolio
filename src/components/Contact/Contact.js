import React, { useState } from "react";
import { ContactWrapper, Email } from "./ContactElements";
import { MdContentCopy } from "react-icons/md";
import { IconButton, Tooltip } from "@mui/material";
import Zoom from '@mui/material/Zoom';

import ScrollAnimation from "react-animate-on-scroll";
function Contact() {
  const [showTooltip, setShowTooltip] = useState(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText("haddad.yazan117@gmail.com");
    setShowTooltip(true);
    setTimeout(() => {
      setShowTooltip(false);
    }, 700);
  };

  return (
    <ContactWrapper id="contact">

      <div className="Container">
        <div className="SectionTitle">contact.</div>
        <ScrollAnimation animateIn="fadeIn" >
          <div className="BigCard">
            <Email>
              <div style={{ display: 'flex', alignItems: 'center', columnGap: '20px', rowGap: '10px', flexWrap: 'wrap', justifyContent: 'center' }} >
                <span>haddad.yazan117@gmail.com</span>
                <Tooltip
                  PopperProps={{
                    disablePortal: true,
                  }}
                  open={showTooltip}
                  onClose={() => setShowTooltip(false)}
                  title="Copied!"
                  TransitionComponent={Zoom}
                  disableFocusListener
                  disableHoverListener
                  disableTouchListener
                  placement="bottom"
                >
                  <IconButton  onClick={copyToClipboard} >
                    <MdContentCopy size={25} style={{ cursor: 'pointer', color: "#fff" }}/>
                  </IconButton>
                </Tooltip>
              </div>
            </Email>
          </div>
        </ScrollAnimation>

      </div>
    </ContactWrapper>
  );
}

export default Contact;
