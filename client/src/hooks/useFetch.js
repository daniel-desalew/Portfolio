import { useEffect, useState } from "react";
import api from "../api/axios";

// GETs `url`. Returns { data, loading, error }.
// If the API fails and a `fallback` is given, the fallback data is shown instead of an error.
export default function useFetch(url, fallback = null) {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    let live = true;
    setState({ data: null, loading: true, error: null });
    api
      .get(url)
      .then(
        (r) => live && setState({ data: r.data, loading: false, error: null }),
      )
      .catch((e) => {
        if (!live) return;
        if (fallback)
          return setState({ data: fallback, loading: false, error: null });
        setState({
          data: null,
          loading: false,
          error: e.response?.data?.message || "Could not reach the server",
        });
      });
    return () => {
      live = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return state;
}
