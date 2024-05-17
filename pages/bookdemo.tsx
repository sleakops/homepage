import React, { useEffect } from 'react';

function BookDemo() {
  useEffect(() => {
    const shouldRedirect = true
    if (shouldRedirect) {
      window.location.replace('https://meetings.hubspot.com/lucas-condomi/sleakops');
    }
  }, [])

  return (
    <></>
  );
}

export default BookDemo