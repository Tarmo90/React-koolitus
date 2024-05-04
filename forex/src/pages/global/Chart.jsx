import React, { useEffect, useRef } from 'react';

function Chart() {
  const containerRef = useRef();

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
    script.type = 'text/javascript';
    script.async = true;

    script.innerHTML = JSON.stringify({
      "autosize": true,
      "symbol": "BINANCE:BTCUSDT",
      "timezone": "Europe/Tallinn",
      "theme": "dark",
      "style": "1",
      "locale": "en",
      "enable_publishing": false,
      "gridColor": "rgba(240, 243, 250, 0)",
      "withdateranges": true,
      "range": "YTD",
      "hide_side_toolbar": false,
      "allow_symbol_change": true,
      "calendar": false,
      "show_popup_button": true,
      "popup_width": "1000",
      "popup_height": "650",
      "hide_volume": true,
      "support_host": "https://www.tradingview.com"


    });

    window.onload = function() {
      container.innerHTML = ''; 
      container.appendChild(script);
    };

    return () => {
      if (container.contains(script)) {
        container.removeChild(script);
      }
    };
  }, []);

  return (
    <div className='chart'
      ref={containerRef}
      style={{ position: 'fixed', top: 60, left: 0, height: '95vh', width: '100%', zIndex: 9999 }}
    > Tee Refresh</div>
  );
}

export default Chart;

