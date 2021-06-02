import React, { useState } from "react";
import ApiCall from "../../utils/apiCall";
import { v4 as uuidv4 } from "uuid";
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
  CopyLinkButton,
} from "./ShortenLinkSection.elements";

const ShortenLinkSection = () => {
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [shortLinks, setShortLinks] = useState([]);

  /* useEffect(() => {
    console.log(text);
  }, [text]); */

  const addLink = (data) => {
    const { full_short_link } = data;
    const newLInk = {
      mainLink: text,
      shortLink: full_short_link,
      id: uuidv4(),
      copied: false,
    };

    const addedLinks = [...shortLinks, newLInk];

    setShortLinks(addedLinks);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (text === "") {
      setError("Please add a link");
    } else {
      setError("");
      setLoading(true);
      ApiCall.get(`?url=${text}`)
        .then((res) => {
          addLink(res.data.result);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setError("Some Error Occurred");
          setLoading(false);
        });
    }
  };

  const handleCopy = (id) => {
    const links = [...shortLinks];
    for (let i = 0; i < links.length; i++) {
      if (links[i].id === id) {
        links[i].copied = true;
      }
    }
    setShortLinks(links);
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
                </InputWrapper>

                <ShortenLinkButton disabled={loading} primary>
                  {loading ? "..." : "Shorten It"}
                </ShortenLinkButton>
              </ShortenLinkForm>
              {error && <FormError>{error}</FormError>}
            </ShortenBox>
          </ShortenBoxBackground>

          <ShortenLinkList>
            {shortLinks.length > 0 &&
              shortLinks.map((links) => (
                <ShortenLinkItem>
                  <ShortenLinkItemTop>
                    <MailLink to={links.mainLink}>{links.mainLink}</MailLink>
                  </ShortenLinkItemTop>
                  <Divider />
                  <ShortenLinkItemBottom>
                    <ShortenedLink to={links.shortLink}>
                      {links.shortLink}
                    </ShortenedLink>
                    {links.copied ? (
                      <CopyLinkButton copied primary>
                        Copied
                      </CopyLinkButton>
                    ) : (
                      <CopyLinkButton
                        onClick={() => handleCopy(links.id)}
                        primary
                      >
                        Copy
                      </CopyLinkButton>
                    )}
                  </ShortenLinkItemBottom>
                </ShortenLinkItem>
              ))}
          </ShortenLinkList>
        </Box>
      </ShotenLinkContainer>
    </ShortenLinkBg>
  );
};

export default ShortenLinkSection;
