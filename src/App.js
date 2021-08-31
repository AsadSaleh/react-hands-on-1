// JSX => mirip HTMl, tapi bisa jalanin JavaScript

import { useEffect, useState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

// function App() {
//   const [statenya, fungsiUntukNgubahStatenya] = useState(false);
//   return (
//     <div>
//       <h1>Halo, selamat datang di React!</h1>

//       <MyButton color="red" onClick={() => fungsiUntukNgubahStatenya(false)}>
//         Tutup
//       </MyButton>

//       <MyButton color="green" onClick={() => fungsiUntukNgubahStatenya(true)}>
//         Buka
//       </MyButton>

//       <MyButton
//         onClick={() => {
//           if (statenya === true) {
//             fungsiUntukNgubahStatenya(false);
//           } else {
//             fungsiUntukNgubahStatenya(true);
//           }
//         }}
//       >
//         Toggle
//       </MyButton>

//       {statenya === true ? <h1>Halo guys!</h1> : null}
//     </div>
//   );
// }

// function MyButton({ color, children, onClick }) {
//   return (
//     <button
//       onClick={onClick}
//       style={{ backgroundColor: color }}
//       className="my-button"
//     >
//       {children}
//     </button>
//   );
// }

function App() {
  // Menampilkan data dari jsonplaceholder api:
  // https://jsonplaceholder.typicode.com/photos

  // 1. Ambil datanya
  // 2. Simpen datanya di dalam suatu state
  // 3. Buat tampilan bergantung kepada state tersebut.
  const [photos, setPhotos] = useState([]);

  async function ambilDataDariApi() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos?albumId=1"
      );
      const data = await response.json();
      setPhotos(data);
    } catch (e) {
      console.log(e);
      setPhotos([]);
    }
  }

  useEffect(() => {
    ambilDataDariApi();
  }, []);

  console.log("photos kita apa sih sekarang");
  console.log(photos);

  return (
    <div>
      <h1>Selamat datang di Web Koleksi Gambar</h1>
      <div className="">
        {photos.map((photo, index) => {
          return (
            <div className="card">
              <img
                className="card-image"
                src={`https://picsum.photos/id/${photo.id}/200/300`}
              />
              <h4>{photo.title}</h4>
              <p>Album id: {photo.albumId}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// function App() {
//   return (
//     <BrowserRouter>
//       <div>
//         <h1>Contoh Web dengan 3 halaman</h1>
//       </div>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Menuju Home</Link>
//           </li>
//           <li>
//             <Link to="/about">Menuju About</Link>
//           </li>
//           <li>
//             <Link to="/contact-us">Menuju Contact Us</Link>
//           </li>
//         </ul>
//       </nav>
//       <Route path="/" exact>
//         <HalamanHome />
//       </Route>
//       <Route path="/about">
//         <h4>Ini halaman About</h4>
//       </Route>
//       <Route path="/contact-us">
//         <h4>Ini halaman Contact Us</h4>
//       </Route>
//     </BrowserRouter>
//   );
// }

// function HalamanHome() {
//   return <div>bla bla bla....</div>;
// }

export default App;
