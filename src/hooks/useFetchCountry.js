import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCountry } from "service/countryApi";

export const useFetchCountry = () => {
  const [country, setCountry] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { countryId } = useParams();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await fetchCountry(countryId);
        setCountry(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [countryId]);

  return { country, isLoading, error };
};
