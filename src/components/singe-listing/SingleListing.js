import "./SingeListing.scss";
import { useFilters } from "../../context";

export const SingleListing = ({ listing }) => {

  const { filters, setFilters } = useFilters();

  const selectFilter = (e) => {
    if (filters.includes(e.target.innerText)) {
      return filters;
    } else {
      setFilters([...filters, e.target.innerText])
    }
    console.log(filters)
  }


  return (
    <article className="listing">
      <img className="company-logo" src={listing.logo} alt={listing.company} />
      <div className="listing-header">
        <span className="company-name">{listing.company}</span>
        {listing.new && <span className="highlight-label new-label">New!</span>}
        {listing.featured && <span className="highlight-label featured-label">Featured</span>}
      </div>
      <div className="listing-body">
        <h2 className="listing-title">{listing.position}</h2>
        <div className="listing-details">
          <span>{listing.postedAt}</span>
          <span>{listing.level}</span>
          <span>{listing.location}</span>
        </div>
      </div>
      <hr />
      <fieldset className="label-container">
        <legend className="sr-only">Position details:</legend>
        <button className="job-label" onClick={selectFilter}>{listing.role}</button>
        <button className="job-label" onClick={selectFilter}>{listing.level}</button>
        {listing.languages.map(language => (
          <button className="job-label" onClick={selectFilter}>{language}</button>
        ))}
        {listing.tools.map(tool => (
          <button className="job-label" onClick={selectFilter}>{tool}</button>
        ))}
      </fieldset>
    </article>
  );
}