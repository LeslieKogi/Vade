import { useState, useEffect } from 'react'

const SHEET_URL = 'https://script.google.com/macros/s/AKfycbwnGliU46Sbr1WZwkCsY5YRgtLHOlA7pkdX4E1c9mbS_oOpMdNXWflB50mPdBcK9UGv/exec' 

export function useProducts() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(SHEET_URL)
      .then(r => r.json())
      .then(data => {
        // normalise — price comes as string from sheets
        const normalised = data.map(p => ({
          ...p,
          id: Number(p.id),
          price: Number(p.price),
        }))
        setProducts(normalised)
      })
      .catch(() => setError('Could not load products.'))
      .finally(() => setLoading(false))
  }, [])

  return { products, loading, error }
}