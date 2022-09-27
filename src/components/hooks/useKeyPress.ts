import { useEffect } from "react";

export const useKeyPress = (key: string, action: (...params: any) => void) => {
  useEffect(() => {
    function onKeyup(e: { key: string }) {
      if (e.key === key) action();
    }
    window.addEventListener("keyup", onKeyup);
    return () => window.removeEventListener("keyup", onKeyup);
  }, [action, key]);
};
