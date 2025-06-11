const Item = ({ country }) => {
  return (
    <button className="county-item">
      <img src={country.flagUrl} />
      {country.name}
    </button>
  );
};

const CountriesList = ({ countries }) => {
  return (
    <div>
      {countries.map((country) => {
        return <Item country={country} />;
      })}
    </div>
  );
};

// Item componentini CountriesList'te map'lerken key kullanmadığım için react benim yerime arrayIndexlerini sanki key={index} şeklinde yazmışım gibi kullanacak.
// CountryList re-render olduğunda, Item'lar da key'leri değişmediği için re-render olacak.
// React.memo kullanırsam gereksiz re-render'ların da önüne geçebilirim.

// index yerine random id kullanırsam:
const CountriesListWithRandomKey = ({ countries }) => {
  return (
    <div>
      {countries.map((country) => (
        <Item country={country} key={crypto.randomUUID()} />
      ))}
    </div>
  );
};

// re-render'da aynı key hiçbi zaman korunmayacağı için react önceki render'daki elemanlar silinmiş ve yerine yenileri gelmiş olarak algılayacak.
// öncekileri un-mount edecek ve yeni değerleri re-mount edecek. Bu re-render'a göre çok daha masraflı bir iş.
// re-render olmadığı için de React.memo çalışmayacak.