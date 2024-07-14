import {
  Container,
  CountryList,
  Heading,
  Loader,
  SearchForm,
  Section,
} from "components";
import { useSearchCountries } from "hooks";

const SearchCountry = () => {
  const { countries, isLoading, error, handleSubmit } = useSearchCountries();
  return (
    <Section>
      <Container>
        <SearchForm onSubmit={handleSubmit} />
        {isLoading && <Loader />}
        {error && <Heading title="Something wrong..." bottom />}
        {countries.length > 0 && <CountryList countries={countries} />}
      </Container>
    </Section>
  );
};
export default SearchCountry;
