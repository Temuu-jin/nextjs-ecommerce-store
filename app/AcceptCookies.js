'use client';
import { useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localstorage.js';
import { parseCookie } from '../utils/toJson';

export default function AcceptCookies() {
  const [areCookiesAccepted, setAreCookiesAccepted] = useState(false);

  useEffect(() => {
    const localStorageValue = getLocalStorage('cookiePolicy');
    if (localStorageValue) {
      setAreCookiesAccepted(parseCookie(localStorageValue));
    } else {
      setAreCookiesAccepted(false);
    }
  }, []);

  return (
    <div
    // className={`${styles.cookieBanner} ${
    //   areCookiesAccepted ? styles.closed : styles.open
    // }`}
    >
      <div>Do you accept the use of cookies?</div>
      <button
        // className={styles.button}
        onClick={() => {
          setLocalStorage('cookiePolicy', JSON.stringify(true));
          setAreCookiesAccepted(true);
        }}
      >
        Accept
      </button>
    </div>
  );
}
