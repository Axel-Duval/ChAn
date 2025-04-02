import React from "react";
import type { NavigateOptions } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

export function useQueryParam(
  key: string
): [string | null, (newQuery: string, options?: NavigateOptions) => void] {
  const [searchParams, setSearchParams] = useSearchParams();

  const setValue = React.useCallback(
    (newValue: string, options?: NavigateOptions) => {
      let newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set(key, newValue);
      setSearchParams(newSearchParams, options);
    },
    [key, searchParams, setSearchParams]
  );

  return [searchParams.get(key), setValue];
}
