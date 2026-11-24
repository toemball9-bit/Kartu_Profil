export function KartuProfil(props) { 
  return (
      <div className="daftar-kartu">
        <div className="kartu">
          <h2 className="text-red-500">{props.nama}</h2>
          <p>Kelas: {props.kelas}</p>
          <p>Hobi: {props.hobi}</p>
        </div>
      </div>
  )
}
