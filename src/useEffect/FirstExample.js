import {useState, useEffect} from 'react'
// useEffect bir component üzerindekii yaşam döngülerini takip etmemizi sağlar

const App = () => {
    const [number, setNumber] = useState(0)
    const [name, setName] = useState("Merve")


    useEffect(() => {
      console.log("component yüklendi");
    }, [])          // [] boş array verilirse sadece bir kere çalışır component mount edildiğinde yakalar demek oluyor



    useEffect(() => {
      console.log("number state güncellendi");
    }, [number])          // number state'i biri değiştiğinde çalışır yani hangi durum state değiştiğinde yakalamak istiyorsam [] içine o yazılır

    
    useEffect(() => {
      console.log("name state güncellendi");
    }, [name])          // number state'i biri değiştiğinde çalışır yani hangi durum state değiştiğinde yakalamak istiyorsam [] içine o yazılır

/*
    useEffect(() => {
      console.log("number state güncellendi");
    }, [number, name])          // number veya name state'lerinden biri değiştiğinde çalışır istediğimiz kadar state ekleyebiliriz
*/

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number+1)}>Click</button>

      <hr />

      <h1>{name}</h1>
      <button onClick={() => setName("David")}>Click</button>

    </div>
  )
}

export default App 
