import SearchImage from '../assets/icon-search.svg';

export default function Form() {
  return (
    <form>
      <img src={SearchImage} alt="Search Icon" />
      <input type="text" placeholder="Search Github username..." />
      <button type="submit">Search</button>
    </form>
  );
}
