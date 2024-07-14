import {
  Container,
  CountryInfo,
  GoBackBtn,
  Heading,
  Loader,
  Section,
} from "components";
import { useFetchCountry } from "hooks";
import { useRef } from "react";
import { useLocation } from "react-router-dom";

const Country = () => {
  const { country, isLoading, error } = useFetchCountry();
  const location = useLocation();
  const goBack = useRef(location?.state ?? "/");
  return (
    <Section>
      <Container>
        <GoBackBtn path={goBack.current}>Back to countries</GoBackBtn>
        {isLoading && <Loader />}
        {error && <Heading title="Something wrong..." bottom />}
        {country && <CountryInfo {...country} />}
      </Container>
    </Section>
  );
};
export default Country;
// capital
// countryName

// flag

// id

// languages

// population
