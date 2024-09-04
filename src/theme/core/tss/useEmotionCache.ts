import createCache, { EmotionCache, Options } from "@emotion/cache";
import { useOqEmotionOptions } from "../RdProvider";
import { defaultOqupieEmotionCache } from "./default-cache";

export const { getCache } = (() => {
  let cache: EmotionCache;

  function _getCache(options?: Options) {
    if (cache === undefined) {
      cache = createCache(options || { key: "rd", prepend: true });
    }

    return cache;
  }

  return { getCache: _getCache };
})();

export function useEmotionCache() {
  const cache = useOqEmotionOptions();
  return getCache(cache) || defaultOqupieEmotionCache;
}
