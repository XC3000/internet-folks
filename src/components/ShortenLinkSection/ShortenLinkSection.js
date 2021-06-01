import React, { useEffect, useState } from "react";

import {
  Box,
  ShortenLinkBg,
  ShotenLinkContainer,
  ShortenLinkForm,
  ShortenLinkInput,
  ShortenLinkButton,
  ShortenBox,
  ShortenBoxBackground,
  ShortenLinkList,
  ShortenLinkItem,
  ShortenedLink,
  MailLink,
  Divider,
  ShortenLinkItemTop,
  ShortenLinkItemBottom,
  FormError,
  InputWrapper,
} from "./ShortenLinkSection.elements";

const ShortenLinkSection = () => {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  /* useEffect(() => {
    console.log(text);
  }, [text]); */

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(text);

    if (text === "") {
      setError("Please add a link");
    }
  };

  return (
    <ShortenLinkBg>
      <ShotenLinkContainer>
        <Box>
          <ShortenBoxBackground>
            <ShortenBox>
              <ShortenLinkForm onSubmit={onSubmit}>
                <InputWrapper>
                  <ShortenLinkInput
                    type="text"
                    placeholder="Shorten a Link here"
                    onChange={(e) => setText(e.target.value)}
                  />
                  {error && <FormError>{error}</FormError>}
                </InputWrapper>

                <ShortenLinkButton primary>Shorten It</ShortenLinkButton>
              </ShortenLinkForm>
            </ShortenBox>
          </ShortenBoxBackground>

          <ShortenLinkList>
            <ShortenLinkItem>
              <ShortenLinkItemTop>
                <MailLink>
                  https://www.danilucaci.com/blog/validate-forms-in-react
                </MailLink>
              </ShortenLinkItemTop>
              <Divider />
              <ShortenLinkItemBottom>
                <ShortenedLink>https://www.bit.ly/</ShortenedLink>
                <ShortenLinkButton primary>Copy</ShortenLinkButton>
              </ShortenLinkItemBottom>
            </ShortenLinkItem>
          </ShortenLinkList>
        </Box>
      </ShotenLinkContainer>
    </ShortenLinkBg>
  );
};

export default ShortenLinkSection;
