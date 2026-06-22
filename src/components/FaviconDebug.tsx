'use client';

import {useMemo, useState} from 'react';

const FaviconDebug = () => {
  const [copied, setCopied] = useState(false);

  const faviconUrl = useMemo(() => {
    if (typeof document === 'undefined') {
      return '';
    }

    const iconLink =
      document.querySelector<HTMLLinkElement>('link[rel="icon"]') ??
      document.querySelector<HTMLLinkElement>('link[rel~="icon"]');

    return iconLink?.href ?? '';
  }, []);

  const handleCopy = async () => {
    if (!faviconUrl) {
      return;
    }

    await navigator.clipboard.writeText(faviconUrl);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 rounded-lg border border-[#1F497D]/20 bg-white/95 p-3 shadow-lg backdrop-blur">
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1F497D]">
        Debug
      </p>
      <button
        type="button"
        onClick={handleCopy}
        className="mt-2 rounded-md bg-[#1F497D] px-3 py-2 text-sm font-medium text-white transition hover:bg-[#16375B]"
      >
        Copy Favicon URL
      </button>
      <p className="mt-2 max-w-[18rem] break-all text-xs text-slate-600">
        {faviconUrl || 'Favicon URL unavailable'}
      </p>
      {copied ? <p className="mt-1 text-xs text-[#1F497D]">Copied.</p> : null}
    </div>
  );
};

export default FaviconDebug;
