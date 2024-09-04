import clsx from 'clsx';
import { serializeStyles, RegisteredCache } from '@emotion/serialize';
import { insertStyles, getRegisteredStyles } from '@emotion/utils';
import type { EmotionCache } from '@emotion/cache';
import { useGuaranteedMemo } from './utils/useGuaranteedMemo';
import type { CSS } from './types';
import { useEmotionCache } from './useEmotionCache';

const refPropertyName = 'ref' as const;

function getRef(args: any[]) {
  let ref!: string;

  if (args.length !== 1) {
    return { args, ref };
  }

  const [arg] = args;

  if (!(arg instanceof Object)) {
    return { args, ref };
  }

  if (!(refPropertyName in arg)) {
    return { args, ref };
  }

  ref = arg[refPropertyName];
  const argCopy = { ...arg };
  delete argCopy[refPropertyName];
  return { args: [argCopy], ref };
}

export const { cssFactory } = (() => {
  function merge(registered: RegisteredCache, css: CSS, className: string) {
    // console.log('registered', registered);
    // console.log('css!!!!!!!!!!!!!!!!!!!!!!!!', css);
    // console.log('className', className);
    const registeredStyles: string[] = [];

    const rawClassName = getRegisteredStyles(registered, registeredStyles, className);
    // console.log('rawClassName', rawClassName);

    if (registeredStyles.length < 2) {
      return className;
    }

    return rawClassName + css(registeredStyles);
  }

  function _cssFactory(params: { cache: EmotionCache }) {
    const { cache } = params;
    // console.log('cache ================', cache);

    const css: CSS = (...styles: any) => {
      const { ref, args } = getRef(styles);
      // console.log('ref ==============', ref);
      // console.log('args!!!!!!!!!!!!!!!!!!!!!!!', args);
      const serialized = serializeStyles(args, cache.registered);
      // console.log('serialized @@@@@@@@@@@@@@@@@@@@', serialized);
      insertStyles(cache as any, serialized, false);
      return `${cache.key}-${serialized.name}${ref === undefined ? '' : ` ${ref}`}`;
    };

    const cx = (...args: any) => merge(cache.registered, css, clsx(args));
    // console.log('cx ==================', cache.registered);

    return { css, cx };
  }

  return { cssFactory: _cssFactory };
})();

export function useCss() {
  const cache = useEmotionCache();
  return useGuaranteedMemo(() => cssFactory({ cache }), [cache]);
}

/* 
  mantine use-css.tsx 참조 
  https://github.com/mantinedev/mantine/blob/master/src/mantine-styles/src/tss/use-css.tsx
*/
