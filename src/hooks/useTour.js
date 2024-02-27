import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../services/api";

export const useTour = (id) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    axios
      .get(API_URL + "/retrieve-tour/" + id)
      .then(({ data }) => {
        setData(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);
  return { data, loading };
};
