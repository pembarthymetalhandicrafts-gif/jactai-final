import { useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'jactai_wishlist';

export default function useWishlist() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setWishlist(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(wishlist));
  }, [wishlist]);

  const wishlistSet = useMemo(() => new Set(wishlist), [wishlist]);

  const toggleWishlist = (id) => {
    setWishlist((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id]));
  };

  return { wishlist, wishlistSet, toggleWishlist };
}
