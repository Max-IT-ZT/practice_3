import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchByRegion } from "service/countryApi";

export const useSearchCountries = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const region = searchParams.get("q");

  useEffect(() => {
    if (!region) return;
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await fetchByRegion(region);
        setCountries(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [region]);

  const handleSubmit = (value) => {
    setSearchParams({
      q: value,
    });
  };

  return { countries, isLoading, error, handleSubmit };
};
