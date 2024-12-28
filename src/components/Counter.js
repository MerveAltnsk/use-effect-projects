import {useState, useEffect} from 'react'
// useEffect bir component üzerindekii yaşam döngülerini takip etmemizi sağlar

const App = () => {
    const [number, setNumber] = useState(0)


    useEffect(() => {
      console.log("component yüklendi");

      setInterval(() => {
        setNumber((n) => n+1)
      },1000)       //setInterval istediğimiz değeri her saniye arttırmamızı sağlar
      // number+1 yerine n kullanabiliriz bu parametre de number demek

      return () => console.log("component unmount");    //component silindiğinde çalışır bu return component unmount edildiği anı yakalayabiliyrpuz


    }, [])          // [] boş array verilirse sadece bir kere çalışır component mount edildiğinde yakalar demek oluyor



    useEffect(() => {
      console.log("number state güncellendi");
    }, [number])          // number state'i biri değiştiğinde çalışır yani hangi durum state değiştiğinde yakalamak istiyorsam [] içine o yazılır

    

  return (
    <div>

      <h1>{number}</h1>
      <button onClick={() => setNumber(number+1)}>Click</button>

    </div>
  )
}

export default App 
